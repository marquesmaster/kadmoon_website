---
title: "The software vendor due diligence checklist"
description: "A software vendor due diligence checklist covering company, technical, security, and legal checks so you can evaluate a software firm before signing."
category: "Buyer's Guide"
primaryKeyword: "software vendor due diligence checklist"
tags: ["vendor risk assessment", "software procurement checklist", "evaluate software firm"]
---

Due diligence on a software vendor is the work you do before money changes hands, and it is the cheapest insurance you will ever buy. A signed statement of work does not protect you from a firm that cannot deliver, cannot be reached, or will not hand over your code. This software vendor due diligence checklist walks through the areas that actually predict trouble, with the specific questions and documents to ask for at each stage.

## Company and team due diligence

Start with the firm itself. You want to know who you are contracting with, how long they have operated, and whether the people who will build your software are employees or a rotating cast of subcontractors.

- Legal entity, years in business, and physical location. A US firm you can reach during your working hours behaves differently from a broker reselling offshore hours.
- Employment model. Ask directly whether engineers are full-time staff or contractors. Kadmoon, for example, works with a senior in-house team and no subcontractors, which matters for continuity and accountability.
- Team size and the specific people assigned to you. Names, seniority, and whether they are shared across other accounts.
- Financial stability. You do not need audited statements, but a firm that cannot make payroll mid-project becomes your problem.

This is also the point to sanity-check culture and communication fit, which our guide on [how to choose a custom software development company](/blog/how-to-choose-a-custom-software-development-company) covers in more depth.

## Technical and architecture due diligence

A vendor can talk fluently about architecture and still ship fragile software. Ask for evidence, not adjectives.

Request a walkthrough of a recent system they built. Have them explain the stack, why they chose it, and what they would do differently now. Strong teams answer with trade-offs. Weak ones answer with brand names. Look for a modern, maintainable stack (React, Next.js, Node.js, Python, TypeScript, PostgreSQL, and infrastructure managed with tools like Kubernetes and Terraform) rather than a pile of whatever was convenient.

Ask how they handle testing, code review, and deployment. A team that describes automated tests, pull-request reviews, and a CI/CD pipeline is telling you their code has guardrails. A team that shrugs is telling you the guardrails are you. Confirm they can show a working demo on a regular cadence, because a two-week sprint that ends in something you can click is the single best signal that a project is real.

## Security, privacy, and SOC 2 checks

Security due diligence scales with your risk. A marketing microsite needs less scrutiny than a platform holding customer financial or health data.

- Access control. Who on the vendor side can touch your production systems, and how is that access granted and revoked?
- Secrets and credentials. How are API keys, database passwords, and cloud accounts stored and shared?
- Compliance posture. If you need SOC 2, HIPAA, or specific data-residency guarantees, ask how the vendor supports them and what evidence they can produce.
- Data handling. Where does your data live during development, and is production data ever copied into test environments?

You are running a vendor risk assessment here, so document the answers rather than trusting a verbal yes.

## Legal, IP, and contract due diligence

This is where buyers get burned quietly, often months after launch. Read the contract with the assumption that the relationship might end badly.

The central question is ownership. You should own 100% of the intellectual property: the source code, the repository, the CI/CD configuration, the credentials, and the runbook, all handed over on delivery. If the contract assigns IP only after full payment, or licenses the code to you instead of transferring it, you do not own your software. Our deeper dive on [custom software contract terms you should negotiate](/blog/custom-software-contract-terms-to-negotiate) breaks down the specific clauses.

Also confirm acceptance criteria are written into the agreement with measurable definitions of done, that change-order mechanics are spelled out, and that termination gives you a clean exit with a transition plan.

## Delivery track record and references

Portfolios are curated. References are where you find the truth, if you ask the right people the right questions.

Ask to speak with a client whose project shipped and one whose project hit trouble. The second call is more informative. On the call, avoid yes-or-no questions. Ask what surprised them, how the vendor handled a missed estimate, who they actually worked with day to day, and whether they would hire the firm again for something harder. The [25 questions to ask a software development company](/blog/questions-to-ask-a-software-development-company) list gives you a script for both the vendor and their references.

Verify the work exists. If a case study cites a live product, find it. If it cites an internal tool, ask for a screen-share. A portfolio you cannot verify is a story, not evidence.

## Scoring and documenting your findings

Due diligence only helps if you can compare vendors fairly and defend the decision later. Turn your notes into a simple scorecard.

| Area | Weight | What a strong answer looks like |
| --- | --- | --- |
| Team and continuity | High | Named senior staff, low turnover, employees not subcontractors |
| Technical depth | High | Trade-off reasoning, tests, CI/CD, working demos |
| Security and compliance | Medium to high | Clear access controls, evidence for required standards |
| IP and contract | High | Full ownership on delivery, measurable acceptance criteria |
| References | High | Verifiable work, candid clients, willingness to rehire |

Weight the rows for your situation, score each vendor, and write down the reasoning behind each score while it is fresh. That record turns a gut feeling into a procurement checklist your stakeholders can review.

Run this diligence before you sign, not after the first missed milestone. When you are ready to test a shortlist against real requirements, you can [start a project](/#contact) or browse more buyer guidance on [the blog](/blog).
