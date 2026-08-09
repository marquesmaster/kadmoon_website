---
title: "Tenant to tenant migration: a phased Microsoft playbook"
description: "How to run a tenant to tenant migration during M&A or reorg: inventory workspaces, models, flows, gateways, and permissions, then move in phases without breaking reports."
category: "Migration"
primaryKeyword: "tenant to tenant migration"
tags: ["tenant to tenant migration", "power bi migration", "power platform", "microsoft 365"]
takeaways:
  - "A tenant to tenant migration moves a Microsoft environment (Power BI workspaces, semantic models, Power Platform flows, on-premises gateways, and permissions) from one Azure AD tenant into another, usually driven by a merger, acquisition, or reorganization."
  - "Nothing exports cleanly between tenants because content is tied to the source tenant's identities, so every workspace, connection, and permission is re-created against the target tenant's users and groups."
  - "Start with a full inventory: you cannot move what you have not catalogued, and the inventory is where you retire dead content instead of carrying it across."
  - "Phase the move by workload and business unit rather than attempting a single cutover, so gateways and data source credentials are re-established and tested before users depend on them."
  - "Permissions and row-level security must be re-mapped to target-tenant identities deliberately, because a copied report with the wrong security exposes data to the wrong people."
faqs:
  - q: "What is a tenant to tenant migration?"
    a: "It is the move of a Microsoft cloud environment from one Azure Active Directory (now Entra ID) tenant to another. In a Power BI and Power Platform context that means relocating workspaces, semantic models, reports, dataflows, Power Automate flows, on-premises data gateways, and all the permissions that go with them. It is common after a merger, acquisition, or corporate reorganization when two organizations consolidate onto a single tenant."
  - q: "Can you just export Power BI content from one tenant to another?"
    a: "Not cleanly. Content is bound to the source tenant's identities, data source connections, and gateways, none of which exist in the target tenant. Reports and models can be redeployed, but connections are re-pointed, gateways are rebuilt, and permissions and row-level security are re-mapped to the target tenant's users and groups. It is a structured rebuild-and-reconnect, not a file copy."
  - q: "How long does a tenant to tenant migration take?"
    a: "It depends on the size of the estate and how much is retired versus moved. A focused Power BI and Power Platform migration for one business unit can run a few weeks, while a full multi-workload consolidation across a large organization runs months. Phasing by workload and business unit keeps each step testable and shortens the time any single team is disrupted."
---

A tenant to tenant migration is the move of a Microsoft cloud environment from one Azure Active Directory (now Entra ID) tenant into another. In a data and analytics context that means relocating Power BI workspaces, semantic models, reports, dataflows, Power Automate flows, on-premises data gateways, and every permission attached to them from a source tenant to a target tenant. It comes up most often during mergers and acquisitions, divestitures, or corporate reorganizations, when two organizations need to live under one tenant or a carved-out unit needs its own. This guide lays out why it is harder than a copy, and the inventoried, phased playbook that gets it done without breaking the reports people rely on.

## Why this is not an export

The instinct is to treat it like moving files: download from tenant A, upload to tenant B. That does not work, because almost everything in a Microsoft environment is bound to the tenant it lives in.

- Every report, workspace, and flow is owned by identities (users and groups) that exist only in the source tenant. Those identities do not follow the content.
- Data source connections and credentials are stored against the source tenant and its gateways.
- On-premises data gateways are registered to the source tenant and cannot simply be re-homed by copying a report.
- Row-level security and workspace permissions reference source-tenant users, so a copied report either loses its security or points at people who no longer exist in the target.

So a tenant to tenant migration is a structured rebuild-and-reconnect. Content is redeployed into the target, connections are re-pointed, gateways are rebuilt, and permissions are re-mapped to the target tenant's identities. Understanding that up front is what separates a smooth move from a broken one.

## Step one: inventory everything

You cannot move what you have not catalogued, and the inventory is the single most valuable artifact in the whole project. Before touching anything, build a complete list of what exists in the source tenant:

- Every Power BI workspace, and within it every semantic model, report, dashboard, and dataflow, with its owner and last-access date.
- Every data source each model connects to, and whether it goes through a gateway.
- Every on-premises data gateway, its clusters, and the data sources registered to it.
- Every Power Automate flow and Power Apps app in scope, with their connectors and connection references.
- Every permission and sharing assignment, including workspace roles, app audiences, and row-level security role membership.

