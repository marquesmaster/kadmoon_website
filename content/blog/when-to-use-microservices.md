---
title: "When to use microservices (and when to avoid them)"
description: "A clear-eyed guide to when to use microservices vs a monolith, the hidden operational cost, the signals you actually need them, and how to make the call."
category: "Tech Stack"
primaryKeyword: "when to use microservices"
tags: ["microservices vs monolith", "microservices trade-offs", "should i use microservices"]
---

Microservices got treated as a default for a while, as though splitting an application into many small services was automatically the mature choice. For most teams, at most stages, it is the wrong one. Microservices solve specific problems at a real and ongoing cost, and adopting them without those problems buys you the cost and none of the benefit. This guide lays out what they actually solve, what they actually cost, and how to tell which situation you are in.

## What problems microservices solve

A microservices architecture splits an application into independent services, each owning one capability, each deployable on its own. When it fits, it addresses a handful of concrete problems.

The first is independent scaling. If one part of your system, say image processing, needs far more compute than the rest, a separate service lets you scale just that part instead of the whole application. The second is independent deployment. Teams can ship their own service without coordinating a single release across everyone, which matters when many teams work on one product. The third is fault isolation, done right: a failure in one service can be contained instead of taking down the whole system. And the fourth is technology flexibility, letting one service use a different language or database where it genuinely helps.

Notice that these benefits are mostly about organizational scale and specific technical pressures, not about code quality in the abstract. That distinction is the whole decision.

## The hidden operational cost

The pitch for microservices tends to skip the bill, so here it is. Splitting an application into services turns method calls into network calls, and everything that was simple inside one process becomes a distributed-systems problem.

- Network failure is now normal. Services call each other over the network, which fails, times out, and gets slow, so you need retries, timeouts, and circuit breakers everywhere.
- Data consistency gets hard. A transaction that touched one database now spans several, and keeping them consistent is a genuinely difficult problem with no clean answer.
- Operations multiply. Instead of deploying and monitoring one thing, you deploy, monitor, log, and trace many, which demands real infrastructure investment in orchestration and observability.
- Debugging spans services. A single request hops through several services, so understanding what went wrong means tracing across all of them.

This overhead is not a one-time setup cost. It is a permanent tax on every feature you build afterward. For a small team, that tax can swamp all the theoretical benefits.

## Signals you actually need them

So when is the cost worth paying? A few signals, ideally more than one at once.

You have multiple teams stepping on each other in a single codebase, and deployment coordination has become a bottleneck. You have a genuine, measured scaling problem where one component's load differs by an order of magnitude from the rest. You have parts of the system with very different reliability or compliance requirements that benefit from hard isolation. And, importantly, you already have the operational maturity, the CI/CD, monitoring, and on-call discipline, to run distributed systems without drowning.

If you are a single team building a product that a monolith serves fine, none of these apply yet, and adopting microservices now is solving a problem you do not have while creating several you do. This is the same discipline as knowing [when to build custom software](/blog/when-to-build-custom-software) at all: match the tool to the actual problem.

## The modular monolith alternative

The false choice is between a tangled monolith and microservices. There is a better default in between: the modular monolith.

A modular monolith is a single deployable application organized internally into clear modules with well-defined boundaries. You get the clean separation of concerns that people think requires microservices, without the network calls, distributed data, and operational overhead. Modules talk to each other in-process, which is fast and simple, and the codebase deploys as one unit.

The real advantage is that a well-modularized monolith is the ideal starting point if you ever do need microservices. Because the boundaries are already clear, you can extract a module into its own service later, when a concrete signal justifies it, using an approach like the [strangler fig pattern](/blog/strangler-fig-pattern-modernization). Start modular, split only when the pain is real. That sequence gives you optionality without the upfront tax.

## Team and scale prerequisites

There is an organizational rule of thumb worth internalizing: your architecture tends to mirror your team structure. Microservices work when you have multiple autonomous teams that can each own services end to end. With one team, distributing your architecture just distributes your one team across many services it now has to context-switch between.

Before microservices make sense, you generally want mature automated deployment, solid monitoring and tracing, infrastructure defined as code, and an on-call practice that can handle distributed failures. If those are not in place, adding microservices adds risk faster than it adds capability. The infrastructure to run them well, containers, orchestration, observability, is itself a significant build.

## Making the call

Put the decision in plain terms. Choose a monolith, ideally a modular one, when you are a single team, when your scaling needs are uniform, and when you want to move fast without operational overhead. That covers the large majority of products, especially early ones.

Reach for microservices when you have multiple teams needing independent deployment, a real and specific scaling or isolation requirement, and the operational maturity to run distributed systems. And even then, you rarely need to start there. Begin with a clean modular monolith and extract services only where a concrete need appears.

The failure mode to avoid is choosing an architecture for its reputation rather than your requirements. If you want an architecture matched to your actual stage and roadmap rather than to fashion, you can [start a project](/#contact) with a team that will tell you when the simpler option is the right one, or see [what we build](/#capabilities) for how we approach system design.
