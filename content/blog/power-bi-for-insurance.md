---
title: "Power BI for insurance: claims, underwriting, and the loss ratio"
description: "How insurers and agencies use Power BI to bring policy, claims, and financial data into one governed view, so loss ratios, claims performance, and underwriting results are visible and trusted."
category: "Industries"
primaryKeyword: "power bi for insurance"
tags: ["Power BI", "insurance", "loss ratio", "claims", "underwriting"]
takeaways:
  - "Insurance runs on ratios and results that must be measured consistently, which makes a governed model where loss ratio and the rest are defined once the core of the value."
  - "Policy, claims, and financial data usually live in separate systems, and the insight comes from joining them, not from any one."
  - "Loss ratio, claims trends, and underwriting performance are where most insurers get the clearest return, by segment and over time."
  - "The data is sensitive and regulated, so row-level security and your own tenant matter as much as the dashboards."
  - "The goal is one trusted view of the numbers that run the book, not separate reports that each compute the ratios their own way."
faqs:
  - q: "Can Power BI calculate loss ratios and other insurance metrics?"
    a: "Yes, and the value is calculating them consistently. Loss ratio, combined ratio, frequency, severity, retention, and the rest are defined once as measures in a governed model, so every report and every committee pack reads the same definition. This matters because these ratios can be defined several ways, earned versus written premium, with or without expenses, gross or net of reinsurance, and an insurer that computes them inconsistently ends up debating its own numbers. Power BI does the calculation; defining the measures once in the model is what makes the ratios trustworthy and comparable across segments and periods."
  - q: "Can Power BI connect our policy and claims systems?"
    a: "Yes. Power BI reads from the systems insurers and agencies run, including policy administration, claims systems, and the financial and general ledger systems behind them, along with Excel and other sources where data still lives. A governed model joins them so premium, claims, and financials can be read together, which is the hard and valuable part because each system holds only its own piece. The questions that matter in insurance, how a segment is performing, where losses are trending, whether underwriting is profitable, span policy, claims, and finance, so joining those sources is what makes the analysis possible."
  - q: "What insurance decisions does Power BI actually improve?"
    a: "The ones tied to profitability and risk. Seeing loss ratio and claims performance by segment, product, region, or channel, so underwriting and pricing decisions rest on where the book is actually making or losing money. Spotting claims frequency and severity trends early, before they show up as a bad quarter. Understanding retention and its drivers. Giving underwriting and leadership a consistent, current view rather than reports assembled by hand after the period closes. None of these needs exotic analytics; they need policy, claims, and financial data joined, defined consistently, and current, which is what a governed model provides."
  - q: "Is insurance data safe in Power BI?"
    a: "When Power BI is built in your own Microsoft tenant, the data stays in environments you control, under your own security and identity policies, which matters for a regulated, sensitive-data industry. Row-level security in the model restricts who sees which segments, regions, or books, so a regional manager sees their region and a line-of-business head sees their line, from the same governed reports. Access follows your identity provider with multi-factor authentication, and activity is logged. For an insurer this is both a compliance consideration and a practical control, and it is defined once in the model rather than depending on each report author to apply it."
---

Insurance is a business of ratios and results, where the loss ratio, the combined ratio, and the performance of a book are the numbers that decide whether the enterprise makes money. Those numbers have to be measured consistently and seen clearly, yet the data behind them, policy, claims, and financials, typically lives in separate systems that do not reconcile, so the ratios get assembled by hand and argued over. Power BI's role for an insurer or agency is to join those systems into one governed view where the numbers that run the book are defined once and trusted. This is how insurance organizations use it.

## Ratios that must agree

Insurance already knows which numbers matter. Loss ratio, combined ratio, claims frequency and severity, retention, underwriting result, these are the established vital signs of the business. The challenge is not identifying them; it is measuring them **consistently**.

