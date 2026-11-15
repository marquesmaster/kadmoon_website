---
title: "How often should your reports refresh? Matching freshness to the decision"
description: "Daily, hourly, live? The right refresh frequency is not the fastest one, it is the one that matches how the report is actually used, and over-refreshing costs more and buys less than people expect."
category: "Power BI"
primaryKeyword: "how often should power bi refresh"
tags: ["Power BI", "refresh", "data freshness", "planning", "cost"]
takeaways:
  - "The right refresh frequency is the one that matches how the report is used, not the fastest one available."
  - "Most business reports are acted on in a rhythm, daily or a few times a day, where a scheduled refresh is plenty."
  - "Faster refresh costs more and loads the source systems, so over-refreshing buys little and costs real resources."
  - "Truly live data is worth it only for the few reports where decisions are made moment to moment."
  - "Deciding refresh frequency deliberately, per report, is part of running an estate that is both current enough and efficient."
faqs:
  - q: "How often should a Power BI report refresh?"
    a: "As often as the decisions it supports actually need, which for most business reports is daily or a few times a day, not live. The right frequency comes from how the report is used: a report people check each morning and act on through the day is perfectly served by an overnight or morning refresh, while a report watched moment to moment for live operations needs much fresher data. The mistake is defaulting to the fastest refresh available on the assumption that fresher is always better. Fresher data costs more and does not help if the decision does not need it, so the right question is how current the report genuinely needs to be for the decisions it drives, and match the refresh to that."
  - q: "Isn't fresher data always better?"
    a: "Not when it costs more and buys nothing the decision uses. Fresher data sounds better in the abstract, but refreshing more often consumes more resources and puts more load on the source systems, and if the report is acted on daily, hourly refreshes just do that work repeatedly for data nobody looks at until tomorrow. The value of freshness depends entirely on whether the decision uses it: for a daily decision, this-morning's data and this-minute's data are equally good, so paying for the faster one is waste. Fresher is only better when the decision is actually made on the fresher data, which for most reports it is not."
  - q: "When do I actually need live or near-live data?"
    a: "For the few reports where decisions are made moment to moment, operational monitoring, live status, situations where acting on the current state right now matters. There, data that is even a few hours old is too stale, and live or near-live refresh genuinely earns its cost. These are a minority of reports. Most reporting supports decisions made in a daily or intra-day rhythm, where scheduled refresh is plenty. The way to tell is to ask whether someone will act differently based on data from this minute versus this morning; if yes, it may need live data, and if not, it does not, however nice live might sound."
  - q: "Can every report just refresh on the same schedule?"
    a: "It can, but deciding per report usually serves the estate better, because different reports have different freshness needs and different refresh costs. A single schedule for everything either over-refreshes the reports that do not need it, wasting resources and loading sources, or under-refreshes the few that need to be fresher. Setting refresh frequency deliberately per report, frequent where the decision needs it, less frequent where it does not, keeps the estate both current enough and efficient. A good partner sets refresh schedules to match how each report is used rather than applying one frequency across the board, which is part of running an estate that performs without wasting resources."
---

When setting up a Power BI report, a natural question comes up: how often should it refresh? And there is a natural but wrong instinct to answer "as often as possible," on the assumption that fresher data is always better. It usually is not. The right refresh frequency is not the **fastest** one; it is the one that **matches how the report is actually used.** Refreshing faster than the decisions require costs more, loads the source systems, and buys nothing anyone uses. Here is how to think about refresh frequency and match it to the decision.

## Freshness should match the decision

The principle is simple: a report should be as fresh as the **decisions it supports actually need**, no fresher. The value of fresh data comes entirely from whether a decision is **made on it.** If a report drives a decision made this morning, then data current as of this morning is exactly as useful as data current as of this minute, because the decision uses the morning's data either way. Paying to refresh more often than that buys freshness nobody acts on.

So the right question is not "how fresh can we make it?" but "how current does this report genuinely need to be for the decisions it drives?" That question has different answers for different reports, and answering it honestly is what sets the right frequency. A report acted on daily needs daily-fresh data; a report acted on moment to moment needs live data; and matching each to its actual need is the whole game. The instinct to just make everything as fresh as possible skips this question and defaults to the most expensive answer regardless of whether it helps.

## Most reports are fine on a schedule

