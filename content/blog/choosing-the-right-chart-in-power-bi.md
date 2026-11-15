---
title: "Choosing the right chart: matching the visual to the question"
description: "A chart is not decoration, it is a way of answering a question, and picking the wrong one hides the point or misleads. A plain guide to matching the chart to what you are actually trying to show."
category: "Power BI"
primaryKeyword: "choosing the right chart"
tags: ["Power BI", "charts", "data visualization", "report design", "dashboards"]
takeaways:
  - "A chart's job is to answer a question, so the right chart is the one that makes the answer obvious at a glance."
  - "Match the chart to the question: comparison, trend over time, composition, or relationship each have chart types that fit."
  - "The wrong chart hides the point or misleads, even when the underlying data is correct."
  - "Simpler is usually better, because a clear chart answers the question and a cluttered or fancy one obscures it."
  - "Choosing charts well is part of report design, and it is what makes a report readable rather than just full of visuals."
faqs:
  - q: "How do I choose the right chart?"
    a: "Start from the question the chart is meant to answer, then pick the chart type that makes that answer obvious. The main questions map to chart types: comparing values across categories suits a bar or column chart; showing a trend over time suits a line chart; showing how parts make up a whole suits something like a stacked bar or, sparingly, a pie; showing the relationship between two measures suits a scatter plot. The mistake is choosing a chart by habit or appearance rather than by the question. When you ask what you are actually trying to show and pick the chart that shows it most directly, the right choice is usually clear, because each chart type is good at a particular kind of question."
  - q: "What happens if I choose the wrong chart?"
    a: "The point gets hidden or the chart misleads, even when the data behind it is perfectly correct. A trend over time shown as a bar chart is harder to read than a line; a comparison shown as a pie forces people to judge angles instead of lengths; too many slices or series turn any chart into noise. The data may be right, but the wrong chart means the viewer has to work to extract the answer, or worse, draws the wrong one because the visual emphasizes something misleading. A chart's whole value is making the answer obvious, so the wrong chart defeats the purpose, which is why matching the chart to the question matters as much as getting the numbers right."
  - q: "Are pie charts bad?"
    a: "Not inherently, but they are easy to misuse, because people judge angles and areas less accurately than lengths, so a pie with more than a few slices becomes hard to read. A pie can work for showing a simple part-to-whole split with two or three categories where the proportions are clearly different. But for comparing many categories, or where the differences are subtle, a bar chart almost always communicates better, because comparing bar lengths is easier than comparing pie slices. The guidance is not never use a pie, but use it only for simple compositions and reach for a bar chart when you are really comparing values, which is more often than pies are used for."
  - q: "Why does simpler usually win?"
    a: "Because a chart's job is to make an answer obvious, and simplicity serves that while cluttered or fancy charts work against it. A clean chart with the right type, clear labels, and nothing extra lets the viewer see the answer immediately; a chart overloaded with series, effects, or an elaborate type makes them work to find it. Fancy visuals can look impressive but often communicate worse than a plain bar or line chart, because the complexity gets in the way of the point. The aim is clarity, not decoration, so the best chart is usually the simplest one that answers the question, and reaching for something more elaborate should be the exception, justified by the question, not the default."
---

A chart is not decoration. It is a way of answering a question visually, and like any answer, it can be clear or confusing depending on how it is given. The same correct data can be shown in a way that makes the point obvious at a glance, or in a way that hides it, or even misleads, and the difference is usually the **choice of chart.** Picking the right chart is one of the quiet skills that separates a report people can read from one that is just full of visuals. Here is a plain guide to matching the chart to what you are actually trying to show.

## A chart answers a question

The starting point is to remember what a chart is **for.** A chart exists to answer a **question**, to let someone see something about the data quickly: which is biggest, how it is changing, what it is made of, how two things relate. The right chart is the one that makes that answer **obvious at a glance**, so the viewer sees the point without having to work for it.

This reframes the whole choice. The question is not "what chart looks good here?" but "what am I trying to **show**, and which chart shows it most directly?" When you lead with the question the chart is meant to answer, the right chart type usually becomes clear, because different chart types are good at different kinds of question. Leading with appearance instead, picking a chart by habit or because it looks impressive, is how reports end up with visuals that are technically charts but do not actually communicate. Every chart should be chosen because it answers its question well, and if you cannot say what question a chart answers, that is a sign it may not belong.

