---
title: "Landed cost software: how to calculate true import costs"
description: "How landed cost software calculates true import costs across duties, freight, and fees, delivers real-time quotes, integrates with your ERP, and gets built."
category: "Trade & Supply Chain"
primaryKeyword: "landed cost software"
tags: ["landed cost calculation", "total landed cost", "import cost software", "customs duties freight"]
---

The price on a supplier's invoice is not what a product actually costs to get into your warehouse and onto a shelf. Duties, freight, insurance, brokerage, and a dozen smaller fees sit between the quoted unit price and the true cost, and getting that number wrong quietly erodes margin on every order. The stakes are national in scale: in fiscal year 2024 CBP [processed $3.37 trillion in imports across 38.4 million entries and collected more than $88 billion in duties, taxes, and fees](https://www.cbp.gov/newsroom/stats/trade). Every one of those entries carried a landed cost that someone had to compute correctly. This guide covers what goes into landed cost, why it is hard to compute accurately, and what it takes to build an engine you can trust.

## What goes into landed cost

Total landed cost is the fully burdened cost of a product delivered to its final destination. It starts with the goods themselves and adds every cost incurred along the way.

The major components are the product cost, international freight, duties and tariffs, insurance, brokerage and handling fees, and any inland transportation on both ends. There are smaller line items too. The merchandise processing fee on a formal entry is an ad valorem charge of [0.3464 percent of the entered value, with a fiscal-year 2026 floor of $33.58 and a cap of $651.50](https://www.cbp.gov/trade/basic-import-export/user-fee-table). Ocean shipments also carry a harbor maintenance fee of [0.125 percent of cargo value under 19 CFR 24.24](https://www.ecfr.gov/current/title-19/chapter-I/part-24/section-24.24). Individually these look trivial. Collectively they move the number. The reason it matters is margin. A business that prices off the invoice cost and ignores landed cost can be selling at a loss on some items without realizing it, because the real cost was never calculated.

The distortion is worst where you would least expect it. Low-value, heavy, or bulky products carry freight and handling costs that can rival or exceed the goods themselves, so their landed cost is a large multiple of the invoice price. High-value, compact items are the opposite. If you apply a flat markup across a catalog with both, you overprice some products out of the market and underprice others below cost. Only a real landed cost calculation, item by item, tells you which is which.

## Duties, tariffs, freight, and fees

Two parts of the calculation carry most of the complexity: duties and freight.

Duties depend on the product's classification under the Harmonized Tariff Schedule, its country of origin, and its customs value. The same physical item can carry very different duty rates depending on how it is classified and where it is from, and the ground shifts fast. The average effective US tariff rate was [about 2.3 percent in 2024, then climbed to roughly 7.7 percent in 2025 as new measures took effect](https://usafacts.org/answers/what-is-the-average-us-tariff-rate-overall/country/united-states/). A landed cost engine that hardcodes last year's rates will be wrong the moment policy changes. Accurate duty calculation depends on accurate classification, which is its own discipline, covered in [HTS classification software](/blog/hts-classification-software). Get the code wrong and every landed cost derived from it is wrong.

Freight is complicated in a different way. It is volatile and it is quoted at the shipment level. Drewry's World Container Index closed 2024 at [about $3,803 to move a 40-foot container, with the Shanghai to New York lane near $3,420 and Shanghai to Los Angeles near $2,290](https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry). Because that cost lands per container rather than per unit, the software has to allocate it down to individual products fairly. The allocation method, by weight, by volume, by value, materially changes the per-unit cost, and reasonable businesses choose differently. A good engine makes the allocation method explicit and consistent rather than burying it.

## Currency, insurance, and allocation

Cross-border trade introduces currency. Supplier invoices, freight quotes, and duties may be denominated in different currencies, and the exchange rate used, and when it is locked, affects the result. Software has to handle conversion deliberately, using a defined rate at a defined point, so the same shipment does not produce different numbers on different days for no real reason.

Allocation is the other subtle problem, and it deserves care because it is where quiet errors hide. Shipment-level costs, freight, insurance, brokerage, have to be spread across the line items in that shipment. Do it by value and cheap heavy items look artificially cheap. Do it by weight and light expensive items do. There is no single correct method, but there is a correct principle: choose a method, apply it consistently, and make it visible so finance can audit it. Ad hoc allocation is how landed cost numbers lose credibility.

| Cost component | Typical basis | 2024 to 2026 reference figure |
|---|---|---|
| Duty | Ad valorem on customs value | ~2.3% avg effective (2024), ~7.7% (2025) |
| Merchandise processing fee | 0.3464% of value | $33.58 min, $651.50 max (FY2026) |
| Harbor maintenance fee | 0.125% of value | Ocean imports, 19 CFR 24.24 |
| Ocean freight | Per 40ft container, allocated | ~$3,803 WCI composite (Dec 2024) |

## Real-time landed cost at quote time

The highest-value version of this software calculates landed cost at the moment it is needed, not weeks later in a spreadsheet reconciliation. When a buyer is deciding whether to source an item, or a sales rep is quoting a customer, having the true landed cost right there changes the decision.

Real-time calculation is harder than batch. It means the classification, duty rates, current freight assumptions, and exchange rates all have to be available instantly through an API, and the engine has to return a number in the flow of a quote or a purchase decision. With tariff rates moving by several percentage points inside a single year, a cached or stale rate can turn a profitable order into a loss. Done well, real-time calculation turns landed cost from a backward-looking accounting exercise into a forward-looking sourcing and pricing tool. That shift, from reporting to decision support, is usually where the return on building this lives.

## Integrating with ERP and pricing

Landed cost is only useful if it reaches the systems where money is decided: the ERP, the purchasing system, and pricing. A number trapped in a standalone tool that nobody consults does nothing.

The integration work connects the landed cost engine to your ERP, whether that is NetSuite, SAP, or Dynamics, so calculated costs flow into inventory valuation, cost of goods sold, and margin analysis automatically. It also feeds purchasing, so sourcing decisions compare true costs across suppliers, and pricing, so sell prices are set against real cost rather than invoice cost. This is a data and integration problem as much as a calculation problem, and it shares the patterns in [supply chain ERP integration](/blog/supply-chain-erp-integration).

The accuracy payoff compounds across volume. An importer filing even a few thousand entries a year, a small slice of the 38.4 million CBP processed in fiscal 2024, is making thousands of pricing and sourcing decisions off whatever cost number the system hands it. If duty is off because a rate changed, or freight is allocated by the wrong basis, that error repeats on every unit of every affected order. Wiring the engine directly into inventory valuation and cost of goods sold means the correction happens once, in one place, rather than in a hundred spreadsheets that each drift on their own schedule.

## Building a landed cost engine

Whether to build or buy comes down to how much your situation differs from what packaged tools assume. Off-the-shelf landed cost features exist inside some trade and ERP products, and for a straightforward importer they can be enough. The case for building appears when your allocation logic, your product mix, your supplier terms, or your integration needs do not fit the packaged model.

A custom engine is worth considering when you need allocation methods the packaged tools do not support, when you need real-time calculation embedded in your own quoting or sourcing systems, when you have complex duty scenarios involving multiple trade programs, or when landed cost accuracy is directly tied to your margin and you want to own the logic. Built well, on a modern stack with a clean API, the engine becomes a service the rest of your systems call, with the classification, duty, freight, and allocation logic in one auditable place. For where this fits in a broader trade platform, see [custom US Customs software](/blog/custom-us-customs-software).

Landed cost is one of those calculations that looks simple and is not, and the gap between the invoice price and the true cost is exactly where margin quietly leaks. With duties, fees, and freight all moving independently, that gap widens whenever the numbers go stale. If you want an engine that gives your team an accurate number at the moment they need it, you can [start a project](/#contact), or explore [custom software development across the US](/custom-software-development) for how we build trade and supply chain systems.
