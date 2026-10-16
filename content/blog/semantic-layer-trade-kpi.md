---
title: "One definition per KPI: why trade analytics needs a semantic layer"
description: "When every team computes landed cost or OTIF its own way, the meeting argues about whose number is right instead of what to do. A semantic layer fixes each trade KPI to one definition, so the numbers agree before anyone opens a dashboard."
category: "Integrations"
primaryKeyword: "semantic layer trade analytics"
tags: ["semantic layer", "data model", "trade analytics", "KPI definitions", "governance"]
takeaways:
  - "When each team defines a KPI its own way, reports disagree and the meeting debates the numbers, not the decision."
  - "A semantic layer is where each metric is defined once, so every report draws from the same definition."
  - "Trade KPIs like landed cost, OTIF, and effective duty rate are especially prone to divergent definitions."
  - "The semantic layer sits between raw source data and reports, turning source fields into governed measures."
  - "One definition per KPI is what makes analytics trustworthy enough to act on."
faqs:
  - q: "What is a semantic layer?"
    a: "A semantic layer is the place where business measures are defined once, in terms of the underlying data, so that every report and dashboard computes them the same way. Instead of each report author writing their own formula for landed cost or OTIF against raw tables, they draw from a shared definition. The semantic layer sits between the raw source data and the reports, translating source fields into governed measures with agreed names and logic. It is what lets an organization say a KPI means one thing, everywhere, rather than hoping the formulas happen to match."
  - q: "Why do trade KPIs diverge so easily?"
    a: "Because they are composed from many sources and involve real judgment. Landed cost combines product cost, freight, duty, and fees, and reasonable people allocate freight or treat certain charges differently. OTIF depends on which date counts as the commitment and what tolerance counts as on time. Effective duty rate depends on which value sits in the denominator. Each of these choices is defensible, which is exactly why teams make them differently, and why two honest reports can show different numbers for the same thing. A semantic layer removes the divergence by settling each choice once."
  - q: "How does one definition per KPI change decisions?"
    a: "It moves the argument from the numbers to the decision. When landed cost means one thing across every report, a meeting can spend its time deciding what to do about landed cost instead of reconciling two versions of it. It also makes analytics trustworthy over time, because a metric that is defined once and governed does not quietly drift as different people build new reports. The definition becomes an asset the organization owns, documented and consistent, rather than something re-derived by whoever built the latest dashboard."
---

Put two trade reports side by side and you will often find they disagree about something basic, like last quarter's landed cost or the OTIF rate. Neither is lying. They were built by different people, against the same raw data, using slightly different formulas, and the formulas are where the disagreement lives. The cost of this is not just confusion. It is that the meeting called to decide something spends its time deciding whose number to believe. A semantic layer is how that stops.

## Divergent definitions are the real problem

The instinct, when two reports disagree, is to check the data. Usually the data is fine. The divergence comes from definitions: one report allocated freight to the unit one way, another did it differently; one counted an order on time against the original date, another against a revised one. Each report author made a reasonable choice, and the choices did not match. Multiply that across a dozen report authors and a few years, and the organization ends up with as many definitions of landed cost as it has dashboards, none of them wrong and none of them agreeing.

## Trade KPIs are especially exposed

Some metrics are simple enough that everyone computes them the same way. Trade KPIs are not among them, because they are composed from several sources and involve genuine judgment. [Landed cost](/blog/landed-cost-calculation) combines product cost, freight, duty, and fees, with real choices about how freight is allocated and which charges count. [OTIF](/blog/otif-dwell-service-metrics) depends on which date is the commitment and what tolerance is on time. [Effective duty rate](/blog/effective-duty-rate) depends on what sits in the denominator. Every one of those choices is defensible, which is exactly why they get made differently, and why trade analytics diverges faster than most.

## What a semantic layer is

A semantic layer is the place where each measure is defined once, in terms of the underlying data, so every report draws from that one definition. It sits between the raw source data and the dashboards, translating source fields into governed measures with agreed names and logic. Instead of each report author writing their own landed-cost formula against raw tables, they use the shared one. The layer is not a dashboard and not a database; it is the agreed vocabulary in between, and it is the thing that makes a KPI mean one thing everywhere it appears.

## It turns source fields into governed measures

Building the layer is where the [data integration](/docs/data-integration) work pays off. Source systems, the [ERP](/industries/trade-erp), carrier and broker feeds, spreadsheets, each name things their own way, and the semantic layer is where those are reconciled into clean, named measures with one definition apiece. That definition is documented, so a new report author inherits it instead of inventing a new one, and governed, so it does not drift as people build. The result is that the metric becomes an asset the organization owns, consistent and explainable, rather than something re-derived by whoever built the latest view.

## One definition is what makes analytics trustworthy

The payoff is trust, and trust is what lets analytics drive decisions. When landed cost means one thing across every report, the meeting argues about what to do about landed cost, not about which landed cost is real. When the definition is governed, the number stays trustworthy over time instead of quietly changing as the report population grows. This is why [one definition per KPI](/docs/methodology) is a principle and not a technicality: it is the difference between analytics people act on and analytics people relitigate. Delivered in [your own tenant](/blog/analytics-in-your-own-tenant), the semantic layer is yours, documented and handed over, not a black box.

If your reports disagree about the basics, the fix is not another dashboard; it is one definition per KPI. [Tell us which numbers your teams argue about](/contact), or see how the [platform](/platform) governs trade metrics.