The inventory does double duty. It is the migration plan, and it is the moment to retire dead weight. Every estate has workspaces nobody has opened in a year and flows that fail silently. Carrying that across to a fresh tenant just moves the mess. Retire it in the inventory instead, and the target tenant starts clean.

## Step two: prepare the target tenant

Before content moves, the target tenant needs the ground it will stand on. That means the target-tenant users and security groups exist (often mirrored from a re-mapping of source identities), capacity is provisioned if you use Power BI capacity or Fabric, and the tenant-level settings that govern sharing, export, and gateway installation match your policy.

Identity mapping is the backbone here. You build a table that maps each source-tenant user and group to its target-tenant equivalent, and that map drives permission re-assignment for every piece of content. Getting this table right early prevents the most common migration failure: content that lands in the target with security pointing at the wrong people or at nobody.

## Step three: phase the move

Do not attempt a single big-bang cutover of the whole estate. Phase it by workload and by business unit so each step is testable and the blast radius of any problem stays small. A workable sequence:

1. Rebuild gateways first. Install and register the on-premises data gateway in the target tenant, recreate the gateway clusters, and re-enter data source credentials. Nothing that depends on on-premises data will refresh until this exists, so it leads.
2. Move the semantic models and dataflows. Redeploy them into target workspaces, re-point their connections to the target gateway and target-tenant data sources, and validate that refreshes succeed.
3. Re-apply row-level security using the identity map, then test each RLS role with a target-tenant account to confirm the right users see the right rows.
4. Move reports and dashboards, rebind them to the migrated models, and re-create app audiences with target-tenant groups.
5. Migrate Power Automate flows and Power Apps, re-establishing connection references and connections, which almost always require re-authentication in the target tenant.
6. Re-assign workspace roles and sharing per the identity map, then have real users validate access before the source is retired.

Running this per business unit means one team migrates and validates while the rest keep working on the source tenant, and you learn from the first unit before touching the others.

## Step four: permissions and row-level security

This deserves its own attention because it is where data gets exposed. A report copied without its security re-mapped is worse than a broken report, because it may quietly show sensitive rows to the wrong audience. Work through it deliberately:

- Re-create every workspace role assignment against target-tenant groups, not individual users where a group existed.
- Rebuild row-level security role membership from the identity map, and test each role with an actual target account.
- Re-create app audiences and sharing links, and confirm that external sharing settings in the target tenant match your policy rather than defaulting open.

Governance is easier to get right during a migration than to retrofit afterward, so this is the moment to standardize on groups and certified models. Our [data governance](/services/data-governance) work covers making that stick once the move is done.

## Step five: validate, then cut over

Before retiring the source, run a validation pass: every migrated model refreshes, every RLS role returns the correct rows, every flow runs, and a sample of real users confirms they can reach what they need. Only then do you cut over and decommission the source content. Keep the source in read-only for a grace period rather than deleting immediately, so anything missed can be recovered.

## Where this fits

Tenant to tenant migration overlaps with the rest of a Microsoft data estate. If the move is also a chance to modernize reporting, it pairs with [Power BI consulting](/services/power-bi), and if you are consolidating storage and compute, with [Microsoft Fabric](/services/microsoft-fabric) and [data engineering](/services/data-engineering). The Power Automate and Power Apps side is covered by [Power Platform consulting](/services/power-platform). For the full moving service, including the inventory, identity mapping, and phased execution described here, see [tenant to tenant migration](/services/tenant-to-tenant-migration).

## The bottom line

A tenant to tenant migration is a rebuild-and-reconnect, not a copy, because Power BI and Power Platform content is bound to the tenant's identities, gateways, and connections. Do it well by inventorying everything first (and retiring what nobody uses), preparing the target tenant and an identity map, then moving in phases by workload and business unit with permissions and row-level security re-mapped deliberately and validated before cutover. Handled that way, the combined organization lands on one clean tenant with reports that still work and security that is still correct. To scope a move, [start a project](/#contact) or read more across [the blog](/blog).
