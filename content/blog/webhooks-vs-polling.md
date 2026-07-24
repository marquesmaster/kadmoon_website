---
title: "Webhooks vs polling: choosing how systems talk"
description: "Webhooks vs polling explained for real integrations: how each works, the trade-offs in latency and load, retries and idempotency, security, and when to use which."
category: "Integrations & APIs"
primaryKeyword: "webhooks vs polling"
tags: ["webhook integration", "api polling", "event-driven integration"]
takeaways:
  - "Polling is the pull model your system controls on a schedule, while webhooks are the push model where the source calls your always-on endpoint close to the moment an event happens."
  - "Webhooks win on latency and load for infrequent events, but polling is naturally more resilient because the next run catches up after a failure."
  - "Reliability contracts vary sharply: Stripe retries delivery for up to three days, while GitHub expects a 2xx within 10 seconds and does not redeliver, so read the provider docs rather than assume."
  - "Any system taking webhooks must plan for retries, out-of-order events, and duplicates, which makes idempotency with a unique event ID non-negotiable."
  - "The strongest integrations combine both: use webhooks for speed and a periodic reconciliation poll as a safety net, or use webhook-triggered pull to fetch the authoritative current state."
faqs:
  - q: "What is the difference between webhooks and polling?"
    a: "Polling is a pull model where your system calls an API on a schedule and asks whether anything changed, which is simple to build and keeps you in control. Webhooks are a push model where you register a URL and the source sends an HTTP request the moment an event occurs, giving you near real-time updates but requiring an always-available endpoint. Polling trades latency and efficiency for simplicity and robustness, while webhooks trade simplicity for speed and lower load."
  - q: "When should I use webhooks instead of polling?"
    a: "Reach for webhooks when you need low latency because a user is waiting or a downstream action must fire promptly, when events are infrequent so polling would mostly waste requests, or when the source offers reliable, signed webhooks with retries. Reach for polling when the source has no webhooks, when you need guaranteed completeness and simple recovery, when you are pulling large batches on a schedule anyway, or when you cannot expose a reliable public endpoint. Many third-party platforms support both."
  - q: "How do you handle a missed webhook delivery?"
    a: "You cannot assume every sender retries or that retries succeed forever, so build a way to reconcile, such as a periodic catch-up poll or an API you can query to fetch anything missed. On a source like GitHub that will not redeliver, that reconciliation poll is the only thing standing between you and silent data loss. Combining webhooks for speed with a low-frequency reconciliation poll is the common robust pattern."
  - q: "Why is idempotency important for webhooks?"
    a: "Because retries mean you will sometimes receive the same event twice, and if processing it twice charges a card twice or creates two records, you have a serious bug. Give each event a unique ID, record the ones you have already processed, and make handling a repeat a safe no-op. Idempotency is not optional in any system that takes webhooks seriously."
---

When two systems need to stay in sync, one of them has to find out when something changed. There are two ways to do that. The receiver can keep asking (polling), or the source can announce it (webhooks). The choice sounds like a small technical detail, but it shapes latency, infrastructure cost, and reliability across an integration. Getting it right saves you from either hammering an API for nothing or missing events you needed. Here is how each works and when to reach for it.

## How webhooks and polling work

Polling is the pull model. Your system calls an API on a schedule and asks, in effect, "anything new since last time?" Every minute, or every five, or every hour, you make a request and process whatever came back. It is simple to build and easy to reason about, because your system is in control of when work happens.

