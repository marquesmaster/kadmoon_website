---
title: "Screening coverage: the compliance metric most operations can't report"
description: "Running a screening tool is not the same as knowing your coverage. Why screening coverage, false-positive rate, and list-change exposure are the metrics that matter, and how to measure them."
category: "Customs & Compliance"
primaryKeyword: "restricted party screening"
tags: ["restricted party screening", "denied party screening", "sanctions compliance", "export compliance", "customs analytics"]
takeaways:
  - "Having a screening tool is not the same as knowing your screening coverage: the share of counterparties actually checked."
  - "The useful metrics are coverage, false-positive rate, time-to-clear a hit, and the retroactive exposure when lists change."
  - "A low false-positive rate is not automatically good; it can mean the matching is too loose and missing real hits."
  - "List changes create retroactive exposure: a party that was clean last quarter may not be now."
  - "Measuring screening effectiveness is an analytics problem distinct from running the screening tool."
faqs:
  - q: "What is restricted-party screening?"
    a: "Restricted-party screening, also called denied-party screening, is checking the parties to a transaction, customers, vendors, consignees, end-users, and sometimes banks, against government lists of sanctioned, denied, or restricted entities. In the United States that includes the OFAC sanctions and SDN lists, the BIS Entity and Denied Persons lists, and others. The goal is to avoid transacting with a party you are prohibited from dealing with. Because the lists change, screening is not a one-time check; it has to be re-run as parties and lists change."
  - q: "What does screening coverage mean?"
    a: "Screening coverage is the share of your counterparties that are actually being screened, as opposed to the share you assume are. It is the first and most important screening metric because a tool only protects you for the parties it sees. If new vendors are onboarded without screening, or one business unit's counterparties never flow into the tool, your real coverage is below 100% and the gap is exactly where the risk hides. Coverage is measurable by comparing the parties you transact with against the parties that were screened."
  - q: "Is a low false-positive rate good?"
    a: "Not necessarily. A low false-positive rate feels efficient, but it can mean the matching logic is too loose, letting real hits slip through as non-matches. A high false-positive rate wastes analyst time but at least errs toward catching matches. The right reading is to watch both the false-positive rate and the time-to-clear together, and to tune matching so analysts spend their time on plausible hits rather than noise, without loosening it to the point of missing true matches. Either extreme, measured alone, is misleading."
---

Most compliance teams can tell you they run screening. Far fewer can tell you their coverage, their false-positive rate, or how exposed they are when a list changes. That gap matters, because a screening tool only protects you for the parties it actually sees and the matches it actually catches. Running screening is an activity; knowing it works is a measurement, and it is a different problem.

## Coverage is the first question

The most important screening number is coverage: the share of your counterparties that are actually being screened. A tool configured perfectly still misses the vendor onboarded outside the process, the business unit whose parties never flow in, or the consignee added to an order after screening ran. Real coverage below 100% is common and usually invisible, because the tool reports on what it screened, not on what it did not see. [Screening coverage](/docs/kpi-library) is measured by comparing the parties you transact with against the parties that were screened, and the gap is where the exposure lives.

## False positives cut both ways

Teams often optimize for fewer false positives, because each one is analyst time. But a low false-positive rate is not automatically a good sign. If the matching logic is too loose, real hits get dismissed as non-matches, which is the failure that actually matters. The honest reading watches the false-positive rate and the time-to-clear together: the goal is matching tuned so analysts spend their time on plausible hits, not so loose that true matches slip through. Optimizing for the comfortable number can hide the dangerous one.

## List changes create retroactive exposure

Screening is not a one-time event because the lists move. A counterparty that screened clean last quarter may be listed now, which means yesterday's clean result is not today's. That creates retroactive exposure: the risk is not only in new parties but in existing relationships that a list change has turned risky. Measuring this means re-screening the existing base when lists update and tracking what changed, not just screening new parties at onboarding.

## Resolution is a metric too

When a hit comes up, how long it takes to resolve, and how consistently, is itself a measure of the program's health. A hit that sits unresolved is a transaction held or a risk carried. Time-to-clear, by analyst and by hit type, shows whether the resolution process is keeping up with the volume, and whether the matching is generating work the team can actually handle. A program that catches hits but cannot clear them is only half a control.

## Measuring it is analytics, not the tool

The screening tool runs the checks; measuring whether screening works is a separate, analytics problem. Coverage, false-positive rate, time-to-clear, and list-change exposure are all views over the transaction and screening data, cut by business unit, counterparty type, and time. That is the same [customs and compliance analytics](/platform) that models classification and duty, pointed at screening effectiveness. Without it, "we screen" is a statement of activity, not a measure of protection.

If you run screening but cannot report your coverage, that gap is the part of the risk you cannot see. [Tell us how your screening runs](/contact), or see how the [platform](/platform) models customs and compliance.
