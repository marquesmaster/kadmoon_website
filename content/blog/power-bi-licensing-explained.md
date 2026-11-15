---
title: "Power BI licensing explained: how to think about what it costs"
description: "A plain guide to how Power BI licensing works, per-user licensing versus capacity, what shapes the decision, and how to think about the cost without getting lost in the details that change over time."
category: "Power BI"
primaryKeyword: "power bi licensing explained"
tags: ["Power BI", "licensing", "cost", "Fabric", "planning"]
takeaways:
  - "Power BI licensing comes in two broad shapes: per-user licensing and capacity, and knowing which fits is most of the decision."
  - "Per-user licensing is simple and scales with people, which suits most organizations until the user count grows large."
  - "Capacity is a fixed block of compute that many users can share, which can be more economical at scale and unlocks some features."
  - "The right choice depends on how many people need access and what features you need, not on chasing the cheapest line item."
  - "Exact prices and tiers change, so confirm current figures with Microsoft and treat licensing as a planning decision, not a one-time guess."
faqs:
  - q: "How does Power BI licensing work?"
    a: "At a high level, Power BI licensing comes in two shapes. Per-user licensing assigns a paid license to each person who needs to create or consume certain content, so cost scales with the number of people. Capacity is a fixed block of dedicated compute that an organization buys, which many users can share and which unlocks some features not available on per-user plans alone. There is also a free tier with limits that matter mainly for individual use. Most of the licensing decision is choosing between per-user and capacity for your situation, which depends on how many people need access and what features you need. The specifics of tiers and prices change over time, so the shape is worth understanding and the current figures are worth confirming with Microsoft."
  - q: "Should we buy per-user licenses or capacity?"
    a: "It depends mainly on how many people need access and what features you need. Per-user licensing is simple and cost scales with people, which suits most organizations well until the user count grows large enough that per-user cost adds up. Capacity is a fixed cost that many users can share, so beyond a certain scale it can be more economical than licensing everyone individually, and it unlocks some capabilities that per-user plans do not. The crossover depends on your numbers, so the decision is a calculation for your situation rather than a universal rule. A good partner helps you work it through against your actual user count and needs rather than guessing."
  - q: "Do all our report viewers need a paid license?"
    a: "It depends on how content is shared and what licensing you have. Under per-user licensing, people generally need a license to consume content shared in the standard way, which is what makes user count the main cost driver. With capacity, content hosted on that capacity can be shared more broadly without a per-user license for every viewer, which is one reason capacity becomes attractive as the audience grows. Because the details here affect cost meaningfully and the rules change over time, this is exactly the kind of thing to confirm against current Microsoft terms for your scenario rather than assume, since getting it right can change the economics of rolling reporting out widely."
  - q: "How should we budget for Power BI licensing?"
    a: "Treat it as a planning decision, not a one-time guess. Start from how many people will create and consume content and what features you need, work out whether per-user or capacity is more economical at that scale, and confirm current prices with Microsoft because the figures change. Then revisit it as you grow, because the right answer shifts: an organization that starts on per-user licensing may reach a scale where capacity becomes the better deal, and planning for that avoids an expensive surprise. The goal is not the cheapest line item today but the licensing that fits how you actually use Power BI as it grows, which is a decision worth making deliberately and reviewing over time."
---

Power BI licensing has a reputation for being confusing, and some of that reputation is earned, because the specific tiers and prices change and the details can get intricate. But the shape of it is not complicated, and understanding the shape is most of what you need to make a sensible decision. This is a plain guide to how Power BI licensing works and how to think about what it costs, aimed at the decision rather than the fine print, with the honest caveat that exact figures change and should be confirmed with Microsoft.

## Two broad shapes

Strip away the details and Power BI licensing comes in **two broad shapes**, and knowing which one fits your situation is most of the decision.

