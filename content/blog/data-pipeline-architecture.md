---
title: "Data pipeline architecture: patterns that scale"
description: "A practical guide to data pipeline architecture: batch vs streaming, ETL vs ELT, orchestration, data quality, and designing pipelines that scale."
category: "Data & AI"
primaryKeyword: "data pipeline architecture"
tags: ["data pipelines", "etl vs elt", "streaming pipelines"]
takeaways:
  - "Batch is the honest default for most reporting and analytics; use streaming only where freshness genuinely matters, like fraud checks or live dashboards, because it adds out-of-order and exactly-once complexity."
  - "Modern cloud warehouses made ELT the common choice, since landing raw data first lets you re-derive tables when logic changes without re-ingesting from the source."
  - "An orchestrator's real product is unattended reliability: managing dependencies, retries, and alerting so pipelines only interrupt you when a decision is genuinely needed."
  - "A pipeline that runs successfully but delivers wrong data is worse than one that fails loudly, and Gartner estimates poor data quality costs organizations $12.9 million a year on average."
  - "Design for idempotency and first-class backfills so retries are always safe and reprocessing history does not require hand-built one-off scripts."
faqs:
  - q: "Should I use batch or streaming for my data pipeline?"
    a: "Default to batch unless a real requirement forces streaming. Batch pipelines are simpler to build, easier to reason about, and cheaper to run, and they are sufficient for most reporting and analytics. Reserve streaming for cases where freshness genuinely matters, such as fraud detection, live operational dashboards, or anomaly alerting, and many teams run a mix."
  - q: "What is the difference between ETL and ELT?"
    a: "ETL extracts, transforms, then loads, reshaping data before it lands in the warehouse. ELT extracts, loads, then transforms, landing raw data first and transforming it inside the warehouse using its compute. ELT became the common choice with modern cloud warehouses because they transform large volumes cheaply and keeping raw data lets you re-derive tables when logic changes."
  - q: "Why do data teams spend so much time on data preparation?"
    a: "In the CrowdFlower survey covered by Forbes, practitioners reported spending about 80 percent of their time on data preparation, roughly 60 percent cleaning and organizing and 19 percent collecting data sets. Every hour spent reconciling a broken feed is an hour not spent on analysis, which is why moving quality checks upstream into the pipeline pays for itself."
  - q: "How do you design a data pipeline to scale?"
    a: "Scale is more about complexity and change than raw volume. Break the pipeline into modular stages with clear input and output contracts, separate storage from compute so each scales independently, version transformation logic like application code with review and tests, and favor incremental processing over reprocessing everything on every run."
---

A data pipeline moves data from where it is created to where it gets used, and reshapes it along the way. Get the architecture right and analytics, reporting, and machine learning all sit on solid ground. Get it wrong and you spend your days chasing missing rows and numbers that do not reconcile. The volume you are designing for keeps climbing: IDC's [Global DataSphere](https://my.idc.com/getdoc.jsp?containerId=IDC_P38353) forecast puts worldwide data creation at 181 zettabytes in 2025, up from 64.2 zettabytes in 2020, a compound growth rate near 23 percent. The patterns that hold up as that volume grows each come with trade-offs worth weighing.

## Batch vs streaming pipelines

The first architectural fork is whether data moves on a schedule or continuously.

Batch pipelines process data in chunks on a cadence: hourly, nightly, or whatever the business needs. They are simpler to build, easier to reason about, and cheaper to run. For most reporting and analytics, batch is entirely sufficient, and nightly loads are still the backbone of countless data teams.

Streaming pipelines process each event as it arrives. They fit cases where freshness genuinely matters: fraud checks, live operational dashboards, alerting on anomalies. The cost is complexity. Streaming systems are harder to build, test, and operate, and they introduce problems, out-of-order events, exactly-once processing, that batch simply avoids. The honest default is batch unless a real requirement forces streaming, and many teams run a mix, batch for the bulk of data and streaming only where latency earns its keep.

## Ingestion, transform, and load

Every pipeline does three things in some order: pull data in, reshape it, and store it. The order is where ETL and ELT diverge.

ETL, extract then transform then load, reshapes data before it lands in the warehouse. It made sense when storage and compute were expensive and you wanted only clean, final data at rest.

ELT, extract then load then transform, lands raw data first and transforms it inside the warehouse using its compute. Modern cloud warehouses made this the common choice, because they can transform enormous volumes cheaply, and keeping the raw data means you can re-derive tables when logic changes without re-ingesting from the source. If you are choosing between them, [ETL vs ELT](/blog/building-a-data-warehouse) sits at the center of a wider warehouse decision worth reading in full.

