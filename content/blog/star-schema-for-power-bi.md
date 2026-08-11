---
title: "A star schema for Power BI that scales"
description: "How to build a star schema in Power BI that stays fast: facts vs dimensions, grain, surrogate keys, a date dimension, and why to avoid bidirectional filters."
category: "Power BI"
primaryKeyword: "star schema power bi"
tags: ["star schema", "power bi data model", "facts and dimensions", "vertipaq"]
takeaways:
  - "A star schema puts narrow fact tables in the center, holding events and their numbers, surrounded by dimension tables that describe those events. It is the shape the VertiPaq engine and DAX are built to read."
  - "Set the grain of each fact table first, meaning the exact thing one row represents, because every measure and every relationship depends on that decision being clear and consistent."
  - "Join facts to dimensions on small integer surrogate keys, not on text or business keys, so VertiPaq compresses the columns tightly and relationships stay fast."
  - "Keep relationships single-direction from dimension to fact and avoid bidirectional filtering, which slows queries, creates ambiguity, and hides bugs that are hard to trace later."
  - "A clean star makes DAX simpler because filter context flows the way you expect, so measures stay short and you rarely need to fight the model to get a correct number."
faqs:
  - q: "Is a star schema or a snowflake schema better in Power BI?"
    a: "A star schema is the better default. VertiPaq and DAX are designed around the fact-and-dimension shape, so filters propagate cleanly and queries are faster. A snowflake splits a dimension into further related tables, which adds relationship hops that slow queries and make DAX harder to reason about. Flatten a snowflake into a star by denormalizing those extra tables into one dimension, unless a dimension is genuinely too large or too widely shared to fold in."
  - q: "Why not just use one big flat table in Power BI?"
    a: "A single wide table repeats every descriptive value on every row, which inflates the model and hurts compression because high-cardinality text columns do not compress well. It also blocks reuse: you cannot share a Product or Date table across several facts, and slicers get messy. A star keeps facts narrow and numeric while descriptions live once in dimensions, so the model stays small, fast, and easy to extend."
  - q: "Do I need a dedicated date dimension in Power BI?"
    a: "Yes. Build a separate Date table with one continuous row per day covering your full range, mark it as the date table, and relate your facts to it. Time intelligence functions like TOTALYTD and SAMEPERIODLASTYEAR depend on a contiguous date dimension, and the built-in auto date/time hierarchy is no substitute because it creates a hidden table per date column and bloats the model. One shared Date table also lets a single slicer filter every fact at once."
---

A star schema is the data model shape that Power BI is built to run. Get it right and the rest of the work gets easier: measures stay short, refreshes stay quick, and reports agree with each other. Get it wrong and you spend your time fighting the model, writing DAX that compensates for a bad structure, and explaining why two visuals show different totals. This guide covers the parts that matter in practice: facts and dimensions, why the star beats a flat table or a snowflake, grain, surrogate keys, role-playing dimensions, the date dimension, and why bidirectional relationships are usually a trap.

## Facts and dimensions

A star schema has two kinds of tables. **Fact tables** sit at the center and hold events with their numbers: one row per order line, per transaction, per shipment, per support ticket. Facts are tall and narrow, carrying mostly keys and numeric values. **Dimension tables** sit around the facts and describe those events: Date, Product, Customer, Store, Employee. Dimensions are shorter and wider, holding the text and attributes you filter, group, and slice by.

The split is the whole point. Numbers you aggregate live in facts. Words you filter by live in dimensions. A sales fact might hold a quantity, a unit price, and a handful of keys, while everything a person would put on an axis or in a slicer (product category, region name, customer segment) lives in the dimensions those keys point to. Drawn out, the model looks like a star, and anyone can read it: events in the middle, ways to describe them around the edge.

## Why the star wins in VertiPaq

Power BI stores data in VertiPaq, a columnar engine that compresses each column independently. Compression works best on columns that are narrow and repeat a lot of values, which is exactly what a star produces. Fact columns are integer keys and numbers with low variety. Dimension columns hold each descriptive value once instead of on every event row.

Two common alternatives both fight this design. A **single flat table** with everything joined together repeats every dimension value on every fact row. A million orders now carry a million copies of each product name and customer address, all high-cardinality text that compresses poorly. The model balloons and refreshes slow down.

A **snowflake** goes the other way and splits a dimension into several related tables, so Product links to Category which links to Department. Each split adds a relationship hop that the engine has to traverse at query time, and each hop is one more place for DAX filter context to behave in a way you did not expect. The star sits between these extremes: descriptions normalized into one dimension each, facts kept lean, no unnecessary hops. That is why it is the default we reach for on almost every [semantic model](/blog/power-bi-semantic-model-best-practices) we build.

