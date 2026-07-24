---
title: "Denied party screening software: automating restricted-party checks"
description: "Denied party screening software explained: US watchlists, fuzzy matching, false positives, real-time checks, audit logs, OFAC penalties, and build vs buy."
category: "Trade & Supply Chain"
primaryKeyword: "denied party screening software"
tags: ["restricted party screening", "sanctions screening", "export screening software", "OFAC compliance"]
takeaways:
  - "Sanctions liability is strict, meaning a violation counts whether or not you knew, and the maximum civil penalty per IEEPA violation is the greater of $377,700 or twice the transaction value."
  - "There is no single list to check: screening spans OFAC's SDN and consolidated lists, BIS lists, State Department debarments, and program-specific lists, and keeping that list data fresh is one of the hardest parts of building this well."
  - "Matching must use fuzzy logic scored by confidence to handle spelling, transliteration, and alias variation, and it must reason about OFAC's 50 Percent Rule, since too-strict misses real hits and too-loose drowns analysts until they rubber-stamp."
  - "Screening has to run in real time at decision points like order placement and onboarding, because with thousands of list additions a year an entity that was clean last month can be blocked today."
  - "You must be able to prove you screened, so every event needs immutable logging with the list versions and threshold in effect, plus a case-management workflow that preserves each analyst decision."
faqs:
  - q: "Is denied party screening legally required?"
    a: "Yes. US law prohibits dealing with sanctioned and restricted parties, and enforcement falls on the company doing the transaction, not just the person who made the decision. Liability under IEEPA is strict, so a genuine mistake still counts as a violation, and 'we did not check' is not a defense. That is why screening is a compliance requirement rather than a convenience."
  - q: "Which watchlists does screening software need to check?"
    a: "There is no single list. Screening covers OFAC's Specially Designated Nationals list and consolidated sanctions lists, the BIS Entity List, Denied Persons List, and Unverified List, State Department debarred parties, and sector- or program-specific lists. Companies with international exposure also screen against non-US lists such as EU and UN sanctions, and a system is only as good as how fresh its list data is."
  - q: "How does screening software reduce false positives?"
    a: "It uses fuzzy matching that accounts for spelling variations, transliteration differences, name order, aliases, and partial matches, then scores each potential match by confidence. The goal is to catch true matches while keeping false positives low enough for a team to actually review them, because a too-loose engine drowns analysts in false alarms until they start rubber-stamping and a real hit slips through."
  - q: "Should I build or buy a denied party screening engine?"
    a: "Packaged products can be a good fit for standard needs with off-the-shelf list coverage. Building custom gets stronger when screening must be embedded deeply into your own platform, when your matching and review workflow is specific to your business, or when the engine needs to sit natively inside a larger custom trade system, giving you control over matching logic, thresholds, list sources, and audit format."
---

