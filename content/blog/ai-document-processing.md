---
title: "Document processing with AI Builder and Azure AI"
description: "How AI Builder in Power Platform and Azure AI Document Intelligence extract invoices, forms, and POs, orchestrated by Power Automate into Dataverse and Fabric."
category: "Power Platform"
primaryKeyword: "ai builder document processing"
tags: ["ai builder", "azure ai document intelligence", "power automate", "document automation"]
takeaways:
  - "Manual data entry carries a 1 to 4 percent error rate per field, and those mistakes flow downstream into payments, inventory counts, and compliance records. See the [data entry error rate research](https://www.lido.app/blog/data-entry-error-rates)."
  - "AI Builder gives makers a low-code path to prebuilt invoice and receipt models plus custom document models trained inside Power Platform, so a working extractor can ship in days."
  - "Azure AI Document Intelligence, formerly Form Recognizer, handles higher volume, custom layouts, and tighter accuracy control, and its OCR reports [97 to 99 percent character accuracy on clean printed text](https://aimultiple.com/ocr-accuracy)."
  - "Every extracted field carries a confidence score, so Power Automate can route low-confidence or failed items to a person for review while the rest post without a human touching them."
  - "The extracted data lands in Dataverse or Microsoft Fabric, where Power BI reports on it, so the numbers become measurable instead of sitting in a spreadsheet nobody imports."
faqs:
  - q: "AI Builder or Azure AI Document Intelligence?"
    a: "AI Builder is the low-code option inside Power Platform. It gives you prebuilt invoice and receipt models and a custom document model you train in the browser, and it fits teams already building with Power Apps and Power Automate. Azure AI Document Intelligence, formerly Form Recognizer, is the developer-grade service for higher volume, unusual layouts, and finer control over accuracy and cost. Many builds use AI Builder for the common cases and call Azure AI Document Intelligence for the harder documents."
  - q: "How accurate is the extraction, and do people still review it?"
    a: "On clean printed text the underlying OCR reports character accuracy in the 97 to 99 percent range, and validated fields can push error rates under 1 percent. Handwriting is the honest weak spot, with cursive accuracy falling into the 60 to 85 percent band. Every field carries a confidence score, so Power Automate sends low-confidence or rule-failing documents to a person and posts the rest automatically. Review of exceptions is part of the design, not a sign it is broken."
  - q: "Where does the extracted data end up?"
    a: "Power Automate writes the structured output to Dataverse when the process runs inside Power Platform, or to Microsoft Fabric when you want it in the wider analytics estate. From there Power BI reports on volumes, accuracy per field, and cost, so you can watch the pipeline honestly and see where documents still fall to manual review."
---

Every operations team has a person, or a room of people, retyping information from PDFs into a system. Invoices, purchase orders, receipts, application forms, delivery notes. Document processing with AI takes that manual keying and turns it into an automated flow that reads the document, pulls out the fields you care about, checks them, and hands them to your systems. On the Microsoft stack you have two tools that fit different needs: AI Builder inside Power Platform for low-code cases, and Azure AI Document Intelligence, formerly Form Recognizer, for scale and tighter control. Power Automate ties them together, and the results land in Dataverse or Microsoft Fabric where Power BI reports on them. It works, but only when it is built with the right guardrails.

## The manual document bottleneck

