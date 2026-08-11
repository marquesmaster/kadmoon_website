---
title: "Microsoft Fabric capacity planning: sizing F-SKUs without overpaying"
description: "How Microsoft Fabric capacities and F-SKUs work: capacity units, smoothing, bursting, pause and resume, and how to right-size compute without paying for idle."
category: "Microsoft Fabric"
primaryKeyword: "microsoft fabric capacity planning"
tags: ["microsoft fabric capacity", "fabric f-sku", "fabric cost", "capacity units"]
takeaways:
  - "A Fabric capacity is a pool of compute measured in capacity units (CUs). Every workload you run, from Power BI queries to warehouse loads to Spark jobs, draws from the same pool."
  - "F-SKUs are the capacity sizes (F2 through F2048). Each step doubles the CUs, and F64 is the threshold where free (unlicensed) users can view Power BI content."
  - "Fabric smooths short spikes over time and lets jobs burst above their CU limit temporarily, so you rarely need to size for the single busiest second."
  - "Pausing a capacity stops compute billing entirely, which is the main lever for cutting cost on workloads that do not run around the clock."
  - "Right-sizing means starting from measured usage in the Capacity Metrics app, not from a guess, and reserving a base size while using pause or scaling for the rest."
faqs:
  - q: "How do I pick the right F-SKU?"
    a: "Start from measured demand, not intuition. Run a candidate size for a week or two and watch the Microsoft Fabric Capacity Metrics app for sustained overload, not brief spikes, since Fabric smooths those. If free Power BI viewing matters, F64 is your floor because that is where unlicensed viewing turns on. Below that, every viewer needs a Power BI Pro license, which usually costs more than the capacity you saved. Size to your steady-state load and let bursting and smoothing absorb the peaks."
  - q: "What is the difference between an F-SKU and a P-SKU?"
    a: "P-SKUs are the older Power BI Premium per-capacity sizes and run Power BI workloads only. F-SKUs are Microsoft Fabric capacities and run the same Power BI workloads plus the full Fabric platform on shared compute. The CU counts line up at double the number: P1 maps to F64, P2 to F128, P3 to F256. Unlike P-SKUs, F-SKUs can be paused and, on pay-as-you-go, are billed by the second."
  - q: "How does pause and resume save money?"
    a: "When a capacity is paused, you stop paying for its compute (OneLake storage is billed separately and continues). A capacity that only serves business-hours reporting can be paused every night and weekend, which removes a large share of its running hours from the bill. Pausing suits pay-as-you-go capacities on predictable schedules. Reserved capacities are a fixed one-year commitment and stay on, so pausing does not reduce their cost."
---

Buying a Microsoft Fabric capacity is the moment where the platform stops being free to think about and starts costing real money every month. Size it too large and you pay for compute that sits idle. Size it too small and reports queue, refreshes slow down, and users feel it. This article explains what a Fabric capacity actually is, how F-SKUs and capacity units work, the smoothing and bursting behavior that changes how you size, and the practical levers (pause, resume, reservations) that let you match spend to real usage. If you are new to the platform itself, [what is Microsoft Fabric](/blog/what-is-microsoft-fabric) covers the ground this article builds on.

## What a Fabric capacity is

A Fabric capacity is a single pool of compute that every workload in your tenant draws from. Power BI queries and refreshes, warehouse and lakehouse loads, Spark notebooks, dataflows, real-time analytics, and pipelines all consume from the same pool. This is different from the old Power BI Premium world, where a capacity ran Power BI and nothing else. In Fabric, the capacity is the shared engine behind the whole platform.

The size of that pool is measured in capacity units, or CUs. A CU is an abstract unit of compute throughput, not a count of cores or gigabytes. Every operation you run has a CU cost: a heavy DAX query, a large Spark job, and a warehouse merge each consume a certain number of CU-seconds. Your capacity has a CU budget per second, and the workloads share it.

## F-SKUs and what they map to

F-SKUs are the named capacity sizes. They run from F2 at the small end up to F2048, and each step roughly doubles the CU budget: F2, F4, F8, F16, F32, F64, F128, and so on. The number in the name is the CU count, so an F64 gives you 64 CUs of throughput and an F128 gives you 128.

Two thresholds matter in practice. F64 is where free Power BI viewing turns on, meaning unlicensed users can open reports without needing a Power BI Pro license each. Below F64, every report viewer needs Pro. That single rule often decides the floor of your sizing, because for an organization with hundreds of viewers, the Pro licenses cost far more than the jump to F64. F64 is also the direct match for the old Power BI Premium P1.

The mapping to the retired P-SKUs is clean, since the CU math lines up at double the number:

