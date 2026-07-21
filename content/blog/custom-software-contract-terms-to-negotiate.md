---
title: "Custom software contract terms you should negotiate"
description: "The custom software contract terms that decide who owns the code, who pays for defects, and how you exit. A buyer's guide to negotiating a fair agreement."
category: "Buyer's Guide"
primaryKeyword: "custom software contract terms"
tags: ["software development agreement", "msa and sow", "negotiate software contract", "ip assignment"]
---

Most software disputes trace back to a contract that was signed too fast. The pricing looked fine and the timeline felt reasonable, so the legal terms got a quick skim. Then a defect shows up in month four, or the vendor wants a change order for something you assumed was included, and the paperwork suddenly matters a great deal. This is not a rare outcome. The Standish Group's CHAOS research has for years found that only about a third of software projects finish on time, on budget, and on scope, with [roughly two-thirds landing as challenged or outright failed](https://budgetoverrun.com/studies/standish-chaos-report), and large projects fare worse, succeeding just 9 percent of the time. The contract is where you decide who carries the risk when a project drifts into that majority. The terms below are the ones worth slowing down for, because each one shifts real exposure between you and the firm building your system.

## MSA vs SOW: what each should cover

A well-structured engagement usually splits into two documents. The master services agreement (MSA) sets the durable legal frame: IP ownership, confidentiality, liability, warranties, dispute resolution, termination. It rarely changes. The statement of work (SOW) covers one specific project: scope, deliverables, milestones, price, acceptance criteria, timeline. You might sign one MSA and several SOWs over the years.

Keep the split clean. Pricing and scope belong in the SOW so you can start a new project without renegotiating your legal terms. Ownership and liability belong in the MSA so they apply to everything. When a vendor tries to bury IP assignment inside a single SOW, ask why. It usually means the next SOW quietly resets the terms, and you end up re-litigating ownership every time the work expands.

## IP assignment and source-code escrow

The single term buyers get wrong most often is intellectual property, and the reason is a specific gap in US copyright law. Under the Copyright Act, "work made for hire" only covers work by an employee or one of nine narrowly defined categories of commissioned work. The US Copyright Office spells this out in [Circular 30](https://www.copyright.gov/circs/circ30.pdf): software is not one of those nine categories. When an independent contractor or an outside firm writes your code, the developer holds the copyright by default, no matter how much you paid, unless there is a signed written assignment transferring it to you.

That is why the label "work for hire" alone does not protect you. You want an explicit present-tense assignment: the vendor assigns all right, title, and interest in the deliverables to you, and that assignment survives the contract. Watch for language that grants you only a "license to use" what you paid to build. A license is not ownership, and a firm that only licenses the code keeps the leverage.

Ownership should be concrete, not aspirational. On delivery you should receive the repository, the CI/CD pipelines, infrastructure-as-code, credentials, and a runbook. At Kadmoon the client owns 100 percent of that from the start, which is the standard to hold any vendor to. Escrow is a middle path some firms offer: the code sits with a third party and releases to you only if the vendor goes under. Escrow is a weak substitute for owning the repo outright, and it does nothing for you in a normal dispute where the vendor is still in business but uncooperative. If you can negotiate direct ownership, do that instead. For a deeper look, see [who owns custom software IP](/blog/who-owns-custom-software-ip) and [do you own the source code](/blog/do-you-own-the-source-code).

## Warranty, acceptance, and defect windows

Acceptance is the moment you formally agree a deliverable meets the spec. Define it precisely. Vague acceptance ("client will review and approve") lets a vendor treat silence as sign-off. Better language ties acceptance to the measurable criteria in the SOW, gives you a defined review period (say 10 business days), and lets you reject with specific reasons that the vendor must fix before the clock restarts.

The warranty period is separate. It covers defects found after acceptance. Negotiate for a window (30 to 90 days is common) during which the vendor fixes bugs in delivered work at no charge. Define a bug as a deviation from the agreed spec, not "anything you dislike later," so both sides know what qualifies. Tie the final milestone payment to the end of a clean warranty period and the vendor stays motivated through launch. That single link between money and a working system does more to protect you than any amount of aspirational language earlier in the document.

## Change-order and scope-change mechanics

Scope will change. The only question is whether the process is orderly or a source of friction, and the odds are high that it matters: PMI's Pulse of the Profession research has found [more than half of projects experience scope creep](https://www.pmi.org/learning/library/scope-creep-rising-11308), with the 2018 study putting it at 52 percent. A good change-order clause spells out how a change gets requested, estimated, priced, and approved in writing before any work starts. It should say that no change proceeds without your written sign-off, which protects you from surprise invoices and gives you a paper trail if a dispute arises.

The clause interacts heavily with your pricing model. Under fixed price, changes are where the real negotiation happens, so the process needs teeth. Under time and materials, the guardrail is a not-to-exceed cap and regular reporting. If you are still weighing the two, [fixed price vs time and materials](/blog/fixed-price-vs-time-and-materials) walks through how each handles scope. Either way, insist that estimates for changes come with the same detail as the original quote, so a small request cannot quietly become a large invoice.

## Liability, indemnification, and data terms

Liability caps are normal. Vendors will not accept unlimited exposure, and you should not expect them to. The negotiation is about where the cap sits and what falls outside it. A common structure caps general liability at the fees paid over some period (often the trailing 12 months), then carves out exceptions that are not capped: breach of confidentiality, IP infringement, gross negligence, and data-security failures. Push to keep those carve-outs, because those are the failures that cost far more than a year of fees.

Indemnification matters most for IP. If the vendor uses a third-party library that turns out to infringe someone's patent, you do not want to be the one sued. An IP indemnity shifts that defense to the vendor. If your system handles regulated or personal data, add data-protection terms: security obligations, breach-notification timelines, and if relevant, HIPAA language and a business associate agreement. Spell out who is responsible when data is exposed, because "we will discuss it later" always favors the party holding the code.

| Term | What to push for | Red flag to avoid |
| --- | --- | --- |
| IP | Present-tense full assignment (survives contract) | "License to use" only |
| Acceptance | Tied to measurable criteria, defined review window | Silence equals approval |
| Warranty | 30 to 90 day free-fix window, defect = spec deviation | No warranty at all |
| Liability | Cap with carve-outs for IP, data, confidentiality | Cap covers everything |
| Termination | For convenience plus transition hours | Locked-in, no exit |

## Termination and transition assistance

Every contract should assume the relationship might end, amicably or not. Negotiate termination for convenience (you can exit with notice and pay for work done) alongside termination for cause (either side can exit on a material, uncured breach). Without a convenience clause you can be locked into a vendor you have lost confidence in, which is a bad place to be given how often projects run into trouble.

The term people forget is transition assistance. On termination, the vendor should hand over all code, credentials, documentation, and data in a usable form, and provide a defined number of hours to help your next team pick up the work. Put a rate and an hour count in writing. Otherwise a departing vendor has every incentive to make the handoff slow and painful, and you will pay for that leverage gap later.

None of this requires you to be a lawyer, and none of it should be adversarial with a firm that plans to do good work. Fair vendors expect these terms and often propose them first. The point of reading a contract closely is to surface the assumptions before money changes hands, while you still have negotiating room. If you want a partner who writes acceptance criteria and IP ownership into the agreement as a matter of course, [get a technical proposal](/#contact) or read more on [how to choose a software partner](/#how-to-choose). You can also browse [the blog](/blog) for related buyer guides.
