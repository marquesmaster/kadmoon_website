---
title: "Building a data warehouse on Microsoft Fabric and Azure"
description: "How to build a data warehouse on Microsoft Fabric and Azure: Warehouse vs Lakehouse, OneLake, Direct Lake, ELT, semantic modeling, governance, and cost control."
category: "Data engineering"
primaryKeyword: "microsoft fabric data warehouse"
tags: ["microsoft fabric", "onelake", "azure synapse", "data warehouse architecture"]
takeaways:
  - "A Microsoft Fabric warehouse centralizes data from your operational systems into OneLake, built for analysis rather than transactions, so teams stop arguing over whose spreadsheet is right."
  - "Gartner estimates poor data quality costs organizations an average of 12.9 million dollars a year, and most organizations do not even measure their data quality."
  - "For most companies whose need is Power BI dashboards and reporting, a Fabric Warehouse is the right starting point; reach for a Lakehouse only with genuinely large unstructured data or heavy machine learning."
  - "The modern pattern is ELT with Dataflows Gen2 or Azure Data Factory: land raw data in OneLake first, then transform it using Fabric compute, rather than the old ETL approach."
  - "The Power BI semantic model, not the tooling, is where Fabric projects succeed or stall, so define one measure per KPI on top of clean facts and dimensions and add automated data-quality tests."
faqs:
  - q: "What is the difference between a Warehouse and a Lakehouse in Microsoft Fabric?"
    a: "A Fabric Warehouse holds structured, modeled data optimized for T-SQL analytics and reporting, and is best when most of your data is tabular. A Fabric Lakehouse stores files and tables together on OneLake, cheap to fill but requiring more work to make useful, best for large volumes of varied semi-structured data and machine learning. Both write open Delta tables to OneLake, so a Power BI semantic model can read either one. For most companies, a Warehouse is the right starting point."
  - q: "What are OneLake and Direct Lake?"
    a: "OneLake is the single storage layer under Microsoft Fabric, one logical data lake for the whole tenant, so a Warehouse, a Lakehouse, and Power BI all read the same Delta tables without copies. Direct Lake is a Power BI storage mode that queries those OneLake tables directly, giving near-import speed without the refresh schedules of import mode or the query latency of DirectQuery. Together they let a semantic model sit on warehouse data with very little data movement."
  - q: "What is ELT in Fabric and Azure Data Factory, and how does it differ from ETL?"
    a: "ETL extracts data, transforms it on a separate server, then loads the clean result. ELT flips two steps: Dataflows Gen2 or Azure Data Factory pipelines extract and land raw data in OneLake first, then transform it inside Fabric using its own compute. Fabric and Synapse are powerful and cheap enough at rest that ELT is usually faster and simpler, which is why it has become the modern default on the Microsoft stack."
---

Building a data warehouse on Microsoft Fabric is how a company stops arguing about whose spreadsheet is right and starts making decisions from one trusted source. The Microsoft stack is more approachable than it was a decade ago, but the hard parts, modeling and governance, are still where most projects succeed or stall. This guide walks through the choices that matter, from architecture to cost, backed by real market and quality data, aimed at teams evaluating whether and how to build on Fabric and Azure.

## Why you need a warehouse

The symptom is familiar. Sales pulls a number from Dynamics, finance pulls a different number from the ERP, and operations has a third figure in an Excel file, all supposedly measuring the same thing. Nobody is lying. The data lives in separate systems, each with its own definitions, and no one has reconciled them.

