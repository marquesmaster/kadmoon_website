---
title: "Custom software contract terms you should negotiate"
description: "The custom software contract terms that decide who owns the code, who pays for defects, and how you exit. A buyer's guide to negotiating a fair agreement."
category: "Buyer's Guide"
primaryKeyword: "custom software contract terms"
tags: ["software development agreement", "msa and sow", "negotiate software contract"]
---

Most software disputes trace back to a contract that was signed too fast. The pricing looked fine and the timeline felt reasonable, so the legal terms got a quick skim. Then a defect shows up in month four, or the vendor wants a change order for something you assumed was included, and the paperwork suddenly matters a great deal. The custom software contract terms below are the ones worth slowing down for, because each one shifts real risk between you and the firm building your system.

## MSA vs SOW: what each should cover

A well-structured engagement usually splits into two documents. The master services agreement (MSA) sets the durable legal frame: IP ownership, confidentiality, liability, warranties, dispute resolution, termination. It rarely changes. The statement of work (SOW) covers one specific project: scope, deliverables, milestones, price, acceptance criteria, timeline. You might sign one MSA and several SOWs over the years.

Keep the split clean. Pricing and scope belong in the SOW so you can start a new project without renegotiating your legal terms. Ownership and liability belong in the MSA so they apply to everything. When a vendor tries to bury IP assignment inside a single SOW, ask why. It usually means the next SOW quietly resets the terms.

## IP assignment and source-code escrow

The single term buyers get wrong most often is intellectual property. Under US law, "work made for hire" does not automatically transfer ownership of custom code to the client the way people assume. You want an explicit present-tense assignment: the vendor assigns all right, title, and interest in the deliverables to you, and that assignment survives the contract. Watch for language that grants you only a "license to use" what you paid to build. A license is not ownership.

Ownership should be concrete, not aspirational. On delivery you should receive the repository, the CI/CD pipelines, infrastructure-as-code, credentials, and a runbook. At Kadmoon the client owns 100% of that from the start, which is the standard to hold any vendor to. Escrow is a middle path some firms offer: the code sits with a third party and releases to you if the vendor goes under. Escrow is a weak substitute for owning the repo outright. If you can negotiate direct ownership, do that instead. For a deeper look, see [who owns custom software IP](/blog/who-owns-custom-software-ip) and [do you own the source code](/blog/do-you-own-the-source-code).

## Warranty, acceptance, and defect windows

Acceptance is the moment you formally agree a deliverable meets the spec. Define it precisely. Vague acceptance ("client will review and approve") lets a vendor treat silence as sign-off. Better language ties acceptance to the measurable criteria in the SOW, gives you a defined review period (say 10 business days), and lets you reject with specific reasons that the vendor must fix before the clock restarts.

The warranty period is separate. It covers defects found after acceptance. Negotiate for a window (30 to 90 days is common) during which the vendor fixes bugs in delivered work at no charge. Define a bug as a deviation from the agreed spec, not "anything you dislike later," so both sides know what qualifies. Tie the final milestone payment to the end of a clean warranty period and the vendor stays motivated through launch.

## Change-order and scope-change mechanics

Scope will change. The question is whether the process is orderly or a source of friction. A good change-order clause spells out how a change gets requested, estimated, priced, and approved in writing before any work starts. It should say that no change proceeds without your written sign-off, which protects you from surprise invoices.

The clause interacts heavily with your pricing model. Under fixed price, changes are where the real negotiation happens, so the process needs teeth. Under time and materials, the guardrail is a not-to-exceed cap and regular reporting. If you are still weighing the two, [fixed price vs time and materials](/blog/fixed-price-vs-time-and-materials) walks through how each handles scope. Either way, insist that estimates for changes come with the same detail as the original quote.

## Liability, indemnification, and data terms

Liability caps are normal. Vendors will not accept unlimited exposure, and you should not expect them to. The negotiation is about where the cap sits and what falls outside it. A common structure caps general liability at the fees paid over some period, then carves out exceptions that are not capped: breach of confidentiality, IP infringement, gross negligence, and data-security failures. Push to keep those carve-outs.

Indemnification matters most for IP. If the vendor uses a third-party library that turns out to infringe someone's patent, you do not want to be the one sued. An IP indemnity shifts that defense to the vendor. If your system handles regulated or personal data, add data-protection terms: security obligations, breach-notification timelines, and if relevant, HIPAA language and a business associate agreement. Spell out who is responsible when data is exposed.

## Termination and transition assistance

Every contract should assume the relationship might end, amicably or not. Negotiate termination for convenience (you can exit with notice and pay for work done) alongside termination for cause (either side can exit on a material, uncured breach). Without a convenience clause you can be locked into a vendor you have lost confidence in.

The term people forget is transition assistance. On termination, the vendor should hand over all code, credentials, documentation, and data in a usable form, and provide a defined number of hours to help your next team pick up the work. Put a rate and an hour count in writing. Otherwise a departing vendor has every incentive to make the handoff slow and painful.

| Term | What to push for | Red flag to avoid |
| --- | --- | --- |
| IP | Present-tense full assignment | "License to use" only |
| Acceptance | Tied to measurable criteria | Silence equals approval |
| Warranty | 30 to 90 day free-fix window | No warranty at all |
| Termination | For convenience plus transition help | Locked-in, no exit |

None of this requires you to be a lawyer, and none of it should be adversarial with a firm that plans to do good work. Fair vendors expect these terms and often propose them first. The point of reading a contract closely is to surface the assumptions before money changes hands. If you want a partner who writes acceptance criteria and IP ownership into the agreement as a matter of course, [get a technical proposal](/#contact) or read more on [how to choose a software partner](/#how-to-choose). You can also browse [the blog](/blog) for related buyer guides.
