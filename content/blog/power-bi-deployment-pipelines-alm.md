---
title: "Power BI ALM: deployment pipelines and version control"
description: "How Power BI ALM works: dev/test/prod workspaces, Fabric deployment pipelines, parameter rules, Git integration, and PBIP source control, done safely."
category: "Power BI"
primaryKeyword: "power bi deployment pipelines"
tags: ["power bi alm", "deployment pipelines", "fabric git integration", "power bi version control"]
takeaways:
  - "Application lifecycle management for Power BI means moving content through separate development, test, and production stages instead of editing live reports, so mistakes get caught before users see them."
  - "Fabric and Power BI deployment pipelines give you three linked stages and a promote button, and parameter rules swap data sources automatically so a model points at the right database in each stage."
  - "Git integration in Fabric connects a workspace to an Azure DevOps or GitHub repository, tracking model and report definitions as text you can branch, review, and revert."
  - "The PBIP project format stores a report and its semantic model as folders of TMDL and JSON files, which turns a binary PBIX into something a real code review can read."
  - "Deployment pipelines and Git solve different problems, so most mature teams run both: Git for history and review, pipelines for controlled promotion between stages."
faqs:
  - q: "What do Power BI deployment pipelines do?"
    a: "A deployment pipeline links three workspaces, development, test, and production, and lets you promote content from one stage to the next with a single action. When you deploy, Power BI copies the selected reports, semantic models, and other items into the target stage. Deployment rules attached to a stage rewrite settings such as the data source connection so the model automatically points at the correct database once it lands there. This replaces the error-prone habit of editing a live production report and gives you a clear, reviewable promotion step."
  - q: "How does Git integration work in Microsoft Fabric?"
    a: "Git integration connects a Fabric workspace to a branch in an Azure DevOps or GitHub repository. Fabric serializes supported items, including semantic models and reports, into a folder structure of text files and syncs them with the branch. You commit workspace changes to Git and pull incoming changes back into the workspace, so the repository becomes the source of truth. Because the files are text, you can branch for a feature, open a pull request, review the diff, and revert a bad change the same way software teams do."
  - q: "Should I use PBIP or PBIX for source control?"
    a: "Use PBIP when source control matters. A PBIX file is a single binary, so version control systems can only track it as one opaque blob with no readable diff. The PBIP project format saves the same report and semantic model as folders of JSON and TMDL files, so each measure, table, and visual becomes text that Git can diff and merge. You keep authoring in Power BI Desktop and save as a PBIP project. PBIX is still fine for quick or throwaway work where history and collaboration do not matter."
---

Most Power BI problems in production are not modeling problems. They are process problems. Someone opens a live report to fix one number, a filter breaks, and the whole company sees wrong figures until Monday. Application lifecycle management, or ALM, is the set of practices that keeps this from happening. It covers how content moves from a draft into something the business trusts, how you track what changed and when, and who is allowed to push a change to production. This article walks through the tools Microsoft gives you and how they fit together.

If you have already read our [Power BI governance guide](/blog/power-bi-governance-guide), think of ALM as the lifecycle half of that picture: the same discipline, focused on how content is built, reviewed, and shipped.

## Separate your workspaces by stage

The foundation of Power BI ALM is refusing to edit production directly. You get there by splitting work across three environments: a development workspace where authors build and experiment, a test workspace where reviewers and stakeholders validate against representative data, and a production workspace that end users actually open.

The rule is simple. Nobody edits production. Changes enter development, get promoted to test for validation, and only reach production through a deliberate step. This gives you a place to catch broken visuals, wrong totals, and performance regressions before they reach an audience. It also gives you a rollback story, because the previous version still exists in the stage below.

Assign workspace roles to security groups rather than individuals, and keep the production workspace locked down so only a small group can change what lands there. That access boundary is where most of your deployment governance lives.

## Promote changes with deployment pipelines

Deployment pipelines, available in Power BI Premium and Fabric capacities, connect those three workspaces into one linked structure. Each stage maps to a workspace, and a deploy action copies selected items, reports, semantic models, dataflows, from one stage into the next.

The pipeline shows you what differs between stages before you deploy, so you can see exactly which items are new or changed. You choose what to promote rather than pushing everything at once. When you deploy from test to production, Power BI updates the production workspace with the validated content, and the version that was there is replaced by a reviewed one.

This turns promotion into an explicit, auditable event instead of a hope that nobody overwrote the wrong file.

## Swap data sources with parameter rules

A model in development should read from a development database, and the same model in production should read from production. You do not want to rewire connections by hand every time you deploy, and you certainly do not want a test dataset accidentally pointed at live data.

Deployment pipelines handle this with deployment rules. You attach a rule to a stage that overrides a setting when content lands there. The two common kinds are data source rules, which change which server or database the model connects to, and parameter rules, which set the value of a Power Query parameter for that stage.

Parameter rules are the cleaner approach. If you build your connection using parameters for the server and database names, a rule can set those parameters per stage. Once configured, the rule applies on every future deployment. You promote a model to production, and it automatically connects to the production source with no manual step and no risk of a forgotten reconnection. Getting the semantic model built the right way, with parameterized sources and clean structure, makes all of this easier; our [semantic model best practices](/blog/power-bi-semantic-model-best-practices) covers that groundwork.

## Put your work under version control

Deployment pipelines move content between stages, but they are not version control. They do not give you a history of every change, a way to review a diff, or a branch for a risky feature. That is what Git integration and the PBIP format are for.

Git integration in Microsoft Fabric connects a workspace to a branch in an Azure DevOps or GitHub repository. Fabric serializes supported items into text files and keeps the workspace and the branch in sync. You commit changes made in the workspace and pull changes made in the repository. Because the content is now text, your team can branch for a feature, open a pull request, and review what actually changed before it merges. If you are new to the platform, our overview of [what Microsoft Fabric is](/blog/what-is-microsoft-fabric) explains where this sits in the wider product.

For work in Power BI Desktop, the equivalent shift is saving as a PBIP project instead of a PBIX file. A PBIX is a single binary, so Git can only track it as one blob it cannot read. A PBIP project saves the report and its semantic model as folders of files. The model is stored in TMDL, a text format where each table and measure is human readable, and the report is stored as JSON. Now a code review can show that someone changed a measure's DAX or renamed a column, line by line, the way any software change gets reviewed.

## Decide who can deploy

ALM is as much about permission as it is about tooling. A pipeline with a promote button that anyone can press is not much safer than editing production directly. Decide deliberately who holds deployment rights at each stage.

A workable pattern gives authors full control of development, a review group the ability to promote into test, and a small, named group the sole authority to promote into production. Pair this with pull request approvals in your Git repository so that changes are reviewed by a second person before they merge, and treat production promotion as the final gate rather than a routine click.

This is where deployment sits inside your broader operating model. If your organization runs a [Power Platform Center of Excellence](/blog/power-platform-center-of-excellence-guide), the CoE is the natural owner of these deployment standards, setting who can promote, what has to be reviewed, and how releases are recorded across teams.

## Bringing it together

Good Power BI ALM is unremarkable in daily use. Authors build in development, changes get reviewed in Git, pipelines promote validated content to production, and parameter rules make sure each stage reads the right data. Nobody edits a live report, every change has a history, and only the right people can ship. That quietness is the goal, because it means the numbers people rely on stay trustworthy while the reports behind them keep evolving.

If you want help setting up deployment pipelines, Git integration, and a promotion process that fits how your teams work, [get in touch](/#contact).
