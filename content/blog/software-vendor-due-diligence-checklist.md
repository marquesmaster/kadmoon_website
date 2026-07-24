---
title: "The software vendor due diligence checklist"
description: "A software vendor due diligence checklist covering company, technical, security, and legal checks so you can evaluate a software firm before you sign."
category: "Buyer's Guide"
primaryKeyword: "software vendor due diligence checklist"
tags: ["vendor risk assessment", "software procurement checklist", "evaluate software firm", "third-party risk"]
takeaways:
  - "Across CHAOS research only around 16 percent of projects finish on time, on budget, and on scope, so screening vendors before you sign is cheap insurance."
  - "Ask directly whether engineers are full-time employees or subcontractors, since McKinsey and Oxford found large projects run 45 percent over budget and deliver 56 percent less value."
  - "Demand a technical walkthrough where strong teams explain trade-offs, plus evidence of automated tests, code review, CI/CD, and regular working demos."
  - "You should own 100 percent of the IP (source code, repository, CI/CD config, credentials, and runbook) on delivery, not licensed or assigned only after full payment."
  - "Two candid reference calls, especially one whose project hit trouble, tell you more than any polished portfolio."
faqs:
  - q: "What should a software vendor due diligence checklist include?"
    a: "Cover company and team (legal entity, years in business, and whether engineers are employees or subcontractors), technical depth (a real system walkthrough, testing, code review, CI/CD, and working demos), security and compliance, and legal terms including IP ownership and acceptance criteria. Finish with reference checks and a simple weighted scorecard so you can compare vendors and defend the decision later."
  - q: "How do I check a software vendor's security before signing?"
    a: "Scale scrutiny to your risk, since the vendor becomes part of your attack surface the moment they touch production. Ask who can access your production systems and how that access is granted and revoked, how secrets and credentials are stored, what compliance evidence they can produce for standards like SOC 2 or HIPAA, and whether production data is ever copied into test environments. Get any SOC 2 report in writing before granting production access."
  - q: "Who should own the intellectual property in a software contract?"
    a: "You should own 100 percent of it: the source code, the repository, the CI/CD configuration, the credentials, and the runbook, all handed over on delivery. If the contract assigns IP only after full payment, or licenses the code to you instead of transferring it, you do not actually own your software. This is where buyers get burned quietly, often months after launch."
  - q: "What questions should I ask a software vendor's references?"
    a: "Ask to speak with a client whose project shipped and one whose project hit trouble, since the second call is more informative. Avoid yes-or-no questions. Ask what surprised them, how the vendor handled a missed estimate, who they actually worked with day to day, and whether they would hire the firm again for something harder. The reference who lived through a slipped deadline knows how the vendor behaves when a project stops going to plan."
---

