---
title: "Microsoft Fabric for trade data: the foundation under your analytics"
description: "Foreign-trade data is scattered across an ERP, a broker, carriers, EDI and ACE, and spreadsheets. Microsoft Fabric is where it gets unified into one governed foundation, so the analytics on top can be trusted."
category: "Integrations"
primaryKeyword: "microsoft fabric trade data"
tags: ["microsoft fabric", "trade data", "data integration", "trade analytics", "own tenant"]
takeaways:
  - "Trade data is fragmented by nature, across ERP, broker, carrier, EDI and ACE, and spreadsheets."
  - "Microsoft Fabric is the unified foundation where those sources are brought together."
  - "The value is not Fabric itself; it is the governed trade model built on it."
  - "A single, governed foundation is what makes trade numbers consistent and traceable."
  - "It runs in your own tenant, so the data stays in your environment."
faqs:
  - q: "What is Microsoft Fabric, in plain terms for a trade operation?"
    a: "Microsoft Fabric is a unified data platform: a single place to land, organize, and serve the data that your reports are built on. For a foreign-trade operation, that matters because trade data is unusually scattered, living in an ERP, a broker portal, carrier feeds, EDI and ACE, and spreadsheets, each holding part of the picture. Fabric is where those sources are brought together into one foundation, so the analytics on top is working from a single, governed copy rather than from a dozen disconnected exports. It is the plumbing under the reports, not the reports themselves."
  - q: "Why does a unified foundation matter for trade specifically?"
    a: "Because no single trade system holds the whole transaction. Landed cost needs product cost from the ERP, freight from the carrier or forwarder, and duty from the broker; visibility needs milestones from several carriers; compliance needs entry data. If each lives in its own silo, every metric is assembled by hand and the versions drift. A unified foundation in Fabric joins these sources once, so landed cost, duty, and OTIF are computed from one consistent base. The fragmentation of trade data is exactly why the foundation is worth building, and Fabric is a capable place to build it."
  - q: "Does our trade data have to move out of our control to use Fabric?"
    a: "No. Fabric runs in your own Microsoft tenant, so the data stays in your environment under your own security and access controls. The foundation and the trade model are built there and handed over to you, documented, and the reports in Power BI read from it in the same tenant. If you do not run Microsoft yet, a dedicated tenant can be provisioned and managed for you, but the data remains isolated and yours either way."
---

Ask where a foreign-trade operation's data lives and you will get a list, not an answer. Product cost is in the ERP. Freight is on the forwarder's invoices. Duty and entries are with the broker. Shipment milestones arrive from several carriers over [EDI and API](/blog/edi-ace-integration-for-trade). And a surprising amount sits in spreadsheets that one person maintains. Trade data is fragmented by nature, and that fragmentation is the real obstacle to trustworthy analytics. Microsoft Fabric is where the fragments get brought together into one foundation, which is the step everything else depends on.

## Fabric is the foundation, not the reports

It is worth being clear about what Fabric is. It is a unified data platform: a single place to land, organize, and serve the data your reports are built on. It is the plumbing under the analytics, not the analytics itself. For a company already on Microsoft, that plumbing is part of the stack you likely already have, and the question is whether it is being used for the job trade analytics actually needs, which is unifying a set of sources that otherwise never meet. Fabric does that job well; what it does not do on its own is know anything about trade. That part is built on top.

## Trade is fragmented by nature

The reason a unified foundation matters so much for trade is that no single system holds the whole transaction. [Landed cost](/blog/landed-cost-calculation) needs product cost from the ERP, freight from the carrier or forwarder, and duty from the broker. Visibility needs milestones from multiple carriers reconciled into one timeline. Compliance needs entry and classification data. If each of these lives in its own silo, every metric has to be assembled by hand from disconnected exports, and the versions drift the moment anyone refreshes one and not another. A foundation in Fabric joins these sources once, so the metrics are computed from a single consistent base rather than reassembled each time.

## The value is the model on top

Fabric gets the data into one place; it does not make that data mean anything for trade. The value is the [governed trade model](/blog/semantic-layer-trade-kpi) built on the foundation: the KPIs defined once, the [data quality](/blog/data-quality-trade-analytics) measured on the fields that drive duty, the [master data](/blog/trade-master-data) managed so items and suppliers are counted correctly, and the [lineage](/blog/data-lineage-trade-analytics) that lets any number be traced back to its source. Fabric is a strong place to build that model, but the model is the thing that turns a unified data platform into [trade intelligence](/blog/what-is-a-trade-intelligence-platform). A foundation without the trade model is a very tidy pile of data; the model is what the operation actually acts on.

## One foundation, consistent numbers

The payoff of building on a single foundation is that the numbers finally agree and can be defended. When landed cost, duty, and OTIF are all computed from one governed base in Fabric, a figure in one report lines up with the same figure in another, and each one traces to the shipment or entry behind it. That is the opposite of the [spreadsheet-and-silos](/blog/spreadsheets-break-at-trade-scale) state most operations start from, where every number is assembled separately and no two quite match. The foundation is unglamorous, but it is what makes everything above it trustworthy, which is the whole point of doing analytics at all.

## It runs in your tenant

For an operation handling sensitive commercial and customs data, where the foundation lives matters. Fabric runs in [your own Microsoft tenant](/blog/analytics-in-your-own-tenant), so the data stays in your environment under your own controls, and the foundation and model are built there and handed over to you, documented. The reports in Power BI read from it in the same tenant, and if you do not run Microsoft yet, a dedicated tenant can be provisioned and managed for you. The platform is Microsoft's; the foundation, the model, and the data are yours.

If your trade data is scattered across systems and spreadsheets that never meet, a unified foundation is where trustworthy analytics starts. [Tell us what systems you run](/contact), or see how the [platform](/platform) and the [Microsoft stack](/blog/trade-analytics-microsoft-stack) fit together.
