---
title: "Import/export compliance software: what US traders need"
description: "A practical guide to import export compliance software for US traders: classification, valuation, origin, export controls, recordkeeping, and custom vs packaged tools."
category: "Trade & Supply Chain"
primaryKeyword: "import export compliance software"
tags: ["trade compliance software", "export controls software", "import compliance tools", "denied party screening"]
takeaways:
  - "US trade compliance spans multiple agencies (CBP, BIS, State/ITAR, Treasury/OFAC), and the legal standard is reasonable care, with the burden on the trader to be right and to prove it later."
  - "Import compliance turns on three determinations, classification, valuation, and origin, and a systematic error repeated across thousands of entries compounds into large overpayments or an audit penalty."
  - "Screening every party against government denied and sanctioned lists is the highest-leverage automated check, since OFAC assessed more than 1.5 billion dollars in penalties across 17 actions in 2023."
  - "Regulations require retaining import and export records, generally five years, so software that captures the reasoning as a byproduct of each transaction turns an audit from a scramble into a query."
  - "The value of compliance software is enforcing checks before a transaction commits and wiring them into the systems you already run, because compliance that lives in a silo gets skipped under pressure."
faqs:
  - q: "What does import export compliance software actually do?"
    a: "It turns trade obligations into checks that run on every transaction instead of relying on memory and manual review. That covers accurate HTS classification, customs valuation, and country of origin on the import side, plus export classification, license determination, and denied-party screening on the export side, along with the recordkeeping needed to prove reasonable care during an audit."
  - q: "Should I buy packaged trade compliance software or build custom?"
    a: "Packaged tools work well when your operations are standard and the product's assumptions match how you work, giving you regulatory content and screening out of the box. Custom software makes sense when compliance is core to your business, when you need tight integration with your ERP, or when your product mix creates classification and origin logic the package cannot handle. Many operations use a hybrid: a screening or content provider with custom logic and integration built around it."
  - q: "How long do I have to keep trade compliance records?"
    a: "US regulations generally require traders to retain records of their import and export transactions for five years from the date of entry, and to produce them on demand during an audit. The obligation covers not just the filings but the supporting documentation and the basis for each determination, which is why software that captures the reasoning automatically is a strong argument over manual processes."
  - q: "Why is denied party screening so important for exporters?"
    a: "Dealing with a prohibited party is a serious violation regardless of intent, which makes screening every party against government denied and sanctioned lists the highest-leverage automated check. Those lists are moving targets, with OFAC's SDN list alone exceeding 12,000 entries, and 2023 was a record year with more than 1.5 billion dollars in OFAC penalties across 17 enforcement actions."
---

