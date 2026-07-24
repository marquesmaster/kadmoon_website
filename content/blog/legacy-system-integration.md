---
title: "Legacy system integration: connecting old and new"
description: "How to integrate legacy systems with modern software: wrapping them in APIs, handling files and databases, cleaning data, and reducing risk safely."
category: "Integrations & APIs"
primaryKeyword: "legacy system integration"
tags: ["integrate legacy systems", "legacy api", "connect legacy software", "legacy modernization"]
takeaways:
  - "Integration lets you add new capabilities without betting the company on a rewrite, which matters because roughly 79 percent of federal IT spending goes to operating and maintaining existing systems."
  - "The most durable pattern is an API facade in front of the old system, which decouples new work from legacy internals and gives one controlled place for logging, validation, and rate limiting."
  - "Choose the least invasive access method that meets your needs, preferring API or file exchange over direct database access or brittle screen scraping."
  - "Build transformation and validation into the integration itself and pick one source of truth per field, since copying dirty legacy data multiplies errors, with poor data quality costing about 12.9 million dollars per organization a year."
  - "The strangler pattern retires a legacy system safely, rebuilding one capability at a time behind the facade so consumers never know which pieces have moved, avoiding a big-bang cutover."
faqs:
  - q: "What is the best way to integrate a legacy system with modern software?"
    a: "The most durable pattern is to put a modern API layer, or facade, in front of the old system that exposes clean, well-documented endpoints while talking to the legacy system in whatever dialect it requires underneath. This decouples everything you build next from the legacy internals, so you can later replace the old system without changing its consumers, and it gives you a single controlled place to add logging, validation, and rate limiting."
  - q: "What are the options for getting data out of a legacy system?"
    a: "In rough order of preference: an API or web service if one exists or can be added, file or EDI exchange when batch is acceptable and an official export exists, direct database access when you fully understand the schema and business rules, and screen scraping as a last resort when nothing else is exposed. Each trades reliability against how invasive it is, so prefer the least invasive option that meets your latency needs."
  - q: "How do you avoid spreading bad data during a legacy integration?"
    a: "Build transformation and validation into the integration itself: map legacy fields to a well-defined target model, normalize formats, and reject or quarantine records that fail validation rather than passing garbage downstream. Decide explicitly which system is the source of truth for each piece of data. Catching bad records at the integration boundary is far cheaper than tracing a wrong number back through three systems, given poor data quality costs about 12.9 million dollars per organization a year."
  - q: "What is the strangler pattern for legacy modernization?"
    a: "The strangler pattern retires a legacy system slowly and safely. You route traffic through a new API facade, then rebuild one capability at a time behind it, redirecting each slice from the legacy system to a modern replacement as it is ready. Because consumers talk to the stable facade, they never know which pieces have moved, so you can modernize the highest-risk module first and continue at a pace the business can absorb without a single terrifying cutover."
---

The system nobody wants to touch is usually the one running the business. Legacy software holds decades of logic and data, and ripping it out is rarely an option. Integration is how you get new capabilities without betting the company on a rewrite. This is a practical look at connecting old systems to modern software: why it is hard, the techniques that work, and how to keep the whole thing from breaking production.

## Why legacy systems resist integration

Legacy systems were not built to be connected. Many predate the idea of a clean API. They expose data through fixed-width files, direct database access, or a green-screen terminal, and the business rules that matter are buried in code no one has read in years. That resistance is structural, not accidental.