Selling to, buying from, or shipping to a party on a US government restricted list is a violation whether or not you knew. Sanctions liability under the International Emergency Economic Powers Act is strict, and the maximum civil penalty per violation is [the greater of $377,700 or twice the value of the underlying transaction](https://home.treasury.gov/system/files/206/Notice-Inflation-Adjustment-to-Maximum-Civil-Monetary-Penalty.pdf) as of the 2024 inflation adjustment. That is what makes denied party screening software a compliance requirement rather than a convenience: the obligation is strict, the penalties are steep, and "we did not check" is not a defense. The job of the software is to check every relevant party against every relevant list, every time, and to prove it did.

Screening spans several watchlists, careful matching logic, real-time checks at the point of sale, and a build-or-buy decision. A few figures set the stakes:

| Metric | Figure | Year / source |
| --- | --- | --- |
| Max civil penalty per IEEPA violation | greater of $377,700 or 2x transaction | 2024, Treasury |
| OFAC public enforcement penalties | over $1.5 billion | 2023, OFAC |
| Persons added to the SDN list | 3,135 (+25% over 2023) | 2024, CNAS |
| Annual new listings vs 2017 | ~880 to over 3,000 | 2017 to 2024, CNAS |

Those numbers explain why screening keeps moving from a periodic chore to an always-on control embedded in the transaction path.

## Why screening is legally mandatory

US law prohibits dealing with sanctioned and restricted parties, and enforcement falls on the company doing the transaction, not just the person who made the decision. Agencies including the Office of Foreign Assets Control, the Bureau of Industry and Security, and the State Department maintain lists of individuals and entities you are barred from doing business with.

Enforcement is not theoretical, and the dollar figures have jumped. OFAC finalized 17 public enforcement actions in 2023 that imposed [over $1.5 billion in penalties and settlements](https://www.mofo.com/resources/insights/240301-ofac-year-in-review-2023-part-1), the highest annual total in the agency's history, anchored by a roughly $968 million settlement with Binance. That was more than 36 times the $42.7 million OFAC collected across a similar number of cases in 2022, so the risk is both large and volatile year to year. Because the exposure covers customers, vendors, banks, freight forwarders, and end users, and applies at the moment of the transaction rather than once a quarter, a genuine mistake still counts as a violation. That reality is what pushes companies from manual, occasional checks toward automated screening built into their systems, so no transaction slips through unchecked. It sits alongside classification and valuation as a core pillar of [import and export compliance](/blog/import-export-compliance-software).

## US and international watchlists

There is no single list. Screening means checking against many, and keeping every one of them current.

- OFAC's Specially Designated Nationals (SDN) list and its consolidated sanctions lists.
- The BIS Entity List, Denied Persons List, and Unverified List.
- The State Department's debarred parties.
- Sector- and program-specific lists that apply to particular goods or countries.

These lists are moving targets, and the pace has accelerated sharply. OFAC added [3,135 persons to the SDN list in 2024, a 25 percent jump from 2,502 in 2023](https://www.cnas.org/publications/reports/sanctions-by-the-numbers-2024-year-in-review), and annual new listings have climbed from about 880 in 2017 to more than 3,000 in 2024. Russia-related designations alone drove roughly 70 percent of the 2024 additions, some 1,706 persons, per the same CNAS analysis. Companies with international exposure also screen against non-US lists, such as EU and UN sanctions and various national lists, depending on where they operate. A screening system is only as good as the freshness of its list data, which is why list ingestion and update handling is one of the hardest parts of building this well, not an afterthought.

The lists also arrive in inconsistent formats and structures, and each has its own quirks in how names, aliases, and addresses are recorded. A well-built system normalizes all of them into a common internal representation so the matching engine can treat them uniformly, and it tracks which version of each list was in force at any given moment so past decisions remain reproducible. Underestimating this data-plumbing work is the most common way a screening build runs late.

## Matching logic and false positives

The core technical challenge is that names are messy and lists are literal. A restricted party might appear as "Mohammed Al-Rashid," while your customer record says "Mohamed Alrashid" or "M. Al Rashid." A naive exact-match check misses real hits. A too-loose check flags half your customer base. Neither is acceptable.

Good matching uses fuzzy logic that accounts for spelling variations, transliteration differences, name order, aliases, and partial matches, then scores each potential match by confidence. The problem gets harder because OFAC's 50 Percent Rule extends blocking to any entity owned 50 percent or more, directly or indirectly, by blocked persons, even when that entity is not itself named on any list. So the engine cannot just match names, it has to reason about ownership. The design goal is to catch true matches while keeping false positives low enough that your team can actually review them. This balance is the whole game:

- Too strict, and you miss a real restricted party, which is a violation.
- Too loose, and you drown analysts in false alarms until they start rubber-stamping, which is how a real hit gets waved through.

Tuning that threshold, and giving reviewers the context to clear or escalate a match quickly, is where a well-built screening engine earns its cost.

## Screening in real time at checkout

Batch screening once a day is not enough when a violation can happen at the moment of sale. Modern screening runs in real time at the decision points: when an order is placed, when a new customer or vendor is onboarded, when a shipment is booked, and when master data changes.

For an e-commerce or B2B platform, that means a screening check woven into the checkout or order-acceptance flow, fast enough not to break the experience but firm enough to hold or block a flagged transaction for review. That requires the screening engine to expose a clean API your order systems can call synchronously, return a decision in a fraction of a second for the clear cases, and route only the genuine potential matches to a human. The list churn described above makes this non-negotiable: with thousands of additions a year, an entity that was clean last month can be blocked today, so the check has to hit live data at the moment of the transaction. This is exactly the kind of embedded, real-time check that [trade compliance automation](/blog/trade-compliance-automation) is built around.

## Audit logs and case management

Screening is not just about blocking bad transactions. It is about proving, later, that you screened. When a regulator or auditor asks, you need to show what was screened, against which list versions, on what date, what the result was, and who reviewed and cleared any potential matches.

That means every screening event has to be logged immutably, with the list data and threshold in effect at that moment captured alongside the result. Potential matches need a case-management workflow: an analyst reviews the hit, records a decision with a reason, and that decision is preserved. This audit trail also feeds OFAC's voluntary self-disclosure process, where a complete, timestamped record can substantially reduce a penalty if something does slip through. Skipping it means you can screen perfectly and still fail an audit because you cannot prove you did.

## Building vs buying a screening engine

Packaged screening products exist and can be a good fit, especially for standard needs with off-the-shelf list coverage. The case for building custom gets stronger when screening has to be embedded deeply into your own platform, when your matching and review workflow is specific to how your business operates, or when you need the screening engine to sit natively inside a larger custom trade system rather than bolted on as a separate tool.

A custom engine also gives you control over the matching logic, the thresholds, the list sources, and the audit format, and it lets screening share data cleanly with the rest of your operation, your [HTS classification](/blog/hts-classification-software), your entry filing, your order management. You own the result, which matters when the compliance logic is central to your business.

Kadmoon builds trade and supply chain software for the US market, including screening, classification, and customs systems, with a senior in-house team and full ownership handed to you on delivery. If restricted-party screening is a gap in your stack, you can [get a technical proposal](/#contact) or explore [what we build](/#capabilities).
