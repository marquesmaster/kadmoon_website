---
title: "Power Platform Center of Excellence: a starter guide"
description: "What a Power Platform Center of Excellence is, how the CoE Starter Kit works, and how to govern environments, DLP, ALM, and adoption at scale."
category: "Power Platform"
primaryKeyword: "power platform center of excellence"
tags: ["power platform coe", "coe starter kit", "power platform governance", "dlp policy"]
takeaways:
  - "A Power Platform Center of Excellence is the team, standards, and tooling that let makers build safely at scale while central IT keeps visibility and control."
  - "The CoE Starter Kit is a free Microsoft-provided set of apps, flows, and dashboards that inventory your tenant and surface every app, flow, maker, and environment in one place."
  - "Environments are the fundamental boundary for security and data residency, so a deliberate environment strategy is the first governance decision a CoE makes."
  - "Data loss prevention policies group connectors into business, non-business, and blocked categories to stop apps from mixing sensitive data sources with public ones."
  - "Application lifecycle management with solutions and environments moves builds through development, test, and production instead of editing production apps by hand."
faqs:
  - q: "What is a Power Platform Center of Excellence?"
    a: "A Power Platform Center of Excellence, or CoE, is the combination of people, standards, and tooling that governs and accelerates low-code development across an organization. It balances two goals that pull against each other: letting business users build apps and automations quickly, and keeping central IT in control of security, data, and cost. A CoE typically owns environment strategy, DLP policy, ALM practices, maker training, and tenant-wide monitoring."
  - q: "What is the CoE Starter Kit?"
    a: "The CoE Starter Kit is a free collection of Power Platform components, including apps, flows, and Power BI dashboards, that Microsoft publishes to help organizations manage their tenant. It inventories every app, flow, maker, and environment, then surfaces that data in dashboards and admin apps. It is a starting point you adapt to your needs, not a supported product, so plan to maintain it as your tenant and the kit both evolve."
  - q: "Do I need a CoE for a small Power Platform footprint?"
    a: "A small footprint still benefits from the core decisions a CoE makes, even if you do not staff a formal team. At minimum, set an environment strategy, put at least one data loss prevention policy in place, and decide how apps move from development to production. You can adopt the CoE Starter Kit later once you have enough apps and makers that manual tracking stops working. Governance scales best when you start it before sprawl, not after."
---

A Power Platform Center of Excellence, usually shortened to CoE, is the team, standards, and tooling that let people across a business build apps and automations safely and at scale. It exists to resolve a real tension. Low-code tools like Power Apps and Power Automate are valuable precisely because business users can build without waiting on IT, but that same freedom, ungoverned, produces sprawl, security gaps, and surprise costs. A CoE is how an organization gets the speed of citizen development without losing control of its data and its tenant.

This guide covers the pieces a CoE owns: the CoE Starter Kit, environment strategy, data loss prevention, application lifecycle management, and adoption. If you would rather have a partner stand this up with you, our [Power Platform CoE](/services/power-platform-coe) and [Power Platform](/services/power-platform) practices do this work directly.

## What a CoE actually does

A CoE is not a gate that slows everyone down. Done well, it does the opposite: it makes the safe way to build also the fast way. In practice, a CoE takes on a handful of responsibilities.

- Sets environment strategy so apps land in the right place with the right controls.
- Owns data loss prevention policies that decide which connectors can be combined.
- Defines how apps and flows move from development to test to production.
- Runs enablement, training makers and giving them templates and reusable components.
- Monitors the tenant so leadership can see what exists, who built it, and what it costs.

The word excellence can make this sound heavyweight. It does not have to be. A CoE can start as one person and a few policies, then grow into a small team as the platform footprint does.

## The CoE Starter Kit

The CoE Starter Kit is a free set of Power Platform components that Microsoft publishes to help you manage your own tenant. It includes model-driven and canvas apps, cloud flows, and Power BI dashboards that together inventory everything in your environment: every app, every flow, every maker, and every environment, refreshed on a schedule.

That inventory is the foundation of governance. You cannot govern what you cannot see, and most organizations underestimate how many apps and flows already exist across their tenant. The kit's dashboards answer the questions a CoE lives on: which apps are actually used, which makers are most active, which flows are failing, and where orphaned apps sit after their creator left.

Two things to keep in mind. First, the Starter Kit is a starting point, not a finished product. You adapt it to your naming standards and processes. Second, it is community-supported rather than a formally supported Microsoft product, so plan to maintain it as both the kit and your tenant change over time.

## Environments are the core boundary

An environment is a container for apps, flows, data, and connections, and it is the fundamental unit of security and isolation in Power Platform. Because environments define who can build, what data lives where, and which region hosts it, environment strategy is usually the first real decision a CoE makes.

A common structure looks like this:

| Environment type | Purpose |
| --- | --- |
| Default | Personal productivity and low-risk experiments only |
| Developer | Individual makers building and testing in isolation |
| Sandbox / test | Validating solutions before production |
| Production | Governed, business-critical apps with managed access |

The Default environment deserves special attention. Every tenant has one, every user can create apps in it by default, and it is easy for it to become a dumping ground of ungoverned apps. Many CoEs restrict who can create apps there and steer real work into purpose-built environments.

## Data loss prevention policies

Data loss prevention, or DLP, is how a CoE keeps sensitive data from mixing with places it should not go. A DLP policy sorts connectors into three groups: business, non-business, and blocked. The rule the platform enforces is simple but powerful: an app or flow cannot use a business connector and a non-business connector at the same time.

Consider a practical example. Put your SQL Server and Dataverse connectors in the business group and put the Twitter connector in the non-business group. Now no maker can build a flow that reads customer records from SQL and posts them to a public social feed, because that combination crosses the boundary. Connectors you never want used at all go in the blocked group.

DLP policies apply per environment or across the tenant, so a CoE typically sets a strict tenant-wide baseline and relaxes it in controlled environments where specific integrations are approved.

## Application lifecycle management

Editing a production app while people are using it is a recipe for outages. Application lifecycle management, or ALM, gives you a disciplined alternative built on two concepts: solutions and environments.

A solution is a package that holds your apps, flows, tables, and other components so they move together as a unit. You build in a development environment, export the solution, and import it into test and then production. Managed solutions in the target environments keep those components locked down so nobody edits production directly. Layer source control and pipelines on top, and you get repeatable, reviewable deployments instead of manual copying and crossed fingers.

The payoff is the same as any mature software practice: changes are tested before they reach users, you can trace what shipped and when, and rolling back is a known procedure rather than an emergency.

## Adoption is the real work

Governance without adoption produces a well-secured platform nobody uses. Adoption without governance produces sprawl. A CoE has to drive both, and adoption is usually the harder half because it is about people.

The levers that work are practical. Train makers so they build well from the start rather than learning by breaking things. Publish reusable components, templates, and a component library so common needs do not get rebuilt ten times. Recognize and support your most active makers, since they become informal champions who help everyone around them. Measure adoption with the CoE Starter Kit dashboards so you can point to real usage, not anecdotes, when leadership asks whether the investment is paying off.

## Where to start

If you are early, do not wait for a full team. Set an environment strategy, put at least one tenant-wide DLP policy in place, decide how apps reach production, and install the CoE Starter Kit to see what you already have. Those four moves prevent most of the pain that pushes organizations to build a CoE reactively after sprawl has already set in.

When you are ready to do this properly, our [Power Platform CoE](/services/power-platform-coe) team builds the environment model, policies, and ALM practices with you, and our broader [Power Platform](/services/power-platform) work covers the apps and automations that run on top of them.
