---
title: "DAX patterns for business reporting that just work"
description: "Reusable DAX patterns for real reporting: time intelligence, running totals, year-over-year, and safe ratios with DIVIDE, with copy-ready code you can adapt."
category: "Power BI"
primaryKeyword: "dax patterns"
tags: ["dax patterns", "time intelligence", "power bi measures", "year over year"]
takeaways:
  - "A DAX pattern is a reusable measure shape you adapt instead of reinventing, which keeps calculations consistent across every report and easier to fix in one place."
  - "Time intelligence functions like TOTALYTD and SAMEPERIODLASTYEAR do the hard date math for you, but they require a proper marked date table to work correctly."
  - "Running totals and year-over-year comparisons are two of the most requested business calculations, and both reduce to a base measure wrapped in a CALCULATE with a date filter."
  - "Always compute ratios with DIVIDE, not the slash operator, so a zero or blank denominator returns a clean blank instead of an infinity or an error that breaks the visual."
  - "Build every calculation on a single base measure so time intelligence, running totals, and ratios all inherit the same definition and stay consistent."
faqs:
  - q: "What are DAX patterns and why use them?"
    a: "DAX patterns are reusable measure structures for common business calculations like year-over-year growth, running totals, and moving averages. Instead of writing each calculation from scratch and risking small inconsistencies, you adapt a proven shape. That keeps the same logic across reports, makes measures easier to read for the next person, and means a fix or a rule change happens in one base measure rather than in dozens of visuals."
  - q: "Why should I use DIVIDE instead of the division operator in DAX?"
    a: "DIVIDE safely handles division by zero and by blank. If the denominator is zero or blank, DIVIDE returns a blank by default rather than an error or infinity, so your visuals do not break when a category has no data yet. The slash operator throws an error or produces infinity in those cases. Any ratio, rate, or percentage in a business report should use DIVIDE."
  - q: "Do time intelligence functions in DAX need a date table?"
    a: "Yes. Functions like TOTALYTD, SAMEPERIODLASTYEAR, and DATESYTD require a dedicated date table that contains a continuous, unbroken range of dates and is marked as the model's date table. Without a proper marked date table these functions return wrong results or fail, because they rely on a complete calendar to shift and accumulate periods correctly."
---

A DAX pattern is a reusable measure shape you adapt to the task at hand instead of reinventing the calculation each time. Year-over-year growth, running totals, moving averages, safe ratios: these come up in almost every business report, and each has a proven form. Learning the patterns does two things. It keeps your numbers consistent, because the same logic produces the same result everywhere, and it makes measures readable, because the next analyst recognizes the shape. This guide covers the patterns that carry most reporting work: time intelligence, running totals, year-over-year, and ratios done safely. Every one of them builds on a single base measure, which is the first habit worth forming.

## Start from a base measure

Before any pattern, define the thing you are measuring exactly once:

```dax
Total Sales = SUMX ( Sales, Sales[Quantity] * Sales[Unit Price] )
```

Every pattern below references `Total Sales` rather than re-summing raw columns. That way a change to how sales is calculated flows into the year-to-date figure, the running total, and the growth rate automatically. This is the same one-definition-per-KPI discipline that keeps a [semantic model](/blog/power-bi-semantic-model-best-practices) trustworthy, applied at the measure level.

## Time intelligence needs a real date table

Time intelligence functions do the awkward calendar math for you: shifting to the same period last year, accumulating year to date, comparing to the prior month. They are powerful and they have one hard requirement. You need a dedicated date table that holds a continuous, gap-free range of dates covering your data, and it must be marked as the model's date table.

Without that table these functions quietly return wrong answers, because they assume a complete calendar exists to walk across. Build the date table once, mark it, relate it to your fact tables on their date keys, and every time intelligence measure in the model can rely on it.

Year to date is the simplest example. `TOTALYTD` accumulates a measure from the start of the year through the current filter context:

