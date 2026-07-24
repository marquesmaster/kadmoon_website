---
title: "Middleware and integration platforms: iPaaS vs custom"
description: "Integration middleware compared: what iPaaS platforms do well, where they hit limits, and when a custom integration layer is the better backbone."
category: "Integrations & APIs"
primaryKeyword: "integration middleware"
tags: ["ipaas", "integration platform", "middleware software", "system integration"]
takeaways:
  - "Routing integrations through a shared middleware layer beats direct connections by arithmetic: each system connects once to the hub, so adding a system is one new connection instead of many."
  - "iPaaS is genuinely fast for common, standard integrations, but it hits limits on pricing at scale, uncommon systems that need custom connectors anyway, and complex, stateful, exception-heavy logic."
  - "A custom integration layer gives you control and cost predictability with no per-task meter, at the cost of the build itself and the ongoing responsibility to maintain it."
  - "The crossover pattern is consistent: iPaaS is cheapest early and can become the most expensive at scale, while custom is expensive early and cheapest at scale."
  - "Evaluate each integration on three axes, how standard the systems are, how complex the logic is, and how much volume flows through, and judge cost over three years rather than month one."
faqs:
  - q: "What is the difference between iPaaS and a custom integration layer?"
    a: "iPaaS is a hosted platform with pre-built connectors, a visual flow builder, and managed infrastructure that you rent, while a custom integration layer is code you own, typically an API-driven service with its own queues, transformation logic, and monitoring. iPaaS is faster to a first integration; custom is built for exactly your systems and rules, with no per-task meter and full ownership."
  - q: "When should you use iPaaS instead of building custom integration?"
    a: "iPaaS is the right call when your integrations are mostly between popular SaaS tools, the logic is straightforward, volume is modest, and you want speed over control. It is a strong fit for a lean team without integration engineers that needs to connect standard products quickly. Build custom when integrations are core to how the business runs, you connect legacy or bespoke systems, the logic is genuinely complex, or volume is high enough that per-task pricing hurts."
  - q: "Does iPaaS get expensive at scale?"
    a: "It can. iPaaS is usually priced per connector, per task, or per volume, so a high-throughput integration can get expensive fast, with costs that grow as your business grows. The pattern most teams miss is that iPaaS is cheapest early and can become the most expensive option at scale, while a custom layer is expensive early and cheapest at scale. Where the lines cross depends on your volume, the number of unusual systems, and how complex your logic is."
  - q: "Can you combine iPaaS and custom integration?"
    a: "Yes, and it is common and sensible. Use iPaaS for the simple, standard flows and build custom for the few integrations that are strategic, high-volume, or too complex for a visual builder. Many companies start on iPaaS to move fast, then migrate the flows that grew expensive or outgrew the visual builder onto a custom layer they own, while leaving trivial connections in place, as long as each move is deliberate."
---

Every growing company eventually runs a dozen systems that need to talk to each other: an ERP, a CRM, a warehouse system, a billing platform, a data warehouse, and a handful of SaaS tools. For large enterprises the count is far higher. MuleSoft's [2024 Connectivity Benchmark](https://www.salesforce.com/ap/blog/the-2024-connectivity-report-key-trends-shaping-apac-digital-landscape/), a survey of 1,050 IT leaders, found the average organization now runs more than 900 applications and has integrated only 28 percent of them. Integration middleware is the layer that connects them so data flows without someone re-keying it. The recurring decision is whether to buy an integration platform (iPaaS) or build a custom integration layer. Both are legitimate. The wrong choice shows up as either a runaway subscription bill or a maintenance burden you did not budget for.

## What middleware does

Middleware sits between your systems and moves data across them. Instead of wiring every application directly to every other one (a tangle that gets exponentially worse as you add systems), you route integrations through a shared layer that handles the common jobs: connecting to each system, transforming data from one format to another, orchestrating multi-step flows, and retrying when something fails.

The core problems middleware solves are always the same. Systems speak different formats and protocols. They go down and come back. Data needs to be mapped, validated, and deduplicated. Failures need to be caught, logged, and retried without losing records. Whether you buy or build, you are paying for these capabilities one way or another. This is the practical side of [what system integration is](/blog/what-is-system-integration) and why it is harder than it looks. The 72 percent of applications sitting unintegrated in the average enterprise is the direct cost of skipping this work.

The reason a shared layer beats direct connections is arithmetic. Wire five systems directly to each other and you can end up maintaining ten separate connections; add a sixth system and the count keeps climbing. Route everything through a middleware layer and each system connects once, to the hub, so adding a system is one new connection instead of many. That is the whole architectural argument, and it holds whether the hub is a product you rent or a service you build. What differs between iPaaS and custom is who builds and owns that hub, and what it costs you over time.

## iPaaS tools and their limits

