---
title: "Cargo theft and shrinkage: measuring the loss before you can stop it"
description: "Loss in a cross-border supply chain is usually discovered at count time, long after and far from where it happened. Shrinkage analytics attributes loss to where and when it occurred, which is the only way to tell theft from error and target a response."
category: "Security"
primaryKeyword: "cargo shrinkage analytics"
tags: ["cargo theft", "shrinkage", "supply chain security", "inventory analytics", "loss"]
takeaways:
  - "Loss is usually found at count time, which is the wrong place and time to understand it."
  - "Shrinkage analytics attributes loss to the stage and location where it actually occurred."
  - "Attribution is what separates theft from counting error, damage, and paperwork mistakes."
  - "Loss in cross-border flow is spread across many custody handoffs, which hides where it happens."
  - "You cannot target a security response until you know which handoff is losing the goods."
faqs:
  - q: "Why is cargo loss so hard to understand?"
    a: "Because it is almost always discovered far from where it happened. A shortage shows up at a physical count or a receipt check, which is the end of a long chain of custody handoffs, and the count tells you only that goods are missing, not where along the chain they went missing or why. The loss could be theft at a port, damage in transit, a miscount at origin, or a paperwork error, and the count looks identical in every case. Understanding loss means reconstructing where in the chain it occurred, which the count on its own cannot do."
  - q: "How does shrinkage analytics separate theft from error?"
    a: "By attributing each discrepancy to a stage and a pattern. Theft, counting error, damage, and documentation mistakes leave different fingerprints when loss is analyzed across many shipments: theft tends to concentrate at particular handoffs or on particular high-value goods, counting errors scatter and often reverse on recount, damage correlates with handling and mode, paperwork errors cluster around specific parties or documents. No single discrepancy reveals its cause, but the pattern across many does, which is why attribution across the flow is what turns a vague shrinkage number into a diagnosis."
  - q: "What data does shrinkage analysis need?"
    a: "It needs the quantities expected and received at each custody handoff along the chain, from origin through transit, port, and receipt, joined so a shortage can be located to the stage where expected and actual first diverge. That means milestone and count data from carriers, ports, brokers, and your own receiving, related to the shipment and the goods. The handoffs are where the data usually breaks, because each party holds its own records and they are rarely connected, which is exactly why loss hides between them and why joining the handoffs is the core of the analysis."
---

Cargo loss is almost always discovered at the worst possible moment to understand it: the count. A physical inventory or a receipt check turns up a shortage, and at that point all you know is that goods that should be there are not. Where they went missing, when, and why are all invisible, because the count sits at the end of a long chain of custody handoffs and reports only the net result. The loss could be theft, damage, a miscount at origin, or a paperwork error, and every one of those looks exactly the same from the count. Shrinkage analytics exists to answer the questions the count cannot.

## The count is the wrong vantage point

A count is a comparison at a single point: what is here against what should be. It is essential, but it is blind to history. By the time goods are counted at receipt, they have passed through loading at origin, a carrier, a port, perhaps a [bonded or FTZ facility](/blog/bonded-ftz-inventory-analytics), and into your warehouse, and the shortage the count reveals could have entered at any of those stages. Treating the count as the place to understand loss is like reading the last page of a story and trying to explain the plot. The information needed to understand loss is distributed along the chain, not concentrated at its end.

## Attribution tells causes apart

The central move in shrinkage analytics is attribution: locating each discrepancy to the stage where expected and actual quantities first diverge. This matters because loss has several causes that demand entirely different responses, and they are indistinguishable at the count but distinguishable across the flow. Theft tends to concentrate at particular handoffs and on particular high-value goods. Counting errors scatter and often reverse on recount. Damage correlates with handling and mode. Paperwork errors cluster around specific parties and documents. No single shortage announces its cause, but the pattern across many, once attributed, does, which is how a shapeless shrinkage figure becomes a diagnosis you can act on.

## Loss hides in the handoffs

Cross-border flow is a sequence of custody handoffs, and loss hides precisely in the seams between them, because each party holds its own records and the records are rarely connected. Origin reports what it shipped, the carrier what it carried, the port what it handled, your dock what it received, and nobody holds the end-to-end picture that would show where a quantity dropped. That fragmentation is why loss is so often chalked up to the cost of doing business: not because it is unknowable, but because the data to locate it has never been joined. The longer and more fragmented the chain, the more places loss can hide and the more valuable the joined view becomes.

## You cannot target what you cannot locate

A security response is only as good as its aim, and aim requires knowing which handoff is losing the goods. Spending on controls spread evenly across the whole chain is the security equivalent of managing every SKU the same way: effort goes where it is easy rather than where the loss is. Once loss is attributed to stages and patterns, the response can be concentrated, a specific handoff tightened, a specific party addressed, a specific high-value flow protected, which is both cheaper and more effective than blanket measures. This is the same logic as [exception management](/blog/exception-management-trade): find where the problem actually is, then act there.

## Analytics first, then the cameras

Physical security, including [port and yard vision systems](/blog/computer-vision-port-security), has its place, but it is far more effective pointed by analytics than deployed on instinct. Knowing which handoffs and which goods lose the most tells you where surveillance and controls will repay their cost, rather than installing them everywhere and hoping. Shrinkage analytics comes first because it tells you where the loss is; the physical response comes second, aimed by what the analysis found. Built on [custody data integrated](/docs/data-integration) across the chain and delivered in [your own tenant](/blog/analytics-in-your-own-tenant), the loss picture is yours to watch as flows and parties change.

If your cargo loss is a number discovered at count time with no explanation attached, attributing it across the chain is where a real response begins. [Tell us where your goods change hands](/contact), or see how the [platform](/platform) locates supply-chain loss.
