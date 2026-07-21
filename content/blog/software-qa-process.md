---
title: "The software QA process: how quality gets built in"
description: "What a real software QA process covers: test levels and types, manual vs automated testing, bug triage, test environments, and what good QA looks like to clients."
category: "Process & Delivery"
primaryKeyword: "software qa process"
tags: ["software testing process", "quality assurance software", "qa best practices"]
---

Quality assurance is not a phase at the end where someone clicks around looking for bugs. In teams that ship reliable software, quality is built in from the first sprint, and QA is a discipline woven through the whole process rather than a gate at the finish line. This explains what a real QA process covers, the levels and types of testing involved, and what it should look like from the outside if you are the client paying for it.

## What QA really covers

There is a useful distinction between testing and quality assurance. Testing is finding defects in what has been built. Quality assurance is the broader practice of preventing defects in the first place: clear acceptance criteria before work starts, code review, automated checks in the pipeline, and a definition of done that everyone agrees on.

The cheapest bug is the one that never gets written, and the next cheapest is the one caught the same day. A bug found in production can cost many times what the same bug would have cost caught during development, because now it involves a customer, a support ticket, an urgent fix, and a redeploy. Good QA pushes defect discovery as far left as possible, toward the moment the code is written, which is why it starts with requirements rather than with a test at the end.

## Test levels and types

Testing happens at several levels, each catching a different class of problem. A healthy project uses all of them in proportion.

- Unit tests check individual functions and components in isolation. They are fast, numerous, and the foundation, catching logic errors the instant code changes.
- Integration tests verify that components work together, that a service talks to the database correctly, that two modules exchange data as expected.
- End-to-end tests exercise complete user workflows through the real interface, confirming the whole system does what a user needs.

On top of the levels sit types of testing aimed at specific concerns:

- Functional testing confirms features meet their acceptance criteria.
- Regression testing makes sure new changes did not break what already worked.
- Performance testing checks the system holds up under expected load.
- Security testing looks for vulnerabilities, essential for anything handling sensitive data or under SOC 2 or HIPAA scope.
- Usability and accessibility testing confirm real people can actually use the thing.

The mix depends on the product. A payments flow needs heavy security and regression coverage; an internal tool may lean lighter. The skill is proportioning effort to risk.

## Manual vs automated testing

Both belong in a mature process, and each is good at something the other is not.

Automated tests are code that tests code. Their value is repetition: they run on every change, in minutes, catching regressions immediately and never getting bored or missing a step. They are the backbone of confidence that a change did not break something elsewhere. The investment is up front, writing and maintaining them, and it pays off across the life of the project.

Manual testing is a human using the software with judgment. It is irreplaceable for exploratory testing, finding the weird edge cases nobody scripted, for usability, for how something feels, and for new features whose behavior is still settling. The rule of thumb: automate the stable, repetitive, high-value paths so the machine guards them forever, and spend human attention on the new, the nuanced, and the exploratory.

## Bug triage and severity

Not every bug is equal, and treating them all as equally urgent is its own failure. Triage is the process of deciding what gets fixed, in what order. It rests on two axes: severity, how bad the impact is, and priority, how soon it needs attention.

A rough severity scale:

- Critical: the system is down or data is being lost or corrupted. Stop and fix now.
- High: a major feature is broken with no reasonable workaround. Fix this cycle.
- Medium: something is wrong but there is a workaround, or it hits a minor path. Schedule it.
- Low: cosmetic issues and minor annoyances. Fix when convenient.

What matters to a client is that this is explicit and consistent. Every reported bug should have an owner, a severity, and a status, tracked somewhere visible, so nothing important quietly falls through and so you can see at a glance whether quality is trending the right way.

## Test environments and data

Reliable testing needs somewhere realistic to test. Software behaves differently in a clean demo than under real conditions, so teams maintain separate environments, typically development, a staging or QA environment that mirrors production, and production itself, so changes can be verified in a production-like setting before they reach real users.

Test data is the underrated half of this. Testing against realistic data surfaces problems that pristine sample records hide: the customer with a decade of history, the unusual character in a name, the transaction at a boundary. When production data is sensitive, it has to be anonymized or synthesized so testing never puts real customer information at risk, which matters for both security and compliance.

## What good QA looks like to clients

If you are buying software, you cannot easily inspect the test suite, but you can read the signals. Good QA shows up as:

- Acceptance criteria written before work starts, so "done" is defined and testable rather than argued about later.
- A working demo each sprint that you can actually try, not just a status update claiming progress.
- Bugs tracked openly with clear severity, not discovered by you in production.
- Automated tests running in the pipeline, so regressions are caught before they ship.
- Releases that are boring, predictable, reversible, and rarely followed by a scramble.

That predictability is the real product of a good QA process. It is closely tied to how the whole team operates, so it is worth understanding [the custom software development process](/blog/custom-software-development-process) it sits inside and [how a software house works](/blog/how-a-software-house-works) day to day.

Kadmoon builds quality in from the first sprint, with measurable acceptance criteria in the contract and a working demo every two weeks, delivered by a senior in-house team. If you want software that ships without drama, [start a project](/#contact) or see [what we build](/#capabilities).
