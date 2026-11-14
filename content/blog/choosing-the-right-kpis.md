---
title: "Choosing the right KPIs: what to actually measure"
description: "Why most dashboards track too many metrics and the wrong ones, how to choose the few KPIs that actually drive decisions, and how to tell a real KPI from a number that is merely available."
category: "Power BI"
primaryKeyword: "choosing kpis"
tags: ["Power BI", "KPIs", "metrics", "dashboards", "decision-making"]
takeaways:
  - "Most dashboards track too many metrics, which buries the few that matter and makes the report harder to act on."
  - "A real KPI is tied to a decision someone makes, not just a number the data happens to produce."
  - "The test of a KPI is simple: if it changed, would someone do something differently? If not, it is not a KPI."
  - "Choosing KPIs is a business exercise about what drives the organization, not a technical exercise about what is measurable."
  - "Fewer, well-chosen KPIs that people act on beat a comprehensive scorecard nobody uses."
faqs:
  - q: "How many KPIs should a dashboard have?"
    a: "Fewer than most dashboards do, because the common failure is tracking too many. When a dashboard shows dozens of metrics, the few that actually matter are buried among the ones that do not, and the reader cannot tell what to focus on, so they focus on nothing. There is no magic number, but the discipline is to include only the metrics that drive decisions and leave the rest out, or move them a layer deeper for the people who need them. A focused handful of KPIs that people act on is far more valuable than a comprehensive scorecard that overwhelms. Less, chosen deliberately, is more."
  - q: "What makes something a real KPI?"
    a: "A real KPI is tied to a decision. The test is simple: if this number changed, would someone do something differently? If yes, it is a KPI worth tracking. If no, it is just a number that happens to be measurable, and putting it on a dashboard adds noise without adding value. Many metrics people track fail this test, they are interesting, or available, or traditionally reported, but nobody acts on them. Keeping only the metrics that pass the decision test is what turns a cluttered scorecard into a useful one, because every number left on it earns its place by informing an actual choice."
  - q: "Why do dashboards end up with so many useless metrics?"
    a: "Because they are built from the data rather than from decisions. When you start from what the data can produce, you get every metric the data allows, and most of them inform no decision. Adding a metric is easy and feels thorough, while leaving one out feels like losing information, so dashboards accumulate numbers. The fix is to start from the decisions the dashboard should serve and work backward to the few metrics that inform them, rather than starting from the data and displaying everything. Metrics that do not trace to a decision are clutter, however interesting, and the discipline to leave them out is what keeps a dashboard useful."
  - q: "Who should decide which KPIs to track?"
    a: "The people who make the decisions the KPIs inform, because choosing KPIs is a business exercise, not a technical one. It is about understanding what actually drives the organization and what decisions need to be made, which is knowledge that lives with the business, not with whoever builds the report. A good partner or analyst facilitates the conversation, pushing to tie each proposed metric to a real decision and challenging the ones that do not, but the substance comes from the business. KPIs chosen by whoever happened to build the dashboard, from whatever data was handy, are the ones that end up useless, because they were never connected to how the organization actually runs."
---

Walk up to almost any business dashboard and you will find the same problem: too many numbers, most of them ignored. Dozens of metrics compete for attention, the few that matter are buried among the ones that do not, and the reader takes in none of it. The issue is not the tool or the design; it is the choice of what to measure. Choosing the right KPIs, the few numbers that actually drive decisions, is one of the most important and most neglected parts of good reporting. Here is how to do it well.

## The problem: too many metrics

The most common failure in dashboards is not showing the wrong metric but showing **too many**. When a dashboard presents dozens of numbers, it fails even if every number is accurate, because the reader cannot tell which ones matter. The signal drowns in the volume, and a report that shows everything effectively communicates nothing.

