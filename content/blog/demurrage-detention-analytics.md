---
title: "Demurrage and detention: putting a number on the cost of time at the port"
description: "Demurrage and detention charges feel like unavoidable noise, so they get paid and forgotten. Analyzed by cause, they turn out to be concentrated, predictable, and largely preventable."
category: "Logistics"
primaryKeyword: "demurrage and detention analytics"
tags: ["demurrage and detention", "detention charges", "logistics analytics", "port costs", "landed cost"]
takeaways:
  - "Demurrage and detention are often treated as unavoidable, so the charges are paid without being analyzed."
  - "Analyzed by cause, these charges are usually concentrated in a few lanes, parties, and failure modes."
  - "Most of the cost traces to timing failures that are visible in advance if the right events are tracked."
  - "Attributing charges to a cause and a party is what makes them preventable rather than just payable."
  - "Demurrage and detention belong in landed cost, because they are a real per-shipment cost."
faqs:
  - q: "What is the difference between demurrage and detention?"
    a: "In broad terms, demurrage is charged for cargo or a container that stays at the terminal beyond the allowed free time, and detention is charged for keeping the carrier's equipment, the container, outside the terminal beyond its free time, for example while it waits to be unloaded at your facility. The exact definitions and free-time windows vary by carrier and port, but the common thread is the same: both are charges for time, and time is something you can measure and manage if you track the events that consume it."
  - q: "Why analyze these charges if they feel unavoidable?"
    a: "Because the feeling that they are unavoidable comes from seeing them as scattered, one-off costs. When you attribute each charge to a cause and a party, the scatter usually resolves into a few repeating patterns: particular lanes, a chassis shortage, a broker delay, a facility that unloads slowly. Those patterns are addressable. The charges feel like noise only until they are grouped by cause, at which point most of the cost turns out to come from a small number of preventable failures."
  - q: "How do these charges relate to landed cost?"
    a: "They are a real cost of bringing goods in, so they belong in landed cost alongside freight and duty. Left out, they understate the true cost of a lane or a supplier, and they hide the fact that one routing is more expensive than another once port time is counted. Including demurrage and detention in landed cost, allocated to the shipment and the unit, makes the full cost of a sourcing or routing decision visible, which is the point of measuring landed cost at all."
---

Demurrage and detention charges arrive looking like weather: unpredictable, external, and not worth arguing with. A fee appears on a port or carrier statement, it gets coded to freight, and it is paid. Multiply that across a year of shipments and it becomes a meaningful number that nobody owns, because everyone treats it as the cost of doing business. The charges feel unavoidable, and that feeling survives only as long as they are left unanalyzed.

## Charges for time

Both charges are, at root, charges for time. Demurrage covers cargo or a container sitting at the terminal past its free time; detention covers the carrier's equipment held outside the terminal past its free time, for instance while a container waits to be unpacked at your dock. The windows and definitions differ by carrier and port, but the shared idea is that a clock starts and you are billed when it runs out. Time is measurable, and so are the events that consume it, which is what makes these charges analyzable rather than simply payable.

## The scatter resolves into patterns

Seen one at a time, the charges look random. Grouped by cause and party, they almost never are. Attribute each charge to what drove it, a chassis shortage, a late document, a slow-unloading facility, a lane with chronically tight free time, and the cost usually concentrates into a few repeating failure modes. The same lane, the same party, the same mistake, over and over. That concentration is the good news: a cost spread evenly across hundreds of shipments is hard to attack, but a cost coming from a handful of causes is a short list of things to fix.

## Most of it is a timing failure you could see coming

A large share of demurrage and detention traces to timing: a document that was not ready when the vessel arrived, a pickup that was not arranged in time, a container that sat because nothing downstream was ready to receive it. These are failures that are visible in advance if the right events are tracked, the [milestones](/blog/shipment-visibility-software) that show a document pending, a clock about to start, free time about to expire. The charge is the symptom; the missed event is the cause, and the cause is usually knowable before the money is lost.

## Attribution is what makes it preventable

The difference between a cost that is paid and a cost that is prevented is attribution. A charge coded generically to freight teaches you nothing. A charge attributed to a cause and a party tells you who to call and what to change: a free-time term to renegotiate, a broker handoff to tighten, a facility to schedule differently. This requires joining port and carrier charges to the [shipment and the event history](/docs/data-integration) that explains them, so each charge carries its reason. That join is what turns a statement of fees into a list of actions.

## It belongs in landed cost

Because demurrage and detention are a real cost of bringing goods in, they belong in [landed cost](/blog/landed-cost-calculation) with freight and duty, allocated to the shipment and the unit. Left out, they understate what a lane or a supplier actually costs and hide the fact that one routing is more expensive once port time is counted. Folded in, they make the full cost of a sourcing or routing decision visible, which is the entire reason to measure landed cost. The same [analytics](/platform) that decompose freight and model duty can carry these charges too, so the cost of time at the port stops being invisible.

If demurrage and detention are a line you pay without reading, grouping them by cause is where the recovery starts. [Tell us where your charges are landing](/contact), or see how the [platform](/platform) models port and logistics cost.