In practice, **most business reports** are acted on in a **rhythm**, daily or a few times a day, and for them a **scheduled refresh is plenty.** A sales dashboard reviewed each morning and acted on through the day, an operations report checked a few times daily, a management view looked at regularly, these support decisions made on a cadence, not continuously, so data refreshed overnight or a few times a day is perfectly current for them.

For these reports, which are the majority, a sensible scheduled refresh, nightly, each morning, or a few times a day, delivers data that is as fresh as the decisions need. Refreshing them more often than that does not improve any decision, because nobody is acting on the intraday changes until their next scheduled look at the report. This is why scheduled refresh, not live data, is the right default for most reporting: it matches how the reports are actually used, and the reports are current enough for every decision they drive. The reports feel current because, for the rhythm they are used in, they **are** current, and that is what matters, not whether the data is accurate to the second.

## Faster costs more and buys less than people think

The reason over-refreshing is a real mistake, not just harmless extra, is that **faster refresh costs more and loads the source systems.** Every refresh consumes resources and puts load on the databases the data comes from, so refreshing hourly instead of daily does that work many times more often. If the report is acted on daily, all those extra refreshes update data that **nobody looks at** until the next day, which is pure waste: real resources spent, real load placed on the sources, for freshness no decision uses.

This is the part the "fresher is always better" instinct misses. Freshness is not free, and its value depends entirely on whether the decision uses it. For a daily decision, this-minute's data and this-morning's data are **equally good**, so paying for the faster one, in compute and in source load, is cost without benefit. Over-refreshing is a surprisingly common and invisible drain: the reports are no more useful, but the estate works harder and leans on the source systems more than it needs to. Matching refresh to the decision is not just about avoiding complexity; it is about not spending resources to produce freshness that changes nothing.

## When live data is worth it

None of this means live data is never worth it, only that it is worth it for the **few reports that genuinely need it.** Some reporting supports decisions made **moment to moment**, operational monitoring, live status, situations where someone acts on the **current state right now.** For these, data even a few hours old is too stale, and live or near-live refresh genuinely earns its cost, because the decisions really are made on the freshest data.

These reports are a **minority**, though, and the way to identify them is a specific test: would someone act **differently** based on data from this minute versus this morning? If **yes**, the report may need live or near-live data, and the cost is justified. If **no**, it does not, however appealing live might sound. Most reports fail this test, their decisions are made in a daily or intraday rhythm, so live data would cost more and change nothing. The few that pass it are exactly where the investment in freshness belongs. Reserving live data for those reports, and using scheduled refresh for the rest, puts the cost of freshness where it buys something and keeps it off where it does not.

## Decide per report, deliberately

The practical conclusion is that refresh frequency should be set **per report, deliberately**, rather than applying one schedule across the board. Different reports have different freshness needs and different refresh costs, so a single frequency for everything either **over-refreshes** the many reports that do not need it, wasting resources and loading sources, or **under-refreshes** the few that need to be fresher, leaving them too stale for their decisions. Neither is good.

Setting refresh frequency to **match how each report is used**, frequent where the decision needs it, less frequent where it does not, keeps the estate both **current enough and efficient.** Every report is as fresh as its decisions require, and no report is burning resources to produce freshness nobody uses. This is a small but real part of running an estate well, and it is something a good partner attends to, setting refresh schedules by how reports are actually used rather than defaulting everything to the fastest or the same. The result is reporting that is current where it matters and economical everywhere, which is exactly the balance a well-run estate should strike.

## The point in short

Refresh frequency is a decision to make deliberately, not a dial to turn up:

- The right frequency **matches how the report is used**, not the fastest available.
- **Most reports** are acted on daily or intraday, where **scheduled refresh** is plenty.
- **Faster refresh costs more** and loads sources, buying nothing when the decision does not use the freshness.
- **Live data** is worth it only for the few reports where decisions are made moment to moment.
- Decide **per report**, so the estate is current enough and efficient.

The throughline is that fresh data is valuable only when a decision is made on it, so the right refresh frequency is the one that matches the decision, not the one that sounds most impressive. For most reports that is a sensible schedule; for a few it is live data; and setting each deliberately is what keeps a Power BI estate both as current as it needs to be and free of the quiet waste of refreshing faster than anyone acts.
