---
title: "Duty drawback: the duty you already paid and can get back"
description: "Drawback refunds up to 99% of duties on imported goods that are later exported or destroyed. As tariffs rise, the money left unclaimed grows. Here is how it works and how to find it."
category: "Customs & Compliance"
primaryKeyword: "duty drawback"
tags: ["duty drawback", "duty recovery", "exports", "tariffs", "customs analytics"]
takeaways:
  - "Duty drawback refunds up to 99% of certain duties, taxes, and fees paid on imported goods that are later exported or destroyed, or substituted by commercially interchangeable goods."
  - "The main types are unused-merchandise drawback, manufacturing drawback, and rejected-merchandise drawback."
  - "As tariffs rise, the duty sitting in exported goods rises with it, so unclaimed drawback grows."
  - "Not all special tariffs are drawback-eligible, so the recoverable amount has to be calculated carefully, not assumed."
  - "Finding drawback means matching import duty to later exports in your own data, which is an analytics problem most operations never run."
faqs:
  - q: "What is duty drawback?"
    a: "Duty drawback is a refund of up to 99% of certain duties, taxes, and fees that were paid on imported goods when those goods, or goods made from them, are later exported or destroyed. It exists so that duty is not a permanent cost on products that do not ultimately stay in the U.S. market. The refund is claimed from CBP and can be substantial for operations that both import and export, but it has to be documented and tied back to the original import."
  - q: "What are the types of drawback?"
    a: "The three common types are unused-merchandise drawback, for imported goods exported in essentially the same condition; manufacturing drawback, for imported inputs used to make a product that is then exported; and rejected-merchandise drawback, for goods that did not conform and are returned or destroyed. Substitution is allowed in some cases, meaning commercially interchangeable goods can stand in for the exact imported unit, which widens what can be claimed. Which type applies shapes both the eligibility and the documentation."
  - q: "Does drawback apply to Section 301 and 232 tariffs?"
    a: "Not uniformly. Drawback eligibility depends on the specific duty and program, and not all special tariffs are drawback-eligible. That matters a lot when special tariffs are a large share of the duty paid, because assuming they are recoverable overstates the opportunity. The recoverable amount has to be calculated from the actual duties paid, with each tariff type treated according to its own drawback rules, rather than applied as a flat percentage of total duty."
---

Most importers think of duty as a sunk cost: it is paid at the border and gone. For goods that ultimately leave the country, that is not true. Duty drawback refunds up to 99% of certain duties on imported goods that are later exported or destroyed, and for an operation that both imports and exports, it can be a meaningful recovery. As tariffs rose through 2025 and 2026, the duty sitting inside exported goods rose with it, and so did the amount being left unclaimed.

## What drawback is

Drawback is a refund from CBP of up to 99% of certain duties, taxes, and fees paid on imported goods, available when those goods, or goods made from them, are exported or destroyed rather than sold into U.S. commerce. The principle is simple: duty is meant to apply to goods that stay in the market, so goods that leave can recover most of what was paid. The execution is less simple, because the refund has to be tied back to the original import with documentation.

## The main types

- **Unused-merchandise drawback** covers imported goods that are exported in essentially the same condition they arrived in.
- **Manufacturing drawback** covers imported inputs that are used to make a product which is then exported.
- **Rejected-merchandise drawback** covers goods that did not conform to specification and are returned or destroyed.

In some cases, **substitution** is allowed, meaning a commercially interchangeable good can stand in for the exact imported unit. That widens what can be claimed, because the export does not have to be traced to the specific imported item, only to an interchangeable one.

## Why the opportunity is growing

The value of drawback scales with the duty paid. When duty was a few points, the recovery on exported goods was modest. With special tariffs stacking on the base rate, the duty inside a product can be a large number, and the refund on the share that is exported grows accordingly. For an operation with meaningful exports or re-exports, drawback that was not worth the effort a few years ago can be worth real money now.

## The catch: not all tariffs are eligible

Drawback is not a flat percentage of total duty. Eligibility depends on the specific duty and program, and not every special tariff is drawback-eligible. When special tariffs are a large share of what was paid, assuming they come back overstates the opportunity. The recoverable amount has to be built up from the actual duties paid, with each tariff type handled under its own rules. Getting this wrong in either direction, leaving money on the table or over-claiming, is a real risk. (Confirm current eligibility against CBP before filing.)

## Why finding it is an analytics problem

The reason drawback goes unclaimed is not that it is secret; it is that finding it means matching import duty to later exports across your own data, unit by unit, with the eligibility rules applied. That is a join between import entries, the duty paid on them, and subsequent exports, filtered by what is actually eligible. Done by hand, it is rarely worth the effort; done as [analytics](/platform) over the data you already have, the recoverable amount becomes visible and the claim becomes supportable. It is the same [duty and landed-cost](/blog/landed-cost-calculation) data the rest of your trade analytics already uses, asked a different question.

If you both import and export, the first step is seeing how much recoverable duty is sitting in your exported goods. [Tell us what you move](/contact), or see how the [platform](/platform) models duty.
