---
title: "Power BI Premium to Fabric: what changed and what to do"
description: "Power BI Premium per-capacity moved to Microsoft Fabric capacities. What changed, the time-boxed transition, cost implications, and the steps to take now."
category: "Microsoft Fabric"
primaryKeyword: "power bi premium to fabric"
tags: ["power bi premium to fabric", "microsoft fabric", "fabric capacity", "power bi licensing"]
takeaways:
  - "Power BI Premium per-capacity (the P SKUs) is being retired in favor of Microsoft Fabric capacities (the F SKUs), which run the same Power BI workloads plus the full Fabric platform."
  - "Fabric capacities are pausable and billed by the second when you commit month-to-month, so you can turn compute off during idle hours in a way the old P SKUs never allowed."
  - "The transition is time-boxed: Microsoft is not renewing Premium capacity subscriptions indefinitely, so plan the move before your current term ends rather than waiting to be forced."
  - "F64 is the capacity size that matches P1 and unlocks free Power BI viewing for report consumers, so it is the usual landing spot for organizations moving off a P1."
  - "Moving to Fabric is mostly a licensing and capacity-assignment change for existing Power BI content, but it also opens OneLake, Direct Lake, and the rest of the platform once you are on it."
faqs:
  - q: "Is Power BI Premium being discontinued?"
    a: "Power BI Premium per-capacity, the P SKU capacities, are being retired and replaced by Microsoft Fabric capacities (F SKUs). Power BI itself is not going away. It becomes one workload running on a Fabric capacity. Power BI Pro and Premium Per User licenses continue as before. The change affects capacity-based customers, who move from P SKUs to equivalent F SKUs."
  - q: "What Fabric capacity replaces Power BI Premium P1?"
    a: "F64 is the Fabric capacity that matches a P1. It provides the same compute and, importantly, keeps the ability for free (unlicensed) users to view Power BI content, which requires an F64 or larger capacity. Organizations on P1 typically move to F64, and those on P2 or P3 move to F128 or F256 respectively."
  - q: "Do Fabric capacities cost more than Power BI Premium?"
    a: "The list rates are comparable at equivalent sizes, but Fabric changes the cost model. Fabric capacities can be paused and are billed by the second on the pay-as-you-go option, so you can shut compute off during nights and weekends. A reserved one-year commitment lowers the rate further. Whether you pay more or less depends on how much you use pause and reservations."
---

Microsoft is moving Power BI Premium off its old capacity model and onto Microsoft Fabric. In plain terms: Power BI Premium per-capacity, the P SKUs that let unlimited users view reports on a fixed monthly capacity, is being retired, and its replacement is a Fabric capacity, the F SKUs. The same Power BI reports, datasets, and dataflows keep running. They just run on a Fabric capacity instead of a Premium one, and that capacity can now also run the full Fabric platform: data engineering, warehousing, real-time analytics, and OneLake storage. This article covers what actually changed, the time-boxed transition you are on, what to do about it, and how the cost math shifts.

## What changed

Under the old model, you bought a Power BI Premium capacity (P1, P2, P3) and it ran Power BI workloads only. Microsoft Fabric folds Power BI into a broader analytics platform, and the capacity that powers it is a Fabric capacity (F2 through F2048). A Fabric F SKU runs everything a Premium P SKU did, plus the rest of Fabric, on the same pooled compute.

The important continuities:

- Power BI Pro and Premium Per User (PPU) licenses are unchanged. This is a capacity change, not a per-user license change.
- Existing Power BI content does not need to be rebuilt. Reports, semantic models, and workspaces move to the new capacity as they are.
- Free users can still view Power BI content, but only on an F64 capacity or larger, which mirrors the old P1 threshold.

The important changes:

- The P SKUs are being retired, so capacity customers move to F SKUs.
- Fabric capacities are pausable and can be billed by the second, which the P SKUs never were.
- Once on a Fabric capacity, you get access to OneLake, Direct Lake mode, and the other Fabric workloads without buying anything separate.

## The capacity mapping

Fabric capacity units (CU) are sized so that each P SKU has a direct F SKU equivalent at double the number. The one that matters most is F64, because that is the size where free viewing turns on.

