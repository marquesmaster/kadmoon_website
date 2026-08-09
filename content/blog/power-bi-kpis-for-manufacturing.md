---
title: "Power BI for manufacturing: OEE and the KPIs that matter"
description: "The Power BI KPIs that run a plant: OEE broken into availability, performance, and quality, downtime Pareto, cost per line, and scrap, sourced from MES and ERP."
category: "Power BI"
primaryKeyword: "power bi for manufacturing"
tags: ["power bi for manufacturing", "oee dashboard", "manufacturing kpis", "mes analytics"]
takeaways:
  - "OEE is the anchor metric in manufacturing, and its value comes from splitting it into availability, performance, and quality so you know which loss to attack."
  - "A downtime Pareto turns a list of stoppage reasons into a ranked target list, because a handful of causes usually drive most of the lost time."
  - "Cost per line and scrap rate connect the plant floor to the P&L, which is what gets manufacturing dashboards funded and used by leadership."
  - "MES supplies the machine-level events and counts, the ERP supplies cost, orders, and the material master, and the model has to reconcile them."
  - "Model shifts, lines, and a proper calendar once so OEE rolls up cleanly from machine to line to plant."
faqs:
  - q: "How do you calculate OEE in Power BI?"
    a: "OEE is availability times performance times quality. Availability is run time over planned production time. Performance is actual output over the theoretical output at ideal cycle time for that run time. Quality is good units over total units produced. In Power BI you build each of the three as its own measure from MES event and count data, then multiply them, which lets you see not just the OEE number but which of the three factors is dragging it down."
  - q: "What data do you need for a manufacturing Power BI dashboard?"
    a: "Two systems carry most of it. The MES provides machine states, run and downtime events, cycle counts, and reject counts at high frequency. The ERP provides work orders, standard costs, the material and routing master, and labor. You reconcile them on work order and machine or line so a downtime event and its cost land in the same model."
  - q: "What is a downtime Pareto and why does it matter?"
    a: "A downtime Pareto ranks stoppage reasons by total lost time, from largest to smallest, usually with a cumulative percentage line. It matters because downtime causes are rarely evenly spread. A small number of reasons typically account for most of the lost hours, so the Pareto tells you exactly which two or three problems to fix first for the biggest availability gain."
---

Power BI for manufacturing is the practice of turning MES and ERP data into dashboards that plant leaders use to raise output and cut loss. The center of gravity is OEE, overall equipment effectiveness, but a single OEE percentage on a screen is close to useless on its own. The value comes from breaking it apart, tying it to cost, and ranking the losses so a plant manager knows which problem to attack on Monday. This guide covers the manufacturing KPIs that earn their place, where the data comes from, and how to model it so the numbers hold up on the floor and in the boardroom.

## OEE is the anchor, but only when you split it

OEE is the product of three factors, and reporting it as one number hides everything useful. Two plants can both run at 65 percent OEE for completely different reasons: one loses to breakdowns, the other to slow cycles or scrap. You only know which by looking at the components.

| Factor | Formula | What a low score means | Primary source |
| --- | --- | --- | --- |
| Availability | Run time / planned production time | Breakdowns, changeovers, waiting | MES event log |
| Performance | Actual output / ideal output at cycle time | Slow running, minor stops | MES cycle counts |
| Quality | Good units / total units | Scrap, rework, defects | MES reject counts |
| OEE | Availability x Performance x Quality | Combined effectiveness | Derived |

Reporting all three side by side turns OEE from a scorecard into a diagnosis. When availability is the culprit you look at maintenance and changeovers; when performance drags you look at cycle times and micro-stops; when quality is low you look at the process and materials. The [manufacturing industry page](/industries/manufacturing) covers how this fits a broader plant analytics engagement.

Here is OEE composed from its three factors in DAX:

```dax
Availability = DIVIDE ( [Run Time Min], [Planned Time Min] )

Performance =
DIVIDE ( [Total Count], [Run Time Min] * [Ideal Rate Per Min] )

Quality = DIVIDE ( [Good Count], [Total Count] )

OEE = [Availability] * [Performance] * [Quality]
```

Building each factor as its own measure means every chart, from a single machine to the whole plant, can show the breakdown, not just the headline.

## Downtime Pareto: rank the losses

Once availability is exposed as the problem, the next question is which stoppages to fix. A downtime Pareto answers it. Sort every downtime reason by total lost minutes, largest first, and overlay a cumulative percentage. In almost every plant a handful of reasons account for the majority of lost time, so the Pareto converts a long, flat list of stoppage codes into a ranked target list. Fix the top two or three and availability moves; chase the long tail and you spend effort for little gain.

The Pareto only works if downtime reasons are captured consistently at the source. If operators code the same stoppage three different ways, the ranking scatters and the signal is lost. That reason-code hygiene is part of the modeling work, not an afterthought.

## Connect the floor to the P&L

OEE and downtime are operational metrics. What gets manufacturing dashboards funded and read by leadership is connecting them to money, and two measures do that.

**Cost per line** rolls the cost of running each production line, from labor and machine time to consumables, against the good units it produced. It shows which lines are expensive per unit and why, and it makes the case for capital investment concrete. **Scrap rate**, the share of production that ends up rejected or reworked, is quality loss expressed as wasted material and time. A point of scrap on a high-volume line is real money, and putting it next to cost per line shows leadership exactly where margin leaks on the floor.

These two metrics are the bridge between the plant and the business. They turn an OEE conversation that a CFO might tune out into a cost conversation the CFO owns.

## MES and ERP: reconciling two clocks

Manufacturing data comes from two systems that run on different clocks and speak different languages.

- **The MES** records the floor in near real time: machine states, run and downtime events with reason codes, cycle counts, and reject counts, often at the second or sub-minute level. It is the source for every OEE component and the downtime Pareto.
- **The ERP** holds the commercial and cost picture: work orders, standard costs, the material and routing master, and labor. Cost per line and scrap valuation depend on it.

The reconciliation happens on work order and machine or line. A downtime event in the MES has to find its cost basis in the ERP, and a scrap count has to pick up the standard cost of the material wasted. The systems rarely share keys cleanly, so a [data engineering](/services/data-engineering) layer that conforms them is the difference between a model that ties out and one that leadership stops trusting after the first mismatch.

## Model shifts, lines, and time once

Two dimensions decide whether the model rolls up cleanly. The first is an equipment hierarchy: machine to line to area to plant, so OEE and cost aggregate correctly at every level without rewriting measures. The second is a time model that understands shifts and planned production time, because availability is meaningless without knowing what counted as planned run time versus a scheduled break or a no-demand idle period. Model these once and a single OEE measure serves the line supervisor watching one cell and the operations director comparing plants.

Refresh cadence should follow the decision. Floor teams reacting to downtime want near-real-time MES data; a plant OEE review that happens each shift or each day does not need streaming. Match freshness to the action so you are not paying for real-time infrastructure that nobody watches in real time.

## Turning the model into decisions

The manufacturers who get value from Power BI tie each view to an owner and a recurring decision. The downtime Pareto belongs to maintenance and reliability. The OEE-by-line view belongs to the shift supervisor. Cost per line and scrap belong to operations leadership making the investment and process calls. That framing keeps the model focused on losses worth fixing rather than charts worth admiring.

To see how OEE, downtime, and cost come together in a working plant model, the [interactive dashboards](/dashboards) gallery shows manufacturing views built on exactly these KPIs. If you want help standing one up from your MES and ERP, you can [start a project](/#contact) or read more across [the blog](/blog).
