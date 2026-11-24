# Kadmoon website — working notes

Kadmoon, Inc. is a **US consultancy that builds Power BI and Microsoft Fabric
for finance and operations teams**. One-liner: *Power BI and Microsoft Fabric
for finance and operations teams. Fixed scope, fixed price, built in your own
Microsoft tenant.* We connect the systems a business already runs (ERP and
spreadsheets), build one governed Power BI model, and ship the dashboards
finance and operations open daily. Everything is delivered in the client's own
Microsoft tenant, and the client owns it. The market is the **United States**,
in English.

**Delivery model (state it honestly, never hide it):** Kadmoon is a US company.
The **senior delivery team is based in Brazil and works US business hours**, and
it is the team behind our affiliate **Fynx**. São Paulo is 1 to 2 hours ahead of
US Eastern Time, so the US business day is covered. Say "a senior team working US
business hours" and name Brazil and Fynx plainly on About and the FAQ. **Never
say "US-based team".**

> This site is being repositioned from a broad 6-service / 7-industry Microsoft
> shop to the focused Power BI + Fabric for finance & operations above. Some
> surfaces may still carry older copy mid-migration; when you touch one, move it
> toward this positioning. The structural changes (removed city/industry pages,
> narrowed services) are already in.

Stack: Next.js 14 (App Router) + TypeScript + Tailwind, statically generated,
deployed via Docker on a Hostinger VPS.

## Positioning (keep every surface consistent)

- **Lead with Power BI, framed for finance and operations.** Dashboards and
  reports, governed semantic models, migration (legacy BI and spreadsheets to
  Power BI), embedded analytics, and Power BI governance (row-level security,
  workspaces, lineage). The buyer is a CFO, Controller, VP Finance, Head of
  FP&A, or COO. `/power-bi-for-finance` is the finance landing page (it replaced
  the retired `/industries` section).
- **Two service lines only:** **Power BI** (lead) and **Microsoft Fabric** (data
  engineering: lakehouse, pipelines, the governed model Power BI sits on; slug
  `/services/microsoft-fabric`). **Power Platform and Copilot/AI are retired as
  standalone services** — Copilot is at most a feature inside Power BI
  ("Copilot-ready models"); do not add them back as services or nav items.
- Data comes from the systems clients already run — **QuickBooks, NetSuite,
  Dynamics 365 Business Central, Sage Intacct, SQL Server, Salesforce, Excel,
  SharePoint, APIs** — and the analytics is delivered on the Microsoft stack
  (Power BI, Fabric, Azure) **in the client's own tenant**.
- Market is the **United States**, in English. Verticals are use cases; finance
  and operations is the frame, never a different industry headline.
- **Two engagement models:** **by project** (fixed scope, defined deliverables,
  milestone billing) and a **monthly subscription** branded **"Managed Power BI"**
  (the plan also calls it "Managed BI"; keep "Managed Power BI" as the canonical
  name and keep the `monthly-subscription` doc anchor/slug stable). The **Power
  BI assessment** is the paid on-ramp (a short first project), not a third model.
