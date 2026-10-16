---
title: "The total cost of a sourcing decision: why the cheapest supplier often is not"
description: "Sourcing decisions are usually made on unit price, because it is the number on the quote. The total cost of the decision includes duty, freight, lead time, and reliability, and counting them often reverses which supplier is actually cheapest."
category: "Trade Operations"
primaryKeyword: "total cost of sourcing"
tags: ["total cost of ownership", "sourcing analytics", "landed cost", "supplier selection", "trade operations"]
takeaways:
  - "Sourcing decisions default to unit price because it is the one number on the quote."
  - "The total cost of a sourcing decision adds duty, freight, lead time, and reliability to the unit price."
  - "Counting those often reverses the ranking, so the cheapest quote is not the cheapest supplier."
  - "Lead time and reliability show up as inventory cost that never appears on the quote."
  - "Comparing suppliers on total cost needs their quotes modeled through to the landed, held unit."
faqs:
  - q: "Why is unit price a poor basis for a sourcing decision?"
    a: "Because unit price is only one of several costs a sourcing choice commits you to, and often not the decisive one. A supplier's unit price says nothing about the duty its origin carries, the freight its location implies, the inventory its lead time forces you to hold, or the disruption its unreliability causes. All of those are real costs of choosing that supplier, and all of them are invisible on the quote. Deciding on unit price alone optimizes the number you can see and ignores the ones that may matter more, which is how importers end up with a cheap quote and an expensive supplier."
  - q: "What belongs in the total cost of a sourcing decision?"
    a: "At minimum: the unit price, the duty driven by the supplier's country of origin, the freight driven by its location and the mode required, the inventory cost driven by its lead time and the variability of that lead time, and an allowance for reliability, since an unreliable supplier imposes expediting and lost-sale costs. Together these make up the landed, held cost of sourcing from that supplier, which is the honest basis for comparison. The unit price is the start of the calculation, not the end of it."
  - q: "Does counting total cost really change the decision?"
    a: "Often, yes, and sometimes it reverses it. A supplier with a slightly higher unit price but a lower-duty origin, closer freight, and a shorter, steadier lead time can be clearly cheaper once everything is counted, even though it loses on the quote. The reversal is common enough that deciding on unit price alone is a systematic bias toward the wrong answer whenever duty, freight, and lead time differ meaningfully between suppliers. Modeling total cost is what surfaces the reversal, so the decision is made on what the supplier actually costs rather than on what it quotes."
---

A sourcing decision almost always comes down to a number on a quote: the unit price. It is concrete, it is comparable, and it is right there in front of the buyer, so it wins. The trouble is that the unit price is only one of the costs the decision commits you to, and frequently not the one that matters most. Choosing a supplier also chooses a country of origin and its duty, a location and its freight, a lead time and the inventory it forces, and a level of reliability and the disruption it brings. None of those is on the quote, and all of them are real. The total cost of a sourcing decision is what you get when you put them back.

## The quote shows one cost and hides four

The reason unit price dominates is visibility, not importance. It is the only cost the quote states, so it is the only one that enters the comparison, and the others are left out not because they are small but because they are elsewhere. The duty lives in the [tariff schedule and the origin](/blog/country-of-origin-analytics); the freight lives in the lane; the inventory cost lives in the lead time; the reliability cost lives in the disruption history. Optimizing the one visible number while ignoring the four hidden ones is how an operation ends up with a genuinely cheap quote attached to a genuinely expensive supplier, and never quite understands why the savings did not show up.

## Duty and freight travel with the supplier

Two of the hidden costs are direct consequences of where the supplier is. The origin sets the [duty](/blog/effective-duty-rate), which can differ sharply between two suppliers quoting similar unit prices, so a lower quote from a higher-duty origin can land more expensively than a higher quote from a preferential one. The location sets the [freight](/blog/freight-cost-analytics) and often the mode, which again can differ enough to overturn a unit-price advantage. Both fold directly into [landed cost](/blog/landed-cost-calculation), and both are knowable at decision time, which means there is no good reason to leave them out of the comparison except that the quote does not mention them.

## Lead time is an inventory cost in disguise

The subtler hidden cost is time. A supplier with a longer or more [variable lead time](/blog/transit-time-variability) forces you to hold more [safety stock](/blog/safety-stock-long-lead-times) and ties up more [cash in the cycle](/blog/cash-to-cash-cycle-importers), and that inventory cost is every bit as real as the unit price even though it appears nowhere on the quote. A supplier that is a little more expensive per unit but reliably fast can be cheaper once the inventory it lets you avoid is counted. Reliability compounds this: an unpredictable supplier adds expediting and lost-sale costs on top of the buffer, all of which trace back to the sourcing choice and none of which the quote reflects.

## The reversal is common

When these costs are counted, the ranking of suppliers often changes, and sometimes it flips outright. A supplier losing on unit price but winning on duty, freight, lead time, and reliability can be clearly the cheaper choice overall, which means deciding on unit price alone is not just incomplete but systematically biased toward the wrong supplier whenever those factors differ. The reversal is common enough that it should be expected rather than treated as a surprise. The purpose of modeling total cost is precisely to surface it, so the decision is made on what the supplier actually costs to use, not on what it costs to quote.

## Modeling the quote through to the held unit

Comparing suppliers on total cost means taking each quote and modeling it through to the landed, held unit: adding the duty its origin carries, the freight its location implies, and the inventory its lead time and variability force, with an allowance for reliability. That is a calculation the [import data](/platform) already largely supports, because the duty, freight, and lead-time models exist for other purposes, and sourcing comparison reuses them. Done in [your own tenant](/blog/analytics-in-your-own-tenant), the comparison becomes a repeatable part of how suppliers are chosen rather than a one-off analysis, so every sourcing decision is made on total cost instead of on the quote.

If your sourcing decisions are made on unit price, the supplier you are choosing may be the expensive one once everything is counted. [Tell us how you compare suppliers](/contact), or see how the [platform](/platform) models total sourcing cost.
