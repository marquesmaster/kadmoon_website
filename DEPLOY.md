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
# Then edit .env and fill the SMTP_* values so lead emails are sent:
nano .env
```

SMTP works with most providers (Zoho, Fastmail, Gmail app password, Amazon SES,
etc.). Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and `CONTACT_TO`.
If you leave SMTP empty, leads are still stored in the database; no email is
sent.

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
certbot --nginx -d kadmoon.com -d www.kadmoon.com --redirect --agree-tos -m hello@kadmoon.com --no-eff-email
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
  'SELECT "createdAt", name, company, need FROM "Lead" ORDER BY "createdAt" DESC LIMIT 20;'
```

## Optional: Google Analytics

`NEXT_PUBLIC_GA_ID` is baked in at build time. To enable it, build with:

```bash
docker compose build --build-arg NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX kadmoon
docker compose up -d
```

(Requires adding the build arg to the Dockerfile if you want it; ask and it can
be wired in.)

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
