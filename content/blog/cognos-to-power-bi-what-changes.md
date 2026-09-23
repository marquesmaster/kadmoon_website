---
title: "Cognos to Power BI migration: what changes"
description: "What actually changes when you migrate from IBM Cognos to Power BI: framework models become semantic models, report studio content is rebuilt, and security is re-implemented, with no reporting blackout."
category: "Migration"
primaryKeyword: "Cognos to Power BI migration"
tags: ["cognos to power bi", "cognos migration", "ibm cognos to power bi", "bi migration"]
takeaways:
  - "Cognos and Power BI model data differently: a Cognos Framework Manager model becomes a Power BI semantic model, which is a rebuild on a cleaner definition rather than a file conversion."
  - "Report Studio and Query Studio content has no import path, so reports are rebuilt in Power BI, which is the moment to consolidate duplicate and unused reports."
  - "Cognos security (namespaces, capabilities, data-level security) is re-implemented as Power BI row-level security and workspace access."
  - "A phased, wave-by-wave cutover keeps Cognos live while each wave is validated for parity, so the business is never without its numbers."
  - "The payoff is lower licensing, tighter Microsoft 365 and Azure integration, and a governed model where every KPI has one definition."
faqs:
  - q: "Can Cognos reports be converted directly to Power BI?"
    a: "No. There is no automatic import path from IBM Cognos (Report Studio, Query Studio) into Power BI, so reports are rebuilt rather than converted. That sounds like a downside but is usually an advantage: instead of copying years of accumulated sprawl into a new tool, you rebuild the reports that earn their place on one governed semantic model, which fixes the duplicate-and-conflicting-numbers problem at the same time."
  - q: "What happens to our Cognos Framework Manager model?"
    a: "The business logic carries over; the artifact does not. A Cognos Framework Manager model is re-expressed as a Power BI semantic model, with relationships, calculations, and business rules re-authored (calculations become DAX). This is where consolidation happens: overlapping or inconsistent definitions in the old model become one agreed definition per KPI in the new one, so reports built on it reconcile."
  - q: "How is Cognos security handled in Power BI?"
    a: "Cognos security concepts, namespaces, capabilities, and data-level security, are re-implemented using Power BI's model: row-level security roles on the semantic model, plus workspace and app access for who can see which reports. Sensitive data can be further protected with sensitivity labels and data loss prevention via Microsoft Purview. It is a re-implementation, not a lift-and-shift, so it is also a chance to tighten access that had drifted in Cognos."
  - q: "How do you avoid a reporting blackout during a Cognos migration?"
    a: "With a phased, wave-by-wave cutover. Cognos stays live while each wave of reports is rebuilt in Power BI and validated number-by-number against the Cognos output, then users are switched over one wave at a time. Nobody loses access to a report they depend on mid-migration, and each wave is signed off before the next begins."
---

Teams leaving IBM Cognos for Power BI usually expect a conversion and get a rebuild, and that surprises them until they see why it is the better outcome. Cognos and Power BI think about data differently, so a good [Cognos to Power BI migration](/cognos-to-power-bi-migration) is less about porting files and more about rebuilding on a cleaner, governed foundation. Here is what actually changes, layer by layer.

## The model: Framework Manager becomes a semantic model

Cognos centralizes logic in a Framework Manager model. Power BI centralizes it in a [semantic model](https://learn.microsoft.com/power-bi/transform-model/desktop-quickstart-learn-dax-basics). The business logic, relationships, and calculations carry over, but they are re-authored, calculations become DAX, and the structure is rebuilt for how Power BI performs best. Crucially, this is where you consolidate: the overlapping and slightly-different definitions that accumulate in a long-lived Cognos environment become [one agreed definition per KPI](/services/power-bi), so downstream reports finally reconcile.

## The reports: rebuilt, not converted

Report Studio and Query Studio content has no import path into Power BI, so reports are rebuilt. That is the moment to rationalize. Most Cognos estates carry years of duplicate reports and one-off analyses nobody opens; rebuilding only what earns its place is the cheapest and highest-value work in the project. You end up with fewer, better reports on a trusted model instead of a faithful copy of the old sprawl.

## The security: re-implemented in Power BI's model

Cognos security, namespaces, capabilities, and data-level security, is re-expressed using Power BI's constructs: [row-level security](https://learn.microsoft.com/power-bi/enterprise/service-admin-rls) roles on the model, workspace and app access for report visibility, and, for sensitive data, sensitivity labels and DLP via [Microsoft Purview](https://learn.microsoft.com/purview/). Because it is a re-implementation, it is also a chance to tighten permissions that quietly broadened over the years.

## The cutover: wave by wave, no blackout

The risk everyone worries about is losing access to critical reports mid-migration. A phased, wave-by-wave approach removes it: Cognos stays live while each wave is rebuilt and validated number-by-number for parity against the Cognos output, then users move over one wave at a time, with each wave signed off before the next starts. The business always has its numbers.

## What you gain

Beyond leaving a costly platform, the payoff is threefold: lower per-seat licensing, often already covered by Microsoft 365; tighter integration with the tools people already use in Microsoft 365 and Azure; and a governed model where numbers agree. The migration cost is one-time; those gains are recurring.

Weighing a move off Cognos? The fastest path to a real plan is an inventory. [Tell us about your Cognos estate](/contact), or see the full approach on our [Cognos to Power BI migration page](/cognos-to-power-bi-migration).