Manual document handling is slow, error-prone, and impossible to scale without hiring linearly. Studies of keyed data put the [error rate between 1 and 4 percent of fields](https://www.lido.app/blog/data-entry-error-rates), and those mistakes flow downstream into payments, inventory counts, and compliance records. At 1,000 invoices a month with ten fields each, even a 1 percent rate seeds dozens of wrong values into your systems every week, and the rate climbs under quarter-end crunch or unfamiliar formats. The work also does not queue politely. Month-end, a big shipment, or a seasonal spike buries the team, and everything behind the documents waits.

The cost is not only labor. It is the delay between a document arriving and its data being usable, the errors that require rework, and the staff doing tedious work instead of judgment work. For any business moving high volumes of paper, this bottleneck caps how fast the whole operation can move.

It also hides a morale and retention cost that rarely makes the business case. Skilled people hired for judgment end up retyping fields for hours, which is both a poor use of their salary and a reason they leave. Automating the rote portion of the job usually makes the remaining work more interesting, because what is left is the exceptions that actually need a human.

## AI Builder for low-code extraction

AI Builder is the document intelligence built into Power Platform, and it is the fastest way to get a working extractor in front of users. It ships prebuilt models for common documents, invoices, receipts, and identity documents, that recognize standard fields out of the box with no training. When your documents are more specific, you train a custom document processing model in the browser by tagging fields on a handful of sample files.

For teams already building with Power Apps and Power Automate, AI Builder fits the way they work. A maker can stand up a flow that reads an uploaded invoice, extracts the vendor, total, and line items, and writes them to Dataverse without writing code. The prebuilt invoice model handles the long tail of vendor layouts because it reads for meaning rather than depending on a fixed template position. That is enough for many document-heavy processes, and it ships in days rather than months.

Where AI Builder reaches its limits is very high volume, unusual document structures, or cases where you need to tune accuracy and cost tightly. That is where the Azure service takes over.

## Azure AI Document Intelligence for scale

Azure AI Document Intelligence, the service formerly called Form Recognizer, is the developer-grade tool for the harder end of the problem. It offers the same prebuilt models as AI Builder plus a general layout model that returns text, tables, and structure, and custom models you train on your own documents through the API. Its OCR reports [character accuracy in the 97 to 99 percent range](https://aimultiple.com/ocr-accuracy) on clean printed text, and it preserves layout so downstream steps know where a value sat on the page. Handwriting is the honest weak spot, with accuracy on cursive falling into the 60 to 85 percent band depending on legibility, which is exactly why validation, covered below, is not optional.

The service scales past what a low-code model comfortably handles, and it gives you finer control over batching, throughput, and per-document cost. A common pattern uses AI Builder for the everyday documents and calls Azure AI Document Intelligence for the high-volume or awkward ones, with Power Automate deciding which path each document takes. You get the low-code speed where it fits and the developer-grade control where you need it.

## Power Automate as the orchestrator

The model is the easy part. The flow around it is where projects succeed or stall, and Power Automate is what runs that flow. It watches how documents actually arrive, an email inbox, a SharePoint library, a OneDrive folder, an upload from a Power App, and triggers automatically when one lands. It calls AI Builder or Azure AI Document Intelligence to extract the fields, applies your validation rules, and decides whether the result posts or goes to a person.

Power Automate also handles the parts that sound minor and are not. The same invoice often arrives twice, once by email and again through a portal, so the flow has to recognize duplicates before they post as two bills. Every field that lands in a downstream record should carry a link back to the source document and the region on the page it came from, so when accounting or an auditor questions a number, the answer is one step away rather than a hunt through a shared drive. Building that end-to-end flow, ingestion through to the system of record, is where document projects earn their return.

## Validation and human-in-the-loop

No extraction is perfect, and in document processing a confident wrong answer is worse than an obvious blank. That is why validation is not optional. Every extracted field carries a confidence score, and the flow checks values against rules you define: does the math add up, is the date plausible, does the vendor exist in your system, does the total match the line items.

Each field returned by AI Builder or Azure AI Document Intelligence comes back with its value, a confidence score, and where on the page it came from, so low-confidence items can route to a person:

```json
{
  "invoiceNumber": { "value": "INV-4471", "confidence": 0.99, "source": "page1:box_top_right" },
  "total":         { "value": 1284.50, "confidence": 0.72, "source": "page1:box_bottom_right" },
  "dueDate":       { "value": "2026-08-15", "confidence": 0.61, "source": "page1:line_14" }
}
```

When confidence is low or a check fails, Power Automate routes the document to a person to review and correct, often through an approval step or a Power Apps review screen, rather than letting it flow silently into your systems. Those corrections feed back to improve the models over time. Done right, people handle the exceptions instead of every document, which is where the payoff comes from. Given that fixing a single downstream data error costs real staff time and rework, catching it before it lands beats correcting it after. This human-in-the-loop design is also what makes the system defensible when accuracy actually matters, and it pairs naturally with the controls in a [Power BI governance program](/blog/power-bi-governance-guide).

## Where the data lands

Extraction that produces a spreadsheet nobody imports has not finished the job. The value shows up when the structured data flows into the system that uses it. Inside Power Platform that usually means Dataverse, where the extracted invoice becomes a row that a Power App or an approval flow acts on, with the audit trail intact. For the wider analytics estate, Power Automate can write the output into [Microsoft Fabric](/blog/what-is-microsoft-fabric), so document data sits alongside the rest of your reporting sources.

Either way, Power BI is where you see it. Reporting on top of Dataverse or Fabric shows document volumes, how many posted automatically, accuracy per field, and where documents still fall to manual review, so you can measure the pipeline honestly rather than guessing. Good [business intelligence dashboards](/blog/business-intelligence-dashboards) turn that provenance into a trend you can watch, comparing extracted values against corrected ones over time.

## Getting started

The return is straightforward to estimate. Take the volume of documents, the minutes each takes to process manually, and the error rate, and you have the labor and rework cost you carry today. Automation handles the large majority of documents without a person touching them, leaving staff to work only the exceptions, which cuts cost and speeds everything downstream.

| Metric | Manual baseline | What automation targets |
| --- | --- | --- |
| Field error rate | 1 to 4 percent keyed | Under 1 percent on validated fields |
| Clean printed OCR accuracy | n/a | 97 to 99 percent |
| Documents needing a human | Every one | Only low-confidence exceptions |

A sensible way to start is to pick one document type, measure the current cost and error rate honestly, and run AI Builder against it while people still review the output. That gives you real accuracy numbers on your own documents before a wider rollout, and it builds the tuning data to expand, whether that means training a custom model or moving high-volume documents to Azure AI Document Intelligence. Standing this up well also benefits from the guardrails in a [Power Platform Center of Excellence](/blog/power-platform-center-of-excellence-guide), so flows and models stay governed as they spread.

If that describes your operation, [start a project](/#contact) with a scoped pilot on your highest-volume document.