| Power BI Premium | Fabric capacity | Free viewers |
| --- | --- | --- |
| P1 | F64 | Yes |
| P2 | F128 | Yes |
| P3 | F256 | Yes |
| (below P1) | F2 to F32 | No, viewers need Pro |

If you are moving off Premium, [Power BI Premium to Fabric](/blog/power-bi-premium-to-fabric) walks through that transition in detail. The short version: your existing Power BI content moves to the new capacity without rebuilding, and F64 is the usual landing spot for a P1.

## Smoothing and bursting

This is the behavior that changes how you size, and it is the part most people miss. Fabric does not bill you against the single busiest second of your day. Two mechanisms smooth the load.

Bursting lets a job temporarily consume more CUs than your capacity nominally allows, so a heavy query or refresh finishes faster instead of being throttled at the ceiling. Smoothing then spreads that consumption out over time. Interactive operations are averaged over a short window, and background operations like scheduled refreshes are averaged over a longer window (roughly 24 hours). The effect is that a sharp spike does not immediately overload the capacity. It gets flattened against the surrounding quieter periods.

The practical consequence: you size for sustained demand, not for peaks. A capacity that would look overloaded if you only watched the worst second may be perfectly healthy once smoothing accounts for the idle time around that second. When you evaluate whether a capacity is big enough, you are looking for sustained overload where consumption stays above the CU budget long enough that smoothing cannot absorb it. Brief spikes are expected and fine.

## Pause and resume to control cost

The biggest cost lever in Fabric is one the old Premium model never had: you can pause a capacity. When paused, compute billing stops. You are not paying for the pool while it is off. OneLake storage is billed separately and continues, but storage is a small line next to compute for most workloads.

Pausing suits any workload that does not run around the clock. A capacity that serves business-hours reporting can be paused every evening and resumed each morning, and paused across weekends. For a standard workweek, that removes well over half the running hours from the bill. You can automate pause and resume on a schedule through the Azure portal or an automation runbook so nobody has to remember.

The catch is the billing model. Pausing only helps on pay-as-you-go capacities, which are billed by the second while running. Reserved capacities are a one-year commitment at a lower hourly rate but always on, so pausing them saves nothing. The trade is flexibility versus rate: pay-as-you-go with scheduled pausing wins for predictable, part-time workloads, while a reservation wins for a capacity that genuinely runs continuously. Microsoft publishes current F-SKU rates on the [Fabric pricing page](https://azure.microsoft.com/en-us/pricing/details/microsoft-fabric/), and because those numbers change, model your own hours against the live figures rather than a rate you saw once.

## One shared capacity or several

A single capacity is simpler and cheaper to reason about, and smoothing works in your favor when varied workloads share one pool, because their peaks rarely align. Most organizations should start with one capacity and split only when they have a reason.

Reasons to run more than one: you want hard cost separation between departments or clients so one team cannot spend another's budget; you need to isolate a noisy, unpredictable workload (a heavy Spark or data science team) so it cannot starve interactive Power BI users; or you want to pause a development capacity on a different schedule than production. Chargeback and blast-radius control are the usual drivers. If those do not apply, resist the urge to fragment, since several small capacities lose the smoothing benefit that one larger pool provides.

## Right-sizing without overpaying

Right-sizing is measurement, not guesswork. The steps that work:

1. Install the Microsoft Fabric Capacity Metrics app. It shows CU consumption over time, which workloads are drawing it, and whether and when you hit sustained overload. Nothing else gives you the real picture.
2. Start from a candidate size and watch a full business cycle, at least a week and ideally a month with a real close or reporting peak in it. Look for sustained overload, not momentary spikes.
3. Move one step, not several. If you are overloaded, going up one F-SKU doubles your headroom. Jumping two sizes usually overshoots.
4. Separate the storage question. How you build your models affects CU draw. [Direct Lake](/blog/direct-lake-explained) reads Delta tables straight from OneLake and can lower the refresh cost that import models incur, which changes your steady-state load.
5. Pick your billing per capacity. Reserve the base size you know you run continuously, and use pay-as-you-go with scheduled pausing for anything part-time or bursty.
6. Revisit quarterly. Usage grows, models change, and a size that fit last quarter may be over or under today.

The honest summary: you cannot right-size before you have data, so pick a reasonable starting F-SKU (F64 if free viewing matters), measure real consumption, and adjust one step at a time. The savings come from pausing what does not run continuously and reserving what does, not from squeezing into a capacity that is too small and paying for it in slow reports.

If you want a second set of eyes on your capacity strategy, sizing, or Fabric migration, [start a project](/#contact) and we will model it against your actual usage.
