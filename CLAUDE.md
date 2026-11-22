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
  The target tiers from the owner's plan: **Assessment $4,000 / 2 weeks**,
  **Dashboard Build from $15,000 / 4–6 weeks**, **Fabric Data Platform from
  $40,000 / 8–12 weeks**, **Managed Power BI from $3,000/month**. Bracketed
  limits in the plan (sources, report pages, hours) are owner decisions; do not
  invent them.
- Primary CTA everywhere is **"Book a 30-minute call"**. There is **no booking
  link wired yet**, so the button points to `/contact` until the owner provides a
  Microsoft Bookings or Calendly URL; then point it there. **No "Client sign-in".**
  Existing clients who need access or a new report use `/contact`.

## Hard content rules

- **Brazil and Fynx are now stated honestly, not hidden** (this reverses the
  earlier no-Brazil rule). The delivery team is based in Brazil and works US
  business hours, through the affiliate **Fynx**; say so on About and the FAQ.
  The `clientLogos` band is framed as **"Our team's work in Brazil, through our
  affiliate Fynx"**. Still **never say "US-based team"** — it is false.
- **Never invent clients, testimonials, logos, team members, case studies, or
  numbers.** `testimonials`, `clientLogos`, and any team array in `lib/content.ts`
  render ONLY when populated with real, owner-provided, approved data. Real Fynx
  case studies require **written client permission**; until provided, the cases
  stay illustrative and clearly labeled. Team names, photos, LinkedIn, and
  certifications come from the owner only.
- **No unverifiable numbers.** Do not state years, client counts, or project
  counts the owner has not confirmed. Real track record is attributed to the team
  via Fynx, with real figures only; otherwise leave the numbers out.
- **Do not use "Sample", "Example", "illustrative", or "figures are
  illustrative" labels** on the product-UI dashboards or report cards (owner
  preference). The mock figures stay as representative product UI. The hard line
  still holds: **never attribute a figure to a named real client or present it as
  a specific client's real result.** The case studies state plainly that they are
  "not based on specific clients"; keep that honest framing. Real case studies
  with real numbers require written client permission.
- Name Microsoft products factually (we build on them). **Do not say "Microsoft
  Partner" or claim a partnership tier, certification, or Solutions-Partner status
  before that designation actually exists and is verified.**
- Apply the humanizer style: no em/en dashes, no rule-of-three padding, no hype
  or buzzwords, plain professional English.

## Where content lives (data-driven)

- `lib/content.ts` — nav menu, hero, stats, capabilities, comparison, faq,
  footer, `services[]` (now just `power-bi` + `microsoft-fabric`),
  `serviceAnalytics` (platform→cases tie-in), `powerBiForFinance` (the finance
  landing page), `pricing`, `assessment`, `analyticsSolutions`, etc. The
  `industryPages[]`/`industries` exports are retired (the `/industries` pages and
  home section were removed); do not render them.
- `lib/cases/studies.ts` — case studies (`kind: 'analytics' | 'software'`),
  multi-vendor `dataSources`, inline `metrics`.
- `lib/docs.ts` — docs hub content (methodology, data integration, security,
  KPI library, glossary). Rendered at `/docs` and `/docs/[slug]`.
- Global search index: `app/search-index.json/route.ts` (static), overlay in
  `components/SearchOverlay.tsx`.

## Design

- Violet palette: CSS variables in `app/globals.css`, mapped in
  `tailwind.config.ts` (paper/mist/ice/ink/ink-2/ink-3/navy/accent/line).
  Accent (sole CTA color) is `#6D28D9`; the darkest token (`navy`, used for dark
  sections) and `themeColor` are `#1B0E33`. Changing a token value cascades
  site-wide. A lighter violet `#8B5CF6` (gradients) / `#A78BFA` (accent on dark)
  is used where a token does not reach.
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
