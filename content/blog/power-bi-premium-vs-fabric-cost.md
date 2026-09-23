---
title: "Power BI Premium vs Fabric: the capacity cost decision"
description: "How to think about Power BI Premium (P-SKU) versus Microsoft Fabric (F-SKU) capacity: what changed, how the SKUs compare, and how to size the move without overpaying."
category: "Cost & Pricing"
primaryKeyword: "Power BI Premium vs Fabric cost"
tags: ["power bi premium vs fabric", "fabric capacity cost", "f-sku vs p-sku", "power bi premium retirement"]
takeaways:
  - "Microsoft is steering Power BI Premium capacity toward Fabric F-SKUs, so most Premium-capacity customers face a sizing and cost decision, not just a rename."
  - "Fabric F-SKUs unify Power BI, data engineering, and the lakehouse under one capacity, and can be paused, which changes the cost math versus an always-on P-SKU."
  - "The right F-SKU is not a like-for-like swap of your P-SKU; it depends on your actual capacity usage, so size it from usage metrics, not from the old label."
  - "Reserved (annual) capacity is cheaper per unit than pay-as-you-go, but pay-as-you-go plus pausing can win for bursty or non-production workloads."
  - "The decision is as much about workload design as licensing: a well-modeled estate needs less capacity, so cost control starts in the semantic model."
faqs:
  - q: "Is Power BI Premium being replaced by Fabric?"
    a: "Microsoft has been consolidating Power BI Premium capacity into Microsoft Fabric, so Premium-capacity customers are being moved toward Fabric F-SKUs rather than staying on standalone P-SKUs. Power BI itself is not going away; it runs on Fabric capacity. The practical effect is that if you are on Premium capacity you have a transition and a sizing decision to make. Check Microsoft's current licensing documentation for the exact timeline that applies to your tenant, since these dates move."
  - q: "How do Fabric F-SKUs compare in cost to Power BI Premium P-SKUs?"
    a: "F-SKUs are sized by capacity units like P-SKUs, but they cover the whole Fabric workload set (Power BI, data engineering, warehousing, real-time) on one capacity, and F-SKUs can be paused so you stop paying when idle. That makes a direct P-to-F comparison misleading: the right question is how much capacity your workloads actually use, and whether pausing or reserved pricing fits your usage pattern. Size from your capacity metrics, not from a like-for-like SKU swap."
  - q: "How do I size the right Fabric capacity?"
    a: "Start from real usage. Use the capacity metrics app to see how much your current workloads actually consume at peak and on average, then map that to an F-SKU with headroom rather than matching your old P-SKU label. Factor in whether workloads are always-on or bursty (pausing favors F pay-as-you-go), and whether you will commit annually (reserved capacity is cheaper per unit). Sizing on evidence typically avoids the overpay that comes from a nervous like-for-like upgrade."
---

For teams on Power BI Premium capacity, the move to Microsoft Fabric is not just a new name on the invoice; it is a real decision about which capacity to buy and how to size it. Get it right and you consolidate more workloads onto one capacity, sometimes for less. Get it wrong and you either overpay for headroom you never use or throttle the reports your business runs on. This guide frames the decision without pretending there is a single right SKU.

## What actually changed

Microsoft has been consolidating Power BI Premium capacity into [Microsoft Fabric](/services/microsoft-fabric), so Premium-capacity customers are steered toward Fabric F-SKUs rather than standalone P-SKUs. Power BI has not gone anywhere; it now runs on Fabric capacity alongside data engineering, warehousing, and real-time workloads. The timeline for your tenant is the kind of date that shifts, so confirm it against [Microsoft's current licensing docs](https://learn.microsoft.com/fabric/enterprise/licenses) rather than a blog. The point for planning is simple: if you are on Premium capacity, a transition and a sizing decision are coming.

## Why F is not a like-for-like swap of P

It is tempting to map your P1 to the nearest F-SKU and move on. Resist it, for two reasons. First, an F-SKU covers the entire Fabric workload set on one capacity, so what used to be separate concerns can share it, changing how much you actually need. Second, F-SKUs can be **paused**, so idle time stops costing money, something a P-SKU never offered. Both facts break the tidy P-to-F equivalence. The real input is your capacity usage, not your old label.

## Reserved vs. pay-as-you-go

Two buying modes, two different sweet spots. Reserved (annual) capacity is cheaper per unit and suits steady, always-on production workloads. Pay-as-you-go is more expensive per unit but, combined with pausing, can be cheaper overall for bursty, development, or non-production capacities that do not need to run around the clock. Many estates end up with a mix: reserved for the production capacity that is always serving reports, pay-as-you-go for the workloads that come and go.

## Sizing from evidence, not nerves

The most common way to overpay is a nervous like-for-like upgrade, buying a big F-SKU "to be safe." Do the opposite: use the [capacity metrics](https://learn.microsoft.com/fabric/enterprise/metrics-app) to see what your workloads actually consume at peak and on average, then choose an F-SKU with sensible headroom. Sizing on real numbers almost always lands smaller than the fear-based guess, and you can scale up later far more easily than you can claw back an over-commitment.

## Cost control starts in the model

Capacity is downstream of design. A bloated semantic model, [import datasets that should be Direct Lake](/services/power-bi), and unoptimized DAX all burn capacity units that a cleaner build would not. Before you commit to a bigger SKU, it is worth asking whether the workload itself can be lighter, because a well-modeled estate needs less capacity to serve the same reports. Often the cheapest capacity decision is a modeling fix, not a bigger purchase.

Planning a Premium-to-Fabric move is exactly the kind of thing to size before you commit. [Tell us about your current capacity](/contact) and we will help you right-size it, or [see how ongoing Fabric ownership is structured](/packages).
