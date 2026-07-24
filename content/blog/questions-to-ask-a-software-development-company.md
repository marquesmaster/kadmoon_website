---
title: "25 questions to ask a software development company"
description: "The 25 questions to ask a software development company before you sign, covering process, staffing, IP, security, support, and pricing, with the answers that should worry you."
category: "Buyer's Guide"
primaryKeyword: "questions to ask a software development company"
tags: ["software vendor questions", "interview software agency", "vetting developers", "software project risk"]
takeaways:
  - "Ask the same structured questions to every firm on your shortlist and write the answers down, because the stakes are high: McKinsey found large IT projects average 45% over budget and deliver 56% less value than promised."
  - "Project size is the strongest predictor of success in the CHAOS data, so favor a vendor that breaks a big program into small, demonstrable increments with a working demo each sprint."
  - "Press on staffing and turnover: confirm named engineers, whether they are full-time employees or subcontractors, their time zone, and what happens if a key person leaves mid-build."
  - "Confirm you own 100% of the source code, repository, CI/CD pipeline, and credentials on delivery, since anything less creates lock-in."
  - "A firm that fixes defects found shortly after delivery at no charge stands behind its work, while one that bills you to repair its own bugs signals low confidence or a dependence-based model."
faqs:
  - q: "What should I ask a software development company before hiring them?"
    a: "Cover six areas: process and delivery, team and staffing, code ownership and IP, security and compliance, maintenance and support, and pricing and change orders. Ask specific questions like who exactly will be on your team, whether you own 100% of the code, and how scope changes are priced. Ask the same set to every firm on your shortlist and compare the answers side by side."
  - q: "How do I know if a software vendor is trustworthy?"
    a: "Patterns matter more than any single reply. Reassuring signs include named engineers you can meet, a written acceptance process, clear IP transfer, honest talk about risks, and a willingness to say they would not build it that way. Worrying signs include vague answers about who does the work, reluctance to put acceptance criteria in writing, pressure to skip discovery, and agreeing with everything you say."
  - q: "Should I worry about developer turnover on my project?"
    a: "Yes. Technology carries the highest attrition of any sector, around 13% a year, and median engineer tenure at many firms sits near two years, so on an eighteen-month build the person who designed your data model may be gone before launch. Ask whether the design is documented and knowledge is shared across the team, or whether it walks out in one person's head."
  - q: "How do I avoid a project going over budget?"
    a: "Money disputes almost always trace back to fuzzy scope. The average 45% budget overrun is mostly scope that crept because nobody agreed up front how change would be priced and approved. Ask for a written change process, find out which quote line items are firm versus estimates, and be wary of a vendor that quotes everything as a single confident number with no discussion of what could move it."
---

A sales call will tell you what a vendor wants you to hear. Good questions tell you how they actually work. That gap is expensive. When McKinsey and the University of Oxford studied [more than 5,400 large IT projects](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value), the average one ran 45% over budget, 7% over schedule, and delivered 56% less value than promised. The Standish Group's CHAOS research is bleaker: across roughly 50,000 projects, [only about 31% finished on time, on budget, and with the agreed scope](https://budgetoverrun.com/studies/standish-chaos-report), while 19% were cancelled outright. The questions below are what we would ask if we were on the buying side, grouped so you can run a structured evaluation instead of a vibe check. Ask the same questions to every firm on your shortlist and compare the answers side by side.

## Questions about process and delivery

Start here, because delivery habits predict most of your future pain.

- How is the work broken into iterations, and what do I see at the end of each one?
- Can I see a working demo every sprint, or only at milestones?
- Who writes the acceptance criteria, and are they in the contract?
- How do you handle a sprint that slips? What is your first move?
- What does your definition of done include? Tests, code review, deployment?

You want specific answers. A firm that runs two-week sprints with a working demo each cycle can describe exactly what that looks like. A firm that says "agile" and nothing more is telling you it does not have a real cadence. Project size is the single strongest predictor of outcome in the CHAOS data: small, tightly scoped projects succeed roughly 90% of the time, while the largest ones succeed less than 10% of the time. A vendor that breaks a big program into small, demonstrable increments is not following a fad. It is moving your project into the bucket that actually ships. If you want to go deeper on this, our piece on [how to evaluate a software development proposal](/blog/how-to-evaluate-a-software-development-proposal) breaks down what a delivery plan should actually contain.

## Questions about team and staffing

The people in the pitch are not always the people who write your code.

- Who exactly will be on my team, and can I see their profiles?
- Are they full-time employees or subcontractors?
- Where are they located and in what time zone do they work?
- What is your turnover, and what happens if a key engineer leaves mid-project?
- Will I have direct access to engineers, or does everything route through a manager?

