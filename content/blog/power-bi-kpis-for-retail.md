---
title: "Power BI for retail: the KPIs that run the business"
description: "The Power BI KPIs retailers actually manage by: net sales, margin, stockout rate, basket size, inventory turns, and channel mix, sourced from POS, ERP, and e-commerce."
category: "Power BI"
primaryKeyword: "power bi for retail"
tags: ["power bi for retail", "retail kpis", "retail analytics", "inventory turns"]
takeaways:
  - "Retail Power BI works when every metric traces back to a decision an operator makes weekly: what to reorder, what to mark down, and which channel to feed."
  - "Six KPIs carry most retail reporting: net sales, gross margin, stockout rate, average basket, inventory turns, and channel mix."
  - "The hard part is not the charts, it is reconciling POS, ERP, and e-commerce into one model where a sale means the same thing everywhere."
  - "Model your calendar and product hierarchy once so store, region, and category roll up cleanly and comparisons hold across time."
  - "Refresh cadence should match the decision: daily sales and stock, weekly margin and turns, not everything streamed by the second."
faqs:
  - q: "What KPIs should a retail Power BI dashboard include?"
    a: "Start with net sales, gross margin, stockout rate, average basket size, inventory turns, and channel mix. Those six cover revenue, profitability, availability, customer behavior, working capital, and where demand is going. Add like-for-like (comparable store) sales once you can define which stores qualify. Every one of them should tie to a weekly decision an operator actually makes."
  - q: "Where does retail data for Power BI come from?"
    a: "Three systems usually feed it. Point-of-sale gives you transactions, baskets, and store-level revenue. The ERP holds inventory, cost, purchase orders, and the product master. The e-commerce platform contributes online orders, sessions, and fulfillment. The work is reconciling them into one model so a unit sold in a store and a unit sold online are counted the same way."
  - q: "How do you calculate inventory turns in Power BI?"
    a: "Inventory turns is cost of goods sold over average inventory at cost for the same period. In DAX you divide a COGS measure by an AVERAGEX over inventory snapshots, then annualize if the period is shorter than a year. Model inventory as periodic snapshots keyed to your date table so the average is honest rather than a single point-in-time reading."
---

Power BI for retail is the practice of turning point-of-sale, ERP, and e-commerce data into a small set of dashboards that operators use to decide what to reorder, what to mark down, and where to push demand. Done well, it replaces the Monday-morning spreadsheet scramble with one model everyone trusts. Done badly, it becomes another set of charts nobody opens because the numbers never match the register. The difference is rarely the visuals. It is whether the metrics tie to real decisions and whether the data underneath reconciles across systems that were never designed to agree.

This guide covers the KPIs that matter in retail, where the data comes from, and how to model it so the dashboards hold up.

## The six KPIs that carry retail reporting

Most retail reporting can be built from six measures. Each one answers a question an operator asks every week, and each one points toward an action rather than just describing the past.

| KPI | What it measures | Typical source | Decision it drives |
| --- | --- | --- | --- |
| Net sales | Gross sales less returns, discounts, and tax | POS, e-commerce | Where revenue is trending by store and category |
| Gross margin | Net sales less cost of goods, as a percent | POS + ERP cost | What to promote, what to reprice |
| Stockout rate | Share of SKUs or store-SKUs out of stock | ERP inventory + POS | What to reorder and expedite |
| Average basket | Sales divided by transactions | POS | Merchandising, bundling, and layout |
| Inventory turns | COGS over average inventory at cost | ERP | How much working capital is tied up |
| Channel mix | Share of sales by store, online, marketplace | POS + e-commerce | Where to allocate stock and spend |

None of these is exotic. The value comes from computing them once, consistently, so that a regional manager and a merchandising lead read the same margin number and never argue about whose figure is right. That single-definition discipline is what separates a dashboard people rely on from the [dashboards that get ignored](/blog/business-intelligence-dashboards).

## Where the data actually lives

Retail data is scattered across systems that each hold part of the truth.

- **Point-of-sale** is the transaction record: baskets, line items, tenders, returns, and store-level revenue. It is the source for net sales, basket size, and units sold.
- **The ERP** owns inventory positions, standard and landed cost, purchase orders, and the product master. Margin, stockouts, and inventory turns all depend on it.
- **The e-commerce platform** contributes online orders, sessions, fulfillment status, and often a separate product catalog that has to be mapped back to the ERP's SKUs.

The engineering challenge is reconciliation. The same product may carry three different identifiers across POS, ERP, and the webstore. A return processed online but restocked in a store crosses two systems. Tax and discount logic often differ between the register and the checkout page. If you skip this cleanup and point Power BI straight at raw tables, the numbers will not tie out and adoption dies on the first reconciliation dispute. This is where a proper [data engineering](/services/data-engineering) layer earns its keep: land the sources, conform the keys, and shape the data before it ever reaches a visual.

## Model the calendar and product hierarchy once

Two dimensions decide whether your retail model is pleasant or painful to work with.

The first is a proper date table covering your fiscal calendar, including the retail 4-5-4 weeks if you use them, so week-over-week and comparable-period math is correct. Retail comparisons are almost always against the same week last year, and that only works if the calendar is modeled explicitly rather than inferred from transaction dates.

The second is a clean product hierarchy: SKU rolling up to style, to subcategory, to category, to department. Store hierarchy works the same way, with store rolling up to district and region. Build these once and every measure aggregates correctly at every level, which means one net sales measure serves the store manager and the chief merchant without rework.

Here is inventory turns expressed as a DAX measure over snapshot inventory, keyed to the date table:

```dax
Inventory Turns =
VAR CogsPeriod = [Total COGS]
VAR AvgInventoryAtCost =
    AVERAGEX (
        VALUES ( 'Date'[Date] ),
        CALCULATE ( SUM ( InventorySnapshot[QtyOnHand] ) * SUM ( Product[UnitCost] ) )
    )
RETURN
DIVIDE ( CogsPeriod, AvgInventoryAtCost )
```

Modeling inventory as periodic snapshots rather than a single current balance is what makes the average honest. A point-in-time reading taken the day after a big delivery will understate turns badly.

## Refresh cadence matches the decision

Not every metric needs the same freshness. Sales and stock positions drive daily reorder and markdown decisions, so those warrant a morning refresh that has last night's transactions loaded before the team logs in. Margin and inventory turns move slowly and are reviewed weekly, so refreshing them constantly buys nothing but cost and complexity. Match the cadence to how often someone actually acts on the number. Setting that expectation openly also stops users wondering whether a figure is stale, which is its own quiet source of distrust.

## From reporting to action

The retailers who get real value out of Power BI treat each dashboard as a tool for a recurring decision with an owner. The reorder view belongs to the buyer and shows stockouts against lead time. The markdown view belongs to merchandising and shows margin and sell-through by style. The channel view belongs to the commercial lead and shows mix shifting between stores, online, and marketplaces so stock and spend follow demand.

That framing keeps the model lean. You resist the urge to add a chart because the data exists, and you add one because someone will act on it. If you want to see how this comes together in a working executive view, the [interactive dashboards](/dashboards) gallery shows retail models built on exactly these KPIs, and the [retail industry page](/industries/retail) covers the broader engagement.

Retail moves too fast for reports that only describe last month. Built on reconciled POS, ERP, and e-commerce data, with a clean calendar and hierarchy underneath, Power BI becomes the surface where buyers, merchants, and store operators make the same decisions from the same numbers. If you want help standing that up, you can [start a project](/#contact) or read more across [the blog](/blog).
