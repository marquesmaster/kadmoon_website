---
title: "Incoterms and landed cost: why the wrong term breaks your cost model"
description: "Incoterms decide which costs are in the seller's price and who pays duty. Get the term wrong in your landed-cost model and every margin number is off. Here is how they connect."
category: "Trade Operations"
primaryKeyword: "incoterms landed cost"
tags: ["incoterms", "landed cost", "freight", "import cost", "trade analytics"]
takeaways:
  - "Incoterms (currently the 2020 edition) define who arranges and pays carriage and insurance, where risk transfers, and who clears import, but not price, title, or payment terms."
  - "They tell you which cost components are already in the seller's invoice price and which the buyer adds, which is the core of a correct landed-cost model."
  - "Under EXW, FCA, FAS, and FOB the buyer typically adds freight, insurance, duty, and fees; under CIF, CIP, CFR, and CPT freight is embedded in the price."
  - "Under DDP the seller has absorbed duty and import costs, so the delivered price already includes them, and the customs value still has to be derived correctly."
  - "Misaligned Incoterm assumptions are a leading cause of wrong landed cost, because costs get double-counted or missed entirely."
faqs:
  - q: "What are Incoterms?"
    a: "Incoterms are a standard set of trade terms, published by the International Chamber of Commerce, that define the responsibilities of buyer and seller in an international sale: who arranges and pays for carriage and insurance, where the risk of loss transfers, and who handles export and import clearance. The current edition is Incoterms 2020, and there are 11 terms. They do not set the price, transfer ownership, or define payment terms; those are separate. Each contract should state which Incoterm and which edition it uses."
  - q: "How do Incoterms affect landed cost?"
    a: "Landed cost is the full cost of a product delivered and cleared, so it depends on which of those costs are already in the seller's price and which the buyer adds. The Incoterm is what tells you that split. Under EXW or FOB, the buyer adds freight, insurance, duty, and fees on top of the invoice price. Under CIF or CIP, freight and often insurance are already inside the price, so adding them again double-counts. Under DDP, the seller has even absorbed duty. Using the wrong assumption for the term means your landed cost is either overstated or understated."
  - q: "Which Incoterm should an importer use?"
    a: "There is no single right term; it depends on how much of the logistics and risk the buyer wants to control. Buyers who want control and visibility over freight and duty often prefer FCA or FOB, which put those costs in the buyer's hands where they can be measured and managed. DDP shifts the most to the seller but can hide the true cost breakdown and the customs value. The practical point for cost modeling is less about which term is best and more about modeling each shipment according to the term it actually used, consistently."
---

Two importers can buy the same product at the same invoice price and end up with very different landed costs, and the reason is often the Incoterm. The term decides which costs are already inside the seller's price and which the buyer adds, which makes it the hinge of a correct [landed-cost](/blog/landed-cost-calculation) model. Get it wrong and the costs get double-counted or missed, and every margin number built on top is off.

## What Incoterms do, and do not, decide

Incoterms, currently the 2020 edition, define the division of responsibility between buyer and seller: who arranges and pays for carriage and insurance, where the risk of loss transfers, and who handles export and import clearance. There are 11 terms, seven for any mode and four for sea freight. What they do not decide is just as important: they do not set the price, transfer ownership, or define payment terms. Treating an Incoterm as if it settled those is a common source of confusion.

## Where the cost responsibility shifts

For landed cost, the useful way to read the terms is by what the buyer has to add:

- **EXW, FCA, FAS, FOB** put most of the cost on the buyer. The buyer typically adds international freight, insurance, [duty](/services/customs-compliance), and fees on top of the invoice price.
- **CPT, CIP, CFR, CIF** embed carriage in the seller's price, and the insurance ones embed insurance too. Those costs are already inside the invoice, so adding them again double-counts.
- **DAP and DPU** put the seller in charge of getting goods to the destination, with the buyer handling import clearance and duty.
- **DDP** puts everything on the seller, including import clearance, duty, and taxes, so the delivered price already contains them.

## Why the wrong term breaks the model

A landed-cost model works by adding each cost component to the goods value. If the model assumes the buyer pays freight but the shipment was CIF, the freight is counted twice, once inside the invoice and once added on. If it assumes CIF but the shipment was FOB, the freight is missed entirely. The same applies to duty under DDP. These are not small errors; freight and duty are often the largest components, so a term mismatch can move landed cost by double digits, in either direction.

## DDP hides the breakdown

DDP deserves a specific warning. Because the seller has absorbed freight, duty, and clearance, the buyer sees a single delivered price with no breakdown. That can look convenient, but it hides what the product actually costs and where, and the [customs value](/docs/glossary) still has to be derived correctly for reporting. An operation that runs on DDP without decomposing the delivered price is flying blind on its real cost structure.

## Modeling it correctly

The fix is not to standardize on one term; it is to model each shipment according to the term it actually used. That means the Incoterm is a field in the data, and the landed-cost logic reads it to decide which components to add and which are already in the price. Done consistently across shipments, [landed cost](/platform) stays correct regardless of how each supplier ships. Done with a single blanket assumption, it is wrong for every shipment that does not match it.

If your margins depend on landed cost, the first step is making sure it is built on the right Incoterm for each shipment. [Tell us how you buy and ship](/contact), or see how the [platform](/platform) models landed cost.
