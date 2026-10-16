---
title: "Currency in landed cost: the exposure that moves your margin without a price change"
description: "When you buy in a foreign currency, your landed cost moves with the exchange rate even if the supplier never changes a price. Measuring FX exposure in landed cost shows how much of your margin is riding on a rate nobody at the table controls."
category: "Trade Operations"
primaryKeyword: "FX exposure landed cost"
tags: ["FX exposure", "currency risk", "landed cost", "margin", "trade analytics"]
takeaways:
  - "Buying in a foreign currency means landed cost moves with the exchange rate, not just with prices."
  - "That exposure can shift margin even when every supplier price stays the same."
  - "Most operations see the rate only at payment, which is too late to manage the exposure."
  - "Measuring FX exposure means knowing how much cost, by currency, is committed and unpaid."
  - "Visibility of the exposure is the precondition for deciding whether and how to manage it."
faqs:
  - q: "How does currency affect landed cost?"
    a: "If you buy goods priced in a foreign currency, the cost in your own currency depends on the exchange rate at the moment that matters, and that rate moves independently of anything the supplier does. A supplier can hold its price perfectly steady in its own currency while your landed cost in dollars rises or falls simply because the rate moved between order and payment. So landed cost for an importer buying abroad has a moving part that has nothing to do with the product, the freight, or the duty: the currency itself. Ignoring it treats a variable cost as if it were fixed."
  - q: "Why is seeing the rate only at payment a problem?"
    a: "Because by payment the exposure is already resolved, for better or worse, and there was nothing to manage once it is. The time to understand currency exposure is while cost is committed but not yet paid, the window between placing an order in a foreign currency and settling it, because that is when the rate can still move and when any decision about managing the exposure would be made. An operation that only sees the rate when it pays is seeing the outcome, not the exposure, and is therefore reacting to currency movements rather than managing them."
  - q: "What does it mean to measure FX exposure?"
    a: "It means knowing, at any moment, how much cost you have committed in each foreign currency that is not yet paid, so you can see how much of your future landed cost and margin is riding on each exchange rate. That is a matter of aggregating open commitments, orders placed and not settled, by currency, and relating them to the margin they sit under. Measuring the exposure does not by itself decide whether to hedge or how; it makes the exposure visible, which is the precondition for any decision about it. Most operations cannot see this at all, so the question of managing it never gets asked properly."
---

An importer who buys in a foreign currency is exposed to a cost that moves on its own. The supplier can hold its price exactly steady, the freight and duty can stay the same, and the landed cost in dollars can still rise, because the exchange rate moved between the moment the order was placed and the moment it was paid. That movement flows straight into margin, which means a portion of the operation's profit is riding on a rate that nobody at the table controls and that most operations do not even watch until the payment clears. Measuring currency exposure in landed cost is about seeing that moving part before it has already moved.

## Landed cost has a moving part that is not the product

[Landed cost](/blog/landed-cost-calculation) is usually decomposed into product cost, freight, duty, and fees, and for an importer buying abroad there is a fifth influence threaded through all of them: the currency the purchase is priced in. When that currency is not your own, the rate converts a foreign price into your landed cost, and the rate moves. A steady supplier price in its home currency is not a steady cost to you if the rate has shifted. This is why treating landed cost as fixed between order and receipt can be wrong even when nothing about the goods changed: the currency is a variable cost hiding inside what looks like a settled number.

## Margin moves without anyone changing a price

The consequence that gets attention is margin, because currency can move it with no price change anywhere. A [margin bridge](/blog/margin-bridge-why-margin-moved) that decomposes a margin swing will, for an importer buying in foreign currency, often find a currency component sitting alongside duty, freight, and mix, and that component can be meaningful. It is also the one driver on the bridge that no one in the business set: the supplier did not raise prices, the buyer did not change terms, the rate simply moved. Recognizing currency as a distinct driver of margin, rather than letting it hide inside an unexplained cost change, is the first value of measuring it.

## Payment is too late to manage it

The structural problem in most operations is that the rate becomes visible only at payment, which is precisely when there is nothing left to manage. By the time you settle, the exposure has already resolved itself, favorably or not. The window in which currency exposure can actually be managed is earlier: between committing to an order in a foreign currency and paying for it, because that is when the rate can still move and when any decision about the exposure would be made. Seeing the rate only at payment means seeing the outcome, not the exposure, and an operation in that position is reacting to currency after the fact rather than managing it in the window when management is possible.

## Measuring the exposure

Measuring FX exposure means knowing, at any moment, how much cost is committed in each foreign currency and not yet paid, and how much [margin](/blog/total-cost-of-sourcing) sits on top of it. That is an aggregation of open commitments, orders placed and unsettled, grouped by currency and related to the margin they underlie. It answers a question most importers cannot currently answer: how much of our near-term landed cost and margin is riding on each exchange rate right now. The answer is built from [purchase order and payment data](/blog/purchase-order-analytics) joined and viewed by currency, which is an analytics and [integration](/docs/data-integration) task before it is a treasury one.

## Visibility before strategy

Measuring the exposure does not, by itself, decide what to do about it. Whether to hedge, how much, and by what instrument are decisions involving treasury, risk appetite, and cost, and they are not made by a dashboard. But none of those decisions can be made well without first seeing the exposure clearly, and most operations cannot, so the question of managing currency never gets asked on a sound footing. Making the exposure visible is the precondition for every strategy that might follow, and it is the part analytics owns. Built [in your own tenant](/blog/analytics-in-your-own-tenant), the exposure view is yours to watch as commitments and rates move, feeding whatever currency policy the business chooses.

If you buy abroad and only see the exchange rate when you pay, a piece of your margin is moving on a rate you are not watching. [Tell us which currencies you buy in](/contact), or see how the [platform](/platform) measures currency exposure in landed cost.
