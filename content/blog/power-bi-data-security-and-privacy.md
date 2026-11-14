---
title: "Power BI data security and privacy: what US companies need to know"
description: "A practical guide to Power BI security for US businesses: your own Microsoft tenant, row-level security, data residency, and how Power BI fits HIPAA, SOC 2, and CCPA obligations."
category: "Governance & security"
primaryKeyword: "power bi data security"
tags: ["Power BI", "data security", "privacy", "governance", "HIPAA", "SOC 2"]
takeaways:
  - "The single most important security decision is where Power BI runs: built inside your own Microsoft tenant, your data never leaves environments you control."
  - "Row-level security governs who sees which rows, and it belongs in the semantic model so one set of rules applies no matter which report opens the data."
  - "Microsoft Entra ID (the identity layer) decides who can sign in and what they can reach, so access follows the same joiners-movers-leavers process as the rest of your business."
  - "Power BI inherits the compliance posture of your Microsoft tenant, which supports HIPAA, SOC 2, and other frameworks, but the certification you can claim depends on how you configure and operate it."
  - "Sensitivity labels, audit logs, and workspace structure turn a pile of reports into a governed estate you can prove is under control."
faqs:
  - q: "Where does our data live when we use Power BI?"
    a: "When Power BI is delivered inside your own Microsoft tenant, the semantic models, reports, and the data they hold live in Microsoft cloud regions tied to your tenant, under your own security and access controls. Your data is not pooled in a vendor platform, and you choose the region when the capacity is provisioned. The reports read from your source systems on a refresh schedule you control."
  - q: "Can Power BI meet HIPAA or SOC 2 requirements?"
    a: "Power BI runs on Microsoft Azure, which maintains HIPAA, SOC 2, and many other attestations, and Microsoft will sign a Business Associate Agreement for in-scope services. That gives you a compliant foundation, but compliance is a shared responsibility: the attestation you can stand behind depends on how you configure access, row-level security, sensitivity labels, and logging, and how you operate the estate over time."
  - q: "How do we stop the wrong people from seeing sensitive numbers?"
    a: "Two layers. First, Microsoft Entra ID controls who can sign in and which workspaces and reports they can open. Second, row-level security inside the semantic model filters the data itself, so a regional manager who opens a national report sees only their region. Defining both in the model, rather than per report, is what keeps access consistent as more reports are built."
  - q: "Is it safer to keep reporting in spreadsheets we email around?"
    a: "No. Emailed spreadsheets are one of the least controlled ways to handle sensitive data: copies spread, there is no access control once a file leaves your outbox, and no audit trail of who saw what. A governed Power BI model with row-level security, tenant-controlled access, and audit logging is far easier to secure and to prove is under control."
---

Most conversations about Power BI start with dashboards. The conversation that decides whether a serious company adopts it usually starts somewhere else: who can see the data, where it lives, and whether the setup will survive an audit. Those questions have good answers, but only if security is part of the design from the first week rather than something bolted on after the reports are built.

This guide walks through how Power BI security actually works for a US business, in plain terms, and where the responsibility sits between Microsoft, your IT team, and whoever builds your reports.

## The decision that matters most: whose tenant it runs in

The foundation of Power BI security is not a setting inside a report. It is where Power BI runs. Power BI lives inside a Microsoft tenant, the same kind of tenant that holds your Microsoft 365 accounts, email, and identity. When the analytics is built inside **your own tenant**, the semantic models, the reports, and the data they hold sit in Microsoft cloud regions tied to your organization, under your own controls. Your data is not copied into a separate vendor platform, and it does not leave an environment you govern.

This is different from handing your data to a third-party analytics product that stores it on infrastructure you do not control. With Power BI in your tenant, the questions a security team asks, who has access, where is the data, how is it logged, are answered by systems you already run and already audit.

It is worth being clear about what this means for a consulting relationship. A well-run Power BI engagement builds everything inside the client's tenant and hands it over with documentation. The client owns the model, the reports, and the data, and keeps operating with or without the consultant. If a vendor wants to host your analytics on their own platform, that is a different risk conversation, and usually a worse one.

## Identity: who can sign in and what they can reach

Once Power BI runs in your tenant, access is governed by **Microsoft Entra ID**, the identity service formerly called Azure Active Directory. This is the same identity layer that controls sign-in to the rest of your Microsoft environment, which means Power BI access follows the processes you already have.

In practice that gives you several controls at once:

- **Single sign-on and multi-factor authentication.** People reach Power BI with the same credentials and the same MFA policy as the rest of their work. There is no separate password to manage or leak.
- **Conditional access.** You can require a compliant device, a trusted network, or step-up authentication before sensitive workspaces open.
- **Joiners, movers, and leavers.** When someone changes role or leaves, the same identity process that removes their email access removes their Power BI access. Access does not linger because it was granted in a separate tool nobody remembers.

