---
title: "Anomaly detection in Power BI and Azure ML"
description: "How anomaly detection works in Power BI natively, when to move to custom Azure ML models, and how Microsoft Fabric supplies the data foundation underneath."
category: "Analytics & AI"
primaryKeyword: "anomaly detection power bi"
tags: ["power bi anomaly detection", "azure machine learning", "microsoft fabric", "analytics"]
takeaways:
  - "Power BI has anomaly detection built into line charts, so business users can flag unexpected deviations and see explanations without writing any code."
  - "Native detection covers a large share of real needs at no extra tooling cost, and you only move to Azure Machine Learning when normal depends on many interacting factors, such as fraud."
  - "Precision matters more than raw sensitivity, because when every alert turns out to be nothing people stop trusting the report and the real problem slips through."
  - "Microsoft Fabric supplies the data foundation, so detection runs on modeled, refreshed data rather than a stale extract nobody trusts."
  - "Data alerts in Power BI and Fabric turn a flagged number into a message that reaches the right person, so a deviation becomes an action instead of a log entry."
faqs:
  - q: "How does anomaly detection work in Power BI natively?"
    a: "Power BI has anomaly detection built into line charts. You add it from the Analytics pane on a time series visual, and Power BI learns the expected range from history, shades a band around it, and marks points that fall outside. It also surfaces possible explanations from other fields in your model. It runs with no code and no separate service, which makes it the right first stop for most business reporting."
  - q: "When should I use a custom Azure Machine Learning model instead of Power BI's built-in detection?"
    a: "Use Power BI's built-in detection for single time series where a business user needs to spot a deviation and see why. Move to Azure Machine Learning when normal depends on many interacting factors at once, which is common in fraud and payment abuse, when you need to score events as they arrive rather than in a report, or when you need a model you can train, evaluate, and version. Azure ML is more powerful and more demanding, so reach for it only when the problem earns it."
  - q: "How do alerts work in Power BI and Microsoft Fabric?"
    a: "You set a data alert on a card or KPI visual (or a Reflex/Activator rule in Fabric) that watches a value against a threshold. When the value crosses it, Power BI sends a notification and can trigger a Power Automate flow to post to Teams, email an owner, or open a ticket. The point is to route a flagged number to a person who can act, so an anomaly becomes a response rather than something nobody sees until the next review."
---

Most operational problems show up in the data before anyone notices them in the business. A stuck refresh, a supplier quietly shipping late, a sudden drop in signups, a charge that does not match a customer's history: each one appears as a number that does not fit the pattern. Anomaly detection is the practice of catching those numbers automatically, early enough to act. Done well it turns a fire drill into a routine alert. Done badly it becomes noise everyone ignores.

The money at stake is not abstract. US consumers reported losing more than [$12.5 billion to fraud in 2024, a 25 percent jump over 2023](https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024), according to the FTC's Consumer Sentinel data. On the enterprise side, IBM put the [global average cost of a data breach at $4.88 million in 2024](https://newsroom.ibm.com/2024-07-30-ibm-report-escalating-data-breach-disruption-pushes-costs-to-new-highs), up 10 percent year over year, with the US average at $9.36 million. Catching the deviation early is what separates a caught attempt from a headline. For most teams, the good news is that the first layer of this now lives inside tools they already own.

## Anomaly detection built into Power BI

Power BI has anomaly detection built into line charts, and it needs no code. On a time series visual you open the Analytics pane, turn on Find anomalies, and Power BI learns the expected range from history, shades a band around it, and marks the points that fall outside. It goes one step further and offers possible explanations by testing other fields in your model against the deviation, so a spike in returns might point to a single product line or region.

This is the right first stop for most business reporting. A finance lead watching monthly spend, an ops manager tracking shipment dwell times, a sales team watching pipeline: each can see when a number breaks its own pattern and get a plausible reason, all inside a report they already read. It costs nothing beyond the license you have, and a business user can set it up without waiting on an engineer.

The limits are worth stating plainly. Native detection works on a single time series at a time, it looks backward over the series it is drawing, and it does not learn from feedback or run on live events. For a large share of real needs that is enough. When it is not, the next layer is where Azure Machine Learning comes in. This pairs well with the visuals covered in [business intelligence dashboards](/blog/business-intelligence-dashboards), where the anomaly band sits alongside the metrics people already track.