Integration platform as a service (iPaaS) products give you a hosted environment with pre-built connectors, a visual flow builder, and managed infrastructure. Demand for them is real and growing fast: Gartner's market share analysis put the [iPaaS market at about $8.5 billion in 2024](https://www.gartner.com/en/documents/6747734), up 23.4 percent year over year, and forecast it to exceed $17 billion by 2028. For common, well-trodden integrations (sync contacts from a CRM to a marketing tool, push orders from an e-commerce platform to accounting) they are genuinely fast. A citizen integrator can wire up a flow in an afternoon without writing code.

The limits show up in three places. First, pricing at scale: iPaaS is usually priced per connector, per task, or per volume, and a high-throughput integration can get expensive fast, with costs that grow as your business grows. That 23 percent annual market growth is partly your bill rising with it. Second, the long tail: pre-built connectors cover popular systems, but your custom internal app, your legacy ERP, or your industry-specific tool often needs a custom connector anyway, which erodes the main advantage. Third, complex logic: visual builders are pleasant for simple mappings and awkward for the conditional, stateful, exception-heavy logic that real business processes contain. When you fight the tool to express your logic, you have found its ceiling.

## Custom integration layers

A custom integration layer is code you own that connects your systems directly, typically an API-driven service with its own queues, transformation logic, and monitoring. You are not buying connectors; you are building exactly the ones you need, shaped to your data and your rules.

In practice that means real infrastructure primitives you configure directly: a message queue that buffers spikes so a downstream system going offline never loses records, idempotency keys so a retried order does not post twice, and a dead-letter queue that parks the handful of records that fail validation for a human to inspect instead of silently dropping them. Those are the exact behaviors an iPaaS bundles and meters; in a custom layer you own them outright.

In code those primitives are small but load-bearing, an idempotency check that drops duplicate deliveries and a dead-letter path for records that fail validation:

```js
async function handleOrder(order) {
  if (await seen(order.idempotencyKey)) return; // retried delivery, skip
  try {
    await validate(order);
    await postToErp(order);
    await markSeen(order.idempotencyKey);
  } catch (err) {
    await deadLetter.push({ order, error: err.message }); // a human inspects
  }
}
```

The advantages are control and cost predictability. There is no per-task meter, so high volume does not translate into a bigger monthly invoice. The logic can be as complex as your business actually is, expressed in real code with real tests. And because you own the source, CI/CD, and runbooks, you are not dependent on a vendor's roadmap or subject to their price increases. The cost is the build itself and the ongoing responsibility to maintain it, which is a real commitment, not a footnote. Approaches like [API-first development](/blog/api-first-development) and patterns from an [enterprise API strategy](/blog/enterprise-api-strategy) make a custom layer far more durable.

## Cost and flexibility trade-offs

The honest comparison looks like this:

| | iPaaS | Custom layer |
| --- | --- | --- |
| Time to first integration | Fast | Slower |
| Cost at low volume | Low | Higher (build cost) |
| Cost at high volume | Grows with usage | Flat (you own it) |
| Complex/custom logic | Constrained | Unconstrained |
| Uncommon systems | Needs custom connectors anyway | Built for exactly your systems |
| Ownership and lock-in | Vendor-dependent | You own it |

The pattern most teams miss: iPaaS is cheapest early and can become the most expensive option at scale, while custom is expensive early and cheapest at scale. Where the lines cross depends on your volume, the number of unusual systems you run, and how complex your logic is. With the iPaaS market compounding at more than 20 percent a year, per-task pricing that felt trivial at launch has a way of becoming a line item finance starts asking about.

## When to use each approach

iPaaS is the right call when your integrations are mostly between popular SaaS tools, the logic is straightforward, volume is modest, and you want speed over control. It is a strong fit for a lean team without integration engineers who need to connect standard products quickly.

A custom integration layer is the right call when integrations are core to how your business runs, you connect legacy or bespoke systems, the logic is genuinely complex, volume is high enough that per-task pricing hurts, or you need full control and ownership. Supply-chain-heavy operations frequently land here, because the mix of ERP, WMS, TMS, and [EDI](/blog/edi-integration-for-supply-chain) rarely fits neatly into off-the-shelf connectors.

A hybrid is common and sensible: use iPaaS for the simple, standard flows and build custom for the few integrations that are strategic, high-volume, or too complex for a visual builder. Many companies start on iPaaS to move fast, then migrate the flows that grew expensive or outgrew the visual builder onto a custom layer they own, while leaving the trivial connections where they are. That evolution is healthy as long as you make each move deliberately rather than letting the iPaaS bill grow unexamined.

## Choosing your integration backbone

Start by listing your integrations and scoring each on three axes: how standard the systems are, how complex the logic is, and how much volume flows through. Standard, simple, low-volume flows point to iPaaS. Bespoke, complex, high-volume flows point to custom. Then look at the total picture over three years, not month one, because that is where the crossover in cost actually decides the answer.

The backbone you pick shapes how easily your business can change later, so it is worth getting right rather than defaulting to whatever is fastest this quarter. If you want help mapping your systems and deciding where iPaaS ends and custom begins, [get a technical proposal](/#contact) or review [how to choose a software partner](/#how-to-choose).
