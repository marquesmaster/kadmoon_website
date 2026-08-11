---
title: "Import vs DirectQuery vs Direct Lake in Power BI"
description: "How Import, DirectQuery, and Direct Lake storage modes work in Power BI, their speed and freshness trade-offs, and how to pick the right one for each model."
category: "Microsoft Fabric"
primaryKeyword: "import vs directquery vs direct lake"
tags: ["power bi storage mode", "direct lake", "directquery", "import mode"]
takeaways:
  - "Import copies data into Power BI's in-memory engine, giving the fastest queries but a stale copy that needs scheduled refresh and enough memory to hold the whole model."
  - "DirectQuery leaves data at the source and queries it live, so data is always current and nothing is copied, but query speed depends entirely on the source and complex visuals often feel slow."
  - "Direct Lake reads Delta tables straight from OneLake into memory on demand, combining near-import speed with live data and no refresh job, but it only works on data that lives in Microsoft Fabric."
  - "Composite models let one model mix Import and DirectQuery tables, which is how you pair a fast local dimension model with a live high-volume fact table."
  - "Pick Import for small or transform-heavy models, DirectQuery for live sources outside Fabric, and Direct Lake for large Fabric-resident models where refresh windows hurt."
faqs:
  - q: "Which Power BI storage mode is fastest?"
    a: "Import is normally the fastest because data sits in RAM in the engine's native columnar layout with nothing between the query and the data. Direct Lake reaches near-import speed for most queries since it reads Delta columns from OneLake into that same engine. DirectQuery is usually the slowest of the three because every interaction becomes a live query against the source, and speed depends on how well that source and its indexes handle analytical workloads."
  - q: "When does DirectQuery actually make sense?"
    a: "DirectQuery makes sense when the data is too large to fit in memory, when you need real-time freshness against a source that is not in OneLake, or when policy requires that data never be copied into Power BI. It also fits as one table in a composite model, where a live high-volume fact table sits alongside imported dimensions. Outside those cases, Import or Direct Lake usually give a better experience."
  - q: "What does Direct Lake require?"
    a: "Direct Lake requires Microsoft Fabric and data stored as Delta tables in OneLake, which means the tables live in a Fabric lakehouse or warehouse or are shortcutted into one. It also needs Fabric capacity, and its row and memory guardrails scale with your SKU. When a query exceeds those guardrails or hits an unsupported feature, Direct Lake falls back to DirectQuery over the same data for that query."
---

Every Power BI model has to answer one question before you build a single visual: where does the data actually live when someone opens the report? That choice is the storage mode, and it sets the ceiling on how fast reports run, how current the numbers are, how much memory you burn, and whether you manage a refresh schedule at all. Get it wrong and no amount of DAX tuning will save the experience.

For years there were two answers, Import and DirectQuery, each with a clear trade-off. Microsoft Fabric added a third, Direct Lake, that reshapes the decision. This article explains how each mode works, what it costs you, and how to choose.

## The three modes at a glance

| | Import | DirectQuery | Direct Lake |
| --- | --- | --- | --- |
| Where data lives | Copied into Power BI memory | Left at the source | Delta tables in OneLake |
| Data freshness | Stale until refresh | Always live | Always live |
| Query speed | Fastest | Depends on source, often slow | Near import |
| Scheduled refresh | Required | Not needed | Not needed |
| Power Query at query time | Full support | Limited | Not available |
| Source requirement | Almost any source | Almost any source | Fabric OneLake only |

The rest of this article works through what sits behind each column.

## Import mode

Import copies your data into Power BI's in-memory columnar engine, called VertiPaq. During refresh, the engine compresses each column and stores it in RAM in a layout built for fast aggregation. When a report queries the model, everything it needs is already in memory in the right shape, so queries return quickly and consistently.

That speed is why Import remains the default for most models. The trade-offs come from the copy. The data is a snapshot that goes stale the moment refresh finishes, so freshness depends on how often you refresh. Refreshes cost time and capacity, and they reload data on a schedule you have to design. The whole model has to fit in memory, so very large fact tables strain both the refresh window and the capacity that holds them.

