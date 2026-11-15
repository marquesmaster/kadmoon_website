---
title: "Getting the business to agree on what a number means"
description: "Why the hardest part of consistent reporting is often not technical but getting the business to agree on definitions, and how to run that agreement so your numbers finally mean one thing."
category: "Power BI"
primaryKeyword: "agreeing on metric definitions"
tags: ["Power BI", "definitions", "governance", "semantic model", "alignment"]
takeaways:
  - "The hardest part of consistent reporting is often not building the model but getting the business to agree on what each number means."
  - "Numbers disagree partly because of scattered calculations and partly because people genuinely define them differently."
  - "Agreeing on definitions is a business conversation, not a technical task, and it has to happen before the model can encode one version."
  - "The agreement is worth the effort, because a definition everyone accepts is what makes a number trustworthy across the organization."
  - "A good partner facilitates this agreement rather than imposing definitions, because definitions the business does not accept do not hold."
faqs:
  - q: "Why do our numbers disagree even after we built reporting?"
    a: "Often because part of the disagreement is not technical but definitional: different parts of the business genuinely define the same number differently. Scattered calculations, the same metric computed slightly differently in each report, are one cause, and a governed model fixes those by defining each metric once. But frequently people also mean different things, sales counts revenue at sale, finance at invoice, another team at collection, and no model resolves that, because there is no single agreed meaning to encode. If your numbers still disagree after building reporting, it is worth checking whether the cause is drifting calculations or genuine disagreement about what the number means, because the second needs agreement, not just a model."
  - q: "Whose job is it to decide what a metric means?"
    a: "The business's, because defining what a number means is a business decision, not a technical one. Whether revenue is counted at sale, invoice, or collection is a question about what the organization wants to measure and manage by, and the answer has to come from the parts of the business that hold the different definitions, settling on one they accept. A partner or analyst facilitates this, surfacing the differences and the trade-offs and pushing toward a decision, but the decision itself belongs to the business. Definitions handed down by whoever builds the model, rather than agreed by the business, tend not to hold, because the parts that define the number differently keep their own version."
  - q: "Why is agreeing on definitions worth the effort?"
    a: "Because a definition everyone accepts is what makes a number trusted across the organization, and trusted numbers are the whole point of reporting. A number computed on a definition that part of the business rejects is not believed by that part, however consistently the model applies it, so the reporting fails to reach them. The agreement gives the number organization-wide acceptance, so it is acted on rather than disputed. Consistency on a definition the business genuinely agreed to is trusted; consistency on one half the business rejects is hollow. The effort of reaching the agreement is the price of numbers the whole organization will stand behind, which is exactly what the reporting is for."
  - q: "Can't we just let the technical team pick definitions to move faster?"
    a: "You can, and it tends to backfire, because definitions the business did not agree to do not hold. A technical team picking sensible definitions and encoding them produces a consistent model that the dissenting parts of the business still argue with, keeping their own numbers, so the disagreement persists under a veneer of consistency. Moving fast by skipping the agreement just defers the problem to when people notice the model's number does not match theirs. It is faster in the long run to do the agreement work upfront, reaching definitions the business accepts, so the resulting consistency is genuinely trusted rather than technically present and practically disputed."
---

There is a part of building trustworthy reporting that nobody puts on the project plan, and it is often the hardest: getting the business to agree on what each number actually means. The technical work of building a governed model where metrics are defined once is real, but it assumes a prior agreement, that the organization has decided what revenue, or margin, or an active customer, actually is. Frequently it has not, and different parts of the business genuinely define these differently. Until that is resolved, no model can make the numbers agree, because there is no single meaning to encode. Here is why this matters and how to get the agreement that makes consistent reporting possible.

## Two reasons numbers disagree

When an organization's numbers disagree, there are two distinct causes, and it is important to separate them, because they need different fixes.

The first is **scattered calculations**: the same metric is computed in different reports with slightly different logic, not because anyone intended different meanings but because each report was built separately and the logic drifted. This is a technical problem, and a governed model solves it by defining the metric once.

The second is deeper: people **genuinely define the number differently.** Sales counts revenue at the point of sale; finance counts it at invoice; another team counts it at cash collection. These are not drifting calculations of one agreed definition; they are different definitions, each reasonable, held by different parts of the business. No technical fix resolves this, because there is no single agreed meaning to encode. The disagreement is not an accident of implementation; it is a real difference in what people mean.

