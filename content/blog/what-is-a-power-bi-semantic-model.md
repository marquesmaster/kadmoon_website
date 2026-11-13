---
title: "What is a Power BI semantic model, and why it matters"
description: "A plain guide to the Power BI semantic model (formerly dataset): star schema, measures, DAX, and row-level security, for managers and analysts building Power BI properly."
category: "Power BI"
primaryKeyword: "power bi semantic model"
tags: ["Power BI", "semantic model", "star schema", "DAX"]
takeaways:
  - "A Power BI semantic model is the shared layer of tables, relationships, and measures that reports read from, so every report built on it tells the same story."
  - "Defining each measure once in the model, rather than per report, is what keeps revenue and margin consistent across the whole organization."
  - "A star schema, with fact tables surrounded by dimension tables, is the layout that makes a model fast and easy to extend."
  - "Measures are calculations that respond to filters, while columns store values row by row, and knowing the difference is most of DAX."
  - "Row-level security lives in the model, so one set of rules governs who sees what no matter which report opens the data."
faqs:
  - q: "Is a semantic model the same thing as a Power BI dataset?"
    a: "Yes. Microsoft renamed the dataset to the semantic model in late 2023, and older documentation, menus, and community posts still use both terms. The object itself has not changed. It is the collection of tables, relationships, measures, and security rules that reports connect to. When you read dataset in a Power BI setting, you can treat it as a semantic model."
  - q: "Do we need one big model or several small ones?"
    a: "Most organizations do best with a few well governed models aligned to subject areas such as sales, finance, and operations, rather than one giant model or a separate model per report. A shared model per subject area means the key measures are defined once and many reports reuse them. Splitting every report into its own model is how numbers start to disagree. The right boundary is usually the business domain, not the report."
  - q: "Can business analysts build semantic models, or is it a developer job?"
    a: "Analysts can and should build models, especially for their own subject areas, as long as there is an agreed pattern to follow. The core skills are a clean star schema, well named measures, and a small amount of DAX. The parts that benefit from engineering support are the upstream data pipelines and the governance around certified models. A good setup lets analysts own the model while a central team sets the standards."
---

A sales report says revenue was 4.2 million. A finance report built the next week says 4.05 million. Both pull from the same database, both look right, and now two teams are arguing about which number to trust. The usual cause is not bad data. It is that each report defined revenue its own way. A semantic model is how you stop that from happening.

## What a semantic model actually is

A Power BI semantic model is the layer that sits between your raw data and your reports. It holds the tables you report on, the relationships that connect them, the measures that calculate things like revenue and headcount, and the security rules that decide who sees what. Reports do not talk to the database directly. They connect to the model, and the model answers their questions.

Microsoft used to call this object a dataset. In late 2023 it was renamed the semantic model, so you will see both words depending on how old the menu or article is. The thing itself did not change. What matters is the idea: one shared definition of your data that many reports read from.

Because the model is shared, it becomes the single place where the meaning of your numbers is decided. That is the whole point. When revenue is defined in the model, every report that uses the model gets the same revenue.

## One definition per measure

Here is the problem with defining calculations inside individual reports. Say revenue should exclude internal transfers and credit notes. The first analyst remembers to exclude both. The second excludes credit notes but forgets internal transfers. The third builds their own version six months later and makes a different choice again. None of them is lazy. They just each rebuilt the same logic from memory.

Put the measure in the model once, and all three reports call the same calculation. Change the rule later, and every report updates together. This is the difference between a set of spreadsheets that happen to use Power BI and an analytics layer the organization can rely on. It is also the main reason a governed model becomes more valuable as your audience grows, because the cost of inconsistent numbers rises with every new person reading them.

## Star schema basics

A model works best when its tables are arranged in a star schema. In the middle sit fact tables, which hold the events you measure: sales lines, invoice rows, support tickets, each with dates, amounts, and keys. Around them sit dimension tables, which hold the things you slice by: customers, products, dates, regions, salespeople.

The facts connect to the dimensions through those keys. A sales fact links to a product dimension so you can group revenue by category, and to a date dimension so you can compare months. Drawn out, it looks like a star, with one fact in the center and dimensions pointing in.

This layout is not academic. It is what makes the model fast, because Power BI's engine is built for it, and it is what makes the model easy to grow. Adding a new way to slice the data usually means adding one dimension, not rebuilding everything. If you flatten everything into one wide table instead, performance suffers and the model gets harder to reason about with every column you add. The upstream work of shaping clean facts and dimensions is where good [data engineering](/services/data-engineering) pays off.

## Measures versus columns

This distinction trips up almost everyone at first, and getting it straight saves a lot of confusion.

A column stores a value for each row. Unit price lives in a column because every sales line has one. You can see it sitting in the table. A measure is a calculation that runs when a report asks for it, and it responds to whatever filters are on the screen. Total revenue is a measure, because the number changes depending on whether you are looking at one region or all of them, one month or the year.

A rough rule: if the value belongs to a single row, it is a column. If it is a total, an average, a ratio, or anything that aggregates across rows, it is a measure. Measures are where your business logic lives, and they are what you want defined once in the model.

## A little DAX intuition

Measures are written in DAX, the formula language of Power BI. You do not need to master it to understand what it is doing. A basic measure such as `SUM(Sales[Amount])` adds up the amount column across whatever rows the current filters leave visible. Pick a region on a slicer, and the same measure now sums only that region's rows.

The idea that makes DAX click is filter context. A measure always runs inside the filters currently applied, from slicers, from the row of a table, from the axis of a chart. Most DAX beyond the basics is about reading, changing, or ignoring that context. Year to date, same period last year, percent of total: these are all the same measure looking at a different slice. Once filter context makes sense, DAX stops feeling like magic and starts feeling like a tool.

## Row-level security in the model

Often a report should show different data to different people. A regional manager sees their own region. A sales rep sees their own accounts. You could try to handle this by building a separate report per group, but that falls apart quickly and is easy to get wrong.

Row-level security, or RLS, solves it in the model. You define rules once, such as "this person's rows are where the region matches their assignment," and those rules apply to every report connected to the model. The user signs in, and Power BI filters the data to what they are allowed to see before any report renders. Because the rules live in the model rather than in each report, there is one place to set them, review them, and audit them. That is far safer than hoping every report author remembered to filter correctly.

## Why a governed model is what makes Power BI trustworthy

With a handful of reports and two analysts, you can get away without much of this. The trouble starts as the audience grows. More people build more reports, each re-deriving the same numbers, each applying security their own way, and trust quietly erodes until nobody is sure which dashboard is right.

A governed semantic model is the fix. Measures defined once, a clean star schema others can build on, and security set in one place turn Power BI from a pile of individual reports into an analytics layer the whole organization can stand behind. It is the foundation that later work sits on, from [Power Platform apps](/services/power-platform) that act on the data to [Copilot features](/services/copilot-ai) that answer questions about it. If you want to see how this plays out on real engagements, our [case studies](/cases) walk through it, and you can [request a quote](/contact) to talk through your own model. The best time to build the model properly is before the sprawl starts, and the second best time is now.
