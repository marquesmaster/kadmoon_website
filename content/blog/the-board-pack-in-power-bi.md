---
title: "The board pack in Power BI: from a monthly scramble to a standing report"
description: "The board pack is often rebuilt by hand every month from numbers that are already settled elsewhere. How a governed Power BI model turns it into a standing report that is current, consistent, and traceable back to the source."
category: "Power BI"
primaryKeyword: "board pack power bi"
tags: ["Power BI", "board reporting", "finance", "CFO", "governance"]
takeaways:
  - "The board pack is usually rebuilt by hand each month, copying numbers that are already finalized in the accounting system and other reports."
  - "A governed model lets the board pack read the same measures as the rest of finance, so the board sees the same numbers management does."
  - "Because the numbers come from the model, the board pack is current and traceable, and a figure can be followed back to its source if a director asks."
  - "The format boards expect, a clean summary with commentary, is still possible; what changes is that the numbers underneath are live, not retyped."
  - "The time saved is real, but the larger gain is that the board and management stop reconciling two versions of the same figure."
faqs:
  - q: "Can Power BI produce a board pack in the format our board expects?"
    a: "Yes. Boards expect a clean, summarized format with commentary, and Power BI can present exactly that: summary pages with the key figures, trends, and variance against plan, laid out to read at a glance. What changes is not the format but where the numbers come from. Instead of being retyped from other reports, they are read from the same governed model the rest of finance uses, so they are current and consistent. The commentary and narrative that a board pack needs are still written by finance; the model supplies the numbers underneath them. You can also export clean pages to share with directors who prefer a document, while the underlying report stays live for anyone who wants to look closer."
  - q: "Why does the board pack take so long to produce each month?"
    a: "Because it is usually rebuilt by hand from numbers that are already settled elsewhere. The figures exist in the accounting system and in management reports, but assembling the board pack means copying them into a separate document, reformatting, recalculating a few summary measures, and writing the commentary, every month. The work is slow and repetitive, and each copy step is a chance for a number to be mistyped or pulled from the wrong version. A governed model removes the copying by letting the board pack read the same measures as the rest of finance, so producing it becomes updating the commentary rather than rebuilding the numbers."
  - q: "How do we know the board is seeing the same numbers as management?"
    a: "By having both read from the same semantic model. When the board pack and the management reports both take their figures from one governed model, where each measure is defined once, the board and management are looking at the same numbers by construction. This matters because a common and avoidable problem is the board pack and the internal reports disagreeing slightly, which forces a reconciliation and undermines confidence. Reading from one model removes that gap. If a director questions a figure, it can be traced from the board pack back through the model to the source transaction, which is a level of defensibility a retyped document cannot offer."
  - q: "Is it safe to give board members access to a live Power BI report?"
    a: "It can be, with the right controls, and it is also fine to keep boards on exported pages. Power BI supports row-level security and controlled sharing, so if board members are given live access, they see only what they should. Many organizations prefer to share a clean export or a published document with the board and keep the live report inside finance, which is equally valid. The point of building the board pack on the model is not necessarily to hand directors a live dashboard; it is that the pack is produced from governed, current data rather than retyped, however it is ultimately delivered. The delivery method is a choice; the reliable source underneath is the real gain."
---

The board pack is a strange piece of work. Almost every number in it is already finished, settled in the accounting system, agreed in the management reports, closed for the month. And yet, in many finance teams, the pack is rebuilt from scratch every month: numbers copied into a document, reformatted, summary measures recalculated, commentary written against figures that were retyped by hand. A governed Power BI model does not change what the board wants to see. It changes where those numbers come from, and that turns a monthly scramble into a standing report.

## The problem is copying, not calculating

The figures in a board pack are not hard to calculate. They are hard to assemble, because assembling them means moving settled numbers from where they live into a separate document. Revenue and margin from the management reports, the cash position from the accounting system, variance against plan from the budget report, all copied into the pack, reformatted to the board's layout, and topped with commentary.

Every copy step is slow, and every one is a chance to pull the wrong version or mistype a figure. The pack that results is a snapshot, accurate to the moment it was assembled, and already drifting as soon as it is done. When a director asks where a number came from, the honest answer is often that it was copied from another report, which is not a satisfying place to end.

## Reading from the model instead

When the board pack reads from the same governed model as the rest of finance, the copying disappears. The measures the board cares about, revenue, margin, cash, variance against plan, are defined once in the model and used everywhere. The board pack presents them in the board's format, but it takes them from the model rather than from a retyped document.

The immediate effect is that the pack is current. When the underlying data updates, the figures update. Producing the monthly pack becomes a matter of refreshing it and writing the commentary, not rebuilding the numbers. The time saved is real, but it is the smaller part of the gain.

## The larger gain is agreement

The bigger benefit is that the board and management stop seeing two versions of the same figure. A common and avoidable problem is that the board pack and the internal reports disagree slightly, because they were assembled separately, and someone has to reconcile them before the meeting. Reading from one model removes that gap by construction: if both the board pack and the management reports take their numbers from the same model, they agree.

This also makes the pack defensible. If a director questions a figure, it can be traced from the board pack back through the model to the transactions behind it. That is a level of traceability a hand-assembled document cannot match, and it changes the tone of the conversation from whether the number is right to what it means.

## The format boards expect is still the format

None of this requires handing the board a live dashboard or changing what a board pack looks like. Boards expect a clean, summarized presentation with commentary, and that is exactly what the model can produce: summary pages with the key figures, trends, and variances, laid out to read at a glance, with the narrative finance writes around them.

How the pack reaches the board is a separate choice. Some organizations share a clean export or a published document and keep the live report inside finance. Others give directors controlled, secured access to the report itself, using row-level security so each person sees only what they should. Both are fine. The point is not the delivery method. It is that the numbers come from governed, current data instead of being retyped, whichever way the pack is ultimately shared.

## From scramble to standing report

The shift is from producing the board pack to maintaining it. Once it is built on the model, the pack stands from month to month: the numbers refresh, the commentary gets updated, and the hours that went into copying and reconciling go into analysis instead. For a finance team, that is a meaningful reclaiming of time, and for the board, it is a pack they can trust and question without the answer being that someone typed it in from somewhere else.
