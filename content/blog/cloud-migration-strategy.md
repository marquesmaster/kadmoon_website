---
title: "Cloud migration strategy: the 6 Rs and how to choose"
description: "A practical cloud migration strategy: the 6 Rs explained, how to assess your portfolio, control cost and risk, and avoid lift-and-shift regret."
category: "Legacy Modernization"
primaryKeyword: "cloud migration strategy"
tags: ["migrate to the cloud", "cloud migration approaches", "lift and shift vs refactor"]
---

Cloud migration goes wrong in a predictable way: a team lifts everything as-is, the cloud bill comes in higher than the data center it replaced, and nobody can explain what improved. That is not a cloud problem. It is a strategy problem. Migration is not one decision. It is a decision per application, and the 6 Rs give you a vocabulary for making each one deliberately instead of defaulting to lift-and-shift for the whole portfolio.

## Why migrate to the cloud

Before choosing a path, be honest about why you are moving. "Everyone else is" is not a reason that survives a budget review. The real drivers are concrete: a data center lease or hardware refresh coming due, the need to scale elastically instead of provisioning for peak year-round, a desire to ship faster with managed services, resilience and disaster recovery you cannot easily build on-premises, or consolidating after an acquisition.

The reason shapes the strategy. If you are escaping a hardware deadline, speed matters and a simpler migration may fit. If you are chasing agility and elastic scale, a deeper transformation of key systems pays off. Naming the driver keeps you from over-engineering low-value systems or under-investing in the ones that would actually benefit.

## The 6 Rs of migration

The 6 Rs are the standard menu of migration approaches, ordered roughly from least to most transformation.

- Rehost ("lift and shift"): move the application to cloud infrastructure with little or no change. Fastest, cheapest to execute, but you carry old inefficiencies with you and gain little beyond a new location.
- Replatform ("lift and tinker"): make targeted improvements during the move, such as swapping a self-managed database for a managed one, without rewriting the app. A common sweet spot.
- Refactor: rework the application to use cloud-native services, redesigning parts for elasticity and managed infrastructure. Highest effort, highest payoff for systems that matter.
- Repurchase: drop the custom or legacy app and move to a commercial product instead. Sensible when the function is commodity.
- Retire: turn it off. Portfolio reviews always find applications nobody actually uses.
- Retain: leave it where it is, for now. Some systems are not ready or not worth moving yet.

Most real migrations use several of these across different applications. The skill is matching each system to the right R rather than forcing one approach on everything.

## Assessing your application portfolio

You cannot choose an R without understanding what you have. A portfolio assessment inventories every application and scores each on a few dimensions: business value and criticality, technical complexity and dependencies, current pain (cost, performance, fragility), and compliance or data-sensitivity constraints.

That scoring points to the path. A low-value, low-complexity app might be retired or repurchased. A high-value system that is straining under load is a refactor candidate. A stable but unremarkable app might replatform. A system tangled in dependencies you do not yet understand may be retained until you do.

This assessment is really a modernization exercise, and it overlaps heavily with deciding [how to modernize legacy software](/blog/how-to-modernize-legacy-software) in general. Dependency mapping is the part teams skip and regret, because a system that looks isolated often turns out to feed three others.

## Cost, security, and compliance

Cloud can cost less, and it can cost more. The difference is design. Lift-and-shift a workload sized for peak load and running 24/7, and you pay cloud premiums for on-premises habits. Right-size it, use autoscaling, and turn off what you do not need, and the economics improve. Model the run cost before you migrate, not after the first bill. This is the same total-cost thinking behind any [software project budget](/blog/how-to-budget-for-a-software-project): the migration is the build cost, and the monthly cloud spend is the run cost that never stops.

Security changes shape in the cloud rather than disappearing. The shared-responsibility model means the provider secures the infrastructure and you secure your configuration, identity, and data. Misconfigured storage and over-broad access are the common failures, and they are yours to prevent. Building on a security-first foundation, with encryption, least-privilege access, and audited logging, matters as much here as it does for [SaaS security and compliance](/blog/saas-security-and-compliance).

Compliance and data residency need to be settled before migration, not discovered during it. Where regulated data can live, and which controls apply, sometimes rules out certain regions or services. Confirm this early.

## Avoiding lift-and-shift regret

Lift and shift is popular because it is fast and low-risk to execute, and sometimes that is exactly right, such as beating a data-center deadline. The regret comes when teams treat rehosting as the finish line for systems that needed more.

The symptom is familiar: you moved everything, the bill went up, performance is unchanged, and you still have the same brittle architecture, now running somewhere more expensive. Rehosting a workload does not make it elastic, cheaper to run, or easier to change. It just relocates it.

The fix is intent. Decide up front which systems are genuinely fine to rehost and which will only pay off if you replatform or refactor. A reasonable pattern is to rehost the low-value systems to clear the deadline, then refactor the high-value ones deliberately once you are in the cloud. What you want to avoid is rehosting everything and calling the transformation done.

## Sequencing the migration

Order matters as much as approach. Do not start with your most critical, most complex system. Start with something low-risk and well-understood to prove the process, build the team's cloud muscle, and validate your tooling and security setup. Early wins fund confidence.

A workable sequence: pilot with a simple, low-stakes application; migrate the retire and repurchase candidates to shrink the estate; replatform the straightforward middle tier; and refactor the high-value systems last, when your team has real cloud experience. Migrate in waves with clear checkpoints, and keep each wave small enough to roll back if something surprises you.

Throughout, keep ownership clean. You should hold the infrastructure-as-code, the pipelines, the credentials, and the runbook, so the migrated environment is yours to operate and evolve, not locked to whoever moved it. When you want a portfolio assessment and a sequenced plan built around your actual systems, you can [get a technical proposal](/#contact) or see the broader range of [what we build](/#capabilities) across modernization and cloud work.
