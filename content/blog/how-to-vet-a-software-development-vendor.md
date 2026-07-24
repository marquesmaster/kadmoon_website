---
title: "How to vet a software development vendor before you sign"
description: "How to vet a software vendor before you sign: verify technical claims, run useful reference calls, review code, check security, and de-risk with a paid pilot."
category: "Buyer's Guide"
primaryKeyword: "how to vet a software vendor"
tags: ["software vendor evaluation", "due diligence software company", "check software references", "software project failure rate"]
takeaways:
  - "Treat every sales claim as a hypothesis to test, and confirm the senior people you evaluate are the ones who will actually write your code, since junior staff or subcontractors often deliver what seniors sold."
  - "Reference calls surface the truth only with open-ended questions; ask what surprised them, how the vendor handled trouble, and whether final cost matched the estimate, and listen for hesitation."
  - "Review sample code and architecture docs for maintainability, because poor software quality cost the US an estimated 2.41 trillion dollars in 2022 and sloppy code is a liability you carry for years."
  - "Demand explicit answers on security: where credentials live, who has production access, and how dependencies are patched, since open-source weakness failures jumped 650 percent between 2020 and 2021."
  - "De-risk with a small paid pilot of two to four weeks with written acceptance criteria, which shows how a team estimates, communicates, and hands over code for a fraction of the full budget."
faqs:
  - q: "What questions should you ask a software vendor's references?"
    a: "Ask open-ended questions that get past the happy talk: what surprised them most, how the vendor handled things going wrong, whether final cost matched the original estimate, who owns the code and infrastructure now, and whether they would hire the vendor again for something larger. Listen for hesitation as much as content, and ask for a reference on a project similar in size and domain to yours."
  - q: "Is a paid pilot worth it before committing to a software vendor?"
    a: "Yes. A small paid pilot of roughly two to four weeks, scoped to one meaningful slice with measurable acceptance criteria written down first, is the best test available. It shows you how the team estimates, how they communicate when something slips, whether the demo works, and whether the code they hand over is clean, all for a fraction of the full budget."
  - q: "How do you verify a software vendor's technical claims?"
    a: "Treat every claim as a hypothesis to test. When a vendor says they built a real-time platform, ask what real-time meant in practice: event latency, throughput, data sources, and what broke first under load. Ask who specifically will be on your project and confirm they stay assigned, and push past case study summaries to what changed mid-project and what they would do differently."
  - q: "What should you check about a software vendor's security posture?"
    a: "Ask concrete questions rather than accepting generic reassurance: where credentials live, who has production access, and how dependencies are patched. For regulated data, ask about HIPAA experience, and for enterprise sales, expect a SOC 2 posture or at least an understanding of what SOC 2 requires. How a vendor manages third-party dependencies is a real risk question given the 650 percent jump in open-source weakness failures between 2020 and 2021."
---

Most bad software engagements were predictable. The warning signs were there during sales, but the buyer was moving fast and took the polished pitch at face value. The numbers say the stakes are high. When McKinsey and the University of Oxford studied 5,400 large IT projects (initial budgets above $15 million), the average one ran [45% over budget and delivered 56% less value than predicted](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value), and 17% became "black swans" with overruns of 200 to 400 percent. Vetting a vendor properly takes a few extra weeks of work up front, and it is the cheapest insurance you will ever buy against a six-figure project that stalls. Here is a practical process for checking what a firm actually does before money changes hands.

## Verifying technical claims and case studies

Sales decks are written to impress, so treat every claim as a hypothesis to test. When a vendor says they built a real-time logistics platform, ask what "real-time" meant in practice: event latency, throughput, the data sources they ingested, and what broke first under load. Vague answers usually mean the person in the room did not do the work.

Ask who specifically will be on your project. A common pattern is that senior engineers close the sale and junior staff or subcontractors do the delivery. The Standish Group's CHAOS research has for years put the fully successful rate (on time, on budget, with the agreed features) around [31%, with roughly half of projects "challenged" and 19% outright failed](https://www.successthroughsafe.com/blog-1/2021/11/13/standish-chaos-report-2021). Delivery quality is the variable you have the most leverage over during selection. At Kadmoon the team is senior in-house full-time employees with no subcontractors, which matters here because the people you evaluate should be the people who write your code. Get names, ask to meet them, and confirm they are staying assigned through your timeline.

Case studies are more useful when you push past the summary. For each one, ask what the original scope was, what changed mid-project, how the estimate held up, and what they would do differently. A firm that can talk honestly about a project that went sideways is more trustworthy than one whose every engagement was a flawless success.

## Reference-call questions that surface the truth

References are curated, so your job is to get past the happy talk. This is also where a lot of engagements quietly go wrong before they start: Deloitte's outsourcing research and related industry data suggest a large share of vendor relationships end in dissatisfaction, and analysts have long pegged the failure rate of outsourcing relationships in the [40% to 70% range](https://www.deloitte.com/us/en/services/consulting/articles/global-outsourcing-survey.html). Open-ended questions surface those problems earlier than yes-or-no ones. Try these:

