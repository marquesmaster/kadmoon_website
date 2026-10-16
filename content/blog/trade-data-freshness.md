---
title: "How fresh does trade data need to be? Matching refresh to the decision"
description: "Real-time data sounds obviously better and often is not worth its cost. The right refresh rate is set by the decision the data serves, and most trade decisions are made daily, not by the second."
category: "Integrations"
primaryKeyword: "trade data freshness"
tags: ["data freshness", "refresh rate", "real-time", "trade analytics", "data integration"]
takeaways:
  - "Fresher data is not automatically better; the right refresh is set by the decision it serves."
  - "Most trade decisions are made on a daily or weekly rhythm, which daily data serves well."
  - "A few decisions, like a shipment exception in motion, genuinely need near-real-time data."
  - "Chasing real-time everywhere adds cost and fragility for freshness nobody acts on."
  - "The useful question is which decisions need which freshness, answered decision by decision."
faqs:
  - q: "Isn't real-time data always better than daily?"
    a: "Only when a decision actually depends on the difference. Freshness has value when acting an hour sooner changes an outcome, and no value when the decision it feeds is made once a day or once a week anyway. A landed-cost review, a supplier scorecard, or a monthly duty analysis does not get better because the data is seconds old rather than hours old, because nobody acts on it at that cadence. Real-time is better only where the decision is real-time; everywhere else it is cost and complexity bought for freshness that no one uses."
  - q: "Which trade decisions actually need near-real-time data?"
    a: "The ones made in the moment, where a short delay changes what you can do. A shipment exception unfolding right now, a container about to incur demurrage, a customs hold that needs a response, these are decisions where fresher data genuinely helps, because the window to act is open and closing. Most other trade decisions, buying, sourcing, inventory policy, carrier allocation, are made on a daily or longer rhythm, so daily data serves them fully. The point is to identify the handful of time-critical decisions and give them the freshness they need, without paying for it everywhere."
  - q: "What is the cost of making everything real-time?"
    a: "Real-time pipelines are more expensive to build, more fragile to run, and more prone to failure than batch refreshes, because they must process continuously and recover gracefully from every interruption. Pushing every feed to real-time spreads that cost and fragility across the whole system in exchange for freshness most reports never use. It also tends to make the system harder to reason about, since a real-time number can change under you while you are looking at it. Matching refresh to the decision keeps the expensive, fragile part small and the rest simple and reliable."
---

Real-time data has an obvious appeal: if fresh is good, surely fresher is better, and real-time is best. The appeal is strong enough that it often becomes a requirement before anyone asks whether the decisions the data serves are made in real time. They usually are not. Most of what a trade operation decides, what to buy, where to source, how much to hold, which carrier to use, is decided on a daily or weekly rhythm, and data refreshed once a day serves those decisions completely. The right refresh rate is not the fastest one available; it is the one the decision actually needs.

## Freshness has value only where a decision uses it

The value of fresh data comes entirely from acting sooner, and acting sooner only helps when the decision is open to being made sooner. A [landed-cost review](/blog/landed-cost-calculation) that happens weekly does not improve because its inputs are seconds old instead of hours old, because the review still happens weekly. A [supplier scorecard](/blog/supplier-analytics-landed-cost) read once a month is no better for being real-time. Freshness that outpaces the decision it feeds is freshness nobody acts on, and freshness nobody acts on is cost with no return. The question is never how fresh the data could be; it is how fresh the decision requires.

## Most trade decisions run on a daily beat

Look at the actual cadence of trade decisions and most of them are periodic. Buying and reordering happen on a cycle. Sourcing choices are made over weeks. [Inventory policy](/blog/days-of-supply-stockout-risk) is reviewed on a schedule. Carrier allocation is revisited periodically, not continuously. For all of these, data refreshed daily is not a compromise; it is a match, because the decision itself does not move faster than that. Treating daily refresh as second-best misreads the work: it is exactly right for the majority of what the operation decides, and it is far cheaper and more reliable than the real-time alternative.

## The exceptions that are genuinely live

A minority of decisions are different, and they are worth identifying precisely because they are the exceptions. A [shipment exception](/blog/exception-management-trade) unfolding right now, a container about to incur [demurrage](/blog/demurrage-detention-analytics), a customs hold that needs a fast response, these are decisions made in the moment, where the window to act is open and closing and fresher data genuinely changes the outcome. For these, near-real-time is not indulgence; it is the point. The craft is to recognize which decisions are live and give those the freshness they need, rather than assuming every feed must be live because a few are.

## The cost of real-time everywhere

Pushing everything to real-time is not free, and the cost is not only money. Real-time pipelines are more complex to build, more fragile to operate, and more prone to failure than batch refreshes, because they process continuously and have to recover cleanly from every hiccup. Spread that across every feed and you have bought fragility for the whole system in exchange for freshness most of it never uses. Real-time data also changes under you while you look at it, which can make analysis harder rather than easier. Keeping the live part small keeps the system both cheaper and more trustworthy.

## Match refresh to the decision

The useful design question is not a single refresh rate for the platform but a mapping: which decisions need which freshness. Answer it decision by decision and the architecture follows, a reliable daily backbone for the bulk of the analytics, with near-real-time reserved for the specific, time-critical decisions that earn it. That is a [data integration](/docs/data-integration) choice made on purpose rather than a reflex toward the fastest option, and it is what keeps a trade platform both responsive where it matters and simple where it can be. Built in [your own tenant](/blog/analytics-in-your-own-tenant), those refresh choices are visible and yours to adjust as the decisions change.

If real-time has become a requirement before anyone checked which decisions need it, matching refresh to the decision usually simplifies the system and cuts its cost. [Tell us how fast your decisions actually move](/contact), or see how the [platform](/platform) sets refresh by decision.
