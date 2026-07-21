---
title: "Monolith to microservices: when and how to migrate"
description: "When to migrate a monolith to microservices and how to do it safely: the strangler-fig approach, service boundaries, data consistency, and incremental cutover."
category: "Legacy Modernization"
primaryKeyword: "monolith to microservices"
tags: ["microservices migration", "break up monolith", "decompose monolith"]
---

Microservices are one of the most oversold and most misapplied patterns in software. Splitting a monolith can solve real problems around scaling and team autonomy, or it can trade one set of headaches for a worse distributed one. The decision is not about being modern. It is about whether the specific pain you have is the kind microservices actually fix. This is when the migration is worth it and how to do it without breaking production.

## When a monolith actually hurts

A monolith is not a problem by default. Plenty of large, successful systems are monoliths, and they are simpler to develop, deploy, and debug because everything lives in one place. The trouble starts when specific symptoms show up.

- Teams block each other because one deploy carries everyone's changes, so a bug anywhere freezes the whole release.
- One part of the system needs far more resources than the rest, but you have to scale the entire thing to feed it.
- The codebase is so entangled that a change in one area breaks something unrelated.
- The build and test cycle grows so slow that iteration crawls.

If you recognize these, the monolith is genuinely costing you. If you do not, you may be looking for a fashionable fix to a problem you do not have. Our comparison of [microservices vs monolith architecture](/blog/microservices-vs-monolith-architecture) covers the trade-offs before you commit.

## Why microservices are not always the answer

Distributed systems move complexity, they do not remove it. What was a function call inside one process becomes a network call that can be slow, fail, or time out. What was a single database transaction becomes coordination across services that can end up inconsistent.

You also take on operational weight: service discovery, distributed tracing, independent deployment pipelines, and monitoring across many moving parts. A small team that splits into ten services before it has the tooling to run them often ends up slower, not faster. If your real problem is a messy codebase rather than a scaling wall, cleaning up the monolith is frequently the better investment. Sometimes the honest answer is a well-organized modular monolith, and [when to use microservices](/blog/when-to-use-microservices) helps you tell the difference.

## The strangler-fig approach

Assuming the split is justified, do not attempt a big-bang rewrite. Rewrites that try to replace everything at once have a long history of running over budget and failing to reach parity.

The strangler-fig pattern is the safer path. You put a routing layer in front of the monolith, then extract one capability at a time into a new service. The router sends traffic for the migrated capability to the new service and everything else to the monolith. Over time, more capabilities move out until the monolith shrinks to nothing or to a small stable core. The system keeps running throughout, and you can stop or slow down if a step goes wrong. We cover the mechanics in [the strangler-fig pattern for modernization](/blog/strangler-fig-pattern-modernization).

## Defining service boundaries

Where you cut matters more than anything else. Bad boundaries create services so chatty and interdependent that you get all the cost of distribution with none of the benefit.

Draw boundaries around business capabilities, not technical layers. A service should own a coherent slice of the domain end to end, such as billing or inventory, including its own data. The test of a good boundary is that most changes stay inside one service, and that services talk through clear, stable interfaces rather than reaching into each other's internals. If two proposed services always change together, they probably belong as one.

## Data, transactions, and consistency

This is the hardest part, and the part teams underestimate.

In a monolith, a single database transaction keeps related changes consistent: either all of them happen or none do. Split across services with separate databases, that guarantee is gone. An operation that spans services can succeed in one and fail in another.

You handle this by keeping operations that must be atomic inside a single service, and by accepting eventual consistency where you can. Where a process genuinely spans services, you coordinate it with patterns like sagas that define compensating actions to undo partial work. The key decision is which data must stay strongly consistent and which can converge over time, and that decision should shape your boundaries.

Reporting and queries that span services are the quieter version of the same problem. In a monolith you join across tables in one query. Once the data lives in separate services, that join no longer exists, and you have to either call several services and combine the results or maintain a separate read model that aggregates what you need. Neither is free, and teams that focus only on the write path get surprised when a simple cross-cutting report turns into an engineering project. Factor the read side into your boundary decisions, not just the transactional side.

## Migrating incrementally

Pull it together into a disciplined loop.

- Pick one capability with clear boundaries and real pain, ideally not the riskiest part first.
- Build the new service and route a slice of traffic to it while the monolith still handles the rest.
- Watch it under real load, compare against the old behavior, and keep a fast path to roll back.
- Once it is stable, move the data and retire that piece of the monolith.
- Repeat, and stop when the remaining monolith no longer hurts.

You do not have to reach pure microservices to win. Extracting the two or three parts that actually cause pain often captures most of the benefit at a fraction of the risk. If you are weighing this migration, [get a technical proposal](/#contact) grounded in your system, or read more on [how to modernize legacy software](/blog/how-to-modernize-legacy-software).
