---
title: "Carrier scorecards: turning carrier performance into a number you can act on"
description: "Most importers rank carriers on rate alone, because that is the number on the invoice. A carrier scorecard combines cost, transit reliability, and service into one comparable view so the cheapest quote is not mistaken for the cheapest carrier."
category: "Logistics"
primaryKeyword: "carrier scorecard"
tags: ["carrier scorecard", "carrier performance", "logistics analytics", "OTIF", "transit reliability"]
takeaways:
  - "Ranking carriers on rate alone hides the cost of late, unreliable, or exception-heavy service."
  - "A scorecard normalizes cost, transit reliability, and service so carriers are compared on the same terms."
  - "Transit reliability is often more valuable than a lower rate, because variability forces buffer inventory."
  - "Scorecards need data from carrier systems, the ERP, and the broker, joined to the shipment."
  - "The point of a scorecard is allocation: giving more volume to the carrier that actually performs."
faqs:
  - q: "What goes into a carrier scorecard?"
    a: "At minimum, three things measured consistently across carriers: cost, transit reliability, and service. Cost is not just the quoted rate but the all-in freight after surcharges and accessorials, allocated to the lane. Transit reliability is how close actual transit time comes to the committed time, and how much it varies. Service covers exceptions, damage, documentation accuracy, and responsiveness. Each carrier gets the same measures on the same lanes, which is what makes the scorecard a comparison rather than a list of anecdotes."
  - q: "Why is a low rate not enough to pick a carrier?"
    a: "Because the rate is only one of the costs a carrier imposes. A carrier that is cheaper per shipment but arrives late and varies week to week forces you to hold more buffer inventory and absorb more expediting, and those costs do not appear on the freight invoice. A scorecard makes the full picture visible, so a carrier that costs slightly more but arrives predictably can be recognized as the cheaper choice once inventory and disruption are counted."
  - q: "What data does a carrier scorecard need?"
    a: "It needs carrier milestones and invoices, the shipment and order records from the ERP or TMS, and often the broker's clearance data, joined so each shipment carries its committed and actual dates, its all-in cost, and any exceptions. The joining is the hard part: carrier data, internal records, and broker data live in different systems and name things differently. Once they are joined to the shipment, the measures fall out and the scorecard can be built and refreshed automatically."
---

Ask most importers how they choose a carrier and the answer comes back as a rate. The rate is on the quote and on the invoice, so it is the number that gets compared. The trouble is that the rate is only one of the costs a carrier imposes, and often not the largest. A carrier that is a little cheaper but arrives late and varies from week to week costs you in buffer inventory, expediting, and missed commitments to your own customers, and none of that shows up on the freight bill. A carrier scorecard exists to put those costs back in the picture.

## Rate is the visible cost, not the whole cost

The reason rate dominates carrier decisions is simple: it is measured, and the rest usually is not. Reliability, exceptions, and the inventory a carrier forces you to hold are real costs, but they are spread across other budgets and other systems, so they do not sit next to the rate when the decision is made. The result is a bias toward the cheapest quote, which is not the same as the cheapest carrier. The purpose of a scorecard is to measure the costs that rate alone leaves out, so the comparison is honest.

## Three things, measured the same way

A workable scorecard combines cost, transit reliability, and service, each measured consistently across carriers and lanes. Cost is the all-in freight after [surcharges and accessorials](/blog/freight-cost-analytics), not the headline rate. Transit reliability is how close actual transit comes to the committed time, and how much it varies, which matters more than the average. Service covers exceptions, damage, and documentation accuracy. The discipline is that every carrier gets the same measures on the same lanes, which is what turns a pile of impressions into a comparison.

## Reliability is worth more than it looks

Of the three, transit reliability is the one most often undervalued. A carrier whose transit time swings from week to week forces you to hold inventory against the worst case, because you cannot plan around an average you cannot trust. That buffer is expensive and it is invisible on the freight invoice, which is why a slightly cheaper but erratic carrier can quietly cost more than a steadier one. Measuring [variability, not just the average transit time](/blog/transit-time-variability), is what surfaces this, and it frequently reorders the ranking that rate alone produced.

## The data has to be joined

A scorecard is only as good as the data behind it, and the data lives in several places. Carrier milestones and invoices come from the carrier or the TMS, the order and shipment records from the [ERP](/industries/trade-erp), and clearance events from the broker. None of them agree on how a shipment is identified. The work is joining them so each shipment carries its committed and actual dates, its all-in cost, and its exceptions. That [integration](/docs/data-integration) is the hard part; once it is done, the measures fall out and the scorecard refreshes itself instead of being rebuilt by hand each quarter.

## The point is allocation

A scorecard is not a report card for its own sake. Its purpose is allocation: deciding which carrier gets more of your volume on each lane, which ones to renegotiate, and which to replace. That decision is made far better from a view that counts reliability and service than from a spreadsheet of rates, and it is made continuously rather than once a year, because carrier performance drifts. Tied back to [service metrics](/blog/otif-dwell-service-metrics) and [landed cost](/blog/landed-cost-calculation), the scorecard becomes part of how the operation is run, not a document that is filed.

If you are choosing carriers on rate because it is the only number you can compare, a scorecard is how the rest of the cost becomes visible. [Tell us which lanes and carriers you run](/contact), or see how the [platform](/platform) models logistics performance.
