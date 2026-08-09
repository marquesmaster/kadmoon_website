---
title: "What is Microsoft Fabric? A plain guide to the platform"
description: "What Microsoft Fabric is, how OneLake, Direct Lake, and workspaces fit together, and how the unified SaaS platform relates to Power BI and Synapse."
category: "Microsoft Fabric"
primaryKeyword: "what is microsoft fabric"
tags: ["microsoft fabric", "onelake", "direct lake", "power bi"]
takeaways:
  - "Microsoft Fabric is a single software-as-a-service analytics platform that folds data engineering, warehousing, data science, real-time intelligence, and Power BI into one product with shared storage and one billing model."
  - "OneLake is the built-in data lake that every Fabric tenant gets by default, so every workload reads and writes the same copy of data instead of each team keeping its own."
  - "Direct Lake lets Power BI query Delta tables in OneLake at near-import speed without scheduled refreshes or a separate copy, which is the feature most teams notice first."
  - "Fabric organizes work into workspaces, and each workspace maps to a team or project with its own items, permissions, and capacity assignment."
  - "You do not have to abandon Synapse or your existing lake to start; Fabric can shortcut to data you already store in ADLS Gen2 and coexist while you migrate."
faqs:
  - q: "Is Microsoft Fabric the same as Power BI?"
    a: "No. Power BI is one experience inside Fabric, the part people use to build reports and dashboards. Fabric is the larger platform that also includes data engineering, data warehousing, data science, data factory, and real-time intelligence, all sitting on shared OneLake storage. If you own a Power BI Premium capacity, you already have access to the rest of Fabric."
  - q: "What is OneLake in Microsoft Fabric?"
    a: "OneLake is the single data lake that comes with every Fabric tenant, one per tenant, similar to how every Microsoft 365 tenant gets one OneDrive. It stores data in the open Delta Parquet format so every Fabric workload reads the same copy. You can also point OneLake at data already sitting in Azure Data Lake Storage through a shortcut, without moving or duplicating it."
  - q: "Do I need to know Synapse or Spark to use Microsoft Fabric?"
    a: "No. Fabric is a SaaS product, so there are no clusters to size or infrastructure to manage. Analysts can work entirely in Power BI and the SQL endpoint, while engineers who want Spark notebooks or pipelines have them available in the same workspace. You add the workloads your team actually needs."
---

Microsoft Fabric is a single software-as-a-service analytics platform from Microsoft that brings data movement, storage, engineering, warehousing, data science, real-time analytics, and Power BI into one product. Instead of buying and wiring together separate Azure services, you get one platform, one copy of your data in a shared lake called OneLake, and one capacity-based bill. If you have used Power BI, you have already used a slice of Fabric, because Power BI is now one of the experiences inside it.

This guide explains what Fabric actually is, the parts you will hear about most (OneLake, Direct Lake, and workspaces), and how it relates to the tools you may already run, especially Power BI and Azure Synapse.

## The core idea: one platform, one copy of the data

The problem Fabric is built to solve is fragmentation. A typical analytics stack spreads across a data lake, a warehouse, a pipeline tool, a Spark environment, and a BI tool, each with its own storage, its own access model, and its own bill. Data gets copied between them, versions drift, and a simple question like "which number is correct" becomes hard to answer.

Fabric's answer is to put every workload on top of the same storage layer and manage them as one SaaS product. You do not provision clusters or size infrastructure. You buy a capacity, and the workloads draw from it. Because everything writes to the same lake in the same open format, a table an engineer lands with Spark is immediately queryable from SQL and reportable in Power BI without another copy.

## OneLake: the lake you already have

OneLake is the storage foundation. Every Fabric tenant gets exactly one OneLake automatically, the way every Microsoft 365 tenant gets one OneDrive. There is nothing to set up.

A few things make it useful:

- It stores data in Delta Parquet, an open format, so you are not locked into a proprietary file layout.
- It is organized by workspace, and inside each workspace, items like lakehouses and warehouses hold your tables and files.
- It supports shortcuts, which are references to data that lives elsewhere, including Azure Data Lake Storage Gen2, Amazon S3, or another Fabric workspace. A shortcut lets Fabric read that data in place without copying it.