The scale of the problem is easy to underestimate. The US federal government is the clearest public example: it spends [more than $100 billion a year on IT, and about $83 billion of that, roughly 79%, went to operations and maintenance of existing systems in fiscal year 2025](https://www.gao.gov/products/gao-25-107795) rather than new development. A separate GAO review of the government's most critical legacy systems found them [ranging from about 8 to 51 years old and costing roughly $337 million a year to run](https://www.gao.gov/products/gao-23-106821), several of them still written in COBOL. Private enterprises rarely track it as carefully, but the pattern is the same: most of the money and risk sits in keeping old systems alive.

A few things make integration genuinely hard. Documentation is thin or wrong. The people who understood the system have left, and as GAO noted, agencies struggle to even find staff who know languages like COBOL and often pay a premium for the few who do. The data model reflects assumptions from a different era. And the system often cannot tolerate extra load or downtime, because it runs something critical. None of this means integration is impossible. It means you approach a legacy system the way you approach a live wire: carefully, with respect for what happens if you get it wrong.

## Wrapping legacy with APIs

The most durable pattern is to put a modern interface in front of the old system. You build an API layer, sometimes called a facade, that exposes clean, well-documented endpoints while it talks to the legacy system in whatever ugly dialect it requires underneath. New applications integrate with the tidy API and never touch the mess behind it.

This buys you two things. It decouples everything you build next from the legacy internals, so when you eventually replace the old system, consumers of the API do not have to change. And it gives you a single, controlled place to add logging, validation, and rate limiting, which protects the fragile system behind it. Designing that layer well is an [API-first development](/blog/api-first-development) exercise: define the contract you wish the legacy system had, then implement it against reality. The facade becomes the seam along which you can later modernize.

## Files, databases, and screen scraping

Not every legacy system can be wrapped cleanly, and you work with what it gives you. In rough order of preference, here are the common access methods:

- Database-level access: reading or writing the legacy database directly. Fast and reliable, but risky, because you bypass the application's business rules and can corrupt data if you misunderstand the schema.
- File exchange: the system exports and imports flat files or EDI on a schedule. Unglamorous but robust, and often the officially supported path for older platforms.
- Screen scraping or terminal automation: driving the user interface programmatically when nothing else is exposed. A last resort, brittle by nature, but sometimes the only door available.

Each method trades reliability against how invasive it is. Prefer the least invasive option that meets your latency needs. If the system supports a supported export, use it before you reach into its database. And when EDI is the language the legacy system speaks, our guide to [EDI integration for supply chain](/blog/edi-integration-for-supply-chain) covers the transaction sets and mapping involved.

The trade-offs line up predictably, which is why it helps to name them before you commit to a path:

| Access method | Reliability | Risk to source system | When to use |
| --- | --- | --- | --- |
| API or web service | High | Low | The system already exposes one, or can be extended to |
| File or EDI exchange | High | Low | Batch is acceptable and an official export exists |
| Direct database | High | High | You fully understand the schema and business rules |
| Screen scraping | Low | Medium | Nothing else is exposed and the workflow is stable |

The right row is usually the highest one your legacy system actually supports. Reaching further down the table than you need to is how integrations become fragile.

## Data quality and transformation

Old systems accumulate old data, and old data is messy. Dates in three formats, customer names entered five ways, codes whose meaning changed in 2009 but were never migrated. The moment you integrate, this mess flows into your clean new system unless you stop it.

Build transformation and validation into the integration itself. Map legacy fields to a well-defined target model, normalize formats, and reject or quarantine records that fail validation rather than passing garbage downstream. Decide explicitly which system is the source of truth for each piece of data, because "both" is how you get two systems that quietly disagree. This cleanup work is usually underestimated and often the difference between an integration that helps and one that spreads confusion.

The cost of skipping it is not hypothetical. Recall that Gartner has put the average annual cost of poor data quality at [about $12.9 million per organization](https://www.gartner.com/en/data-analytics/topics/data-quality). An integration that copies dirty legacy data into a modern system does not launder it clean; it multiplies the surface area where those errors surface. Every downstream report, dashboard, and automated decision now inherits whatever the old system got wrong. Catching bad records at the integration boundary is far cheaper than tracing a wrong number back through three systems after a stakeholder acts on it.

## Incremental modernization via integration

Integration is not just a way to keep the old system alive, it is a way to retire it slowly and safely. The strangler pattern is the standard approach: you route traffic through your new API layer, then rebuild one capability at a time behind it, redirecting each slice from the legacy system to a modern replacement as it is ready.

Because consumers talk to the stable facade, they never know which pieces have moved. You can modernize the highest-risk or highest-value module first, prove it in production, and continue at a pace the business can absorb. This is how you chip away at that 79% maintenance drag without a single terrifying cutover. Over months or years the legacy system shrinks until what remains can be switched off. This is far less dangerous than a big-bang rewrite. For the broader strategy of choosing between rehost, replatform, and rebuild, see [how to modernize legacy software](/blog/how-to-modernize-legacy-software).

## Reducing risk in the process

Legacy integration goes wrong in predictable ways, so you can plan against them. Protect the source system first: add caching and rate limiting so your integration never overloads a machine that cannot scale. Make writes idempotent and reversible where you can, so a retry does not double-post an order. Log every exchange, because when data disagrees you will need to trace exactly what moved and when.

Test against a copy of real data, not tidy sample records, since the edge cases in production data are the ones that break you. Roll out incrementally behind a switch you can flip back. And keep a human review step for the highest-stakes flows until the integration has proven itself. The goal is not a heroic cutover, it is a boring one where nothing surprising happens. If you are weighing a custom integration layer against a packaged tool, our comparison of [middleware and integration platforms](/blog/middleware-and-integration-platforms) lays out the trade-offs. When you are ready to connect an old system without gambling on a rewrite, [start a project](/#contact).
