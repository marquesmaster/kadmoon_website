# Managed Power BI — delivery playbook

Internal. Client-facing scope: `/pricing/managed-power-bi`.

- **Price:** from $3,500/month.
- **Term:** month-to-month after the first three months.
- **Target hours:** a 20 to 40 hour block per month, depending on the estate.
- **Goal:** keep the client's Power BI estate healthy, answer report and model
  change requests inside a monthly block, and add small reports as they come up.

## Pre-engagement checklist

- An existing Power BI estate, or a Dashboard Build we delivered.
- Signed order, first month invoiced at start.
- A named client contact and a channel or ticket queue for requests.
- Agreement on the monthly hour block and what rolls over.

## Access we provision

- Member or Admin role on the client workspaces for the term, reduced or removed
  at the end of the engagement.
- Service principals for the sources, least privilege.
- Access to the client's ticket or channel for requests.
- Standing access is for the term only and is removed when the engagement ends.

## Process

### Onboarding (first two weeks)

- Inventory the estate: workspaces, models, reports, refreshes, security roles.
- Document the current state and the known issues.
- Set the request intake and the monthly reporting cadence.

### Each month

- Monitor refreshes and fix failures.
- Work the change backlog inside the hour block: measure changes, report tweaks,
  new pages, access changes.
- Keep documentation and the security model current.
- Send a short monthly summary: what was done, hours used, what is queued.

### As it grows

- Flag when a request is really a new build (a new model, a large report set) and
  scope it separately as a Dashboard Build or a change request.

## Scripts and templates we reuse

- Estate inventory script (workspaces, datasets, refresh history).
- Refresh monitoring and alerting.
- Change backlog template.
- The Dashboard Build deployment pipeline and row-level-security checklist.
- Monthly summary template.

## Functionality covered

- Refresh monitoring and fixes.
- Model and report change requests inside the block.
- Small new reports.
- Documentation and security upkeep.

## QA / acceptance (internal)

- Refreshes run green; failures are caught and fixed.
- Each change is reviewed with the requester before it ships to Prod.
- The monthly summary reconciles hours used to the block.

## Boundaries

- Large builds (a new model, a new platform, a large report set) are scoped and
  priced separately, not absorbed into the monthly block.
- Hours beyond the block are agreed in writing before the work starts.

## Handover if the client leaves

- Everything is already in the client tenant; nothing to migrate.
- Final documentation pass and access removal.
- The estate inventory and the security model handed over.
