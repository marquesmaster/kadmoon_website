---
title: "Leading and lagging indicators: measuring what you can still act on"
description: "Why a report full of lagging indicators tells you what already happened while leading indicators tell you what is coming, and how to build reporting that measures both so you can act in time rather than only explain after the fact."
category: "Power BI"
primaryKeyword: "leading and lagging indicators"
tags: ["Power BI", "KPIs", "leading indicators", "metrics", "measurement"]
takeaways:
  - "Lagging indicators tell you what already happened; leading indicators point to what is coming, while there is still time to change it."
  - "Most reporting is heavy on lagging indicators because they are easy to measure, which means it mostly explains rather than warns."
  - "A leading indicator is one that moves before the outcome and that you can actually influence, which is harder to find but more useful."
  - "The best reporting pairs the two, the lagging outcome you care about with the leading indicators that move it, so you can act and then confirm."
  - "Finding the right leading indicators is a business question, and a partner helps surface and build them into the governed model."
faqs:
  - q: "What is the difference between a leading and a lagging indicator?"
    a: "A lagging indicator measures an outcome that has already happened, revenue last month, churn last quarter, project margin at close; it tells you the result but the result is already set. A leading indicator moves before the outcome and points to where it is heading, pipeline coverage ahead of revenue, product usage ahead of churn, hours burned against plan ahead of project margin; it gives you a signal while there is still time to act. Both matter, but they do different jobs: lagging indicators tell you how you did, leading indicators tell you how you are likely to do, and only the second lets you change the result before it lands."
  - q: "Why is most reporting full of lagging indicators?"
    a: "Because lagging indicators are easier to measure: they are the outcomes the business already records, revenue, costs, closed deals, completed projects, so they fall naturally out of the systems and into reports. Leading indicators take more thought, because you have to identify what actually moves the outcome ahead of time and then capture it, which is a business question, not just a data pull. The result is that a lot of reporting is heavy on outcomes and light on early signals, which makes it good at explaining what happened and poor at warning what is coming. Rebalancing toward leading indicators is deliberate work, and it is what turns reporting from a record into a tool for acting in time."
  - q: "How do I know if something is a genuine leading indicator?"
    a: "A genuine leading indicator meets two tests: it moves before the outcome, and you can actually influence it. Something that moves before the outcome but is outside your control is a forecast, useful but not a lever; something you can influence but that does not actually move the outcome is busywork. A real leading indicator is both predictive and actionable, so when you act on it the outcome responds. Finding ones that pass both tests takes understanding the business well enough to know what really drives the result, which is why it is a business conversation as much as a data exercise, and why the useful leading indicators are often not the obvious ones."
  - q: "Can Power BI measure leading indicators, or just report outcomes?"
    a: "Power BI can measure leading indicators as readily as lagging ones; the constraint is not the tool but knowing which leading indicators matter and having the data to compute them. Once you have identified a leading indicator and the data exists in the systems you run, a governed model can calculate and track it alongside the outcomes, so the report shows both the result you care about and the early signals that move it. The work is in the thinking, deciding what the real leading indicators are and making sure the data supports them, and a partner helps with both, surfacing candidate indicators and building the ones that hold into the model so they are tracked consistently."
---

Open most business reports and you will find them full of numbers about what already happened: last month's revenue, last quarter's churn, the margin on projects that have closed. These are lagging indicators, and they are worth having, but they share a limitation. By the time they appear, the thing they measure is settled, and no decision can change it. Leading indicators are the other kind: signals that move before the outcome, while there is still time to act. Reporting that measures only the lagging kind explains the past well and warns about the future poorly. Here is how to think about the two, and how to build reporting that measures what you can still act on.

## Two kinds of number, two different jobs

A **lagging indicator** measures an outcome that has already occurred. Revenue for the month, deals closed, project margin at completion, customers lost last quarter. It tells you the result, and the result is a fact: useful for knowing how you did, for learning, for holding to account, but already set. Acting on a lagging indicator is always acting after the thing it measures has finished.

