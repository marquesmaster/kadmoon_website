---
title: "11 red flags when hiring a software development firm"
description: "The red flags software development company buyers miss, from vague estimates to source-code lock-in, and how to test for each one before you sign."
category: "Buyer's Guide"
primaryKeyword: "red flags software development company"
tags: ["warning signs software vendor", "bad software developers", "avoid software agency", "software project failure"]
---

Most failed software projects were predictable during the sales process. The warning signs were there in the first two calls, buried under confident language and a polished deck. The base rates are sobering: the Standish Group's CHAOS 2020 study of roughly 50,000 projects found only [31 percent succeeded on time, on budget, and on scope, while 50 percent were challenged and 19 percent failed outright](https://thestory.is/en/journal/chaos-report/). Large efforts fare worse. McKinsey and the University of Oxford studied [more than 5,400 IT projects with budgets above $15 million and found they ran 45 percent over budget, 7 percent over time, and delivered 56 percent less value than promised](https://www.mckinsey.com/~/media/McKinsey/Business%20Functions/McKinsey%20Digital/Our%20Insights/Delivering%20large%20scale%20IT%20projects%20on%20time%20on%20budget%20and%20on%20value/Delivering%20large%20scale%20IT%20projects%20on%20time%20on%20budget%20and%20on%20value.pdf). If you know what to listen for, you can screen out the firms most likely to burn your budget before you ever sign. Here are the red flags software development company buyers should treat as disqualifiers, and how to test for each one.

## Vague estimates and instant "yes to everything"

A firm that gives you a number before understanding your problem is guessing, and you will pay for that guess later. Watch for round figures with no breakdown, ranges so wide they mean nothing, and a salesperson who agrees to every request without a pause. Real engineering involves trade-offs. When a vendor says yes to a hard deadline, a fixed price, and an expanding feature list all at once, at least one of those is a fluid promise they plan to renegotiate once you are locked in.

The math backs up the caution. McKinsey's data shows that every additional year a project runs increases its cost overrun by 15 percent, so the confident "we'll have it done fast and cheap" pitch tends to unwind exactly where it hurts. Good firms scope before they price. They will tell you what they do not yet know and what would change the estimate. A "it depends, and here is what it depends on" is a better sign than a fast, tidy number, even though the fast number feels more reassuring in the moment. The reassuring number is often the one that unravels three months in.

## No discovery, no questions, no pushback

The strongest signal of an engineering partner is the quality of the questions they ask. Incomplete and changing requirements are not a minor risk. In the CHAOS data, incomplete requirements rank as the single largest driver of impaired projects, and requirements churn compounds it. A firm that never challenges your assumptions, never asks about your existing systems, and never pushes back on a feature that will cost ten times its value is treating you as a purchase order, not a project. A proper [software discovery phase](/blog/software-discovery-phase) exists to surface exactly these issues before code gets written.

If the entire sales conversation is them talking and you nodding, you are buying whatever they feel like building.

## A portfolio you can never verify

Logos on a website prove nothing. Ask which parts of a named project the firm actually built, who on the current team worked on it, and whether you can speak to that client. Vague answers, "we can't share that for confidentiality," repeated for every reference, are a pattern worth noticing. Screenshots without live URLs, case studies without measurable outcomes, and reference calls that never quite get scheduled all point the same direction.

## Communication gaps and disappearing PMs

Notice how the firm communicates before money changes hands, because it only gets worse after. Slow replies, missed calls, and a rotating cast of contacts during the sales cycle predict exactly how delivery will feel. Ask who your day-to-day contact will be and whether that person sits on the delivery team or vanishes after signing. A common bait-and-switch: senior people close the deal, then junior staff you never met do the work.

## Ownership and source-code red flags

This one costs companies the most and gets noticed the least. Some firms retain the intellectual property, hold the repository and credentials, or deploy only to infrastructure they control. You end up renting your own product. Before signing, confirm in writing that you will own 100 percent of the source code, the repository, the CI/CD pipeline, and the credentials, with a runbook delivered at handover. If a vendor hesitates here, walk. Our own model gives the client full IP ownership by default, and you should expect nothing less. For the deeper version of this, read [do you own the source code](/blog/do-you-own-the-source-code).

## Contract terms that lock you in

Read the exit clauses first, not last. Watch for automatic renewals, long notice periods, penalties for leaving, and undefined "support" fees that continue indefinitely. A fair contract lets either side end the relationship and hands you everything you need to keep going with another team. The presence of transition-assistance language is a good sign. Its absence is a quiet form of lock-in.

## The other five to watch

Not every red flag needs its own section. A few more that reliably predict trouble:

- No measurable acceptance criteria. If the contract does not define what "done" means for each deliverable, disputes are inevitable, and disputes are where the 50 percent "challenged" projects live.
- Subcontractors you were not told about. Ask whether the people building your software are full-time employees or an offshore shop the firm quietly resells.
- No working demo cadence. Firms that show you nothing for months are hiding either slow progress or none. Short project size correlates strongly with success in the CHAOS data, small projects succeed roughly nine times out of ten while the largest succeed less than one time in ten, which is why frequent, thin releases beat a single big-bang delivery.
- Pressure and false scarcity. "This rate is only good this week" is a sales tactic, not an engineering practice.
- One person who does everything. A solo developer wearing every hat has no code review, no QA, and a serious bus-factor problem.

Here is the full set in one place, each paired with the concrete test that exposes it:

| Red flag | Test before you sign |
|---|---|
| Vague estimate, no breakdown | Ask for itemized scope with assumptions and exclusions |
| Says yes to everything | Introduce a hard trade-off and watch for pushback |
| No discovery or questions | Give a problem brief; grade the questions they ask |
| Unverifiable portfolio | Request a live URL and a reference call |
| Disappearing PM | Name your day-to-day contact in the contract |
| No IP ownership | Require 100% source, repo, and CI/CD in writing |
| Lock-in contract terms | Read exit clauses and transition-assistance language first |
| No acceptance criteria | Define "done" per deliverable in the statement of work |
| Hidden subcontractors | Ask who is a full-time employee versus a resold shop |
| No demo cadence | Require a working demo every sprint |
| Solo developer, no QA | Confirm code review and a separate test process exist |

## How to test for these before you sign

You do not have to trust your read on a firm. You can design the sales process to expose these problems on purpose.

First, give every vendor the same short problem brief and compare how they respond. The ones who ask sharp questions and reshape your assumptions are engineers. The ones who send a quote back in an hour are order-takers.

Second, insist on a reference call with a client whose project resembles yours, and ask that client specific questions: Did the estimate hold? Who actually did the work? What happened when scope changed? How did the relationship end, and could you keep the code? These are the same questions covered in [25 questions to ask a software development company](/blog/questions-to-ask-a-software-development-company).

Third, run a small paid pilot before the full engagement. Two weeks of real work tells you more than ten sales calls. You see how they estimate, communicate, handle feedback, and hand over code. For a structured approach to this kind of vetting, see [how to vet a software development vendor](/blog/how-to-vet-a-software-development-vendor).

Finally, put the important promises in writing. IP ownership, acceptance criteria, team composition, and exit terms belong in the contract, not the sales email. If a firm is happy to say something out loud but reluctant to sign it, that gap is your answer.

None of this guarantees a perfect project. But screening for these signals removes the worst outcomes, and given that two out of three technology projects end up challenged or failed, removing the worst outcomes is most of the battle. When you are ready to compare a firm that treats these as table stakes, you can [get a technical proposal](/#contact) and see how a straight answer to each of these questions reads. For more on evaluating partners, browse [the blog](/blog).
