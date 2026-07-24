---
title: "How to write a custom software RFP (with template)"
description: "A practical custom software RFP template and guide: describe the problem, set scope and budget, and score vendors on merit without scaring off the good ones."
category: "Buyer's Guide"
primaryKeyword: "custom software rfp template"
tags: ["software rfp", "request for proposal software", "how to write an rfp", "vendor evaluation"]
takeaways:
  - "An RFP is not a specification, so describe the business problem and outcomes rather than dictating tables, screens, and API calls."
  - "Keep it tight at ten to fifteen pages, since 45% of software features are never used and another 19% are rarely used, meaning a giant feature list mostly buys cost and bug surface."
  - "Share a budget range even a wide one, because hiding it just produces proposals scoped to wildly different assumptions."
  - "Score proposals against a weighted rubric independently before comparing, weighting technical and domain expertise highest at around 30%."
  - "Incomplete requirements and lack of user involvement drove the largest share of troubled projects, so a problem-first brief that invites vendor questions is direct risk control."
faqs:
  - q: "What should a custom software RFP include?"
    a: "Include business context, the problem you are solving, measurable success metrics, scope with clear in and out boundaries, your technical environment and constraints, budget range and timeline, what you want from the vendor, and your evaluation criteria. Leave out a 90-page requirements dump and any demand for fixed pricing on unscoped work. Ten to fifteen pages is plenty for most mid-market projects."
  - q: "Should you include a budget in a software RFP?"
    a: "Yes. Hiding the budget usually just wastes everyone's time, because without a range vendors either guess high to be safe or low to win, and you end up comparing proposals built on wildly different assumptions. Sharing a range, even a wide one, is a mature ask that good firms respect and it produces comparable bids."
  - q: "Why do good vendors decline to bid on some RFPs?"
    a: "The strongest firms have more demand than capacity, so they self-select out of RFPs that look painful. Warning signs include no budget or range, impossible timelines, long committee-written requirements with no priority, a rigid Q&A process with no dialogue, and scoring that weights everything toward lowest price. Each signals a difficult client or a project that has not been aligned internally."
  - q: "How should you describe your problem in an RFP?"
    a: "Describe what is broken today, who feels the pain, and what it costs, rather than prescribing a solution. Saying your warehouse team re-keys every order into three systems for two hours a day gives an engineer far more to work with than asking for an order management module with real-time sync. This invites vendors to bring expertise and surface missing requirements early."
---

A good request for proposal does two jobs at once. It tells serious vendors enough to bid accurately, and it filters out the ones who will over-promise now and change the price later. Most software RFPs fail at both because they read like a feature wish list written by committee. The stakes are real: McKinsey, studying more than 5,400 IT projects with the University of Oxford, found that [large IT projects run 45% over budget and 7% over time while delivering 56% less value than predicted](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value). A sharper RFP is one of the cheapest ways to move those odds. This guide walks through what to include, what to leave out, and gives you a reusable custom software RFP template you can adapt in an afternoon.

## What an RFP should and should not include

An RFP is not a specification. If you already knew the exact tables, screens, and API calls, you would not need a partner to design them. So resist the urge to dictate a solution. What belongs in the document is the business context, the outcomes you care about, the constraints that are real (systems you must integrate with, compliance you must meet), and how you will decide.

What does not belong: a 90-page requirements dump, invented internal jargon with no glossary, or a demand for fixed pricing on work nobody has scoped yet. There is evidence that most of those requirements will not earn their keep anyway. The Standish Group's often-cited study of production software found that [45% of features are never used and another 19% are rarely used](https://www.mountaingoatsoftware.com/blog/are-64-of-features-really-rarely-or-never-used), so a giant feature list mostly buys you cost and bug surface. Keep the document tight. Ten to fifteen pages is plenty for most mid-market projects.

## Describing your problem, not your solution

The single highest-leverage section is the problem statement. Tell the vendor what is broken today, who feels the pain, and what it costs you. "Our warehouse team re-keys every order into three systems, which takes two hours a day and produces shipping errors we only catch after the truck leaves" gives a good engineer far more to work with than "we need an order management module with real-time sync."