And insurance ratios are unusually easy to define several reasonable ways. Loss ratio can be computed on earned or written premium, gross or net of reinsurance, with or without expenses folded in. Combined ratio depends on exactly how expenses are allocated. None of these choices is wrong, but if they are made inconsistently across reports, or if each analyst computes them their own way, the insurer ends up with several loss ratios and no agreement on which is real, which is corrosive in a business where these numbers drive pricing and capital decisions.

This is exactly what a governed model solves. Each ratio is **defined once**, as a deliberate choice, and encoded as a measure. Every report, every underwriting review, every committee pack reads that one definition. The business stops debating its own ratios and starts acting on them, because there is one loss ratio and it comes from one place. For insurance, where the ratios are the instrument panel, that consistency is the foundation of everything.

## The insight is in joining the systems

An insurer's data lives in at least three places, and each holds only part of the story. **Policy administration** holds the premium and the exposure. **Claims systems** hold the losses. **Financial and general ledger systems** hold the expenses and the bottom line. Each is necessary and none is sufficient: premium without claims cannot tell you profitability, claims without premium cannot tell you ratio, and neither without the financials tells you the real result.

The insight comes from **joining them**, which is what a governed model does. Power BI reads from the policy, claims, and financial systems, and the model relates them so premium, losses, and financials can be read together, by segment, product, region, channel, and over time. Once joined, the questions that used to take manual assembly, how is this segment performing, where are losses trending, is this line underwriting profitably, become reports you open. That join is the hard part and the foundation of the analysis, because every question that matters in insurance spans the systems, and no single one holds the whole answer.

## Where the clearest return is

The decisions Power BI most improves for an insurer are the ones tied to **profitability and risk**.

**Loss ratio and underwriting performance by segment.** Seeing where the book is actually making or losing money, by product, region, or channel, so pricing and underwriting rest on reality rather than a blended average that hides the winners and losers.

**Claims trends.** Spotting frequency and severity moving early, by segment, before they surface as a bad quarter, so the response, pricing, underwriting appetite, claims handling, can come in time.

**Retention and its drivers.** Understanding not just the retention number but what moves it, so the levers are visible.

**A consistent, current view for underwriting and leadership**, rather than packs assembled by hand after the period closes. None of these needs exotic analytics. They need policy, claims, and financial data joined, defined consistently, and current, which is precisely what a governed model provides. The return comes from seeing the book clearly and early, where before it was seen late and in pieces.

## Security that fits a regulated industry

Insurance data is sensitive and the industry is regulated, so the security story matters as much as the reporting. Built in your **own Microsoft tenant**, the data stays in environments you control, under your own security and identity policies, rather than moving to a vendor platform.

**Row-level security** in the model restricts who sees which segments, regions, or books, so a regional manager sees their region and a line-of-business head sees their line, all from the same governed reports. Access follows your identity provider with multi-factor authentication, and activity is logged. Because the rules live in the model, every report inherits them rather than relying on each author to apply them. For an insurer this is both a compliance consideration and a practical control, and having it defined once in the model is what makes it consistent and auditable rather than a per-report afterthought.

## What insurers end up with

An insurance organization running on Power BI ends up with one trusted view of the numbers that run the book:

- Loss ratio, combined ratio, and the other vital signs defined once and read the same way everywhere.
- Policy, claims, and financial data joined, so premium, losses, and results are read together.
- Performance visible by segment, product, region, and channel, and over time, so profitability and risk are seen clearly.
- Claims trends surfaced early, while there is still time to respond.
- Sensitive data secured in your own tenant, with row-level security and logging.

The throughline is that an insurer stops assembling its ratios by hand and arguing about which version is right, and starts running the book from one governed view where the numbers agree. Underwriting, pricing, and leadership work from the same trusted figures, seen by segment and in time to act. For a business whose whole model is the disciplined pricing of risk, having the ratios that measure that discipline be consistent, current, and clear is not a reporting nicety. It is the instrument panel the book is steered by.