The turnover question is not a formality. Technology carries the [highest attrition of any sector, around 13% a year by LinkedIn's data](https://bucketlistrewards.com/blog/the-true-cost-of-employee-turnover-in-tech/), and median engineer tenure at many firms sits near two years. If your build runs eighteen months, there is a real chance the person who designed your data model is gone before launch. Ask what happens then: is the design documented, is knowledge shared across the team, or does it walk out the door in one person's head?

The subcontractor question matters more than most buyers realize. A senior in-house team gives you continuity and a single line of accountability. A firm that quietly farms work out to freelancers loses that, and you find out only when quality drops or a contractor rotates off with no handoff.

Time zone is worth pressing on too. A four-hour overlap with your working day is enough for real collaboration. A one-hour window, or none, turns every question into a next-day answer and stretches a two-day fix into a two-week one. Ask when their engineers are actually online relative to you, not just where the office is registered.

## Questions about code ownership and IP

Do not assume you own what you paid for. Confirm it.

- Do I own 100% of the source code, or do you retain a license?
- When do I get the repository, CI/CD pipeline, credentials, and infrastructure access?
- Are there any third-party components with restrictive licenses in the stack?
- If we part ways, what do I walk away with?

The right answer is that you own everything: the repo, the pipeline, the credentials, and a runbook on delivery. Anything less creates lock-in. We cover this in detail in [who owns custom software IP](/blog/who-owns-custom-software-ip), and it is worth reading before you sign.

## Questions about security and compliance

Even a small app touches sensitive data eventually, and the cost of getting it wrong keeps climbing.

- How do you handle secrets, credentials, and access control during the build?
- Have your teams worked under SOC 2 or similar controls?
- If my product handles health data, how do you approach HIPAA?
- How do you manage dependency vulnerabilities and patching?
- Who has access to production, and how is that access logged?

Put a number on why this matters. IBM's 2024 report put the [global average cost of a data breach at a record $4.88 million](https://www.ibm.com/think/insights/whats-new-2024-cost-of-a-data-breach-report), up 10% in a year, and a large share of that comes from breaches that trace back to unpatched dependencies and loose access control during development. You are not looking for perfection here. You are looking for a vendor that treats security as part of engineering rather than a checkbox added at the end. A firm that can describe how it stores secrets, who touches production, and how patches get applied is one that has thought about the $4.88 million question before you asked it.

## Questions about maintenance and support

The build is a fraction of the total cost of ownership.

- What does support look like after launch, and what does it cost?
- How do you handle bugs found after delivery? Is there a warranty period?
- Will you document the system so another team could maintain it?
- What is your response time for a production incident?

A vendor that plans for handoff and documentation is thinking about your long-term interest. One that keeps the system opaque is protecting a support annuity.

The warranty answer is a good tell on its own. A firm confident in its work will fix defects found shortly after delivery at no charge, because it stands behind what it shipped. A firm that bills you to repair its own bugs is signaling either low confidence or a business model built on your dependence. Neither is what you want.

## Questions about pricing and change orders

Money disputes almost always trace back to fuzzy scope.

- Is this fixed price, time and materials, or a dedicated team? Why that model for my project?
- How are changes to scope priced and approved?
- What is not included in the quote that I should budget for separately?
- How do you bill, and what triggers each payment?

Scope will change. That is normal. What matters is whether the process for handling change is clear and fair. Remember that the McKinsey figure, 45% over budget on average, is not mostly fraud. It is scope that crept because nobody agreed up front how change would be priced and approved. A vendor that has a written change process is protecting your budget, not padding theirs. If pricing models are new to you, [how to compare software development vendors](/blog/how-to-compare-software-development-vendors) walks through the trade-offs.

Watch how the vendor talks about the parts of the quote that are uncertain. An experienced firm will tell you which line items are firm and which are estimates that depend on things you have not decided yet, like which systems you need to integrate with. A vendor that quotes everything as a single confident number, with no discussion of what could move it, is either hiding the risk or has not thought about it. Both cost you later.

## Answers that should reassure or worry you

Patterns matter more than any single reply.

Reassuring signs: named engineers you can meet, a written acceptance process, clear IP transfer, honest talk about risks and what could go wrong, and a willingness to say "we would not build it that way" when your idea has a flaw.

Worrying signs: vague answers about who does the work, reluctance to commit acceptance criteria to writing, pressure to skip discovery, a quote with no detail behind it, and a habit of agreeing with everything you say. A vendor that never pushes back is either not experienced enough to see problems or not confident enough to raise them.

The stakes justify the diligence. Two thirds of technology projects miss their budget, schedule, or scope, and the difference between the third that succeed and the rest is rarely luck. It is process, staffing, and honesty, which are exactly what these questions surface. Run them across your shortlist, write the answers down, and the right partner usually becomes obvious. When you are ready, you can [start a project](/#contact) or read more on [the blog](/blog) about vetting firms before you commit.
