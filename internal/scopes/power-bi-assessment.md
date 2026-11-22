# Power BI Assessment — delivery playbook

Internal. Client-facing scope: `/pricing/power-bi-assessment`.

- **Price:** $5,000 fixed.
- **Timeline:** 2 weeks.
- **Target hours:** 40 to 55 (one lead, part-time over two weeks).
- **Goal:** ship working dashboards on the client's real data, produce the plan
  and the fixed quote for the full build, and qualify the opportunity.

## Pre-engagement checklist

- Signed order and the fixed-price terms (50% at start is waived for the
  assessment; invoiced in full on booking).
- Named client leads from finance and operations.
- A Microsoft 365 or Azure tenant. If none, note it; tenant setup is quoted in
  the full build, not here.
- Agreement on the one or two data sources we will connect for the slice.

## Access we provision

- A time-boxed guest or member account in the client tenant, or a dedicated
  service principal for the sources.
- A single Power BI workspace (`Kadmoon — Assessment`), Contributor role for the
  team.
- Read-only access to the one or two sources agreed (a database read role, a
  NetSuite/QuickBooks/Dynamics read role, or a file share).
- All access is time-boxed to the two weeks and removed at handover.

## Process

### Week 1 — map and connect

1. Decision workshop (90 min): the decisions the leads make weekly and monthly,
   and the numbers behind them. Capture the measures, the grain, and the owner
   of each number.
2. Source workshop (60 min): where each number lives, how it is pulled today,
   and the condition of the data.
3. Connect the agreed slice in the client tenant. Land raw data, no transforms
   in the report.
4. Draft the measure list (one definition per measure) for the slice.

### Week 2 — model and ship

1. Build a first governed semantic model for the slice (star schema, dated,
   measures defined once).
2. Build two or three working dashboards on the real data.
3. Review session with the leads. Note gaps and corrections.
4. Write the architecture and delivery plan and the fixed quote for the full
   build.
5. Readout session: walk the dashboards and the plan, remove access.

## Scripts and templates we reuse

- Tenant/workspace bootstrap checklist.
- Measure-definition template (name, definition, grain, source, owner).
- Star-schema starter (date table, key dimensions).
- Assessment report template (architecture, risks, sources, hours, quote).

## Functionality covered

- One governed model on a data slice.
- Two to three dashboards.
- No row-level security, no scheduled refresh in production, no training. Those
  are the full build.

## QA / acceptance (internal)

- Core numbers tie to the source for the slice.
- Each dashboard opens on the client's own data.
- The plan and the fixed quote are written and reviewed before the readout.

## Change requests

- The assessment scope is fixed. New sources or dashboards beyond the slice are
  noted in the plan and priced in the full build, not added here.

## Handover artifacts

- The workspace and the model in the client tenant.
- The measure list for the slice.
- The architecture and delivery plan.
- The fixed quote for the full build.
