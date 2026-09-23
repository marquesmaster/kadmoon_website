---
title: "Qlik to Power BI: what carries over and what gets rebuilt"
description: "A practical map of a Qlik to Power BI migration: load scripts become Power Query, set analysis becomes DAX, section access becomes row-level security, and reports are rebuilt on a governed model."
category: "Migration"
primaryKeyword: "Qlik to Power BI migration"
tags: ["qlik to power bi", "qlikview to power bi", "qlik sense migration", "bi migration"]
takeaways:
  - "Your business logic and data sources carry over; the Qlik artifacts do not, so a Qlik to Power BI migration is a rebuild on a governed model, not a file conversion."
  - "Qlik load scripts map to Power Query and a modeled semantic layer; set analysis expressions are re-authored as DAX measures."
  - "Qlik's associative model is replaced by an explicit star-schema semantic model, which is a modeling shift, not a like-for-like copy."
  - "Section access becomes Power BI row-level security, and it is a chance to tighten access that had drifted."
  - "A wave-by-wave cutover validates every KPI against the old Qlik numbers before switching users, so there is no reporting blackout."
faqs:
  - q: "Can you convert QlikView or Qlik Sense apps to Power BI automatically?"
    a: "No. There is no automatic converter from QlikView or Qlik Sense into Power BI, so apps are rebuilt. The data sources and business logic transfer, but the artifacts do not. As with any BI migration, that is an opportunity: you rebuild the reports that matter on one governed semantic model instead of copying accumulated sprawl, which resolves duplicate and conflicting numbers in the process."
  - q: "What happens to Qlik load scripts and set analysis?"
    a: "Qlik load scripts, which handle extraction and transformation, map onto Power Query and a properly modeled semantic layer in Power BI. Set analysis expressions, Qlik's way of doing contextual calculations, are re-authored as DAX measures. The logic carries over; the syntax and the place it lives change. This re-authoring is also where inconsistent calculations get consolidated into one definition per KPI."
  - q: "How does Qlik's associative model translate to Power BI?"
    a: "Qlik's associative engine lets fields relate flexibly without a predefined schema. Power BI uses an explicit data model, and works best on a star schema with clear fact and dimension tables and defined relationships. So the migration involves a modeling shift: the implicit associations become an explicit, governed model. Done well this makes the model faster and easier to trust; done carelessly it is where a lazy migration goes wrong, which is why the modeling step deserves senior attention."
  - q: "How do you migrate Qlik section access to Power BI?"
    a: "Qlik section access, which controls what data each user sees, is re-implemented as Power BI row-level security roles on the semantic model, alongside workspace and app access for who can open which reports. Because it is a re-implementation rather than a copy, it is also the right moment to review and tighten permissions that had broadened over time, and to add sensitivity labels or DLP where the data warrants it."
---

Teams moving from Qlik to Power BI often ask which parts of their QlikView or Qlik Sense apps will "come across." The honest map is that your data sources and business logic carry over, but the Qlik artifacts are rebuilt, because the two tools model data in fundamentally different ways. A good [Qlik to Power BI migration](/qlik-to-power-bi-migration) treats that as an upgrade rather than a chore. Here is what moves, what changes, and where the real work is.

## Load scripts become Power Query and a model

Qlik load scripts do extraction and transformation inside the app. In Power BI that work splits cleanly: [Power Query](https://learn.microsoft.com/power-query/) handles the transform-and-load, and the result is shaped into a proper semantic model. The logic in your load scripts carries over, but it moves to a more maintainable place, and it is the moment to fix the transformations that had grown tangled over years of edits.

## Set analysis becomes DAX

Qlik's set analysis, the expressions that do contextual, comparative calculations, is re-authored as [DAX measures](https://learn.microsoft.com/power-bi/transform-model/desktop-quickstart-learn-dax-basics). This is a re-write, not a paste, and it is where a migration adds value: overlapping or slightly-different calculations become [one agreed definition per KPI](/services/power-bi), so the reports built on them finally reconcile.

## The associative model becomes a star schema

This is the biggest conceptual shift. Qlik's associative engine relates fields flexibly without a predefined schema. Power BI performs best on an explicit [star schema](https://learn.microsoft.com/power-bi/guidance/star-schema), clear fact and dimension tables with defined relationships. So the implicit associations of your Qlik app become an explicit, governed model. Handled by someone senior, this makes the result faster and more trustworthy; handled carelessly, it is exactly where a cheap migration produces a slow, confusing model. The modeling step is not the place to save money.

## Section access becomes row-level security

Qlik section access, which limits what data each user sees, is re-implemented as Power BI [row-level security](https://learn.microsoft.com/power-bi/enterprise/service-admin-rls) roles, alongside workspace and app permissions for report visibility. Because it is rebuilt rather than copied, it is the right time to review access that had drifted and to add sensitivity labels or DLP where the data is sensitive.

## Reports: rebuilt, and rationalized

QlikView and Qlik Sense apps have no import path, so reports are rebuilt in Power BI. As with every migration, the cheapest work is the work you skip: rationalize first, rebuild what earns its place, and retire the rest. You end up with fewer, better reports on a governed model rather than a faithful copy of the old sprawl.

## No blackout during the move

A wave-by-wave cutover keeps Qlik live while each wave of reports is rebuilt and validated number-by-number against the Qlik output, then users switch over one wave at a time. Each wave is signed off before the next begins, so nobody loses a report they rely on mid-migration.

Considering a move off Qlik? Start with an inventory. [Tell us about your Qlik environment](/contact), or see the full approach on our [Qlik to Power BI migration page](/qlik-to-power-bi-migration).
