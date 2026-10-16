---
title: "The trade analytics maturity model: from spreadsheets to control tower"
description: "Most trade operations sit at a recognizable stage of analytics maturity, and knowing which one tells you what to build next. A map of the stages, from manual spreadsheets to a governed control tower, and how to move up without skipping a rung."
category: "Integrations"
primaryKeyword: "trade analytics maturity model"
tags: ["maturity model", "trade analytics", "data governance", "control tower", "roadmap"]
takeaways:
  - "Analytics maturity moves through recognizable stages, each with its own capabilities and limits."
  - "Knowing your stage tells you what to build next, and what not to skip."
  - "The jump that matters most is from manual, ungoverned data to integrated, governed data."
  - "You cannot skip rungs: a control tower on ungoverned data is a dashboard that lies confidently."
  - "The goal is not the highest stage for its own sake but the stage your decisions need."
faqs:
  - q: "What are the stages of trade analytics maturity?"
    a: "Broadly four. First, manual: data lives in spreadsheets, refreshed and combined by hand, understood by one or two people. Second, reporting: data is pulled into dashboards, but definitions still vary and the data is not fully governed. Third, governed: data is integrated and current, each metric has one definition, and numbers agree across reports. Fourth, decision-driven: analytics runs the operation by exception and models decisions ahead of time, a control tower rather than a report. Most operations can place themselves on this ladder quickly, and the placement is what tells them what to build next."
  - q: "Why can't you skip stages?"
    a: "Because each stage depends on the one below it. A control tower built on ungoverned data, skipping the governance stage, produces confident dashboards that disagree with each other and cannot be traced, which is worse than no control tower because people act on numbers that are wrong. Dashboards built on manual, unintegrated data inherit every inconsistency in the sources. The capabilities of a higher stage only hold when the foundation of the stage beneath is in place. Skipping a rung does not get you to the top faster; it builds the top floor on a missing one."
  - q: "Should every importer aim for the highest stage?"
    a: "Not necessarily. The right stage is the one your decisions need, not the most advanced one available. An operation whose decisions are well served by governed daily reporting does not need to force itself into real-time decision automation to prove maturity, and chasing the highest stage for its own sake spends effort on capabilities no decision uses. The maturity model is a map for moving deliberately, not a race to the end. The useful question is which decisions are currently underserved by your stage, and what the next rung would give them."
---

Most trade operations, asked how good their analytics is, answer with a feeling rather than a position. The maturity model replaces the feeling with a map. Analytics capability moves through a small number of recognizable stages, each with its own powers and its own ceiling, and almost any operation can place itself on the ladder within a few minutes of honest description. That placement is useful in a specific way: it tells you what to build next, and just as importantly what not to skip, because the stages depend on one another and the climb only works one rung at a time.

## The four stages

The ladder has four broad rungs. **Manual**: the data lives in [spreadsheets](/blog/spreadsheets-break-at-trade-scale), refreshed and combined by hand, understood by one or two people, and fragile the moment they are unavailable. **Reporting**: the data has been pulled into dashboards, which is a real step up, but definitions still vary report to report and the data is not fully governed, so the numbers look authoritative and do not always agree. **Governed**: the data is [integrated and current](/blog/trade-master-data), each metric has [one definition](/blog/semantic-layer-trade-kpi), and numbers reconcile across reports because they are drawn from the same governed source. **Decision-driven**: analytics runs the operation by [exception](/blog/exception-management-trade) and models decisions ahead of time, a [control tower](/blog/trade-control-tower) rather than a set of reports. Each rung adds a capability the one below could not support.

## The jump that matters most

Of the three transitions, the one from reporting to governed is the one that changes everything, and it is the one most often skipped. Moving from manual spreadsheets to dashboards feels like the big leap because the output looks so much better, but a dashboard on ungoverned data has only changed how the numbers look, not whether they can be trusted. The real leap is governance: [integrated data](/docs/data-integration), one definition per KPI, and [traceable lineage](/blog/data-lineage-trade-analytics). That is what makes the numbers agree, hold up under challenge, and be safe to act on. An operation that invests in prettier dashboards while skipping governance has climbed to a rung that cannot hold weight.

## You cannot skip rungs

The temptation at every stage is to leap straight to the control tower, because that is the visible prize. It does not work, because each stage depends on the foundation beneath it. A control tower built on ungoverned data is not a control tower; it is a set of confident dashboards that disagree with each other and cannot be traced, which is worse than having none, because people act on numbers that are wrong while believing them right. Dashboards built on manual, unintegrated data inherit every inconsistency in the sources. The higher capabilities only hold when the lower foundation is in place, so skipping a rung does not reach the top sooner; it builds the top floor over a gap.

## The right stage is the one your decisions need

It would be a mistake to read the ladder as a race to the top. The right stage for an operation is the one its decisions actually require, not the most advanced one on offer. An operation whose decisions are well served by governed daily reporting gains nothing by forcing itself into real-time decision automation to look mature, and chasing the highest rung for its own sake spends effort on capabilities no decision uses, the same error as [making everything real-time](/blog/trade-data-freshness) when the decisions are daily. The useful question the model poses is narrower and more practical: which of your decisions are currently underserved by your stage, and what would the next rung give them?

## Using the map

The maturity model earns its keep as a planning tool. Place yourself honestly, identify the decisions your current stage underserves, and build the next rung rather than the top one, in the [sequence](/blog/first-90-days-trade-analytics) where each step stands on the last. That keeps the climb deliberate and keeps each investment earning its return before the next is made, which is the same discipline that makes the first ninety days work. Built [in your own tenant](/blog/analytics-in-your-own-tenant) and handed over documented, the analytics you climb to is an asset you own and can keep advancing as your decisions grow more demanding.

If you are not sure how mature your trade analytics is or what to build next, placing yourself on the ladder is where the plan starts. [Tell us where you are today](/contact), or see how the [platform](/platform) and our [methodology](/docs/methodology) move you up the rungs.
