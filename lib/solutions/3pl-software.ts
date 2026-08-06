import type { Solution } from './types';

export const threePlSoftware: Solution = {
  slug: 'custom-3pl-software',
  name: '3PL software',
  category: 'Logistics',
  eyebrow: 'Custom 3PL software',
  metaTitle: 'Custom 3PL Software Development | Kadmoon',
  metaDescription:
    'Kadmoon builds custom 3PL software: WMS, TMS, client billing, and a branded client portal in one platform. Multi-client, multi-warehouse, code you own. Senior in-house team.',
  keywords: [
    'custom 3pl software',
    '3pl software',
    '3pl software development',
    '3pl warehouse software',
    'third party logistics software',
  ],
  tagline: 'Custom 3PL software built for the way you run your warehouses.',
  heroIntro:
    'Custom 3PL software is a third-party logistics platform built for one provider instead of a product every client is forced to share. Kadmoon builds the warehouse, transport, billing, and client portal pieces into one system that handles multiple clients and multiple warehouses, then hands you the code and infrastructure on delivery, so the platform fits your operation and you own it.',
  problem:
    'Most 3PLs run on a stack that was never meant to work together: a rigid WMS, a separate TMS, spreadsheets for client billing, and email for shipment updates. Every new client means more manual setup, per-client rules that live in someone\'s head, and billing that takes days to reconcile. Off-the-shelf 3PL products charge per user and per transaction, and still cannot model the storage, handling, and value-added charges that make each of your contracts different.',
  approach:
    'We start from how you actually onboard and bill a client, not a generic template. We map the flow from receiving to shipping to invoice, define measurable acceptance criteria per module, and build in two-week sprints with a working demo each cycle, so you see the platform running against real client scenarios from the first month instead of at a reveal at the end.',
  highlights: [
    {
      title: 'Multi-client, multi-warehouse by design',
      description:
        'One platform that isolates each client\'s inventory, rules, and rates while running across every warehouse and location you operate.',
    },
    {
      title: 'WMS and TMS in one place',
      description:
        'Receiving, put-away, picking, and packing connected to carrier rating, routing, and tracking, so warehouse and transport share one source of truth.',
    },
    {
      title: 'Billing that matches the contract',
      description:
        'Storage, handling, pick-and-pack, and value-added charges captured as activity happens and rolled into invoices per client, per rate card.',
    },
    {
      title: 'A client portal that reduces support load',
      description:
        'A branded portal where clients see inventory, order status, and shipment tracking themselves, instead of emailing your team for every update.',
    },
    {
      title: 'Integrated with the systems clients already use',
      description:
        'Connected to carriers, e-commerce and marketplace stores, EDI partners, and accounting, so orders and shipment data flow without re-entry.',
    },
    {
      title: 'You own it',
      description:
        'Source code, infrastructure, and documentation are yours on delivery. No per-user or per-transaction lock-in as you add clients.',
    },
  ],
  modules: [
    {
      name: 'Warehouse management (WMS)',
      features: [
        'Receiving, put-away, and directed picking and packing',
        'Real-time inventory by client, location, lot, and serial',
        'Cycle counts, adjustments, and stock transfers',
        'Barcode and mobile scanning workflows',
      ],
    },
    {
      name: 'Transport management (TMS)',
      features: [
        'Carrier rating, label generation, and routing',
        'Shipment tracking and delivery status',
        'Multi-carrier and parcel plus LTL support',
        'Proof of delivery and exception handling',
      ],
    },
    {
      name: 'Client billing',
      features: [
        'Per-client rate cards for storage, handling, and value-added services',
        'Automated activity capture from warehouse and transport events',
        'Invoice generation, review, and accounting export',
      ],
    },
    {
      name: 'Client portal and visibility',
      features: [
        'Branded self-service portal per client',
        'Live inventory, order status, and shipment tracking',
        'Order and returns submission',
        'Reports and scheduled exports clients can pull themselves',
      ],
    },
    {
      name: 'Integrations and automation',
      features: [
        'E-commerce, marketplace, and EDI order intake',
        'Carrier and accounting integrations',
        'Middleware with retries and observability',
        'Alerts and workflow automation across clients',
      ],
    },
  ],
  whoFor: [
    '3PLs outgrowing a rigid off-the-shelf WMS or a stack held together by spreadsheets.',
    'Providers onboarding new clients faster than their current tools and billing can keep up.',
    'Operations that need warehouse, transport, and billing to share one view across multiple clients and warehouses.',
    'Logistics companies whose contract terms and value-added services do not fit a packaged product.',
  ],
  faqs: [
    {
      q: 'What is 3PL software?',
      a: 'Third-party logistics (3PL) software is the platform a logistics provider uses to run fulfillment for its clients. It typically combines a warehouse management system (WMS), a transport management system (TMS), client billing, and a client portal, and it is built to handle many clients across multiple warehouses from one system. Custom 3PL software builds those pieces around one provider\'s process instead of forcing every client into a shared product.',
    },
    {
      q: 'Is custom 3PL software better than off-the-shelf platforms?',
      a: 'It depends on your operation. Packaged 3PL products are the right call when your process fits their model and your client contracts are simple. Custom software wins when per-user and per-transaction fees climb as you grow, when your billing rules and value-added services do not fit a template, or when client onboarding is slowed by tooling. Many providers also keep a packaged WMS and build custom billing, portal, and integration layers around it.',
    },
    {
      q: 'How much does custom 3PL software cost?',
      a: 'Cost tracks scope: how many of the WMS, TMS, billing, and portal modules you need, the number of integrations and carriers, and how complex your rate cards are. A focused build, such as a client portal and billing layer over an existing WMS, costs far less than a full multi-warehouse platform. We scope the work with acceptance criteria per module so the price maps to something you can verify.',
    },
    {
      q: 'How long does it take to build?',
      a: 'A first usable module, often the WMS core or the client portal, ships in a few months, with a working demo every two weeks. The full platform grows in phases rather than one long build, so early modules are live and billing real activity while later ones are still in progress.',
    },
    {
      q: 'Can it integrate with carriers, e-commerce stores, and EDI partners?',
      a: 'Yes. Integrations are a core part of a 3PL platform, so orders, inventory, and shipment data move without manual re-entry. We connect to major and regional carriers, e-commerce and marketplace stores, EDI trading partners, and accounting systems, and we build the middleware with retries and monitoring so failures are visible and recoverable rather than silent.',
    },
  ],
  related: [
    { label: 'Warehouse management software', href: '/solutions/warehouse-management-software' },
    { label: 'Logistics software we build', href: '/industries/logistics' },
    { label: 'Custom 3PL software guide', href: '/blog/custom-3pl-software' },
  ],
};
