---
title: "Power BI KPIs for logistics and freight"
description: "The logistics KPIs worth putting on a Power BI dashboard, from OTIF and dwell time to cost per shipment, and how to model them so the numbers are trusted and actionable."
category: "Power BI"
primaryKeyword: "Power BI KPIs for logistics"
tags: ["logistics kpis", "power bi logistics", "freight analytics", "otif dashboard"]
takeaways:
  - "The logistics KPIs that drive action cluster around service (OTIF, transit time), cost (cost per shipment, freight spend), and flow (dwell time, dock-to-stock)."
  - "OTIF (on-time in-full) is the headline service metric, but it only helps when you can break it down by lane, carrier, and customer to find the cause."
  - "Cost per shipment and freight spend as a percentage of revenue turn a cost center into something you can benchmark and manage."
  - "Most logistics data is scattered across a TMS, WMS, ERP, and carrier feeds; the value is in modeling it into one semantic layer so the KPIs reconcile."
  - "Dashboards should support a decision (reroute, renegotiate, re-slot), not just report a number, so pair each KPI with the drill-down that explains it."
faqs:
  - q: "What are the most important logistics KPIs?"
    a: "The ones that map to a decision. For service: OTIF (on-time in-full) and average transit time versus target. For cost: cost per shipment, freight spend as a percentage of revenue, and cost per mile or per unit. For flow and efficiency: dwell time, dock-to-stock time, and load or trailer utilization. For inventory-adjacent operations: order cycle time and perfect order rate. The exact set depends on whether you run transportation, warehousing, or both, but service, cost, and flow are the three families that matter."
  - q: "How do you build a logistics dashboard in Power BI?"
    a: "Start from the decisions each role makes (reroute a lane, renegotiate a carrier, re-slot a warehouse), then model the data those decisions need. In practice that means pulling from your TMS, WMS, ERP, and carrier feeds into one governed semantic model so a metric like OTIF is defined once and reconciles everywhere. Then build views per audience: an executive summary, an operations view with lane and carrier drill-downs, and detail down to the shipment. Pair every KPI with the breakdown that explains a bad number."
  - q: "Why do logistics KPIs often not reconcile?"
    a: "Because the data lives in several systems that count things differently. The TMS, WMS, ERP, and carrier portals each have their own definition of a shipment, a delivery date, or a cost, so a number pulled from one rarely matches another. The fix is a semantic layer: model the sources into one governed model with a single definition of each KPI, so OTIF or cost per shipment means the same thing regardless of which system the raw data came from."
---

Logistics runs on numbers, but most logistics teams are data-rich and insight-poor: a transportation system here, a warehouse system there, carrier portals, and an ERP, none of which agree on what a "shipment" even is. Power BI earns its place in logistics not by drawing prettier charts but by pulling those sources into one trusted model where the KPIs finally reconcile. Here are the metrics worth dashboarding and how to model them.

## The three families of logistics KPIs

Useful logistics metrics fall into three groups, each tied to a different kind of decision.

- **Service.** OTIF (on-time in-full), average transit time versus target, and perfect order rate. These tell you whether you are keeping promises to customers.
- **Cost.** Cost per shipment, freight spend as a percentage of revenue, cost per mile or per unit, and accessorial charges. These turn logistics from an unmanaged cost center into something you can benchmark and squeeze.
- **Flow.** Dwell time, dock-to-stock time, order cycle time, and load or trailer utilization. These reveal where things slow down and capacity is wasted.

A dashboard that covers service, cost, and flow gives an operator the whole picture; one that shows only one family hides the trade-offs between them.

## OTIF is the headline, but only with drill-down

OTIF is the metric executives ask for first, and on its own it is nearly useless, because "OTIF was 91%" does not tell you what to fix. The value is in the breakdown: OTIF by lane, by carrier, by customer, and by cause (late vs. short). A good [logistics dashboard](/industries/logistics) lets you click from the headline number to the three lanes and one carrier dragging it down, which is the difference between reporting a problem and solving it.

## Cost metrics make logistics manageable

Freight is often one of the largest controllable costs in the business and one of the least visible. Cost per shipment and freight spend as a percentage of revenue, trended over time and split by mode, lane, and carrier, turn that opacity into leverage: you can see which lanes are drifting expensive, where accessorials are piling up, and which carriers to renegotiate. Without the model behind it, this analysis is a monthly spreadsheet exercise; with it, it is a live view.

## The real work is the model, not the visuals

The reason logistics KPIs so often fail to reconcile is that the source systems, [TMS, WMS, ERP](/services/data-engineering), and carrier feeds, each define shipments, dates, and costs their own way. The value Power BI adds is upstream of the charts: modeling those sources into one governed [semantic model](/blog/what-is-a-semantic-model) with a single definition of each KPI, so OTIF means the same thing whether the raw data came from the TMS or the ERP. Get that right and every downstream report agrees; skip it and you have prettier versions of the same disagreements.

## Build for the decision

Finally, design each view around the decision it supports: an executive summary for the weekly review, an operations view with lane and carrier drill-downs for the people who reroute and renegotiate, and shipment-level detail for investigation. Every KPI should sit next to the breakdown that explains a bad number, because a dashboard that only reports without pointing to a cause gets glanced at and ignored.

If your logistics numbers live in four systems and agree in none, the first win is one model they all feed. [Tell us about your stack](/contact), or see how we work with [logistics and supply chain](/industries/logistics).
