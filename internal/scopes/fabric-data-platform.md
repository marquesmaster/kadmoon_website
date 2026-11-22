# Fabric Data Platform — delivery playbook

Internal. Client-facing scope: `/pricing/fabric-data-platform`.

- **Price:** from $45,000 (scoped up front).
- **Timeline:** 8 to 12 weeks.
- **Target hours:** 280 to 420 depending on sources, volumes, and model depth.
- **Goal:** a Microsoft Fabric lakehouse or warehouse in the client tenant, the
  pipelines that load it, the finance and operations model, and the Power BI
  reports on top, with monitoring and handover.

## Pre-engagement checklist

- A scoping phase (an assessment or a paid discovery) with the sources, the data
  volumes, the refresh needs, and the model agreed.
- Signed order, 50% invoiced at start.
- Fabric capacity decision: the client buys the capacity; we size it in scope.
- Network and access path to each source confirmed (gateways, private links,
  service accounts).

## Access we provision

- Dedicated service principals per source, least privilege.
- A Fabric workspace per environment (`Dev`, `Prod`), capacity assigned.
- Separate secret store (key vault) for connection secrets.
- Git integration on the Fabric workspace for the pipelines and the model.
- Access time-boxed and reduced to monitoring/support at handover.

## Architecture defaults

- Medallion layering: bronze (raw), silver (cleaned/conformed), gold (model).
- Lakehouse for file and large-volume sources; warehouse where SQL semantics are
  needed. Decide per source in scope.
- Incremental load where the source supports it; full load only for small
  dimensions.
- The gold layer feeds one governed semantic model, the same governance as the
  Dashboard Build.

## Process

### Scope and architecture (week 1 to 2)

- Confirm sources, volumes, refresh windows, and the target model.
- Set the architecture (lakehouse vs warehouse, layers, capacity sizing).
- Fix the price and the acceptance criteria.

### Platform (week 2 to 6)

- Stand up the Fabric workspace and capacity in the client tenant.
- Build pipelines: bronze ingestion, silver transforms, gold model tables.
- Add data-quality checks and failure handling on each pipeline.

### Model and reports (week 6 to 10)

- Build the finance and operations semantic model on the gold layer.
- Build the Power BI reports on top, reviewed with the owning teams.
- Row-level security, scheduled/triggered refresh, deployment pipeline.

### Monitoring and handover (final weeks)

- Set up monitoring and alerts on pipelines and refreshes.
- Document the platform: architecture, pipelines, model, runbooks.
- Train the client owner. Reduce access to monitoring/support.

## Scripts and templates we reuse

- Fabric workspace/capacity and Git-integration bootstrap.
- Medallion pipeline templates (ingestion, transform, load).
- Data-quality check library.
- Monitoring and alert configuration.
- Platform documentation template.

## Functionality covered

- Lakehouse or warehouse, pipelines, the finance and operations model, Power BI
  reports, monitoring, alerts, documentation, handover.

## QA / acceptance (internal)

- Pipelines load on schedule; row counts and totals reconcile to source.
- Data-quality checks pass and alert on failure.
- Reports reviewed and accepted by the owning teams.
- Monitoring and alerts verified before handover.

## Change requests

- New sources, new layers, or model changes beyond scope go through a written
  change request with its own fixed price.

## Handover artifacts

- The Fabric workspace, pipelines, and model in the client tenant.
- Platform and pipeline documentation and runbooks.
- The monitoring and alerting setup.
