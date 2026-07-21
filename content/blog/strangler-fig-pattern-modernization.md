---
title: "The strangler fig pattern for safe modernization"
description: "How the strangler fig pattern replaces legacy systems incrementally with routing, facades, and data consistency, avoiding the risk of a big-bang rewrite."
category: "Legacy Modernization"
primaryKeyword: "strangler fig pattern"
tags: ["strangler pattern", "incremental modernization", "gradual system replacement", "legacy migration"]
---

The strangler fig pattern is a way to replace an old system without the terrifying moment where you switch everything over at once and pray. It is named after a plant that grows around a host tree, gradually taking over until the original is gone, and the software version works the same way. You build the new system around the old one, move capability across piece by piece, and retire the legacy system only once nothing depends on it. This guide explains how it works and why it beats the alternative.

## What the strangler fig pattern is

Instead of rewriting a legacy application and cutting over in one release, you place a routing layer in front of the old system. At first, that layer sends every request to the legacy code. Then you build one slice of functionality in a new system, and reroute just that slice to the new code while everything else keeps flowing to the old.

Over time you move more slices across. The legacy system handles less and less until it handles nothing, and you switch it off. At every point in that journey the application works, users are served, and you have taken only small, reversible steps. That is the whole idea: turn one enormous risky change into a long series of small safe ones.

## Why big-bang rewrites fail

The obvious alternative, rewrite the whole thing and flip the switch, fails so reliably that it deserves explaining. The numbers back this up. The Standish Group's CHAOS research, which has tracked tens of thousands of IT projects, found that [large projects succeed only about 9% of the time](https://opencommons.org/CHAOS_Report_on_IT_Project_Outcomes), with the majority challenged and roughly a third canceled outright. Its earlier baseline was worse still: just 16.2% of projects delivered on time and on budget, and the projects that did survive at large firms shipped only 42% of their originally planned features. Size is the enemy, and a full rewrite is the largest project you can pick.

Several forces work against the big bang at once. A full rewrite takes a long time, and for that entire period you deliver no value while the business keeps needing changes to the old system. You end up maintaining two codebases and falling behind on both. Requirements drift while you build, so the target moves. And the cutover itself is a single catastrophic event: if anything goes wrong, and with a large system something always does, you roll back a year of work or push through a crisis.

The legacy system also encodes years of accumulated business rules, many undocumented, some understood by no one still at the company. A rewrite has to rediscover all of them, and the ones it misses become production incidents on cutover day. Incremental replacement surfaces those rules one slice at a time, where they are manageable. For the wider set of options, see [how to modernize legacy software](/blog/how-to-modernize-legacy-software).

The cost of leaving old systems in place is not small either. The federal government is the clearest public example: GAO reported that of the roughly $95 billion 26 agencies planned to spend on IT in fiscal year 2024, [about $74 billion went to operating and maintaining existing systems](https://www.gao.gov/products/gao-25-107795) versus only $21 billion for new development and modernization. Agencies typically pour around 80% of their IT money into keeping old systems running. Private companies rarely publish the split, but the pattern is the same: the longer modernization waits, the more of your budget the past consumes.

## Routing and facade layers

The mechanism that makes this work is a layer that sits between users and the systems behind them, deciding where each request goes.

This is sometimes called a facade or an anti-corruption layer. It presents a stable interface to the outside world while, behind it, requests are routed to either the legacy system or its replacement based on rules you control. Early on, the rules are simple: everything goes to legacy. As you migrate, you add rules that send specific paths to the new system.

A facade does more than route. It can translate between the new system's clean model and the legacy system's messier one, so the new code is not polluted by old assumptions. This keeps the replacement clean even while it coexists with the thing it is replacing, which matters because coexistence lasts months, not days.

## Migrating capability by capability

Choosing what to move first is a strategy decision, not a coin flip. Good early candidates share a few traits: they are relatively self-contained, they carry real business value or pain, and they are not so deeply entangled with everything else that moving them is a project on its own.

A sensible sequence often starts with a read-only or low-risk capability to prove the pattern and the routing layer, then progresses to more central functionality once the team trusts the approach. Each migration follows the same loop: build the slice in the new system, route to it, validate against real usage, and move on. Because each step is small, estimates are more reliable and the team keeps shipping, which is exactly the cadence of two-week sprints with a working demo. Given that CHAOS data shows small projects succeeding at far higher rates than large ones, breaking a rewrite into small slices is not just safer, it directly moves the odds in your favor. This is also a natural on-ramp to a cleaner architecture, whether that ends up as a modular monolith or, where it is genuinely warranted, [microservices](/blog/when-to-use-microservices).

## Keeping data consistent

Data is the hard part, and the part teams underestimate. While old and new systems run side by side, both may need to read and sometimes write the same information, and it has to stay consistent.

There are a few workable approaches:

- Shared database during transition. Both systems read from the same store, and you migrate the schema gradually. Simple, but it couples the systems.
- Synchronization. Each system owns its data and changes are propagated between them, often through events. More flexible, more moving parts.
- Migrate data with the capability. When a slice moves, its data moves with it, and the facade routes reads and writes accordingly.

Which fits depends on how entangled the data is. The key discipline is defining, for each piece of data, which system is the source of truth at each stage, so you never have two systems silently disagreeing about the same record.

## Retiring the legacy system

The pattern's payoff is a clean ending. As capabilities move across, you watch the legacy system's traffic fall. Once a component receives no requests, you can confirm it is truly unused, then decommission it. Eventually the whole old system goes dark, not in a dramatic cutover but as the quiet last step of a process that has been safe throughout.

There is a discipline worth naming here: actually finish. Half-migrated systems, where the strangler stalled and both old and new run forever, are their own kind of technical debt, and they push you right back into that 80% maintenance trap the modernization was meant to escape. Plan the retirement of each component as part of migrating it, and hold the line until the legacy system is gone.

Done well, the strangler fig pattern turns modernization from a bet-the-company gamble into ordinary, steady engineering. If you are staring at an aging system you cannot afford to break, you can [start a project](/#contact) to map an incremental path, or read [legacy system replacement](/blog/legacy-system-replacement-guide) for the step-by-step version.
