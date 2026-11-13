---
title: "Power BI governance: workspaces, RLS, and report sprawl"
description: "A practical guide to Power BI governance for a growing estate: workspace structure, row-level security, deployment pipelines, lineage, and stopping report sprawl."
category: "Power BI"
primaryKeyword: "power bi governance"
tags: ["Power BI", "governance", "row-level security", "workspaces"]
takeaways:
  - "Separating development, test, and production workspaces keeps unfinished work away from the reports people make decisions on."
  - "Row-level security belongs in the shared semantic model and must be tested with the actual roles before anyone relies on it."
  - "Deployment pipelines move content between workspaces in a controlled way, so promotion is a reviewed step rather than a manual copy."
  - "Certified and promoted labels tell users which datasets and reports are trustworthy and which are someone's work in progress."
  - "Report sprawl is a governance problem, not a tooling one, and it is solved by shared models, clear ownership, and a path to retire duplicates."
faqs:
  - q: "How many workspaces do we actually need?"
    a: "Most organizations do well with a small, predictable pattern rather than a workspace for every team that asks. A common shape is one set of development, test, and production workspaces per subject area, such as finance or sales, plus a shared workspace for certified models that many reports reuse. The goal is that anyone can guess where a report lives from its subject and its stage. Dozens of overlapping workspaces with unclear owners are a sign the structure needs tightening, not expanding."
  - q: "Who should be allowed to publish to production?"
    a: "Publishing straight to a production workspace should be limited to a small group who own promotion, with everyone else working in development and requesting promotion through a pipeline. This is not about blocking people. It is about making sure the reports leadership reads have been reviewed and reconciled. Analysts still build freely in development workspaces. The control sits at the point where content becomes official, which is the move into production."
  - q: "What is a certified dataset and when should we use one?"
    a: "A certified dataset is a semantic model an organization has formally endorsed as a trusted source for a subject area, marked with a certified badge that users see when they connect to it. You certify a model once it is well built, documented, secured, and owned by a named team. Use certification for the core models many reports depend on, such as the company sales or finance model. Promoted is a lighter label for models that are good and shareable but not yet formally certified."
---

Someone in finance opens a dashboard, finds a number that looks off, and asks around. It turns out there are four reports with similar names, built by three people, two of whom have left. Nobody is sure which one leadership actually uses. The data is fine. The governance is not. This is the state a growing Power BI estate drifts into without a plan, and pulling it back is mostly about a few structural habits.

## Structure your workspaces around stages

The first habit is separating work by stage. A single workspace where people build, test, and publish all at once means unfinished reports sit next to the ones executives read, and a half finished change can go live by accident.

The common pattern is three workspaces per subject area: development, where analysts build and break things freely; test, where changes are reviewed and reconciled against known numbers; and production, which holds the reports the organization actually relies on. Content moves in one direction, from development toward production, and only after it has been checked.

Keep the naming predictable so anyone can find the right place. If the sales reports live in a clearly named production workspace and the experiments live in development, people stop guessing and stop rebuilding things that already exist. Structure alone does not fix everything, but it removes a whole category of confusion.

## Row-level security, done right

Row-level security decides who sees which rows, and it is easy to get subtly wrong. The first principle is that RLS belongs in the shared [semantic model](/services/power-bi), not scattered across individual reports. Define the roles and their rules once in the model, and every report connected to it inherits the same security. Define them per report, and you are one forgotten filter away from a leak.

The second principle is to test with the real roles before anyone depends on it. Power BI lets you view a report as a given role, so you can confirm a regional manager sees only their region and a rep sees only their accounts. Do this deliberately, with edge cases: the person who covers two regions, the new hire with no assignment yet, the executive who should see everything.

The third principle is to keep the rules driven by data rather than hand maintained lists. Map users to what they can see through a security table that updates from your source systems, so a reorganization updates access automatically instead of requiring someone to remember to edit a role.

## Deployment pipelines

Moving a report from development to production by exporting and re-importing it is slow and error prone. Deployment pipelines make promotion a controlled step. A pipeline links your development, test, and production workspaces and moves content between them in order, carrying the report and its model together.

The value is that promotion becomes reviewable. Changes gather in development, get checked in test against numbers people already trust, and then move to production as a deliberate action by whoever owns that stage. You can also set rules so that a model points at development data in the development stage and production data in production, without editing the report by hand each time.

This turns releases into a repeatable process rather than a nervous manual copy. It also gives you a natural checkpoint to confirm security and reconciliation before anything official changes.

## Lineage and documentation

As the estate grows, people need to see how things connect. If a source table changes, which models use it, and which reports will be affected? Power BI's lineage view answers this by drawing the chain from data source to model to report to dashboard. Before you change or retire anything, lineage tells you what sits downstream.

Pair lineage with light documentation. Each certified model should have an owner, a short description of what it covers, and notes on its key measures. This does not need to be heavy. A paragraph and a named owner per important model saves hours of archaeology later and makes it clear who to ask when a number looks wrong. Good [data engineering](/services/data-engineering) upstream keeps those lineage chains clean, because the fewer tangled dependencies you have, the easier the whole picture is to follow.

## Who can publish, and certified datasets

Control at the point where content becomes official. Most people should build in development workspaces and request promotion, while a small group owns the move into production. This is not about slowing analysts down. They work freely where it is safe to experiment. It is about making sure the reports leadership reads have been reviewed.

Endorsement labels help users tell trustworthy content apart from works in progress. A certified dataset is a model the organization has formally endorsed as the source for a subject area, marked so users see it when they connect. A promoted dataset is a lighter signal that something is good and shareable but not yet certified. Reserve certification for the core models many reports depend on, give each a named owner, and people will naturally gravitate to the right source instead of building their own.

## Avoiding report sprawl

Report sprawl is what you get when everyone solves the same question by building a new report. Ten dashboards show revenue, each slightly different, and nobody can say which is correct. It feels like a tooling problem but it is really a governance one.

The cure has three parts. First, shared models, so new reports reuse certified measures instead of re-deriving revenue for the eleventh time. Second, clear ownership, so every report in production has someone responsible for it and orphaned reports get noticed. Third, an active path to retire duplicates: find the overlapping reports, agree which is canonical, redirect people to it, and remove the rest. Usage metrics help here, because a report nobody has opened in six months is a candidate for retirement.

Sprawl grows quietly, so review the estate on a schedule rather than waiting for a crisis.

## Making governance stick

Governance is not a one time cleanup. It is a set of habits: stage separated workspaces, security in the model, promotion through pipelines, lineage you consult before changing things, certification for the models that matter, and a regular pass to retire what is no longer used. None of these is complicated on its own. Together they are the difference between an estate people trust and one they have quietly stopped believing.

If your Power BI setup has drifted into the four confusingly named reports situation, the way out is a structured one, not a heroic weekend. Our [case studies](/cases) show how this comes together in practice, and you can [request a quote](/contact) to talk through where your estate stands today. A model other work can safely build on, including [Power Platform](/services/power-platform) automation and [Copilot features](/services/copilot-ai), starts with governance that holds.
