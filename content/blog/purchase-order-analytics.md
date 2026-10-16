---
title: "Purchase order analytics: following the order from PO to landed unit"
description: "The purchase order is where a trade transaction begins, but most analytics pick it up only at the invoice. Tracking the PO through to the landed unit is what connects buying decisions to the cost and timing they actually produced."
category: "Trade Operations"
primaryKeyword: "purchase order analytics"
tags: ["purchase order analytics", "PO analytics", "trade operations", "landed cost", "supplier performance"]
takeaways:
  - "The purchase order is the start of the trade transaction, so it is where cost and timing commitments are made."
  - "Most reporting starts at the invoice, which loses the link between what was ordered and what it became."
  - "Tracking the PO through receipt and landed cost shows the gap between the plan and the outcome."
  - "PO cycle time and fill rate are supplier-performance measures that buying decisions should use."
  - "Connecting the PO to the landed unit requires joining purchasing, shipment, and cost data to one order."
faqs:
  - q: "Why start analytics at the purchase order instead of the invoice?"
    a: "Because the purchase order is where the commitments are made. The price, the quantity, the supplier, the promised dates, all are set at the PO, and everything that follows is the consequence of those choices. Starting at the invoice measures what you were billed but loses the link to what you intended, so you cannot tell whether a supplier delivered what was ordered, on time, at the agreed cost. Anchoring analytics at the PO keeps the plan in view, which is what makes the outcome meaningful to compare against."
  - q: "What does PO cycle time tell you?"
    a: "PO cycle time is how long it takes from placing an order to receiving the goods, measured across many orders and suppliers. It is a core supplier-performance measure, because it captures reliability in a way a price does not. A supplier with a low price but a long and variable cycle time forces you to hold more inventory and order further ahead, which has a cost. Measuring cycle time, and its variability, lets buying decisions weigh reliability alongside price instead of treating price as the only comparable number."
  - q: "What does it take to connect a PO to its landed cost?"
    a: "It takes joining three kinds of record to a single order: the purchasing data that defines what was ordered, the shipment and receipt data that shows what arrived and when, and the cost data, freight, duty, and fees, that accumulates along the way. These live in different systems, often a purchasing or ERP system, a shipment or visibility system, and broker and carrier records, and they identify orders differently. The work is reconciling them to one order so the PO carries its full landed cost and timing, which is what turns PO analytics from a purchasing report into a view of the whole transaction."
---

Every imported unit starts as a line on a purchase order. That is where the price is agreed, the quantity is set, the supplier is chosen, and a delivery date is promised. It is, in other words, where the commitments that determine cost and timing are actually made. Yet most trade reporting picks up the story much later, at the invoice or the customs entry, by which point the link back to what was ordered has been lost. Purchase order analytics is about keeping that link intact, from the PO through to the landed unit.

## Commitments are made at the PO

The reason to anchor analytics at the purchase order is that the PO is where the decisions live. Price, quantity, supplier, and promised dates are all chosen there, and everything downstream is a consequence. If you want to know whether a buying decision was good, you have to compare the outcome against the commitment, and the commitment is the PO. Start measuring at the invoice and you can see what you were billed, but not whether it matched what you intended, which is the question that improves the next order.

## The invoice loses the plan

Reporting that begins at the invoice or the entry measures costs without the context that makes them judgeable. A freight charge, a duty amount, a landed cost, all are facts, but detached from the order they tell you what happened and not whether it was what you asked for. Did the supplier ship the quantity ordered? On the promised date? At the agreed unit cost once [landed cost](/blog/landed-cost-calculation) is counted? Those questions need the PO on one side and the outcome on the other. Dropping the PO is how operations end up with accurate cost reports that still cannot evaluate a supplier.

## Cycle time and fill rate are supplier performance

Two measures fall out of PO-anchored analytics and feed directly into buying. PO cycle time, the span from order to receipt, captures supplier reliability that a price cannot: a cheap supplier with a long, variable cycle forces inventory and lead-time cost you do not see in the quote. Fill rate, how completely and correctly an order was delivered, captures the other half of reliability. Together they turn [supplier selection](/blog/supplier-analytics-landed-cost) into a comparison that weighs reliability against price, rather than treating the quoted price as the only number that compares.

## The plan versus the outcome

The real value of following the PO through is seeing the gap between the plan and what it became. The order said one unit cost; the landed unit cost came in higher once freight and duty landed. The order promised a date; the goods arrived weeks later. Those gaps, measured across suppliers and over time, are where buying gets better, because they show which suppliers and which lanes consistently cost or slip more than they promised. A single order's gap is an anecdote; the pattern across orders is a supplier-management tool.

## It requires joining the order to everything it touches

Connecting a PO to its landed unit means joining purchasing data, shipment and receipt data, and accumulated cost to one order, across systems that identify orders differently. The purchasing system knows what was ordered, the [visibility system](/blog/shipment-visibility-software) knows what moved, the broker and carrier know the cost, and none of them agree on keys. Reconciling them to a single order is the [integration work](/docs/data-integration) that makes PO analytics possible, and it is what lifts it from a purchasing report to a view of the entire transaction, commitment through outcome.

If your analytics start at the invoice, you are measuring costs without the orders that caused them. [Tell us how your orders are tracked](/contact), or see how the [platform](/platform) connects the PO to the landed unit.
