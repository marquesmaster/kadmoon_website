---
title: "Drayage management software: streamlining port-to-door moves"
description: "Drayage management software explained: container tracking and appointments, chassis and per-diem clocks, dispatch workflows, port integrations, and building custom."
category: "Trade & Supply Chain"
primaryKeyword: "drayage management software"
tags: ["drayage software", "container drayage", "port trucking software", "demurrage detention"]
takeaways:
  - "Drayage is defined by constraints outside the carrier's control, like terminal appointment windows, chassis availability, and per-diem clocks, which is why generic trucking software does not model it well."
  - "The charges are where margins are won or lost: the 2023 global average demurrage and detention charge was $2,008 per container per day, so a single container held four extra days can erase the margin on a whole move."
  - "Software should watch three clocks at once, demurrage, per-diem and detention, and chassis, turning reactive firefighting into proactive scheduling that flags the container that must move today."
  - "A timestamped record of every status change is a billing asset, because under the FMC rule (46 CFR Part 541) omitting any required invoice element eliminates the obligation to pay, and the billed party gets at least 30 days to dispute."
  - "Integrating terminal, shipping line, and customer feeds is most of the engineering work and is what separates a real drayage platform from a glorified spreadsheet."
faqs:
  - q: "What is drayage management software?"
    a: "It is software built specifically for drayage, the short container move from a port or rail terminal to its final stop. It tracks each container through its lifecycle, manages scarce terminal appointments, watches the demurrage, per-diem, and chassis clocks, coordinates driver and dispatch workflows, and integrates with terminal and shipping-line systems, all to keep demurrage and detention charges from eroding the margin on a move."
  - q: "How does drayage software reduce demurrage and detention charges?"
    a: "It makes the clocks visible so operators see a charge forming instead of discovering it weeks later on an invoice. It ties appointments to the demurrage clock to flag containers that must move today, and it records every status change with a timestamp. Because the 2023 global average charge was $2,008 per container per day, catching one at-risk container before free time expires can protect the margin on the whole move."
  - q: "Can drayage software help dispute incorrect demurrage invoices?"
    a: "Yes. Terminal and line invoices are frequently wrong, charging for days inside free time or for periods the terminal was closed. Under the FMC's billing rule (46 CFR Part 541) every invoice must carry specific data such as container numbers and free-time dates, and omitting any required element eliminates the obligation to pay. A system that records every status change with a timestamp gives you the paper trail to contest the charge and win, with at least 30 days to request a refund or waiver."
  - q: "Should I build custom drayage software or buy an off-the-shelf tool?"
    a: "Off-the-shelf drayage tools exist, but many operators outgrow them because their terminal relationships, chassis arrangements, and billing rules are specific enough that a generic product forces constant workarounds. Building custom lets the software match how you actually run and can start small with the highest-pain workflow, usually appointment and demurrage tracking, before expanding into dispatch, driver mobile, and billing."
---

