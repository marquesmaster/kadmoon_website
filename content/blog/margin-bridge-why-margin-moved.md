---
title: "Why did margin move? The landed-cost bridge for trade"
description: "Margin went down and nobody can say exactly why. A margin bridge decomposes the change into duty, freight, product cost, and mix, so the answer is a quantified breakdown instead of a theory."
category: "Trade Operations"
primaryKeyword: "margin bridge"
tags: ["margin bridge", "margin variance", "landed cost", "trade analytics", "executive reporting"]
takeaways:
  - "When margin moves, the useful question is not whether but why, broken into causes you can act on."
  - "A margin bridge decomposes a margin change into duty, freight, product cost, price, and mix."
  - "Each driver points to a different owner and a different action, which a single margin number cannot."
  - "The bridge depends on landed cost modeled consistently across the periods being compared."
  - "Run regularly, the bridge turns margin from a number you explain after the fact into one you manage."
faqs:
  - q: "What is a margin bridge?"
    a: "A margin bridge is a decomposition that explains the change in margin between two periods by attributing it to its causes: how much came from duty, how much from freight, how much from product cost, how much from price changes, and how much from a shift in product mix. Instead of a single statement that margin fell two points, the bridge shows that duty added so much, freight added some, a price increase recovered part of it, and mix did the rest. It turns a number into an explanation that each function can act on."
  - q: "Why is decomposing the margin change useful?"
    a: "Because each driver has a different owner and a different response. If margin fell because duty rose, that points to sourcing or classification. If it fell because freight rose, that points to carriers and lanes. If it fell because mix shifted toward lower-margin products, that is a commercial question, not a cost one. A single margin number cannot tell you which of these happened, so it cannot tell you who should do what. The bridge assigns the change to causes, which is what makes it actionable rather than merely alarming."
  - q: "What does a margin bridge need to work?"
    a: "It needs landed cost modeled the same way across the periods being compared, so the comparison is honest, and it needs the components, duty, freight, product cost, price, and mix, available separately rather than rolled into one figure. That depends on landed cost being decomposed into its parts and on a consistent definition of margin, which is a semantic-layer and data-integration problem before it is a reporting one. Once landed cost is modeled component by component, the bridge can be built and refreshed each period automatically."
---

The margin review has a familiar shape. Margin is down a couple of points, everyone agrees that is bad, and then the meeting turns into a set of theories: it was tariffs, it was freight, it was that one big customer. The theories are plausible and unquantified, so the meeting ends with a vague resolve to watch costs. Nobody leaves knowing what actually happened, because the only number on the table was margin itself, and a single number cannot explain its own movement. A margin bridge replaces the theories with a breakdown.

## The useful question is why, in parts

That margin moved is not information anybody can act on; why it moved, split into causes, is. A margin bridge decomposes the change between two periods into its drivers: how much of the swing came from [duty](/blog/effective-duty-rate), how much from [freight](/blog/freight-cost-analytics), how much from product cost, how much from price, and how much from a shift in [product mix](/blog/landed-cost-calculation). The output is not a verdict but an accounting: duty added this, freight added that, a price increase recovered some, mix explained the rest, and the pieces sum to the change you are trying to understand.

## Each driver has an owner

The reason to split the change this way is that each driver points somewhere different. A margin drop driven by duty is a sourcing or [classification](/blog/hts-classification-accuracy) matter. One driven by freight is a [carrier and lane](/blog/carrier-scorecard-analytics) matter. One driven by mix, more volume in lower-margin products, is a commercial question that has nothing to do with cost control at all, and trying to fix it by squeezing costs would miss the point entirely. A single margin number collapses all of these into one figure and hands it to nobody in particular. The bridge assigns the movement to causes, and causes have owners.

## Mix is the one that fools people

Of the drivers, mix is the one most often misread. Margin can fall while every product's own margin holds perfectly steady, simply because the period sold more of the thin-margin items and fewer of the rich ones. Read without a bridge, that looks like a cost problem and invites a cost response, which does nothing because costs did not move. The bridge separates a genuine cost or price change from a pure shift in what sold, which is the difference between a problem on the cost side and a fact about demand. That separation alone justifies building the bridge.

## It rests on consistent landed cost

A margin bridge is only as honest as the landed cost underneath it. The two periods have to be modeled the same way, or the bridge attributes to real drivers what is actually a change in method, and the components have to be available separately rather than rolled into one figure. That depends on landed cost being [decomposed into its parts](/blog/landed-cost-calculation) and on a single definition of margin, which is a [semantic-layer](/blog/semantic-layer-trade-kpi) and [integration](/docs/data-integration) problem before it is a reporting one. Build that foundation once and the bridge refreshes each period on its own.

## From explaining margin to managing it

Run occasionally, a margin bridge is a forensic tool for a bad quarter. Run every period, it changes the relationship with margin entirely, because the drivers are visible while there is still time to respond to them, and the review starts from a shared, quantified picture rather than competing theories. That is the executive value of the [control tower](/blog/trade-control-tower) view: not a prettier margin chart, but a margin you can decompose on demand and therefore manage, rather than one you explain after it has already moved.

If your margin reviews end in theories, a bridge is how they start ending in actions. [Tell us how your margin is built](/contact), or see how the [platform](/platform) decomposes margin for trade.
