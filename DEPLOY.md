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
git clone -b main https://github.com/marquesmaster/kadmoon_website.git kadmoon-website
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

`GOOGLE_SITE_VERIFICATION` can stay empty for now; it is only needed if you
verify Search Console with the HTML-tag method (step 7a), and it requires a
rebuild once set. DNS verification needs nothing here.

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
certbot --nginx -d kadmoon.com -d www.kadmoon.com --redirect --agree-tos -m commercial@kadmoon.com --no-eff-email
```

## 7. Google Search Console (go-live SEO)

Do this once the site is live over HTTPS at `https://kadmoon.com`. It is how
Google discovers and indexes every page; the site already ships `sitemap.xml`,
`robots.txt` (which points to the sitemap), canonical tags, and a `www -> non-www`
301, so the job is to register the property, verify it, and submit the sitemap.

### 7a. Add the property and verify

Open [search.google.com/search-console](https://search.google.com/search-console)
and add a property. Any one verification method is enough; pick one:

- **Domain property via DNS TXT (recommended).** Choose "Domain", enter
  `kadmoon.com`, and Google shows a `TXT` record. Add it at the DNS host
  (Hostinger), wait for propagation, then click Verify. This covers http, https,
  `www`, and every subdomain at once, and needs no rebuild or redeploy.

  ```
  TXT   @   google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  ```

- **HTML meta tag (no DNS access).** Choose "URL prefix", enter
  `https://kadmoon.com`, pick the "HTML tag" method, copy the token (the
  `content="..."` value), put it in `.env` and rebuild:

  ```bash
  cd /opt/kadmoon-website
  sed -i "s/^GOOGLE_SITE_VERIFICATION=.*/GOOGLE_SITE_VERIFICATION=YOUR_TOKEN/" .env
  docker compose up -d --build     # the token bakes into every page's <head>
  curl -s https://kadmoon.com | grep google-site-verification   # confirm it renders
  ```

  Then click Verify in Search Console.

- **HTML file (no DNS access, no rebuild-arg).** Download the `googleXXXX.html`
  file Google offers, drop it in `public/`, commit, and redeploy. It is then
  served at `https://kadmoon.com/googleXXXX.html`. Then click Verify.

### 7b. Submit the sitemap

In Search Console: **Sitemaps -> Add a new sitemap -> `sitemap.xml` -> Submit**.
Google reads `https://kadmoon.com/sitemap.xml`, which is generated at build and
lists every page, blog post, and docs page. Confirm it loads first:

```bash
curl -sI https://kadmoon.com/sitemap.xml     # expect 200, content-type xml
curl -s  https://kadmoon.com/robots.txt      # should name the sitemap
```

### 7c. Nudge the first pages in

Use **URL Inspection** on the home page and a few priority URLs (`/platform`,
`/pricing`, `/contact`, two or three cornerstone blog posts) and click "Request
indexing" so they are crawled sooner. The rest Google picks up from the sitemap
over the following days.

### 7d. Post-launch checks

- **Pages / Coverage** report over the next week: pages should move to "Indexed".
  Investigate anything under "Not indexed" (usually just "Discovered, not yet
  indexed", which resolves on its own).
- Confirm no duplicate `www` property is competing; the 301 already consolidates
  it, so register `kadmoon.com` (or the Domain property), not `www`.
- Optional: add the same site to [Bing Webmaster Tools](https://www.bing.com/webmasters),
  which can import the property and sitemap directly from Search Console.

## Updating the site later

```bash
cd /opt/kadmoon-website
git pull origin main
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
