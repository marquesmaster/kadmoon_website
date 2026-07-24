# Deploy — Kadmoon site on a VPS (Docker + Postgres + nginx + SSL)

Ubuntu VPS, served behind host nginx with Let's Encrypt TLS. Docker Compose
runs two containers: the Next.js app (`127.0.0.1:3005`) and a dedicated
Postgres for contact-form leads. Nginx reverse-proxies the domain to the app.

Replace before running:
- `YOUR_PAT` — GitHub classic personal access token (`repo` scope). Better:
  clone without the token in the URL and let git prompt (see step 2).
- `kadmoon.com` — your domain.

## 0. DNS (once)

```
A    kadmoon.com        -> 2.24.203.153
A    www.kadmoon.com    -> 2.24.203.153
```

## 1. Remove the old project

```bash
cd /opt
docker rm -f kadmoon-website kadmoon-db 2>/dev/null || true
rm -rf /opt/kadmoon-website
```

## 2. Clone the new project

```bash
cd /opt
git clone -b claude/kadmoon-website-build-xchjwo https://github.com/marquesmaster/kadmoon_website.git kadmoon-website
# git prompts: Username = marquesmaster, Password = your PAT
cd /opt/kadmoon-website
```

## 3. Configure secrets

```bash
cp .env.example .env
# Generate strong random values:
sed -i "s/^POSTGRES_PASSWORD=.*/POSTGRES_PASSWORD=$(openssl rand -hex 24)/" .env
sed -i "s/^LEAD_IP_SALT=.*/LEAD_IP_SALT=$(openssl rand -hex 24)/" .env
# Set the Web3Forms access key so lead emails are sent (recommended):
sed -i "s/^WEB3FORMS_ACCESS_KEY=.*/WEB3FORMS_ACCESS_KEY=YOUR_WEB3FORMS_KEY/" .env
# Review the rest if needed:
nano .env
```

Email provider (first one set wins): **Web3Forms**, then Resend, then SMTP.
The recommended path is Web3Forms: create an access key at web3forms.com tied
to the inbox that should receive leads, and set `WEB3FORMS_ACCESS_KEY`. The key
stays server-side and is never exposed to the browser. Leads are also stored in
Postgres; if every email provider is empty the lead is still saved, just not
emailed.

## 4. Build and run

```bash
docker image prune -f          # free disk if tight
docker compose up -d --build   # builds app, starts Postgres + app
docker compose ps              # both should be Up (db healthy)
curl -I http://127.0.0.1:3005  # expect HTTP/1.1 200
```

The app container runs `prisma db push` on start, so the `Lead` table is
created automatically on first boot.

## 5. nginx reverse proxy

If a `kadmoon.com` vhost already exists (from a previous deploy), just point it
at the new port and reload:

```bash
sed -i --follow-symlinks 's#127.0.0.1:[0-9]\+#127.0.0.1:3005#' /etc/nginx/sites-enabled/kadmoon.com
nginx -t && systemctl reload nginx
```

Otherwise create `/etc/nginx/sites-available/kadmoon.com`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name kadmoon.com www.kadmoon.com;
    location / {
        proxy_pass http://127.0.0.1:3005;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
ln -sf /etc/nginx/sites-available/kadmoon.com /etc/nginx/sites-enabled/kadmoon.com
nginx -t && systemctl reload nginx
ufw allow 'Nginx Full' 2>/dev/null || true
```

The `X-Forwarded-For` header is required: the app derives the rate-limit key
from it.

## 6. HTTPS (skip if the cert already exists)

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d kadmoon.com -d www.kadmoon.com --redirect --agree-tos -m comercial@kadmoon.com --no-eff-email
```

## Updating the site later

```bash
cd /opt/kadmoon-website
git pull
docker compose up -d --build
docker image prune -f
```

## Reading captured leads

```bash
docker exec -it kadmoon-db psql -U kadmoon -d kadmoon -c \
  'SELECT "createdAt", name, email, company, need FROM "Lead" ORDER BY "createdAt" DESC LIMIT 20;'
```

## Analytics (Google Tag Manager)

GTM (container `GTM-WK2T78RK`) loads on every page with Google Consent Mode set
to denied by default; the cookie banner grants consent on accept. No deploy
step is needed. Configure tags (e.g. GA4) inside the GTM console and publish.
To use a different container, set `NEXT_PUBLIC_GTM_ID` at build time.

## Security notes

- The app sends CSP, HSTS, X-Frame-Options: DENY, Referrer-Policy, and
  Permissions-Policy on every response.
- `/api/contact` validates with zod, enforces a honeypot + timing trap, rate
  limits to 5 requests / 10 min per IP, stores a hashed IP only, and never
  leaks whether a submission was dropped.
- Postgres is not published to the host; only the app reaches it over the
  compose network.
- Add DMARC and SPF DNS records for kadmoon.com to improve email deliverability
  and stop spoofing (these are DNS records, not part of this repo).
