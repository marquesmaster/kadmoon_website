---
title: "Direct Lake explained: faster Power BI on Fabric"
description: "What Direct Lake in Power BI is, how it differs from Import and DirectQuery, when to use it, and the limitations that make it fall back to DirectQuery."
category: "Microsoft Fabric"
primaryKeyword: "direct lake power bi"
tags: ["direct lake", "power bi", "microsoft fabric", "onelake"]
takeaways:
  - "Direct Lake is a Power BI storage mode, unique to Microsoft Fabric, that reads Delta tables straight from OneLake into memory on demand, giving import-like speed with no scheduled refresh and no second copy of the data."
  - "It sits between Import and DirectQuery: as fast as Import for most queries, but always current like DirectQuery because it reads the source Delta files directly."
  - "Direct Lake only works on Delta tables stored in OneLake, so your data has to live in a Fabric lakehouse or warehouse, or be shortcutted into one."
  - "When a query hits an unsupported feature or exceeds capacity guardrails, Direct Lake silently falls back to DirectQuery for that query, which can make performance uneven if the model is not tuned."
  - "Use Direct Lake for large Fabric-resident models where refresh windows hurt; keep Import for small models or ones that need heavy Power Query transformation, and reserve DirectQuery for sources outside OneLake."
faqs:
  - q: "What is the difference between Direct Lake, Import, and DirectQuery?"
    a: "Import copies data into the Power BI in-memory engine and needs scheduled refreshes, giving fast queries but a stale-until-refresh copy. DirectQuery leaves data at the source and queries it live, so it is always current but often slower. Direct Lake reads Delta tables directly from OneLake into memory on demand, combining import-like speed with live data and no refresh job, but it only works on data stored in Fabric."
  - q: "When does Direct Lake fall back to DirectQuery?"
    a: "Direct Lake falls back to DirectQuery on a per-query basis when a query uses a feature Direct Lake does not support, such as certain SQL views or calculated logic, or when the data volume exceeds the guardrails of your Fabric capacity SKU. The fallback is automatic and transparent, but it means some queries run slower than others, so tuning the model and right-sizing the capacity matters."
  - q: "Do I need to refresh a Direct Lake semantic model?"
    a: "Not in the traditional sense. There is no data copy to reload, so there is no scheduled data refresh. When the underlying Delta tables change, Direct Lake picks up the new data through a lightweight framing operation rather than a full import. You still manage the pipelines that write those Delta tables, but the model itself does not need a refresh schedule."
---

Direct Lake is a Power BI storage mode, available only inside Microsoft Fabric, that lets a semantic model read Delta tables directly from OneLake into the analytics engine on demand. It gives you the query speed of Import mode without the scheduled refresh, and the live data of DirectQuery without the performance penalty. There is no second copy of your data and no refresh job to babysit. It is the feature most teams point to when they explain why they moved reporting onto Fabric.

This article explains how Direct Lake works, how it differs from the two modes you already know, when to reach for it, and the limitations that keep it from being the automatic answer everywhere.

## The two modes you already know

Every Power BI model has historically picked one of two ways to get at data.

Import mode copies the data into Power BI's in-memory columnar engine. Queries are fast because everything lives in RAM in a compressed, analytics-friendly layout. The cost is that the copy goes stale between refreshes, refreshes take time and capacity, and very large models strain memory and refresh windows.

DirectQuery leaves the data at the source and translates every report interaction into a live query against that source. Data is always current and nothing is copied, but performance depends entirely on the source, and complex visuals can generate slow queries. Heavy dashboards on DirectQuery often feel sluggish.

Teams have spent years trading off between the two: freshness versus speed, copy versus live.

## What Direct Lake does differently

Direct Lake exists because in Fabric, Microsoft controls both the storage layer (OneLake) and the query engine. Data in OneLake is already stored as Delta Parquet, a columnar format close to what Power BI's engine wants in memory. So instead of importing a copy or querying a foreign source, Direct Lake loads the relevant Delta columns straight into memory the first time they are needed, a process called transcoding, and serves queries from there.

The result:

- No scheduled data refresh, because there is no separate copy to reload.
- Import-level speed for most queries, because data is served from memory in the engine's native layout.
- Live data, because it reads the current Delta files. When your pipeline writes new data, a lightweight framing step points the model at the latest version.

You get much of the best of both older modes, as long as the data lives in Fabric.

## Direct Lake vs Import vs DirectQuery

| | Import | DirectQuery | Direct Lake |
| --- | --- | --- | --- |
| Where data lives | Copied into Power BI memory | Left at the source | Delta tables in OneLake |
| Data freshness | Stale until refresh | Always live | Always live |
| Query speed | Fast | Depends on source, often slow | Fast, near import |
| Scheduled refresh | Required | Not needed | Not needed |
| Power Query transforms | Full support | Limited | Not at query time |
| Source requirement | Almost any source | Almost any source | Fabric OneLake only |

## When to use Direct Lake

Direct Lake earns its place when several things are true at once. Your data already lives in a Fabric lakehouse or warehouse, or can be shortcutted into OneLake. The tables are large enough that Import refreshes hurt, whether that is long refresh windows, memory pressure, or missing a freshness target. And you want reports to reflect new data quickly without engineering a refresh cadence around it.

That combination is common in Fabric-centered teams: engineers land Delta tables, and analysts want to report on them without a refresh step in between. This is the pattern we most often set up in [Microsoft Fabric](/services/microsoft-fabric) engagements.

Keep Import when the model is small and refreshes are cheap, or when you rely on Power Query to reshape data that is not clean in the lake. Direct Lake does not run Power Query transformations at query time, so any shaping has to happen upstream in your pipelines. Reserve DirectQuery for sources that are not in OneLake at all and cannot be shortcutted.

## The limitations to plan around

Direct Lake is powerful but not unconditional, and the most important behavior to understand is fallback.

When a query touches something Direct Lake cannot serve directly, it does not fail. It quietly falls back to DirectQuery for that specific query, going back to the SQL endpoint over the same Delta data. Fallback triggers include using certain SQL views instead of tables, exceeding the row or memory guardrails of your Fabric capacity SKU, or hitting features the mode does not support. The behavior is transparent, which is good, but it means performance can be uneven: most queries fly, and a few crawl. Tuning the model and right-sizing the capacity is how you keep that consistent.

Other things to keep in mind:

- Data must be in Delta format in OneLake. Other formats need conversion or a shortcut that presents them as Delta.
- Transformations belong upstream. Model your data in the lakehouse or warehouse with [data engineering](/services/data-engineering) discipline rather than leaning on Power Query.
- Capacity matters. The guardrails that trigger fallback scale with your SKU, so large models need appropriately sized capacity.

## How it fits the bigger picture

Direct Lake is one reason Fabric is compelling for reporting, but it is a feature, not the whole platform. It only makes sense once your data is organized in OneLake, which is the shift covered in [what is Microsoft Fabric](/what-is-microsoft-fabric). If you are still deciding whether to move analytics workloads onto Fabric at all, weigh it against your current setup in [Azure Synapse vs Microsoft Fabric](/azure-synapse-vs-microsoft-fabric).

For teams modernizing existing reports, our [Power BI](/services/power-bi) practice handles the model redesign that Direct Lake rewards, and our [Synapse to Fabric migration](/synapse-to-fabric-migration) service moves the underlying data into the Delta tables that make Direct Lake possible. If you want proof before committing, we build reference [dashboards](/dashboards) on your own data so you can measure the speed and freshness gains directly.
