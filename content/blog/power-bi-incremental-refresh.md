---
title: "Power BI incremental refresh, explained"
description: "How Power BI incremental refresh works: RangeStart and RangeEnd parameters, partitioning, detect data changes, query folding, and the first full refresh."
category: "Power BI"
primaryKeyword: "power bi incremental refresh"
tags: ["power bi incremental refresh", "power bi refresh", "query folding", "power bi performance"]
takeaways:
  - "Incremental refresh reloads only the rows that changed inside a recent window instead of reloading the whole table, which cuts refresh time, memory use, and the chance of a timeout on large fact tables."
  - "You set it up with two reserved date/time parameters, RangeStart and RangeEnd, which Power BI uses to slice the table into partitions and to filter each refresh to a bounded range."
  - "Query folding is a hard requirement: the source has to accept the RangeStart and RangeEnd filter as a WHERE clause, so incremental refresh works well against SQL databases and poorly against files or non-folding sources."
  - "The detect data changes option skips partitions whose maximum modified date has not moved, so an unchanged month is not reprocessed at all."
  - "The first refresh after publishing is a full load of the whole historical range and can be slow; plan for it, and prefer the XMLA endpoint on Premium or Fabric for large initial loads."
faqs:
  - q: "When do I actually need incremental refresh?"
    a: "Reach for it when a fact table is large enough that a full refresh runs long, strains capacity memory, or risks hitting the refresh time limit, and when most of the history never changes. A sales table with years of closed transactions is the classic case. For small tables or ones that change entirely on every load, incremental refresh adds complexity without much payoff, so leave them on a normal full refresh."
  - q: "Why does incremental refresh require query folding?"
    a: "Power BI drives incremental refresh by pushing a filter on RangeStart and RangeEnd down to the source as a native query, usually a SQL WHERE clause. If the source cannot fold that filter, Power BI has to pull the whole table and filter it locally, which defeats the point and can be slower than a plain full refresh. Sources that fold, like SQL Server, Azure SQL, and Synapse, are a good fit; flat files, most web APIs, and Excel do not fold and are not."
  - q: "Does incremental refresh work with Direct Lake?"
    a: "Not in the Import sense. Incremental refresh is a feature of Import mode, where Power BI manages partitions and reloads data on a schedule. A Direct Lake model has no import copy to refresh, so freshness is handled by the pipelines that write Delta tables into OneLake and by incremental patterns in those pipelines instead. If you move a large Import model with incremental refresh onto Direct Lake, that refresh logic moves out of the semantic model and into your data engineering layer."
---

A full refresh reloads every row of every table, every time. On a small model that is fine. On a fact table with tens or hundreds of millions of rows, it is slow, it burns memory, and it puts you one network hiccup away from a failed refresh at 6am. Incremental refresh fixes this by reloading only the rows inside a recent window and leaving the settled history alone.

This article explains what incremental refresh is, how the RangeStart and RangeEnd parameters drive it, how partitioning and detect data changes work, what the first refresh costs you, and the gotchas that trip teams up. It also covers how the feature behaves on Premium, Fabric, and Direct Lake.

## What it is and why it matters

Incremental refresh tells Power BI to treat a table as a set of time-based partitions rather than one block. You define a policy such as "keep five years of history, refresh the last ten days." On each scheduled refresh, Power BI reprocesses only the partitions inside that refresh window and keeps the older partitions exactly as they are.

Three things improve as a result. Refresh time drops, because a ten-day reload is a fraction of a five-year one. Memory pressure drops, because Power BI is not holding a second full copy of the table in memory while it swaps the old one out. And reliability improves, because a shorter refresh has fewer rows in flight and far less to lose if something fails midway. On capacity-based workloads, that shorter, lighter refresh also frees the capacity for other work.

## How RangeStart and RangeEnd work

The whole feature hangs on two parameters with reserved names: RangeStart and RangeEnd. They must be of type date/time, and the names have to be exact. Power BI recognizes them and takes over their values at refresh time.

You create them in Power Query and then filter your fact table's date column between them:

```
// Two parameters, both Date/Time
RangeStart = #datetime(2024, 1, 1, 0, 0, 0)
RangeEnd   = #datetime(2024, 1, 2, 0, 0, 0)

// Filter the fact table's date column between them
Sales = Table.SelectRows(
    Source,
    each [OrderDate] >= RangeStart and [OrderDate] < RangeEnd
)
```

Note the boundary logic: greater-than-or-equal on the start, strictly-less-than on the end. That half-open range is what keeps a row from landing in two partitions at once. Get it wrong and you will double-count rows on partition boundaries.

