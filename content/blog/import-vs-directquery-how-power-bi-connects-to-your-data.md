---
title: "Import vs DirectQuery: how Power BI connects to your data"
description: "What it actually means for Power BI to import your data versus query it live with DirectQuery, why the choice affects speed, freshness, and load on your systems, and how to decide which fits a given report."
category: "Power BI"
primaryKeyword: "import vs directquery"
tags: ["Power BI", "DirectQuery", "import", "data model", "architecture"]
takeaways:
  - "Power BI can either import a copy of your data into its own fast store or query the source live with DirectQuery, and the choice shapes speed, freshness, and load."
  - "Import is fast and self-contained but shows data as of the last refresh; DirectQuery is always current but depends on the source's speed and load."
  - "Most reports are best served by import, because the speed and reliability matter more than up-to-the-second freshness."
  - "DirectQuery earns its place where data must be truly live or is too large to import, accepting the trade-offs that come with it."
  - "The right choice is per report and best made deliberately, and a composite model can combine both where it genuinely helps."
faqs:
  - q: "What is the difference between import and DirectQuery in Power BI?"
    a: "Import brings a copy of your data into Power BI's own in-memory store, so reports run against that fast local copy and are quick and self-contained, but the data is only as current as the last refresh. DirectQuery leaves the data in the source and sends a query to it each time someone interacts with the report, so the data is always current but the report's speed depends on the source's speed and every interaction puts load on that source. The core trade-off is freshness against speed and independence: import is fast and shows data as of the last refresh, DirectQuery is live but tied to the source's performance. The right choice depends on what a given report actually needs."
  - q: "Which should I use for most reports?"
    a: "Most reports are best served by import, because for the large majority of business reporting the speed, reliability, and independence of import matter more than up-to-the-second freshness. A sales dashboard, an operations report, a management view, these are read and acted on in a rhythm, daily, a few times a day, where data refreshed on a schedule is perfectly current enough, and the fast, dependable experience of import is worth more than live data. Import also keeps the report from loading the source system every time someone opens it. Unless a report has a specific need for truly live data or works with data too large to import, import is usually the right default."
  - q: "When is DirectQuery the right choice?"
    a: "DirectQuery earns its place in two situations: when the data genuinely must be live, so a scheduled refresh is not current enough, and when the data is too large to import practically. Some reporting, certain operational or monitoring views, really does need to reflect the source to the second, and DirectQuery provides that. Some datasets are large enough that importing and refreshing them is impractical, and DirectQuery lets the report work against the source without copying it. In both cases DirectQuery solves a real problem, at the cost of depending on the source's speed and putting query load on it, which is a trade-off worth making when the need is real and worth avoiding when it is not."
  - q: "Can a report use both import and DirectQuery?"
    a: "Yes. A composite model lets a single model combine imported tables with DirectQuery tables, so you can import what benefits from speed and query live what must be current or is too large to import. This is useful when different parts of a report have different needs, for example a large, live transactional table queried directly alongside smaller reference data imported for speed. Composite models add complexity and are not a default to reach for casually, but they are a genuine option when one report really does need both behaviors, and a good partner uses them where they help rather than applying one connection mode to everything."
---

One of the first real decisions in building a Power BI report is how it connects to your data, and there are two main ways: Power BI can **import** a copy of the data into its own fast store, or it can **query the source live** with DirectQuery each time someone uses the report. The choice sounds technical, and it is, but it has consequences anyone relying on the report will feel, in speed, in how current the data is, and in the load placed on the systems the data comes from. Here is what the two modes actually do, and how to decide which fits a given report.

## What import does

**Import** brings a copy of your data into Power BI's own in-memory store, a highly optimized engine built for fast analytics. When someone opens or interacts with an imported report, it runs against that local copy, not the original source. Two things follow from this.

First, it is **fast and self-contained.** The in-memory store is built for exactly the slicing, filtering, and aggregating that reports do, so imported reports tend to be quick and responsive, and they do not depend on the source system being available or fast at the moment someone opens the report. Second, the data is only as current as the **last refresh.** Because the report runs against a copy, it shows the data as of whenever that copy was last updated, which happens on a schedule, say nightly or several times a day. Between refreshes, the report does not reflect changes in the source. So import buys speed and independence at the cost of showing data as of the last refresh rather than the live moment.

