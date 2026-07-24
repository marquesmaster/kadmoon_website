---
title: "SaaS billing systems: subscriptions, usage, and dunning"
description: "A SaaS billing system guide: seat, usage, and tiered models, Stripe infrastructure, proration, dunning, tax and revenue recognition, and build vs buy."
category: "SaaS Development"
primaryKeyword: "saas billing system"
tags: ["subscription billing", "usage-based billing", "saas payments"]
takeaways:
  - "Seat, usage, and tiered billing each carry different engineering demands, and most real products blend them, so your data model has to represent the mix cleanly or pricing logic scattered across the code becomes impossible to change."
  - "Stripe is the source of truth for payments, but your app still needs its own entitlements model in your database, updated by webhooks, so a lapsed payment or plan change flips access correctly."
  - "Webhooks arrive out of order, arrive twice, or fail to arrive, so handlers must be idempotent and you need a reconciliation job that periodically compares your entitlements against Stripe's records."
  - "Mid-cycle plan changes are where billing bugs live, so write proration and upgrade/downgrade rules down as product decisions before coding them and test the annual-plan edge cases deliberately."
  - "Dunning recovers involuntary churn from failed and expired cards, and smart retry timing plus a short grace period with escalating reminders quietly protects a percentage of revenue every month."
faqs:
  - q: "Should I build my own SaaS billing system or use Stripe?"
    a: "You will not build a payment processor, since Stripe handles card storage, PCI scope, subscriptions, and retries. The real question is the billing logic on top, and Stripe Billing covers most standard subscription products with modest custom code around entitlements and webhooks. Lean toward custom only when your pricing is unusual or billing is woven into your product's core logic."
  - q: "How should SaaS billing handle mid-cycle upgrades and downgrades?"
    a: "Decide the policy explicitly: whether upgrades take effect immediately, whether downgrades wait for the next renewal, and how credits work. Stripe can compute proration automatically, but the rules are yours to define. Write them down as product decisions and deliberately test the mid-cycle change on an annual plan, since that path rarely gets exercised until a customer hits it."
  - q: "What is dunning and why does it matter for SaaS?"
    a: "Dunning is the process of recovering failed payments from expired or declined cards, which cause a meaningful share of subscription churn. A good flow retries the charge on a schedule, prompts the customer to update their card, and gives a grace period before cutting access. Skipping it means silently losing revenue from customers who still want your product."
  - q: "Why are Stripe webhooks the weak point in billing systems?"
    a: "Webhooks can arrive out of order, arrive twice, or fail to arrive at all if your endpoint is down. Without an idempotent handler and a reconciliation job that compares your entitlements against Stripe's records, a missed webhook silently gives a churned customer continued access or cuts off a paying one, and you find out only when someone complains."
---

Billing looks simple from the outside: charge customers every month, done. Then you add annual plans, mid-cycle upgrades, usage overages, coupons, taxes, failed cards, and refunds, and suddenly billing is one of the most bug-prone parts of the whole product. A SaaS billing system is where your pricing model meets accounting reality, and getting it wrong costs you revenue directly. Here is how the pieces fit together and where teams get burned.

## Billing models: seat, usage, tiered

The three common models each carry different engineering demands. Per-seat billing charges by the number of users, which is predictable and easy to reason about, but it forces you to track seat changes accurately and prorate when they happen mid-cycle. Usage-based billing charges by consumption, API calls, storage, transactions, which aligns cost with value but requires you to meter events reliably and aggregate them without losing or double-counting anything.

Tiered pricing packages features and limits into plans, often the simplest to sell and to build, though upgrades and downgrades between tiers introduce proration logic. Most real products blend these: a base subscription plus usage overages, or tiered plans with per-seat pricing inside each tier. Whatever the mix, your data model has to represent it cleanly, because pricing logic scattered across the codebase becomes impossible to change later. This is a core architecture decision alongside the ones in [how to build a SaaS application](/blog/how-to-build-a-saas-application).

## Stripe and billing infrastructure

Most US SaaS companies build on Stripe rather than a raw payment processor, because Stripe handles the parts you do not want to own: card storage and PCI scope, subscription objects, invoices, and the payment retries. Stripe Billing models subscriptions, prices, and usage records so a lot of the machinery exists out of the box, and Stripe Checkout or Elements handles the payment UI securely.

