---
title: "Cash flow and AR aging in Power BI: seeing working capital clearly"
description: "Cash and receivables decide whether a profitable business can pay its bills, yet they often sit in stale spreadsheets. How a governed Power BI model keeps cash position and AR aging current and drillable, so collections and cash decisions happen on time."
category: "Power BI"
primaryKeyword: "ar aging power bi"
tags: ["Power BI", "cash flow", "AR aging", "working capital", "finance"]
takeaways:
  - "Cash and receivables decide solvency, but they are often tracked in spreadsheets that are already out of date by the time anyone acts on them."
  - "A governed model reads the open receivables from the accounting system and builds the aging buckets live, so the aging report reflects today, not last week."
  - "Drilling from an aging bucket to the specific overdue invoices turns the report into a collections worklist, not just a summary."
  - "Bringing cash position and receivables into one current view lets finance manage working capital on time instead of in hindsight."
  - "The figures come from the accounting system, defined once, so the cash and AR numbers agree with the rest of finance."
faqs:
  - q: "Can Power BI build an AR aging report automatically?"
    a: "Yes. Power BI reads the open receivables from the accounting system or ERP and builds the aging buckets, current, 30, 60, 90 days and beyond, as a measure based on each invoice's due date against the report date. Because the buckets are calculated from live data, the aging report reflects the current state rather than a spreadsheet someone exported last week. It can be sliced by customer, by salesperson, or by business unit, and it updates when the receivables update. The important difference from a manual aging report is that nobody is rebuilding it each time; the model recalculates the aging from the current open items whenever the report is refreshed."
  - q: "Why is a spreadsheet aging report a problem?"
    a: "Because it is a snapshot that ages the moment it is made, and collections decisions made on it are always a step behind. An aging spreadsheet is exported at a point in time, and from then on it drifts: invoices get paid, new ones come due, and the sheet no longer matches reality. By the time someone works the list, part of it is already wrong, and effort goes into chasing invoices that have been paid or missing ones that just aged. A governed model keeps the aging current by reading the open receivables directly, so the list people work from reflects today. That timeliness is most of what makes receivables reporting useful, because collections is a time-sensitive activity."
  - q: "Can I see which specific invoices are overdue, not just the totals?"
    a: "Yes, and that is what makes the report actionable. A good AR aging report lets you drill from a bucket total down to the individual overdue invoices behind it: which customer, which invoice, how many days late, how much. That turns the aging report from a summary into a collections worklist, where the person responsible can see exactly what to chase and follow each amount down to the invoice. Without that drill, the aging report tells you there is a problem but not where, and someone still has to go into the accounting system to find the detail. With it, the summary and the worklist are the same report."
  - q: "Does Power BI do cash flow forecasting?"
    a: "Power BI is strong at showing the current and historical cash picture, cash position, receivables, payables, and trends, from your actual data, and it can present a forward view built from known inflows and outflows such as scheduled receivables and payables. Full cash flow forecasting that models assumptions and scenarios is more than a reporting tool does on its own, and it depends on inputs that come from planning, not just from the accounting system. The honest framing is that Power BI keeps the actual cash and working capital picture current and clear, which is the foundation, and a structured forecast can be built on top of that where the inputs exist. We are clear about where reporting ends and planning begins when we scope it."
---

A business can be profitable and still fail to pay its bills, because profit is not cash. What decides whether the money is there when it is needed is working capital, and the two numbers at the center of that are cash position and receivables. They are also two numbers that often sit in spreadsheets that are already out of date by the time anyone acts on them. A governed Power BI model keeps them current and drillable, which is the difference between managing cash on time and managing it in hindsight.

## Why receivables reporting goes stale

Accounts receivable aging is a time-sensitive report. Its whole value is telling you what is overdue right now, so someone can chase it. But a spreadsheet aging report is a snapshot: exported at a moment, accurate at that moment, and drifting from then on. Invoices get paid, new ones come due, and within days the sheet no longer matches reality.

By the time someone works the list, part of it is wrong. Effort goes into chasing invoices that have already been paid, or into missing ones that just crossed into overdue. The report meant to drive collections is quietly undermining them, because collections is time-sensitive and the report is not current.

## A live aging report

A Power BI model reads the open receivables from the accounting system and builds the aging buckets as a calculation: current, 30, 60, 90 days and beyond, based on each invoice's due date against the report date. Because the buckets are computed from live data, the aging reflects today. When the receivables update, the aging updates. Nobody rebuilds it.

The report can be sliced the way collections actually works: by customer, by salesperson, by business unit. And it is defined once in the model, so the receivables totals agree with the rest of finance rather than being a separate spreadsheet with its own version of the numbers.

## From a summary to a worklist

The feature that makes the aging report useful rather than merely informative is the drill. A good AR aging report lets you go from a bucket total down to the individual overdue invoices behind it: which customer, which invoice, how many days late, how much. That turns the report into a collections worklist. The person responsible for chasing sees exactly what to chase, and can follow each amount down to the invoice without opening the accounting system.

Without that drill, the aging report tells you there is a problem but not where, and the detail work starts somewhere else. With it, the summary and the action list are the same report, which is what keeps collections moving.

## Cash in the same view

Receivables are one half of the working capital picture; cash position is the other. Bringing them into one current view, cash on hand, receivables coming in, payables going out, lets finance see working capital as a whole and act on it in time. The model reads these from the accounting system and keeps them current together, so the question of whether the business will have the cash it needs is answered from today's data rather than last week's spreadsheet.

This is where it helps to be precise about what reporting does and does not do. Power BI keeps the actual cash and working capital picture clear and current, and it can present a forward view built from known inflows and outflows like scheduled receivables and payables. Full cash flow forecasting, with modeled assumptions and scenarios, is a planning activity that depends on inputs reporting does not generate. A structured forecast can be built on top of the current picture where those inputs exist, but the honest foundation is a clear, live view of actual cash and receivables.

## Managing working capital on time

The practical payoff is timing. When cash position and AR aging are current and drillable, collections work the right list, cash decisions are made on today's position, and finance manages working capital as it happens rather than reconstructing it after the fact. For any business where the gap between profit and cash matters, which is most of them, that timeliness is the whole point, and it comes from reading the numbers live from the system of record instead of from a spreadsheet that was already aging when it was made.
