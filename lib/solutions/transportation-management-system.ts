import type { Solution } from './types';

export const tmsSoftware: Solution = {
  slug: 'transportation-management-system',
  name: 'Transportation management system (TMS)',
  category: 'Logistics',
  eyebrow: 'Custom TMS software',
  metaTitle: 'Custom Transportation Management System (TMS) | Kadmoon',
  metaDescription:
    'Kadmoon builds custom TMS software: load planning, routing and optimization, carrier management, dispatch, freight audit, and real-time tracking. Senior in-house team, code you own.',
  keywords: [
    'custom tms',
    'transportation management system',
    'tms software',
    'custom tms software',
    'transportation management software',
  ],
  tagline: 'A transportation management system built around how you move freight.',
  heroIntro:
    'A transportation management system (TMS) is software that plans, executes, and settles the movement of freight, from load planning and carrier selection through dispatch, tracking, and freight payment. Kadmoon builds a custom TMS around your lanes, carriers, and rate structures, connects it to the carriers and systems you already use, and hands you the code and infrastructure on delivery.',
  problem:
    'Packaged TMS platforms assume a standard way of moving freight, so shippers and brokers end up running rate shopping in spreadsheets, tracking loads over email and phone, and reconciling carrier invoices by hand. The gaps cost money on every load: missed rate options, late dispatch, and freight bills paid without a real audit against the contracted rate.',
  approach:
    'We start from your operation, not a template. We map how loads are planned, tendered, tracked, and settled, define measurable acceptance criteria for each capability, and build in two-week sprints with a working demo every cycle, so routing, rate shopping, and dispatch come online in stages you can verify rather than one late reveal.',
  highlights: [
    {
      title: 'Routing and load optimization',
      description:
        'Load planning and route optimization that account for your equipment, service windows, and cost, not a generic solver you cannot tune.',
    },
    {
      title: 'Rate shopping across carriers',
      description:
        'Carrier management and rate shopping in one place, comparing contracted and spot rates so you tender the right load to the right carrier.',
    },
    {
      title: 'Freight audit and payment',
      description:
        'Automated freight audit that checks carrier invoices against the tendered rate and accessorials, so you pay what you agreed to and catch the rest.',
    },
    {
      title: 'Real-time tracking',
      description:
        'Shipment visibility from pickup to delivery, with status, ETAs, and exception alerts pulled from carrier feeds and driver updates.',
    },
    {
      title: 'Carrier integration done properly',
      description:
        'EDI and API connections to carriers for tendering, status, and invoicing, built with retries and monitoring instead of brittle one-off scripts.',
    },
    {
      title: 'You own it',
      description:
        'Source code, infrastructure, and documentation are yours on delivery. No per-load or per-seat lock-in.',
    },
  ],
  modules: [
    {
      name: 'Planning and optimization',
      features: [
        'Load planning and consolidation',
        'Route optimization with equipment and time-window constraints',
        'Mode and carrier selection',
        'Lane and rate management',
      ],
    },
    {
      name: 'Execution and dispatch',
      features: [
        'Carrier tendering and dispatch',
        'Rate shopping across contracted and spot rates',
        'Real-time tracking and ETAs',
        'Exception and delay alerts',
      ],
    },
    {
      name: 'Settlement and reporting',
      features: [
        'Freight audit against tendered rates and accessorials',
        'Freight payment and reconciliation',
        'Carrier scorecards and on-time performance',
        'Custom dashboards and scheduled exports',
      ],
    },
    {
      name: 'Integrations',
      features: [
        'EDI and API connections with carriers',
        'ERP, WMS, and accounting integrations',
        'Middleware with retries and observability',
        'Role-based access and audit trails',
      ],
    },
  ],
  whoFor: [
    'Shippers and 3PLs outgrowing spreadsheets or a rigid off-the-shelf TMS.',
    'Brokers who need rate shopping, dispatch, and freight audit in one system.',
    'Logistics teams that need real integration between planning, carriers, and accounting.',
  ],
  faqs: [
    {
      q: 'What is a transportation management system (TMS)?',
      a: 'A transportation management system is software that plans, executes, and settles freight movement. It covers load planning and routing, carrier selection and rate shopping, dispatch and tracking, and freight audit and payment. A custom TMS does the same work as a packaged platform but is shaped around your lanes, carriers, and rate structures, and you own the code.',
    },
    {
      q: 'Is a custom TMS better than an off-the-shelf platform?',
      a: 'It depends on your operation. Packaged platforms are the right call when the way you move freight fits their model closely. A custom TMS wins when the standard product forces workarounds, when your routing or rate logic is a competitive edge, or when per-load and per-seat fees climb faster than the value. Many teams keep a packaged system and build custom modules around it.',
    },
    {
      q: 'How much does a custom TMS cost?',
      a: 'Cost tracks scope: the number of modes and carriers, the complexity of routing and rate logic, the integrations, and the freight audit rules. A focused TMS for one workflow costs far less than a full plan-to-pay platform. We scope the build with acceptance criteria per capability so the price maps to something you can verify.',
    },
    {
      q: 'How long does it take to build a custom TMS?',
      a: 'A first usable capability, such as load planning or rate shopping, often ships in a few months, with a working demo every two weeks. The full system grows in phases rather than one long build, so you get value from early capabilities while dispatch, tracking, and freight audit are still in progress.',
    },
    {
      q: 'Can a custom TMS connect to carriers over EDI and API?',
      a: 'Yes. We build EDI and API connections to your carriers for tendering, status updates, and invoicing, along with integrations to your ERP, WMS, and accounting systems. The connections are built with retries and monitoring so tracking and freight payment keep working when a carrier feed hiccups.',
    },
  ],
  related: [
    { label: 'Logistics software we build', href: '/industries/logistics' },
    { label: 'Freight forwarding software', href: '/solutions/freight-forwarding-software' },
    { label: 'Custom transportation management software', href: '/blog/custom-transportation-management-software' },
  ],
};