Drayage is the short move that causes outsized pain: getting a container from the port or rail terminal to its final stop, often just a few miles. The distance is small and the coordination is brutal. Appointment windows, chassis availability, terminal congestion, and per-diem clocks all collide, and a missed detail turns into demurrage and detention charges that eat the whole margin on a move. Those charges are not small. In 2023 the global average demurrage and detention charge ran [$2,008 per container per day, and six US ports (New York, Oakland, Los Angeles, Savannah, Long Beach, and Houston) ranked highest among 65 ports surveyed](https://www.container-xchange.com/press-center/average-demurrage-and-detention-charges-witness-a-25-dip-globally-in-2023-7-u-s-ports-rank-highest/). Software built specifically for drayage is how the better operators keep those charges from piling up.

## What makes drayage operationally hard

Unlike long-haul trucking, drayage is defined by constraints outside the carrier's control. Terminals dictate when a container can be picked up through appointment systems that change constantly. Chassis, the wheeled frame the container rides on, may be in short supply or in the wrong pool. Containers accrue demurrage while they sit at the terminal and per-diem while the equipment is out, so timing is money in a very literal sense. Free time is short: shippers get on average [5.89 free days for a 20-foot container](https://www.container-xchange.com/press-center/average-demurrage-and-detention-charges-witness-a-25-dip-globally-in-2023-7-u-s-ports-rank-highest/) before the clock starts charging.

The result is a job that is less about driving and more about orchestration under uncertainty. A dispatcher is juggling appointment availability, driver hours, chassis logistics, and terminal congestion all at once, usually across phone calls, terminal websites, and spreadsheets. Generic trucking software does not model these container-specific realities, which is why so many drayage operators run on manual workarounds that break down the moment volume climbs. The stakes scale with the sector: one industry estimate values the container drayage market at [$48.6 billion in 2025, growing toward $92.3 billion by 2035](https://www.emergenresearch.com/industry-report/container-drayage-market), driven partly by importers diversifying away from single West Coast port dependence.

## Container tracking and appointments

The foundation of drayage software is knowing where every container is and what has to happen next. That means tracking each container through its lifecycle: on the vessel, discharged, available for pickup, out for delivery, empty, and returned. Each stage has a deadline attached, and the software's job is to surface the ones about to be missed before they cost money.

Appointment management is the piece that saves the most. Terminals require booked appointments, and slots are scarce and volatile. Software that integrates with terminal appointment systems, or at least centralizes and tracks appointments in one place, keeps dispatchers from losing a slot or sending a driver to a terminal that will turn them away. Tying appointments to the demurrage clock lets the system flag the container that must move today to avoid a charge, which is exactly the kind of exception a busy dispatcher misses by hand. The math is unforgiving once free time expires: at a global average past $2,000 a day, a single container held four extra days can erase the margin on the entire move.

## Chassis, demurrage, and per-diem

The charges are where drayage margins are won or lost, so tracking them is not optional. A capable system watches three clocks at once:

- Demurrage: what the terminal charges while a container sits past its free time. The software should flag containers approaching the deadline so they get prioritized.
- Per-diem and detention: what the shipping line charges while its container stays out past the allowed days. These fees escalate fast, with detention averaging around [$123 after seven days and $537 after fourteen](https://www.container-xchange.com/press-center/average-demurrage-and-detention-charges-witness-a-25-dip-globally-in-2023-7-u-s-ports-rank-highest/), so late empty returns bleed money quietly.
- Chassis: usage and cost of the chassis, which pool it came from, and where it needs to go back.

Making these visible turns reactive firefighting into proactive scheduling. Instead of discovering a charge on the invoice weeks later, the operator sees the clock ticking and acts while there is still time. Reconciling these charges against carrier and terminal invoices also catches the billing errors that otherwise get paid without question.

The reconciliation piece deserves emphasis because it directly recovers cash, and regulation now backs the operator up. Under the Federal Maritime Commission's demurrage and detention billing rule (46 CFR Part 541), every invoice must carry specific data such as container numbers, the free time start and end dates, and the applicable rate, and the FMC has stated that [omitting any required element eliminates the obligation to pay the charge](https://www.fmc.gov/articles/fmc-publishes-final-rule-on-detention-and-demurrage-billing-practices/). The rule also gives the billed party at least 30 days to request a mitigation, refund, or waiver. Terminal and line invoices are frequently wrong, charging demurrage for days that fell inside free time or per-diem across periods when the terminal was closed and no return was possible. Without software tracking the true timeline, those charges get paid because nobody has the evidence to dispute them. A system that records every status change with a timestamp gives you the paper trail to contest an incorrect charge and win, which over a year of moves adds up to real money that would otherwise leak straight out of margin.

## Driver and dispatch workflows

Drayage lives or dies on dispatch. The dispatcher needs a clear board of what has to move, by when, with which driver, chassis, and appointment, and the ability to react instantly when a terminal changes a window or a driver runs long. Software that presents this as one operational view, rather than a dozen open tabs, is the difference between a dispatcher handling forty moves and one handling twenty.

Drivers need their side too, ideally on mobile: their assignments, appointment times, terminal instructions, and a fast way to confirm pickup and delivery and capture proof. A mobile workflow that works in the messy conditions of a port gate, including spotty connectivity, keeps the office in sync without constant phone calls. The offline-first considerations here are real, since port areas are not known for reliable signal.

Good dispatch software also shortens the feedback loop when plans change, which in drayage is constant. A terminal pushes an appointment, a chassis is not where it should be, a driver gets held at the gate. The value of the system is how quickly it lets a dispatcher see the ripple effect and re-plan: which other moves are now at risk, which container just became the priority, whether a driver can be redirected before wasting a trip. That speed is hard to get from spreadsheets and phone calls, and it is exactly where purpose-built drayage software earns back its cost. The FMC itself notes that congestion, equipment unavailability, and appointment system failures are grounds to dispute charges, which makes the dispatcher's timestamped record a billing asset as much as an operational one.

## Integrating with ports and terminals

Drayage software cannot be an island, because the critical data lives elsewhere. Terminal systems hold container availability and appointment slots. Shipping lines hold container and per-diem status. Your customers, and their brokers, need visibility into where their freight is. Stitching these feeds together is most of the engineering work, and it is what separates a real platform from a glorified spreadsheet.

Because drayage is one leg of a larger trade flow, integration with the surrounding stack matters too. Connecting to a [custom TMS](/blog/custom-transportation-management-software) coordinates drayage with the rest of transportation, and feeding a [supply chain visibility platform](/blog/supply-chain-visibility-software) or [real-time shipment tracking](/blog/real-time-shipment-tracking-software) gives customers the end-to-end view they increasingly expect. Kadmoon's flagship vertical is trade and supply chain, spanning US Customs, ACE, ports, and logistics, so these integration touchpoints are treated as core rather than an afterthought.

## Building custom drayage software

Off-the-shelf drayage tools exist, but many operators outgrow them because their terminal relationships, chassis arrangements, and billing rules are specific enough that a generic product forces constant workarounds. Building custom lets the software match how you actually run, and it starts small: the highest-pain workflow first, usually appointment and demurrage tracking, then expanding into dispatch, driver mobile, and billing.

Kadmoon works in two-week sprints with a working demo each cycle and acceptance criteria in the contract, which suits drayage because you validate against real container moves early. You own 100% of the IP, including the repository and infrastructure, so the platform grows with your operation instead of locking you into someone else's roadmap. If drayage charges and manual coordination are eating your margin, look at [what we build](/#capabilities), read more across [the blog](/blog), or [get a technical proposal](/#contact) scoped to your busiest lanes.
