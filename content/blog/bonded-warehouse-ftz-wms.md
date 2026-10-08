---
title: "Bonded warehouses and FTZs: what your WMS must handle"
description: "How bonded warehouses and Foreign-Trade Zones change inventory management, and the warehouse-management capabilities a trade operation needs to handle them correctly."
category: "Inventory"
primaryKeyword: "bonded warehouse software"
tags: ["bonded warehouse software", "ftz inventory", "foreign trade zone software", "trade wms"]
takeaways:
  - "Bonded warehouses and Foreign-Trade Zones let importers defer or avoid duty, but only if inventory is tracked to the rules."
  - "The core requirement is knowing the customs status of every unit: duty-paid, in-bond, or in-zone, and when that status changes."
  - "A generic WMS counts stock; a trade WMS tracks stock plus its customs status, landed cost, and the events that move it between statuses."
  - "Getting it wrong risks duty errors and compliance problems; getting it right turns duty deferral into real cash-flow benefit."
  - "The same system should value inventory at landed cost, so finance and operations read the same numbers."
faqs:
  - q: "What is a bonded warehouse?"
    a: "A bonded warehouse is a facility where imported goods can be stored without paying customs duty until they are withdrawn for US consumption. If the goods are later re-exported, duty may not be owed at all. The benefit is cash flow and flexibility: you defer duty until you actually sell into the US market, or avoid it on goods that leave again. The requirement is that you track the goods and their customs status accurately the whole time they are in bond."
  - q: "What is a Foreign-Trade Zone (FTZ)?"
    a: "A Foreign-Trade Zone is a designated area, treated as outside US customs territory for duty purposes, where goods can be stored, handled, or manufactured with duty deferred, reduced, or eliminated depending on what happens to them. Importers use FTZs to defer duty, avoid it on re-exports, and sometimes lower it. Like bonded storage, the benefit depends entirely on precise record-keeping: the zone's books have to show what came in, what happened to it, and what left."
  - q: "Why can't a generic WMS handle bonded or FTZ inventory?"
    a: "A generic warehouse management system tracks quantity and location, which answers 'how much do we have and where is it.' Bonded and FTZ inventory adds a second dimension: the customs status of each unit and the events that change it. A standard WMS has no concept of in-bond versus duty-paid, no link to the customs entries, and no way to produce the records the programs require. Handling it correctly needs a WMS built for trade, where customs status is tracked alongside quantity and location."
---

For an importer, when you pay duty is almost as important as how much. Bonded warehouses and Foreign-Trade Zones exist to give you control over that timing, letting you defer duty until goods actually enter US commerce, or avoid it on goods that re-export. The benefit is real, but it is conditional: it only holds if your inventory records are precise enough to satisfy the rules. That is a demand most warehouse software was never built to meet.

## What bonded and FTZ storage do

A [bonded warehouse](/services/inventory-wms) lets you store imported goods without paying duty until you withdraw them for US consumption. A Foreign-Trade Zone, treated as outside customs territory for duty purposes, lets you store, handle, or even manufacture with duty deferred, reduced, or eliminated depending on the outcome. Both turn duty from a cost you pay at the border into one you manage on your own timeline. For an operation with significant duty and inventory held over time, that timing is a meaningful cash-flow lever.

## The requirement: customs status, tracked

The catch is record-keeping. These programs work because the goods and their customs status are tracked precisely the entire time. You have to know, per unit, whether it is duty-paid, in-bond, or in-zone, and you have to record every event that changes that status: receipt, withdrawal, transfer, re-export, or consumption. The books have to reconcile, because they are what customs relies on. Lose track, and you face duty errors and compliance exposure that erase the benefit.

## Why a generic WMS falls short

A standard warehouse-management system answers one question well: how much of something do we have, and where is it. Bonded and FTZ inventory adds a second question the generic WMS has no answer for: what is the customs status of this unit, and what moved it there. A generic system has no concept of in-bond versus duty-paid, no link to the customs entries that set the status, and no way to produce the periodic records the programs require. You can try to track it in a parallel spreadsheet, which reintroduces exactly the error risk the programs punish.

## What a trade WMS adds

A warehouse-management system built for trade tracks the customs dimension alongside the usual ones. Every unit carries its status, linked to the [customs entry](/services/customs-compliance) behind it. Movements update the status and the records automatically. Receiving, putaway, picking, and shipping all work as in any WMS, with the added discipline that a withdrawal from bond or a transfer within a zone is recorded as the customs event it is. The result is that the operational view and the customs books stay in sync without a second system.

## Value it at landed cost

One more capability ties it together: inventory should be valued at true [landed cost](/blog/landed-cost-calculation), not supplier price. When the WMS carries landed cost per unit, finance and operations read the same numbers, and the value of what is sitting in bond or in a zone is accurate. That matters for reporting, for insurance, and for deciding what to withdraw and when.

If you use bonded storage or an FTZ and track the customs side in a spreadsheet next to your WMS, that gap is where the risk lives. [Tell us how your inventory moves](/contact), or see how we build [inventory and WMS](/services/inventory-wms).
