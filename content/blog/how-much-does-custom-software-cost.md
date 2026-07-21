---
title: "How much does custom software cost? A realistic breakdown"
description: "How much does custom software cost? A realistic breakdown of what drives price, typical ranges by project size, where the hours go, and how to get a real estimate."
category: "Cost & Pricing"
primaryKeyword: "how much does custom software cost"
tags: ["custom software cost", "software development pricing", "cost of building software", "software estimate"]
---

Anyone who answers "how much does custom software cost" with a single number is guessing or selling. Software is priced like a custom building, not a product on a shelf: the cost follows the scope, the complexity, and the people doing the work. Most of the bill is labor, and labor in the US is expensive. The [median software developer earned $133,080 in May 2024](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm) according to the Bureau of Labor Statistics, roughly $64 an hour before a firm adds benefits, management, QA, and overhead. Loaded blended rates at a senior US shop commonly land in the [$85 to $150 per hour range](https://www.fullstack.com/labs/resources/blog/software-development-price-guide-hourly-rate-comparison), which is why the same feature can cost three times more from one vendor than another. What you can get is a realistic map of the ranges and, more usefully, the levers that move them. This breakdown gives you both, so you can sanity-check any quote you receive.

## What drives custom software cost

Five factors explain most of the variance between a cheap quote and an expensive one.

- **Scope:** how many features, and how deep each one goes. A login screen is not a feature; a role-based permission system with audit logging is.
- **Complexity:** business rules, edge cases, and anything involving money, compliance, or real-time data. Complexity hides in the "just" ("just sync the inventory").
- **Integrations:** every external system you touch (an ERP, a payment gateway, a customs filing endpoint) adds mapping, error handling, and testing that a self-contained app avoids.
- **Non-functional requirements:** security, uptime, performance, and audit trails. These are invisible in a demo and account for a large share of serious engineering. They are also where cutting corners gets expensive: IBM put the [average data breach at $4.88 million in 2024](https://www.ibm.com/think/insights/whats-new-2024-cost-of-a-data-breach-report), which reframes a security line item as cheap insurance.
- **Team seniority:** senior engineers cost more per hour and usually less per outcome, because they make fewer expensive architectural mistakes.

Change any one of these and the number moves a lot. That is why a real estimate starts with questions, not a price.

## Typical ranges by project size

Ranges are directional, not quotes, and they assume a senior US-based team rather than the cheapest available hands. Treat them as buckets:

| Project size | Rough range | Example |
| --- | --- | --- |
| Small tool or MVP | $50k to $150k | Internal workflow app, focused MVP for one use case |
| Mid-size platform | $150k to $500k | Multi-role SaaS, ERP integration, real reporting |
| Large system | $500k and up | Custom ERP, multi-system integration, compliance-heavy platform |

The spread inside each bucket comes from the drivers above. Two "SaaS platforms" can differ threefold because one is single-tenant with a flat data model and the other is multi-tenant with usage billing, SSO, and an audit requirement. Size also changes your odds, not just your price. In the Standish Group's CHAOS research, small projects succeed roughly 90% of the time while the largest succeed less than 10% of the time, so a $500k program carries schedule and budget risk a $100k tool does not. For the SaaS case specifically, see [how much it costs to build a SaaS application](/blog/cost-to-build-a-saas-application).

## Where the hours actually go

Coding the visible features is often less than half the total. On a typical build, the hours distribute across work most buyers do not picture:

- Discovery, requirements, and design, so the team builds the right thing once.
- Architecture and data modeling, the decisions that determine whether the system survives its second year.
- Integration work and the error handling that real external systems demand.
- QA, automated testing, and hardening.
- Security, deployment automation, and the pipeline that lets you ship safely.

When a quote looks dramatically low, it usually means one of these buckets was left out and will return later as a change order. The screen you see is the tip; the estimate pays for the machinery under it.

A useful mental model: for a typical business system, plan on roughly a third of the effort going to the visible features, a third to the integrations and data work that connect the system to reality, and a third to the testing, security, and deployment that make it safe to run. The exact split shifts by project, but a quote that seems to assume the last two thirds are free is a quote you should question. The features are what you asked for; the rest is what makes the features hold up under real users, real data, and real load.

## Discovery, build, and ongoing costs

Cost falls into three phases, and budgeting only for the middle one is the classic mistake.

Discovery turns a vague idea into a scoped plan: requirements, architecture, and acceptance criteria you can hold a vendor to. It is a small slice of the total and it de-risks everything after it. Skipping discovery to save money almost always costs more, because you pay to build the wrong thing first. The [McKinsey and Oxford study of large IT projects](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value) found the average one ran 45% over budget and delivered 56% less value than predicted, and thin or skipped discovery is a leading cause of both.

Build is the largest phase and the one the ranges above describe. Done well, it ships in short iterations with a working demo each cycle, so you can see progress and adjust before the money is spent.

Ongoing cost is the phase people forget. Software needs maintenance: security patches, dependency updates, fixes, and small enhancements. A common planning figure is 15 to 25% of the build cost per year. Budget for it from day one. The mechanics are covered in [what software maintenance really costs each year](/blog/custom-software-maintenance-cost) and [the hidden costs of custom software](/blog/hidden-costs-of-custom-software).

## Why cheap quotes get expensive

The lowest bid wins more projects than it should, and the pattern that follows is consistent. A low number usually means a thin scope, junior engineers, or both. Thin scope becomes change orders the moment reality intrudes. Junior engineers produce code that works in the demo and buckles under load, security review, or the second feature that has to build on the first.

There is also a rework tax. Software built without real architecture or testing tends to need rebuilding, and rebuilding costs more than building it correctly the first time because you now pay twice and migrate data in between. This is not a fringe outcome. Only about 31% of projects in the CHAOS data finish on time, on budget, and on scope, and the low bid is disproportionately represented in the two thirds that do not. The cheapest bid frequently ends up the most expensive total, just on a delay. Price is a signal, and a quote far below the others is telling you something about what was left out.

## How to get an accurate estimate

You get a real estimate by giving a vendor something real to estimate against. Bring the outcome you need, your hard constraints, the systems you must integrate with, and a budget range. A serious firm will run a short discovery, write measurable acceptance criteria, and name their assumptions and exclusions so you can see exactly what the number covers.

Judge estimates on structure, not just size. A strong one shows where the hours go, states what is out of scope, and explains how change is handled and priced. A weak one is a single number with no visible reasoning. When you compare bids, normalize them to the same scope before you compare the totals, or you are comparing different projects.

Two habits protect you here. First, resist the temptation to hand a vendor a rigid, exhaustive spec and ask only for a number; the better path is to describe the outcome and let a good team tell you what it will take, because their questions reveal whether they understand the problem. Second, treat the estimate as a range with named assumptions rather than a promise carved in stone, because uncertainty is highest at the start and narrows as the work proceeds. A firm that pretends to perfect precision on day one is either padding heavily or setting up a change-order surprise. The estimate you want is the one that tells you what it does not yet know, and how that will be resolved as the work moves forward.

For more on reading these documents, see [how to evaluate a software development proposal](/blog/how-to-evaluate-a-software-development-proposal), and browse [the blog](/blog) for deeper cost pieces. When you want a scoped, itemized number for your project, [get a technical proposal](/#contact) and we will show you where every dollar goes.
