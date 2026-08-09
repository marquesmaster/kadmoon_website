---
title: "Power BI semantic model best practices that hold up"
description: "How to design a Power BI semantic model that stays trustworthy: one definition per KPI, star schema, measures vs columns, naming, and star vs snowflake."
category: "Power BI"
primaryKeyword: "power bi semantic model"
tags: ["semantic model", "star schema", "dax measures", "data modeling"]
takeaways:
  - "A Power BI semantic model is the shared data layer, relationships, and measure definitions that sit between raw data and reports, so every report reads the same numbers from one place."
  - "Define each KPI exactly once as a measure in the model, not repeatedly inside visuals or reports, so revenue means the same thing everywhere and there is a single line to fix when the rule changes."
  - "Model a star schema: narrow fact tables surrounded by dimensions, joined on integer keys. It is the shape the engine is built for and it keeps DAX simple."
  - "Use measures for anything that aggregates and calculated columns only for row-level attributes you filter or group by, because measures compute at query time and stay compact."
  - "Prefer a star over a snowflake by flattening dimensions where you reasonably can, since fewer hops mean faster queries and DAX that is easier to write correctly."
faqs:
  - q: "What is a semantic model in Power BI?"
    a: "A semantic model, formerly called a dataset, is the reusable layer that holds your tables, the relationships between them, and the measures that define your business logic. Reports connect to it rather than to raw data, so a KPI like net revenue is calculated once in the model and every report that uses it gets the same answer. It is the single source of truth that separates data modeling from report building."
  - q: "Should I use a measure or a calculated column in Power BI?"
    a: "Use a measure for anything that aggregates, such as a sum, an average, a ratio, or a running total, because measures evaluate at query time in the current filter context and add almost nothing to model size. Use a calculated column only for a row-level attribute you need to slice, group, or filter by, such as a category bucket. Overusing calculated columns bloats the model and pushes work to refresh time instead of query time."
  - q: "Is a star schema or a snowflake schema better for Power BI?"
    a: "A star schema is the better default for Power BI. Its fact-and-dimension shape matches how the VertiPaq engine and DAX are designed to work, so queries are faster and filter propagation is easier to reason about. A snowflake, where dimensions are split into further related tables, adds relationship hops that slow queries and complicate DAX. Flatten to a star unless a dimension is genuinely too large or too reused to denormalize."
---

A Power BI semantic model is the layer that sits between your raw data and your reports: the tables, the relationships joining them, and the measures that encode your business logic. Reports do not calculate revenue or churn on their own; they ask the model, and the model answers. This is what makes a semantic model worth getting right. When the definition of a KPI lives in one place, every report agrees, and changing the rule is a one-line edit. When it does not, the same metric drifts into three slightly different numbers and people stop trusting the reports entirely. This guide covers the practices that keep a model trustworthy as it grows: one definition per KPI, a star schema, the measures-versus-columns discipline, naming, and the star-versus-snowflake trade-off.

## One definition per KPI

The single most valuable rule is this: define each KPI exactly once, as a measure in the model, and never recompute it inside a visual or a report. If net revenue is sales minus returns minus discounts, that logic belongs in a measure named `Net Revenue`. Every table, card, and chart that shows net revenue references that measure. When finance changes how discounts are treated, you edit one measure and every report updates together.

The failure mode is subtle and common. A report author, in a hurry, drags a raw `Sales` column into a visual and sums it, skipping the returns adjustment. Another author writes a quick measure inline. Now two numbers both called "revenue" disagree, and the next meeting is spent arguing about which spreadsheet is right instead of what to do. Centralizing the definition in the model is the cure. It is also what lets a single model safely serve many audiences through [row level security](/blog/row-level-security-power-bi) without the logic fragmenting.

## Model a star schema

The star schema is the shape Power BI is built for. At the center sit narrow **fact tables** that hold events and their numeric values: one row per order line, per transaction, per shipment, carrying keys and measures. Around them sit **dimension tables** that describe those events: Date, Product, Customer, Region. Facts join to dimensions on keys, ideally small integer surrogate keys rather than long text values.