The mistake is treating Stripe as the whole system. Stripe is the source of truth for payments, but your application still needs its own model of who has access to what, driven by billing events. The reliable pattern keeps entitlements, what a customer can actually use, in your database, updated by Stripe webhooks, so a lapsed payment or a plan change flips access correctly. The deeper integration mechanics are covered in [Stripe integration for SaaS](/blog/stripe-integration-for-saas).

Webhooks are the weak point most teams underestimate. They can arrive out of order, arrive twice, or fail to arrive at all if your endpoint is down, so the handler has to be idempotent and you need a reconciliation job that periodically compares your entitlements against Stripe's records. Without that safety net, a missed webhook silently gives a churned customer continued access, or cuts off a paying one, and you find out only when someone complains.

## Proration, upgrades, and downgrades

Mid-cycle plan changes are where billing bugs live. A customer on a monthly plan upgrades on day fifteen, and you owe them a credit for the unused half of the old plan and a charge for the remainder of the new one. Downgrades raise the opposite question: refund now, or apply the change at the next renewal? Annual plans with monthly seat changes compound the arithmetic.

Stripe can compute proration automatically, which saves enormous effort, but you still have to decide the policy: do upgrades take effect immediately, do downgrades wait for renewal, how do you handle credits. Write these rules down as product decisions before you code them, because ambiguity here shows up as customer disputes and revenue leakage. Test the edge cases deliberately, since the mid-cycle change on an annual plan is exactly the path that never gets exercised until a customer hits it.

## Dunning and failed payments

A meaningful share of subscription churn is involuntary: the card expired, the bank declined, the payment simply failed. Dunning is the process of recovering these payments, and skipping it means silently losing revenue from customers who still want your product. A good dunning flow retries the charge on a schedule, notifies the customer to update their card, and gives them a grace period before cutting access.

The tuning matters. Retry too aggressively and you annoy customers and rack up processor fees; retry too passively and you lose recoverable revenue. Smart retry timing, clear email sequences, and an easy way to update payment details recover a large fraction of failed payments. Stripe provides retry and email tooling, but the customer-facing experience and the access-suspension logic are yours to design. Handle this well and it quietly protects a percentage of your revenue every month.

Decide the access policy deliberately, because it directly shapes recovery. Cutting a customer off the moment a payment fails maximizes pressure but also maximizes churn and support tickets, while a grace period keeps them using the product, and engaged, long enough to fix their card. Most B2B products land on a short grace window with escalating reminders, then a soft suspension that is easy to reverse once payment succeeds. The right balance depends on your customers, but the decision should be intentional rather than whatever the default happens to be.

## Invoicing, tax, and revenue recognition

Invoices are not just receipts, they are financial and sometimes legal documents. B2B customers expect proper invoices with their details, and enterprise buyers may need purchase orders and net terms rather than instant card charges. Your system has to generate accurate invoices, handle credits and refunds, and keep an auditable history.

Tax is its own hazard in the US, where sales tax rules vary by state and by product category after the economic-nexus changes of recent years. Tools like Stripe Tax or Avalara compute the right rate, but you have to integrate them and apply the results consistently. Revenue recognition is the accounting layer: an annual payment collected upfront is not all revenue today, it recognizes over the term. Finance teams need this to be correct, so plan for it early rather than reconstructing it under audit pressure.

## Build vs buy your billing stack

You will not build a payment processor, that is Stripe's job. The real build-versus-buy question is the billing logic on top: subscriptions, entitlements, proration, dunning, and reporting. Stripe Billing covers a lot, and for standard subscription products it may cover nearly everything you need with modest custom code around entitlements and webhooks.

You lean toward custom when your pricing is unusual, complex usage metering, hybrid models, contract-specific terms, or when billing is tightly woven into your product's core logic. The pragmatic path most teams take is to use Stripe for payments and subscription primitives, then build the thin layer that maps billing events to what customers can do. That keeps you off the PCI treadmill while giving you control where your business is actually different.

Whatever you decide, treat billing as a first-class part of the system rather than a feature bolted on before launch. It touches your database schema, your access control, your finance team's reporting, and your customers' trust, and mistakes in it are visible and expensive. Instrument it well, log every billing event, and make it easy to answer the question customers and finance ask most: why was this charge exactly this amount. If you are designing this now, [get a technical proposal](/#contact) that treats billing as first-class, and read [the blog](/blog) for related SaaS architecture guidance.
