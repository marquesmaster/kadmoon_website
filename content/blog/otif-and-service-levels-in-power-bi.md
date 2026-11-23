---
title: "OTIF and service levels in Power BI: measuring whether you delivered"
description: "On-time in-full is the number customers feel. How a governed Power BI model measures OTIF, fill rate, and service levels honestly, by customer and site, and lets you drill from a missed order to the reason behind it."
category: "Power BI"
primaryKeyword: "otif power bi"
tags: ["Power BI", "OTIF", "service level", "operations", "supply chain"]
takeaways:
  - "OTIF, on-time in-full, is strict on purpose: an order counts only if everything arrived, complete, when promised, which is the standard the customer actually experiences."
  - "The honest version splits OTIF into its two halves, on-time and in-full, because the fixes for lateness and for short shipments are different."
  - "Fill rate and service level sit alongside OTIF, measuring how much of demand was met, so a high-level number has the detail behind it."
  - "The report is only useful if you can drill from a missed order to the reason, the site, the product, the carrier, or the stockout, so the number leads to a cause."
  - "Measured once in a governed model against the promise date, OTIF is consistent and trusted, instead of each team keeping its own flattering version."
faqs:
  - q: "How is OTIF calculated in Power BI?"
    a: "OTIF is the share of orders, or order lines, that were delivered both on time and in full. In a governed model it is defined as a measure: an order qualifies only if it arrived complete, every line and quantity, on or before the promised date. Because it is strict, a single late line or short quantity fails the whole order, which is deliberate, since that is what the customer experiences. The model reads order, delivery, and promise-date data and computes OTIF consistently, sliced by customer, site, product, or period. The key design decision is which date counts as the promise, the original requested date or a later confirmed one, and a sound model makes that explicit rather than quietly choosing the more flattering option."
  - q: "What is the difference between OTIF, on-time, and fill rate?"
    a: "They measure different things, and reading them together is what makes OTIF useful. On-time is whether the order arrived by the promised date. In-full, or fill rate, is whether the full quantity ordered was delivered. OTIF combines both: on time and complete. A business can have strong on-time delivery and weak fill rate, or the reverse, and the blended OTIF number alone will not tell you which, so a good model shows all three. Fill rate and service level express how much of demand was met, often at the line or unit level, which gives the high-level OTIF figure the detail underneath it. Splitting the number this way matters because the fix for chronic lateness and the fix for short shipments are not the same."
  - q: "Can I see why an order missed OTIF, not just that it did?"
    a: "Yes, and that is the difference between a scorecard and a tool. A good OTIF report lets you drill from a failed order down to the reason behind it: which site, which product, which carrier, whether it was late or short, and often whether a stockout or a capacity constraint caused it. So when OTIF drops, the next question, why, is answered in the same report rather than starting a separate investigation. This matters because OTIF is a symptom, and acting on it means finding the cause, a particular product that keeps going short, a site that runs late, a carrier that misses windows. Without the drill, the report tells you there is a problem but not where to fix it."
  - q: "Why do teams report different service-level numbers for the same period?"
    a: "Usually because they measure against different dates or count at different levels, and each version quietly favors whoever produced it. One team measures against the confirmed date, another against the original request; one counts whole orders, another counts lines; one excludes certain order types. Each is defensible in isolation, and together they make the monthly review an argument about whose number is right. A governed model ends that by defining OTIF, on-time, in-full, and the promise date once, so every team reads the same figure computed the same way. The conversation then moves to why service slipped and what to do, instead of which spreadsheet to believe, which is where a service-level review is actually useful."
---

Most operational metrics describe something inside the business. On-time in-full describes what the customer felt. Did the order show up when you said it would, with everything in it? That is the number that decides whether a customer trusts you to deliver, and it is unforgiving by design. A governed Power BI model measures it honestly, which is harder and more useful than it sounds, because the easy versions of this number are the ones that flatter.

## Why OTIF is strict

OTIF counts an order as a success only if it arrived on time and complete. One line short, one day late, and the whole order fails. That strictness is the point. A customer who ordered ten items and received nine, or received all ten a week late, did not get most of what they wanted; they got a miss. A metric that gave partial credit would tell you a comfortable story the customer would not recognize.

In a governed model, OTIF is defined once as a measure against the promised date, and it recalculates on current order and delivery data, sliced by customer, site, product, and period. The one decision that shapes the whole number is which date counts as the promise: the date the customer originally asked for, or a later date you confirmed. A sound model makes that explicit, because quietly measuring against the confirmed date is how OTIF gets inflated.

## Split the number to act on it

A single OTIF figure tells you whether you are delivering well, but not why you are not. The useful version splits it into its two halves. On-time measures whether orders arrived by the promise date. In-full, or fill rate, measures whether the whole quantity was delivered. A business can be reliably on-time but chronically short, or complete but slow, and the blended number hides which.

This split matters because the fixes are different. Lateness points at scheduling, capacity, or carriers. Short shipments point at stock and availability. Reading on-time and fill rate alongside OTIF, with service level showing how much of demand was met at the line or unit level, gives the headline number the detail it needs. Without that, OTIF is a verdict with no explanation.

## From a missed order to its cause

The feature that turns an OTIF report from a scorecard into a tool is the drill. When OTIF drops, you need to go from the number to the orders behind it, and from those orders to the reasons: which site ran late, which product went short, which carrier missed its window, whether a stockout or a capacity limit was behind it. A good report lets you follow the number down to the specific failures in the same view.

This is what makes the metric actionable. OTIF is a symptom, and improving it means treating the cause. A particular SKU that keeps going short, a site that consistently runs behind, a lane that is unreliable, these are the things the drill exposes. A report that stops at the headline number tells you there is a problem and leaves you to find it somewhere else.

## One number everyone trusts

The quiet failure of service-level reporting is that every team keeps its own version, each measured in a slightly different, slightly more flattering way, so the monthly review becomes a debate about whose figure is correct. One measures against the confirmed date, another against the original request; one counts orders, another counts lines.

A governed model ends this by defining OTIF, on-time, in-full, and the promise date once. Every team reads the same number computed the same way, so the review is about why service slipped and what to do, not which spreadsheet to believe. For a business whose customers judge it on delivery, that honest, shared, drillable number is one of the most important things reporting can provide, and it only works when it is built once and trusted by everyone who reads it.
