---
title: "Where did this number come from? Data lineage for trade analytics"
description: "A trade figure that cannot be traced back to its sources is a figure nobody can fully defend, to an auditor, an executive, or a customs officer. Data lineage records the path from source to number, which is what makes analytics trustworthy under challenge."
category: "Integrations"
primaryKeyword: "data lineage trade analytics"
tags: ["data lineage", "data provenance", "trade analytics", "auditability", "governance"]
takeaways:
  - "A number you cannot trace is a number you cannot fully defend when it is challenged."
  - "Data lineage records the path from source systems through transformations to the final figure."
  - "Trade figures get challenged by auditors, executives, and customs, so provenance is not optional."
  - "Lineage turns a disputed number from an argument into a traceable chain of facts."
  - "It is built into how data is integrated and modeled, not added as documentation afterward."
faqs:
  - q: "What is data lineage?"
    a: "Data lineage is the recorded path a number takes from its original sources, through every transformation and calculation, to the figure shown in a report. It answers the question where did this come from in a verifiable way: which source systems contributed, what joins and rules were applied, how the final value was computed. Lineage is to a number what a chain of custody is to physical evidence, a documented history that lets anyone follow the figure back to the facts it rests on, rather than taking it on trust because it appeared on an authoritative-looking dashboard."
  - q: "Why does lineage matter specifically for trade analytics?"
    a: "Because trade figures are challenged by parties who can impose consequences. An auditor questions a cost or a valuation. An executive pushes back on a margin number before acting on it. A customs authority asks how a declared value or classification was arrived at. In each case, a figure that cannot be traced to its sources is a figure that cannot be defended, and in the customs case that is a compliance exposure, not just an inconvenience. Lineage lets you answer the challenge with the figure's documented history instead of a reconstruction done under pressure, which is the difference between confidence and scramble."
  - q: "Can't you just document how a report is built?"
    a: "Documentation written separately from the system drifts out of date the moment the report changes, and then it describes a number that no longer exists. Real lineage is a property of how the data is integrated and modeled, captured as the data flows rather than written up afterward, so it stays true as the model evolves. After-the-fact documentation is better than nothing, but it is a description of the analytics, not a trace of it, and under a serious challenge the difference shows: one can be verified against the actual data, the other only believed."
---

Every number on a trade dashboard is the end of a journey. It began as fields in source systems, was joined with other fields, passed through rules and calculations, and arrived as the figure you are looking at. Most of the time nobody asks about the journey; the number is used and trusted because it appeared somewhere authoritative. Then someone challenges it, an auditor, an executive about to make a decision, a customs officer, and the question becomes where did this come from. If the answer is a scramble to reconstruct the path from memory, the number was never as trustworthy as it looked. Data lineage is the recorded path that lets you answer the question instead of improvising it.

## A number you cannot trace is a number you cannot defend

Trust in a figure is not the same as confidence that it is right; it is the ability to show why it is right when asked. A number that cannot be traced back through its transformations to its sources is a number you are asking people to believe rather than one you can demonstrate, and belief is fragile under challenge. The moment someone with standing disputes it, an untraceable figure collapses into an argument about whose recollection of the report logic is correct. A traceable figure does not, because it can be followed back to the facts it rests on. The difference between the two is invisible right up until the challenge, which is the worst time to discover it.

## Trade numbers get challenged by people who matter

Lineage is not a luxury for trade analytics, because trade figures are routinely challenged by parties who can impose real consequences. An auditor questions a [cost or a valuation](/blog/customs-value-valuation) and needs to see how it was derived. An executive pushes back on a [margin number](/blog/margin-bridge-why-margin-moved) before committing to a decision, and will not act on a figure nobody can explain. A customs authority asks how a declared value, [classification](/blog/hts-classification-accuracy), or [origin](/blog/country-of-origin-analytics) was arrived at, and here an untraceable answer is not merely awkward but a compliance exposure, because [reasonable care](/blog/reasonable-care-audit-trail) presumes you can show your work. In each case the figure's provenance is exactly what is being tested, and lineage is what passes the test.

## From argument to chain of facts

What lineage changes is the nature of a disputed number. Without it, a challenge turns into a negotiation over credibility, each side asserting what the report must be doing, and the outcome depends on who is more persuasive rather than on what is true. With it, the challenge turns into a trace: here is the source, here is the join, here is the rule, here is the calculation, here is the result. The dispute resolves into a chain of facts that can be checked at each link, which is how a technical question should be settled. This is the same shift from assertion to evidence that a [chain of custody](/blog/container-seal-chain-of-custody) brings to physical goods, applied to numbers.

## It has to be built in, not bolted on

The tempting shortcut is to document how reports are built in a separate place, a wiki, a spec, a diagram, and call that lineage. It is not, because documentation written apart from the system drifts out of date the instant the report changes, and then it faithfully describes a number that no longer exists. Real lineage is a property of how the data is [integrated and modeled](/docs/data-integration), captured as the data flows so that it stays true as the model evolves. After-the-fact documentation is better than nothing, but under a serious challenge the gap shows: lineage can be verified against the actual data, while documentation can only be believed, and the parties who challenge trade numbers are not in the business of believing.

## Provenance as a standing property

Done properly, lineage is not something you produce in a hurry when challenged; it is a standing property of the analytics, available whenever the question arises. That turns audits, executive scrutiny, and customs inquiries from events you brace for into questions you can answer calmly from the system itself. It is part of what [one governed definition per KPI](/blog/semantic-layer-trade-kpi) and [measured data quality](/blog/data-quality-trade-analytics) are for: not just numbers that are right, but numbers whose rightness can be shown. Built in [your own tenant](/blog/analytics-in-your-own-tenant), the lineage is yours to inspect and to hand to whoever is asking, which is the point of owning the analytics rather than renting an opaque one.

If your trade figures cannot be traced from the dashboard back to the source, they are numbers you are trusting rather than ones you can defend. [Tell us what your numbers have to answer to](/contact), or see how the [platform](/platform) records lineage from source to figure.
