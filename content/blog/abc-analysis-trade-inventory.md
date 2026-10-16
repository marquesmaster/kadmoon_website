---
title: "ABC analysis for trade inventory: spending attention where the value is"
description: "A few SKUs carry most of the value and most of the cash, and the long tail carries most of the count. ABC analysis sorts the catalog by what matters so inventory policy, forecasting effort, and buying attention go where they pay off."
category: "Inventory"
primaryKeyword: "ABC analysis inventory"
tags: ["ABC analysis", "SKU rationalization", "inventory analytics", "working capital", "long tail"]
takeaways:
  - "A small share of SKUs typically accounts for most of the value, cash, and volume."
  - "ABC analysis sorts the catalog into tiers so attention and policy match each tier's importance."
  - "Treating every SKU the same over-manages the trivial many and under-manages the vital few."
  - "For importers the tiers should reflect landed value and cash, not just sales revenue."
  - "The long tail is where SKU rationalization usually finds cost to remove."
faqs:
  - q: "What is ABC analysis?"
    a: "ABC analysis is a way of sorting a catalog into tiers by importance, classically A for the small set of items that account for most of the value, B for a middle group, and C for the long tail of many items that together account for little. The exact cutoffs vary, but the principle is constant: value is unevenly distributed across SKUs, so the items are not equally worth managing. Sorting them into tiers lets you apply more attention and tighter policy to the items that carry the value, and lighter-touch policy to the ones that do not."
  - q: "Why not manage every SKU the same way?"
    a: "Because uniform treatment misallocates attention in both directions at once. Giving every SKU the same forecasting effort, review cadence, and inventory policy means the vital few items that carry most of the cash get no more care than a trivial item that barely sells, so the important ones are under-managed while scarce attention is spent on ones that do not repay it. ABC analysis fixes the allocation: tight control and careful forecasting on the A items where it matters, simpler rules on the C items where precision is not worth the effort."
  - q: "How is ABC analysis different for importers?"
    a: "For importers the tiers should be built on landed value and the cash each item ties up, not just on sales revenue, because an imported item's true weight includes the freight, duty, and long cash-to-cash cycle behind it. An item with modest sales but high landed cost and a long lead time can tie up more cash than a higher-revenue item that turns quickly, so revenue-based tiers can mislead. Sorting on landed value and cash commitment points inventory attention at the items that actually carry the working capital, which is the number importers most need to manage."
---

Open any importer's catalog and the value inside it is distributed unevenly. A small number of SKUs carry most of the sales, most of the landed cost, and most of the cash tied up in stock, while a long tail of many SKUs together carries very little of any of them. This is not a flaw to be corrected; it is the normal shape of a catalog, and it has a clear implication that most operations ignore: if the items are not equally important, they should not be managed as though they were. ABC analysis is the simple discipline of sorting the catalog by what matters and matching effort to it.

## Value is lumpy

The starting observation is that value clusters. A minority of items, the A tier, account for the majority of the value; a middle B tier carries a moderate share; and a large C tier, the long tail, accounts for a small fraction despite being most of the SKU count. The exact thresholds are a matter of convention, but the lumpiness itself is reliable, and it is the whole basis for treating SKUs differently. An operation that has never sorted its catalog this way is almost certainly spreading its attention evenly across items whose importance is anything but even.

## Uniform treatment misallocates both ways

Managing every SKU the same way feels fair and is quietly wasteful. It gives a trivial item that barely sells the same forecasting effort, review cadence, and policy as an A item that carries a large share of the cash, which means two errors happen at once: the vital few are under-managed, getting no more care than they would if they were marginal, and scarce attention is squandered on the trivial many, which would be fine under a simple rule. ABC analysis corrects both by design, concentrating [careful forecasting](/blog/forecast-accuracy-cross-border-inventory) and tight [inventory policy](/blog/days-of-supply-stockout-risk) on the A items and applying lighter, rule-based handling to the C tail.

## For importers, sort on landed value and cash

The usual ABC sort is by sales revenue, and for an importer that can mislead, because revenue understates the weight of imported goods. An item's real importance to an importer includes the [freight and duty](/blog/landed-cost-calculation) behind it and the [cash it ties up](/blog/cash-to-cash-cycle-importers) across a long lead time, not just the revenue it brings in. A modest-selling item with high landed cost and a slow cycle can lock up more working capital than a fast-turning, higher-revenue one. Sorting the tiers on landed value and cash commitment, rather than revenue alone, points inventory attention at the items that actually carry the capital, which is the number importers most need to control.

## The long tail is where cost hides

The C tier rewards a second kind of attention. The long tail is where [dead and slow-moving stock](/blog/dead-stock-slow-moving-inventory) accumulates, where SKUs proliferate without carrying their weight, and where the complexity cost of the catalog quietly grows. SKU rationalization, deciding which tail items to keep, simplify, or discontinue, usually finds real cost to remove there, because each marginal SKU carries setup, holding, and management overhead out of proportion to what it returns. ABC analysis makes rationalization possible by showing clearly which items are in the tail and how little they contribute, so the conversation about pruning is grounded in value rather than attachment.

## A sort, kept current

ABC analysis is not a one-time exercise, because the tiers drift as demand and landed costs change, and an item that was an A last year may be sliding into the tail. Keeping the sort current, refreshed as sales and [landed cost](/blog/landed-cost-calculation) move, keeps the attention allocation honest over time instead of frozen at a past snapshot. That is a straightforward analytics job once the inventory, demand, and cost data are joined, and it is the kind of continuously maintained view that is awkward to keep by hand and natural to keep in a [platform](/platform). Built in [your own tenant](/blog/analytics-in-your-own-tenant), the tiers are yours to define and adjust.

If every SKU in your catalog gets the same attention, you are over-managing the tail and under-managing the items that carry the cash. [Tell us how your catalog breaks down](/contact), or see how the [platform](/platform) tiers inventory by value.
