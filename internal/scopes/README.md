# Internal scopes and delivery playbooks

These are internal. They describe how the team delivers each engagement: the
process, the access we provision, the scripts and templates we reuse, the QA we
run, and the hours behind each price. This is a company asset and is **not
published on the website**.

The client-facing scope (what the client receives) lives in `lib/content.ts`
under `pricingDetail` and renders at `/pricing/[tier]`. Keep the two in sync:
the client-facing page states the deliverables and acceptance; these playbooks
state how we produce them.

This folder is not part of the Next.js app and is not built, served, or listed
in the sitemap.

## Files

- `power-bi-assessment.md` — the 2-week, $5,000 paid on-ramp.
- `dashboard-build.md` — the governed Power BI build, from $20,000.
- `fabric-data-platform.md` — the Fabric lakehouse/warehouse build, from $45,000.
- `managed-power-bi.md` — the monthly subscription, from $3,500/month.

## Conventions used across playbooks

- **Tenant:** everything is built in the client's own Microsoft tenant. We never
  pool client data in our own environment.
- **Access:** least privilege, time-boxed, removed at handover. Prefer a
  dedicated service principal and a scoped workspace role over personal admin.
- **Governance:** one definition per measure, documented; row-level security;
  workspace structure; lineage. This is the default, not an add-on.
- **Documentation:** the model, the measures, the sources, and the refresh are
  documented and handed over on every project.
- **No invented claims:** figures in client examples are representative product
  UI, never a named client's real result.
