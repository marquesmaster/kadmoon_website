---
title: "Taking over an inherited Power BI estate: what to check first"
description: "What to do when you inherit someone else's Power BI, from a departed employee or a previous vendor, how to find out whether you can trust it, and how to decide what to keep, fix, or rebuild."
category: "Power BI"
primaryKeyword: "inherited power bi"
tags: ["Power BI", "governance", "assessment", "trust", "estate management"]
takeaways:
  - "Inheriting a Power BI estate from a departed employee or previous vendor is common, and the first question is whether you can trust it."
  - "The things to check first are whether there is a governed model, whether the numbers reconcile, and whether anyone understands how it works."
  - "An estate built on a weak foundation may look fine and be a liability, so assess the foundation before relying on the reports."
  - "The decision is what to keep, fix, or rebuild, and it depends on what the assessment finds, not on how the reports look."
  - "A clear-eyed assessment of an inherited estate prevents both discarding good work and relying on bad work."
faqs:
  - q: "We inherited Power BI from someone who left. What do we do first?"
    a: "Assess whether you can trust it before you rely on it, rather than assuming the reports are fine because they exist and look professional. The first things to check are whether there is a proper governed model underneath, whether the numbers actually reconcile with each other and with trusted sources, and whether anyone remaining understands how the estate is built. Inherited estates often look fine on the surface while resting on a weak foundation that makes them fragile or untrustworthy, and the person who knew how it worked is gone. So the first step is a clear-eyed assessment of the foundation and the trustworthiness, not a quick glance at the dashboards, which tell you little about whether they can be relied on."
  - q: "How do we know if an inherited Power BI estate is any good?"
    a: "Look past the dashboards at the foundation and the trust. A good estate has a governed model where metrics are defined once, numbers that reconcile across reports and with sources you trust, and enough documentation or clarity that someone can understand and maintain it. A weak one has calculations scattered in individual reports, numbers that disagree, and no one who understands how it works. The dashboards looking polished tells you almost nothing, because a good-looking report can rest on a bad foundation. The real quality is in whether the numbers hold together and whether the estate can be understood and maintained, which is what to assess rather than how it looks."
  - q: "Should we keep, fix, or rebuild an inherited estate?"
    a: "It depends on what the assessment finds, which is why assessing first matters. If the estate has a sound governed foundation and trustworthy numbers, keep it and maintain it, there is no reason to discard good work. If the foundation is reasonable but there are specific problems, fix those. If the estate rests on a weak or missing foundation, with scattered definitions and numbers that do not reconcile, rebuilding on a proper governed model is usually the right call, because patching a bad foundation rarely holds. The decision follows from the assessment, not from how the reports look or from an instinct to either preserve or replace everything. Match the response to what you actually find."
  - q: "Why not just keep using the inherited reports if they work?"
    a: "Because 'they work' can be misleading, if the numbers are not actually trustworthy or the estate cannot be maintained. Reports that render and look fine may still produce numbers that do not reconcile, or rest on a foundation nobody understands and cannot safely change, which makes them a liability the moment something breaks or a number is questioned. Relying on an inherited estate without checking whether it is trustworthy and maintainable risks building on sand, discovering the problem when a decision is made on a wrong number or a change cannot be made. It is worth assessing before relying on it, so you know whether 'it works' means it is genuinely sound or just that it has not failed visibly yet."
---

Inheriting someone else's Power BI is common: an employee who built the reporting leaves, a previous vendor's contract ends, a company you acquired brings its own estate. You are handed a set of dashboards that look professional and seem to work, and the temptation is to just keep using them. That temptation is worth resisting until you have checked one thing: whether you can actually trust what you inherited. An inherited estate can look fine and be a liability, and the difference is not visible on the surface. Here is what to check first and how to decide what to keep, fix, or rebuild.

## The first question is trust

When you inherit a Power BI estate, the first question is not how it looks but whether you can **trust it.** The reports may render cleanly, look professional, and appear to work, and none of that tells you whether the numbers are reliable or the estate is sound. Trust has to be assessed, not assumed, because the things that make an estate trustworthy, or not, are underneath the dashboards, where you cannot see them at a glance.