```dax
Sales YTD = TOTALYTD ( [Total Sales], 'Date'[Date] )
```

Drop that in a matrix by month and each row shows the running total for the year so far. Same base measure, calendar handled for you.

## Running totals

A running total, or cumulative total, adds up a measure from the beginning of a range through the current point. Year-to-date above is one flavor of it. The general pattern, not tied to a calendar year, wraps the base measure in `CALCULATE` with a filter that opens the date range up to the current date:

```dax
Running Total Sales =
CALCULATE (
    [Total Sales],
    FILTER (
        ALLSELECTED ( 'Date'[Date] ),
        'Date'[Date] <= MAX ( 'Date'[Date] )
    )
)
```

Read it inside out. `MAX ( 'Date'[Date] )` is the last date in the current visual context, for example the current month's end. `ALLSELECTED` releases the date filter from the current row but respects any slicer the user set, giving you the full selected range to sum across. The `FILTER` keeps every date up to and including the current one. `CALCULATE` then evaluates `Total Sales` over that expanded set. The result is a line that climbs as you move down the axis, which is exactly what a cumulative chart needs.

This shape generalizes. Swap `Total Sales` for any base measure and you have a running count of orders, a cumulative headcount, or a running sum of costs, all with the same structure.

## Year-over-year comparison

Comparing this period to the same period a year ago is one of the most requested business calculations, because it strips out seasonality that month-over-month hides. The pattern uses `SAMEPERIODLASTYEAR` to shift the date filter back exactly one year:

```dax
Sales PY =
CALCULATE (
    [Total Sales],
    SAMEPERIODLASTYEAR ( 'Date'[Date] )
)
```

`Sales PY` returns last year's sales for whatever period is currently shown. From there the growth rate is a ratio of the change to the prior-year value, and this is where safe division matters:

```dax
Sales YoY % =
DIVIDE (
    [Total Sales] - [Sales PY],
    [Sales PY]
)
```

Notice the two measures compose cleanly. `Total Sales` is the base, `Sales PY` shifts it back a year, and `Sales YoY %` compares them. Nobody re-sums a raw column, so all three agree by construction. Format `Sales YoY %` as a percentage and it reads directly as growth: positive when this year beats last, negative when it trails.

## Ratios done safely with DIVIDE

Any time you write a ratio, a rate, or a percentage, use `DIVIDE` rather than the slash operator. The reason is division by zero and by blank. A new product with no prior-year sales, a category with zero units, a region that just launched: these produce a zero or blank denominator, and the slash operator responds with an error or an infinity that breaks the visual or poisons a total.

`DIVIDE` handles those cases cleanly. By default it returns a blank when the denominator is zero or blank, so an empty category simply shows nothing instead of crashing the report. You can also supply a third argument as the alternate result:

```dax
Return Rate = DIVIDE ( [Total Returns], [Total Orders], 0 )
```

Here a category with no orders yet returns `0` instead of blank, which may read better on a card. The point holds either way: the report degrades gracefully instead of failing on the one row that has no denominator.

## Choosing the right pattern

| You want | Pattern | Key function |
| --- | --- | --- |
| Cumulative total to date | Running total | CALCULATE + FILTER on dates |
| Year-to-date accumulation | Time intelligence | TOTALYTD |
| Same period last year | Year-over-year | SAMEPERIODLASTYEAR |
| Growth rate or any ratio | Safe division | DIVIDE |

## Keep them composable

The thread through all of these is composition. A base measure defines the number once. Time intelligence, running totals, and year-over-year each wrap that base in a filter, and ratios combine two measures with `DIVIDE`. Because everything descends from one definition, the calculations stay consistent and a change propagates everywhere at once. That is what turns a pile of one-off measures into a model an organization can rely on, and it is the practice that makes a [Power BI](/services/power-bi) deployment maintainable long after the first dashboard ships. When you are ready to see these patterns in production reports, our [dashboards](/dashboards) and [case studies](/cases) show the shapes at work.
