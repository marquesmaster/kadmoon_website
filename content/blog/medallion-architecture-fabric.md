---
title: "Medallion architecture in Microsoft Fabric: bronze, silver, gold"
description: "How to build a medallion architecture in Microsoft Fabric: what bronze, silver, and gold layers do, how they map to OneLake, and where Direct Lake fits."
category: "Data engineering"
primaryKeyword: "medallion architecture microsoft fabric"
tags: ["medallion architecture", "microsoft fabric", "onelake", "lakehouse"]
takeaways:
  - "Medallion architecture organizes data into three layers: bronze holds raw ingested data, silver holds cleaned and conformed data, and gold holds business-ready tables shaped for reporting."
  - "In Fabric, all three layers live as Delta tables in OneLake, usually across one or more lakehouses, with the SQL analytics endpoint or a warehouse serving the gold layer to reporting."
  - "Dataflows Gen2 and data pipelines move data between layers: pipelines orchestrate and copy at scale, Dataflows Gen2 handle Power Query transformations for people who prefer a visual approach."
  - "Build the Power BI semantic model on the gold layer and use Direct Lake so reports read current Delta tables from OneLake without a scheduled refresh."
  - "The two most common mistakes are skipping silver and pushing business logic into gold that belongs in silver, both of which create duplicated, inconsistent transformations."
faqs:
  - q: "What goes in each medallion layer?"
    a: "Bronze holds raw data exactly as it landed from the source, with no cleaning, so you always have a replayable copy. Silver holds cleaned, deduplicated, type-corrected data with keys conformed across sources, close to a normalized model. Gold holds business-ready tables, usually star schemas with facts and dimensions, aggregated and named for the people who consume reports."
  - q: "Should the gold layer be a Fabric lakehouse or a warehouse?"
    a: "Both work, and the choice depends on your team. A lakehouse gold layer keeps everything in Delta with Spark or SQL transformations, which suits data-engineering teams. A Fabric warehouse gives full T-SQL, multi-table transactions, and a familiar surface for SQL developers. Direct Lake works over both, so the semantic model does not force the decision."
  - q: "Do you always need all three layers?"
    a: "Not always, but skipping silver is riskier than it looks. Very small or simple sources can sometimes go straight from bronze to gold. Once you have multiple sources, changing schemas, or data-quality problems, silver is where you fix them once so every gold table inherits clean data. Dropping silver usually means repeating the same cleanup in several gold tables."
---

Medallion architecture is a way of organizing a data platform into three layers, bronze, silver, and gold, each with a clear job. Data lands raw in bronze, gets cleaned and conformed in silver, and is shaped into business-ready tables in gold. The pattern predates Microsoft Fabric, but Fabric maps onto it well because OneLake, lakehouses, warehouses, and Direct Lake line up naturally with the three layers.

This article explains what each layer is for, how the layers map to Fabric components, how you move data between them, where the Power BI semantic model sits, and the mistakes that quietly undermine the whole design.

## What each layer is and why

The three layers exist so that raw data, trusted data, and business data never get confused with each other.

**Bronze** is raw ingestion. You land data from source systems exactly as it arrives, with no cleaning and no reshaping. If a column is messy or a value is wrong, bronze keeps it that way. The point is to have a faithful, replayable copy of the source, so you can reprocess everything downstream without going back to the source system. Bronze usually keeps history, including late-arriving and duplicate records.

**Silver** is where data becomes trustworthy. Here you clean, deduplicate, fix data types, and conform keys so the same customer or product has the same identifier across sources. Silver is closer to a normalized model of your business entities. It is the layer most people query when they need clean, detailed data that has not yet been shaped for a specific report.

**Gold** is business-ready. This is where you build the tables people actually report on, usually star schemas with fact and dimension tables, aggregated where it helps and named in terms the business understands. Gold is optimized for consumption, not for storage efficiency, and it is what your Power BI models sit on.

The value of the split is that each concern lives in one place. Raw fidelity lives in bronze, data quality lives in silver, and business shaping lives in gold.

## How the layers map to OneLake and Fabric

In Fabric, all three layers are Delta tables stored in OneLake, the single storage layer that every Fabric workload reads and writes. That means bronze, silver, and gold share one physical store and one governance boundary, even when they live in different items.

A common layout uses a lakehouse per layer, or a single lakehouse with schemas for bronze, silver, and gold. The [lakehouse](/blog/what-is-microsoft-fabric) gives you Delta tables plus a files area for landing raw files, which makes it a good home for bronze and silver. For gold you have a choice. You can keep gold in a lakehouse, or you can use a Fabric warehouse when you want full T-SQL, multi-statement transactions, and a surface your SQL developers already know. Both store their data as Delta in OneLake, so the decision is about the transformation experience your team prefers, not about where the bytes end up.