Webhooks are the push model. You register a URL with the source system, and when an event occurs (an order is paid, a shipment moves, a record changes), that system sends an HTTP request to your URL with the details. You are no longer asking. You are being told, close to the moment it happens. The cost is that you now have to run an endpoint that is always available to receive those calls, which is a different operational shape than a scheduled job. The event vocabulary can be large: GitHub alone can send [more than 70 distinct webhook event types](https://docs.github.com/en/webhooks-and-events/webhooks/webhook-events-and-payloads), each with its own payload, so part of the work is deciding which events you actually care about.

## Latency, load, and reliability

The trade-offs fall out directly from pull versus push.

- **Latency.** Webhooks win. You hear about a change within seconds. Polling latency is bounded by your interval, so a five-minute poll means up to five minutes of delay. Shrinking the interval reduces the delay but raises the cost.
- **Load.** Polling is wasteful when changes are rare. If you poll every minute and something changes twice a day, the vast majority of your requests return nothing. Webhooks only generate traffic when there is something to report, which is far more efficient for infrequent events. When changes are constant, the gap narrows.
- **Reliability.** Polling is naturally resilient. If your job fails once, the next run catches up, because you are asking for everything since the last checkpoint. Webhooks are more fragile in this respect: if your endpoint is down when the event fires, that delivery can be lost unless the sender retries. This is the single biggest thing to design for.

How much the sender protects you here varies, and you should read the provider's docs rather than assume. Stripe, for example, [retries delivery for up to three days](https://docs.stripe.com/webhooks/best-practices) with exponential backoff in live mode. GitHub takes the opposite stance: it expects a 2xx response within [10 seconds and does not automatically redeliver](https://docs.github.com/en/webhooks/using-webhooks/handling-failed-webhook-deliveries) a failed delivery, leaving recovery to you. Two major platforms, two very different reliability contracts, and your architecture has to account for whichever one you are integrating with.

Neither model is strictly better. Polling trades latency and efficiency for simplicity and robustness. Webhooks trade simplicity for speed and lower load.

## Retries, ordering, and idempotency

Event-driven integration only works if you plan for the messy realities of the network. Three of them matter most.

**Retries.** Networks fail, and your endpoint will occasionally be unavailable. A well-behaved webhook sender retries with backoff, but as the GitHub example shows, you cannot assume every sender does, and you cannot assume retries succeed forever. Build a way to reconcile: a periodic catch-up poll, or an API you can query to fetch anything you might have missed. Belt and suspenders beats hope.

**Ordering.** Events may not arrive in the order they happened. A "shipment delivered" message can land before "shipment out for delivery" if one retry took longer than another. Do not assume sequence. Include a timestamp or version on each event and let the latest state win, rather than blindly applying events in arrival order.

**Idempotency.** Because of retries, you will sometimes receive the same event twice. If processing it twice charges a card twice or creates two records, you have a serious bug. Give each event a unique ID, record the ones you have processed, and make handling an event you have already seen a safe no-op. Idempotency is not optional in any system that takes webhooks seriously.

## Security for webhooks

A webhook endpoint is a public URL that anyone on the internet can send data to, so you have to verify that a request genuinely came from the source you trust. Polling does not have this problem, because your system initiates the call and authenticates outbound.

Standard protections for incoming webhooks:

- **Signature verification.** The sender signs each payload with a shared secret, and you verify the signature before trusting the body. This is the primary defense, and most reputable providers support it.
- **HTTPS only.** Never accept webhook traffic over plain HTTP. The payload often contains business data.
- **Replay protection.** Combine the signature with a timestamp and reject requests that are too old, so a captured request cannot be resent later.
- **Fast acknowledgment.** Accept the request, return a 200 quickly, and do the real work asynchronously. GitHub's 10-second cutoff is typical: senders time out, and slow processing looks like a failure and triggers retries or a dropped delivery.

Treat any unsigned or unverifiable webhook as untrusted input, because that is exactly what it is.

## When to use each

A practical decision guide:

- **Reach for webhooks** when you need low latency (a user is waiting, or a downstream action must fire promptly), when events are relatively infrequent so polling would mostly waste requests, or when the source system offers reliable, signed webhooks with retries.
- **Reach for polling** when the source does not offer webhooks, when you need guaranteed completeness and simple recovery, when you are pulling large batches on a schedule anyway, or when you cannot expose a reliable public endpoint.

Company size and control also matter. If you own both systems, you have more freedom. If you are integrating with a third-party platform, you use whatever it supports, and many support both.

## Hybrid patterns in practice

The strongest integrations usually combine the two rather than picking a side. A common and robust pattern: use webhooks for speed, and use a periodic reconciliation poll as a safety net. Webhooks keep your data fresh in near real time, and a low-frequency poll (say, hourly or nightly) sweeps up anything a failed delivery missed. On a source like GitHub that will not redeliver, that reconciliation poll is not optional, it is the only thing standing between you and silent data loss.

Another pattern is webhook-triggered pull. The webhook does not carry the full payload; it just notifies you that something changed, and your system then calls the API to fetch the authoritative current state. This sidesteps ordering problems entirely, because you always read the latest truth rather than replaying a stream of partial events.

These patterns show up constantly in real work, from syncing an ERP to keeping a supply chain platform current. If you are designing an integration and want it to hold up under load and failure, our broader [ERP integration guide](/blog/erp-integration-guide) and our primer on [what system integration is](/blog/what-is-system-integration) go further into the architecture. When you are ready to build one that does not drop events, you can [start a project](/#contact) or see [what we build](/#capabilities).
