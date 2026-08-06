---
title: "ACE Customs Software: ABI Filing and Integration Guide"
description: "ACE customs software guide: what ACE is, ABI and EDI message types, connection options, building a custom integration, error handling, and CBP certification."
category: "Trade & Supply Chain"
primaryKeyword: "ace integration software"
tags: ["ace filing software", "automated commercial environment", "cbp ace api", "abi entry summary"]
takeaways:
  - "ACE is CBP's single-window platform for US imports and exports, and it processes more than 105,000 entries on a typical day, so manual keying does not scale."
  - "You connect to ACE through the Automated Broker Interface using structured EDI messages defined in CBP's CATAIR documents, which specify field positions and codes down to the character."
  - "The three connection paths trade cost against control: a service bureau is fastest to start, a third-party ABI platform is more flexible, and a custom integration under your own filer code gives you the most control."
  - "A custom integration must handle data assembly, transmission, response processing, and recordkeeping, and customs rules require importers to retain entry records for five years from the date of entry."
  - "CBP requires a formal certification process before you file in production, and it commonly takes weeks and moves at CBP's pace, so plan for it in your timeline."
faqs:
  - q: "What is ACE integration software?"
    a: "ACE integration software connects your own systems directly to CBP's Automated Commercial Environment so your software can submit entry data and receive CBP's responses automatically, instead of a person keying information into a service bureau screen. It assembles correctly formatted ABI messages, transmits them, and processes the responses CBP sends back."
  - q: "What are ABI and EDI in customs filing?"
    a: "ABI, the Automated Broker Interface, is the interface through which entry data is transmitted to and from CBP, and filing under it requires an assigned filer code. EDI, electronic data interchange, is the format of those messages, which CBP defines in its CATAIR documents down to the field position and code."
  - q: "How long does CBP certification take for a new ACE integration?"
    a: "The certification phase commonly takes weeks and moves at CBP's pace rather than yours. Your software has to demonstrate that it produces correct messages and handles responses properly, working through CBP client representative review for each message type you plan to use."
  - q: "Should I build a custom ACE integration or use a service bureau?"
    a: "If entries are occasional, a service bureau is fine. Once you are filing thousands of entries a month, per-transaction bureau fees add up and the workflow constraints cost staff time, so a custom integration certified under your own or your broker's filer code pays back the investment when customs is core to your operation."
---

