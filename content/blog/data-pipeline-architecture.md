---
title: "Data pipeline architecture on Azure Data Factory and Fabric"
description: "How to design data pipelines on Azure Data Factory and Microsoft Fabric: medallion layers in OneLake, orchestration, idempotency, and governance."
category: "Data engineering"
primaryKeyword: "azure data factory pipeline architecture"
tags: ["azure data factory", "microsoft fabric", "data pipelines", "medallion architecture"]
takeaways:
  - "Batch is the honest default for most Power BI reporting; use streaming in Fabric (eventstreams and Real-Time Intelligence) only where freshness genuinely matters, because it adds out-of-order and exactly-once complexity."
  - "Land raw data in OneLake first and transform across bronze, silver, and gold so you can re-derive tables when logic changes without re-ingesting from the source."
  - "The orchestrator, whether an ADF pipeline or a Fabric Data pipeline, earns its keep through unattended reliability: managing dependencies, retries, and alerting so runs interrupt you only when a decision is genuinely needed."
  - "A pipeline that runs successfully but delivers wrong data is worse than one that fails loudly, and Gartner estimates poor data quality costs organizations $12.9 million a year on average."
  - "Design for idempotency and first-class backfills so retries into OneLake are always safe and reprocessing history does not require hand-built one-off scripts."
faqs:
  - q: "Should I use Azure Data Factory or Microsoft Fabric Data pipelines?"
    a: "They share the same pipeline engine, so the choice is mostly about where the rest of your platform lives. Fabric Data pipelines run inside a Fabric workspace next to OneLake, Dataflows Gen2, lakehouses, and the Power BI semantic model, which keeps everything in one governed surface. Azure Data Factory is the better fit when you need broader source connectors, mature CI/CD through Azure DevOps, or you are integrating with an existing Azure estate. Many teams use ADF for enterprise ingestion and Fabric pipelines for the analytics layer."
  - q: "When do I need streaming instead of batch in Microsoft Fabric?"
    a: "Default to batch unless a real requirement forces streaming. Batch pipelines in ADF or Fabric are simpler to build, easier to reason about, and cheaper to run, and they are sufficient for most Power BI reporting. Reserve streaming for cases where freshness genuinely matters, such as operational monitoring or anomaly alerting, and reach for Fabric eventstreams and Real-Time Intelligence there. Most platforms run a mix, with batch for the bulk of data and streaming only where latency earns its keep."
  - q: "How do you make an Azure Data Factory or Fabric pipeline idempotent and reliable?"
    a: "Make each step safe to run twice. Use a MERGE or a delete-and-insert keyed on a stable id when writing Delta tables in OneLake, so a retry updates rows instead of duplicating them. Configure retries and retry intervals on activities, use tumbling window or watermark logic for incremental loads, and keep raw bronze data so backfills can reprocess history without re-ingesting from the source."
---

A data pipeline moves data from where it is created to where it gets used, and reshapes it along the way. Get the architecture right and your Power BI reports, semantic models, and downstream analytics all sit on solid ground. Get it wrong and you spend your days chasing missing rows and numbers that do not reconcile. The volume you are designing for keeps climbing: IDC's [Global DataSphere](https://my.idc.com/getdoc.jsp?containerId=IDC_P38353) forecast puts worldwide data creation at 181 zettabytes in 2025, up from 64.2 zettabytes in 2020, a compound growth rate near 23 percent. On the Microsoft stack, the patterns that hold up as that volume grows each come with trade-offs worth weighing.

## Batch vs streaming pipelines

The first architectural fork is whether data moves on a schedule or continuously.

Batch pipelines process data in chunks on a cadence: hourly, nightly, or whatever the business needs. A Fabric Data pipeline or an Azure Data Factory pipeline triggered on a schedule is simpler to build, easier to reason about, and cheaper to run. For most Power BI reporting, batch is entirely sufficient, and nightly loads into OneLake are still the backbone of countless data teams.