## What DirectQuery does

**DirectQuery** takes the opposite approach: it leaves the data in the source and sends a query to that source every time someone interacts with the report. Nothing is copied into Power BI's store; the source answers each request as it comes. Two things follow from this, mirroring import.

First, the data is **always current.** Because every interaction queries the live source, the report reflects the source as it stands at that moment, with no refresh lag. Second, the report's speed depends on the **source's speed**, and every interaction puts **load on that source.** If the underlying system is fast and built to handle analytical queries, DirectQuery can perform well; if it is slow, or not designed for this kind of querying, the report feels slow, and a busy report can put meaningful load on the source system, because every slice and filter becomes a query it has to answer. So DirectQuery buys live data at the cost of depending on the source's performance and loading it with query traffic.

## Why import is usually the right default

For the large majority of business reporting, **import is the better choice**, because speed, reliability, and independence matter more than up-to-the-second freshness. Think about how most reports are actually used. A sales dashboard, an operations report, a management view, these are read and acted on in a rhythm, daily or a few times a day, and data refreshed on a sensible schedule is perfectly current enough for the decisions they support. Nobody acting on a daily sales report needs it accurate to the second; they need it fast, dependable, and current as of this morning or this hour.

Import delivers exactly that: a quick, responsive report that works whether or not the source is busy, showing data fresh enough for the decision at hand. It also protects the source systems, because the report is not querying them every time someone opens it. For these reasons, import is the right default for most reporting, and a report should generally use it unless there is a **specific reason** not to. The question to ask is not "wouldn't live data be nice?", because live data is always nice in the abstract, but "does this report actually need to be live, and is it worth the trade-offs?", and for most reports the honest answer is no.

## When DirectQuery earns its place

DirectQuery is the right choice when it solves a real problem, and there are two main ones. The first is when the data **genuinely must be live.** Some reporting, certain operational or monitoring views where people act on the current state moment to moment, really does need to reflect the source to the second, and a scheduled refresh is not current enough. There, DirectQuery provides what import cannot.

The second is when the data is **too large to import** practically. Some datasets are big enough that importing and refreshing a full copy is impractical or costly, and DirectQuery lets a report work against the source without copying it. In both cases DirectQuery is solving a genuine need, and the trade-offs, dependence on the source's speed and the query load it carries, are worth accepting because the alternative does not meet the requirement. The key is that DirectQuery should be chosen **because a real need calls for it**, not reached for by default or because live data sounds better, since using it without the need just imports its downsides for no gain.

## Composite models: both where it helps

The choice is not strictly either-or. A **composite model** lets a single model combine imported tables with DirectQuery tables, so you can import what benefits from speed and query live what must be current or is too large to import. This helps when different parts of one report have different needs, for example a large, live transactional table queried directly alongside smaller reference data imported for speed.

Composite models add complexity and are not a default to reach for casually, but they are a real option when one report genuinely needs both behaviors. The broader point is that the connection mode is a **per-report decision**, best made deliberately against what each report actually needs, rather than applied uniformly out of habit. A good partner makes that choice consciously, import for most reports, DirectQuery where live or large data demands it, composite where one report truly needs both, so each report connects to the data in the way that serves it best.

## The decision in short

The way a report connects to its data is a real choice with real consequences:

- **Import** gives speed, reliability, and independence, with data as of the last refresh, and suits most reporting.
- **DirectQuery** gives live data, at the cost of depending on the source's speed and loading it, and suits reports that must be live or are too large to import.
- **Composite models** combine both, for the occasional report that genuinely needs each.
- The right choice is per report and deliberate, matched to what that report actually needs.

The throughline is that import and DirectQuery are not better and worse in the abstract; they are different trade-offs, and the skill is matching each report to the one it needs. Most reports want the fast, dependable experience of import on data that is current enough; a few want the live connection DirectQuery provides and are worth its costs. Choosing deliberately, rather than applying one mode to everything, is part of what separates a report estate that performs and stays trustworthy from one that is slow, fragile, or needlessly hard on the systems underneath it.