That disagreement is expensive. [Gartner has estimated that poor data quality costs organizations an average of $12.9 million a year](https://www.gartner.com/en/data-analytics/topics/data-quality), and the same body of research found that a majority of organizations do not even measure their data quality, which means most of that cost runs invisible until a bad number reaches a board deck. A Fabric warehouse attacks the root of this by centralizing data from your operational systems into OneLake, a place designed for analysis rather than transactions. Your CRM is built to record a sale quickly; it is a poor tool for asking how margin trended across regions over three years. A warehouse is built for exactly those questions. It also takes analytical load off the systems running your business, so a heavy report no longer slows down the app your team depends on. If you are weighing the platform itself, start with [what Microsoft Fabric is](/blog/what-is-microsoft-fabric) and how its pieces fit together.

## Warehouse vs Lakehouse in Fabric

Two Fabric items get compared constantly, and the distinction is practical, not academic.

- Fabric Warehouse: structured, modeled data optimized for T-SQL analytics and reporting. Best when most of your data is tabular and your main job is business intelligence.
- Fabric Lakehouse: files and tables together on OneLake, including logs, images, and JSON, cheap to fill but requiring more work to make useful. Best when you have large volumes of varied, semi-structured data or machine learning in the mix.

Both write open Delta tables to OneLake, so a Power BI semantic model can sit on top of either. If your architecture predates Fabric, Azure Synapse dedicated SQL pools cover the same warehouse role, and [Azure Synapse versus Microsoft Fabric](/blog/azure-synapse-vs-microsoft-fabric) walks through when to migrate and when to stay put.

For most companies whose analytics needs are Power BI dashboards, reporting, and metrics from business systems, a Fabric Warehouse is the right starting point. Reach for a Lakehouse when you genuinely have large volumes of unstructured data or heavy machine-learning workloads. Choosing the more complex option because it sounds advanced is a common and expensive mistake.

The mistake is usually driven by a fear of outgrowing the simpler choice. In practice, a Fabric capacity handles far more data and far more concurrent users than most mid-market companies will ever reach, and because everything lands as Delta on OneLake, the modeling work you did transfers if you later add a Lakehouse alongside the Warehouse. The bigger risk is the opposite: standing up a Lakehouse with Spark notebooks your team cannot operate, spending months on infrastructure, and never shipping the Power BI reports the business actually asked for. Match the architecture to the questions you need answered this year, not to a hypothetical scale you may reach in five.

## ELT with Dataflows Gen2 and Azure Data Factory

The old pattern was ETL: extract data, transform it on a separate server, then load the clean result. The modern pattern flips two steps into ELT: Dataflows Gen2 or Azure Data Factory pipelines extract and land raw data in OneLake first, then transform it inside Fabric using its own compute. Fabric and Synapse are powerful and cheap enough at rest that this is usually faster and simpler.

This shift is not niche. The overall data warehouse market was [valued at about $34.4 billion in 2024 and is projected to reach roughly $93.8 billion by 2034](https://www.zionmarketresearch.com/report/data-warehouse-market), a compound annual growth rate above 10%, and the cloud-native slice is growing far faster. [Grand View Research pegs the cloud data warehouse segment at a 23.5% CAGR](https://www.grandviewresearch.com/industry-analysis/cloud-data-warehouse-market-report), which is why Microsoft consolidated its analytics tooling into Fabric.

A typical Fabric data stack has a few layers: Data Factory pipelines or Dataflows Gen2 to ingest data from your sources into OneLake, the Fabric Warehouse or Lakehouse itself, a transformation layer (T-SQL, dataflows, or notebooks) that turns raw tables into clean analytical models, and a Power BI semantic model on top for dashboards. Many of these pieces are off-the-shelf, and you should use them where they fit. The custom engineering usually lives in the transformations that encode your specific business logic and in integrations with sources the standard connectors do not cover. The mechanics of moving that data reliably are covered in [data pipeline architecture](/blog/data-pipeline-architecture).

## Modeling data for analytics

This is the step teams underestimate, and it is where warehouses earn or lose their trust. Raw data copied from source systems is not analysis-ready. Modeling shapes it into consistent, well-defined tables that answer business questions, then the Power BI semantic model gives each metric one agreed definition.

The core work is defining your facts (measurable events like orders or shipments) and dimensions (the things you slice by, such as customer, product, or date). A star schema organized this way makes queries fast and, more importantly, makes the numbers consistent, because "revenue" means one thing computed one way. The semantic model is where that definition lives: one DAX measure per KPI, so revenue does not get recalculated three different ways across three reports. This is also where you settle definitions with the business: does revenue include tax, when is an order counted, how do you handle refunds. Getting those decisions written down and encoded as measures is what turns a pile of tables into a source of truth your [business intelligence dashboards](/blog/business-intelligence-dashboards) can rely on. For the details that keep a model fast and maintainable, see [Power BI semantic model best practices](/blog/power-bi-semantic-model-best-practices).

Because both the Warehouse and the Lakehouse expose their tables on OneLake, the semantic model can read them with [Direct Lake](/blog/direct-lake-explained), which gives near-import query speed without scheduled refreshes or DirectQuery latency. That keeps one copy of the data feeding fast reports.

## Governance and quality

A warehouse nobody trusts is worse than no warehouse, because people act on numbers that are quietly wrong. Given that the average large enterprise is already absorbing millions a year in bad-data costs, governance and quality are what keep the warehouse from adding to that total instead of cutting it.

Practical quality means automated tests on your data: checking that keys are unique, that values fall in expected ranges, that row counts do not suddenly collapse because a source feed broke. When a test fails, someone should be alerted before a stakeholder finds the error in a board deck.

A quality test is usually a small query that should return zero rows, wired to alert when it does not, like this check that an order key is unique:

```sql
-- Should return no rows; any result means a duplicate key slipped in
select order_id, count(*)
from fct_orders
group by order_id
having count(*) > 1;
```

Governance adds the human layer: clear ownership of each dataset, documentation of what each table and measure means, and access controls so sensitive data is only visible to those who should see it. In Fabric this runs through workspace roles, OneLake data access, sensitivity labels, and Microsoft Purview for lineage and cataloging. For US teams handling regulated data, this is also where encryption, audit logging, and compliance requirements get enforced at the data layer, which the [Power BI governance guide](/blog/power-bi-governance-guide) covers end to end.

## Scaling and cost management

Fabric capacities make it easy to start small and just as easy to run up a surprising bill. Cost management should be part of the design, not a cleanup project after the first invoice shocks someone.

The main levers are capacity and storage. Fabric bills on a shared capacity of Capacity Units, while OneLake storage is billed separately, so you can store a lot cheaply and size the capacity to the compute your workloads actually need. Watch for the usual culprits: transformations that reprocess all history on every run when they could run incrementally, reports that hammer the warehouse with unoptimized DAX or DirectQuery, and pipelines left running when nobody needs them. Use the Fabric Capacity Metrics app to watch throttling and smoothing early, and treat an expensive query the way you would treat a slow one, as a bug to fix. Built well on Direct Lake and incremental loads, a Fabric warehouse scales smoothly as your data grows, without the periodic rebuilds that plague poorly modeled systems.

## Where to start

You do not need to build the whole stack at once. Start with the two or three questions the business most wants answered reliably, wire up the sources those answers depend on with Data Factory, model that data into a Fabric Warehouse, put a semantic model on top, and get it in front of people in Power BI. Prove the value, then expand. That phased approach keeps cost and risk in check while the warehouse earns its trust. If you want help designing a Fabric and Azure architecture that fits your systems and your budget, [start a project](/#contact) and we will scope a first phase around the decisions you most need to get right. You can also browse more on data and Power BI on [the blog](/blog).
