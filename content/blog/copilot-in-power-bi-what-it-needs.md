---
title: "Copilot in Power BI: what it does and what it needs first"
description: "An honest look at Copilot in Power BI: natural-language questions and summaries, why it depends on a governed semantic model, how row-level security applies, and where it helps."
category: "Copilot & AI"
primaryKeyword: "Copilot in Power BI"
tags: ["Copilot", "Power BI", "semantic model", "AI on your data"]
takeaways:
  - "Copilot in Power BI answers questions in plain language and writes summaries, but it reads your governed semantic model, not raw tables, so the model has to be good first."
  - "Field descriptions and clear names are what let Copilot map a question to the right measure; vague or missing descriptions produce confident but wrong answers."
  - "Row-level security still applies, so a user only gets answers about the data they are allowed to see; Copilot does not bypass your permissions."
  - "The honest preparation is unglamorous: tidy measures, documented fields, and a model that already matches how the business talks."
  - "Copilot helps most where the model is well built and the questions are about data it covers; it overpromises when people expect it to reason over a messy or undefined model."
faqs:
  - q: "Does Copilot in Power BI just answer any question about my data?"
    a: "It answers questions about the semantic model behind your reports, which is not the same as every piece of raw data you hold. If a measure exists and is clearly named and described, Copilot can usually find it and answer. If the number someone wants is not in the model, or is defined ambiguously, Copilot cannot reliably produce it and may give an answer that looks right but is not. The quality of the model sets the ceiling on what Copilot can do."
  - q: "Can Copilot see data a user is not allowed to see?"
    a: "No. Row-level security applies to Copilot the same way it applies to reports. If a regional manager can only see their own region in a dashboard, Copilot's answers for that person are limited to their region too. The model's security rules filter what Copilot can read before it responds, so it does not become a way around your permissions. This is one of the reasons a properly governed model matters before you turn Copilot on."
  - q: "What do we need to do before Copilot is useful?"
    a: "The work is mostly in the semantic model. Measures need to be correct and named the way the business talks, so revenue is called revenue and matches the official definition. Fields and tables need descriptions that explain what they mean, since Copilot uses those to map a question to the right field. Relationships have to be clean so totals do not double count. None of this is glamorous, but it is what turns Copilot from a demo into something people trust. We usually treat this as model work first and Copilot second."
---

In a demo, Copilot in Power BI looks like magic. Someone types "what were sales by region last quarter" and a chart appears with a tidy summary beneath it. The reason it works so well on stage is that the demo model was built for exactly that question. On your data, Copilot is only as good as the model underneath it, and that is the honest starting point for deciding whether it will help you.

## What Copilot actually does

Two things, mainly. It answers questions in plain language, and it summarizes.

You can ask a question the way you would ask a colleague, and Copilot turns it into a query against your data and shows the result. You can also ask it to summarize a report or a page, and it writes a few sentences describing what the numbers show. There are related touches, like helping draft a measure or suggesting a visual, but natural-language questions and summaries are the core of what most people will use.

What it does not do is invent understanding of your business. It is not reasoning about your company from scratch. It is translating a question into a lookup against a model you built, and writing prose about what that lookup returned. Keep that framing and the rest of this makes sense.

## Why the semantic model is the whole game

Copilot does not read your raw tables. It reads your semantic model, which is the layer in Power BI where you define measures, name fields, set relationships, and encode the business meaning of the data. When someone asks for "revenue," Copilot looks for a measure that represents revenue. If you have a clean measure called Revenue that matches your official definition, it finds it and answers. If you have three half-finished measures called Rev, Revenue_v2, and Total Sales, it has to guess, and it may guess wrong while sounding perfectly confident.

This is why the model is the whole game. A strong semantic model, the kind our [Power BI practice](/services/power-bi) builds, already carries the definitions the business agrees on. Copilot rides on that. A weak model, full of ambiguous measures and tables nobody documented, gives Copilot nothing solid to map questions to, and the answers degrade accordingly.

## Field descriptions are not optional

Here is the detail that separates a Copilot that helps from one that frustrates. Copilot uses the names and descriptions of your fields, tables, and measures to understand what a question means. A field called `cust_grp_cd` with no description is nearly useless to it. The same field renamed to Customer Segment, with a description explaining what the segments are, becomes something Copilot can reason about.

So the preparation is unglamorous and specific:

- Name measures and fields the way the business talks, not the way the source database happened to label them.
- Write a short description for each measure and important field explaining what it means and how it is calculated.
- Remove or hide the duplicate and abandoned measures that would only confuse the mapping.

This is documentation work, and it is tempting to skip because it does not demo well. But it is the difference between Copilot finding the right answer and producing a confident wrong one. Most of the value people attribute to Copilot is really the value of a well-described model, which Copilot then makes easy to query.

## Row-level security still applies

A fair worry is whether an AI assistant becomes a way around your permissions. It does not. Row-level security, the rules that decide which rows of data a given user can see, applies to Copilot the same way it applies to reports.

If a regional manager can only see their own region on a dashboard, Copilot's answers for that person are filtered to their region too. The security rules in the model run before Copilot responds, so it never reveals data the person was not allowed to see. This is another reason the governed model comes first. Your security lives in that model, and a tidy, well-secured model means Copilot inherits the right boundaries automatically. Designing and maintaining that layer is part of our [Copilot and AI work](/services/copilot-ai).

## Where Copilot helps and where it overpromises

Being clear about both sides is the point of a grounded take.

Copilot helps when the model is well built and the question is about data the model covers. A manager who wants a quick cut of a number that already exists, phrased in their own words, gets a fast answer without hunting through pages. A busy executive who wants a plain summary of a report they do not have time to read gets a useful one. Analysts save time drafting measures and getting a first visual. These are real, everyday gains.

Copilot overpromises when people expect it to reason over a messy model or to answer questions the data does not actually support. If a figure is not in the model, Copilot cannot conjure it reliably. If two measures could both answer a question and neither is clearly defined, it may pick the wrong one and state the result with full confidence. And it does not know your business context beyond what the model encodes, so a question that depends on unwritten assumptions will get an answer that is technically a lookup but practically misleading.

The failure mode to watch for is a confident wrong answer, because it is harder to catch than an obvious error. That risk shrinks as the model improves, which is exactly why the model, not the AI, is where the effort belongs.

## The honest preparation path

If you want Copilot to be useful rather than a novelty, treat it as the last step, not the first. Get the semantic model right: correct measures, named the way the business talks, documented with descriptions, secured with row-level security that matches who should see what. Clean up the relationships so totals do not double count. Then turn Copilot on and let it query a model that already makes sense.

Done in that order, Copilot is a genuinely helpful layer on top of good work. Done in the wrong order, it is a fast way to get wrong answers politely. If you are curious whether your model is ready, that is a sensible thing to check first. You can see how we approach the underlying model in our [case studies](/cases), and when you want an honest assessment, [request a quote](/contact) and we will tell you what the model needs before Copilot can earn its place.
