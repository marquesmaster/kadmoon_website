---
title: "CBP, ACE, and ABI integration explained for developers"
description: "A developer's guide to ABI integration with CBP: how ACE and ABI fit together, becoming a filer, CATAIR message sets, certification, and handling responses."
category: "Trade & Supply Chain"
primaryKeyword: "abi integration cbp"
tags: ["ace abi filing", "cbp edi integration", "customs abi software", "catair"]
takeaways:
  - "CBP is the agency, ACE (the Automated Commercial Environment) is its system of record, and ABI (the Automated Broker Interface) is the electronic pipe that feeds entry data into ACE."
  - "Over 96 percent of all entries are filed through ABI, so for practical purposes electronic customs filing means implementing ABI."
  - "ABI access is a permissioned relationship: a qualifying entity like a broker, self-filing importer, or service bureau must be approved by CBP, and your software operates on their behalf."
  - "ABI communication is EDI using the position and segment based record layouts defined in CBP's Customs Publication 552, the CATAIR, where a single malformed field gets rejected."
  - "CBP requires testing and certification in a test environment before live filing, and the CATAIR is revised periodically, so an ABI integration needs ongoing maintenance to stay compliant."
faqs:
  - q: "What is the difference between CBP, ACE, and ABI?"
    a: "CBP, Customs and Border Protection, is the US federal agency you file with. ACE, the Automated Commercial Environment, is CBP's system of record and the US Single Window through which trade data is processed and released. ABI, the Automated Broker Interface, is the electronic channel that transmits entry data directly into ACE. In short, ABI is the pipe, ACE is the system it feeds, and CBP is the agency behind both."
  - q: "How do I become an ABI filer to submit customs entries?"
    a: "You cannot simply point code at CBP and start transmitting, because ABI access is a permissioned relationship. A qualifying entity such as a customs broker, an importer acting as a self-filer, or a service bureau must apply to CBP, meet the eligibility requirements, and be assigned the identifiers that tag transmissions. Your software then operates on that filer's behalf, so confirm the filer arrangement before you write the integration."
  - q: "What format does ABI use to communicate with CBP?"
    a: "ABI uses EDI, electronic data interchange, with defined message sets rather than a modern JSON API. The technical specifications live in CBP's Customs Publication 552, the CATAIR, which defines each position and segment based record layout down to the field. It is a set of chapters, one per transaction type, so a project filing entry summaries plus partner government agency messages implements several distinct record specifications, each with its own conditional field rules."
---

