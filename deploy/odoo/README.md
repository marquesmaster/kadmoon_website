# Odoo back-office for Kadmoon

Self-hosted **Odoo 18 Community** (open source, no license or purchase needed)
running as its own Docker stack on the same VPS as the website, reverse-proxied
by nginx under `app.kadmoon.com`. Website leads flow into Odoo CRM automatically
once the website `.env` is pointed at this instance.

Community edition covers the back-office we need: **CRM, Sales/Quotations,
Invoicing, Project, Timesheets, Contacts, Discuss, Calendar**. Some apps are
Enterprise-only (full Accounting, Studio, Sign, Documents, Marketing
Automation, Field Service, advanced Helpdesk/HR). We can start on Community and
only consider Enterprise if we need those specific modules.

## 1. DNS

Point an `A` record `app.kadmoon.com` -> the VPS IP.

## 2. Bring up the stack

```bash
cd /opt/kadmoon-website/deploy/odoo        # after git pull on the VPS
cp .env.example .env                        # set ODOO_DB_PASSWORD (long random)
cp config/odoo.conf.example config/odoo.conf # set admin_passwd (long random)
docker compose up -d
docker compose logs -f odoo                  # wait for "HTTP service running"
```

Odoo now listens on `127.0.0.1:8069` (not public yet).

## 3. Create the database (once)

`list_db = False` hides the DB manager, so create the DB from the CLI:

```bash
docker compose exec odoo odoo -d kadmoon -i base --stop-after-init \
  --db_host=odoo-db --db_user=odoo --db_password="$ODOO_DB_PASSWORD"
docker compose restart odoo
```

(Or temporarily set `list_db = True`, create `kadmoon` via the web wizard, then
set it back to `False` and restart.)

## 4. nginx + TLS

```bash
sudo cp nginx/app.kadmoon.com.conf /etc/nginx/sites-available/app.kadmoon.com
sudo ln -s /etc/nginx/sites-available/app.kadmoon.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d app.kadmoon.com     # issues the cert, adds the 443 block
```

Open `https://app.kadmoon.com`, finish the setup wizard, and install the apps
you want (start with **CRM**).

## 5. Connect the website's contact form to Odoo CRM

In Odoo: top-right avatar -> **Preferences -> Account Security -> New API Key**.
Copy the key (you only see it once).

On the VPS, in the website `.env` (`/opt/kadmoon-website/.env`), set:

```
ODOO_URL=https://app.kadmoon.com
ODOO_DB=kadmoon
ODOO_LOGIN=you@kadmoon.com
ODOO_API_KEY=<the API key you just created>
```

Then rebuild the website so it picks up the new env:

```bash
cd /opt/kadmoon-website
docker compose up -d --build
```

From now on every contact-form submission is stored (Postgres), emailed, **and**
created as a `crm.lead` in Odoo. The integration is best-effort: if Odoo is down
the form still succeeds. Credentials are never logged. Use an **API key**, never
your account password.

## Updating / backups

- Update: `docker compose pull && docker compose up -d` (pins to `odoo:18`).
- Backup: dump the DB (`docker compose exec odoo-db pg_dump -U odoo kadmoon`) and
  archive the `odoo-web-data` volume (filestore: attachments/images).

## Resource note

Odoo comfortably wants ~2 GB RAM. It shares the VPS with the website + its
Postgres, so watch memory; `workers` in `odoo.conf` is set to 2 for a small box.
