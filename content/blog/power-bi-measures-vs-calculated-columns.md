---
title: "Measures vs calculated columns: a distinction that keeps models fast"
description: "Two ways to create a calculation in Power BI, measures and calculated columns, that work differently under the hood, and using each for the right thing is part of keeping a model fast and correct."
category: "Power BI"
primaryKeyword: "measures vs calculated columns"
tags: ["Power BI", "measures", "calculated columns", "DAX", "performance"]
takeaways:
  - "Power BI offers two ways to add a calculation: measures, computed on the fly, and calculated columns, computed and stored per row."
  - "A measure responds to what the user selects and costs nothing to store; a calculated column is fixed per row and takes up space in the model."
  - "Overusing calculated columns bloats the model and slows it, because each one stores a value for every row."
  - "Most calculations should be measures; calculated columns belong only where you genuinely need a per-row value to filter or group by."
  - "Knowing which to use is part of building a model that stays lean and fast as it grows."
faqs:
  - q: "What is the difference between a measure and a calculated column?"
    a: "They are two ways to create a calculation in Power BI that work differently under the hood. A calculated column computes a value for every row and stores it in the model, so it exists as data, fixed, taking up space, computed once at refresh. A measure computes on the fly when a report is used, in response to what the viewer has selected, and stores nothing. The practical difference: a calculated column is a fixed per-row value you can filter and group by, while a measure is a dynamic calculation, like a total or average, that recomputes with the user's selections. They look similar when you create them but behave very differently, which is why choosing the right one matters."
  - q: "Why does overusing calculated columns slow a model down?"
    a: "Because every calculated column stores a value for every row, so each one adds to the model's size, and a large model is slower and heavier. On a table with millions of rows, a calculated column is millions of stored values, and several of them multiply that cost, bloating the model and hurting performance and refresh. Measures, by contrast, store nothing, they compute only when needed, so they add no size. When calculations that could be measures are instead built as calculated columns, the model carries stored data it does not need, which is one of the common causes of a model that is larger and slower than it should be. Favoring measures keeps the model lean."
  - q: "When should I use a calculated column?"
    a: "When you genuinely need a fixed per-row value to filter, group, or slice by, something that is a property of each row rather than a calculation over many rows. For example, a column that classifies each row into a category you want to filter on, which must exist per row to be used that way, is a legitimate calculated column. The test is whether you need the value to exist on each row for filtering or grouping, if so, a calculated column is right; if you just need a total, average, or other aggregation that responds to selections, that is a measure. Use calculated columns deliberately where a per-row value is actually needed, not as the default way to make any calculation."
  - q: "Do I need to understand this to use Power BI?"
    a: "Not to use reports, but whoever builds the model does, because the choice affects whether the model stays fast and lean. Someone consuming reports never sees measures or calculated columns. But the person building the model decides how each calculation is made, and defaulting to calculated columns where measures would do is a common reason models end up larger and slower than necessary. Knowing to favor measures and reserve calculated columns for genuine per-row needs is part of building a model that performs well and scales, which is exactly the kind of judgment experienced modeling brings and that a good partner applies by default."
---

When you add a calculation to a Power BI model, you choose between two things that look almost the same when you create them: a **measure** or a **calculated column**. They can sometimes produce similar-looking results, but under the hood they work very differently, and using each for the right purpose is part of keeping a model fast, lean, and correct. Defaulting to the wrong one, usually overusing calculated columns, is a common reason models end up bigger and slower than they need to be. Here is the difference and how to choose.

## Two ways to calculate

A **calculated column** computes a value for **every row** and **stores it** in the model. It exists as data: once created, it is a column of values, one per row, fixed, computed at refresh and then sitting in the model taking up space just like any other column. You can filter by it, group by it, and slice on it, because it is a real per-row value.

A **measure** computes **on the fly**, when a report is used, in response to what the viewer has selected, and it **stores nothing.** It is not data sitting in the model; it is a calculation that runs at the moment someone looks at a report, producing a result for the current selection and then being recomputed for the next. A total that changes as you filter, an average for the current slice, a ratio that responds to what is selected, these are measures.

So the core difference is this: a **calculated column** is a **fixed per-row value stored in the model**, and a **measure** is a **dynamic calculation that computes when needed and stores nothing.** They look similar in the authoring experience, you write a formula either way, but they behave very differently, and that difference has real consequences for the model.

## Why overusing calculated columns hurts

The problem with reaching for calculated columns by default is that **every calculated column stores a value for every row**, so each one **adds to the model's size.** On a small table this is negligible, but on a table with millions of rows, a single calculated column is millions of stored values, and several calculated columns multiply that cost. The model grows, and a **larger model is slower and heavier**, both to query when people use reports and to refresh.

Measures, by contrast, **store nothing.** They compute only when needed and add no size to the model at all. So when a calculation that **could** be a measure is instead built as a **calculated column**, the model carries stored data it does not need, bloating its size for no benefit. This is one of the most common causes of a model that is larger and slower than it should be: calculations that should have been measures, built as calculated columns, each one quietly adding stored data. Favoring measures keeps the model **lean**, which keeps it **fast**, because much of a model's performance comes down to its size, and unnecessary calculated columns are a frequent and avoidable source of bloat.

## When a calculated column is right

Calculated columns are not bad; they are **right for a specific job**, and the skill is knowing when that job applies. Use a calculated column when you genuinely need a **fixed per-row value** to filter, group, or slice by, a value that is a property of each row rather than an aggregation over many rows.

The classic example is a column that **classifies each row** into a category you want to filter or group on. If you need each row to carry a label, say, a band or category derived from its values, so that you can then filter the report by that label, that value has to **exist per row** to be used that way, and a calculated column is the correct tool. The test is simple: do you need the value to **exist on each row** for filtering or grouping? If so, a calculated column is right. If you just need a **total, average, or other aggregation** that responds to the user's selections, that is a **measure.** Applying that test, rather than defaulting to whichever is more familiar, is what keeps calculated columns to the cases that actually need them and everything else as measures.

## The rule of thumb

Put together, the guidance is straightforward: **most calculations should be measures**, and **calculated columns belong only where you genuinely need a per-row value** to filter or group by. Lead with measures, because they are dynamic, responsive to selections, and cost nothing to store, and reach for a calculated column only when the calculation has to exist per row for filtering or grouping, which is the narrower case.

This keeps the model lean and fast as it grows, because it avoids the stored-data bloat that unnecessary calculated columns cause. A model built this way carries only the per-row calculations it truly needs and handles everything else as measures that add no weight, which is a meaningful part of why one model performs well while another, functionally similar one is slow. The difference often is not the data or the reports but whether the person building the model defaulted to measures or scattered calculated columns where measures would have done.

## Why it is part of building it well

You do not need to understand any of this to **use** Power BI reports; measures and calculated columns are invisible to the person consuming a report. But whoever **builds** the model does need to understand it, because the choice directly affects whether the model stays **fast and lean** as it grows.

Defaulting to calculated columns where measures would do is a common reason models end up larger and slower than necessary, and it is exactly the kind of thing that does not show up in a quick demo but shows up over time as the model grows and gets used. Knowing to **favor measures** and **reserve calculated columns for genuine per-row needs** is part of building a model that performs well and scales, which is the kind of judgment experienced modeling brings and that a good partner applies by default. It is a small distinction with a large cumulative effect: get it right across a model, and the model stays lean and fast; get it wrong, scattering calculated columns, and the model slowly becomes bigger and slower than the same data ever needed to be.