Two things ease those limits. [Incremental refresh](/blog/power-bi-incremental-refresh) reloads only the partitions that changed instead of the full table, which shrinks refresh windows dramatically on large history. And disciplined modeling keeps the footprint down: narrow tables, the right data types, and a clean star schema all compress better and query faster, which is the core of [semantic model best practices](/blog/power-bi-semantic-model-best-practices).

Choose Import when the model fits comfortably in memory, refreshes are cheap enough to hit your freshness target, or you rely on Power Query to reshape data that is not clean at the source.

## DirectQuery mode

DirectQuery does the opposite. Nothing is copied. The data stays at the source, and Power BI translates every slicer click, filter, and visual into a live query it sends to that source, then renders the result. Because it reads the source each time, the numbers are always current, and no large copy sits in Power BI memory.

The cost is performance and predictability. Every interaction becomes a round trip, so speed depends entirely on how well the source handles analytical queries. A report with several visuals can fire many queries at once, and a source tuned for transactions rather than aggregation will struggle. Some DAX and Power Query operations are restricted or push heavy work back to the source. Busy dashboards on DirectQuery often feel sluggish in a way that tuning the model alone cannot fully fix.

DirectQuery earns its place when data is too large to import, when you need live reads against a source outside Fabric, or when a copy of the data is not allowed to leave the source system. If you reach for it mainly to avoid a slow refresh, look at incremental refresh or Direct Lake first.

## Direct Lake mode

Direct Lake is a Fabric-only storage mode that removes the old trade-off instead of splitting it. In Fabric, Microsoft controls both the storage layer, OneLake, and the query engine. Data in OneLake is already stored as Delta Parquet, a columnar format close to what VertiPaq wants in memory. So rather than importing a copy or querying a foreign source, Direct Lake loads the Delta columns a query needs straight into the engine the first time they are touched, a step called transcoding, and serves the query from memory after that.

The result is near-import query speed with no scheduled data refresh and live data. There is no separate copy to reload; when your pipeline writes new Delta files, a lightweight framing operation points the model at the current version. You get most of what Import and DirectQuery each offered, on the condition that the data lives in Fabric.

The behavior to plan around is fallback. When a query hits something Direct Lake cannot serve, such as an unsupported feature or a volume beyond your capacity guardrails, it does not fail. It quietly runs that one query through DirectQuery against the same Delta data over the SQL endpoint. Fallback is transparent, but it means most queries fly while a few crawl, so tuning the model and right-sizing capacity matter. The guardrails that trigger fallback scale with your SKU, which makes [Fabric capacity planning](/blog/microsoft-fabric-capacity-planning) part of any serious Direct Lake rollout. There is a deeper walkthrough of the mode and its limits in [Direct Lake explained](/blog/direct-lake-explained).

One more constraint: Direct Lake does not run Power Query transformations at query time. Any shaping has to happen upstream in the lakehouse or warehouse that writes the Delta tables, which is one reason [building a proper data warehouse](/blog/building-a-data-warehouse) in Fabric pays off before you point reports at it.

## Composite models

The three modes are not always mutually exclusive within one model. A composite model lets a single semantic model mix storage modes table by table. The common pattern imports small, stable dimension tables for speed and keeps a very large or fast-changing fact table on DirectQuery, so you get quick slicing on dimensions with live reads on the facts that need them.

Composite models add power and complexity in equal measure. Relationships that cross storage modes can generate expensive queries, and the model is harder to reason about and tune. Use them deliberately, when a single mode genuinely cannot cover every table, rather than as a default.

## How to choose

Start with where the data lives. If it is already in OneLake, or you are moving it there, Direct Lake is usually the strongest option for large models because it drops the refresh job while keeping speed. If the data is not in Fabric, the choice is between Import and DirectQuery, and that comes down to size and freshness: import when it fits in memory and your refresh cadence meets the freshness target, and reach for DirectQuery when it does not fit or must be read live. Composite models cover the cases where one table needs a different answer than the rest.

Direct Lake changes the calculus because it removes the freshness-versus-speed trade-off that forced the old choice, but only inside Fabric and only once your data is modeled as clean Delta tables. That prerequisite, not the storage mode itself, is where most of the real work sits.

Picking the right storage mode, and doing the upstream modeling that lets Direct Lake shine, is exactly the kind of decision we help teams get right. [Talk to us](/#contact) about your Power BI and Fabric setup.