This happens because adding metrics is easy and feels responsible. Each one seems like useful information, and leaving one out feels like withholding something, so dashboards accumulate numbers until they are comprehensive and useless. But comprehensiveness is not the goal; **usefulness** is, and usefulness requires focus. A dashboard with five metrics people act on is worth more than one with fifty that overwhelm, because the five get used and the fifty get ignored. The first discipline of choosing KPIs is therefore subtraction: being willing to leave most of the available numbers off, so the ones that matter can be seen.

## The test of a real KPI

How do you tell which metrics to keep? There is a simple, powerful test: **if this number changed, would someone do something differently?**

If the answer is yes, the metric is a real KPI, because it is tied to a decision. A change in it prompts an action, which is exactly what a key performance indicator is for. If the answer is no, the metric is not a KPI, however interesting or impressive it looks. It is just a number that happens to be measurable, and putting it on a dashboard adds noise without adding value.

This test cuts through most of the clutter, because a surprising number of commonly tracked metrics fail it. They are measured because they are available, or because they have always been reported, or because they look good, not because anyone acts on them. Applying the decision test honestly, metric by metric, is what separates the KPIs that earn their place from the numbers that are merely present. Every metric that survives the test informs a real choice; every one that fails it is clutter, and belongs off the dashboard or a layer deeper for the rare occasion someone needs it.

## KPIs come from decisions, not data

The reason dashboards fill up with useless metrics is almost always the same: they are built **from the data** rather than **from decisions.** When you start with what the data can produce, you naturally end up displaying everything it allows, and most of what data allows informs no decision.

The fix is to invert the process. Start from the **decisions** the dashboard should serve, who makes them, what they are, and what information would change them, and work backward to the few metrics that inform those decisions. Built this way, every KPI on the dashboard traces to a real choice, and the ones that do not trace to anything never make it on in the first place. This is the same principle that governs good report design generally, start from the decision, applied specifically to the question of what to measure.

This reframing matters because it changes who leads the work. Choosing KPIs from the data is a technical exercise anyone can do badly; choosing them from decisions is a **business exercise** that requires understanding what actually drives the organization. The metrics that matter are the ones connected to how the business runs, and that knowledge lives with the business, not with whoever happens to build the report.

## It is a business exercise

Because KPIs come from decisions, choosing them well is fundamentally a **business conversation**, not a technical task. It is about understanding what drives the organization: what decisions determine success, what levers management actually pulls, what would need to change for the business to do better. Those are business questions, and the answers come from the people who run the business, not from the data or the tool.

This has a practical implication for how KPIs get chosen. The people who make the decisions should drive the selection, with a good partner or analyst facilitating, pushing to tie each proposed metric to a real decision, and challenging the ones that do not connect. The worst way to choose KPIs is to let whoever builds the dashboard pick them from whatever data is handy, because that produces the data-driven clutter the decision test is meant to eliminate. The best way is a deliberate conversation about what the organization is trying to achieve and what decisions drive it, from which the right few metrics fall out.

This is also why KPI selection is worth real time at the start of a reporting project, rather than being treated as an afterthought once the dashboard is built. Getting the KPIs right shapes everything the reporting does, because the KPIs are what the reporting is ultimately for.

## Fewer, better, acted upon

Pulling it together, choosing the right KPIs comes down to a few principles:

- **Track fewer metrics.** The common failure is too many, which buries the ones that matter. Be willing to leave most available numbers off.
- **Apply the decision test.** If a metric changed, would someone act differently? If not, it is not a KPI.
- **Start from decisions, not data.** Work backward from the choices the dashboard should inform to the metrics that inform them.
- **Make it a business conversation.** The people who make the decisions choose the KPIs, because it is about what drives the organization, not what is measurable.

The payoff is a dashboard that people actually use, because every number on it earns its place by informing a real decision, and the focus makes the important things impossible to miss. A comprehensive scorecard that overwhelms is a common and expensive mistake; a focused set of well-chosen KPIs that people act on is what reporting is supposed to produce. The difference between them is not the tool or the design but the discipline of choosing what to measure, which is why KPI selection deserves far more attention than it usually gets.
