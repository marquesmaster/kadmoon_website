---
title: "The medallion architecture explained, without the jargon"
description: "Bronze, silver, and gold layers are a simple idea: land the raw data, clean it, then model it for reporting. A plain explanation of what each layer does and why the separation keeps a Fabric data platform maintainable."
category: "Data Engineering"
primaryKeyword: "medallion architecture explained"
tags: ["Microsoft Fabric", "medallion architecture", "lakehouse", "data engineering", "data quality"]
takeaways:
  - "The medallion architecture is three layers: bronze is the raw data as it arrived, silver is the cleaned and joined version, and gold is the modeled data reporting uses."
  - "Separating the layers means you can always trace a number back to its raw source and rebuild the clean layers without re-fetching everything."
  - "Bronze keeps an untouched copy, so if a transformation is wrong you fix it and reprocess, instead of having corrupted the only copy you had."
  - "Gold is the shape Power BI reads: modeled tables with the grain and relationships reporting needs."
  - "The value is maintainability and trust: each layer has one job, and problems are isolated to the layer where they happen."
faqs:
  - q: "What is the medallion architecture in Microsoft Fabric?"
    a: "It is a way of organizing a data platform into three layers, named bronze, silver, and gold. Bronze holds the raw data exactly as it arrived from each source, untouched. Silver holds a cleaned and conformed version, where the data has been corrected, deduplicated, and joined so the same customer or date means the same thing across sources. Gold holds the modeled data that reporting uses, shaped into the tables and grain Power BI reads. Data flows bronze to silver to gold, getting more refined at each step. The point is that each layer has one clear job, so you can trace any reported number back to its raw source and fix problems in the layer where they belong, which keeps the platform maintainable as it grows."
  - q: "Why keep a raw bronze layer at all?"
    a: "Because it is your safety net. Bronze is an untouched copy of the data as it arrived, so if a cleaning rule in the silver layer turns out to be wrong, you correct the rule and reprocess from bronze, rather than discovering you have overwritten the only copy you had. It also lets you add new transformations later against the full original data, and it gives you a way to prove what a source actually sent, which matters when a number is questioned. Keeping raw data costs some storage, but storage is cheap compared to the cost of not being able to rebuild or audit your data. That is why the raw layer is kept deliberately, not treated as disposable."
  - q: "What is the difference between the silver and gold layers?"
    a: "Silver is cleaned and conformed data; gold is modeled data. In silver, the raw sources have been corrected, deduplicated, and joined so they agree with each other, but the shape is still close to the source systems. In gold, that clean data is reshaped for reporting: into fact and dimension tables at the right grain, with the relationships and structure a Power BI semantic model expects. Put simply, silver makes the data correct and consistent, and gold makes it ready to report on. Keeping them separate means the cleaning logic and the reporting model can change independently, and a reporting change does not force you to redo the cleaning."
  - q: "Do I need a medallion architecture for a small Power BI setup?"
    a: "Not usually. The medallion architecture earns its place when you have a Fabric lakehouse or warehouse handling real data volume from several sources, where separating raw, clean, and modeled data keeps things maintainable. For a small Power BI setup that connects directly to a few sources and shapes the data in the model, that three-layer structure would be overhead with little benefit. The principle still applies in spirit, keep raw data recoverable, clean before you model, but you do not need the full architecture until you have the scale that makes it pay off. We apply it when a Fabric platform is warranted, and keep things simpler when it is not."
---

When data engineers describe a Fabric platform, they often talk about bronze, silver, and gold layers. It sounds like jargon, and the medal names do not help, but the idea underneath is simple and sensible. It is just a discipline for moving data from the messy state it arrives in to the clean, modeled state reporting needs, in steps, so that each step has one job and problems stay where they happen. Here is what each layer does and why the separation is worth it.

## The idea in one sentence

Land the raw data, clean it, then model it, and keep each stage separate. Bronze is the raw data as it arrived. Silver is the cleaned and joined version. Gold is the modeled data that Power BI reads. Data flows from bronze to silver to gold, getting more refined at each step, and you never skip a step or collapse two of them into one.

## Bronze: the raw data, untouched

The bronze layer holds the data exactly as it came from each source, with no corrections. If the accounting system sent a file with duplicate rows and odd date formats, bronze keeps it that way. This feels wrong at first, why store messy data on purpose, but it is the layer that makes everything else safe.

Bronze is your recoverable copy. If a cleaning rule downstream turns out to be wrong, you fix the rule and reprocess from bronze. Without it, a bad transformation could corrupt the only copy you had, with no way back. Bronze also lets you add new processing later against the full original data, and it lets you prove what a source actually sent when a number is challenged. The storage it costs is small against what it protects.

## Silver: cleaned and conformed

The silver layer is where the data becomes correct and consistent. Duplicates are removed. Formats are standardized. Records from different systems are matched so that the same customer is one customer and the same date is one date everywhere. Sources that disagree are reconciled against agreed rules.

After silver, the data is trustworthy, but it is still shaped roughly like the source systems. Silver's job is accuracy and consistency, not reporting shape. This separation matters: the cleaning logic is involved and changes over time, and keeping it in its own layer means you can improve it without touching how the data is modeled for reports.

## Gold: modeled for reporting

The gold layer is the data in the shape reporting uses. The clean silver data is reshaped into the fact and dimension tables a Power BI semantic model expects, at the grain reporting needs, with the relationships in place. This is the layer Power BI connects to.

Gold is deliberately close to how the business thinks. A sales fact at the right grain, a clean date dimension, conformed customer and product dimensions. Because the heavy cleaning already happened in silver, gold can focus on structure, and a change to the reporting model does not force a change to the cleaning.

## Why the separation is the whole point

You could, in theory, do all of this in one step: pull the raw data, clean and model it together, and store only the result. Plenty of setups start that way. The problem is that when something goes wrong, you cannot tell which part failed, and you may not be able to rebuild, because you kept only the final output.

The medallion layers fix that by giving each stage one job. A wrong number can be traced back: is it wrong in gold's modeling, silver's cleaning, or was it already wrong in bronze from the source? Each layer can be rebuilt from the one before it. And each layer can change on its own schedule, so improving the cleaning does not disturb the reporting model and vice versa. The result is a platform you can maintain and trust as it grows, which is the real payoff.

## When it is worth it, and when it is not

The medallion architecture earns its place on a real Fabric lakehouse or warehouse handling meaningful volume from several sources. At that scale, the separation is what keeps the platform maintainable and the numbers auditable. For a small Power BI setup that connects to a few sources and shapes the data in the model, the full three-layer structure is overhead you do not need. The underlying principle still holds, keep raw data recoverable and clean before you model, but you apply the full architecture when the scale justifies it, and keep things simpler when it does not.
