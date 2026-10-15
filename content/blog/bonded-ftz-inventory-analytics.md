---
title: "Inventory analytics for bonded and FTZ stock: days on hand with duty in view"
description: "Bonded and FTZ inventory defers duty, which changes the math. Why days on hand, aging, and inventory value need the deferred duty in view, and what to measure to decide what to withdraw."
category: "Inventory"
primaryKeyword: "FTZ inventory"
tags: ["FTZ inventory", "bonded warehouse", "days on hand", "inventory analytics", "duty deferral"]
takeaways:
  - "Bonded and FTZ inventory defers duty until goods are withdrawn, so the cost tied up in stock is different from ordinary inventory."
  - "Days on hand and aging still matter, but they have to be read with the deferred duty and the cash-flow value of deferral in view."
  - "Inventory should be valued at true landed cost, so bonded and zone stock carries an accurate value for finance and insurance."
  - "The withdraw decision, what to take into commerce and when, is a cash-flow optimization that needs duty and holding data together."
  - "Keeping the customs status and the inventory in one model is an analytics problem most operations split across a WMS and a spreadsheet."
faqs:
  - q: "How is bonded or FTZ inventory different to manage?"
    a: "The difference is duty timing. In a bonded warehouse or a Foreign-Trade Zone, duty is not paid when goods arrive; it is deferred until the goods are withdrawn into U.S. commerce, and goods re-exported from the zone can avoid duty entirely. That changes the economics of holding stock: the capital tied up is the goods value plus the duty you have not yet paid, and the timing of withdrawal becomes a cash-flow decision. Ordinary inventory metrics still apply, but they have to account for the deferred duty to be accurate."
  - q: "Why value inventory at landed cost?"
    a: "Because supplier price understates what inventory is actually worth and what it cost. Valuing stock at true landed cost, with freight, duty, and fees allocated to the unit, gives finance an accurate inventory value, gives insurance the right figure, and makes the withdraw decision honest. For bonded and FTZ stock there is a twist: the duty is deferred, so the model has to track both the landed cost and the duty status, what has been paid and what is still owed on withdrawal."
  - q: "What should you measure for bonded and FTZ inventory?"
    a: "The usual inventory metrics, read with customs status in view: days on hand and aging by SKU and site including the bonded and zone stock, inventory value at landed cost, and the duty deferred on what is still in bond or the zone. On top of that, the cash-flow value of continuing to defer versus withdrawing, and the re-export share that could avoid duty entirely. Together these answer the real question, what to withdraw and when, which ordinary inventory reports cannot because they do not carry the duty."
---

Inventory in a bonded warehouse or a [Foreign-Trade Zone](/blog/foreign-trade-zone-duty-deferral) is not ordinary inventory, because the duty on it has not been paid yet. Duty is deferred until the goods are withdrawn into commerce, and goods re-exported from a zone can avoid it entirely. That single fact changes the math on days on hand, on inventory value, and on when to move stock. Managed with ordinary inventory reports that do not carry the duty, bonded and zone stock is measured blind to the thing that makes it different.

## Deferred duty changes what the stock costs

In ordinary inventory, the capital tied up is the landed cost of what is sitting. In bonded or FTZ stock, part of that cost, the duty, is deferred, so the real position is the goods value plus the duty you have not paid, held against the cash-flow benefit of not having paid it. As tariffs rise, that deferred duty grows, and so does the value of deferring it. Reading bonded stock with the same lens as duty-paid inventory misses both the liability and the benefit.

## Days on hand and aging still matter

The deferral does not make the usual metrics irrelevant; it adds a dimension. [Days on hand](/docs/kpi-library) and aging by SKU and site still tell you what is moving and what is stuck, and stuck inventory is still capital and space. The difference is that for bonded and zone stock, slow-moving items also sit with their duty deferred, which can be an advantage or a trap depending on whether they will sell, be re-exported, or eventually be withdrawn at a higher duty. The metric is the same; the reading has duty in it.

## Value it at landed cost, with duty status

Inventory valued at supplier price is wrong everywhere, and especially here. Valuing stock at true [landed cost](/blog/landed-cost-calculation) gives finance and insurance an accurate figure, and for bonded and FTZ stock the model has to go further and track the duty status: what has been paid, what is deferred, and what would be owed on withdrawal. That is the difference between an inventory value that looks right and one that reflects the actual position, including the duty waiting on the other side of the withdrawal.

## The withdraw decision is a cash-flow question

The decision bonded and FTZ stock forces, and ordinary inventory does not, is when to withdraw. Withdraw and you pay the duty and free the goods for sale; hold and you keep deferring but tie up the stock. Re-export and you may avoid the duty altogether. Making that call well needs the duty and the holding data together: the deferred amount, the days on hand, the re-export share, and the cash-flow value of waiting. That is an optimization, and it is invisible if the customs status lives apart from the inventory.

## One model, not a WMS plus a spreadsheet

The common failure is structural: the WMS tracks the stock and a spreadsheet tracks the customs side next to it, and the two never quite line up. The analytics that make bonded and FTZ inventory manageable keep both in one model, so days on hand, value, deferred duty, and the withdraw decision are all read off the same current data. It is the same [inventory analytics](/platform) an operation should run, with the customs status carried through instead of bolted on.

If you hold stock in bond or a zone and track the duty side separately, the gap between them is where the risk and the opportunity both sit. [Tell us how your inventory moves](/contact), or see how the [platform](/platform) models inventory with customs in view.