The first is **per-user licensing.** Each person who needs to create or consume certain content has a paid license assigned to them, so the cost scales directly with the number of people. More users, more licenses, more cost, in a straightforward line. The second is **capacity**: a fixed block of dedicated compute that the organization buys, which many users can share. Capacity is a fixed cost rather than a per-person one, and it also unlocks some features that per-user plans alone do not provide. There is also a **free tier** with limits, which matters mainly for individual use and rarely anchors an organization's decision.

Almost all of the real licensing decision is choosing between **per-user** and **capacity** for your situation. Everything else is detail around those two shapes. Once you see licensing this way, the question becomes manageable: which of these two models fits how many people we have and what we need to do?

## Per-user: simple, scales with people

**Per-user licensing** is the natural starting point for most organizations, because it is simple and its cost is easy to understand. You license the people who need to build and consume content, and the cost is the number of those people times the per-license price. There is nothing to size or forecast beyond counting the people, which makes it easy to adopt and easy to budget at a small or moderate scale.

For most organizations, per-user licensing is the right model **until the user count grows large.** When you have a modest number of people creating and consuming reports, licensing them individually is both simple and economical. The model only starts to strain when the number of people grows to the point where the per-user cost adds up to more than a shared alternative would cost, which is the point at which capacity enters the picture. Until then, per-user licensing is usually the sensible default, and reaching for anything more complex before you need it just adds cost and complexity for no benefit.

## Capacity: a shared block of compute

**Capacity** is the other shape: instead of licensing each person, the organization buys a fixed block of dedicated compute that users share. Because the cost is fixed rather than per-person, capacity changes the economics as the number of people grows. Beyond a certain scale, paying once for a block of capacity that many people share becomes more economical than licensing each of them individually, which is the central reason organizations move to it.

Capacity also **unlocks some capabilities** that per-user plans do not offer, and for some organizations those features, as much as the economics, are the reason to consider it. The trade-off is that capacity is a larger, fixed commitment that needs to be sized to your usage, so it is a more considered decision than simply adding per-user licenses. Capacity is where Power BI connects into the broader Microsoft Fabric platform, so for organizations growing into wider data and analytics work, the capacity decision often sits alongside those broader plans rather than standing alone. The key point is that capacity earns its place at **scale and for its features**, and below that scale per-user licensing is usually simpler and cheaper.

## Choosing between them

The right choice between per-user and capacity depends on **two things**: how many people need access, and what features you need. It is a calculation for your situation, not a universal rule, because the point at which capacity becomes more economical than per-user licensing depends on your numbers.

Work it through concretely. Count the people who will create and consume content. Work out what per-user licensing would cost for them. Compare that to the cost of capacity sized to your usage, and factor in whether you need any features that only capacity provides. The more economical option at **your** scale, with **your** feature needs, is the right one, and for many organizations that is per-user licensing until they reach a size where capacity wins. The mistake to avoid is choosing by reputation or by chasing the cheapest headline number, rather than by the calculation for your actual situation. This is a place where a good partner helps, working the numbers through with you against your real user count and needs, so the decision rests on your situation rather than a guess.

## A planning decision, not a one-time guess

Two honest caveats make the rest of this advice usable. First, the **exact prices and tiers change** over time, so any specific figure should be confirmed with Microsoft for your scenario rather than taken from a guide. This article deliberately stays at the level of the shapes and the trade-offs, because those are stable while the numbers are not. Second, licensing is a **planning decision, not a one-time guess**, because the right answer shifts as you grow.

An organization that sensibly starts on per-user licensing may reach a scale where capacity becomes the better deal, and planning for that transition avoids an expensive surprise later. So the right approach is to choose the model that fits you now, confirm the current figures, and revisit the decision as your usage grows, rather than deciding once and forgetting it. The goal is not the cheapest line item today but the licensing that fits **how you actually use Power BI as it grows**, which is a deliberate decision worth making with the real numbers and reviewing over time. Understood as two shapes and a calculation, Power BI licensing is far less confusing than its reputation suggests, and getting it right is mostly a matter of matching the model to your scale and your needs, with current figures confirmed and a plan for how it changes as you do.