Due diligence on a software vendor is the work you do before money changes hands, and it is the cheapest insurance you will ever buy. The base rates justify the effort. Across decades of the Standish Group CHAOS research, only around 16 percent of software projects finish on time, on budget, and with the promised scope, while roughly a third are cancelled outright and the rest come in [challenged on cost, schedule, or features](https://www.standishgroup.com/products/project-resolution-benchmark). The failures are rarely random. They cluster around vendors you could have screened out. This software vendor due diligence checklist walks through the areas that actually predict trouble, with the specific questions and documents to ask for at each stage.

## Company and team due diligence

Start with the firm itself. You want to know who you are contracting with, how long they have operated, and whether the people who will build your software are employees or a rotating cast of subcontractors.

- Legal entity, years in business, and physical location. A US firm you can reach during your working hours behaves differently from a broker reselling offshore hours.
- Employment model. Ask directly whether engineers are full-time staff or contractors. Kadmoon, for example, works with a senior in-house team and no subcontractors, which matters for continuity and accountability.
- Team size and the specific people assigned to you. Names, seniority, and whether they are shared across other accounts.
- Financial stability. You do not need audited statements, but a firm that cannot make payroll mid-project becomes your problem.

Team stability is not a soft factor. The McKinsey and University of Oxford study of more than 5,400 IT projects found that large efforts (initial budgets above $15 million) run [45 percent over budget, 7 percent over time, and deliver 56 percent less value than predicted](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value). The same research found that every additional year a project drags on adds roughly 15 percent to the cost overrun, so a vendor that cannot hold a schedule compounds the damage over time. Much of that gap traces back to unclear ownership and churn on the delivery side, which is exactly what you are trying to screen for here. This is also the point to sanity-check culture and communication fit, which our guide on [how to choose a custom software development company](/blog/how-to-choose-a-custom-software-development-company) covers in more depth.

## Technical and architecture due diligence

A vendor can talk fluently about architecture and still ship fragile software. Ask for evidence, not adjectives.

Request a walkthrough of a recent system they built. Have them explain the stack, why they chose it, and what they would do differently now. Strong teams answer with trade-offs. Weak ones answer with brand names. Look for a modern, maintainable stack (React, Next.js, Node.js, Python, TypeScript, PostgreSQL, and infrastructure managed with tools like Kubernetes and Terraform) rather than a pile of whatever was convenient.

Ask how they handle testing, code review, and deployment. A team that describes automated tests, pull-request reviews, and a CI/CD pipeline is telling you their code has guardrails. A team that shrugs is telling you the guardrails are you. Confirm they can show a working demo on a regular cadence, because a two-week sprint that ends in something you can click is the single best signal that a project is real. The CHAOS data backs this up: the projects that succeed are the ones with continuous user involvement and a clear, testable statement of requirements, not the ones with the longest planning documents.

## Security, privacy, and SOC 2 checks

Security due diligence scales with your risk. A marketing microsite needs less scrutiny than a platform holding customer financial or health data, and the vendor you hire becomes part of your attack surface the moment they touch production. The IBM 2024 Cost of a Data Breach report put the global average breach at [$4.88 million, up 10 percent year over year](https://www.ibm.com/think/insights/whats-new-2024-cost-of-a-data-breach-report), and Verizon's 2024 DBIR found that third parties were involved in [15 percent of breaches, a 68 percent jump over the prior year](https://www.verizon.com/business/resources/reports/dbir/). Your vendor's hygiene is now your exposure.

- Access control. Who on the vendor side can touch your production systems, and how is that access granted and revoked?
- Secrets and credentials. How are API keys, database passwords, and cloud accounts stored and shared?
- Compliance posture. If you need SOC 2, HIPAA, or specific data-residency guarantees, ask how the vendor supports them and what evidence they can produce.
- Data handling. Where does your data live during development, and is production data ever copied into test environments?

The dominant cost in a breach is not the forensics. IBM found that lost business, operational downtime, and post-breach customer and third-party response accounted for about $2.8 million of the $4.88 million average, which is the part that lands on you when a vendor's mistake takes your platform offline. You are running a vendor risk assessment here, so document the answers rather than trusting a verbal yes, and get any SOC 2 report or attestation in writing before production access is granted.

## Legal, IP, and contract due diligence

This is where buyers get burned quietly, often months after launch. Read the contract with the assumption that the relationship might end badly.

The central question is ownership. You should own 100 percent of the intellectual property: the source code, the repository, the CI/CD configuration, the credentials, and the runbook, all handed over on delivery. If the contract assigns IP only after full payment, or licenses the code to you instead of transferring it, you do not own your software. Our deeper dive on [custom software contract terms you should negotiate](/blog/custom-software-contract-terms-to-negotiate) breaks down the specific clauses.

Also confirm acceptance criteria are written into the agreement with measurable definitions of done, that change-order mechanics are spelled out, and that termination gives you a clean exit with a transition plan. Given that nearly half of large projects overrun, the escape hatch matters as much as the happy path.

## Delivery track record and references

Portfolios are curated. References are where you find the truth, if you ask the right people the right questions.

Ask to speak with a client whose project shipped and one whose project hit trouble. The second call is more informative. On the call, avoid yes-or-no questions. Ask what surprised them, how the vendor handled a missed estimate, who they actually worked with day to day, and whether they would hire the firm again for something harder. The [25 questions to ask a software development company](/blog/questions-to-ask-a-software-development-company) list gives you a script for both the vendor and their references.

Verify the work exists. If a case study cites a live product, find it. If it cites an internal tool, ask for a screen-share. A portfolio you cannot verify is a story, not evidence. Two candid reference calls will tell you more than any polished deck, because the reference who lived through a slipped deadline knows exactly how the vendor behaves when a project stops going to plan, and that behavior is what you are actually buying.

## Scoring and documenting your findings

Due diligence only helps if you can compare vendors fairly and defend the decision later. Turn your notes into a simple scorecard, and anchor the weights to the failure modes the research keeps surfacing.

| Area | Weight | What a strong answer looks like | Why it matters |
| --- | --- | --- | --- |
| Team and continuity | High | Named senior staff, low turnover, employees not subcontractors | Churn drives the 45% budget overrun McKinsey found |
| Technical depth | High | Trade-off reasoning, tests, CI/CD, working demos | Demos and user involvement separate the 16% that succeed |
| Security and compliance | Medium to high | Clear access controls, evidence for required standards | Third parties factored into 15% of 2024 breaches |
| IP and contract | High | Full ownership on delivery, measurable acceptance criteria | Prevents the quiet lock-in that surfaces post-launch |
| References | High | Verifiable work, candid clients, willingness to rehire | The failure call tells you more than the success call |

Weight the rows for your situation, score each vendor, and write down the reasoning behind each score while it is fresh. That record turns a gut feeling into a procurement checklist your stakeholders can review.

Run this diligence before you sign, not after the first missed milestone. When you are ready to test a shortlist against real requirements, you can [start a project](/#contact) or browse more buyer guidance on [the blog](/blog).
