---
title: "The first 90 days of trade analytics: a path from scattered data to decisions"
description: "An importer does not go from spreadsheets to a control tower in one step. This is the sequence that works: assess the data, fix the few fields that matter, model landed cost, then add the decisions on top, with first dashboards in about two weeks."
category: "Trade Operations"
primaryKeyword: "trade analytics first 90 days"
tags: ["trade analytics", "getting started", "landed cost", "data assessment", "roadmap"]
takeaways:
  - "Trade analytics is built in a sequence, not switched on all at once."
  - "It starts with an honest assessment of what data exists and what state it is in."
  - "Landed cost is the first model worth building, because most decisions depend on it."
  - "First dashboards should land in about two weeks, with depth added in cycles after that."
  - "Each step delivers something usable, so value arrives before the whole program is finished."
faqs:
  - q: "How long before trade analytics is actually useful?"
    a: "The first useful dashboards should arrive in about two weeks, not at the end of a long program. That early delivery is possible because the first step is narrow: assess the data, stand up a first view of something that matters, usually landed cost or duty exposure, and prove the pipeline works end to end. Depth is then added in short cycles, each one delivering another usable view. The point is that value arrives early and keeps arriving, rather than being withheld until a large build is complete, because an analytics program that only pays off at the end tends not to reach the end."
  - q: "What is the right order to build trade analytics in?"
    a: "Assess, then fix the few fields that matter, then model landed cost, then layer decisions on top. The assessment establishes what data exists and its state. Fixing data concentrates on the fields that drive duty and cost, classification, origin, value, rather than cleaning everything. Landed cost is the first model because most trade decisions, pricing, sourcing, margin, depend on it. Only once landed cost is trustworthy do the higher-level decisions, duty optimization, inventory, scenario planning, have a foundation to sit on. Building in that order means each step stands on the one before it."
  - q: "Do you have to fix all the data before analytics can start?"
    a: "No, and trying to is a common way to stall. The data that needs fixing first is the small set of fields that drive the decisions you are starting with, not the entire estate. You fix classification, origin, and value because duty depends on them, and you leave the rest until a later step needs it. Fixing everything up front delays any value for months and often cleans data that no decision uses. The discipline is to fix what the next model needs, deliver that model, and let each subsequent step pull in the data it requires."
---

No importer goes from scattered spreadsheets to a running control tower in a single move, and the ones who try usually stall, because they attempt to build everything before delivering anything. Trade analytics works when it is built in a sequence, where each step produces something usable and stands on the step before it. The shape of that sequence is consistent across engagements: understand the data, fix the few fields that actually matter, model landed cost, and then layer decisions on top. This is what the first ninety days look like when the work is done in the right order, with the first dashboards arriving in about two weeks rather than at the end of a long program.

## Weeks one to two: assess and prove the pipeline

The first step is an honest look at what data exists and what state it is in, which is what a [data assessment](/blog/trade-data-assessment) produces. You cannot plan the build until you know where the numbers live, how clean they are, and which systems have to be joined. In parallel, the goal is to stand up a first view of something that matters, usually [landed cost](/blog/landed-cost-calculation) or [duty exposure](/blog/effective-duty-rate), and prove the pipeline runs end to end, from source to dashboard. That early delivery is not a demo; it is the proof that value will arrive throughout rather than only at the end, which is what keeps a program alive long enough to finish.

## Weeks two to four: fix the fields that matter

With the assessment in hand, the next step is fixing data, but not all of it. The discipline is to concentrate on the few fields that drive duty and cost, [classification, origin, and value](/blog/data-quality-trade-analytics), and to leave the rest until a later step needs it. Trying to clean the entire data estate before any analytics can start is one of the most reliable ways to stall, because it delays value for months and often cleans fields no decision uses. At the same time, the [product and supplier masters](/blog/trade-master-data) get enough attention that items and suppliers are counted as the single things they are. Fix what the first models need, deliver them, and let later steps pull in what they require.

## Weeks four to eight: model landed cost properly

Landed cost is the first real model worth building, because most trade decisions depend on it: pricing, sourcing, margin, and inventory valuation all rest on knowing what a unit actually costs to land. Modeling it properly means decomposing it into product cost, [freight](/blog/freight-cost-analytics), duty, and fees, and allocating those down to the unit rather than leaving them as shipment totals. Doing this once serves many purposes, which is why it comes early: the same per-unit landed cost feeds [margin analysis](/blog/margin-bridge-why-margin-moved), [sourcing comparison](/blog/total-cost-of-sourcing), and [inventory valuation](/blog/landed-cost-inventory-valuation). Until landed cost is trustworthy, the decisions built on it are built on sand, so it is the foundation the rest stands on.

## Weeks eight to twelve: layer the decisions on top

Only once landed cost is solid do the higher-level decisions have a foundation. This is where [duty optimization](/blog/duty-optimization-four-levers) gets sized, [inventory and days-of-supply](/blog/days-of-supply-stockout-risk) views come online, [tariff scenarios](/blog/tariff-scenario-planning) become answerable, and the operation starts to be run by [exception](/blog/exception-management-trade) rather than by scanning reports. Each of these is a layer added in a short cycle, validated with the people who will use it, rather than a big-bang release. The control tower that leadership eventually watches is not built as a control tower; it accumulates, one decision view at a time, on top of the landed-cost foundation laid in the prior weeks.

## Why the order matters

The sequence is not arbitrary. Assessing before building keeps the plan grounded in reality. Fixing the fields that matter before modeling keeps the models trustworthy without stalling on a total cleanup. Modeling landed cost before the higher decisions gives those decisions a foundation. And delivering something usable at every step means value arrives early and compounds, rather than being withheld until a program that may never finish is complete. This is the same logic as building analytics [in your own tenant](/blog/analytics-in-your-own-tenant) and handing it over documented: the aim is an asset you own and can extend, assembled in an order where each piece earns its place before the next is added.

If your trade data is scattered and you are not sure where to start, the first ninety days are about sequence, not scale. [Tell us what systems you run](/contact), or see how the [platform](/platform) and our [engagement model](/docs/engagement-models) stage the build.
