---
title: "Managing technical debt: a leader's guide"
description: "A leader's guide to managing technical debt: what it really costs, good vs bad debt, making it visible to the business, prioritizing fixes, and preventing more."
category: "Legacy Modernization"
primaryKeyword: "managing technical debt"
tags: ["technical debt", "reduce tech debt", "tech debt strategy", "tech debt cost"]
takeaways:
  - "Technical debt rarely arrives as one bill; it is a tax on everything afterward, and CIOs estimate it at 20 to 40 percent of their entire technology estate before depreciation."
  - "The distinction that matters for a leader is whether the trade-off was a decision or an accident: deliberate debt with a repayment plan is a tool, while debt from neglect is rot."
  - "Debt persists because it is invisible to budget holders, so translate it into velocity, incidents, and a visible register with owners and costs to change the conversation."
  - "Prioritize where high churn meets high risk; ugly code in a stable module nobody touches is cheap to ignore, while debt in code you change weekly is expensive every time."
  - "Manage debt with continuous, modest investment folded into feature work rather than occasional crisis rewrites, which carry their own large risk."
faqs:
  - q: "How much does technical debt actually cost a company?"
    a: "It rarely shows up as a single invoice, appearing instead as slower features, recurring bugs, and long onboarding. McKinsey found CIOs estimate tech debt at 20 to 40 percent of the value of their entire technology estate before depreciation, and Stripe's survey found the average developer spends more than 17 hours a week on maintenance, with roughly 4 of those on bad code, an opportunity cost estimated near $85 billion a year worldwide."
  - q: "What is the difference between good and bad technical debt?"
    a: "Good debt is a conscious trade taken deliberately, for example to hit a market window or validate an idea, with a plan to repay it if the bet pays off. Bad debt is taken by accident or neglect, growing from rushed work, skipped tests, and unaddressed problems with no plan behind it. The question a leader should ask is whether the trade-off was a decision or an accident."
  - q: "How do you make technical debt visible to business leaders?"
    a: "Translate it into terms the business already tracks: time, money, and risk. Tie debt to velocity by showing how much slower delivery has become in the areas carrying the most debt, tie it to specific outages and bugs, and maintain a visible register listing significant debt with an owner, an estimated cost of carrying it, and an estimated cost to fix. That reframes it from engineers wanting to rewrite things into a fundable business case."
  - q: "Which technical debt should you fix first?"
    a: "Fix where high churn meets high risk. Rank debt by how often the code changes, since high-churn areas repay cleanup fastest, by the blast radius when it breaks, since debt near money, data, or customers carries more risk, and by how much it is slowing current work. Ugly code in a stable module that never changes is cheap to ignore, so defer that without guilt."
---

Technical debt is one of those terms that gets used to mean everything and therefore nothing. To an engineer it might mean a shortcut taken under deadline. To a CFO it sounds like a line item that never appears on any statement. The gap between those two views is exactly where debt festers, because the people who feel the pain and the people who fund the fix are not speaking the same language. This guide is for leaders who need to manage technical debt as a business problem, not just an engineering complaint.

## What technical debt really costs

The cost of technical debt is rarely a single bill. It shows up as a tax on everything you do afterward. Features take longer because the code is tangled. Bugs recur because the design makes them easy to introduce. New engineers take months to become productive because nothing is where they would expect it. None of that appears on an invoice, which is why it is so easy to ignore until it is severe.