US trade compliance is a field where a spreadsheet error can turn into a penalty, a seized shipment, or an audit. The scale is easy to underestimate. In fiscal year 2023, CBP processed [$3.33 trillion in imports across 36.7 million entries](https://www.cbp.gov/newsroom/stats/trade), and every one of those entries carried a classification, a value, and an origin that had to be right. As volumes grow, manual processes stop scaling and start creating risk. Import/export compliance software exists to make the rules enforceable in your daily operations rather than something a few experts hold in their heads. This guide walks through what these systems actually need to do for a US importer or exporter, and how to decide between buying a package and building something that fits your trade.

## The US trade compliance landscape

Compliance is not one rule. It is a web of agencies and requirements that touch every cross-border transaction.

On the import side, US Customs and Border Protection expects accurate classification, valuation, and country of origin, filed electronically through the ACE system. ACE is now the backbone of that process: CBP has reported processing [over 36 million entry summaries in a single fiscal year, with more than 99% filed electronically](https://www.cbp.gov/trade/automated/ace-transaction-details) through electronic data interchange. On the export side, the Bureau of Industry and Security administers the Export Administration Regulations, the State Department controls defense items under ITAR, and the Treasury's OFAC maintains sanctions and screening obligations that apply to everyone. Reasonable care is the legal standard, and the burden is on the trader to get it right and to prove it later.

Software helps by turning these obligations into checks that run on every transaction instead of relying on memory and manual review. For the automation side specifically, see [trade compliance automation](/blog/trade-compliance-automation).

What makes this hard is that the rules change and the volume grows. Tariff schedules get updated, sanctions lists change constantly, and trade agreements shift duty treatment. A process that depends on a person remembering the current state of all of this does not hold up as your transaction count climbs. The value of software is not that it knows the rules better than your experts. It is that it applies their knowledge consistently to every single transaction, including the ones that come in at the end of a busy day when attention is thin.

## Classification, valuation, and origin

Three determinations sit at the center of import compliance, and each is a place where errors are common and costly.

- Classification: assigning the correct Harmonized Tariff Schedule code, which drives the duty rate and any special requirements. Getting it wrong means overpaying, underpaying, or misdeclaring, all of which carry consequences.
- Valuation: declaring the correct customs value, which is not always the invoice price once you account for assists, royalties, and freight terms.
- Origin: determining country of origin correctly, which affects duty rates, trade preference eligibility, and admissibility.

The stakes are real money. CBP collected tens of billions in duties, taxes, and fees on that $3.33 trillion in FY2023 trade, and a systematic classification error repeated across thousands of entries compounds into either large overpayments you never recover or an underpayment that surfaces as a penalty during an audit. Good software supports consistent classification with reference data and history, applies valuation rules the same way every time, and documents the reasoning behind each determination so it holds up under review. Classification in particular benefits from dedicated tooling; our piece on [HTS classification software](/blog/hts-classification-software) goes deeper.

## Export controls and licensing

Exporting is where many companies underestimate their exposure, because the controls apply even to items that seem ordinary.

The core questions are what you are shipping, where it is going, who is receiving it, and how it will be used. An item may require a license based on its classification and destination. A party may be prohibited entirely because they appear on a restricted or sanctioned list. Software supports this by determining export classification, checking destination and end-use against license requirements, and flagging transactions that need a license before they ship rather than after.

The penalties for getting this wrong are not theoretical. 2023 was a record year for US sanctions enforcement: OFAC assessed [more than $1.5 billion in penalties across 17 enforcement actions](https://www.mofo.com/resources/insights/240304-us-sanctions-enforcement-2023-trends), the highest single-year total in its history, driven by settlements with parties that moved goods and payments through prohibited channels. The highest-leverage automated check is screening every party against government denied and sanctioned party lists, since dealing with a prohibited party is a serious violation regardless of intent. [Denied party screening software](/blog/denied-party-screening-software) covers how that works in practice.

## Recordkeeping and audit readiness

Compliance is not only about getting each transaction right. It is about proving you did, sometimes years later.

US regulations require traders to retain records of their import and export transactions, generally for five years from the date of entry, and to produce them on demand during an audit. The obligation covers not just the filings but the supporting documentation and the basis for each determination. A system that captures this automatically, as a byproduct of processing each transaction, turns an audit from a scramble into a query. You want a complete, timestamped record of what you declared and why, retrievable without archaeology.

This is one of the strongest arguments for software over manual processes. Consistent recordkeeping is hard to sustain by hand at volume, and it is exactly what an auditor wants to see.

The related benefit is defensibility. Reasonable care is not only about being right. It is about being able to show that you had a sound process and followed it. A system that records who classified an item, on what basis, and against which reference data gives you a documented rationale for every decision. If a determination is later questioned, the difference between a well-documented judgment made in good faith and an unexplained entry with no supporting record can be the difference between a correction and a penalty. Software that captures the reasoning, not just the result, is what makes that case for you.

## Automating compliance checks

The real value of compliance software is moving checks from after the fact to before the transaction commits.

Screening runs automatically against current restricted-party lists, and those lists are moving targets. OFAC's Specially Designated Nationals list alone now runs to [more than 12,000 entries, with 3,135 parties added in 2024](https://www.fluxforce.ai/statistics/sanctions-list-growth) on top of the many other lists that feed the Consolidated Screening List. No team screens that by hand at any real volume. Classification pulls from a maintained database rather than someone's memory. License requirements are flagged based on the item and destination. Filings are validated before submission to ACE so errors are caught before they reach the agency. Anything that fails a check is held for human review rather than proceeding silently.

The pattern is consistent: let the software enforce the rules on every transaction, and route exceptions to a person. That scales in a way manual review cannot, and it produces the audit trail at the same time. For clean electronic filing, integrating properly with ACE matters; see our [ACE integration software guide](/blog/ace-integration-software-guide).

Where compliance software pays off most is in tying these checks into the systems you already run. A screening step is far more effective when it fires automatically as an order enters your ERP than when someone remembers to run it separately. The same goes for classification pulling from your product master and filings drawing from your existing transaction data. Compliance that lives in a silo gets skipped under pressure. Compliance built into the flow of a transaction happens whether or not anyone is watching, which is exactly what a reasonable-care standard rewards.

## Custom vs packaged tools

There are capable off-the-shelf trade compliance products, and for many traders one of them is the right answer. The question is how well a package fits your specific trade.

Packaged tools work well when your operations are standard and the product's assumptions match how you work. They give you regulatory content and screening out of the box. They can fall short when your workflows are unusual, when you need tight integration with your ERP and your systems, or when your product mix creates classification and origin logic the package does not handle cleanly.

Custom software makes sense when compliance is core to your business, when you need it woven into your existing operations, or when the packaged options force you to work around them. The two are not exclusive: many operations use a screening service or content provider and build custom logic and integration around it. If you handle US customs and trade compliance at scale, that hybrid is often the sensible target. We build this kind of system as our flagship focus; [get a technical proposal](/#contact) or explore [custom US customs software](/blog/custom-us-customs-software).