Streaming pipelines process each event as it arrives. In Fabric, that means eventstreams and Real-Time Intelligence, which fit cases where freshness genuinely matters: operational monitoring, alerting on anomalies, live telemetry. The cost is complexity. Streaming systems are harder to build, test, and operate, and they introduce problems, out-of-order events and exactly-once processing, that batch simply avoids. The honest default is batch unless a real requirement forces streaming, and many platforms run a mix, batch for the bulk of data and streaming only where latency earns its keep.

## Ingestion, transform, and load

Every pipeline does three things in some order: pull data in, reshape it, and store it. On the Microsoft stack, the reshaping happens across the medallion layers rather than before the data lands.

The older ETL approach reshapes data before it lands, which made sense when storage and compute were expensive and you wanted only clean, final data at rest. The pattern Fabric and ADF encourage is ELT: land raw data first, then transform it in place. You extract from the source, load into a bronze layer in OneLake, and transform toward silver and gold using the lakehouse compute. Keeping the raw bronze data means you can re-derive tables when logic changes without re-ingesting from the source. If you are choosing how the warehouse itself is laid out, [building a data warehouse](/blog/building-a-data-warehouse) sits at the center of a wider decision worth reading in full, and [what Microsoft Fabric is](/blog/what-is-microsoft-fabric) covers how these pieces fit together.

Ingestion itself ranges from simple to involved. A Copy activity in ADF or a Fabric Data pipeline pulls from a REST API or a database with hundreds of built-in connectors. Dataflows Gen2 handle the low-code path, letting analysts shape data with Power Query and write the result straight into a lakehouse or warehouse. For high-volume change tracking, ADF and Fabric support change-data-capture that streams every row-level change out of a production database without hammering it.

The load side has its own choices. Do you overwrite the target each run, append only new records, or merge changes into existing rows? Full refreshes are simplest and fine for small tables, but they get slow and expensive as volume grows. Incremental loads, driven by a watermark column or a tumbling window trigger, process only what changed since the last run, which is faster and cheaper but requires reliable change tracking and careful handling of late-arriving data. Picking the right load strategy per table, rather than one blanket approach, is one of the quiet decisions that separates a pipeline that stays fast from one that degrades every quarter.

## The medallion architecture

Once data is landing in OneLake, the medallion architecture gives the transformation stages a shape everyone can reason about. Bronze holds raw, unaltered data exactly as it arrived, which is what makes clean backfills possible. Silver holds cleaned, conformed, deduplicated data where types are enforced and business keys line up across sources. Gold holds the curated tables and aggregates that Power BI reads, modeled for the questions the business actually asks.

The value of these layers is that each has a clear job and a clear contract. A schema change in a source only touches bronze ingestion. A new business rule lives in the bronze-to-silver or silver-to-gold step. And because every layer sits in OneLake as Delta tables, the gold layer can serve a Power BI semantic model through Direct Lake, so reports read the curated data with no import refresh and no separate copy. [Direct Lake explained](/blog/direct-lake-explained) walks through how that connection works, and [Power BI semantic model best practices](/blog/power-bi-semantic-model-best-practices) covers modeling the gold layer for performance.

## Orchestration and scheduling

Once you have more than a couple of steps, something has to run them in the right order, at the right time, and know what to do when a step fails. That is orchestration, and in the Microsoft stack it is the pipeline itself, whether you build it in Azure Data Factory or as a Fabric Data pipeline.

A pipeline manages dependencies between activities, so a transform only runs after the load it depends on has succeeded. It handles scheduling through triggers, retries, and alerting, and it gives you a view of what ran, when, and whether it worked. Without one, your platform becomes a tangle of scripts and manual refreshes that nobody fully understands and everybody is afraid to touch. ADF and Fabric model the pipeline as a graph of activities, which makes dependencies explicit and failures traceable. [Azure Synapse vs Microsoft Fabric](/blog/azure-synapse-vs-microsoft-fabric) is worth reading if you are deciding which platform to build this on.

The pipeline is also where operational policy lives. It decides how many times to retry a failed activity and how long to wait between attempts, when to give up and fire an alert, and how to prevent two runs of the same job from overlapping and corrupting each other. Getting these policies right is what turns a pipeline from something the team babysits into something that runs unattended and only interrupts you when it genuinely needs a decision. That reliability is the real product of good orchestration, more than the scheduling itself.