If you are building software that files customs entries in the United States, you will eventually run into three acronyms that carry the whole system: CBP, ACE, and ABI. They are not interchangeable, and understanding how they relate is the difference between a project that gets certified and one that stalls. The scale involved is not small: in fiscal year 2024, CBP processed [38.4 million entries and $3.37 trillion in imports, collecting more than $88 billion in duties, taxes, and fees](https://www.cbp.gov/sites/default/files/2025-06/20250625_cbp_trade_fact_sheet_2025_final.pdf). Almost all of that flows through the interface described below. This is a developer-oriented walk through how the pieces fit, what it takes to connect, and where the hard parts live.

## How CBP, ACE, and ABI fit together

Customs and Border Protection (CBP) is the US federal agency that regulates imports and exports. It is the authority you are ultimately filing with. ACE, the Automated Commercial Environment, is CBP's system of record and the [US Single Window for trade processing](https://www.cbp.gov/trade/automated), the platform through which manifest, cargo release, entry summary, and partner government agency data are submitted, processed, and released. Think of ACE as the destination.

ABI, the Automated Broker Interface, is the electronic channel that lets qualified parties transmit entry and entry summary data directly into ACE. ABI is the pipe, ACE is the system it feeds, and CBP is the agency behind both. This is not a niche path: CBP reports that [over 96% of all entries are filed through ABI](https://www.cbp.gov/trade/automated/catair), so for practical purposes, electronic customs filing means ABI. Your software does not talk to ACE in a browser, it exchanges structured electronic messages through ABI, and those messages land in ACE for processing. The FY2024 volumes give a sense of what rides on this one channel:

| FY2024 metric | Figure |
| --- | --- |
| Import value processed | $3.37 trillion |
| Entries processed | 38.4 million |
| Cargo containers processed | 32.5 million |
| Duties, taxes, and fees collected | over $88 billion |

Source: [CBP FY2024 Trade Fact Sheet](https://www.cbp.gov/sites/default/files/2025-06/20250625_cbp_trade_fact_sheet_2025_final.pdf). Getting this mental model right early prevents a lot of confusion, because vendors and documentation use the terms loosely. Custom customs software almost always means software that speaks ABI to reach ACE, a capability at the core of [custom US Customs software](/blog/custom-us-customs-software).

## Becoming an ABI filer

You cannot simply point code at CBP and start transmitting. ABI access is a permissioned relationship. A party has to be approved to file through ABI, which involves an application to CBP, meeting the eligibility requirements, and being assigned the identifiers that tag your transmissions. Participants are typically [customs brokers, importers acting as self-filers, and service bureaus](https://www.cbp.gov/trade/automated/catair).

For a software project, the practical implication is that the filer status and the connection belong to a qualifying entity, and your software operates on their behalf. Plan for this in the timeline, because the approval and setup with CBP is a process with its own pace that runs in parallel with, and sometimes gates, your technical work. It is worth confirming the filer arrangement before you write the integration, since it shapes the identifiers and testing path you will use. Our broader [ACE integration software guide](/blog/ace-integration-software-guide) covers the connection options at a higher level.

## EDI message sets and formats

ABI communication is EDI, electronic data interchange, using defined message sets rather than a modern JSON API. Each type of transaction has its own message format, and your software has to build outbound messages exactly to spec and parse the inbound ones CBP sends back.

At a high level you are dealing with structured, position and segment based records that carry the entry data: the importer, the goods, their classification, values, and the many fields CBP requires. CBP publishes the technical specifications in [Customs Publication 552, the CATAIR](https://www.cbp.gov/trade/automated/catair), which defines each record layout down to the field and is updated periodically. Building the integration means implementing these layouts precisely, because a misplaced or malformed field gets rejected. This is meticulous work, closer to protocol implementation than typical web development, and it rewards careful reading of the spec. The CATAIR is not a single document but a set of chapters, one per transaction type, so a project that files entry summaries plus a couple of partner government agency messages is implementing several distinct record specifications, each with its own conditional field rules. If EDI is new to your team, our primer on [EDI integration for supply chain](/blog/edi-integration-for-supply-chain) explains the general mechanics before you dive into the customs-specific layouts.

## Building and certifying the connection

You do not go straight to production. CBP requires testing and certification before live filing. Your software connects to a test environment, transmits sample transactions, and CBP verifies that your messages are formatted correctly and that you handle the responses properly. Only after you pass this certification for the transaction types you intend to file do you move to production.

Budget real time for this phase. Certification is where formatting mistakes, misunderstood field rules, and response-handling gaps surface, and each round trip with CBP has latency. Given the volume the system carries, correctness is not optional: those 38.4 million FY2024 entries all had to conform to the same layouts your test messages are validated against. A disciplined approach helps: build against the published CATAIR, validate messages before sending, and test the failure paths, not just the clean ones. The measurable acceptance criteria we write into contracts map naturally onto this, because "certified for these transaction sets" is an objective, checkable milestone rather than a vague sense of doneness. Treating certification as a first-class deliverable rather than a formality keeps the project honest.

## Handling responses and errors

Filing is a conversation, not a one-way send. When you transmit to ABI, CBP responds, and your software has to consume those responses correctly. Some confirm acceptance, some report specific errors with codes you must interpret and surface to a user, and some communicate status changes as CBP processes and releases the entry.

Reliable response handling is where good customs software separates from fragile customs software. Design for it deliberately:

- Parse every response and map CBP error codes to clear, actionable messages, so a filer knows exactly what to fix.
- Track the state of each entry as messages move it through submitted, accepted, rejected, and released, since the status arrives asynchronously.
- Reconcile transmissions with responses so nothing is silently lost, and retry or alert when an expected response does not arrive.
- Log the full exchange, because in a customs context you may need to prove exactly what was sent and when.

Skipping any of these produces software that files fine on a good day and strands the user the moment CBP pushes back. At the volumes and dollar figures involved, a single container held because a rejection went unnoticed can cost far more than the engineering to handle it properly.

## Maintaining compliance over time

An ABI integration is not build-once. CBP updates requirements, message formats evolve, and new programs and data elements appear. The CATAIR itself is [revised periodically](https://www.cbp.gov/trade/automated/catair), which means software that was certified two years ago can fall out of compliance if no one maintains it against CBP's changes. This is exactly why ongoing ownership and maintenance matter so much for customs systems.

Plan for the long life of the integration from the start. Keep the message-building logic well structured so format updates are contained changes rather than rewrites, monitor CBP's published changes, and keep a runbook so the system does not depend on one person's memory of how it works. Because customs filing is compliance-critical, and because CBP moves trillions of dollars of trade a year through this exact channel, treat maintenance as part of the system, not an afterthought, and make sure you own the code, the pipeline, and the documentation so you are never stranded. When you are ready to scope an ABI integration with a team that has built for US Customs, [get a technical proposal](/#contact).
