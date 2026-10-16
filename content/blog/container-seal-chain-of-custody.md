---
title: "Seals and chain of custody: turning tamper evidence into data"
description: "A container seal is a physical control that creates a stream of evidence nobody usually reads. Treating seal and custody events as data makes tampering, gaps, and weak handoffs visible across the whole flow rather than one container at a time."
category: "Security"
primaryKeyword: "container seal chain of custody"
tags: ["container seal", "chain of custody", "supply chain security", "tamper evidence", "trade analytics"]
takeaways:
  - "A seal is a physical control whose events form a data stream that is rarely analyzed."
  - "Chain of custody is only as strong as its weakest handoff, which analytics can locate."
  - "Seal numbers checked at each stage reveal tampering and gaps when the records are joined."
  - "Looking container by container misses patterns; looking across the flow finds the weak links."
  - "Seal and custody analytics complements theft and shrinkage analysis by showing how loss entered."
faqs:
  - q: "What does a container seal actually prove?"
    a: "A seal proves, at each point it is checked, that the container has not been opened since the seal was applied, provided the seal number matches what was recorded and the seal shows no sign of tampering. That makes the seal a control that generates evidence: a sequence of checks, each confirming or breaking the chain. The value is not in any single check but in the unbroken sequence from stuffing at origin to opening at destination. A seal that is applied and never systematically checked along the way proves very little, because nobody confirmed the chain held in between."
  - q: "Why analyze seal data instead of just checking seals?"
    a: "Because checking a seal confirms one container at one point, while analyzing seal data across many containers and handoffs reveals patterns no single check can. A seal mismatch on one box is an incident; a cluster of mismatches at one handoff, or on one lane, or with one party is a diagnosis. Joining the seal and custody records turns thousands of individual checks into a view of where the chain of custody is actually weak, which is what lets security effort go to the handoff that is failing rather than being spread evenly across a chain that is mostly sound."
  - q: "How does chain-of-custody analytics relate to cargo loss?"
    a: "They answer complementary questions. Shrinkage analytics finds where goods go missing; chain-of-custody analytics shows whether the container's integrity was intact when they did, which helps explain how the loss happened. A shortage in a container whose seal chain was unbroken points to a different cause, a miscount or an origin error, than a shortage in a container with a seal gap or mismatch, which points to access in transit. Reading the two together turns loss from a mystery into an explained event with a location and a likely mechanism."
---

A container seal is one of the oldest controls in trade: a tamper-evident device applied when the container is stuffed, meant to show whether anyone has opened it since. What is easy to overlook is that a seal does not just secure a container; it generates evidence. Every time the seal is checked, a seal number is recorded and compared, and those checks form a stream of data running the length of the journey. In most operations that stream is produced and never read, which means a control that could reveal exactly where custody is failing is instead confirming integrity one container at a time and telling no larger story.

## A seal is a control that produces evidence

The seal's job is to prove, at each check, that the container has not been opened since it was sealed, as long as the number matches the record and the seal is intact. That proof is only as good as the sequence of checks behind it: an unbroken chain from stuffing at origin to opening at destination is strong evidence, while a seal applied and then not checked until the end proves little, because no one confirmed the chain held in between. The checks are the evidence, and the evidence is data, a series of confirmations and, occasionally, breaks. Treated as data, that series can be analyzed; left as paperwork, it sits in files no one revisits unless something has already gone wrong.

## Custody is only as strong as its weakest handoff

Chain of custody is a sequence of handoffs, and like any chain it holds only as well as its weakest link. The weak link is rarely obvious from inside a single shipment, because most handoffs on most shipments are fine. It becomes visible only across many shipments, when seal mismatches, missing checks, or unexplained gaps cluster at a particular handoff, lane, or party. That clustering is the signal: not that one container had a problem, but that one point in the flow produces problems repeatedly. Locating the weak handoff is the entire point, because custody controls, like any security spend, work best aimed at the link that is actually failing rather than reinforced evenly along a chain that is mostly sound.

## Patterns live across the flow, not in one box

This is why container-by-container checking, necessary as it is, cannot substitute for analysis. A seal check answers a question about one container at one moment; it cannot see that the same handoff has produced a dozen mismatches this quarter, because each check is recorded and filed separately. Joining the seal and custody records across the flow is what converts thousands of isolated checks into a map of where the chain is weak. That map is the difference between knowing that tampering happens somewhere and knowing which handoff to address, which is the same leap from noise to diagnosis that [shrinkage attribution](/blog/cargo-theft-shrinkage-analytics) makes for loss.

## Reading seals and loss together

Seal and custody analytics is most powerful alongside loss analysis, because the two explain different halves of an incident. Shrinkage analytics finds where goods went missing; custody analytics shows whether the container's integrity was intact when they did. A shortage inside a container whose seal chain was unbroken points to a miscount or an origin error; a shortage in a container with a seal gap or a number mismatch points to access in transit. Read together, they turn a loss from an unexplained shortage into an event with a location and a likely mechanism, which is what a security or [customs](/blog/reasonable-care-audit-trail) response actually needs to act on.

## From paperwork to a monitored control

Making seals useful as data does not require new physical controls; it requires capturing the checks that already happen and [joining them](/docs/data-integration) across carriers, ports, and your own receiving so the chain can be read end to end. Once that is in place, seal integrity becomes a monitored control with exceptions surfaced automatically, a mismatch or a missing check flagged when it happens rather than discovered in a file months later. This is the analytics-first posture applied to physical security: the data the controls already produce, read across the flow, pointing the physical response. Built on the same [secure foundation](/docs/security) as the rest of the platform and delivered in your own tenant, the custody view is yours to monitor as lanes and parties change.

If your container seals are checked and filed but never read across the flow, the weak handoff they would reveal is going unseen. [Tell us how your custody is tracked](/contact), or see how the [platform](/platform) turns seal and custody events into a monitored control.
