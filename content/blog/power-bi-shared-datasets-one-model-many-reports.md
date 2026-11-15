---
title: "Shared datasets: one model, many reports, one version of the truth"
description: "Why building many reports on one shared dataset, rather than each report on its own copy of the data, is what keeps numbers consistent, reduces duplicated work, and makes a Power BI estate maintainable."
category: "Power BI"
primaryKeyword: "power bi shared datasets"
tags: ["Power BI", "shared datasets", "semantic model", "governance", "consistency"]
takeaways:
  - "A shared dataset is one governed model that many reports are built on, instead of each report carrying its own copy of the data and logic."
  - "Building on a shared dataset is what keeps numbers consistent, because every report draws from the same definitions."
  - "It also cuts duplicated work, because the model is built and maintained once rather than rebuilt in every report."
  - "The alternative, every report with its own dataset, is how estates drift into disagreeing numbers and unmaintainable sprawl."
  - "Designing a few well-built shared datasets that many reports use is a foundation of a governable estate."
faqs:
  - q: "What is a shared dataset in Power BI?"
    a: "A shared dataset is a single data model, the tables, relationships, and calculations, that multiple reports are built on, rather than each report having its own separate copy of the data and logic. You build the model once, with the metrics defined in it, and then many reports connect to that same model and use its data and definitions. It is the same idea as a governed semantic model: one trusted model that reporting sits on. The shared part is the key: instead of the data and calculations being rebuilt inside every report, they live once in a shared dataset that all the reports draw from, so they stay consistent and are maintained in one place."
  - q: "Why build reports on a shared dataset instead of their own data?"
    a: "For two big reasons: consistency and maintainability. Consistency, because when every report draws from the same shared dataset, they all use the same definitions, so the numbers agree across reports; when each report has its own copy of the data and logic, the definitions drift and reports disagree. Maintainability, because the model is built and updated once in the shared dataset rather than rebuilt in every report, so a change or fix is made in one place and every report gets it. Building each report on its own data multiplies both the risk of inconsistency and the work of maintenance, which is exactly what a shared dataset avoids."
  - q: "What goes wrong if every report has its own dataset?"
    a: "Two things, and they compound as the estate grows. First, numbers drift apart, because each report defines its metrics independently and the definitions inevitably diverge, so reports that should agree do not, which erodes trust. Second, maintenance becomes unmanageable, because the same logic lives in dozens of places and every change has to be made in all of them, which is slow and error-prone. An estate built as many independent datasets tends toward disagreeing numbers and sprawling, duplicated work that gets harder to manage over time. Shared datasets prevent both by keeping the model and its definitions in one place that many reports reuse."
  - q: "How many shared datasets should we have?"
    a: "Generally a small number of well-designed shared datasets that cover the main areas of the business, with many reports built on them, rather than a dataset per report. The exact number depends on how your data and business areas are structured, but the principle is reuse: each shared dataset should serve many reports, so the benefits of consistency and single-point maintenance are realized. The goal is not one giant dataset for everything, nor a dataset per report, but a sensible set of shared models that reporting is built on. A good partner designs this structure deliberately, because it is a foundation of an estate that stays consistent and maintainable as it grows."
---

There is a quiet architectural decision behind every Power BI estate that largely determines whether its numbers stay consistent and whether it stays maintainable: do many reports share one governed model, or does each report carry its own copy of the data and logic? The first approach, building on **shared datasets**, is what keeps reporting consistent and manageable. The second, a separate dataset per report, is how estates drift into disagreeing numbers and unmaintainable sprawl. Here is what a shared dataset is and why building on one matters so much.

## What a shared dataset is

A **shared dataset** is a single data model, its tables, relationships, and calculations, that **many reports are built on**, rather than each report having its own separate copy of the data and logic. You build the model once, with the metrics defined in it, and then many reports connect to that same model and draw on its data and definitions.

This is the same idea as a **governed semantic model**: one trusted model that reporting sits on, with each metric defined once. The word **shared** is the important part. Instead of the data and the calculations being rebuilt inside every report, they live **once** in a shared dataset, and all the reports that need them connect to it. A sales report, an executive summary, and an operations view can all be built on the same shared sales dataset, each presenting the data differently, but all drawing from the same underlying model and the same definitions. The reports are different; the data and logic beneath them are one shared thing.

## Why it keeps numbers consistent