Ingestion itself ranges from simple, an API pull or a database export, to involved, change-data-capture that streams every row-level change out of a production database without hammering it.

The load side has its own choices. Do you overwrite the target each run, append only new records, or merge changes into existing rows? Full refreshes are simplest and fine for small tables, but they get slow and expensive as volume grows. Incremental loads process only what changed since the last run, which is faster and cheaper but requires reliable change tracking and careful handling of late-arriving data. Picking the right load strategy per table, rather than one blanket approach, is one of the quiet decisions that separates a pipeline that stays fast from one that degrades every quarter.

## Orchestration and scheduling

Once you have more than a couple of steps, something has to run them in the right order, at the right time, and know what to do when a step fails. That is orchestration.

An orchestrator manages dependencies between tasks, so a transform only runs after the load it depends on has succeeded. It handles scheduling, retries, and alerting, and it gives you a view of what ran, when, and whether it worked. Without one, pipelines become a tangle of scripts and cron jobs that nobody fully understands and everybody is afraid to touch. Tools in this space model your pipeline as a directed graph of tasks, which makes dependencies explicit and failures traceable.

The orchestrator is also where operational policy lives. It decides how many times to retry a failed step and how long to wait between attempts, when to give up and page a human, and how to prevent two runs of the same job from overlapping and corrupting each other. Getting these policies right is what turns a pipeline from something the team babysits into something that runs unattended and only interrupts you when it genuinely needs a decision. That reliability is the real product of good orchestration, more than the scheduling itself.

## Data quality and observability

A pipeline that runs successfully but delivers wrong data is worse than one that fails loudly, because nobody notices until a decision has already been made on bad numbers. The cost is not hypothetical. Gartner has estimated that [poor data quality costs organizations $12.9 million a year](https://www.gartner.com/en/data-analytics/topics/data-quality) on average, in wasted effort, bad decisions, and rework. Quality has to be built in, not bolted on.

The waste shows up in your team's calendar too. In the CrowdFlower data science survey covered by [Forbes](https://www.forbes.com/sites/gilpress/2016/03/23/data-preparation-most-time-consuming-least-enjoyable-data-science-task-survey-says/), practitioners reported spending about 80 percent of their time on data preparation, with roughly 60 percent on cleaning and organizing and 19 percent on collecting data sets. The reported breakdown of where that time goes makes the case for automating checks upstream:

| Data science task | Share of time (CrowdFlower) |
| --- | --- |
| Cleaning and organizing data | ~60% |
| Collecting data sets | ~19% |
| Building training sets, mining, refining, and other | ~21% |

Every hour spent reconciling a broken feed is an hour not spent on the analysis you hired those people to do, which is why moving quality checks upstream into the pipeline pays for itself.

Practical measures include:

- Validation checks at each stage: row counts, null rates, and value ranges that flag when something drifts.
- Schema enforcement so an upstream change to a source does not silently corrupt downstream tables.
- Reconciliation against sources, confirming that what landed matches what was sent.
- Observability: metrics on freshness, volume, and latency so you can see a problem forming before it reaches a dashboard.

The teams that trust their data are the ones that instrument it. When a number looks wrong, they can trace it back through the pipeline instead of guessing.

## Handling failures and backfills

Failures are not exceptions in data engineering, they are routine. A source is late, an API times out, a bad record breaks a transform. Architecture decides whether that is a shrug or a fire drill.

Design for idempotency, meaning a step can run twice without doubling or corrupting data, so a retry is always safe. Make backfills first-class: when you need to reprocess a week of history because logic changed or a source was broken, the pipeline should handle it without a hand-built one-off script. Keeping raw ingested data is what makes clean backfills possible, which is another argument for the ELT pattern.

## Designing for scale

Scale is less about raw volume than about complexity and change. A pipeline that works at current volume can still collapse under a growing web of interdependent tables that no one can safely modify.

The patterns that hold up are modularity and clear contracts. Break the pipeline into stages with defined inputs and outputs, so a change in one place has bounded effects. Separate storage from compute so each scales independently. Version your transformation logic like application code, with review and tests. And design so cost scales with value, not surprise, by favoring incremental processing over reprocessing everything on every run. These are the same engineering disciplines behind any [scalable custom software](/blog/how-custom-software-scales-with-your-business).

Good pipeline architecture stays out of the way. It runs reliably, its numbers are trusted, and it grows without breaking. If you are standing up a data platform or untangling one that has grown fragile, you can [start a project](/#contact) with a team that treats data infrastructure as first-class engineering, or see [what we build](/#capabilities) for how this fits alongside analytics and AI work.