The values you type are only placeholders for building the query in the desktop. Once you define the incremental refresh policy on the table and publish, the service ignores your placeholder values and substitutes its own RangeStart and RangeEnd for each partition it processes.

## Partitioning and the refresh policy

When you configure the policy, you set two ranges. The archive range is how much total history to store, for example five years. The incremental range is how far back to actually refresh on each run, for example the last ten days.

Power BI uses these to split the table into partitions, typically by month or by day depending on the ranges. Partitions older than the incremental window are loaded once and then frozen. Partitions inside the window are reprocessed on every refresh. A row that was written yesterday gets picked up; a row from three years ago is never touched again unless you force a full reload.

The archive range can also roll forward over time, so the oldest partition drops off as a new one is added and the model stays at a stable size instead of growing without bound.

## Detect data changes

Refreshing the last ten days every night still means reprocessing ten partitions even if only today changed. Detect data changes cuts that further. You point it at a column that reliably updates when a row changes, usually a "last modified" timestamp.

Before reloading a partition, Power BI checks the maximum value of that column against what it stored last time. If the max has not moved, the data in that partition has not changed, so Power BI skips it entirely. Done well, a nightly refresh might reprocess a single day's partition instead of ten. The catch is that your modified-date column has to be trustworthy: if a row can change without its timestamp advancing, detect data changes will skip a partition that actually needed reloading.

## The first refresh is a full load

Here is the part that surprises people. Incremental refresh saves time on every refresh after the first. The first refresh in the service has to build the entire archive range from scratch, so it loads all five years at once. That initial load can run long and, on a large table, can hit the same limits you were trying to escape.

On Premium or Fabric capacity, the way around this is the XMLA endpoint. Tools like Tabular Editor or SQL Server Management Studio let you create and refresh partitions selectively, so you can bootstrap the history in controlled chunks rather than one large operation that risks timing out. Plan the first load deliberately; it is a one-time cost but a real one.

## Gotchas worth knowing

Query folding is the big one. Incremental refresh works by pushing the RangeStart and RangeEnd filter down to the source as a native query. If the source folds, that becomes a WHERE clause and only the needed rows ever leave the database. If it does not fold, Power BI pulls the entire table and filters locally, which is slower than a plain full refresh. This is why incremental refresh pairs well with SQL Server, Azure SQL, and Synapse, and badly with flat files, Excel, and most web APIs. Right-click the last applied step in Power Query and check whether "View Native Query" is available; if it is greyed out, folding has broken and you need to fix the query before folding, not after.

The date column matters too. The filter has to sit on a real date/time column that exists in the source, not on a column you compute in Power Query after folding stops. Filtering on a derived column pushes the transformation past the fold and quietly turns your incremental refresh into a full scan.

A few smaller ones. RangeStart and RangeEnd must be date/time even if your key is a date-only or integer surrogate, so you may need a small conversion that still folds. And test the boundary logic on real data, because off-by-one errors on the half-open range are easy to miss until totals drift.

## How it fits with Premium, Fabric, and Direct Lake

On Pro, incremental refresh works, but you lose the XMLA endpoint and the fine partition control that makes large initial loads manageable. On Premium and Fabric capacities you get that control, plus longer refresh limits and the headroom to run bigger models comfortably. If you are working through the shift from Premium to Fabric capacities, incremental refresh policies carry over, since the same Power BI workload runs on both. Our write-up on the [move from Power BI Premium to Fabric](/blog/power-bi-premium-to-fabric) covers what changes there.

Direct Lake is a different story. It has no import copy to refresh, so incremental refresh in the Import sense does not apply. Freshness comes from the pipelines that write Delta tables into OneLake, and any incremental logic lives in that data engineering layer instead of the semantic model. If you are weighing storage modes, [Import vs DirectQuery vs Direct Lake](/blog/import-vs-directquery-vs-direct-lake) lays out the trade-offs, and [Direct Lake explained](/blog/direct-lake-explained) goes deeper on how it reads from OneLake.

Whatever mode you land on, incremental refresh is most effective when the model underneath it is clean: a proper star schema, a real date table, and measures that fold. Our notes on [semantic model best practices](/blog/power-bi-semantic-model-best-practices) go into that groundwork.

## Getting it right the first time

Incremental refresh is one of the most valuable settings in Power BI, and also one of the easiest to configure in a way that silently does nothing. The failure mode is quiet: the policy looks configured, refreshes still succeed, and folding has broken so the whole table reloads anyway. If your large models take longer to refresh than they should, or you want incremental refresh set up correctly against a source that actually folds, [get in touch](/#contact) and we will help you scope it.
