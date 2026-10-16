---
title: "Data quality for trade analytics: the number is only as good as the field behind it"
description: "A trade dashboard can look authoritative and be quietly wrong, because the HTS code was miskeyed or the origin was left blank. Treating data quality as a measured, owned discipline is what makes the analytics safe to act on."
category: "Integrations"
primaryKeyword: "data quality trade analytics"
tags: ["data quality", "trade analytics", "data integration", "HTS", "governance"]
takeaways:
  - "A polished dashboard inherits every error in the fields it is built from, without showing it."
  - "Trade data is especially error-prone because it is keyed by many parties across many systems."
  - "The fields that drive duty and compliance, HTS, origin, value, are the ones errors are most costly in."
  - "Data quality has to be measured and owned, not assumed, before analytics can be trusted."
  - "Catching errors at the source beats correcting them in the report, because reports multiply."
faqs:
  - q: "Why does data quality matter so much for trade analytics?"
    a: "Because analytics does not create facts; it summarizes the facts in your data. If an HTS code is wrong, or an origin is blank, or a value is entered in the wrong currency, the dashboard built on those fields is wrong too, and it is wrong in a way that looks exactly like being right. A clean chart gives no hint that the field behind it was miskeyed. For trade specifically, where fields drive duty and compliance, a quiet data error is not just a reporting blemish; it can be money overpaid or an exposure nobody saw."
  - q: "What makes trade data particularly error-prone?"
    a: "Trade data is keyed by many parties across many systems: a supplier fills part of it, a broker another part, your ERP holds more, carriers and EDI feeds add the rest. Each handoff is a chance for a code to be mistyped, a field to be left blank, or two systems to disagree about how something is named. No single party owns the whole record, so errors fall between the seams. That fragmentation is why trade data needs active quality management rather than the assumption that each system is internally tidy."
  - q: "Is it better to fix data errors in the report or at the source?"
    a: "At the source, almost always. A correction made in one report fixes that report and no other, so the same error resurfaces in the next dashboard built from the same field. Fixing it at the source, or at the point where data is integrated and governed, fixes it once for everything downstream. Reports multiply; sources do not. The role of analytics here is to surface the errors, with quality measures and exception flags, so they can be corrected where they live instead of patched repeatedly where they show."
---

A trade dashboard carries authority it has not necessarily earned. The numbers are aligned, the chart is clean, the trend is clear, and all of that visual confidence is independent of whether the underlying fields are correct. If the HTS code was miskeyed, the origin left blank, or a value entered in the wrong currency, the dashboard reports the error with the same calm precision it would report the truth. This is the uncomfortable fact underneath every analytics program: the number is only ever as good as the field behind it, and the field is usually where the trouble is.

## A clean chart hides a dirty field

Analytics summarizes; it does not verify. When a report rolls thousands of line items into a duty total or an effective rate, it is trusting every one of those line items to be right, and it shows no seam where a bad one entered. That is what makes data errors in trade so dangerous: they do not announce themselves. A [landed cost](/blog/landed-cost-calculation) that is off because freight was allocated against a wrong weight looks identical to a correct one. The absence of visible error is not evidence of correctness, and treating a polished dashboard as self-evidently true is how wrong numbers get acted on.

## Many hands, many systems

Trade data is unusually exposed to error because no one owns the whole record. A supplier keys part of it, a broker keys another part, your [ERP](/industries/trade-erp) holds more, and carrier and EDI feeds add the rest. Every handoff between parties and systems is an opportunity for a code to be mistyped, a field to be dropped, or two systems to disagree about how the same thing is named. The errors do not sit inside any one system where its owner would catch them; they fall between the systems, in the seams. That is precisely why trade data needs active quality management rather than a hope that each source is internally tidy.

## The costly fields

Not all fields are equal. The ones that drive duty and compliance, [HTS classification](/blog/hts-classification-accuracy), [country of origin](/blog/country-of-origin-analytics), and [customs value](/blog/customs-value-valuation), are the fields where an error is most expensive, because it does not just skew a chart, it changes what you owe or what you are exposed to. A wrong classification can mean duty overpaid for years or a compliance finding; a blank origin can mean a preference not claimed or a remedy not caught. Data quality effort should concentrate where the consequences do, which for trade means the fields the customs authority cares about most.

## Measure it, do not assume it

The shift that makes analytics trustworthy is treating data quality as something measured and owned rather than assumed. That means quality checks running continuously: completeness on the fields that matter, validity against code lists, consistency across systems that should agree, with exceptions flagged for someone to resolve. A [data assessment](/blog/trade-data-assessment) usually starts here, because you cannot trust the analytics until you know the state of the inputs. Measured quality turns a vague worry about bad data into a specific, shrinking list of records to fix.

## Fix it at the source

When an error is found, the instinct is to correct it in the report. That fixes one report and leaves the error in the field, where the next dashboard will pick it up again. Reports multiply; sources do not. The durable fix is to correct the data where it lives, or at the point where it is [integrated and governed](/docs/data-integration), so the correction flows to everything downstream at once. Analytics earns its keep here by surfacing the errors, through quality measures and exception flags, so they can be driven back to the source instead of patched over and over in the views. Delivered in [your own tenant](/blog/analytics-in-your-own-tenant), those checks are yours to run and extend.

If your dashboards look confident and you are not sure the fields behind them are clean, measuring data quality is where trust begins. [Tell us where your trade data comes from](/contact), or see how the [platform](/platform) governs data quality.