The first big reason to build on a shared dataset is **consistency**, and it follows directly from the shared definitions. When every report draws from the **same shared dataset**, they all use the **same definitions** of every metric, so the numbers **agree across reports.** Revenue means the same thing in the sales report and the executive summary because both get it from the same model, where it is defined once.

The alternative breaks this. When each report has its **own copy** of the data and logic, each report defines its metrics independently, and those definitions inevitably **drift apart.** One report's revenue subtly differs from another's, not because anyone intended it but because the logic was rebuilt separately in each and diverged. The result is reports that should agree but do not, which is one of the most corrosive problems in reporting, because once people notice the numbers disagree, they stop trusting any of them. A shared dataset prevents this by construction: there is only **one** definition of each metric, in the shared model, so there is nothing to drift. Consistency is not something you have to maintain across reports; it is guaranteed by them sharing the same source.

## Why it cuts duplicated work

The second big reason is **maintainability.** When the model lives **once** in a shared dataset, it is built and updated in **one place**, and every report built on it inherits the model and any changes to it. A fix, a new metric, an adjusted definition, you make it once in the shared dataset and every report gets it automatically.

Without shared datasets, the same work is **multiplied.** The model's logic lives inside every report, so building each new report means rebuilding the data and calculations again, and every change or fix has to be made in **every report** that has its own copy. In an estate of dozens of reports, that is dozens of places to update for a single change, which is slow, tedious, and error-prone, because it is easy to update some and miss others, which then makes the inconsistency worse. A shared dataset collapses all of that into one model to build and one place to maintain, so the work of keeping reporting correct scales with the number of **models**, not the number of **reports.** For an estate that grows over time, this difference is enormous: shared datasets keep maintenance manageable while per-report datasets make it grow without bound.

## What goes wrong without them

An estate built as **many independent datasets**, each report with its own, tends toward two compounding problems that together make it hard to trust and hard to run.

First, **numbers drift apart**, because each report defines its metrics independently and the definitions diverge, so reports that should agree do not, and trust erodes. Second, **maintenance becomes unmanageable**, because the same logic lives in many places and every change has to be made in all of them, which is slow and increasingly error-prone as the estate grows. These problems reinforce each other: the duplicated logic causes the inconsistency, and the inconsistency is made worse by the difficulty of updating every copy correctly.

Crucially, this tends to appear **gradually.** A few reports each with their own data seem fine; dozens of them become a tangle of disagreeing numbers and duplicated maintenance that no one can keep straight. By the time the problem is obvious, it is expensive to fix, because so many reports now depend on their own separate datasets. This is why the shared-dataset decision matters early: it is cheap to do from the start and costly to retrofit once the sprawl has set in.

## How many you should have

The right structure is generally a **small number of well-designed shared datasets** that cover the main areas of the business, with **many reports** built on each, rather than a dataset per report. The exact number depends on how your data and business areas are structured, but the principle is **reuse**: each shared dataset should serve many reports, so the benefits of consistency and single-point maintenance are actually realized.

The goal is neither one giant dataset for everything, which becomes unwieldy, nor a dataset per report, which is the sprawl to avoid, but a **sensible set of shared models** that reporting is built on, each covering a coherent area and reused across many reports. Designing this structure well is a real part of building an estate that lasts, and it is something a good partner does deliberately, because the shared-dataset architecture is a foundation of an estate that stays consistent and maintainable as it grows. Get it right, and consistency and maintainability come almost for free as the estate expands; get it wrong, with datasets multiplying report by report, and the estate works against itself a little more with every report added.

## The foundation in short

Shared datasets are a quiet but decisive part of a healthy estate:

- A **shared dataset** is one governed model that many reports are built on, instead of each report carrying its own data and logic.
- It keeps numbers **consistent**, because every report draws from the same definitions.
- It keeps the estate **maintainable**, because the model is built and fixed once, not rebuilt in every report.
- The right structure is a **few well-designed shared datasets** reused across many reports, designed deliberately.

The throughline is that whether reporting shares governed models or duplicates them per report decides, more than almost anything else, whether an estate's numbers agree and whether it can be maintained as it grows. Building many reports on a few well-designed shared datasets is what gives an organization one version of the truth and a manageable estate at the same time, which is exactly what reporting is supposed to deliver and exactly what per-report data sprawl quietly takes away.