## Match the chart to the question

Most business charts answer one of a few kinds of question, and each kind has chart types that fit.

**Comparison**, which category is bigger or smaller, is answered well by a **bar or column chart**, because people compare lengths accurately and a bar chart lines values up for easy comparison. When you are ranking or comparing values across categories, a bar chart is usually the right and reliable choice.

**Trend over time**, how something is changing across days, months, or years, is answered well by a **line chart**, because a line naturally shows movement and direction, letting the eye follow the trend. Time on the horizontal axis with a line is the standard for a reason: it makes change legible.

**Composition**, how parts make up a whole, is answered by something like a **stacked bar**, or, used sparingly and only for a simple split, a **pie.** The question here is what share each part contributes, and these show that, though as discussed below, bars usually beat pies once there are more than a few parts.

**Relationship**, how two measures relate to each other, is answered by a **scatter plot**, which places each item by its two values so patterns, correlations, clusters, outliers, become visible. When the question is whether two things move together, a scatter plot is the tool.

The point is not to memorize a rigid table but to **ask the question first**, comparison, trend, composition, relationship, and let it point to the chart. Most of the time, that makes the right choice clear.

## The wrong chart hides or misleads

Choosing the wrong chart has a real cost, even when the **data is perfectly correct**: the point gets **hidden** or the chart **misleads.** A trend over time forced into a bar chart is harder to read than a line, because the eye has to reconstruct the movement the line would have shown directly. A comparison of many categories shown as a pie makes people judge **angles** instead of **lengths**, which they do far less accurately, so the comparison that a bar chart would make instant becomes a squint. A chart with too many series or slices turns into noise, where the answer is buried in clutter.

In each case the numbers are right, but the viewer has to **work** to extract the answer, or, worse, draws the **wrong** answer because the visual emphasizes something misleading. That defeats the entire purpose of a chart, which is to make the answer obvious. This is why matching the chart to the question matters as much as getting the data right: a correct number in the wrong chart communicates badly, and a report full of wrong-chart visuals is hard to read no matter how accurate its data. The chart is part of the answer, not just a container for it.

## On pie charts, and simplicity in general

Pie charts deserve a specific mention, because they are the most **misused** common chart. They are not inherently bad, a pie can work for a simple part-to-whole split with two or three clearly different categories, but people judge **angles and areas less accurately than lengths**, so a pie with many slices, or with slices of similar size, becomes hard to read. The frequent mistake is using a pie to **compare** many categories, where a **bar chart** would communicate far better. The guidance is simple: use a pie only for simple compositions, and reach for a bar chart whenever you are really comparing values, which is more often than pies are actually used for.

Pies are a specific case of a general rule: **simpler usually wins.** A chart's job is to make an answer obvious, and a clean chart, right type, clear labels, nothing extra, does that, while a cluttered or fancy chart works against it. Elaborate visuals can look impressive but often communicate **worse** than a plain bar or line, because the complexity gets between the viewer and the point. The aim is **clarity, not decoration**, so the best chart is usually the **simplest one that answers the question.** Reaching for something more elaborate should be the exception, justified by the question genuinely needing it, not the default reached for to look sophisticated. A report of plain, well-chosen charts communicates better than one of fancy ones, almost every time.

## Why it is part of good report design

Choosing charts well is a real part of **report design**, and it is a large part of what makes a report **readable rather than just full of visuals.** A report where each chart is the right type for its question, kept simple, reads easily: the viewer moves through it seeing answers, not decoding visuals. A report where charts were chosen by habit or appearance is harder to use even if every number is correct, because each wrong chart adds friction between the viewer and the point.

This is why chart choice is not a cosmetic afterthought but part of building reports that actually get used. A report is a set of answers to questions, and charts are how those answers are shown, so choosing the chart that shows each answer most clearly is central to the report doing its job. It is exactly the kind of thing good report design attends to and rushed report-building skips, and it is a meaningful part of why one report feels clear and another, with the same data, feels like work. Matching the chart to the question, and keeping it simple, is a small discipline that pays off every time someone reads the report, which, for a report worth building, is often.
