---
title: "Drayage: the short, expensive move hiding inside your freight"
description: "Drayage is the brief truck move between port and warehouse, and it carries a stack of charges that rarely gets examined. Decomposed and attributed, it is a recurring cost with specific, fixable causes."
category: "Logistics"
primaryKeyword: "drayage cost analytics"
tags: ["drayage", "first mile", "freight cost", "logistics analytics", "chassis"]
takeaways:
  - "Drayage is the short move between port and facility, but it carries a surprisingly large and layered cost."
  - "Chassis fees, waiting time, and accessorials stack on top of the base move and often go unexamined."
  - "Much of the cost tracks to timing and congestion, which are visible and partly controllable."
  - "Drayage is usually billed separately from ocean freight, so it escapes freight analysis entirely."
  - "Decomposing drayage and attributing its charges is what turns it from noise into a managed cost."
faqs:
  - q: "What is drayage?"
    a: "Drayage is the short-haul trucking move that carries a container between the port or rail terminal and a nearby facility, your warehouse, a deconsolidation point, or a rail ramp. It is a small distance compared with the ocean voyage, which is exactly why it is underestimated: it looks like a trivial last step. But drayage carries its own layered cost, the base truck move plus chassis fees, waiting time, and a range of accessorials, and because it is brief and local it often escapes the scrutiny applied to the long, expensive ocean leg, even though per mile it is one of the costliest parts of the journey."
  - q: "Why is drayage so often overlooked?"
    a: "Two reasons. First, it is short, so it reads as a minor final step next to the ocean voyage, and attention follows distance rather than cost. Second, it is usually billed separately from ocean freight, by a different provider on a different invoice, so it falls outside whatever analysis is applied to freight and is never pulled into the picture. Between looking trivial and being billed apart, drayage ends up as a recurring cost that is paid routinely and examined rarely, which is precisely the condition under which charges creep and errors persist."
  - q: "What drives drayage cost, and how do you manage it?"
    a: "Beyond the base move, drayage cost is driven heavily by chassis fees, waiting and detention time, and congestion, much of which traces to timing: a container picked up late, an appointment missed, a facility that turns trucks slowly. Those causes are visible if the charges are decomposed and attributed, and many are partly controllable through better scheduling and coordination. Managing drayage means decomposing the invoice into its components, attributing the avoidable charges to their causes, and fixing the timing and coordination failures that generate them, the same discipline that works on ocean freight and port charges."
---

The ocean voyage gets all the attention because it is long and obviously expensive. The drayage move, the short truck haul between the port and your facility, gets almost none, because it is brief and looks like a trivial final step. That inattention is a mistake. Drayage is one of the costliest parts of the journey per mile, it carries a stack of charges that few operations ever examine, and it is usually billed separately from ocean freight, which means it slips through whatever analysis the long leg receives. The short move hides a recurring cost, and the brevity that makes it easy to ignore is exactly what lets the cost creep.

## Short distance, layered cost

Drayage covers a small distance and carries a cost out of proportion to it. The base truck move is only the beginning; on top of it sit chassis fees for the equipment the container rides on, waiting and detention time when trucks sit idle, and a range of accessorials that attach for various reasons. Stacked together, these can make a few miles of trucking a meaningful line in the delivered cost of the goods. The disproportion is the point: attention naturally follows distance, so the long ocean leg gets scrutinized and the short drayage leg gets waved through, even though per mile the short leg is frequently the dearer one.

## Billed apart, analyzed never

Compounding the inattention, drayage is typically billed separately from ocean freight, by a different provider on a different invoice. That separation matters because it places drayage outside the boundary of [freight analysis](/blog/freight-cost-analytics). Whatever decomposition and normalization an operation applies to its ocean freight, drayage is not in the dataset, so it is neither decomposed nor compared. It arrives on its own invoice, gets paid, and is never pulled into the picture. Between looking trivial and being billed apart, drayage occupies the ideal position for a cost to go unmanaged: routine enough to pay without thinking, separate enough to escape the analysis that would question it.

## Timing drives the avoidable part

Much of what makes drayage expensive is not the base move but the avoidable charges stacked on it, and those track heavily to timing and congestion. A container picked up late, an appointment missed, a facility that turns trucks slowly, each generates waiting time, detention, or extra chassis days, and each is a timing failure rather than an inherent cost. This is the same pattern that drives [demurrage and detention](/blog/demurrage-detention-analytics): the charge is a symptom, and the cause is a missed or mistimed event that is visible in advance if the right milestones are tracked. Because the causes are timing and coordination, a meaningful share of the cost is controllable, which is not true of the base rate.

## Decompose, attribute, manage

Managing drayage uses the same discipline that works on the rest of freight and on port charges. Decompose the invoice into its components, base move, chassis, waiting, accessorials, so the cost stops being a single number. Attribute the avoidable charges to their causes, the late pickup, the missed appointment, the slow facility, so each charge carries a reason. Then fix the timing and coordination failures that recur, which prevents not one charge but every future charge from that cause. Pulled into the freight dataset and [attributed across shipments](/blog/exception-management-trade), drayage shifts from scattered noise on a side invoice to a managed cost with a shrinking list of causes.

## Folding it back into the picture

The last step is to stop treating drayage as a separate thing and fold it into [landed cost](/blog/landed-cost-calculation) alongside ocean freight, duty, and port charges, so the delivered cost of the goods includes the short move that completes their journey. Left out, landed cost understates what it actually takes to get goods to the shelf, and a [gateway or routing decision](/blog/port-gateway-selection-analytics) made without drayage misses a cost that can differ sharply between ports and facilities. Pulling drayage into the same [integrated](/docs/data-integration) view as the rest of freight, delivered in [your own tenant](/blog/analytics-in-your-own-tenant), is what makes the short expensive move visible and manageable rather than quietly paid.

If your drayage arrives on its own invoice and never meets your freight analysis, the short move is a cost you are paying without examining. [Tell us how your containers get from port to door](/contact), or see how the [platform](/platform) brings drayage into the freight picture.
