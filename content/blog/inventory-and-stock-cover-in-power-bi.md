---
title: "Inventory and stock cover in Power BI: seeing the cash tied up in stock"
description: "Inventory is cash sitting on a shelf. How a governed Power BI model shows days of stock cover, slow-moving and dead stock, and inventory aging, so operations and finance can free up working capital without risking stockouts."
category: "Power BI"
primaryKeyword: "inventory analytics power bi"
tags: ["Power BI", "inventory", "stock cover", "operations", "working capital"]
takeaways:
  - "Inventory is working capital tied up in stock, so the operational question and the financial question are the same one, and they should be read from the same model."
  - "Stock cover, the days of demand each item's stock represents, is the measure that turns a pile of quantities into a judgment about too much or too little."
  - "Slow-moving and dead stock is where cash hides; a model that flags it by item and location is what lets you free that cash deliberately."
  - "Inventory aging, how long stock has sat, is the early warning for write-downs, and it belongs in the same view as cover and demand."
  - "Done once in a governed model, inventory reporting is current and reconciles to finance, instead of a monthly spreadsheet that is stale and disputed."
faqs:
  - q: "How does Power BI calculate days of stock cover?"
    a: "Stock cover is on-hand quantity divided by a rate of demand, expressed in days. In a governed model, on-hand comes from the inventory or ERP system and demand comes from sales or consumption history, and the measure is defined once as cover = on-hand / average daily demand. Because it is a measure rather than a static calculation, it recalculates on current data and can be sliced by item, location, or category. The important design choice is which demand window to use, recent weeks for fast movers, a longer window for seasonal items, and a good model makes that explicit rather than burying it. The result is a number that says how long the stock will last at the current rate, which is what turns a quantity into a decision."
  - q: "Can Power BI identify slow-moving and dead stock?"
    a: "Yes, and it is one of the most valuable things inventory reporting does. Slow-moving stock is inventory whose demand is low relative to how much is held, and dead stock is inventory with little or no recent movement at all. A governed model flags both by comparing on-hand to recent demand per item and location, so the stock that is quietly absorbing cash shows up as a list you can act on rather than a surprise at stocktake. Seeing it by item and location matters, because the same product can be dead in one warehouse and fine in another. This turns freeing up working capital from a vague intention into a specific set of items to clear, return, or stop reordering."
  - q: "Why does inventory aging matter for finance, not just operations?"
    a: "Because aging is the early signal of a write-down, and a write-down is a hit to the P&L. Inventory aging shows how long stock has been held, bucketed by age, so stock drifting toward obsolescence is visible before it has to be written off. Operations uses it to prioritize what to move; finance uses it to anticipate provisions and protect margin. That shared use is exactly why inventory belongs in a model both read: the quantity on the shelf, the cash it represents, and the age that threatens its value are the same data seen through two lenses. Keeping them in separate systems is what lets an aging problem become a write-down nobody saw coming."
  - q: "What systems does Power BI need to report on inventory?"
    a: "The core inputs are on-hand stock, from the inventory module or ERP, and demand, from sales or consumption history; many setups add purchasing data for inbound stock and open orders. Power BI reads these, and a governed model joins them so cover, movement, and aging are computed consistently from one source. The common source systems are NetSuite, Dynamics 365 Business Central, SQL Server, and spreadsheets where stock is tracked by hand. The quality of the reporting depends on the on-hand data being accurate and the item master being clean, which is often the first thing a build has to sort out. Once that foundation is in place, the inventory view is current and reconciles to the stock and the ledger."
---

Inventory looks like an operational concern and is really a financial one. Every unit on a shelf is cash that has been spent and not yet recovered, so the question operations asks, do we have the right stock, is the same question finance asks, is our working capital tied up in the wrong things. The trouble is that these two questions usually get answered from different spreadsheets that do not agree. A governed Power BI model answers both from one place, and the measures that make it useful are worth understanding.

## Quantities are not the answer

A report that shows how many of each item you hold is almost useless on its own. Ten thousand units is too many of one product and far too few of another, and the raw count does not tell you which. The number that matters is stock cover: how many days of demand the current stock represents. A fast-moving product with two days of cover is a stockout waiting to happen; a slow one with four hundred days of cover is cash buried on a shelf.

Stock cover is what turns inventory from a pile of quantities into a judgment. In a governed model it is defined once, on-hand divided by a rate of demand, and it recalculates on current data, sliced by item, location, and category. The one design decision that matters is the demand window, recent weeks for fast movers, a longer span for seasonal items, and a good model makes that choice visible instead of hiding it.

## Where the cash hides

The most valuable thing an inventory model does is surface slow-moving and dead stock. Slow-moving stock has low demand relative to how much you hold; dead stock has barely moved at all. Both quietly absorb cash, and both are easy to miss, because nothing about them generates an alert the way a stockout does. They just sit there.

A governed model flags them by comparing on-hand to recent demand, per item and per location. That last part matters, because the same product can be dead in one warehouse and selling fine in another, and a company-wide view would hide it. Seeing the specific items and locations is what turns freeing up working capital from an intention into a worklist: what to discount, return to a supplier, redistribute, or simply stop reordering. The cash was always there; the model is what makes it visible enough to act on.

## Aging is the early warning

Stock does not lose its value all at once. It ages toward obsolescence, and at some point it has to be written down, which hits the P&L. Inventory aging shows how long each item has been held, bucketed by age, so stock drifting toward a write-down is visible while there is still time to do something about it.

This is where inventory reporting earns its place with finance, not just operations. Operations reads aging to prioritize what to clear. Finance reads it to anticipate provisions and protect margin. Same data, two lenses, and keeping them in separate systems is exactly how an aging problem becomes a write-down nobody saw coming. In one model, the quantity, the cash it represents, and the age that threatens its value sit together.

## One model operations and finance both trust

The reason to build this in a governed Power BI model rather than a spreadsheet is the same reason it matters elsewhere: the spreadsheet is a snapshot that ages the moment it is made, and different copies disagree. When cover, movement, and aging are defined once and read from the inventory system and the ledger, the inventory view is current and reconciles to both. Operations and finance stop arguing about whose stock number is right and start deciding what to do about the stock.

The foundation this depends on is accurate on-hand data and a clean item master, which is often the first thing a build has to fix. Once that is in place, the payoff is direct: you can see which stock is at risk of a stockout, which is tying up cash, and which is aging toward a write-down, all in one view that operations acts on and finance trusts. For most businesses that carry stock, that view pays for itself in the working capital it frees.