## When to move to Azure Machine Learning

Some problems have a definition of normal that no single line chart can hold. Fraud is the classic case: whether a transaction is suspicious depends on the amount, the location, the time, the device, the customer's history, and how those factors combine. This is high-dimensional, and it is exactly where custom models earn their place.

Azure Machine Learning lets you train, evaluate, and version a model against that kind of data, then deploy it as an endpoint your applications or pipelines can call. You can score events as they arrive rather than waiting for a report to refresh, and you can retrain as patterns shift. The tradeoff is real work: you need good training data, someone who understands why the model fires, and ongoing evaluation. Do not reach for a custom model before you have earned it. The pattern here matches [predictive analytics for supply chain](/blog/predictive-analytics-for-supply-chain) and [demand forecasting software](/blog/demand-forecasting-software), where the simplest method that answers the question is usually the right one.

A practical middle path exists too. You can run an Azure ML model on a schedule, write its scores back to your data layer, and surface those scores in Power BI next to the raw metric. Business users get the benefit of a custom model without leaving the report, and the model stays where it can be governed and retrained.

## Microsoft Fabric as the data foundation

Detection is only as good as the data underneath it. If the numbers feeding a report are stale, half-loaded, or defined three different ways across teams, an anomaly flag means nothing. This is the job Microsoft Fabric does. It gives you one place to land, model, and refresh data, with OneLake as the shared store that Power BI, notebooks, and Azure ML all read from.

Practically, Fabric means your anomaly detection runs on modeled data rather than a spreadsheet extract nobody trusts. A well-built [semantic model](/blog/power-bi-semantic-model-best-practices) sets the definitions of every measure once, so the value Power BI is watching for anomalies is the same value everyone agrees on. If you are new to how the pieces fit together, [what is Microsoft Fabric](/blog/what-is-microsoft-fabric) walks through the layers. Fabric also hosts the notebooks and pipelines that prepare features for an Azure ML model, so the data path from raw source to trained model to report stays in one governed environment.

## Reducing false positives

The fastest way to kill an anomaly system is to cry wolf. When every flag turns out to be nothing, people stop trusting the report, and then the real problem slips through. Precision matters more than raw sensitivity for anything a human has to review.

A few habits keep the noise down. Account for seasonality so a normal Monday spike does not read as an anomaly. Tune sensitivity per segment, since a large customer and a small one have different normal ranges. In Power BI you can dial the sensitivity setting up or down to control how aggressively it flags. For custom models, give reviewers a way to confirm or dismiss a flag and feed that decision back into training. The FTC found that the share of fraud reports involving an actual loss [rose from 27 percent in 2023 to 38 percent in 2024](https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024), so when more of what you flag is genuinely costly, a reviewer's time is too valuable to spend on false alarms.

## Alerts and human review

Detection is only half the system. An anomaly nobody routes or resolves is just a shaded point on a chart. Power BI data alerts watch a card or KPI value against a threshold and notify you when it crosses, and they can trigger a Power Automate flow to post in Teams, email an owner, or open a ticket. In Fabric, Activator (Reflex) does the same on streaming and event data, firing a rule the moment a condition is met.

For higher-stakes cases, build a review step rather than a raw firehose. A fraud analyst or ops lead needs to see the flagged item, the reason it fired, and a way to confirm or dismiss it, with that decision captured. Human review is not a failure of automation. It is what keeps automation accountable, and it matters most wherever a wrong automated action would itself cause harm. A wrongly cleared payment can be unrecoverable, which is exactly the kind of case that belongs in a reviewed queue rather than a fully automatic block.

## Where to start

Start with what you already own. Turn on anomaly detection in the Power BI reports your team reads every day, tune the sensitivity, and see how many of the flags are worth acting on. Get the data foundation right in Fabric so those flags run on numbers people trust. Only then, if a problem genuinely needs a custom model, bring in Azure Machine Learning for that specific case and surface its scores back in Power BI where people work.

This order keeps cost and complexity matched to the problem. Native detection on a governed semantic model handles most of what a business needs to catch, and the same discipline shows up in [Power BI KPIs for manufacturing](/blog/power-bi-kpis-for-manufacturing), where the metric that matters comes first and the tooling follows. If you want anomaly detection built into your Power BI and Fabric environment properly, [start a project](/#contact) with a scoped first use case.