A **leading indicator** moves before the outcome and points to where it is heading. Pipeline coverage ahead of revenue. Product usage and engagement ahead of churn. Hours burned against plan ahead of a project's final margin. A leading indicator gives you a signal while the outcome is still forming, which means you can still influence it. The two kinds do genuinely different jobs: lagging indicators tell you **how you did**, leading indicators tell you **how you are likely to do**, and only the second gives you the chance to change the result before it lands.

Both belong in good reporting. The problem is not that lagging indicators exist; it is that reporting tends to be dominated by them, which quietly limits what the reporting can do.

## Why reporting drifts toward lagging indicators

Reporting leans heavily on lagging indicators for a simple reason: they are **easier to measure.** Outcomes are what the business already records. Revenue is in the finance system, closed deals are in the CRM, completed projects are in project accounting. These numbers fall naturally out of the systems and into reports with little extra thought, so they accumulate.

Leading indicators take more work. To measure one, you first have to **identify what actually moves the outcome ahead of time**, which is a business question about cause and effect, not just a data pull. Then you have to capture it, which sometimes means tracking something the business was not already recording. Because this is harder, it often does not get done, and reporting ends up rich in outcomes and thin in early signals. The effect is reporting that is good at explaining what happened and poor at warning what is coming, which is a report that tells you about the fire after it has burned rather than when it starts to smoke. Rebalancing toward leading indicators is deliberate work, and it is what turns reporting from a record of the past into a tool for acting in the present.

## What makes a genuine leading indicator

Not everything that looks like an early signal is a useful one. A genuine leading indicator passes **two tests**, and both matter.

First, it **moves before the outcome.** It has to actually be predictive, to shift ahead of the result in a way that tells you where the result is heading. Second, you have to be able to **influence it.** A signal you can see coming but cannot affect is a forecast, which has its uses but is not a lever you can pull.

The useful leading indicators are the ones that pass both tests: predictive **and** actionable, so that when you act on the indicator, the outcome responds. A signal that is predictive but outside your control just tells you what is coming without letting you change it. Something you can control but that does not actually move the outcome is busywork dressed up as a metric. Finding indicators that are both takes understanding the business well enough to know what truly drives the result, which is why the right leading indicators are often not the obvious ones, and why identifying them is as much a business conversation as a data exercise. The payoff is worth the difficulty: a handful of genuine leading indicators is worth more than a wall of outcomes, because they are the numbers you can still do something about.

## Pairing the two

The strongest reporting does not choose between the two kinds; it **pairs them.** For an outcome you care about, you track the lagging indicator that measures it and the leading indicators that move it, together, so you can act on the early signals and then confirm the result.

Pair revenue with pipeline coverage and win rates, so you see the outcome and the signals pointing to next quarter's outcome. Pair churn with usage and engagement, so a customer's drift shows before the cancellation does. Pair project margin at close with hours burned against plan, so a project's trajectory is visible while it still runs. In each pair, the leading indicators let you act in time and the lagging indicator confirms whether the action worked. This pairing is what makes reporting a closed loop: you see a signal, you act, and you watch the outcome to learn whether your read was right, which steadily sharpens your sense of which leading indicators are real. Reporting built this way does both jobs, warning and confirming, instead of only recording what is already done.

## Building them into the model

Measuring leading indicators is not a limitation of the tool. Power BI calculates a leading indicator as readily as a lagging one; the constraint is knowing **which** leading indicators matter and having the data to compute them. Once an indicator is identified and the data exists in the systems you run, a governed model can calculate and track it alongside the outcomes, consistently defined, so every report shows both the result and the signals that move it.

The real work is in the thinking: deciding what the genuine leading indicators are for your business, and making sure the data supports them. This is where a partner helps, surfacing candidate indicators from experience of what tends to drive outcomes, testing which ones actually move the result for you, and building the ones that hold into the governed model so they are tracked the same way every time. The result is reporting that measures what you can still act on, not just what already happened, which is a meaningful upgrade in what the reporting is for. Numbers you can act on in time are worth far more than numbers that only explain the past, and building reporting that favors them is one of the higher-leverage things a business can do with its analytics.
