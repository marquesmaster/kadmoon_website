---
title: "Who owns the IP in custom software? What buyers must know"
description: "Custom software IP ownership is not automatic. Learn how work-for-hire and assignment clauses, open-source, and escrow decide who really owns your code."
category: "Custom Software"
primaryKeyword: "custom software ip ownership"
tags: ["software intellectual property", "work for hire software", "own your source code"]
---

Here is the fact that surprises most buyers: paying for custom software does not automatically make you its owner. Under US copyright law, the person who writes the code often owns it by default, contract silence and all. If your agreement does not say otherwise, you may have bought a license to use software that your vendor still owns. That is not a rare edge case. It is the default outcome when nobody addresses ownership on paper.

## Default IP rules and why they surprise buyers

Copyright in a work generally belongs to its author the moment it is created. When you hire an outside firm to build software, the authors are that firm's engineers, not you. Absent specific contract language, the developer can end up holding copyright while you hold nothing more than an implied right to use what you paid for.

Buyers assume "I paid, so I own" the way they would for a custom-built table. Software is not a table. It is a copyrighted work, and copyright transfers only through explicit written terms. This is exactly why the ownership question belongs in the contract from the start, not in a hopeful conversation after delivery. If you are still assembling your evaluation process, [the software vendor due diligence checklist](/blog/software-vendor-due-diligence-checklist) puts IP terms where they belong: on the list before you sign.

## Work-for-hire vs assignment clauses

Two mechanisms transfer ownership, and good contracts often use both.

"Work made for hire" is a specific legal category. When it applies, the hiring party is treated as the author from the start. The catch is that the doctrine only covers certain types of work and certain relationships, and software commissioned from an independent firm does not always fit cleanly. Relying on work-for-hire language alone can leave a gap.

An assignment clause closes that gap. It says the vendor assigns all right, title, and interest in the work to you. A well-drafted contract typically pairs a work-for-hire provision with a present assignment as backup, so that whatever the work-for-hire doctrine does not capture, the assignment does. When you read a proposal, look for both. Our guide to [custom software contract terms you should negotiate](/blog/custom-software-contract-terms-to-negotiate) covers how these clauses sit inside the broader agreement.

## Third-party and open-source components

Almost no modern application is built entirely from code written just for you. Your app will include open-source libraries, and possibly commercial components or third-party APIs. You cannot own those outright, and no honest vendor will claim you do. What matters is that they are licensed in a way that lets you use, run, and modify your software freely, without a surprise obligation later.

Two things to confirm. First, the open-source licenses in your stack are permissive enough for your use, with no copyleft term that forces you to open-source your own code unexpectedly. Second, any commercial component or API is licensed to you, not to the vendor, so the license does not evaporate when the engagement ends. Ask for a list of third-party dependencies and their licenses. A team that engineers cleanly can produce it without drama, which is part of [what we build](/#capabilities) responsibly from day one.

## Source-code escrow and access

Owning the IP means little if you cannot get the code. Ownership on paper and access in practice are different things, and buyers sometimes discover the gap only when a relationship ends badly.

For most custom projects, the cleanest arrangement is direct, continuous access: you hold the repository, the CI/CD pipelines, and the credentials throughout, not just at the end. Kadmoon delivers exactly this, so the client owns 100% of the IP along with the repo, CI/CD, credentials, and a runbook on delivery. There is no moment where your software lives only on a vendor's machine.

Escrow is the alternative some buyers use with vendors who host the code themselves. A third party holds a copy of the source, released to you if the vendor fails, folds, or breaches. Escrow is a safety net for a situation you should try to avoid entirely. Full, direct access from the start is stronger than a locked copy you can only reach in a crisis. This is closely tied to whether you truly [own the source code](/blog/do-you-own-the-source-code), which is worth reading alongside this.

## Protecting IP in the contract

Put the protections in writing, and be specific. A contract that genuinely protects your ownership tends to include:

- A present assignment of all IP in the deliverables to you, backed by work-for-hire language.
- A clear statement that you receive the source code, repositories, and credentials, and when.
- A list of third-party and open-source components with their licenses.
- Confidentiality terms covering your data and business logic.
- A moral-rights waiver and a promise of further cooperation to perfect the assignment (signing any documents needed later).
- Clarity that the vendor will not reuse your specific business logic for a competitor.

Vague language is the enemy here. "Customer will own the deliverables" sounds fine and can still leave holes. The clauses that hold up name the source code, the repositories, and the assignment explicitly.

## Questions to ask before signing

Before you sign, get plain answers to a short list. The way a vendor responds tells you as much as the answers themselves.

- Do we own 100% of the IP in everything you build for us, and where does the contract say so?
- Do we get the repository, CI/CD, and credentials during the project, or only at the end?
- Which open-source and third-party components will be in our stack, and under what licenses?
- If we part ways, what exactly do we walk away with, and how fast?
- Will any of our custom business logic be reused for other clients?

A confident partner welcomes these questions because the answers are already true. A vendor who gets evasive is telling you something. For the wider set of signals to watch during vetting, [25 questions to ask a software development company](/blog/questions-to-ask-a-software-development-company) extends this list into process, security, and support.

Ownership should never be the thing you fight for after the work is done. Settle it in the contract, insist on direct access to the code, and you keep control of the asset you are paying to create. When you want a proposal that spells all of this out up front, you can [start a project](/#contact) and see the ownership terms in writing before anyone writes a line of code.
