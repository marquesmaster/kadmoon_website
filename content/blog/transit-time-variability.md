---
title: "Transit time variability: why the average lead time lies"
description: "Planning around an average transit time looks reasonable and quietly fails. What moves inventory and service is the variability around that average, and measuring it changes how much buffer you actually need."
category: "Logistics"
primaryKeyword: "transit time variability"
tags: ["transit time variability", "lead time analytics", "logistics analytics", "safety stock", "OTIF"]
takeaways:
  - "An average transit time hides the variation that actually drives inventory and service decisions."
  - "Buffer inventory is sized against the spread of transit times, not the average, so the spread is what matters."
  - "A lane with a longer but steadier transit can need less buffer than a shorter, erratic one."
  - "Measuring variability requires actual milestone data over many shipments, not the carrier's committed time."
  - "Reducing variability, or shifting volume to steadier lanes, frees cash tied up in buffer stock."
faqs:
  - q: "Why is the average transit time misleading?"
    a: "Because inventory and service are not planned against the average; they are planned against the bad case. If a lane averages 28 days but ranges from 22 to 45, you cannot run your inventory as though it takes 28 days, because the shipments that take 40 are the ones that cause stockouts. The average describes a typical shipment, but your buffer has to cover the late ones, so the spread around the average is the number that drives the decision, and the average on its own can lead you to hold far too little."
  - q: "How does variability connect to inventory?"
    a: "Safety stock exists to cover the uncertainty in supply, and transit variability is a large part of that uncertainty for imported goods. The wider the spread of transit times, the more buffer you need to maintain the same service level, because you are insuring against a later worst case. That means a lane with a longer but very steady transit can require less safety stock than a shorter lane that swings unpredictably. Measuring variability is what lets you size the buffer to the real uncertainty instead of guessing."
  - q: "What data do you need to measure transit variability?"
    a: "You need actual door-to-door or port-to-port times for many shipments on each lane, drawn from carrier milestones and your own receipt records, not the carrier's committed or quoted transit time. The committed time is a promise; variability is about what actually happened, shipment after shipment. Once those actuals are collected and joined to the lane, you can describe each lane by its spread, not just its average, and size inventory and carrier decisions against the spread."
---

A transit time of 28 days sounds like a fact you can plan around. You add it to your order lead time, set your reorder points, and move on. The planning looks reasonable, and it quietly fails, because the shipments that cause problems are never the 28-day ones. They are the ones that took 42. Planning around the average ignores the thing that actually drives inventory and service, which is how much transit time varies around that average.

## The average describes the wrong shipment

An average is a statement about a typical shipment, and your inventory is not sized for the typical shipment. It is sized for the late one. If a lane averages 28 days but ranges from 22 to 45, the shipments at 40 and above are the ones that empty the shelf, and no amount of averaging makes them go away. Planning to the average means planning to be caught short whenever a shipment runs long, which on a variable lane is often. The number that matters for the decision is the spread, and the average on its own hides it.

## Buffer is sized against the spread

[Safety stock](/blog/safety-stock-long-lead-times) exists to absorb uncertainty, and for imported goods, transit variability is a large share of that uncertainty. The wider a lane's spread, the more buffer you need to hold the same service level, because you are insuring against a later worst case. This is why the average is not just incomplete but misleading: two lanes can share an average and need very different buffers. A lane that is longer but steady can be cheaper to serve than a shorter lane that swings, because the steady one lets you hold less. You cannot see any of this from the average.

## Longer and steadier can beat shorter and erratic

The practical consequence is that reliability competes with speed. A carrier or lane that takes a few days longer but arrives within a tight band may let you carry materially less inventory than a faster lane that is unpredictable. That trade sits at the center of [carrier selection](/blog/carrier-scorecard-analytics), and it is invisible if transit is tracked only as an average. Once variability is measured, the choice between two lanes or two carriers includes the inventory each one forces you to hold, which is often the larger cost.

## You have to measure actuals, not promises

Variability cannot be read off a rate sheet. The carrier's committed transit is a promise; variability is about what actually happened across many shipments. Measuring it means collecting actual times from [carrier milestones](/blog/shipment-visibility-software) and your own receipt records, joining them to the lane, and describing each lane by its distribution rather than a single figure. That requires [data from several systems](/docs/data-integration) held consistently over time, which is exactly the kind of record most operations do not keep by hand but analytics can keep automatically.

## Reducing variability frees cash

Once lanes are described by their spread, two levers appear. You can reduce variability, by shifting volume to steadier carriers or routing, or you can accept it and size the buffer honestly. Either way, the cash tied up in safety stock becomes a number you manage on purpose rather than a cushion you set once and forget. Tied back to [inventory analytics](/blog/forecast-accuracy-cross-border-inventory) and [service metrics](/blog/otif-dwell-service-metrics), transit variability stops being a logistics footnote and becomes a lever on working capital.

If you are planning around average transit times, the variability you are ignoring is probably sitting in your safety stock. [Tell us which lanes you run](/contact), or see how the [platform](/platform) models transit reliability.
