---
title: "Days of supply and stockout risk: the inventory question importers should ask weekly"
description: "Importers with long lead times live between two failures: running out and tying up cash in excess stock. Days of supply, measured against real demand and in-transit inventory, is how you see which one you are closer to."
category: "Inventory"
primaryKeyword: "days of supply"
tags: ["days of supply", "stockout risk", "inventory analytics", "in-transit inventory", "importers"]
takeaways:
  - "Days of supply converts a stock quantity into time, which is the unit import decisions are actually made in."
  - "Measured honestly, days of supply counts in-transit inventory and real demand, not just what is on the shelf."
  - "Stockout risk and excess stock are two ends of the same measure, so one view manages both."
  - "Long cross-border lead times make the measure more important, because reorder decisions commit months ahead."
  - "The measure is only reliable when demand, on-hand, and in-transit data are joined and current."
faqs:
  - q: "Why measure days of supply instead of a stock quantity?"
    a: "Because a quantity does not tell you whether you are about to run out. Three thousand units is comfortable for one SKU and a crisis for another, depending on how fast it sells. Days of supply converts the quantity into time at the current rate of demand, which is the unit import decisions are actually made in. You reorder when your days of cover fall below your lead time, because that is when the next shipment will not arrive before the shelf empties. Expressed as a quantity, that comparison is impossible; expressed in days, it is direct."
  - q: "Should days of supply include in-transit inventory?"
    a: "For an importer, yes, and leaving it out is the most common way the measure goes wrong. A large share of an importer's inventory is often on the water, already paid for and already moving. Counting only on-hand stock makes cover look shorter than it is and triggers panic reorders that create excess when the in-transit stock lands. Including in-transit, with each shipment's expected arrival, gives an honest picture of when stock will actually be available to sell or use."
  - q: "How does days of supply help with excess stock, not just stockouts?"
    a: "Because too much cover and too little cover are two ends of the same measure. A SKU with far more days of supply than its lead time requires is cash tied up in inventory and warehouse cost being spent to hold it. Managing days of supply as a range, with alerts at both ends, catches overstock as well as stockout risk. Operations that treat the measure only as a stockout defense tend to drift overstocked, because nothing pushes back against the fear of running out."
---

An importer with a ninety-day lead time is making decisions about March in December. By the time a shortage shows up on the shelf, the shipment that would have prevented it left the origin port weeks ago, or was never ordered. This is why a raw stock quantity is close to useless for import planning. Three thousand units means nothing until you know how long it lasts, and the measure that answers that is days of supply.

## Time is the unit of the decision

Days of supply converts a quantity into time: how many days the current stock will last at the current rate of demand. That conversion matters because import decisions are made in time, not in units. You do not reorder because you have fewer than three thousand units; you reorder because you have fewer days of cover than your lead time, which means the next shipment will not arrive before you run out. Expressed in days, inventory lines up directly against lead time, and the reorder decision becomes a comparison rather than a guess.

## Count what is on the water

The common mistake is to measure days of supply from on-hand stock alone. For an importer, that ignores the inventory already paid for and already moving, the containers [in transit](/blog/bonded-ftz-inventory-analytics) that will land in the coming weeks. Counting only the shelf makes cover look shorter than it is and triggers panic reorders that create excess later. Counting in-transit as well, with each shipment's expected arrival, gives an honest picture of when stock will actually be available. For long lead times, the in-transit position is often larger than the on-hand position, so leaving it out is not a rounding error.

## Both failures, one measure

Days of supply is usually framed around stockouts, but it manages the opposite failure at the same time. Too few days of cover is stockout risk; too many is cash tied up in excess stock and the warehouse cost of holding it. They are two ends of the same number, which is why a single view can manage both: a range, not a target, with alerts when a SKU drifts below the lead time or far above it. Managing only one end, as a pure stockout defense, is how operations end up overstocked, because the fear of running out has no counterweight.

## Long lead times raise the stakes

The longer the lead time, the more a days-of-supply view is worth, because the decisions it informs commit further ahead and are harder to reverse. A domestic reorder can be corrected in a week; an ocean reorder commits cash and capacity for months. That makes the accuracy of the measure, and the [variability of the transit](/blog/transit-time-variability) behind it, matter more for importers than for purely domestic operations. The buffer you hold is an insurance premium against lead-time uncertainty, and days of supply is how you check whether you are paying too much or too little.

## It is only as good as the join

A days-of-supply view is reliable only when three things are current and joined: demand, on-hand, and in-transit. Demand comes from sales or usage, on-hand from the warehouse or [ERP](/industries/inventory-wms), in-transit from shipment and order records. If any of them is stale or disconnected, the measure drifts and the alerts cry wolf, which is how teams learn to ignore them. Holding the three together and current is a [data integration](/docs/data-integration) problem before it is a reporting one, and it is the part that makes the measure trustworthy enough to act on.

If your reorder decisions are being made on shelf counts and instinct, days of supply across on-hand and in-transit is the view that steadies them. [Tell us how your inventory data is kept](/contact), or see how the [platform](/platform) models inventory and cover.
