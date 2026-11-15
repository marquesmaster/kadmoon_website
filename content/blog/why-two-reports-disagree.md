---
title: "Why two reports disagree, and how to fix it for good"
description: "Two reports show different numbers for the same thing, and trust evaporates. The causes are a handful of familiar ones, and the real fix is not reconciling once but removing the reason the numbers can differ at all."
category: "Power BI"
primaryKeyword: "reports disagree different numbers"
tags: ["Power BI", "consistency", "governance", "trust", "semantic model"]
takeaways:
  - "When two reports show different numbers for the same thing, trust in all the reporting suffers."
  - "The usual causes are different definitions, different data sources, different filters, or different timing."
  - "Reconciling the two once fixes the symptom; the real fix is removing the reason they can differ."
  - "Building reports on one governed model with shared definitions is what stops the disagreement at the source."
  - "Consistent numbers are a structural property of how reporting is built, not something to police report by report."
faqs:
  - q: "Why do two reports show different numbers for the same thing?"
    a: "Usually one of a few familiar causes. Different definitions: the two reports calculate the metric differently, so revenue means something slightly different in each. Different data sources: they pull from different places that do not fully agree. Different filters: one includes something the other excludes, so they are not actually measuring the same set. Or different timing: they were refreshed at different times, so one is more current. Each produces two reports that look like they should match but do not. Identifying which cause is at work is the first step, but the deeper issue is usually that the reporting is built in a way that lets the numbers differ at all."
  - q: "How do we fix reports that disagree?"
    a: "You can reconcile them, find the specific cause and align the two, which fixes that instance, but the real fix is removing the reason they can differ in the first place. Reconciling two reports once addresses the symptom; if the underlying setup still allows different definitions, sources, filters, and timing, new disagreements will keep appearing. The durable fix is building reports on one governed model with shared definitions, so there is only one definition, one source, and consistent logic, and the numbers agree by construction. That turns consistency from something you police report by report into a structural property of how the reporting is built."
  - q: "Why does it matter so much when reports disagree?"
    a: "Because when two reports disagree, people stop trusting all the reporting, not just the two in question. Once someone catches the numbers contradicting each other, they start doubting every report, because they can no longer be sure any given number is right. This is corrosive: the whole value of reporting rests on people believing the numbers, and visible disagreement undermines that belief broadly. So disagreeing reports are not a minor annoyance; they are a direct threat to the trust that makes reporting useful, which is why fixing the cause, not just the instance, matters."
  - q: "Can building on one model really prevent this?"
    a: "Yes, building reports on one governed model with shared definitions prevents the disagreement at its source, because it removes the conditions that let numbers differ. When every report draws from the same model, there is one definition of each metric, one source of the data, and consistent logic, so two reports measuring the same thing get the same answer by construction. Different definitions, sources, and inconsistent logic, the main causes of disagreement, cannot arise, because there is only one of each. This is why a governed, shared model is the structural fix: it does not reconcile disagreements, it removes the possibility of them, which is what keeps numbers consistent as the reporting grows."
---

Few things damage trust in reporting as fast as this: two reports, both supposedly showing the same thing, revenue, customers, sales, show **different numbers.** Someone notices, asks which is right, and suddenly nobody is sure they can believe **any** of the reporting. It is a common problem, and the causes are a handful of familiar ones. But the important insight is that reconciling the two reports **once** does not really fix it; the durable fix is removing the **reason** they can differ at all. Here is why reports disagree and how to fix it for good.

## Why disagreement is so damaging

First, why this matters so much. When two reports **disagree**, people stop trusting **all** the reporting, not just the two in question. Once someone catches the numbers **contradicting** each other, they start doubting **every** report, because they can no longer be confident that any given number is correct. If these two disagree, which of all the others are also wrong?

This is **corrosive** in a way that is out of proportion to the specific error. The entire value of reporting rests on people **believing** the numbers and acting on them, and visible disagreement undermines that belief **broadly**, not just locally. A single caught contradiction can erode trust that took a long time to build, and once people start keeping their own spreadsheets because they do not trust the reports, the reporting has partly failed regardless of how good most of it is. So disagreeing reports are not a minor annoyance to patch; they are a **direct threat** to the trust that makes reporting useful, which is exactly why it matters to fix the **cause**, not just the instance.

## The usual causes

When two reports disagree, the reason is usually one of a **few familiar causes**, and identifying which is the first step.

**Different definitions.** The two reports **calculate the metric differently**, so "revenue" or "active customer" means something slightly different in each. They are both right by their own definition, but the definitions differ, so the numbers differ.

