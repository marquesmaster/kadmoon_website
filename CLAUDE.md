# Kadmoon website — working notes

Kadmoon is a **US Microsoft data & analytics consultancy, led by Power BI
services**. The site leads with **Power BI** (dashboards, semantic models,
migration, embedded, governance); the surrounding Microsoft work (Power
Platform, Fabric & Azure data engineering, Copilot & AI) is positioned as what
we build **around** Power BI. Everything is delivered in the client's own
Microsoft tenant, and the client owns it. The market is the United States, in
English. Foreign trade is retired as the focus; it is at most a use case.

Stack: Next.js 14 (App Router) + TypeScript + Tailwind, statically generated,
deployed via Docker on a Hostinger VPS.

## Positioning (keep every surface consistent)

- **Lead with Power BI.** Dashboards and reports, governed semantic models,
  report and migration work (legacy BI and spreadsheets to Power BI), embedded
  analytics, and Power BI governance (row-level security, workspaces, lineage).
- Four service lines, in this order of prominence: **Power BI** (lead), then
  **Power Platform** (Power Apps + Power Automate: apps and automation on the
  data), **data engineering on Microsoft Fabric & Azure** (lakehouse, pipelines,
  the governed model Power BI sits on), and **Copilot & AI on your data**
  (Copilot in Power BI, natural-language Q&A, AI-assisted insight).
- Data comes from the systems clients already run — **SQL Server, Dynamics 365,
  SAP, Oracle, NetSuite, Salesforce, Excel, SharePoint, APIs** — and the
  analytics is delivered on the Microsoft stack (Power BI, Fabric, Azure) **in
  the client's own tenant**.
- Market is the **United States**, in English. Do not reposition around a
  vertical; Power BI for US businesses is the frame, and verticals are use
  cases, never the headline.
- **Kadmoon is a boutique with two engagement models:** **by project** (fixed
  scope, defined deliverables, milestone billing) and a **monthly subscription**
  (recurring retainer: we run and evolve the client's Power BI). The **Power BI
  assessment** is the paid on-ramp (a short first project), not a third model.
  Keep pricing, services, and docs consistent with these two models.
- Primary CTA everywhere is **"Request a quote"** → `/contact`. There is no
  booking/scheduling tool. The top-bar secondary action is **"Client sign-in"**
  → Power BI (`app.powerbi.com`): the reports run in the client's own Microsoft
  tenant, so access is signing in there, not a Kadmoon login. Existing clients
  who need access provisioned or a new report use `/contact`.

## Hard content rules

- **Never reference Brazil or the Portuguese language** anywhere in site-facing
  content, copy, metadata, or data. **One approved exception:** the
  `groupExperience` band (`lib/content.ts`) may state the team/group's prior
  Microsoft track record (years, organizations served, solutions shipped) as
  cross-sector experience. Keep the exception limited to that band; do not
  reintroduce Brazil/Portuguese elsewhere.
- **Never invent clients, testimonials, or logos.** `testimonials` and
  `clientLogos` in `lib/content.ts` render only when populated; leave them empty
  until real, approved data is provided.
- All figures in cases/mocks are **illustrative** and must be labeled plainly as
  such ("Illustrative figures"); do not dress them up as a real client.
- Name Microsoft products factually (we build on them). Do not claim a
  partnership tier, certification, or Gold/Solutions-Partner status we have not
  verified.
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
PW_CHROME=/opt/pw-browsers/chromium npm run test:e2e   # stable symlink; the versioned path changes per container
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
