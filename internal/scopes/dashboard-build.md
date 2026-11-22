# Dashboard Build — delivery playbook

Internal. Client-facing scope: `/pricing/dashboard-build`.

- **Price:** from $20,000 (scoped in the assessment).
- **Timeline:** 4 to 6 weeks.
- **Target hours:** 120 to 180 depending on sources and report pages.
- **Goal:** one governed Power BI model and the report pages the team opens
  daily, with security, refresh, documentation, training, and 30 days of support.

## Pre-engagement checklist

- A completed assessment, or an equivalent scoping session, with the sources,
  measures, and report pages agreed.
- Signed order, 50% invoiced at start.
- Named owners per report area (finance, operations, sales).
- Confirmation of the data sources and the refresh windows.

## Access we provision

- Dedicated service principal for each source, least privilege, read-only.
- Two workspaces: `Dev` and `Prod`, with a deployment pipeline between them.
- Team roles: Contributor in Dev, Member in Prod. No standing admin.
- A key vault or the client's secret store for connection secrets. No secrets in
  the report or in source control.
- Access is time-boxed and reduced to support-only at handover.

## Process

### Scope (days 1 to 3)

- Confirm the sources, the measures, and the report pages from the assessment.
- Fix the page list and the acceptance criteria per page.
- Set the refresh schedule and the security model (who sees what).

### Foundation (week 1 to 2)

- Connect sources in the client tenant. Land raw, then shape in dataflows or the
  model layer, not in the report.
- Build the star schema: a date table, conformed dimensions, fact tables at the
  right grain.
- Define every measure once. Document name, definition, grain, source, owner.
- Set up row-level security roles and test them with a non-admin account.

### Build in cycles (week 2 to 5)

- Deliver report pages in short cycles, one area at a time.
- Review each page with the team that uses it. Log corrections, re-check the
  numbers against source.
- Keep Dev and Prod in sync through the deployment pipeline.

### Handover (final week)

- Configure scheduled refresh in Prod and confirm it runs.
- Finalize row-level security and workspace roles.
- Write the model and measure documentation and the refresh runbook.
- Two training sessions: one for report users, one for the client owner who will
  maintain it.
- Reduce access to support-only. Start the 30-day support window.

## Scripts and templates we reuse

- Service-principal and workspace bootstrap.
- Deployment pipeline (Dev to Prod) configuration.
- Measure-definition and documentation templates.
- Row-level-security test checklist.
- Refresh runbook template.

## Functionality covered

- Governed semantic model, one definition per measure.
- The agreed report pages.
- Row-level security, workspaces, lineage, scheduled refresh.
- Documentation, two training sessions, 30 days of support.

## QA / acceptance (internal)

- Each page is reviewed and signed off by the owning team.
- Numbers reconcile to source; reconciliation is documented.
- Row-level security tested with a non-admin account per role.
- Scheduled refresh runs green for the agreed window before handover.

## Change requests

- New pages or sources beyond the scope go through a written change request with
  its own fixed price, before the work starts.

## Handover artifacts

- The model and reports in the client's Prod workspace.
- Model and measure documentation.
- The refresh runbook and the security model.
- Training recordings or materials.
