---
title: "Writing acceptance criteria that prevent disputes"
description: "How to write acceptance criteria that prevent disputes: testable given-when-then rules, edge cases, and clear links to sign-off so 'done' means the same to everyone."
category: "Process & Delivery"
primaryKeyword: "acceptance criteria"
tags: ["how to write acceptance criteria", "definition of done", "user story criteria"]
---

Most disputes on a software project come down to one word: done. The client thought a feature included something the team never built, the team thought it delivered exactly what was asked, and both are looking at the same statement of work reading it differently. Acceptance criteria fix this by turning "done" from an opinion into a test. This guide covers how to write criteria that hold up under pressure.

## Why acceptance criteria matter

Acceptance criteria are the specific, checkable conditions a piece of work must satisfy to count as complete. They are not the feature description, they are the pass/fail test for it. A user story says what someone wants. The acceptance criteria say exactly how you will know it works.

Their real job is to remove ambiguity before it becomes an argument. When criteria are written down and agreed to up front, there is no room for the "I assumed" conversation that derails projects at the worst moment. This is why we put measurable acceptance criteria directly into the contract: they convert vague expectations into an agreed standard both sides can check. A feature either meets the criteria or it does not, and that is a far calmer conversation than debating intent after the fact. Clear criteria are also one of the [contract terms worth negotiating](/blog/custom-software-contract-terms-to-negotiate) precisely because they govern when payment is earned.

## Given-when-then and checklists

Two formats cover almost everything. The given-when-then structure describes behavior as a scenario: given some starting state, when the user does something, then a specific result happens. It reads naturally and maps directly to a test.

For example: given a customer with an overdue invoice, when a user tries to place a new order, then the system blocks the order and shows the outstanding balance. That is unambiguous. Anyone can check it.

Checklists work better for criteria that are not about a single flow: a list of conditions that must all be true. A report screen might require that it loads in under three seconds, shows the last thirty days by default, exports to CSV, and hides rows the user has no permission to see. Use given-when-then for behavior and scenarios, use checklists for lists of requirements, and do not force everything into one shape. The goal is clarity, not format purity.

## Making criteria testable

A criterion you cannot objectively verify is not a criterion, it is a wish. "The interface should be intuitive" cannot pass or fail, because two reasonable people will disagree about whether it did. Every criterion needs a clear yes-or-no answer.

To make criteria testable, replace vague adjectives with observable outcomes. Instead of "fast," write "results appear within two seconds for a typical query." Instead of "the app handles errors gracefully," write "if the save fails, the user sees a message and their input is preserved." Each criterion should be something a tester, or you, can check without asking the author what they meant. If you cannot describe how you would verify it, rewrite it until you can. This discipline is what makes acceptance criteria the backbone of a working [definition of done](/blog/custom-software-development-process) rather than a paragraph of good intentions.

## Covering edge cases

Happy-path criteria are easy and insufficient. The feature works when everything goes right, fine, but most disputes and most bugs live in the cases nobody wrote down. What happens with an empty field, a duplicate entry, a network failure mid-save, a user without permission, a value at the boundary.

Good acceptance criteria deliberately cover the edges. For each feature, ask what happens when the input is missing, wrong, too large, or arrives out of order, and write a criterion for the behavior you expect. You will not catch every case, but naming the important ones up front prevents the "we never discussed that" gap that turns into unpaid rework or a payment fight. Edge cases are also where you discover requirements you did not know you had, which is cheaper to find while writing criteria than after the code ships.

## Linking criteria to sign-off

Acceptance criteria are only powerful if they actually gate acceptance. The mechanism is simple: a piece of work is accepted when its criteria are demonstrably met, and payment or sprint sign-off is tied to that demonstration rather than to a general sense that things are going well.

In a two-week sprint model, this happens at the demo. The team shows the working software against the agreed criteria, and you confirm each one passes. Because the criteria were set before the work started, the review is a checklist, not a negotiation. This is what keeps a project honest on both sides: the team knows exactly what it must deliver to get paid, and you know exactly what you are paying for. When criteria are woven into milestones this way, the whole engagement runs with less friction, which is a big part of what separates a [real software development partner](/blog/what-to-look-for-in-a-software-development-partner) from a firm that argues about scope.

## Common mistakes to avoid

A few recurring errors defeat the purpose of writing criteria at all:

- Writing them after the work is done, which turns them into a description rather than a test and lets both sides reverse-engineer their own version of "done."
- Making them vague. "Works well" and "user-friendly" cannot pass or fail, so they settle nothing.
- Only covering the happy path and leaving every error and edge case undefined.
- Bundling too much into one criterion, so a single failure in a corner blocks acceptance of an otherwise complete feature. Keep each criterion small and independent.
- Treating them as fixed forever. Criteria can change as you learn, but change them deliberately and by agreement, not by quietly reinterpreting them later.

Write criteria before you build, make each one a clean pass or fail, cover the edges, and tie them to sign-off. Do that and the word "done" stops being a source of conflict. If you want to see how this discipline shapes an entire engagement, our overview of the [custom software development process](/blog/custom-software-development-process) shows where criteria fit into each sprint. When you want a proposal with measurable acceptance criteria written in from the start, [start a project](/#contact).