This matters because inherited estates often **look fine while resting on a weak foundation.** The person who built it is gone, taking their knowledge of how it works with them, and what remains is a surface that reveals little about what is beneath. An estate built without a proper governed model, with calculations scattered across individual reports and numbers that do not quite reconcile, can look exactly as polished as a sound one, right up until someone relies on a wrong number or tries to change something and cannot.

So the first step with any inherited estate is a clear-eyed **assessment** of whether it can be trusted, before you rely on it. Assuming the reports are fine because they exist and look professional is exactly the mistake that turns an inherited estate into a liability, because it relies on something unverified. Checking first is what tells you whether you have inherited an asset or a problem.

## What to check first

The assessment focuses on three things, all beneath the dashboards.

**Is there a governed model?** A sound estate has a governed semantic model where metrics are defined once, which is what makes the numbers consistent. A weak one has calculations scattered across individual reports, each defining things its own way, which is the root of most trust problems. Finding out whether there is a real governed foundation, or just a pile of reports, is the single most important check.

**Do the numbers reconcile?** Check whether the reports agree with each other and with sources you trust. If the inherited estate's numbers disagree among themselves or do not match figures you can verify, the estate is not trustworthy regardless of how it looks, and the disagreement usually traces to the missing governed model. Reconciliation is the practical test of whether the numbers can be relied on.

**Does anyone understand it?** Check whether there is documentation, or anyone remaining who understands how the estate is built and can maintain it. An estate nobody understands is fragile, because it cannot be safely changed or fixed when it breaks, and inherited estates frequently come with the knowledge gone. Whether the estate can be understood and maintained determines whether you can actually own it going forward.

These three, the foundation, the reconciliation, and the understandability, tell you what you really inherited, which the dashboards do not.

## Keep, fix, or rebuild

The assessment leads to a decision: **keep, fix, or rebuild**, and which one depends on what you found, not on how the reports look or on an instinct to preserve or replace everything.

**Keep** if the estate has a sound governed foundation, trustworthy numbers that reconcile, and enough clarity to be maintained. There is no reason to discard good work, and inherited estates are sometimes genuinely sound. If the assessment comes back clean, keep it and maintain it, you have inherited an asset.

**Fix** if the foundation is reasonable but there are specific problems, a few reports with scattered calculations, some numbers that do not reconcile, gaps in documentation. Targeted fixes address these without rebuilding, which is the right response to an estate that is basically sound but has specific flaws.

**Rebuild** if the estate rests on a weak or missing foundation, with scattered definitions and numbers that do not reconcile. Patching a bad foundation rarely holds, because the problems are structural, so rebuilding on a proper governed model is usually the right call. This is not discarding good work; it is recognizing that the inherited estate was not sound and that a proper foundation is needed, which the assessment revealed.

The decision follows from the assessment, which is why assessing first is essential. Without it, you risk either discarding sound work out of suspicion or relying on unsound work out of convenience, both of which the assessment prevents by telling you what you actually have.

## Do not just keep using it

The pull to "just keep using it because it works" is strong and worth resisting, because **"it works" can be misleading.** Reports that render and look fine may still produce numbers that do not reconcile, or rest on a foundation nobody understands and cannot safely change. An estate that works in the sense of displaying dashboards can still be a liability the moment something breaks, a number is questioned, or a change is needed.

Relying on an inherited estate without checking whether it is trustworthy and maintainable risks **building on sand**, and discovering the problem at the worst time: when a decision is made on a wrong number, or when a change cannot be made because nobody understands the estate. The cost of that discovery is far higher than the cost of assessing upfront. "It works" might mean the estate is genuinely sound, or it might mean only that it has not failed visibly yet, and you cannot tell which without checking.

So the right approach to any inherited Power BI estate is to assess before you rely on it: check the foundation, the reconciliation, and the understandability, and let that assessment drive the decision to keep, fix, or rebuild. Done this way, you avoid both of the common mistakes, discarding good work and relying on bad work, and you end up knowing what you have rather than hoping. Inheriting an estate is an opportunity to get a head start on good reporting or a trap of building on something unsound, and a clear-eyed assessment at the start is what determines which one it turns out to be.
