---
title: "Landed cost on the balance sheet: why your inventory value may be wrong"
description: "Inventory is carried at cost, but for importers 'cost' is landed cost, not the supplier's invoice. When duty and freight are expensed instead of capitalized into the unit, inventory value and margin are both quietly misstated."
category: "Inventory"
primaryKeyword: "landed cost inventory valuation"
tags: ["inventory valuation", "landed cost", "COGS", "margin", "inventory analytics"]
takeaways:
  - "Inventory is carried at cost, and for importers true cost is landed cost, not the invoice price."
  - "When duty and freight are expensed separately, inventory value understates what the goods cost."
  - "That misstatement flows into margin, because cost of goods sold is understated too, then corrected in lumps."
  - "Capitalizing landed cost into the unit makes inventory value and margin reflect reality continuously."
  - "Doing it requires landed cost modeled per unit and connected to the inventory record."
faqs:
  - q: "What does it mean to capitalize landed cost into inventory?"
    a: "It means carrying each unit of inventory at its full landed cost, the supplier price plus the freight, duty, and other costs of bringing it in, rather than at the supplier invoice price alone. Capitalizing a cost means attaching it to the asset, the inventory, so it sits on the balance sheet until the goods are sold and then moves to cost of goods sold. The alternative, expensing freight and duty as they are incurred, takes them to the income statement immediately and separately, which detaches them from the units they belong to and understates what the inventory actually cost."
  - q: "Why does expensing duty and freight distort margin?"
    a: "Because it splits a unit's true cost across two places and two timings. The supplier price lands in cost of goods sold when the unit sells, but the freight and duty for that unit were expensed earlier and separately, so the margin reported on the sale looks better than it is, the full cost of the unit was never matched against its revenue. The expensed costs then show up as lumpy charges that depress margin in the periods they hit, unrelated to the sales they actually belonged to. The result is margin that is overstated per unit and jumpy in aggregate, neither of which reflects reality."
  - q: "What does it take to value inventory at landed cost?"
    a: "It takes landed cost modeled at the unit level, freight and duty allocated down to each unit rather than held as shipment totals, and that per-unit landed cost connected to the inventory record so each unit carries its true cost. The hard part is the allocation and the connection, because freight and duty arrive as shipment-level amounts and have to be pushed down to units and then tied to the inventory system. That is an analytics and integration task, and it is the same per-unit landed cost model that pricing and sourcing decisions need, so the work serves several purposes at once."
---

Inventory sits on the balance sheet at cost, which sounds unambiguous until you ask what cost means for an importer. The supplier's invoice is only part of what a unit costs to have on the shelf; the freight to move it and the duty to clear it are as much a part of its cost as the price paid for it. If those are expensed separately as they are incurred, rather than capitalized into the unit, then the inventory value on the balance sheet understates what the goods actually cost, and the error does not stay on the balance sheet. It flows into margin, and it makes margin both overstated and jumpy.

## Cost means landed cost

For a domestic distributor, carrying inventory at the invoice price is close enough, because little stands between the invoice and the shelf. For an importer, a great deal stands between them: [freight](/blog/freight-cost-analytics), [duty](/blog/effective-duty-rate), and the other costs of bringing goods in, which together can be a large fraction of the unit's true cost. Carrying inventory at the invoice price alone therefore understates it, sometimes materially. The correct cost of an imported unit is its [landed cost](/blog/landed-cost-calculation), and valuing inventory at anything less is valuing it at a number everyone knows is incomplete, which quietly undermines every figure built on it.

## Expensing detaches cost from the unit

The common practice that causes the trouble is expensing freight and duty as they are incurred, taking them straight to the income statement rather than attaching them to the units they belong to. This detaches a unit's cost from the unit. The supplier price rides with the unit into cost of goods sold when it sells; the freight and duty for that same unit were booked earlier and elsewhere. The two halves of the unit's cost never meet, so they are never matched against the unit's revenue together. The accounting is not necessarily wrong by its own rules, but it scatters a single economic cost across places and timings that make the resulting margin unreliable.

## The distortion lands in margin

The consequence shows up as margin that is both overstated and lumpy. Overstated, because the margin reported on each sale omits the freight and duty that were expensed elsewhere, so the unit looks more profitable than it was. Lumpy, because those expensed costs then hit as separate charges that depress margin in whatever period they fall, unconnected to the sales they actually belonged to. A finance team reading that margin sees good per-unit numbers punctuated by unexplained drops, and neither the good numbers nor the drops reflect what the goods truly cost to sell. [Margin analysis](/blog/margin-bridge-why-margin-moved) built on this is analyzing an artifact of the accounting rather than the economics.

## Capitalizing it makes the numbers honest

Capitalizing landed cost into each unit fixes both ends at once. Inventory on the balance sheet then carries its true cost, so the asset is stated correctly, and when a unit sells, its full cost, supplier price plus freight and duty, moves to cost of goods sold together, so margin reflects what the unit actually cost to sell. The lumpy charges disappear, because the costs ride with the units instead of hitting separately. Inventory value and margin both become continuous and accurate rather than understated and jumpy, which is what makes them usable for decisions rather than merely compliant with a rulebook.

## It needs per-unit landed cost, connected

Valuing inventory at landed cost requires landed cost modeled at the unit level, freight and duty allocated down to each unit rather than left as shipment totals, and that per-unit cost connected to the [inventory record](/industries/inventory-wms) so each unit carries it. The allocation and the connection are the work, because freight and duty arrive as shipment-level amounts that have to be pushed down to units and tied into the inventory system. That is an analytics and [integration](/docs/data-integration) task, and crucially it is the same per-unit landed cost model that [pricing and sourcing](/blog/total-cost-of-sourcing) already need, so building it once serves the balance sheet, the income statement, and the commercial decisions together. Delivered in [your own tenant](/blog/analytics-in-your-own-tenant), the valuation logic is yours and auditable.

If your duty and freight are expensed rather than capitalized, your inventory value and your margin are both telling you something other than the truth. [Tell us how your inventory is costed](/contact), or see how the [platform](/platform) carries landed cost to the unit.
