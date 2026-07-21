---
title: "VB6 application migration: escaping an unsupported past"
description: "A practical VB6 migration guide: the risks of running Visual Basic 6 today, rewrite vs automated conversion, preserving business rules, and phased cutover."
category: "Legacy Modernization"
primaryKeyword: "vb6 migration"
tags: ["migrate vb6", "visual basic 6 modernization", "vb6 to .net", "legacy migration"]
---

Plenty of businesses still run on a Visual Basic 6 application that has quietly worked for two decades. It handles orders, or scheduling, or some core operation, and nobody wants to touch it because it works and the person who wrote it is long gone. The problem is that the ground under it keeps shifting. VB6 shipped as part of Visual Studio 6.0 in September 1998, and Microsoft ended [mainstream support for it on March 31, 2005 and extended support on March 31, 2008](https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/visual-basic-6-support-policy). The IDE has been formally unsupported since April 2008. This covers how to get off it without gambling the operation.

## The risks of running VB6 today

The risk is not that the app stops working tomorrow. Microsoft has committed to supporting the VB6 runtime for the [lifetime of supported Windows and Windows Server releases](https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/visual-basic-6-support-policy), so the compiled application keeps running. The risk is that you are one dependency away from a crisis you cannot fix quickly. The specific exposures:

- The development environment is out of support. The runtime is covered, but the IDE, the compiler, and the ability to build a changed version have had no support since April 8, 2008. When you need to modify the app, you are on your own.
- The talent pool has evaporated. Finding an engineer who can safely change VB6 code is hard and getting harder, so even small fixes take longer and cost more each year. The developers who wrote production VB6 in 1998 are now near or past retirement.
- Security is frozen in time. The language, its components, and any third-party OCX controls it depends on stopped receiving patches, so known vulnerabilities simply stay open.
- The knowledge is undocumented. The business rules live in the code and in the memory of people who may no longer be around, which makes the app both critical and opaque.

Here is the support timeline in one place:

| Milestone | Date |
| --- | --- |
| VB6 released (Visual Studio 6.0) | September 1998 |
| Mainstream support ended | March 31, 2005 |
| Extended support ended | March 31, 2008 |
| IDE / development formally unsupported | April 8, 2008 |
| Runtime | Supported on supported Windows releases |

The danger compounds. The longer you wait, the fewer people can help and the more the surrounding technology has moved on. An application that entered extended support in 2008 has now been out of full support for well over fifteen years.

## Rewrite vs automated conversion

There are two broad paths off VB6, and the honest answer is that the best projects usually combine them.

Automated conversion tools translate VB6 into a modern language, typically .NET, more or less line by line. This is fast and cheap up front, and it can be the right move when the app is large, well-structured, and you mainly need it running on a supported stack. The catch is that a mechanical translation carries the original's design forward, awkward structure, dated patterns, and all, so you often end up with modern syntax expressing a twenty-year-old architecture. It compiles, but it is not really modernized.

A rewrite rebuilds the application on a modern foundation, keeping the business logic but discarding the old structure. It costs more and takes longer, and it is the right call when the app is central to the business, when the UI or workflow needs to change anyway, or when you want to unlock things the old design cannot support. The middle path, convert first to get onto a supported stack, then refactor the high-value parts, is often the pragmatic winner. For the wider set of options, [how to modernize legacy software](/blog/how-to-modernize-legacy-software) lays out the rehost, replatform, refactor, and rebuild spectrum.

## Preserving critical business rules

The single biggest risk in any VB6 migration is losing business logic that only exists in the old code. Two decades of edge cases, special customer handling, tax quirks, validation rules nobody remembers the reason for, are all baked in, and much of it is undocumented. If the new system silently drops one of these, you may not find out until a customer or an auditor does.

Protecting against that means treating the old code as a specification to be mined, not just replaced. Read it carefully, extract the rules, and write them down explicitly. Capture the current behavior in tests so you can prove the new system matches the old one case for case. Where the logic is genuinely unclear, involve the people who use the app daily. They often remember why a rule exists even when the code does not explain it. This archaeology is slow, and skipping it is how migrations quietly break the business.

## Choosing a modern target stack

For a Windows desktop app, the natural target is the .NET platform, which offers a supported, well-staffed path forward. But the migration is a chance to ask a bigger question: does this still need to be a desktop application at all?

Many VB6 apps predate the web era and would be better as browser-based systems today, reachable from anywhere, easier to deploy, and simpler to integrate. A modern web stack, a React or Next.js front end over a Node.js or Python back end with a PostgreSQL database, removes the desktop deployment headache entirely and positions the app to connect with everything else you run. The right target depends on how the app is used. Heavy offline desktop use may argue for staying native, while an app that could serve users across locations often belongs on the web. Decide this deliberately rather than defaulting to a like-for-like rebuild.

## Data and integration migration

The application is only half the job. The data behind it, often in an old Access database or an aging SQL Server, has to come across cleanly, and legacy data is rarely as clean as anyone hopes. Expect duplicates, inconsistent formats, and fields used for purposes their names do not suggest. Plan for a real migration effort: profile the data, define the mapping, transform and validate, and reconcile record counts and totals against the source before you trust it.

Integrations need the same care. The old app may exchange files with other systems, or drive a printer or device, or feed a downstream process. Every one of those touchpoints has to be re-established in the new system, and each is a place where a missed detail causes a production incident on cutover day.

## Planning a phased cutover

A big-bang switch, flip everything to the new system on Monday, is the highest-risk way to do this, because the old app is load-bearing and any failure hits the whole operation at once. A phased approach lowers the stakes.

Where the app decomposes into modules, migrate and cut over one at a time, running old and new in parallel and reconciling until the new piece is proven. Where it cannot be split, run the two systems side by side for a period, feeding the same inputs and comparing outputs, so you catch discrepancies before the old system is retired. Keep the old app available as a fallback until the new one has run clean through a full business cycle, month-end, quarter-end, whatever your peaks are. For the connective work involved, [legacy system integration](/blog/legacy-system-integration) covers bridging old and new during the transition.

Kadmoon migrates legacy applications for US companies with a senior in-house team, mining the old code for business rules and delivering a phased cutover with measurable acceptance criteria, and you own 100 percent of the resulting code. If a VB6 app is a risk you have been putting off, [start a project](/#contact) or read more on [the blog](/blog).