## Data quality and observability

A pipeline that runs successfully but delivers wrong data is worse than one that fails loudly, because nobody notices until a decision has already been made on bad numbers. The cost is not hypothetical. Gartner has estimated that [poor data quality costs organizations $12.9 million a year](https://www.gartner.com/en/data-analytics/topics/data-quality) on average, in wasted effort, bad decisions, and rework. Quality has to be built in, not bolted on.

The waste shows up in your team's calendar too. In the CrowdFlower data science survey covered by [Forbes](https://www.forbes.com/sites/gilpress/2016/03/23/data-preparation-most-time-consuming-least-enjoyable-data-science-task-survey-says/), practitioners reported spending about 80 percent of their time on data preparation, with roughly 60 percent on cleaning and organizing and 19 percent on collecting data sets. The reported breakdown of where that time goes makes the case for automating checks upstream:

| Data science task | Share of time (CrowdFlower) |
| --- | --- |
| Cleaning and organizing data | ~60% |
| Collecting data sets | ~19% |
| Building training sets, mining, refining, and other | ~21% |

Every hour spent reconciling a broken feed is an hour not spent on the analysis you hired those people to do, which is why moving quality checks upstream into the pipeline pays for itself.

Practical measures on the Microsoft stack include:

- Validation activities at each medallion stage: row counts, null rates, and value ranges that flag when something drifts between bronze, silver, and gold.
- Schema enforcement on Delta tables so an upstream change to a source does not silently corrupt downstream tables.
- Reconciliation against sources, confirming that what landed in bronze matches what was sent.
- Observability through Fabric monitoring and Azure Monitor: metrics on freshness, volume, and latency so you can see a problem forming before it reaches a Power BI dashboard.

The teams that trust their data are the ones that instrument it. When a number looks wrong on a report, they can trace it back through the pipeline instead of guessing. This is also where a clear [Power BI governance](/blog/power-bi-governance-guide) approach pays off, and it is what makes [business intelligence dashboards](/blog/business-intelligence-dashboards) worth trusting in the first place.

## Handling failures and backfills

Failures are not exceptions in data engineering, they are routine. A source is late, an API times out, a bad record breaks a transform. Architecture decides whether that is a shrug or a fire drill.

Design for idempotency, meaning an activity can run twice without doubling or corrupting data, so a retry is always safe. Make backfills first-class: when you need to reprocess a week of history because logic changed or a source was broken, the pipeline should handle it without a hand-built one-off script. Keeping raw bronze data in OneLake is what makes clean backfills possible, which is another argument for landing data before you transform it.

An idempotent load is what makes a safe retry possible. A MERGE keyed on a stable id updates existing rows instead of duplicating them, so running the same batch twice against a Delta table lands the same result. In a Fabric or Synapse notebook you can express it in Spark SQL against a lakehouse table:

```sql
MERGE INTO silver.orders AS target
USING staging.orders AS source
ON target.order_id = source.order_id
WHEN MATCHED THEN
  UPDATE SET status = source.status, updated_at = source.updated_at
WHEN NOT MATCHED THEN
  INSERT (order_id, status, updated_at)
  VALUES (source.order_id, source.status, source.updated_at);
```

## Designing for scale

Scale is less about raw volume than about complexity and change. A pipeline that works at current volume can still collapse under a growing web of interdependent tables that no one can safely modify.

The patterns that hold up are modularity and clear contracts. The medallion layers give you that structure, so a change in one stage has bounded effects. OneLake separates storage from the Spark and warehouse compute that reads it, so each scales independently. Version your pipeline definitions and transformation logic like application code, using Git integration in Fabric or Azure DevOps with ADF, with review and tests. And design so cost scales with value, not surprise, by favoring incremental loads over reprocessing everything on every run, which also keeps your Fabric capacity consumption predictable.

Good pipeline architecture stays out of the way. It runs reliably, its numbers are trusted, and it grows without breaking. If you are standing up a data platform on Azure and Fabric, or untangling one that has grown fragile, you can [start a project](/#contact) with a team that treats Microsoft data infrastructure as first-class engineering.
