---
title: "Power BI licensing explained: Pro, Premium Per User, and Fabric capacity"
description: "A plain-English guide to Power BI licensing for decision makers: the difference between Pro, Premium Per User, and Fabric capacity, and how to tell which one your organization actually needs."
category: "Power BI"
primaryKeyword: "power bi licensing"
tags: ["Power BI", "licensing", "Microsoft Fabric", "pricing", "Premium"]
takeaways:
  - "Power BI licensing comes down to three options: Pro per user, Premium Per User, and capacity, which is now Microsoft Fabric capacity."
  - "Pro is the baseline for most teams: every person who builds or consumes shared reports needs a Pro license."
  - "Premium Per User adds advanced features for individuals without buying a whole capacity, which suits power users and smaller teams."
  - "Capacity (Fabric) makes sense when you have many report consumers or need the advanced engine, because it can let viewers see content without a per-user license."
  - "The right license is a function of how many people build versus consume, which features you need, and your scale, and it is worth modeling before you commit."
faqs:
  - q: "Do all our report viewers need a paid Power BI license?"
    a: "It depends on how you deploy. With Pro or Premium Per User, every person who views shared content needs their own license. With a Fabric capacity large enough to support broad viewing (historically the capacities that enabled free viewing), report consumers can view content without an individual paid license, while builders still need one. For an organization with a small number of builders and a large number of viewers, capacity often changes the math significantly, which is exactly the case worth modeling before you decide."
  - q: "What happened to Power BI Premium? Is it Fabric now?"
    a: "Microsoft folded the standalone Power BI Premium capacity SKUs into Microsoft Fabric capacity. In practice, the capacity you buy for large-scale Power BI is now a Fabric capacity (the F SKUs), which also covers the broader Fabric data workloads. Premium Per User, the per-individual option, still exists separately. If you read older documentation referring to Premium P SKUs, the modern equivalent is a Fabric capacity."
  - q: "Can we start small and scale the licensing later?"
    a: "Yes, and that is usually the sensible path. Many organizations start on Pro, which needs no capacity commitment, prove the value, and move to a Fabric capacity when the number of viewers or the need for advanced features justifies it. Because the content you build does not change, moving from Pro to capacity is a licensing and deployment change, not a rebuild. Starting small keeps the initial commitment low while you confirm the value."
  - q: "How does licensing work if a consultant builds our Power BI?"
    a: "The licenses are yours, in your own Microsoft tenant, the same as the rest of your Microsoft subscriptions. A good partner builds inside your tenant and advises on the right licensing for your mix of builders and viewers, but you hold and own the licenses. Some partners also offer to manage the Microsoft capacity on your behalf and bill it on one invoice as an add-on, which can simplify administration, but the entitlements remain yours."
---

Power BI licensing confuses more buyers than almost any other part of the platform, and the confusion is expensive, because the wrong choice either leaves capability on the table or pays for capacity you do not need. The good news is that the model is simpler than it looks once you see what each option is really for. This guide explains the three licensing options in plain terms and, more usefully, how to tell which one fits your organization.

## The three options, plainly

Power BI licensing comes down to three choices. Everything else is detail.

**Power BI Pro** is a per-user license. Anyone who builds reports, or who views reports that others have shared, needs a Pro license. It is the baseline, and for many teams it is all they ever need. If you have a modest number of people who both build and consume reports, Pro is usually where you start and often where you stay.

**Power BI Premium Per User**, or PPU, is also per-user, but it adds the advanced capabilities that used to require a full capacity, larger models, more frequent refreshes, advanced AI features, without having to buy a whole capacity. It suits individual power users and smaller teams who need the premium feature set but do not have the scale to justify dedicated capacity.

**Capacity**, which is now **Microsoft Fabric capacity**, is a different model entirely. Instead of licensing each person, you buy a pool of dedicated compute. This is what you reach for at scale, or when you need the advanced engine, and critically, a capacity large enough can let report consumers view content without each needing their own per-user license.

## The question that decides it: builders versus viewers

The single most useful lens for choosing is the ratio of **builders to viewers**.

If most of the people touching Power BI are building and exploring, and the total number is not huge, per-user licensing (Pro, with PPU for the power users) is usually the most economical and the simplest. You pay for the people doing the work.

If you have a **small number of builders and a large number of viewers**, the math changes. Licensing hundreds or thousands of viewers individually gets expensive fast. A Fabric capacity large enough to support broad viewing lets those viewers consume content without an individual paid license, while the builders keep theirs. For a company that wants to put dashboards in front of the whole sales floor or the entire operations team, this is often the difference between an affordable rollout and an unaffordable one.

This is why the honest answer to how much Power BI costs is always it depends on your mix. The licensing is not one price; it is a model you fit to how your organization actually uses reports.

## What happened to Premium

If you have researched this before, you may have read about Power BI Premium capacity and the P SKUs, and then found that terminology has changed. Microsoft folded the standalone Premium capacity into **Microsoft Fabric capacity**. The capacity you now buy for large-scale Power BI is a Fabric capacity, identified by the F SKUs, and it also covers the broader Fabric data engineering workloads, lakehouse, pipelines, and the rest.

For a Power BI buyer, the practical translation is simple: where older guidance says buy a Premium capacity, the modern equivalent is buy a Fabric capacity. Premium Per User, the individual option, still exists under its own name. The consolidation means your analytics capacity and your data platform capacity are the same thing, which is tidy if you are building the data foundation on Fabric anyway.

## Starting small and scaling

One worry buyers have is committing to the wrong tier and being stuck. In practice the path is forgiving. Many organizations start on **Pro**, which requires no capacity commitment, prove the value on a focused set of reports, and move to a **Fabric capacity** when the number of viewers or the need for advanced features justifies it.

The reason this is low-risk is that the content does not change. A move from Pro to capacity is a licensing and deployment change, not a rebuild of your models and reports. You are changing how the same content is served, not remaking it. So the sensible approach is to license for where you are, not where you might be, and scale the licensing when the usage earns it.

## How licensing works with a consultant

A common question is who holds the licenses when a partner builds your Power BI. The answer is that the licenses are **yours, in your own Microsoft tenant**, alongside the rest of your Microsoft subscriptions. A good partner builds inside your tenant and advises on the right licensing for your builder-to-viewer mix, but you own the entitlements, the same as you own the model, the reports, and the data.

Some partners also offer to **manage the Microsoft capacity** on your behalf and bill it on a single invoice as an optional add-on. That can simplify administration, one relationship, one bill, but the entitlements still belong to you. It is a convenience, not a transfer of ownership, and like everything else it should leave you able to operate on your own.

## A simple way to decide

If you want a starting heuristic before a proper model:

- **Small team, mostly builders, modest viewer count:** Pro, with PPU for anyone who needs the advanced features.
- **A few builders, many viewers:** model a Fabric capacity against per-user viewer licensing. The crossover usually favors capacity sooner than people expect.
- **You are building the data foundation on Fabric already:** a Fabric capacity covers both the analytics and the data workloads, so it is worth considering even at moderate scale.

The one thing worth avoiding is guessing. Licensing is one of the few Power BI decisions where a short modeling exercise, counting your real builders and viewers and the features you need, pays for itself immediately by pointing at the option that fits. It is exactly the kind of thing worth settling early, as part of scoping the build, rather than discovering after you have committed.
