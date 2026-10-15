---
title: "Why your trade analytics should live in your own tenant"
description: "Trade data is sensitive: customs, supplier, and pricing detail. Keeping the analytics in your own cloud tenant means you own the model and the data, governance follows your identity, and you avoid lock-in."
category: "Trade Operations"
primaryKeyword: "analytics in your own tenant"
tags: ["data sovereignty", "data ownership", "trade analytics", "Microsoft Fabric", "governance"]
takeaways:
  - "Trade data is sensitive, customs entries, supplier terms, and pricing, so where the analytics runs is a real decision, not a detail."
  - "Building in your own cloud tenant means you own the data model, the reports, and the data, with no third party holding them."
  - "Access follows your own identity provider and policies, so governance is yours, not a vendor's."
  - "You avoid lock-in: if the relationship ends, the analytics keep running because they are already yours."
  - "The alternative, shipping your trade data into a vendor's platform, trades control for convenience."
faqs:
  - q: "What does 'in your own tenant' mean?"
    a: "A tenant is your own isolated space in a cloud platform, in this case the Microsoft cloud (Fabric, Power BI, Azure). Building the analytics in your own tenant means the data model, the reports, and the data itself live in infrastructure you own and control, under your own accounts and policies, rather than in a vendor's multi-tenant platform that you log into. The analytics firm builds and operates it there, with delegated access, but the asset is yours from day one."
  - q: "Why does it matter for trade data specifically?"
    a: "Because trade data is unusually sensitive. Customs entries, supplier terms, landed costs, and pricing are competitively and legally sensitive, and some clients have contractual or regulatory requirements about where that data can live. Shipping it out to a vendor's platform means your most sensitive commercial data sits in someone else's environment. Keeping it in your own tenant keeps the data where your security, your identity controls, and your data-residency requirements already apply."
  - q: "How is this different from a SaaS analytics product?"
    a: "A SaaS product hosts the platform and your data in its environment; you send your data to it and log in to use it. That is convenient, but you do not own the model or control where the data sits, and if you leave, the analytics leave with it. Building in your own tenant inverts that: you own the model, the reports, and the data, governance follows your identity provider, and the analytics keep running whether or not the relationship with the firm continues. It trades a little setup for durable control."
---

Where your analytics runs is usually treated as a technical detail. For trade data, it is not. Customs entries, supplier terms, landed costs, and pricing are among the most sensitive data a company holds, and the decision about where they live, in your own environment or a vendor's, is a real one. Building the analytics in your own tenant keeps the data where your controls already apply, and makes the model and the reports yours from the start.

## Trade data is sensitive data

The data behind trade analytics is not neutral operational exhaust. [Customs value](/blog/customs-value-valuation), supplier pricing, duty exposure, and sourcing are competitively sensitive and sometimes legally restricted in where they can be stored. Treating them like any other dataset, shipping them into whatever platform is convenient, ignores that sensitivity. The first question for trade analytics should be where the data will live, and the safest answer is usually the environment you already secure.

## You own the model and the data

Building in your own cloud tenant means the semantic model, the reports, and the data all live in infrastructure you own. The analytics firm builds and runs it there with delegated access, but the asset is yours from day one, not something you rent. That ownership is what makes the difference at the end of a relationship: the analytics do not disappear because they were always yours. You keep the model, the reports, and the governed data, documented and handed over.

## Governance follows your identity

When analytics live in your tenant, access follows your own identity provider and your own policies. Row-level security, who can see which data, and how access is granted all run through the controls you already operate, not a vendor's separate system. [Governance](/docs/security) becomes an extension of what you already do rather than a parallel thing to manage. That is both simpler and safer: one set of identity controls, applied consistently, with a lineage you can trace from any number back to its source.

## No lock-in by design

The quiet cost of a hosted platform is dependence: your analytics work only as long as you keep paying the vendor who holds them. Building in your own tenant removes that. If the relationship with the firm ends, the analytics keep running, because the model and the data were always in your environment. You are never in the position of losing your reporting because a contract lapsed. Durability is the point: analytics you own do not have an off switch someone else controls.

## The trade-off is control for convenience

A hosted SaaS product is convenient: send your data, log in, done. But the convenience is paid for in control, over where the data sits, who owns the model, and what happens if you leave. For most data that trade-off is fine. For trade data, where sensitivity and ownership matter more, keeping the analytics in your own tenant is usually worth the small amount of extra setup. It is the same [platform](/platform) and the same reports, built somewhere you control instead of somewhere you rent.

If where your trade data lives matters to you, building the analytics in your own tenant is the way to keep control of it. [Tell us about your environment](/contact), or read how we handle [security and your tenant](/docs/security).