**Different data sources.** The reports **pull from different places** that do not fully agree, so even the same definition produces different numbers because the underlying data is not identical.

**Different filters.** One report **includes something the other excludes**, a region, a category, a status, so they are not actually measuring the **same set**, even though they look like they are.

**Different timing.** The reports were **refreshed at different times**, so one is more current than the other, and the gap shows up as a discrepancy that is really just one being more up to date.

Each of these produces two reports that **look like they should match** but do not, and each is a genuine, common cause. Working out which one is behind a specific disagreement is the start of addressing it, but, crucially, it is only the start, because the deeper issue is usually not the specific cause but that the reporting is **built in a way that lets the numbers differ at all.**

## Reconciling once is not the fix

The instinctive response to disagreeing reports is to **reconcile** them: find the specific cause and **align** the two so they match. This **works**, for that instance, you figure out that one filtered differently, or used an older refresh, or defined the metric another way, and you fix it, and now the two agree.

But this fixes the **symptom**, not the disease. If the underlying setup still **allows** different definitions, different sources, different filters, and different timing, then **new disagreements will keep appearing**, because the conditions that produced this one are still present. You will reconcile these two, and next month two others will disagree, and you will reconcile those, forever, because you are treating instances of a problem whose cause you have not addressed. Reconciliation is **endless** when the structure permits disagreement, because you are policing consistency report by report instead of building it in. The real question is not "why do these two disagree?" but "why is it **possible** for reports to disagree at all?", and that points to a different kind of fix.

## The real fix: remove the reason they can differ

The durable fix is to **remove the reason** reports can differ, which means building them on **one governed model with shared definitions.** When every report draws from the **same model**, there is **one definition** of each metric, **one source** of the data, and **consistent logic**, so two reports measuring the same thing get the **same answer by construction.**

This directly eliminates the main causes. **Different definitions** cannot arise, because there is only **one** definition, in the model. **Different sources** cannot arise, because every report uses the **same** source through the model. **Inconsistent logic** cannot arise, because the logic lives **once** in the model. The conditions that let numbers differ are **removed**, not patched, so the numbers **agree** not because someone reconciled them but because they **cannot** disagree. This is the fundamental difference: reconciliation makes disagreeing numbers agree **after the fact**; a shared governed model makes it **impossible** for them to disagree in the first place.

This turns consistency from something you **police report by report**, an endless, losing effort, into a **structural property** of how the reporting is **built.** You do not maintain consistency through vigilance; you get it for free from the architecture, because the architecture does not permit inconsistency. That is the only durable answer to disagreeing reports, because any approach that leaves the numbers **able** to differ will keep producing disagreements no matter how diligently you reconcile them. Build so they **cannot** differ, and the problem stops at the source.

## Why this is a structural choice

The broader lesson is that **consistent numbers are a structural property, not a matter of policing.** An estate where reports are built independently, each with its own definitions, sources, and logic, will **always** be prone to disagreement, and no amount of reconciliation will cure it, only manage it. An estate where reports are built on a **shared governed model** is consistent **by construction**, and the disagreement problem largely disappears.

This is one of the strongest arguments for the governed, shared-model approach: it is not just tidier or more maintainable, it is what makes the numbers **trustworthy**, because it removes the structural possibility of the contradictions that destroy trust. A good partner builds reporting this way precisely because they have seen how corrosive disagreeing reports are and how futile it is to fix them one reconciliation at a time. The choice to build on one model with shared definitions is, among other things, a choice to make disagreeing reports **impossible**, which is worth far more than being good at reconciling them, because it protects the trust that all the reporting depends on. Consistency you have to police is consistency you will eventually lose; consistency built into the structure is consistency that holds as the estate grows.

## The point in short

Disagreeing reports are a structural problem with a structural fix:

- When two reports **disagree**, trust in **all** the reporting suffers, which is deeply corrosive.
- The usual causes: different **definitions**, **sources**, **filters**, or **timing**.
- **Reconciling once** fixes the instance; the conditions that caused it remain, so new ones appear.
- The real fix is **one governed model with shared definitions**, so numbers **cannot** differ.
- Consistency is a **structural property** of how reporting is built, not something to police report by report.

The throughline is that two reports disagreeing is not just an error to reconcile but a symptom of reporting built in a way that **permits** disagreement, and as long as that structure stands, the disagreements will keep coming. The durable fix is to build on one governed model with shared definitions, so there is one definition, one source, and consistent logic, and the numbers agree by construction rather than by reconciliation. That turns consistency from an endless policing effort into a property of the architecture, which is the only way to actually stop disagreeing reports and protect the trust that makes all the reporting worth having.