That last point matters for anyone with an existing lake. You can bring years of data into Fabric's reach by creating a shortcut, not by running a migration. Our [data engineering](/services/data-engineering) work often starts exactly here, mapping what should be shortcutted versus what should be loaded natively.

## Workspaces: how work is organized

A workspace is the container you actually work in. Think of it as a project or team boundary. Inside a workspace you create items: lakehouses, warehouses, notebooks, pipelines, semantic models, reports, and more. Each workspace has its own membership and roles, and it is assigned to a capacity that provides its compute.

This structure is how Fabric handles governance and cost at the same time. You grant a team access to their workspace, assign it to the right capacity, and the permissions and billing follow. For organizations that care about who can see what, this maps cleanly onto the controls we set up in [data governance](/services/data-governance) engagements.

## Direct Lake: the feature people notice first

Power BI has traditionally offered two ways to connect to data. Import mode copies data into an in-memory model for fast queries but needs scheduled refreshes and holds a separate copy. DirectQuery sends live queries to the source, so data is always current but reports can be slow.

Direct Lake is a third option, available because Fabric controls both the storage and the engine. It reads Delta tables directly from OneLake into the Power BI engine on demand, giving import-like speed without a scheduled refresh and without a second copy of the data. When the underlying table updates, the report reflects it without a refresh job.

Direct Lake is the change most teams feel immediately, so it is worth understanding its trade-offs in detail. We cover those in [Direct Lake explained](/direct-lake-explained), including when it quietly falls back to DirectQuery and where import mode is still the right call.

## The workloads inside Fabric

Fabric groups its capabilities into experiences. You do not have to use all of them, but they share the same lake and security model:

| Experience | What it is for |
| --- | --- |
| Data Factory | Ingesting and transforming data with pipelines and dataflows |
| Data Engineering | Building lakehouses and running Spark notebooks |
| Data Warehouse | A full T-SQL warehouse with transactional guarantees |
| Data Science | Training and running machine learning models |
| Real-Time Intelligence | Streaming and event data with KQL querying |
| Power BI | Building semantic models, reports, and dashboards |

Because they all read and write OneLake, moving between them does not mean moving data. An engineer builds a lakehouse, an analyst models it, and a report reads it, all in one workspace.

## How Fabric relates to Power BI and Synapse

Two questions come up constantly.

First, Power BI. Power BI is not being replaced; it is folded in. Your existing Power BI Premium capacity gives you Fabric. Reports, semantic models, and RLS all carry forward. What changes is that Power BI can now sit directly on OneLake through Direct Lake and share governance with the rest of your data estate. Our [Power BI](/services/power-bi) practice treats Fabric as the platform Power BI lives on, not a separate tool.

Second, Synapse. Fabric is the successor to Azure Synapse Analytics for most new work. The lakehouse, warehouse, and Spark capabilities that lived in Synapse now have SaaS equivalents in Fabric. That does not mean you rip out Synapse tomorrow. Many teams run both while they migrate, using shortcuts so Fabric can read Synapse-managed data in the meantime. If you are weighing that move, the trade-offs are laid out in [Azure Synapse vs Microsoft Fabric](/azure-synapse-vs-microsoft-fabric), and our [Synapse to Fabric migration](/synapse-to-fabric-migration) service handles the mechanics.

## When Fabric makes sense

Fabric is a strong fit when you are already invested in Power BI, want to reduce the number of separate services you operate, and value having one copy of the data with one security model. It is especially compelling for teams tired of managing infrastructure, since the SaaS model removes cluster sizing and patching from the job.

It is less urgent if you have a mature, well-governed Synapse or Databricks setup that meets your needs and your team is comfortable operating it. In that case, Fabric is worth piloting rather than adopting wholesale, and coexistence through shortcuts lets you evaluate it against real workloads.

If you want a guided evaluation, we build proof-of-concept [dashboards](/dashboards) on Fabric using your own data so the decision rests on evidence rather than a demo. See our [Microsoft Fabric](/services/microsoft-fabric) services for how we approach adoption, and our [case studies](/cases) for how it has played out in practice.