The scale is larger than most leaders assume. McKinsey's research on tech debt found that CIOs estimate it at [20 to 40 percent of the value of their entire technology estate before depreciation](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/tech-debt-reclaiming-tech-equity), which runs to hundreds of millions of dollars at a large firm. The same study found that around 30 percent of CIOs believe more than 20 percent of the budget nominally earmarked for new products is quietly diverted into resolving debt. Stripe's Developer Coefficient survey put a per-engineer number on it: the average developer spends [more than 17 hours a week on maintenance and roughly 4 of those on dealing with bad code, an opportunity cost the report estimated at nearly $85 billion a year worldwide](https://stripe.com/files/reports/the-developer-coefficient.pdf). You are paying that tax whether or not you name it. And it is trending the wrong way: in the McKinsey survey, [about 60 percent of CIOs said their organization's tech debt had risen noticeably over the previous three years](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/tech-debt-reclaiming-tech-equity). Stripe went further and estimated that developer inefficiency, of which debt is a large part, drags on the order of $300 billion off global GDP each year. These are not rounding errors, and they land squarely on the roadmap you are trying to fund.

The compounding is what makes it dangerous. Like financial debt, unpaid technical debt accrues interest. Each shortcut makes the next change a little harder, and the slowdown builds quietly until a team that once shipped weekly is spending most of its time fighting the codebase. By the time it is obvious in the roadmap, the interest has been accumulating for a long time.

The severe endpoint is a system so fragile that any change risks an outage, and the only options left are expensive. That is the [legacy modernization](/blog/how-to-modernize-legacy-software) problem, and it is far cheaper to avoid than to escape.

## Good debt vs bad debt

Not all technical debt is bad, and treating it as uniformly evil leads to bad decisions. Debt taken deliberately, to hit a market window or validate an idea, can be entirely rational. You ship a simpler version now, learn whether it matters, and pay the debt down if it does. That is good debt: a conscious trade with a plan to repay.

Bad debt is the kind taken by accident or neglect. Nobody decided to accumulate it; it just grew from rushed work, skipped tests, and problems left unaddressed. It has no plan behind it and no clear payoff, and it is the kind that quietly strangles a codebase.

The distinction that matters for a leader: was the trade-off a decision or an accident? Good debt is a tool. Bad debt is rot. A team that cannot tell you which of its debt is which does not understand its own system well enough.

## Making debt visible to the business

Debt persists because it is invisible to the people who allocate budget. The fix is to translate it into terms the business already tracks: time, money, and risk. Instead of "the payment module needs refactoring," say "changes to billing take three times longer than they should and carry a real chance of a customer-facing error each time."

Concrete ways to surface it:

- Tie debt to velocity. Show how much slower delivery has become in the areas carrying the most debt.
- Tie debt to incidents. Point to outages and bugs that trace back to specific shortcuts.
- Maintain a visible register. Keep a living list of significant debt with an owner, an estimated cost of carrying it, and an estimated cost to fix.

Once debt is expressed as business impact, the conversation changes from "engineers want to rewrite things" to "here is what this is costing us and what fixing it would return." That is a conversation a leader can actually fund. And the upside is quantifiable: McKinsey found that companies actively managing tech debt free up engineers to spend [as much as 50 percent more of their time on work that advances business goals](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/tech-debt-reclaiming-tech-equity), and that firms in the top quintile of debt management grow revenue about 20 percent faster than those in the bottom quintile.

## Prioritizing what to fix

You cannot fix all of it, and you should not try. The goal is to pay down the debt that is actively costing you and to leave alone the debt that sits in a corner nobody touches. Ugly code in a stable module that never changes is cheap to ignore. Ugly code in the part of the system you modify every week is expensive every single time.

A practical way to rank:

- How often does this code change? High-churn areas repay cleanup fastest.
- What is the blast radius when it breaks? Debt near money, data, or customers carries more risk.
- How much is it slowing current work? Debt blocking the roadmap now beats debt that might matter someday.

Fix where high churn meets high risk. Defer the rest without guilt. This mirrors how good teams set a [definition of done](/blog/definition-of-done-software): explicit criteria for what "good enough" means so debt does not accumulate silently in the first place.

## Preventing new debt

The cheapest debt to manage is the debt you never take on. Prevention is mostly discipline embedded in how the team works, not a heroic cleanup effort. Code review that actually reviews design, automated tests that make regressions visible, and a shared standard for what "finished" means all keep new debt from piling up.

The other half is cultural. Teams accumulate bad debt fastest when they are pushed to ship at any cost with no room to do it well. If every deadline is treated as more important than the last, corners get cut every time, and the interest compounds. This is not a fringe complaint: in the Stripe survey, nearly two-thirds of developers said the time they spend fixing existing code is excessive. Giving teams the room to build things properly the first time is not indulgence; it is the cheapest debt-prevention strategy there is. A senior team that owns quality by default produces far less accidental debt than one racing an impossible clock.

## Balancing features and cleanup

The hardest ongoing decision is how to split effort between new features and paying down debt, and there is no universal ratio. Spend everything on features and the system eventually seizes. Spend everything on cleanup and the business stalls while competitors ship.

The workable answer is continuous, modest investment rather than occasional crisis rewrites. Fold cleanup into feature work: when you touch an area, leave it a little better than you found it. Reserve a steady, visible fraction of capacity for the debt on your register. And reserve full rewrites for the rare cases where a system is genuinely beyond incremental repair, because big-bang rewrites are their own large risk.

Managed this way, technical debt becomes a normal part of running a software system rather than a periodic emergency. If you are staring at a system that has crossed from manageable debt into genuine risk, you can [start a project](/#contact) to scope a modernization path, or read more across [the blog](/blog).
