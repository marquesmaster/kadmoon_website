---
title: "Migrating to Power BI from Tableau, Qlik, or spreadsheets"
description: "How to migrate to Power BI from legacy BI tools and spreadsheet sprawl: inventory reports, rebuild on a governed model, reconcile the old numbers, and sequence the move."
category: "Power BI"
primaryKeyword: "migrating to power bi"
tags: ["Power BI", "migration", "Tableau", "data modeling"]
takeaways:
  - "Start with an honest inventory of what you have, because most legacy estates contain far more reports than anyone actively uses."
  - "Rebuild on a governed semantic model rather than copying old reports one for one, so the migration leaves you better off than before."
  - "Reconcile every migrated number against the old tool, because trust in the move depends on the figures matching."
  - "Retire duplicate and unused reports as you go, so you are not carrying old clutter into the new platform."
  - "Sequence the migration by value and dependency, starting with a visible win that proves the approach before the hard reports."
faqs:
  - q: "Should we lift and shift our reports or rebuild them?"
    a: "Rebuilding on a proper model is almost always the better choice, even though lift and shift feels faster. Copying reports one for one carries over whatever problems the old estate had, including duplicated logic and inconsistent numbers, and Power BI works differently enough that a direct copy rarely feels right anyway. Rebuilding on a shared semantic model means the measures are defined once and many reports reuse them. The migration becomes a chance to fix the foundation rather than reprint the same mess on new paper."
  - q: "How do we make sure people trust the new reports?"
    a: "Reconciliation is what earns trust. For every report you migrate, compare the key numbers in Power BI against the same numbers in the old tool, for several periods and several slices, until they match or you can explain any difference. Sometimes the old number was wrong, and finding that is useful, but you need to know which case you are in. Walk the owning team through the comparison before you retire their old report. People adopt the new platform when they have seen the numbers line up with their own eyes."
  - q: "How long does a Power BI migration take?"
    a: "It depends on how many reports you genuinely use and how clean the underlying data is, not on how many reports exist. A focused estate with a handful of core dashboards can move in weeks, while a large sprawling one takes months, mostly because of modeling and reconciliation rather than rebuilding visuals. The inventory step usually shrinks the real scope, because much of what exists is unused or duplicated. Sequencing by value means you deliver useful results early rather than waiting for the whole thing to finish."
---

A company decides to move off its old BI tool. Someone counts the reports and finds eight hundred. Panic sets in, because rebuilding eight hundred of anything sounds like a year of work. Then they look closer. Most have not been opened in a year, many are near duplicates, and the reports people actually depend on number about forty. The migration was never eight hundred reports. The first job is finding that out.

## Take an honest inventory

Before you rebuild anything, catalog what you have. List the reports in the current tool, who owns each one, how often it is opened, and what data it sits on. Most BI platforms expose usage statistics, and those numbers are usually sobering: a large share of any mature estate is dead weight that accumulated over years.

Sort the inventory into three buckets. Reports in active use by people making decisions. Reports that overlap heavily with others and can be consolidated. Reports nobody opens, which you can retire without replacing. This triage is the single most useful step in a migration, because it turns a frightening pile into a short list of things that genuinely matter.

Do not skip the spreadsheets. Alongside the formal BI tool, there is almost always a layer of critical spreadsheets that someone maintains by hand, and those often hold logic that needs to move into the model. Capture them in the inventory too.

## Rebuild on a model, do not lift and shift

The tempting shortcut is to recreate each old report exactly, visual for visual. Resist it. Lift and shift carries over every weakness of the old estate, including the duplicated calculations and the disagreeing numbers that probably helped motivate the move. Power BI also works differently from Tableau, Qlik, or Cognos, so a literal copy tends to feel awkward anyway.

Instead, rebuild on a governed [semantic model](/services/power-bi). Define the shared tables, relationships, and measures once, then build reports on top of that foundation. Revenue is calculated in one place and reused everywhere, rather than re-derived in every report as it likely was before. This is more work up front and far less work forever after, and it means the migration leaves you with a cleaner analytics layer rather than the same tangle in a new tool.

Shaping the data the model needs is where [data engineering](/services/data-engineering) does the heavy lifting, pulling from the systems you already run and landing clean tables the model can sit on.

## Reconcile the old numbers

Nothing sinks a migration faster than a new report that disagrees with the old one. Even if the new number is correct, people will trust the tool they know and distrust the one they do not, and the whole project loses credibility.

So reconcile deliberately. For each migrated report, put the key figures side by side with the old tool, across several periods and several breakdowns, and chase down every difference until the numbers match or you can explain why they do not. Sometimes you will find the old report was wrong, double counting here or filtering incorrectly there. That is a genuine win, but you have to be certain which case you are in before you tell anyone.

Then walk the owning team through the comparison. Let them see their own familiar numbers reproduced in Power BI. That moment, where someone recognizes their figures in the new report, is what converts a skeptic into a user. Reconciliation is slow and unglamorous, and it is the part that actually earns adoption.

## Retire the duplicates

Migration is the best chance you will ever get to clean house. As you work through the inventory, actively retire what you do not need instead of carrying it forward. The unused reports from your triage never get rebuilt. The overlapping ones get consolidated into a single canonical version, and the people who used the variants are pointed to it.

Be deliberate about switching off the old reports once their replacement is reconciled and in use. If you leave both running, you recreate the exact problem you were trying to escape, now spread across two platforms. Announce the retirement, give a short overlap period, then turn the old one off. Every report you retire is one you never have to maintain again.

This discipline is also what keeps the new estate clean. A migration that doubles the report count has failed even if every report works, because sprawl in a new tool is still sprawl.

## Sequence the move

You do not migrate everything at once. Sequence the work by value and by dependency. Start with one visible, high value report, ideally one a senior team looks at often, and deliver it fully: modeled properly, reconciled, and adopted. An early, concrete win proves the approach and builds the goodwill that carries the rest of the project.

After that, follow the dependencies. Reports that share a subject area usually share a model, so grouping them lets you build the model once and migrate several reports on the back of it. Finance together, sales together, operations together. Within each group, do the most used reports first.

Keep the old platform running in parallel until each area is fully migrated and reconciled, then decommission it area by area rather than all at the end. This staged retirement reduces risk and means you are always delivering value rather than waiting for one big switch that might slip.

## What good looks like at the end

A migration done well does not just reproduce the old reports somewhere new. It leaves you with a governed model, a shorter and cleaner set of reports, numbers people have personally watched reconcile, and the old clutter switched off for good. The platform underneath is then ready for more, from [Power Platform](/services/power-platform) apps that act on the data to [Copilot features](/services/copilot-ai) that answer questions about it.

If you are staring at your own version of the eight hundred reports problem, the path through it is inventory, model, reconcile, retire, and sequence, in that order. Our [case studies](/cases) show how these migrations play out in practice, and you can [request a quote](/contact) to talk through what moving your estate to Power BI would involve. The goal is not to copy what you have. It is to arrive somewhere better.
