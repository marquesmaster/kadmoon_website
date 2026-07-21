---
title: "Microservices vs monolith: which architecture to choose"
description: "Microservices vs monolith explained for decision-makers: how each works, the modular monolith middle ground, operational cost, and how to choose by stage."
category: "Comparisons"
primaryKeyword: "microservices vs monolith"
tags: ["monolith vs microservices", "architecture comparison", "when to use microservices"]
---

The microservices vs monolith debate gets treated like a values contest, where one side is modern and the other is legacy. That framing costs teams real money. The honest answer is that architecture is a trade against your team size, your operational maturity, and your rate of change. This piece lays out how each model actually behaves so you can pick the one that fits where you are, not where a conference talk says you should be.

## How each architecture works

A monolith is one deployable application. The code lives in a single repository, runs as one process (or a few identical copies behind a load balancer), and usually talks to one database. A function call to another part of the system is exactly that: a call in memory, fast and transactional.

Microservices split the same functionality into many small services, each owning its own data and deployed independently. They talk over the network, through HTTP or a message queue. Ordering, payments, and inventory might each be a separate service with its own database, release schedule, and on-call rotation.

The core difference is not size, it is boundaries. In a monolith the boundaries are logical and cheap to cross. In microservices they are physical, which buys independence at the price of a network hop and a distributed system underneath everything you do.

That physical boundary changes what "a simple change" means. In a monolith, updating how an order affects inventory is one edit, tested and deployed together, wrapped in a single database transaction that either fully succeeds or fully rolls back. Split those into separate services and the same change becomes a coordination problem: two deployments, two data stores that must agree, and a window where one has updated and the other has not. Neither model is wrong. They are optimized for different problems, and the mistake is picking one for its reputation rather than for the problem in front of you.

## The modular monolith middle ground

Most teams that think they need microservices actually need a well-organized monolith. A modular monolith keeps the single deployment but enforces clean internal boundaries: separate modules with defined interfaces, minimal shared state, and domain logic that does not leak across modules.

This gets you most of the maintainability benefit people attribute to microservices without the operational tax. You still deploy once, you still get database transactions across the whole request, and you can refactor a boundary in an afternoon instead of coordinating two services and a migration. When a module later proves it needs independent scaling or a separate release cadence, you can extract it into a service on purpose. Starting modular makes that extraction cheap. Starting distributed makes everything expensive from day one.

## Operational complexity

This is where the bill comes due, and it is the factor teams underestimate most. A monolith has one thing to deploy, one set of logs, and one place a request lives when it fails. You can reason about it.

Microservices turn every feature that spans services into a distributed systems problem. You now deal with partial failures, retries, idempotency, network timeouts, eventual consistency, and traces that span a dozen hops. You need service discovery, centralized logging, distributed tracing, and a deployment pipeline that can ship services safely without lockstep releases. Running that reliably usually means Kubernetes, infrastructure defined in Terraform, and engineers who have operated distributed systems before. None of it is exotic, but all of it is work that does not ship customer features.

If your team cannot yet describe how they would debug a request that failed across three services at 2am, the operational cost is higher than the architecture diagram suggests.

## Team and scaling considerations

Microservices were designed to solve an organizational problem before a technical one. When you have many engineers, a single codebase becomes a coordination bottleneck: everyone merges into the same trunk, releases queue up, and one team's bug blocks another team's deploy. Independent services let independent teams own and ship their piece without waiting.

That benefit only appears at a certain headcount. With five or ten engineers, splitting into services mostly means fewer people carrying more operational surface, and the coordination you removed from the codebase reappears as coordination between services. Scaling has two meanings here. Organizational scaling (more teams) genuinely favors services past a threshold. Load scaling rarely requires them: a monolith scales horizontally by running more copies, and you can put a cache or a queue in front of the hot path long before you need to split the app.

## Cost and speed trade-offs

Early on, a monolith is faster to build and cheaper to run. One pipeline, one environment, one mental model. Features that touch several domains are a single change instead of a cross-service negotiation. For an MVP or a product still searching for fit, that speed is the whole game, and rework from a rushed distributed design is a common way to burn a runway.

Microservices trade that early speed for later independence. Past real scale, the ability to deploy, scale, and staff services separately can be worth the overhead. The mistake is paying the overhead before you have the scale that justifies it. The related mistake is assuming a monolith cannot be clean. A disciplined modular monolith stays maintainable for years, and much of what gets blamed on "the monolith" is really just tangled code that microservices would have distributed rather than fixed.

## Choosing based on your stage

A rough guide that holds up in practice:

- **Early stage or new product:** start with a modular monolith. Optimize for speed and for changing your mind cheaply. Keep clean internal boundaries so you can extract services later.
- **Growth stage, one product, growing team:** stay monolithic but invest in module boundaries and test coverage. Extract a service only when a specific part has a concrete need, such as very different scaling or a separate compliance boundary.
- **Scale stage, many teams:** selective microservices earn their cost. Split along team and domain lines, and only after your operational tooling (observability, CI/CD, on-call) is genuinely ready.

The decision is reversible in one direction and painful in the other. Extracting a service from a clean monolith is routine. Merging sprawling microservices back into something maintainable is a rescue project. When we design a system, we tend to start with the boundaries clear and the deployment simple, then distribute only where the evidence demands it. You can see [what we build](/#capabilities) and the stack we work in, or read [the custom software development process](/blog/custom-software-development-process) for how architecture decisions fit the wider build. If you want a second opinion on an architecture you are weighing, [start a project](/#contact) and we will walk through the trade-offs against your actual load and team.