This is not a soft skill, it is risk control. The classic [Standish CHAOS research](https://personal.utdallas.edu/~chung/SYSM6309/chaos_report.pdf) traced the largest share of troubled projects to incomplete requirements (about 12.3% of cases) and lack of user involvement (about 12.8%), well ahead of technical causes. When you describe the problem instead of the solution, you invite the vendor to bring expertise, surface the missing requirements early, and pull real users into the conversation. The firms worth hiring will push back, ask sharper questions, and sometimes propose an approach you had not considered. If your RFP only asks them to price a solution you designed, you never find out whether they can think.

## Scope, constraints, and success metrics

Scope is where projects live or die, so be explicit about boundaries. List what is in, and just as important, what is out for this phase. Name the systems any solution must talk to (an ERP like NetSuite or SAP, a payment gateway, a data warehouse) and any hard constraints: on-premise data, SOC 2 expectations, an existing React front end you want to keep.

Then define success in measurable terms. Vague goals produce vague bids. Concrete ones let a vendor commit to acceptance criteria you can actually test. A few examples:

- Cut order entry time from two hours to under fifteen minutes per day.
- Support 500 concurrent users with sub-second search on a 2 million row catalog.
- Pass a third-party security review before go-live.

If you can attach numbers, do. It changes the quality of every proposal you get back.

## Budget range and timeline expectations

Many buyers hide the budget, thinking it gives them negotiating leverage. Usually it just wastes everyone's time. Without a range, vendors either guess high to be safe or low to win, and you end up comparing proposals scoped to wildly different assumptions. That gap is not small in practice: the same Standish data found the average cost overrun on challenged projects reached roughly 189% of the original estimate, much of it seeded by fuzzy scope and budgets nobody agreed on up front. Share a range, even a wide one. "We expect this to land between 150k and 300k and want a partner who will tell us where on that band we sit and why" is a mature ask that good firms respect.

Do the same with timeline. Say whether a date is a genuine constraint (a contract renewal, a trade-show launch) or a preference. Real deadlines change the plan. Fake ones just add stress. If you want to understand what actually moves the number, our breakdown of [the hidden costs of custom software](/blog/hidden-costs-of-custom-software) is worth reading before you set the range.

## Evaluation criteria and scoring

Tell vendors how you will judge them, in the RFP itself. It disciplines your own team and signals that you will decide on merit rather than gut feel. Weight the criteria to match your situation. A regulated healthcare project should weight security higher than a marketing microsite would.

A simple weighted rubric works well:

| Criteria | Weight |
| --- | --- |
| Relevant technical and domain expertise | 30% |
| Clarity and realism of the proposed approach | 20% |
| Team seniority and continuity | 15% |
| References and verifiable track record | 15% |
| Total cost and pricing transparency | 15% |
| Communication and cultural fit | 5% |

Score each proposal independently before you compare, so an impressive deck does not drag up a weak plan. Given that incomplete requirements and weak user involvement drive most failures, put real weight on how a vendor plans to close those gaps, not just on the sticker price. Our guide on [how to evaluate a software development proposal](/blog/how-to-evaluate-a-software-development-proposal) goes deeper on reading the estimates themselves.

## A reusable RFP section-by-section template

Copy this outline and fill it in. Each section is a heading in your document.

1. **About us.** Company, industry, size, and a one-paragraph description of what you do.
2. **The problem.** What hurts today, who it affects, and the cost of leaving it unsolved.
3. **Objectives and success metrics.** Measurable outcomes you expect the software to produce.
4. **Scope.** In-scope capabilities, out-of-scope items, and known future phases.
5. **Technical environment.** Systems to integrate with, current stack, hosting, security and compliance needs.
6. **Constraints.** Budget range, timeline, and any non-negotiables.
7. **What we want from you.** Proposed approach, team composition, timeline, pricing model, assumptions, and references.
8. **Evaluation.** Your criteria, weights, and process, including dates for questions, submission, and decision.
9. **Logistics.** Contact person, submission format, and how questions get answered (ideally shared with all bidders).

Ask every vendor to state their assumptions and exclusions explicitly. That single request surfaces the difference between a firm that has thought the work through and one that has not.

## Common RFP mistakes that scare off good vendors

The strongest firms have more demand than capacity, so they self-select out of RFPs that look painful. A few patterns push them away.

- **No budget and no range.** It reads as either indecision or a fishing expedition. Serious teams pass.
- **Impossible timelines.** A twelve-week ask for six months of work tells experienced vendors you will be a difficult client, or that a less careful competitor will win with a lowball bid.
- **Committee-written requirements.** Long, contradictory lists with no priority signal a project that has not been aligned internally. Remember that most of those features will go unused anyway. That risk shows up in delivery.
- **A rigid Q&A process with no dialogue.** The best proposals come from vendors who got to ask real questions. Blocking that guarantees generic answers and reintroduces the exact requirements gaps the research warns about.
- **Weighting everything toward lowest price.** You will get the bid that cut the most corners, and you will meet those corners during the build.

Write the RFP you would want to receive: honest about constraints, clear about the problem, open to expertise. That posture attracts the partners who do their best work with clients, not for them.

If you are still narrowing the field, our advice on [how to choose a software partner](/#how-to-choose) covers the vendor-side questions that pair with a good RFP. When you are ready to test the market, you can [get a technical proposal](/#contact) and see how a senior team responds to a problem-first brief. More buyer guides live on [the blog](/blog).
