# Kadmoon website — working notes

Kadmoon is a **US analytics firm focused 100% on foreign trade**. The site
leads with **analytics** (what we deliver today); software (trade ERP, customs,
WMS, security vision) is positioned as the **roadmap** — "platforms we build" —
never the lead offer.

Stack: Next.js 14 (App Router) + TypeScript + Tailwind, statically generated,
deployed via Docker on a Hostinger VPS.

## Positioning (keep every surface consistent)

- Lead with analytics for foreign trade: landed cost & margin, duty & tariff
  exposure, shipment visibility & OTIF, customs & compliance analytics,
  inventory & warehouse analytics, executive control tower.
- Data comes from the systems clients already run — **SAP, Microsoft, Oracle,
  NetSuite, broker and carrier systems, EDI/ACE, spreadsheets** — and analytics
  is delivered on the Microsoft stack (Fabric, Power BI, Azure) **in the
  client's own tenant**.
- Software is "what we build on top of the data", introduced as it grows from
  the analytics. Do not make it the headline.
- Primary CTA everywhere is **"Request a quote"** → `/contact`. There is no
  booking/scheduling tool and no public login; "Request access" also → `/contact`
  (access is provisioned per engagement inside the client tenant).

## Hard content rules

- **Never reference Brazil or the Portuguese language** anywhere in site-facing
  content, copy, metadata, or data.
- **Never invent clients, testimonials, or logos.** `testimonials` and
  `clientLogos` in `lib/content.ts` render only when populated; leave them empty
  until real, approved data is provided.
- All figures in cases/mocks are **illustrative** and must be labeled as such
  ("Illustrative figures · fictitious client · under NDA").
- Apply the humanizer style: no em/en dashes, no rule-of-three padding, no hype
  or buzzwords, plain professional English.

## Where content lives (data-driven)

- `lib/content.ts` — nav mega-menu, hero, stats, capabilities, comparison, faq,
  footer, `services[]`, `serviceAnalytics` (platform→cases tie-in),
  `industryPages[]`, `analyticsSolutions`, etc.
- `lib/cases/studies.ts` — case studies (`kind: 'analytics' | 'software'`),
  multi-vendor `dataSources`, inline `metrics`.
- `lib/docs.ts` — docs hub content (methodology, data integration, security,
  KPI library, glossary). Rendered at `/docs` and `/docs/[slug]`.
- Global search index: `app/search-index.json/route.ts` (static), overlay in
  `components/SearchOverlay.tsx`.

## Design

- Ocean palette: CSS variables in `app/globals.css`, mapped in
  `tailwind.config.ts` (paper/mist/ice/ink/ink-2/ink-3/navy/accent/line).
  `themeColor` is `#07203A`. Changing a token value cascades site-wide.
- Fonts are **self-hosted** via `next/font/local` from `app/fonts/*.woff2`
  (Space Grotesk display, Inter sans, JetBrains Mono). **Do not switch back to
  `next/font/google`** — the build-time Google Fonts fetch flakes in CI and on
  the VPS build.

## Dev & checks (run before every push)

```
npm run build      # must compile; SSG prerenders all pages
npm run lint       # must be clean
PW_CHROME=/opt/pw-browsers/chromium-1194/chrome-linux/chrome npm run test:e2e
```

- The e2e smoke suite (`e2e/smoke.spec.ts`) asserts specific hero copy, routes,
  and the stat-band values. **Update those assertions when you change hero/stat
  copy or add/remove routes**, or CI goes red.
- The build uses a dummy `DATABASE_URL`; the contact route never needs a live DB
  for the smoke tests.

## Git / PR workflow

- `main` is the mainline. Develop on `claude/kadmoon-website-build-xchjwo`,
  branched fresh from `main`, and open PRs **into `main`** (draft first; a PR
  template lives at `.github/pull_request_template.md`).
- After a PR merges, that branch is finished: restart it from the latest `main`
  (`git fetch origin main && git checkout -B claude/kadmoon-website-build-xchjwo
  origin/main`) before the next change. Never stack new work on merged history.
- Repo-settings writes (e.g. changing the default branch) are blocked from this
  environment — the owner does those in GitHub Settings.
