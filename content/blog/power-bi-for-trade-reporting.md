---
title: "Power BI for foreign-trade reporting: what it does, and what it needs underneath"
description: "Power BI is where trade teams open their reports, and it is excellent at that. What it does not know is what landed cost or duty exposure mean. For trade reporting, Power BI needs a governed trade model underneath it."
category: "Integrations"
primaryKeyword: "power bi trade reporting"
tags: ["power bi", "trade reporting", "landed cost", "trade analytics", "own tenant"]
takeaways:
  - "Power BI is a strong reporting layer, and trade teams are right to use it."
  - "It does not know trade semantics: landed cost, duty exposure, and OTIF are not built in."
  - "For trade, Power BI needs a governed trade model underneath, or every report reinvents the metrics."
  - "If you already run Power BI, the gap is the model, not the tool."
  - "It runs in your own tenant, so the reports and the data stay yours."
faqs:
  - q: "Is Power BI good for foreign-trade reporting?"
    a: "Yes, as the reporting layer. Power BI is strong at visualization, interactivity, and getting reports in front of the people who use them, and it is a sensible choice for a trade team, especially one already on Microsoft. What Power BI is not, on its own, is a trade model: it has no built-in notion of landed cost, duty exposure, or OTIF, and no connectors that understand a broker feed or an ACE filing. Power BI draws whatever it is given; for trade, the value and the difficulty are in giving it a governed trade model to draw from."
  - q: "We already use Power BI. Why do our trade reports still not agree?"
    a: "Almost always because the reports are each computing trade metrics their own way against raw data, with no shared model underneath. Power BI will happily let two reports define landed cost differently, and they will, which is why they disagree in the meeting. The fix is not a better Power BI setup; it is a governed trade model beneath it, where landed cost, duty, and OTIF are each defined once and every report draws from that definition. You keep Power BI; what changes is what feeds it."
  - q: "Does using Power BI mean our trade data leaves our environment?"
    a: "No. Power BI runs in your own Microsoft tenant, so the reports and the data behind them stay in your environment under your own controls. The analytics is built there and handed over to you; your team signs in to Power BI in your tenant, not to a vendor's product. If you do not run Microsoft yet, a dedicated tenant can be provisioned for you, but the data is still isolated and yours."
---

Open a foreign-trade team's analytics and, more often than not, you are looking at Power BI. That is a reasonable place to be. Power BI is a strong reporting layer: good at visualization, good at interactivity, and good at getting reports in front of the people who actually make decisions. The trouble trade teams run into is not with Power BI as a tool. It is that Power BI, on its own, does not know the first thing about trade, and reporting that forgets this ends up with beautiful dashboards that quietly disagree with each other.

## Power BI is a reporting layer, not a trade model

It helps to be precise about what Power BI is. It is the layer where reports live and are explored. It is not a definition of what landed cost means, how freight is allocated to the unit, or what counts as on time for a cross-border shipment, and it has no connectors that understand a broker feed, an [EDI or ACE](/blog/edi-ace-integration-for-trade) message, or a carrier milestone out of the box. Power BI draws whatever it is handed. For [trade analytics](/platform), the value and the difficulty both sit in what you hand it, which is a governed model of your trade, not in the drawing.

## The metrics are where it goes wrong

Because Power BI imposes no trade semantics, it will cheerfully let every report define the trade metrics its own way. One report allocates freight to [landed cost](/blog/landed-cost-calculation) one way; another does it differently. One counts an order on time against the original date; another against a revised one. Both are valid Power BI reports, and they disagree, which is exactly the meeting where the numbers get argued about instead of acted on. This is not a Power BI misconfiguration. It is the predictable result of building reports without a shared model, and no amount of polishing the reports fixes it.

## What it needs underneath

The thing a trade team actually needs beneath Power BI is a [governed trade model](/blog/semantic-layer-trade-kpi): a layer where [landed cost](/blog/landed-cost-calculation), [duty exposure](/blog/effective-duty-rate), and [OTIF](/blog/otif-dwell-service-metrics) are each defined once, fed by connectors from your ERP, broker, carrier, EDI and ACE, and spreadsheets, with the [data quality](/blog/data-quality-trade-analytics) and [master data](/blog/trade-master-data) managed so items and suppliers are counted as the single things they are. With that model in place, Power BI becomes what it should be: the window onto a trade model that is already consistent, where every number traces back to the shipment or entry behind it. Without it, Power BI is a very capable tool pointed at an ungoverned pile of data.

## If you already run Power BI

Many trade operations already have Power BI and some reports in it, and the good news is that nothing has to be thrown away. The gap is the model, not the tool. Kadmoon adds the governed trade model underneath your existing Power BI, so your reports keep running but are now fed by a model built for trade rather than assembled report by report. That is the difference between owning the reporting tool and owning the [trade intelligence platform](/blog/what-is-a-trade-intelligence-platform) the tool was missing, and it is usually a faster path than people expect, because the hard part is the model, and the tool is already in place.

## It stays in your tenant

One more thing that matters for a trade operation handling sensitive commercial data: Power BI runs in [your own Microsoft tenant](/blog/analytics-in-your-own-tenant). The reports and the data behind them stay in your environment, under your own security and access controls, and the model is built there and handed over to you. Your team signs in to Power BI in your tenant, not to a vendor product, and if you do not run Microsoft yet, a dedicated tenant can be provisioned and managed for you. The reporting layer is Microsoft's; the trade model, the reports, and the data are yours.

If your trade reporting lives in Power BI but the numbers still do not agree, the missing piece is the trade model underneath. [Tell us what you report on](/contact), or see how the [platform](/platform) and the [Microsoft stack](/blog/trade-analytics-microsoft-stack) fit together.