- **Published, fixed prices** (this reverses the earlier no-public-prices rule).
  The live published tiers (the owner's mid-market choice): **Assessment $5,000 /
  2 weeks**, **Dashboard Build from $20,000 / 4–6 weeks**, **Fabric Data Platform
  from $45,000 / 8–12 weeks**, **Managed Power BI from $3,500/month**. These are
  the values in `pricing`/`pricingDetail`; keep them in sync. Bracketed limits in
  the plan (sources, report pages, hours) are owner decisions; do not invent them.
- Primary CTA everywhere is **"Book a 30-minute call"**. The booking link is
  wired: the CTA points to `siteConfig.bookingUrl` (the owner's Microsoft Bookings
  URL). Use `siteConfig.bookingUrl` for the primary CTA, not `/contact`. **No
  "Client sign-in".** Existing clients who need access or a new report use
  `/contact` (still the secondary contact route).

## Hard content rules

- **Brazil and Fynx are now stated honestly, not hidden** (this reverses the
  earlier no-Brazil rule). The delivery team is based in Brazil and works US
  business hours, through the affiliate **Fynx**; say so on About and the FAQ.
  The `clientLogos` band is framed as **"Our team's work in Brazil, through our
  affiliate Fynx"**. Still **never say "US-based team"** — it is false.
- **Never invent clients, testimonials, logos, team members, case studies, or
  numbers.** `testimonials`, `clientLogos`, and any team array in `lib/content.ts`
  render ONLY when populated with real, owner-provided, approved data. Real Fynx
  case studies with a named client require **written client permission**. The
  case studies render at `/cases` as **representative builds** ("a finance
  team...") that state plainly they are **not based on specific clients** and
  describe what the client receives in the present tense (never "anonymized",
  which implies a real client, and never a past-tense claim of delivered work
  for a specific client); until a client gives written permission, no case names
  a real client or presents its figures as that client's real result. Team
  names, photos, LinkedIn, and certifications come from the owner only.
- **No unverifiable numbers.** Do not state years, client counts, or project
  counts the owner has not confirmed. Real track record is attributed to the team
  via Fynx, with real figures only; otherwise leave the numbers out.
- **Do not use "Sample", "Example", "illustrative", "demo", or "figures are
  illustrative" labels** on the product-UI dashboards, report cards, or the
  `/cases` pages (owner preference: these read as cases, not demos). The mock
  figures stay as representative product UI. The hard line still holds: **never
  attribute a figure to a named real client or present it as a specific client's
  real result.** The case studies state plainly, once and understatedly, that
  they are "not based on specific clients"; keep that honest framing. Real case
  studies with real numbers require written client permission.
- Name Microsoft products factually (we build on them). **Do not say "Microsoft
  Partner" or claim a partnership tier, certification, or Solutions-Partner status
  before that designation actually exists and is verified.**
- Apply the humanizer style: no em/en dashes, no rule-of-three padding, no hype
  or buzzwords, plain professional English.

## Where content lives (data-driven)

- `lib/content.ts` — nav menu, hero, stats, capabilities, comparison, faq,
  footer, `services[]` (now just `power-bi` + `microsoft-fabric`),
  `serviceAnalytics` (platform→cases tie-in), `powerBiForFinance` (the finance
  landing page), `pricing` (four published tiers, each with a `slug`),
  `pricingDetail` (client-facing scope per tier, rendered at `/pricing/[tier]`),
  `assessment`, `analyticsSolutions`, etc. The `industryPages[]`/`industries`
  exports are retired (the `/industries` pages and home section were removed);
  do not render them.
- `internal/scopes/*.md` — the team's delivery playbooks per tier (process,
  access, scripts, QA, hours). **Internal company asset; not part of the Next.js
  app, never served or linked from the site.** Keep in sync with `pricingDetail`:
  the site page states what the client receives; the playbook states how we
  produce it.
- `lib/cases/studies.ts` — case studies (`kind: 'analytics' | 'software'`),
  multi-vendor `dataSources`, inline `metrics`.
- `lib/docs.ts` — docs hub content (methodology, data integration, security,
  KPI library, glossary). Rendered at `/docs` and `/docs/[slug]`.
- Global search index: `app/search-index.json/route.ts` (static), overlay in
  `components/SearchOverlay.tsx`.

## Design

- Violet palette: CSS variables in `app/globals.css`, mapped in
  `tailwind.config.ts` (paper/mist/ice/ink/ink-2/ink-3/navy/accent/line).
  Accent (sole CTA color) is `#6D28D9`; the dark-section token (`navy`) and
  `themeColor` are `#2E1065` (a vivid deep violet, not near-black, so the dark
  bands read as purple). Changing a token value cascades site-wide. A lighter
  violet `#8B5CF6` / `#A78BFA` is used for glows, gradients and eyebrow text on
  dark sections. There is no blue anywhere; if you find a `rgba(20,92,230,…)` or
  `#8FB8FF`, it is an ocean-era leftover to convert to violet.
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