For US importers and brokers, every import and export entry passes through the Automated Commercial Environment, and the volume is large. On a typical day in fiscal year 2024, CBP processed [$9.2 billion worth of imported goods, more than 105,000 entries of merchandise, and collected $241 million in duties, taxes, and fees](https://www.cbp.gov/newsroom/stats/typical-day-fy2024), nearly all of it flowing through ACE. Connecting your systems to it directly, instead of retyping data into someone else's portal, replaces that manual bottleneck with an automated flow. This guide explains what ACE integration software actually involves: how the system works, the message formats you have to speak, your options for connecting, and what it takes to get certified by CBP.

## What ACE is and why it matters

The Automated Commercial Environment, ACE, is US Customs and Border Protection's system for processing imports and exports. It is the single-window platform where entry data is filed, duties are assessed, and more than 40 partner government agencies plug in their requirements. If goods cross the US border commercially, ACE is involved. The scale is easy to underestimate. In March 2025, CBP processed [more than 3 million entry summaries valued at over $352 billion](https://www.cbp.gov/newsroom/national-media-release/cbp-releases-march-2025-monthly-update) in that month alone, and April 2025 ran to [more than 3 million entry summaries worth over $284 billion](https://www.cbp.gov/newsroom/national-media-release/cbp-releases-april-2025-monthly-update).

Those monthly totals annualize to tens of millions of entry summaries and trillions of dollars in trade, and the daily figure of more than 105,000 entries makes clear that this is a high-throughput pipeline where manual keying does not scale. For an importer or broker, integrating with ACE means your own software can submit entry data and receive CBP's responses automatically, rather than a person keying information into a service bureau screen. The payoff is direct: fewer manual errors, faster filing, a clean audit trail, and the ability to scale volume without scaling headcount. The reason off-the-shelf customs tools often disappoint is that they force your operation to fit their workflow, a limitation covered in our guide to [custom US Customs software](/blog/custom-us-customs-software). A custom integration fits your workflow instead.

## ABI, EDI, and message types

You do not talk to ACE in plain English. You talk to it through the Automated Broker Interface, ABI, using structured electronic messages. Understanding these acronyms is the foundation of any ACE project.

- ABI is the interface through which entry data is transmitted to and from CBP. Filing under ABI requires an assigned filer code, which is why most custom integrations run under an importer's or broker's existing code.
- EDI, electronic data interchange, is the format of those messages. CBP defines the message sets in its CATAIR (Customs and Trade Automated Interface Requirements) documents, which specify field positions, record types, and codes down to the character.
- Message types cover the specific transactions: entry summaries (type codes such as 01 for consumption, 03 for antidumping and countervailing duty, 11 for informal), cargo release, status notifications, and the responses CBP sends back.

A few of the entry summary type codes you will encounter most often:

| Type | Meaning | When it applies |
| --- | --- | --- |
| 01 | Consumption, formal | Standard dutiable commercial imports |
| 03 | Consumption, AD/CVD | Goods subject to antidumping or countervailing duty |
| 11 | Informal | Lower-value shipments below the formal entry threshold |

Each message has a strict format. Field positions, codes, and values must be exactly right, because CBP validates them and rejects anything malformed. The CATAIR entry summary specification alone runs to hundreds of pages of record layouts that CBP revises on a rolling schedule. This precision is why ACE integration is real engineering rather than a simple API call, and it is why the developer-level mechanics deserve their own read in [CBP, ACE, and ABI integration explained](/blog/cbp-ace-abi-integration).

## Options for connecting to ACE

You have a few paths to ACE, and they trade cost against control.

- A service bureau or existing software vendor. You use someone else's certified connection and their software. Fastest to start, but you inherit their workflow, their limits, and their per-transaction fees, and your data lives in their system.
- A third-party ABI platform. More flexible than a bureau, still a packaged product with the constraints that come with one.
- A custom integration certified under your own or your broker's filer code. The most work up front, and the most control. Your software, your workflow, your data, connected directly.

The right choice depends on volume and how central customs is to your business. If entries are occasional, a bureau is fine. Once you are filing thousands of entries a month, per-transaction bureau fees add up fast and the workflow constraints start costing real staff time. If customs is core to your operation and off-the-shelf tools keep getting in the way, a custom integration pays back the investment. This is the same build-versus-buy question that runs through all [trade and supply chain software](/custom-software-development).

## Building a custom ACE integration

A custom ACE integration is a serious project, and treating it that way is how it succeeds. The core is software that assembles correctly formatted messages from your data, transmits them through ABI, and processes CBP's responses.

The main pieces of work:

- Data assembly. Pulling entry data from your systems and mapping it into the exact ACE message format, with all the codes, HTS classifications, and rules that implies.
- Transmission. Sending messages and receiving responses reliably, handling the connection securely.
- Response processing. Parsing what CBP sends back, cargo release, holds, rejections, and updating your systems accordingly.
- Recordkeeping. Storing the full trail of what was filed and when. Customs regulations require importers to retain entry records for five years from the date of entry, so this is not optional plumbing.

Build this on a modern, maintainable stack, keep the message-mapping logic well tested, and design it so a change in requirements does not mean rewriting everything. Duty calculation deserves particular care, since the CBP daily collection of $241 million in duties, taxes, and fees is the sum of millions of line-level computations that each have to be right. AI can help here too, for example in tariff classification and document extraction feeding the entry data, as long as a human stays in the loop on anything that goes to CBP. The right architecture treats the message layer as one bounded component so that a CATAIR revision touches a mapping file, not your whole codebase.

## Error handling and status messages

Filing to ACE is a two-way exchange rather than a one-way submission. CBP responds, sometimes with acceptance, sometimes with a rejection citing a specific error, sometimes with a status change hours later. Your software has to handle all of it gracefully.

Reject messages are routine, not exceptional. A code is wrong, a value fails validation, a required field is missing. Your integration should capture the specific reason, surface it clearly to the person who can fix it, and make resubmission easy. Status messages arrive asynchronously, so the system needs to match incoming updates to the right entry and keep everyone informed. Build in retries for transient transmission problems and idempotency so a resend does not create a duplicate filing. At the volumes CBP handles, roughly 105,000 entries every single day, getting this layer right is what separates software that runs at scale from software that generates a pile of stuck entries and missed release windows.

## Compliance and testing with CBP

You cannot just point new software at ACE and start filing. CBP requires a formal certification process before you transmit in production. Your software has to demonstrate that it produces correct messages and handles responses properly, working through CBP client representative review for each message type you will use. This certification phase commonly takes weeks, and it moves at CBP's pace, not yours.

Plan for it in your timeline, because it is not instant. Beyond initial certification, compliance is ongoing. CBP publishes CATAIR updates and message-format changes on a regular cadence, so the integration needs maintenance to stay current, and your records have to be retained to satisfy audits and any post-entry review. Treat ACE integration as a living system that needs upkeep, not a one-time build. If you want an ACE integration scoped, built, and certified to fit your operation, you can [get a technical proposal](/#contact) or read more trade software guidance on [the blog](/blog).