- What surprised you most about working with them, good or bad?
- When something went wrong, how did they handle it?
- Did the final cost match the original estimate? If not, why?
- Who owns the code and infrastructure now, and how clean was the handover?
- Would you hire them again for something larger, and what would you change?

Listen for hesitation as much as content. A reference who pauses before answering the cost question is telling you something. Ask for at least one reference on a project similar in size and domain to yours, not just the vendor's favorite showcase client. Note too that Deloitte found the top reason companies outsource has shifted from cost cutting (cited by [70% of executives in 2020, down to 34% by 2024](https://www.deloitte.com/us/en/services/consulting/articles/global-outsourcing-survey.html)) toward access to talent and capacity. If a vendor is selling you purely on being cheap, they are competing on the axis the market has already moved away from.

## Reviewing sample code and architecture docs

You can learn a lot from artifacts the vendor already produced. Ask to see a representative code sample and, if you have technical staff, have them review it for structure, tests, and readability. You are not looking for perfection. You are looking for whether the code was written by people who care about the next engineer who has to maintain it.

The maintenance bill is not abstract. The Consortium for Information and Software Quality estimated the cost of poor software quality in the US at [$2.41 trillion in 2022, with accumulated technical debt around $1.52 trillion](https://www.it-cisq.org/the-cost-of-poor-quality-software-in-the-us-a-2022-report/). Sloppy code you accept today is a liability you carry for years. Architecture documents tell you how the firm thinks. A good one explains trade-offs: why PostgreSQL over another store, why a particular queue, where the system will strain at 10x volume. If a vendor cannot produce a single architecture diagram or runbook from past work, ask how they hand projects off. Clean documentation is a strong signal that you will not be held hostage later.

Pay attention to how they talk about testing while you are at it. Ask what their automated test coverage looks like, how they catch regressions, and whether QA is a dedicated function or an afterthought squeezed in before a deadline. A firm that treats testing as optional will ship you software that works in the demo and breaks in production, and you will pay to fix it. The way a vendor answers a plain question about QA tells you a lot about whether they build software to last or just to pass the next review.

## Financial stability and team continuity

A vendor that folds mid-project leaves you with half-finished software and no support. You do not need audited financials, but you should understand the basics. How long have they been operating? Is revenue concentrated in one or two clients? What is their engineer turnover like?

Team continuity is the practical version of this concern. Ask how they handle an engineer leaving mid-engagement and whether knowledge is documented or trapped in one person's head. A firm that pairs, reviews code, and keeps runbooks current can absorb a departure. One that depends on a single hero cannot.

## Security posture and certifications

For any US B2B engagement touching customer or regulated data, security is not optional. Ask how they handle credentials, access control, and secrets. If your data includes health information, ask about HIPAA experience. If you sell to enterprises, a SOC 2 posture on the vendor's side, or at minimum an understanding of what SOC 2 requires of the software they build, should be table stakes.

Concrete questions beat generic reassurance. Where do credentials live? Who has production access? How are dependencies patched? The CISQ report tied part of that $2.41 trillion figure to a [650% jump in failures from open-source software weaknesses between 2020 and 2021](https://www.it-cisq.org/the-cost-of-poor-quality-software-in-the-us-a-2022-report/), so how a vendor manages third-party dependencies is a real risk question, not a checkbox. A vendor that shrugs at these is a vendor that will ship you vulnerabilities. This overlaps heavily with your broader [software vendor due diligence checklist](/blog/software-vendor-due-diligence-checklist), which is worth running in full before you commit.

## A lightweight paid pilot as the ultimate test

Everything above is a proxy for one question: can this team deliver working software for you? The best way to answer it is a small paid pilot. Scope one meaningful slice of the project, roughly two to four weeks, with measurable acceptance criteria written down before you start. That matters because the same McKinsey research found scope creep and unclear requirements to be a leading cause of overruns, and industry data shows a majority of organizations start engagements without defined success metrics at all.

A paid pilot tells you what no reference call can. You see how they estimate, how they communicate when something slips, whether the demo actually works, and whether the code they hand over is clean. Kadmoon runs on two-week sprints with a working demo each cycle and acceptance criteria in the contract, so a pilot maps naturally onto how a real engagement runs. If the pilot goes well, you scale up with evidence instead of hope. If it does not, you learned that for a fraction of the full budget.

Vetting will not hand you a perfect vendor. It replaces optimism with evidence before you commit money. If you are weighing a few firms, pair this process with a clear view of [how to choose a software partner](/#how-to-choose) and read the rest of [the blog](/blog) for the buyer-side details that sales teams tend to skip. When you are ready to test a team on real work, [start a project](/#contact) with a scoped pilot rather than a leap of faith.