| Power BI Premium | Fabric capacity | Free viewers |
| --- | --- | --- |
| P1 | F64 | Yes |
| P2 | F128 | Yes |
| P3 | F256 | Yes |
| (below P1) | F2 to F32 | No, all viewers need Pro |

If you are on P1 today and you rely on unlicensed users viewing reports, F64 is your landing spot. Dropping below F64 to save money means every viewer suddenly needs a Power BI Pro license, which usually costs more than the capacity you saved.

## The time-boxed transition

This is the part to act on. Microsoft is not renewing Premium capacity subscriptions indefinitely. As existing Premium terms come up, the path forward is a Fabric capacity, not another Premium renewal. The exact deadline depends on your agreement and renewal date, so the safe move is to treat your current Premium term as the window and plan the transition to land before it closes rather than waiting to be migrated on someone else's schedule.

Being time-boxed does not mean rushed. It means the decision has a deadline, and the organizations that handle it well start the capacity planning and cost modeling a quarter or two ahead rather than reacting at renewal.

## What to do now

The move itself is mostly administrative for existing Power BI content, but doing it well takes a few deliberate steps.

1. Inventory your current capacity usage. Look at how loaded your P SKU actually is at peak. Many Premium capacities are oversized, and Fabric's pause and autoscale options mean you may not need to match the old size one for one around the clock.
2. Pick the right F SKU. If free viewing matters, F64 is the floor. If it does not, and you have a small licensed audience, a smaller and cheaper capacity may serve.
3. Create the Fabric capacity in the Azure portal and reassign your workspaces to it. Workspaces move between capacities without rebuilding content.
4. Decide on billing. Pay-as-you-go lets you pause; a reserved one-year commitment lowers the rate but removes the pause savings. Many organizations reserve a base capacity and use pause or autoscale for burst.
5. Validate refreshes, RLS, and report performance on the new capacity before you retire the old one.
6. Plan what to do with the new platform. Once you are on Fabric, Direct Lake and OneLake are available, and that is where the migration stops being a cost exercise and starts being an opportunity.

## The cost model shifts

At equivalent sizes, the list rate of an F SKU is comparable to the P SKU it replaces, so this is not primarily a price increase. What changes is the shape of the bill.

Fabric capacities can be paused. On the pay-as-you-go option they are billed by the second while running, so a capacity that only needs to serve business-hours reporting can be shut off at night and on weekends, something the old fixed monthly Premium bill never allowed. That alone can cut compute cost substantially for workloads that are not 24/7. A reserved instance, by contrast, is a one-year commitment at a lower hourly rate but always on, which suits capacities that run continuously.

The practical guidance: model your actual usage pattern. A steady, always-busy capacity is cheapest on a reservation. A spiky or business-hours workload is often cheaper pay-as-you-go with scheduled pausing. Fabric gives you both levers, and the savings come from matching the lever to the pattern.

## The upside beyond licensing

It would be a missed opportunity to treat this purely as a forced license swap. A Fabric capacity runs the whole platform, which means the same compute now serving your Power BI reports can also run [data engineering](/services/data-engineering) pipelines, a warehouse, and Direct Lake semantic models that query OneLake data without importing or duplicating it. Direct Lake mode reads Delta tables directly from OneLake, giving import-mode speed without the refresh window, which changes how you architect large models.

If you are already consolidating your data platform, moving from Synapse to Fabric pairs naturally with this capacity change, and our [Synapse to Fabric migration](/synapse-to-fabric-migration) service covers that path. For the reporting side, [Microsoft Fabric consulting](/services/microsoft-fabric) and [Power BI consulting](/services/power-bi) cover how to use the platform once your capacity is in place, and [data governance](/services/data-governance) covers keeping OneLake and your semantic models trustworthy as usage grows.

## The bottom line

Power BI Premium per-capacity is being retired, and Fabric capacities are the replacement. For existing Power BI content the move is mostly a capacity reassignment, F64 is the usual match for a P1, and the transition is time-boxed to your current Premium term, so plan it deliberately rather than waiting to be forced. Handle the cost model on purpose, using pause and reservations to fit your usage, and treat the arrival on Fabric as the start of a broader platform rather than the end of a licensing chore. To scope your move, [start a project](/#contact) or read more across [the blog](/blog).