This shape matters for real reasons. The VertiPaq engine compresses columns best when they are narrow and low-cardinality, which integer keys and tidy dimensions provide. Filter propagation flows naturally from dimension to fact, which is exactly how DAX expects to work, so a slicer on Region filters Sales without any special handling. And the model stays readable: anyone can look at it and see the events in the middle and the ways to slice them around the edge.

Resist the urge to build one giant flat table with everything in it. A single wide table repeats dimension values on every row, inflates size, and makes relationships and reuse impossible. The star keeps facts lean and descriptions shared.

## Measures vs calculated columns

Two ways to add logic to a model look similar and behave very differently. Getting the choice right keeps a model fast and small.

A **calculated column** computes once per row during refresh and is stored in the model. Use it only for a row-level attribute you need to filter, group, or slice by. A `Price Band` column that buckets each product into Low, Medium, or High is a fair use, because you want it on an axis or in a slicer.

A **measure** computes at query time, in the current filter context, and stores nothing. Use a measure for anything that aggregates: sums, averages, counts, ratios, running totals. Here is the simplest correct example, a base measure other measures build on:

```dax
Total Sales = SUMX ( Sales, Sales[Quantity] * Sales[Unit Price] )
```

That line evaluates against whatever is currently filtered, so it returns total sales for the whole company, for one region, or for one month depending on the visual, without you writing three versions. It adds essentially nothing to model size.

The rule of thumb: if it aggregates, make it a measure; if it is a fixed attribute of a row you want to slice by, consider a calculated column, and prefer computing it upstream in [data engineering](/services/data-engineering) when you can. Overusing calculated columns is one of the most common causes of a model that is slow to refresh and heavy to load.

## Naming and organization

Naming is not cosmetic. A model that report authors cannot navigate gets misused, and misuse is how wrong numbers happen.

- Name measures for the business, not the formula. `Net Revenue`, not `Sum_of_amt_2`. The name is what a report author sees in the field list.
- Hide raw numeric columns that should only be reached through a measure, so nobody accidentally drags and sums them.
- Group measures into display folders by subject area so the field list stays navigable as the model grows.
- Keep dimension and fact naming consistent, and name key columns predictably so relationships are obvious.
- Give each table one clear role. A table that is half fact and half dimension confuses everyone who touches it.

These conventions cost a few minutes and save a model from becoming a place people are afraid to touch.

## Star vs snowflake

A **snowflake** schema splits dimensions into further related tables. Instead of one Product dimension carrying category and subcategory, you have Product joined to Subcategory joined to Category, three tables and two extra hops. It normalizes the data the way a transactional database would.

For an analytics model, prefer the **star**. Flatten those levels back into a single Product dimension so a query reaches category in zero extra hops instead of two.

| Aspect | Star schema | Snowflake schema |
| --- | --- | --- |
| Dimension shape | Flattened, denormalized | Split into related tables |
| Relationship hops | Fewer | More |
| Query speed | Faster | Slower, more joins |
| DAX complexity | Simpler | More filter paths to reason about |
| Storage | Slightly more redundancy | Less redundancy |
| Best default | Yes | Only when justified |

Snowflaking earns its place in narrow cases: a dimension so large that denormalizing it wastes real memory, or a sub-dimension genuinely reused across several unrelated dimensions. Outside those, the small storage saving is not worth the extra hops, the slower queries, and the DAX that has to account for more filter paths. When in doubt, flatten to a star.

## Putting it together

A good semantic model is boring in the best way: facts in the middle, clean dimensions around them, every KPI defined once as a well-named measure, and no snowflake hops that do not earn their keep. That boredom is what makes the numbers trustworthy and the model cheap to extend. The same discipline underpins the [DAX patterns](/blog/dax-patterns-for-business) your analysts will layer on top and the dashboards built from it, whether you are standing up a new [Power BI](/services/power-bi) practice or moving off a legacy tool through a [Tableau to Power BI migration](/tableau-to-power-bi-migration). Get the model right and everything above it gets easier.
