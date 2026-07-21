---
title: "Legacy system integration: connecting old and new"
description: "How to integrate legacy systems with modern software: wrapping them in APIs, handling files and databases, cleaning data, and reducing risk while you modernize."
category: "Integrations & APIs"
primaryKeyword: "legacy system integration"
tags: ["integrate legacy systems", "legacy api", "connect legacy software"]
---

The system nobody wants to touch is usually the one running the business. Legacy software holds decades of logic and data, and ripping it out is rarely an option. Integration is how you get new capabilities without betting the company on a rewrite. This is a practical look at connecting old systems to modern software: why it is hard, the techniques that work, and how to keep the whole thing from breaking production.

## Why legacy systems resist integration

Legacy systems were not built to be connected. Many predate the idea of a clean API. They expose data through fixed-width files, direct database access, or a green-screen terminal, and the business rules that matter are buried in code no one has read in years. That resistance is structural, not accidental.

A few things make integration genuinely hard. Documentation is thin or wrong. The people who understood the system have left. The data model reflects assumptions from a different era. And the system often cannot tolerate extra load or downtime, because it runs something critical. None of this means integration is impossible. It means you approach a legacy system the way you approach a live wire: carefully, with respect for what happens if you get it wrong.

## Wrapping legacy with APIs

The most durable pattern is to put a modern interface in front of the old system. You build an API layer, sometimes called a facade, that exposes clean, well-documented endpoints while it talks to the legacy system in whatever ugly dialect it requires underneath. New applications integrate with the tidy API and never touch the mess behind it.

This buys you two things. It decouples everything you build next from the legacy internals, so when you eventually replace the old system, consumers of the API do not have to change. And it gives you a single, controlled place to add logging, validation, and rate limiting, which protects the fragile system behind it. Designing that layer well is an [API-first development](/blog/api-first-development) exercise: define the contract you wish the legacy system had, then implement it against reality. The facade becomes the seam along which you can later modernize.

## Files, databases, and screen scraping

Not every legacy system can be wrapped cleanly, and you work with what it gives you. In rough order of preference, here are the common access methods:

- Database-level access: reading or writing the legacy database directly. Fast and reliable, but risky, because you bypass the application's business rules and can corrupt data if you misunderstand the schema.
- File exchange: the system exports and imports flat files or EDI on a schedule. Unglamorous but robust, and often the officially supported path for older platforms.
- Screen scraping or terminal automation: driving the user interface programmatically when nothing else is exposed. A last resort, brittle by nature, but sometimes the only door available.

Each method trades reliability against how invasive it is. Prefer the least invasive option that meets your latency needs. If the system supports a supported export, use it before you reach into its database. And when EDI is the language the legacy system speaks, our guide to [EDI integration for supply chain](/blog/edi-integration-for-supply-chain) covers the transaction sets and mapping involved.

## Data quality and transformation

Old systems accumulate old data, and old data is messy. Dates in three formats, customer names entered five ways, codes whose meaning changed in 2009 but were never migrated. The moment you integrate, this mess flows into your clean new system unless you stop it.

Build transformation and validation into the integration itself. Map legacy fields to a well-defined target model, normalize formats, and reject or quarantine records that fail validation rather than passing garbage downstream. Decide explicitly which system is the source of truth for each piece of data, because "both" is how you get two systems that quietly disagree. This cleanup work is usually underestimated and often the difference between an integration that helps and one that spreads confusion.

## Incremental modernization via integration

Integration is not just a way to keep the old system alive, it is a way to retire it slowly and safely. The strangler pattern is the standard approach: you route traffic through your new API layer, then rebuild one capability at a time behind it, redirecting each slice from the legacy system to a modern replacement as it is ready.

Because consumers talk to the stable facade, they never know which pieces have moved. You can modernize the highest-risk or highest-value module first, prove it in production, and continue at a pace the business can absorb. Over months or years the legacy system shrinks until what remains can be switched off. This is far less dangerous than a big-bang rewrite. For the broader strategy of choosing between rehost, replatform, and rebuild, see [how to modernize legacy software](/blog/how-to-modernize-legacy-software).

## Reducing risk in the process

Legacy integration goes wrong in predictable ways, so you can plan against them. Protect the source system first: add caching and rate limiting so your integration never overloads a machine that cannot scale. Make writes idempotent and reversible where you can, so a retry does not double-post an order. Log every exchange, because when data disagrees you will need to trace exactly what moved and when.

Test against a copy of real data, not tidy sample records, since the edge cases in production data are the ones that break you. Roll out incrementally behind a switch you can flip back. And keep a human review step for the highest-stakes flows until the integration has proven itself. The goal is not a heroic cutover, it is a boring one where nothing surprising happens. If you are weighing a custom integration layer against a packaged tool, our comparison of [middleware and integration platforms](/blog/middleware-and-integration-platforms) lays out the trade-offs. When you are ready to connect an old system without gambling on a rewrite, [start a project](/#contact).
