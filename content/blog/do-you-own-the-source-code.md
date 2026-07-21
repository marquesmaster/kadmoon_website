---
title: "Do you own the source code? Custom software ownership explained"
description: "Do you own the source code of custom software? What ownership means for repos, credentials, licenses, and the contract language that transfers rights to you."
category: "Custom Software"
primaryKeyword: "do you own the source code"
tags: ["source code ownership", "own your software code", "code ownership contract", "work made for hire"]
---

You paid for the software, so you own it. That assumption is where a lot of buyers get burned. Ownership of custom software is not automatic. It is a set of specific rights that either live in your contract or do not, and the gaps only show up when you try to leave or hand the system to someone else. This is a plain explanation of what owning the code actually means and how to make sure you have it.

## What "owning the code" actually means

Owning the source code means more than having a copy of some files. It means you hold the intellectual property rights, you can modify it, run it, and hire anyone you want to work on it, and no one can stop you. Under US copyright law this does not happen by default. Section 201(a) of the Copyright Act vests copyright initially in the author, meaning the person who actually wrote the code, and [17 U.S.C. 201(a)](https://www.copyright.gov/title17/92chap1.html#201) is explicit that ownership starts with the creator, not whoever paid the invoice.

People assume the "work made for hire" doctrine solves this. It usually does not. A work counts as made for hire only when an employee creates it inside their job, or when it is specially commissioned and falls into one of nine narrow categories listed in [17 U.S.C. 101](https://www.copyright.gov/title17/92chap1.html#101): contributions to collective works, parts of movies, translations, supplementary works, compilations, instructional texts, tests, test answers, and atlases. Software is not on that list. So when an outside firm or freelancer writes your application, the work made for hire route does not apply on its own, and the Supreme Court confirmed in Community for Creative Non-Violence v. Reid (1989) that an independent contractor keeps the copyright absent a written agreement saying otherwise.

That is why the contract does the real work. To move ownership from the firm to you, you need an actual transfer, and [17 U.S.C. 204(a)](https://www.copyright.gov/title17/92chap1.html#204) requires that transfer to be in writing and signed. A handshake, an invoice marked paid, or a verbal "it's all yours" does not transfer copyright. Real ownership has several parts: the code, the written assignment of rights, the credentials and infrastructure to run it, and enough documentation that a new team can pick it up. Miss any one and your ownership has a hole. For the legal framing in more depth, our guide on [who owns the IP in custom software](/blog/who-owns-custom-software-ip) covers assignment clauses in detail.

## Repositories, credentials, and access

Code you cannot access is code you do not really control. The repository is the obvious piece, but it is not the only one. To actually operate your software you need the CI/CD pipeline that builds and deploys it, the cloud accounts it runs on, the domain and DNS, third-party service keys, and the database credentials.

A common trap is a firm that hosts everything under its own accounts and gives you a login rather than ownership. On the day you part ways, you discover the deployment pipeline, the monitoring, and the production environment all belong to them. It helps to list the assets explicitly and decide, for each, who holds the keys:

| Asset | Who should own it | Risk if the firm holds it |
| --- | --- | --- |
| Source repository | You | You cannot hire anyone else to change the code |
| CI/CD pipeline | You | You cannot build or deploy without the firm |
| Cloud accounts and infrastructure | You | Production lives on someone else's tenancy |
| Domain, DNS, and TLS certs | You | The firm controls how customers reach you |
| Third-party and database credentials | You (in your vault) | You cannot rotate keys or cut off access |

The clean arrangement is that these assets live in accounts you own from the start, or transfer to you cleanly on delivery. At Kadmoon the repository, CI/CD, credentials, and runbook are yours on delivery, because holding them hostage is not a business model we are interested in.

## Licensed components inside your app

Almost no modern application is written entirely from scratch. Your software will include open-source libraries and possibly commercial components, and those come with their own licenses. Owning your code does not mean you own those dependencies. It means you have the right to use them as their licenses allow.

This matters for two reasons. First, some licenses carry obligations, and a few copyleft licenses can impose requirements on how you distribute your own code. A responsible firm tracks these and avoids licenses that conflict with your plans. Second, any commercial third-party component your app depends on is a cost and a dependency you inherit. Ask for a full inventory of what is inside: the open-source libraries, their licenses, and any paid services. That list is part of knowing what you own and what you merely rent.

## Handover, documentation, and portability

The difference between owning software and being able to use it is documentation. A pile of code with no README, no architecture notes, and no deployment instructions is technically yours and practically useless to anyone but the original authors. That is a subtle form of lock-in even when the contract says you own everything.

Insist on a proper handover: a runbook that explains how to build, deploy, and operate the system, architecture documentation that describes how the pieces fit, and environment setup a new engineer can follow. Portability is the test. Could a competent team you hired tomorrow clone the repo, stand up the environment, and make a change safely? If yes, you own working software. If no, you own a liability. This is one reason our [custom software development process](/blog/custom-software-development-process) treats documentation as a deliverable, not an afterthought.

## Contract language to insist on

Ownership is settled in the agreement, so read those clauses before you sign. Given that copyright starts with the author and a transfer has to be written and signed under 17 U.S.C. 204(a), a few provisions do most of the work:

- A present-tense assignment of all IP in the deliverables to you, effective on payment, written as an assignment rather than a license. Present-tense wording ("Contractor hereby assigns") avoids the gap that a promise to assign later can leave open.
- Explicit delivery of the repository, CI/CD configuration, credentials, and infrastructure access on completion or termination.
- A documentation and handover obligation, so delivery is not "done" until you can operate the system.
- A component inventory listing open-source and third-party licenses.
- Transition assistance if the relationship ends, so you are not stranded mid-flight.

If you are negotiating the broader agreement, our list of [custom software contract terms to negotiate](/blog/custom-software-contract-terms-to-negotiate) puts these in context with warranty, liability, and change-order terms.

If for some reason you cannot hold the repository directly, a source-code escrow is the fallback. A neutral third party holds a current copy of the code and hands it to you if defined events happen, such as the firm going out of business or failing to support the software. Escrow is a weaker arrangement than owning the repo outright, because it only releases on trigger conditions and can go stale between deposits, but it is far better than having no path to the code at all. Treat it as a safety net for a bad relationship, not a substitute for the assignment and direct access you actually want.

## How to avoid vendor hostage situations

The hostage situation is familiar: a firm controls your code, your infrastructure, and your knowledge, and every request to change or leave comes with leverage against you. The way out is to never be in that position, which means setting ownership up correctly at the start rather than fighting for it at the end.

Do a few concrete things. Own the cloud and repository accounts yourself where you can, so access never depends on the firm's goodwill. Ask for the runbook and documentation as you go, not as a final promise. Keep credentials in your own vault. And favor firms whose model already assumes you own everything, since they have no incentive to build lock-in. A partner that would let you leave cleanly is exactly the kind you rarely need to leave. If you want to test a firm on this before committing, ask them directly how ownership works on their projects, including whether they use a present-tense IP assignment, then [start a project](/#contact) with the ownership terms written down.
