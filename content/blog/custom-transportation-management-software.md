---
title: "Custom TMS: when to build transportation management software"
description: "A guide to custom TMS software: what a TMS does, where packaged platforms limit you, rating and routing, carrier EDI, freight audit, and when to build your own."
category: "Trade & Supply Chain"
primaryKeyword: "custom tms software"
tags: ["transportation management system", "tms development", "custom tms build", "freight audit software"]
---

A transportation management system sits at the center of how freight moves and how it gets paid for, which means small inefficiencies there multiply across every shipment. The dollars behind that sentence are large: US business logistics costs [reached about $2.4 trillion in 2023, roughly 8.7% of GDP](https://www.thescxchange.com/articles/10429-business-logistics-costs-finally-reverting-to-prepandemic-levels-according-annual-report), according to the CSCMP State of Logistics Report prepared by Kearney. Plenty of companies run a packaged TMS and make it work. Others find that the platform dictates their operation instead of supporting it, and the workarounds start to cost more than the license. This is a guide to what a TMS actually does, where off-the-shelf platforms limit you, and how to tell whether building a custom TMS is the right move rather than an expensive detour.

## What a TMS does

A transportation management system plans, executes, and settles the movement of freight. In practice that spans several jobs that all have to work together. It rates shipments by comparing carrier options and costs. It routes and plans loads, deciding how orders get combined and dispatched. It tenders freight to carriers and tracks it in transit. And it handles the money side, auditing carrier invoices against what was agreed and settling payment.

Around that core sit the connections that make it useful: integrations with your ERP or order system so shipments flow in automatically, integrations with carriers so tendering and tracking are not manual, and reporting so you can see cost and performance across lanes and carriers. Demand for this software is climbing. MarketsandMarkets projects the global TMS market to grow to [about $37 billion by 2030, a compound annual growth rate near 14.9%](https://www.marketsandmarkets.com/Market-Reports/transportation-management-market-232446179.html), pushed by e-commerce delivery expectations and the spread of AI and predictive analytics into freight. A TMS that does these jobs well turns transportation from a cost you react to into one you manage.

## Where packaged TMS platforms limit you

Off-the-shelf TMS platforms are built to serve a broad market, which means they are strong on the common cases and rigid everywhere else. The friction shows up in a few predictable places.

- **Your logic does not fit their fields.** Routing rules, carrier-selection logic, and business constraints specific to your operation often cannot be expressed in the platform's configuration, so they end up living outside the system in spreadsheets and habit.
- **Integration is gated.** Connecting a packaged TMS to your ERP, your customers' systems, or a specific carrier can require paid connectors, professional services, or capabilities the vendor simply does not offer.
- **Pricing scales against you.** Many platforms charge per shipment, per user, or per module. As volume grows, so does the bill, with no way to change the architecture that drives it.
- **You wait on the vendor's roadmap.** When you need a new capability, you are in a queue behind every other customer, and the answer is often no.

None of that makes packaged TMS wrong. For a straightforward operation it can be the right buy. The problems appear when transportation is a core part of how you compete and the platform will not bend to how you actually run.

## Rating, routing, and load planning

The planning core is where a TMS earns or loses money, and it is often where custom software pays off most. Rating means pulling rates across carriers and modes and picking the best option under your real constraints, which are rarely just lowest cost. Service level, transit time, carrier capacity, and customer commitments all factor in, and the weighting is specific to your business.

Routing and load planning decide how orders become shipments: which orders consolidate onto a truck, how loads are built to use capacity well, and how routes are sequenced. Good optimization here directly reduces cost per unit shipped, and against a freight bill measured in millions, a few points of improvement is real money. Packaged systems offer generic optimization; a custom TMS lets you encode the rules that actually govern your network, including the exceptions your dispatchers currently handle from memory. When those rules are your advantage, building them into software is how you keep and scale that advantage. Our piece on [custom software as a competitive advantage](/blog/custom-software-for-competitive-advantage) covers why that proprietary logic is worth owning.

## Carrier integrations and EDI

A TMS is only as good as its connections to carriers, and this is where a lot of custom work concentrates. Tendering loads, receiving acceptances, getting tracking updates, and reconciling invoices all depend on data flowing between you and dozens of carriers, each with its own systems.

Much of that still runs on EDI, the structured message standard the freight industry has used for decades. Load tenders (EDI 204), status updates (EDI 214), and invoices (EDI 210) move as defined transaction sets, and onboarding a new carrier means mapping their EDI to your system. Newer carriers and platforms offer REST APIs, and a modern TMS usually has to handle both. Building this layer well, so a new carrier is a configuration rather than a project, is one of the strongest reasons companies go custom. Our overview of [EDI integration for supply chain](/blog/edi-integration-for-supply-chain) explains how those flows work, and our guide to [webhooks vs polling](/blog/webhooks-vs-polling) covers the real-time tracking side.

## Freight audit and settlement

The financial back end of transportation is where money quietly leaks, and the leak is measurable. Industry freight-audit data consistently finds that [roughly 3% to 8% of freight invoices contain billing errors](https://gingercontrol.com/blog/freight-invoice-audit-guide), most of them in accessorial charges and misapplied discounts, and companies that install rigorous audit routinely recover a similar share of total freight spend. On a $10 million freight budget, that is on the order of $300,000 to $800,000 sitting in incorrect invoices. Freight audit means checking each invoice against the contracted rate, the accessorials, and the actual service delivered, then flagging what is wrong before you pay it.

Settlement is the payment and accounting side: approving correct invoices, disputing incorrect ones, allocating costs to the right accounts, and feeding it all back to your ERP. Third-party freight audit and pay services typically take 15% to 25% of what they recover, so once your volume is large, an audit engine you own can pay for itself. Packaged systems handle standard cases, but audit rules are often where a company's specific contracts and accessorial logic live, and generic tools miss the nuances. A custom audit engine that knows your actual rate agreements catches errors a generic one waves through. To connect settlement cleanly to your books, see our [supply chain ERP integration guide](/blog/supply-chain-erp-integration).

## Deciding to build a custom TMS

Building a TMS is a serious investment, so the decision should be evidence-based rather than aspirational. Lean toward custom when transportation is central to how you compete, when your routing or audit logic is genuinely specific and packaged fields cannot hold it, when integration costs and per-shipment fees on a packaged platform are climbing past what a build would cost, or when you need to own the roadmap because the vendor will never prioritize what you need.

A rough test: total up what you spend today on per-shipment platform fees, paid connectors, professional-services change requests, and the freight dollars leaking through weak audit. When that annual figure starts to rival the cost of a build, the math has already tipped, because a build is a one-time investment plus maintenance while those platform costs recur and grow with volume. Lean toward buying when your operation is fairly standard, volume is modest, and a packaged TMS covers the essentials without heavy workarounds. Many companies also land in between: keep a packaged core for commodity functions and build custom software for the one or two areas that differentiate them. If you take on a custom build, do it in short cycles with a working demo each sprint, put measurable acceptance criteria in the contract, and own the source code and pipeline on delivery so the system is yours to evolve. Our [build vs buy software framework](/blog/build-vs-buy-software-decision) can structure the call.

If freight is core to your business and the packaged platform has become the thing you fight, it may be time to [start a project](/#contact) and scope what a tailored TMS would change. You can also see [what we build](/#capabilities) across trade and supply chain.