Because everything is Delta in OneLake, you can also use shortcuts to reference data that already lives elsewhere instead of copying it into bronze, which keeps the raw layer lean.

## Moving data between layers

Two Fabric tools move data through the medallion, and they suit different people.

**Data pipelines** orchestrate work. A pipeline copies data at scale, runs notebooks or stored procedures, and coordinates the sequence: ingest to bronze, then transform to silver, then build gold. Pipelines are the backbone for scheduled, dependency-aware processing, and they scale better for large copies. If you are designing this flow from scratch, [data pipeline architecture](/blog/data-pipeline-architecture) walks through how to structure the orchestration and handle failures.

**Dataflows Gen2** handle transformations through Power Query. They suit analysts and teams who prefer a visual, low-code way to clean and reshape data, and they write their output straight to a lakehouse or warehouse table. Dataflows Gen2 are a good fit for the bronze-to-silver and silver-to-gold shaping when the logic is more about column transformations than heavy distributed compute.

Many teams combine the two: pipelines orchestrate and copy, while Dataflows Gen2 or Spark notebooks do the transformation inside each hop. For large silver builds, Spark notebooks often handle the volume better than a Dataflow.

## Where the semantic model and Power BI sit

The Power BI semantic model belongs on the gold layer. Point it at your gold tables, the star schemas built for reporting, and keep the model out of bronze and silver entirely. Those layers are not shaped for analytics consumption, and querying them from Power BI pushes reshaping into DAX where it does not belong.

This is where Fabric pays off for reporting. Because gold is Delta in OneLake, you can build the semantic model in [Direct Lake](/blog/direct-lake-explained) storage mode, which reads the gold Delta tables directly into the analytics engine on demand. There is no scheduled data refresh and no second copy: when your pipeline writes new gold data, the model picks it up through a lightweight framing step. Import mode still works if you prefer it, but Direct Lake is the reason many teams put their gold layer in Fabric in the first place.

Whatever storage mode you choose, the modeling discipline still matters. A clean gold star schema is what makes the model perform, as covered in [Power BI semantic model best practices](/blog/power-bi-semantic-model-best-practices).

## Governance and data quality per layer

The layers give you natural checkpoints for governance, and each one deserves different rules.

In bronze, the priority is fidelity and lineage. Capture where the data came from, when it landed, and keep it immutable so you can always reprocess. Do not apply business rules here.

In silver, the priority is data quality. This is where validation, deduplication, and conformance checks belong: reject or quarantine rows that fail expectations, enforce key uniqueness, and standardize formats. Because silver feeds every gold table, fixing quality once here prevents the same problem appearing in multiple downstream tables.

In gold, the priority is consistency of business definitions and access. Certify the tables and the semantic model built on them, apply row-level security, and control who can consume what. Fabric domains and workspace roles let you set access boundaries per layer, so raw data can stay restricted while gold is broadly available.

Sensitivity labels and lineage flow across all three layers in OneLake, which makes it easier to trace a report number back through gold and silver to its bronze source.

## Common mistakes

Two mistakes show up repeatedly, and both come from misusing the layers.

**Skipping silver.** It is tempting to go straight from raw bronze to a gold reporting table, especially when a source looks clean. The problem appears once you have a second gold table that needs the same source. Without silver, you clean and conform that data again in every gold table, and the definitions drift apart. Silver exists so cleaning happens once and every consumer inherits it. Small, single-source cases can sometimes justify skipping it, but the moment you have multiple sources or real quality issues, silver earns its keep.

**Putting business logic in gold that belongs in silver.** Gold is for shaping and aggregation, not for the first cleanup of raw data. If deduplication, type fixing, or key conformance happens in gold, you end up doing it inconsistently across gold tables, and silver becomes a thin passthrough that adds no value. Keep entity-level cleaning and conformance in silver, and reserve gold for the business shaping: joining conformed entities into facts and dimensions, aggregating, and naming for the audience.

A related trap is treating the layers as a rigid rule rather than a tool. The goal is clean separation of raw, trusted, and business data, not three copies for their own sake. Right-sizing the design also depends on capacity, since more layers and more transformation consume more compute.

## Getting the design right

Medallion architecture is straightforward in principle and easy to get subtly wrong in practice. The layer boundaries only pay off if you respect them: raw in bronze, quality in silver, business shaping in gold, and the semantic model on top of gold with Direct Lake.

If you are standing up a Fabric platform and want the layer design, orchestration, and semantic model built to fit how your team actually works, [get in touch](/#contact) and we will help you plan it.
