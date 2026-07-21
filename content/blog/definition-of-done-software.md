---
title: "Definition of done: aligning teams on 'finished'"
description: "A practical definition of done for software teams: what a good DoD includes, code, tests, docs, review, how it differs from acceptance criteria, and enforcing it."
category: "Process & Delivery"
primaryKeyword: "definition of done"
tags: ["dod agile", "done criteria", "when is software done"]
---

"It's done" is one of the most expensive phrases in software, because it means something different to everyone in the room. To a developer it might mean the code runs on their machine. To a tester it means it passed QA. To a product owner it means a customer can use it. When those definitions differ, work gets declared finished, handed off, and bounced back, and the whole team loses trust in the word. The cost of that ambiguity is not hypothetical. A 2002 study prepared for the National Institute of Standards and Technology estimated that software defects cost the US economy [about $59.5 billion a year](https://www.nist.gov/document/samate-document-greg-tasseys-summary-pdf-nists-2002-report-economic-impacts-inadequate), much of it traceable to problems caught late rather than early. A written definition of done attacks that problem by making "finished" a shared, explicit standard instead of a personal opinion.

## Why "done" causes disputes

The trouble starts because "done" is a judgment call unless someone writes it down. A feature can be code-complete but untested, tested but undocumented, or documented but not deployable. Each person along the chain applies their own bar, and the gaps between those bars are where defects and rework live.

The economics reward catching problems early. Figures widely cited from IBM's defect research put the cost of fixing a defect after release at [up to 100 times](https://www.blackduck.com/blog/cost-to-fix-bugs-during-each-sdlc-phase.html) the cost of fixing it during requirements, with the multiplier climbing at every phase. The exact provenance of that number is debated, and you should treat it as directional rather than precise, but the pattern behind it is not controversial: the later a problem surfaces, the more code, context, and downstream work it has infected.

The damage is subtle at first and corrosive over time. A developer marks a ticket done and moves on. Days later a tester finds it was never wired up, or a teammate discovers there are no tests, or ops finds it cannot be deployed. Now the original context is cold, the fix is more expensive, and everyone quietly stops trusting status reports. A shared definition of done removes the ambiguity that causes all of this.

## What a good DoD includes

A definition of done is a checklist that every piece of work must satisfy before anyone calls it complete. It is not a wish list; it is the minimum bar for "we will not have to come back to this." A useful DoD is specific enough that two people would agree on whether an item met it.

A solid baseline usually covers:

- The code is written and meets the team's agreed standards.
- Automated tests exist and pass, covering the important paths.
- The change has been reviewed by someone other than the author.
- Documentation and relevant runbooks are updated.
- The work is merged and deployable through the normal pipeline, not stuck on a branch.
- The acceptance criteria for the specific item are met and verified.

The exact list should fit your context, but it should be written, agreed, and applied to everything. A DoD that lives in one person's head is not a definition of done.

## Code, tests, and documentation

These three deserve emphasis because they are the items most often quietly skipped under deadline pressure. Code that merely works is not done code. Done code is readable, follows the shared conventions, and does not leave a mess for the next person, because that mess is exactly how [technical debt](/blog/managing-technical-debt) accumulates.

Tests are part of done, not a separate phase you get to later. When tests are optional, they are the first thing dropped when time is short, and the result is a codebase where every change is a gamble. Making passing automated tests part of the definition means regressions surface immediately instead of in production. It is worth the investment: the same NIST work found that more than a third of the defect cost to the economy could be eliminated by better testing infrastructure that catches problems closer to where they are introduced.

Documentation is the piece teams rationalize skipping most, and it is the piece that determines whether anyone but the author can maintain the work. It does not need to be exhaustive. It needs to be enough that a teammate can understand what was built and why without interrupting the person who built it.

## Review and acceptance

Independent review belongs in the definition because self-certification is weak. The author of a change is the worst-placed person to spot its flaws. A second set of eyes catches design problems, missed cases, and shortcuts before they land, and it spreads knowledge so no single person is the only one who understands a piece of the system.

Acceptance is the other half. Someone with authority over the requirement, usually the product owner, confirms the work does what it was meant to do from the user's perspective. This is where a surprising share of waste hides: research summarized for NIST attributes roughly 70 to 85 percent of rework cost to requirements defects, meaning work that was built cleanly but built to the wrong understanding. Review checks that it was built well; acceptance checks that it was the right thing built. Both are part of done, and skipping either is how "finished" work turns out to be neither correct nor good.

## DoD vs acceptance criteria

These two get conflated, and the distinction is worth keeping clear because they do different jobs.

- The definition of done is global. It applies to every item, and it describes the quality bar: tested, reviewed, documented, deployable. It does not change from feature to feature.
- Acceptance criteria are local. They are specific to one item and describe what that particular feature must do to be correct: "a user can reset their password and receive a confirmation email."

An item is complete only when it satisfies both: its own acceptance criteria and the team's universal definition of done. One without the other leaves a gap. A feature that meets its acceptance criteria but has no tests is not done. A feature that is beautifully tested but does the wrong thing is not done either. Getting acceptance criteria right upstream is part of [writing requirements buyers respect](/blog/how-to-write-a-software-requirements-document).

## Enforcing it consistently

A definition of done that is written but not enforced is decoration. The point is that it applies every time, especially when the schedule is tight, because that is exactly when people are tempted to skip it. A DoD you honor only when convenient trains the team that "done" is negotiable, which puts you right back where you started. It also feeds the failure statistics: the Standish Group's CHAOS research has for years found only [about 31 percent of IT projects fully succeed](https://opencommons.org/CHAOS_Report_on_IT_Project_Outcomes), with the rest challenged or cancelled, and a slippery definition of "done" is one of the quiet ways a project slides from the first group into the second.

Practical ways to make it stick:

- Automate what you can. Let the pipeline block merges that lack passing tests or review, so the standard is enforced by tooling rather than willpower.
- Make it visible. Keep the checklist where work is tracked so nobody can claim they did not know the bar.
- Hold the line under pressure. If you drop the definition to hit a date, you have not saved time; you have created rework and debt you will pay for later with interest.
- Revisit it periodically. As the team and product mature, the definition should evolve, but deliberately, as a decision, not by quiet erosion.

A consistently enforced definition of done is one of the cheapest quality tools a team has. It turns "finished" from an argument into a fact, and it keeps rework, debt, and broken trust from accumulating. If you want a delivery process where "done" means done and acceptance criteria are written into the contract, you can [start a project](/#contact) or see [how a software house works](/blog/how-a-software-house-works).