The important design principle is that Power BI should not become an island with its own access list. It should inherit the identity and access governance you already operate, so there is one source of truth for who can reach what.

## Row-level security: who sees which rows

Identity decides who can open a report. **Row-level security**, or RLS, decides which rows of data they see once it is open. This is the control that lets a single report serve the whole company while still showing each person only what they should see.

A regional sales manager and the VP of sales can open the same revenue report. With RLS, the manager sees only their region, and the VP sees everything. A clinic administrator sees only their site. A client-facing consultant sees only their accounts. The report is identical; the data it returns is filtered by who is asking.

The detail that matters for security is **where RLS lives**. It belongs in the semantic model, the shared layer of tables and measures that reports read from, not in each individual report. When the rules live in the model, every report built on that model inherits them automatically. When they are scattered across reports, it is only a matter of time before one report is built without them and leaks data to the wrong audience. Defining access rules once, in the model, is both a governance decision and a security decision.

## Data residency and where everything physically sits

For many US companies, and especially those in regulated industries, where the data physically resides is a real requirement. Power BI capacity is provisioned in specific Microsoft cloud regions, and you choose the region. The semantic models and their cached data live in that region. Reports refresh from your source systems on a schedule you set, pulling only what the model needs.

This gives you a defensible answer to the residency question: the analytics runs in named regions under your tenant, and you can document it. It also means you control the refresh boundary, how often data moves from your operational systems into the model, and can keep particularly sensitive detail out of the model entirely by shaping what the model loads.

## HIPAA, SOC 2, and CCPA: a shared responsibility

Compliance frameworks are where teams most often want a simple yes or no, and the honest answer is that it depends on configuration, not just the platform. Here is the shape of it.

### The platform foundation

Power BI runs on Microsoft Azure. Azure maintains a long list of attestations and certifications, including **SOC 1, SOC 2, and SOC 3**, **ISO 27001**, and alignment with **HIPAA**. For healthcare data, Microsoft will sign a **Business Associate Agreement** covering in-scope services, which is a prerequisite for handling protected health information. This is the compliant foundation you build on.

### Your configuration and operation

A compliant foundation does not make every deployment compliant. The attestation you can actually stand behind depends on how the estate is configured and run:

- Access is governed through Entra ID with MFA and least-privilege workspace roles.
- Row-level security restricts data to the right audience.
- **Sensitivity labels** classify reports and datasets, and can enforce encryption and restrict export.
- **Audit logs** record who accessed what, which is what an auditor wants to see.
- Data that does not need to be in the model stays out of it.

The useful way to think about **CCPA** and similar privacy rules is the same: Power BI gives you the controls to limit access, document processing, and respond to data requests, but it is your governance process that turns those controls into compliance. The platform makes compliance achievable; your configuration makes it real.

## Sensitivity labels, auditing, and proving control

Two capabilities turn a collection of reports into an estate you can prove is governed.

**Sensitivity labels** come from Microsoft Purview and apply the same classification scheme you use across Microsoft 365. A report labeled Confidential can carry encryption and export restrictions with it, and the label travels if the data is exported to Excel. This means classification is consistent across documents, email, and analytics instead of being a separate idea inside Power BI.

**Audit logging** records activity across the tenant: who viewed a report, who changed a model, who shared what with whom. For a security or compliance team, this is the difference between believing access is controlled and being able to demonstrate it. When an auditor asks who could see a particular figure last quarter, the answer is a query, not a guess.

## Workspace structure: governance you can see

A lot of Power BI risk comes not from the platform but from sprawl: dozens of workspaces, duplicated datasets, reports shared ad hoc, and no clear owner. A governed estate uses a deliberate **workspace structure**, development, test, and production stages, clear ownership per workspace, certified datasets that are the approved source for a subject area, and a promotion process for moving content to production.

This structure is a security control as much as an operational one. It limits who can publish to production, keeps experimental content away from executives, and makes it obvious which model is the trusted source. Governance that is visible in the structure is governance that holds up as the organization grows.

## What good looks like

Pulling it together, a secure Power BI deployment for a US company looks like this:

- Everything runs inside the company's own Microsoft tenant, in chosen regions.
- Access is governed by Entra ID, with MFA and conditional access, tied to the normal identity lifecycle.
- Row-level security lives in the semantic model, so data is filtered consistently.
- Sensitivity labels classify content and can enforce encryption and export limits.
- Audit logs make access provable, not assumed.
- A deliberate workspace structure keeps ownership and promotion under control.
- The company owns the model, reports, and data, with documentation and a handover.

None of this is exotic, and none of it slows down the business once it is in place. It is the difference between Power BI as a trusted system of record for decisions and Power BI as another place sensitive data quietly accumulates. The companies that get the most out of it treat security as part of the build, not a later project, which is exactly how a serious engagement should be scoped.
