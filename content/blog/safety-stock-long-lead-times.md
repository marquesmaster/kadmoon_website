---
title: "Safety stock when lead times cross oceans"
description: "Safety stock rules built for domestic reorder cycles break when lead times run to months and vary shipment to shipment. Sizing the buffer to real lead-time uncertainty is what keeps importers from overpaying for insurance they do not need."
category: "Inventory"
primaryKeyword: "safety stock long lead times"
tags: ["safety stock", "lead time variability", "inventory analytics", "importers", "working capital"]
takeaways:
  - "Safety stock is insurance against uncertainty in demand and supply, and for importers supply is the larger source."
  - "Long lead times do not by themselves require more buffer; variability in those lead times does."
  - "A flat weeks-of-cover rule overcharges steady items and underprotects erratic ones."
  - "Sizing the buffer to measured demand and lead-time variability is what right-sizes the working capital in it."
  - "The inputs come from demand history and actual transit data, held together and kept current."
faqs:
  - q: "Does a long lead time mean I need more safety stock?"
    a: "Not on its own. Safety stock covers uncertainty, not duration. A long lead time that is very steady, where shipments reliably take the same time, needs less buffer than a shorter lead time that swings unpredictably, because you can plan around a steady number no matter how long it is. What drives safety stock is the variability in lead time and demand over the lead time, not the length of the lead time by itself. Treating length as the trigger is why some importers hold far more buffer than their actual uncertainty warrants."
  - q: "What is wrong with a flat weeks-of-cover rule?"
    a: "A rule like 'hold six weeks of cover on everything' is simple, and it is wrong in both directions at once. It overcharges steady, predictable items, which tie up cash they do not need, and it underprotects erratic ones, which still stock out despite the rule. A flat rule ignores the fact that items differ in how variable their demand and supply are, which is exactly the thing safety stock is supposed to respond to. Sizing the buffer item by item, to each item's measured variability, fixes both errors."
  - q: "What data do you need to size safety stock properly?"
    a: "Two things, measured and kept current: the variability of demand over the lead time, from sales or usage history, and the variability of the lead time itself, from actual transit and receipt data rather than quoted transit times. Joined together, they describe how much uncertainty each item carries, which is what the buffer is sized against. The data is not exotic, but it has to be held consistently over time and across systems, which is the part that usually has to be built before the sizing can be trusted."
---

Safety stock rules are usually inherited from a world of domestic reorder cycles, where lead times are measured in days and a shipment that runs late can be chased down. Carry those rules into cross-border trade, where lead times run to months and vary from shipment to shipment, and they quietly stop working. The buffer is either too large, draining cash, or too small, failing exactly when a shipment runs long. Fixing it starts with being clear about what safety stock is for.

## Safety stock is insurance against uncertainty

A buffer exists to absorb uncertainty, in demand and in supply, so that normal variation does not cause a stockout. For an importer, supply is usually the larger source of uncertainty, because [transit times vary](/blog/transit-time-variability) and the lead time is long enough that a lot can happen inside it. The buffer is an insurance premium against that uncertainty. Like any insurance, you can pay too much for it, and most flat rules do, because they size the premium to something other than the risk.

## Length is not the trigger; variability is

The intuition that a long lead time demands a big buffer is half right and expensive. Duration alone does not require safety stock; uncertainty does. A lead time of ninety days that is reliably ninety days can be planned around precisely, and needs little buffer beyond demand variation. A lead time that averages forty days but swings from twenty-five to sixty needs a real buffer, because you cannot trust the average. Sizing to length overcharges the steady items and still leaves the erratic ones exposed. The thing to measure is the spread, not the duration.

## The flat rule is wrong in both directions

A single weeks-of-cover rule across the catalog is simple and comforting, and it errs both ways at once. Steady, predictable items get more buffer than their uncertainty justifies, tying up [cash and warehouse space](/blog/bonded-ftz-inventory-analytics). Erratic items get less than they need and stock out anyway, which prompts someone to raise the rule for everything, making the overstock worse. The rule fails because it ignores the one thing safety stock should respond to, which is how much each item actually varies. Items are not uniform in their uncertainty, so a uniform buffer cannot be right.

## Size the buffer to the item

The alternative is to size each item's buffer to its measured uncertainty: the variability of its demand over the lead time, and the variability of the lead time itself. That produces larger buffers where they are earned and smaller ones where they are not, which both protects service and releases the working capital trapped in blanket cover. It turns safety stock from a policy set once into a number that reflects each item's real risk, and it connects directly to the [days-of-supply](/blog/days-of-supply-stockout-risk) view that drives reordering, because both are built from the same uncertainty.

## The inputs have to be real and current

Right-sizing a buffer depends on two measured inputs: demand variability from sales or usage history, and lead-time variability from actual transit and receipt data, not quoted transit times. The quoted time is a promise; the buffer has to cover what actually happens. Holding demand history and real transit actuals together, current and joined across the [ERP and carrier systems](/docs/data-integration), is what makes the sizing trustworthy. Without that, safety stock stays a guess dressed up as a policy, which is where most of the overpayment hides.

If your safety stock is a flat rule carried over from shorter lead times, it is almost certainly costing you cash on the steady items and still letting the erratic ones run short. [Tell us how your lead times behave](/contact), or see how the [platform](/platform) models inventory and buffer.
