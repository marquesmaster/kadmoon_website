# Deploy — Kadmoon site on a VPS (Docker + nginx + SSL)

Target: Ubuntu 24.04 VPS, served behind nginx with a Let's Encrypt
certificate. The app runs in a Docker container bound to `127.0.0.1:3005`;
nginx terminates TLS and reverse-proxies to it.

Replace before running:
- `YOUR_PAT` — a GitHub classic personal access token with `repo` scope.
- `kadmoon.com` — your domain (and `www.kadmoon.com` if you use it).

## 0. Prerequisite: DNS

Point the domain at the VPS before requesting a certificate:

```
A    kadmoon.com        -> 2.24.203.153
A    www.kadmoon.com    -> 2.24.203.153
```

Check it resolves: `dig +short kadmoon.com` should return `2.24.203.153`.

## 1. Remove the old project

```bash
cd /opt
docker rm -f kadmoon-website 2>/dev/null || true
rm -rf /opt/kadmoon-website
```

## 2. Clone the new project (classic PAT)

```bash
cd /opt
git clone -b claude/kadmoon-website-build-xchjwo \
  https://YOUR_PAT@github.com/marquesmaster/kadmoon_website.git kadmoon-website
cd /opt/kadmoon-website
```

## 3. Build and run the container

```bash
# Docker + compose plugin (skip if already installed)
docker --version || curl -fsSL https://get.docker.com | sh

# Free disk if it is tight (the VPS was ~86/100 GB):
docker image prune -f

# Build and start (binds to 127.0.0.1:3005)
docker compose up -d --build

# Verify it responds locally
curl -I http://127.0.0.1:3005
```

If `3005` is already used by another site, edit `docker-compose.yml`
(`"127.0.0.1:PORT:3000"`) and use the same PORT in the nginx config below.

## 4. nginx reverse proxy

```bash
apt update && apt install -y nginx
```

Create `/etc/nginx/sites-available/kadmoon.com`:

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
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Enable it and reload:

```bash
ln -sf /etc/nginx/sites-available/kadmoon.com /etc/nginx/sites-enabled/kadmoon.com
nginx -t && systemctl reload nginx
```

Make sure the firewall allows web traffic:

```bash
ufw allow 'Nginx Full' 2>/dev/null || true
```

## 5. HTTPS with Let's Encrypt

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d kadmoon.com -d www.kadmoon.com --redirect --agree-tos -m hello@kadmoon.com --no-eff-email
```

Certbot rewrites the nginx config for TLS and sets up auto-renewal. Test
renewal with `certbot renew --dry-run`.

## 6. Done

Visit `https://kadmoon.com`. Container auto-restarts on reboot
(`restart: unless-stopped`).

## Updating the site later

```bash
cd /opt/kadmoon-website
git pull
docker compose up -d --build
docker image prune -f
```

## Optional: contact form endpoint

The contact form falls back to `mailto:hello@kadmoon.com` with no config.
To send through a form service instead, set it before building:

```bash
# in docker-compose.yml, uncomment and set:
#   - NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/xxxx
docker compose up -d --build
```

## Troubleshooting

- Container logs: `docker compose logs -f`
- Nginx errors: `tail -f /var/log/nginx/error.log`
- Port in use: `ss -ltnp | grep 3005`
- Rebuild clean: `docker compose down && docker compose up -d --build`