Most organizations have both problems, and they often assume the whole thing is the first, technical, kind. But the second kind, genuine disagreement about meaning, is frequently present too, and it is the harder one, because it cannot be solved by building anything. It has to be solved by **agreement**, which is a different kind of work entirely.

## Agreement is a business conversation

Resolving genuine definitional disagreement is a **business conversation, not a technical task.** The question of whether revenue should be counted at sale, invoice, or collection is a business question about what the organization means and wants to manage by, and the answer has to come from the business, not from whoever builds the model.

This matters because it determines who has to be involved and how the work is done. You cannot resolve a definitional disagreement by having a developer pick a definition; you resolve it by getting the relevant parts of the business, the people who hold the different definitions, to agree on one. That agreement is a discussion about what the number should mean for the organization, weighing the different views and settling on one that the business accepts. It is organizational and sometimes political work, because people are attached to their definitions and the definitions sometimes reflect real differences in how parts of the business operate.

And crucially, this agreement has to happen **before the model can encode one version.** The governed model's power is that it defines each metric once, but it can only do that once the organization has decided what that one definition is. The agreement is the prerequisite; the model is what makes the agreed definition consistent everywhere afterward. Skipping the agreement and having the model encode some definition that the business has not actually accepted just moves the disagreement, because the parts of the business that define the number differently will not accept the model's number.

## Why the agreement is worth the effort

Getting the business to agree on definitions is effortful and sometimes uncomfortable, and it is worth it, because a definition everyone accepts is what makes a number **trustworthy across the organization.**

The whole point of consistent reporting is that people act on the numbers with confidence, and they only do that if they believe the numbers, which means accepting the definitions behind them. A number computed on a definition that half the organization rejects is not trusted by that half, no matter how consistently the model applies it, because they do not accept what it is measuring. The agreement is what gives the number organization-wide acceptance, so it is trusted everywhere rather than disputed by the parts that would have defined it differently.

So the agreement is not bureaucratic overhead; it is what makes the eventual consistency meaningful. Consistency on a definition nobody argued about but half the business rejects is hollow; consistency on a definition the business genuinely agreed to is trusted, which is the actual goal. The effort of reaching the agreement is the price of numbers the whole organization will stand behind, and that is a price worth paying, because trusted numbers are the entire purpose of the reporting.

## A partner facilitates, not imposes

Because the agreement is a business conversation about meaning, a good partner's role is to **facilitate it, not impose definitions.** This is a subtle but important point about how to get definitions right.

A partner who simply picks definitions and encodes them, however sensible the choices, produces definitions the business may not accept, and definitions the business does not accept do not hold, because the dissenting parts keep their own numbers. A partner who instead facilitates the agreement, surfacing the different definitions, helping the business see the trade-offs, pushing toward a decision, and then encoding what the business actually agreed to, produces definitions that hold, because the business owns them. The difference is between definitions handed down and definitions agreed, and only the latter are genuinely accepted.

This is why getting definitions right is collaborative work between the partner and the business. The partner brings the discipline, the experience of what makes a good definition, and the facilitation; the business brings the decision about what the numbers should mean for it. Together they reach definitions that are both sound and accepted, which is what the model then encodes. A partner who tries to shortcut this by imposing definitions produces a technically consistent estate that the business still argues about, which defeats the purpose.

## The hidden foundation of trusted numbers

The practical lesson is that building trustworthy reporting has a step that is easy to miss and often the hardest: getting the business to genuinely agree on what each number means. The governed model gets the credit for consistent numbers, and it deserves much of it, but the model can only encode one definition once the organization has agreed on one, and reaching that agreement is business work, not technical work.

So an organization serious about trustworthy reporting has to be willing to do this work: convene the parts of the business that define key numbers differently, facilitate an honest conversation about what each number should mean, reach a decision the business accepts, and only then have the model encode it. This is effortful and sometimes contentious, but it is the foundation that makes the numbers trusted across the whole organization rather than consistent on paper and disputed in practice. The definitions everyone accepts are the hidden foundation of trusted reporting, and getting the business to agree on them, with a partner facilitating rather than imposing, is what turns a technically consistent model into numbers the organization actually believes. That belief is the whole point, and it starts with agreement on what the numbers mean.
