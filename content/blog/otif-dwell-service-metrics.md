---
title: "OTIF and dwell time: measuring service, not just tracking shipments"
description: "Tracking where a shipment is tells you status. OTIF, transit variability, and dwell tell you whether service is good. The service metrics to measure and how to attribute the misses."
category: "Logistics"
primaryKeyword: "OTIF"
tags: ["OTIF", "dwell time", "transit time", "shipment visibility", "logistics analytics"]
takeaways:
  - "Tracking tells you where a shipment is; OTIF, transit variability, and dwell tell you whether service is actually good."
  - "OTIF (on-time in-full) is the core service metric, and it is only useful when each miss has an attributed cause."
  - "Transit-time variability matters more than the average, because planning is built on predictability, not the mean."
  - "Dwell and demurrage are cost signals hiding inside the visibility data."
  - "Measuring service means moving from status feeds to a planned-versus-actual model by lane and carrier."
faqs:
  - q: "What is OTIF?"
    a: "OTIF stands for on-time in-full: the share of orders or shipments delivered both on time and complete against the requirement. It is the core service metric because it captures the two things a customer actually experiences, timing and completeness, in one number. A delivery that is on time but short is not OTIF, and neither is a complete delivery that is late. Measured consistently and broken down by cause, OTIF tells you not just how reliable you are but where the reliability breaks."
  - q: "How is dwell time different from transit time?"
    a: "Transit time is how long a shipment takes from origin to destination; dwell time is how long cargo sits in one place, typically at a port or terminal, before it moves. They measure different problems. Long transit is usually a routing or mode question; long dwell is a congestion, documentation, or handling question, and it often carries demurrage charges. Watching both, with their variability, separates a slow lane from a lane that is fast except for a terminal that keeps containers sitting."
  - q: "Why is tracking not the same as measuring service?"
    a: "Tracking answers where is my shipment. Measuring service answers is my service good and where is it failing. A status feed can tell you a container is at a terminal without telling you that this lane dwells two days longer than it should, that OTIF on it has been slipping, or which carrier is driving the misses. Service measurement turns the stream of status events into planned-versus-actual metrics, attributed by lane, carrier, and cause, so the operation can act rather than just watch."
---

Most visibility projects stop at tracking: one screen that shows where every shipment is. That is useful, but it answers the wrong question. Knowing where a container is does not tell you whether your service is good or where it is failing. For that you need service metrics, OTIF, transit variability, and dwell, measured consistently and attributed to a cause. The difference is the difference between watching the operation and managing it.

## OTIF is the number, cause is the value

On-time in-full is the core service metric because it captures what the customer actually feels: delivered on time and complete. But the headline percentage is only the start. An OTIF of 92% that you cannot break down is a score; an OTIF of 92% where you know the 8% is driven by one carrier on two lanes is a plan. Attributing each miss to its cause, late at origin, held in customs, short-shipped, is what turns [OTIF](/docs/kpi-library) from a report card into something you can fix.

## Variability beats the average

Planning does not run on average transit time; it runs on predictability. A lane that averages ten days but swings between seven and sixteen is harder to plan around than one that reliably takes twelve. That is why transit-time variability, not just the mean, is the metric that matters for inventory and commitments. A visibility model that only shows the average hides the swings that actually cause the stockouts and the expedites.

## Dwell and demurrage are costs in disguise

Dwell time, how long cargo sits at a terminal before moving, looks like an operational detail, but it is a cost signal. Long dwell drives demurrage and detention charges, ties up containers, and delays everything downstream. Because dwell lives in the same milestone data as everything else, it is measurable by lane, terminal, and container type, which is how you tell a genuinely slow route from a fast route with a terminal problem. Left unmeasured, it shows up only as charges on an invoice.

## From status feeds to a planned-versus-actual model

The shift from tracking to measuring service is a shift in the data model. Status events from [carrier EDI and API](/blog/edi-ace-integration-for-trade) feeds become a planned-versus-actual record: what was supposed to happen at each milestone, what did, and the gap. On that model, OTIF, transit variability, dwell, and their causes are all just views, cut by lane and carrier. Without it, every service question is answered by someone logging into a portal and eyeballing it.

## Why it belongs with the rest of the analytics

Service does not live apart from cost and compliance; a late shipment is also a demurrage cost and sometimes a customs delay. Measuring service on the same governed model as [landed cost](/blog/landed-cost-calculation) and duty is what lets you see those connections, and it is the same [visibility analytics](/platform) an operation should already run. The feed is the input; the metrics are the output.

If your team can see where shipments are but cannot say whether service is improving, the gap is measurement, not tracking. [Tell us which carriers and lanes you run](/contact), or see how the [platform](/platform) models shipment visibility.
