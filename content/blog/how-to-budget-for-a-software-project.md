---
title: "How to budget for a custom software project"
description: "How to budget for a software project: separate build, run, and change costs, size contingency, plan 3-year TCO, and get approval with confidence."
category: "Cost & Pricing"
primaryKeyword: "how to budget for a software project"
tags: ["software project budget", "software cost planning", "budgeting for development", "software total cost of ownership"]
---

Most software budgets are wrong the moment they are approved, and not because someone lied. They are wrong because they count the build and forget everything around it: the cloud bill that arrives every month, the changes nobody could predict, the internal hours that never hit an invoice. The scale of the problem is documented. McKinsey and the University of Oxford studied [more than 5,400 large IT projects and found average overruns of 45 percent on cost and 7 percent on time, with 56 percent less value delivered than planned](https://www.mckinsey.com/~/media/McKinsey/Business%20Functions/McKinsey%20Digital/Our%20Insights/Delivering%20large%20scale%20IT%20projects%20on%20time%20on%20budget%20and%20on%20value/Delivering%20large%20scale%20IT%20projects%20on%20time%20on%20budget%20and%20on%20value.pdf). A budget that survives contact with reality separates cost types and plans for the uncertainty instead of pretending it away. Here is how to build one.

## Separating build, run, and change costs

The first move is to stop treating "the software budget" as one number. It is three.

- Build is the one-time cost to design and develop the system: discovery, engineering, QA, deployment.
- Run is the recurring cost to keep it alive: hosting, third-party services, licenses, monitoring, maintenance, support.
- Change is the cost of everything you will want after launch: new features, integrations, and responses to how the business shifts.

Buyers who fold all three into a single build figure get an unpleasant surprise in month two, when the run costs start and the change requests begin. Naming the three buckets separately makes each one plannable. It also makes the total honest. Our overview of the [hidden costs of custom software](/blog/hidden-costs-of-custom-software) digs into the run and change lines that quietly accumulate.

## Contingency and the cone of uncertainty

Early in a project, your estimate is a guess with a wide band around it. Steve McConnell's cone of uncertainty puts numbers on that band: at initial concept an estimate can be off by [a factor of 4x high or 4x low, a 16x spread; after requirements are locked it tightens to about 1.6x, and by the end of interface design it lands near plus or minus 25 percent](https://www.construx.com/books/the-cone-of-uncertainty/). As discovery and early sprints narrow the unknowns, the band tightens.

The practical consequence is that you should budget a contingency, and size it to how much is still unknown. A well-defined project with a clear spec might carry 10 to 15 percent contingency. A vague, ambitious project with novel integrations should carry more. This is not academic caution: analyses of large public IT programs have found that roughly one in six runs a cost overrun of 200 percent or more, so the tail risk is real. Contingency is not padding you hope to avoid spending. It is the honest acknowledgment that you cannot see every detail from the starting line.

A good partner shrinks the cone deliberately. Short sprints with a working demo every two weeks turn assumptions into evidence fast, so your estimate firms up early instead of staying foggy until the end. That is one reason iterative delivery is a budgeting tool, not just an engineering one.

## Phasing budget to de-risk decisions

You do not have to commit the entire budget before you know whether the approach works. Phasing lets you spend a little, learn a lot, and decide with real information.

A common structure is a paid discovery phase that produces a scoped plan and an architecture, then a phase-one build that delivers the smallest genuinely useful version, then further phases funded once phase one proves the value. Each phase has clear acceptance criteria, so you are approving the next chunk of spend against results, not promises. That discipline matters given how often software drifts: the Standish Group's CHAOS research finds only [about 31 percent of projects finish on time, on budget, and on scope, while roughly half are challenged and end up late or over budget](https://thestory.is/en/journal/chaos-report/). Phased funding is how you stop feeding a project that is drifting.

This is where MVP thinking earns its keep. If you are budgeting a brand-new product, [how much does it cost to build an MVP](/blog/cost-to-build-an-mvp) explains how to size the smallest testable version so you are not funding features nobody has validated yet.

## Total cost of ownership over 3 years

A one-year view flatters custom software, because year one is mostly build. The honest horizon is three years, where run and change costs accumulate and start to rival the original build.

A useful anchor comes from long-standing Gartner and Forrester benchmarks: [annual maintenance and support typically runs 15 to 20 percent of the original build cost](https://savibm.com/blog/software-maintenance-costs/), and business-critical systems can push higher. On a $400,000 build, that is roughly $60,000 to $80,000 every year before a single new feature. Add hosting, third-party services, and the changes the business will demand, and the three-year total can meaningfully exceed the initial quote. That is not a warning against building. It is a reason to compare options on the full horizon.

| Cost bucket | Year 1 | Years 2-3 |
|---|---|---|
| Build | Most of the spend | Minimal |
| Run (hosting, services, support) | Partial year | Full recurring, ~15 to 20% of build annually |
| Change (new features) | Low | Grows with the business |

A worked example makes the horizon concrete. Take a $400,000 build. Apply maintenance at the middle of the Gartner range, say 17 percent, and you are looking at roughly $68,000 a year in support alone, or about $204,000 across three years. Add hosting and third-party services, then a modest change budget for the features the business will inevitably request once people are using the system, and the three-year total of ownership can approach or exceed the original build figure. A budget that only shows the $400,000 build hides more than half of what the system will actually cost by year three.

When you compare custom against a subscription product, run the same three-year math on both. Our piece on [custom software vs off-the-shelf](/blog/custom-software-vs-off-the-shelf) walks through that comparison so the decision rests on total cost, not the first invoice.

## Internal costs people forget to count

The vendor invoice is only part of the budget. Your own organization spends real money on the project, and leaving it out makes the plan look cheaper than it is.

The usual omissions: the time your team spends in discovery, reviews, and testing; a product owner's hours steering the work; data cleanup before migration; training and change management at rollout; and the opportunity cost of pulling internal people off other work. None of these appear on a proposal, and all of them are real. Estimate them, even roughly, and put them in the budget.

A quick way to size the internal line: take the number of hours your people will realistically spend across discovery, weekly reviews, user acceptance testing, and rollout, then multiply by a fully loaded internal rate rather than base salary. A product owner giving the project one day a week for a six-month build is roughly 200 hours before you count anyone else. Data migration is the line that surprises people most, because cleaning and reconciling legacy records almost always takes longer than moving them. Put a real number against each of these and the "cheap" internal option often stops looking cheap.

If you are weighing whether to staff this internally instead, [in-house vs outsourced software development](/blog/in-house-vs-outsourced-software-development) breaks down the fully loaded cost of an internal team, which is where a lot of these hidden internal costs live.

## Getting budget approved with confidence

Finance approves budgets they can defend. Vague requests for a big number invite scrutiny, especially when only a minority of projects actually finish inside their original budget. A budget that shows the three cost buckets, a sized contingency tied to real uncertainty, a phased spend gated by results, and a three-year total is far easier to say yes to.

Lead with the business case, not the technology. Tie the spend to an outcome: hours saved, errors avoided, revenue enabled, risk reduced. Then show that the plan de-risks itself, because you are releasing money in phases against acceptance criteria rather than betting it all up front. Given McKinsey's finding that every extra year on a project adds about 15 percent to its cost overrun, a plan that ships value early is also a plan that costs less. Approvers relax when they see they can stop or adjust after each phase.

Ask your vendor for a proposal structured to support this: itemized scope, explicit assumptions and exclusions, milestone payments tied to deliverables, and clarity on what recurring costs to expect. That structure is what lets you turn a proposal into a defensible budget line. When you are ready to build one, you can [get a technical proposal](/#contact) laid out exactly that way, or read [how to choose a software partner](/#how-to-choose) first to make sure the numbers come from a team you trust.