## Grain comes first

Before you write a single measure, decide the **grain** of each fact table, meaning the exact thing that one row represents. "One row per order line" is a grain. "One row per order" is a different grain. "One row per product per day" is another. This decision drives everything downstream, so make it explicit and keep every row in the table faithful to it.

Grain matters because measures assume it. If your sales fact is one row per order line, then summing quantity gives units sold, and every additive number behaves. Mix grains in one table, say order-level totals alongside line-level detail, and your sums double-count or come up short depending on the filter, and no amount of clever DAX fixes it cleanly. When you need numbers at different grains, use separate fact tables that share the same dimensions, rather than forcing them into one.

## Surrogate keys

Join facts to dimensions on **surrogate keys**: small integers generated for the model, not the natural business keys like an email address, a SKU string, or a GUID. A surrogate key is a plain integer such as `ProductKey` that means nothing outside the model and everything inside it.

Two reasons. First, VertiPaq compresses and matches integer columns far better than long text or GUIDs, so relationships built on integer keys are faster and lighter. Second, surrogate keys survive changes in the source. A customer's email changes, a product gets recoded upstream, two systems merge, and the business key shifts underneath you. A surrogate key stays stable, so relationships do not break and history stays intact. This is one of the places where a proper [data warehouse](/blog/building-a-data-warehouse) earns its keep, because that is the natural layer to generate and manage surrogate keys before the data reaches Power BI.

## Role-playing dimensions

Sometimes one dimension describes an event in several roles at once. An order has an order date, a ship date, and a delivery date, and all three are dates. This is a **role-playing dimension**: the same Date table plays multiple roles against one fact.

Power BI allows only one active relationship between two tables at a time, so you cannot wire all three date columns to a single Date table and have them all live. There are two honest ways to handle it. Keep one active relationship, on order date say, and reach the others in DAX with `USERELATIONSHIP` inside specific measures. Or load separate date dimensions, an Order Date table and a Ship Date table, each with its own active relationship, so slicers work directly without special measures. The second approach costs a little duplication but keeps report authors out of DAX for a common need, which is often worth it.

## The date dimension

Every model that touches time needs a dedicated **Date dimension**: a separate table with one continuous row per day across your full range, including days with no events. Mark it as the model's date table. Time intelligence functions such as `TOTALYTD` and `SAMEPERIODLASTYEAR` rely on that unbroken run of dates, and they misbehave or fail on a column that has gaps.

Turn off Power BI's automatic date/time option too. It quietly creates a hidden date table for every date column in the model, which wastes memory and gives you no shared calendar to slice by. One well-built Date table, with the year, quarter, month, and fiscal columns you actually report on, filters every fact through a single slicer and keeps time intelligence correct. A Date dimension is also what makes [incremental refresh](/blog/power-bi-incremental-refresh) straightforward, since the partitions it creates are defined by date ranges.

## Avoid bidirectional relationships

By default, filters flow one way in a star: from the dimension to the fact. A slicer on Region filters Sales, which is exactly what you want. Power BI lets you set a relationship to filter in both directions, and it is tempting when a first attempt does not return what you expected. Resist it as a default.

Bidirectional filtering slows queries because the engine propagates filters in more directions than it needs to. Worse, in a model with several facts sharing dimensions, two-way filters create ambiguous paths, and the engine's choice among them is hard to predict and harder to debug. You end up with numbers that are subtly wrong in ways nobody can explain. Keep relationships single-direction, and when you genuinely need a filter to travel the other way for one calculation, do it explicitly in a measure with `CROSSFILTER`, so the exception is visible and contained rather than baked into the model.

## How the model drives DAX

The payoff for all of this is DAX that stays simple. When the grain is clean, keys are integers, filters flow one way, and dimensions are properly separated, filter context behaves the way you expect. A base measure like `Total Sales = SUMX ( Sales, Sales[Quantity] * Sales[Unit Price] )` respects whatever the report has filtered without any special handling, and the [DAX patterns](/blog/dax-patterns-for-business) you build on top of it, running totals, year-over-year, safe ratios, compose without surprises.

The opposite is telling. Most genuinely hard DAX we are asked to fix is not a hard business question, it is a workaround for a model that was never shaped as a clean star. Fix the model and the DAX shrinks. The structure is where the performance and the correctness actually come from.

Kadmoon is a US Power BI and Microsoft data-platform consultancy. We design semantic models on Fabric and Power BI that stay fast and trustworthy as they grow. If your reports are slow, disagree with each other, or lean on DAX that nobody wants to touch, [start a project](/#contact) and we will look at the model first.
