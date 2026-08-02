import type { Solution } from './types';

export const customErp: Solution = {
  slug: 'custom-erp-development',
  name: 'Custom ERP',
  category: 'Enterprise systems',
  eyebrow: 'Custom ERP development',
  metaTitle: 'Custom ERP Development | Kadmoon',
  metaDescription:
    'Kadmoon builds custom ERP software around your real process: modules, integrations, and reporting you own. Senior in-house team, measurable scope, code you keep.',
  keywords: [
    'custom erp development',
    'custom erp software',
    'bespoke erp',
    'erp development company',
    'custom erp system',
  ],
  tagline: 'Custom ERP built around how your business actually runs.',
  heroIntro:
    'A custom ERP is a resource planning system built for one company instead of a product you bend your process to fit. Kadmoon designs the modules around your real workflow, integrates the systems you already run, and hands you the code and infrastructure on delivery, so the ERP fits your operation and you own it.',
  problem:
    'Off-the-shelf ERPs force a standard process on your team, and the gap gets filled with spreadsheets, side tools, and manual re-entry. As the workarounds pile up, the ERP stops reflecting how the business actually runs, reporting drifts from reality, and every change waits on a vendor and a license negotiation.',
  approach:
    'We start from your process, not a template. We map the workflow, define measurable acceptance criteria per module, and build in two-week sprints with a working demo each cycle, so you see the ERP taking shape from the first month rather than at a big reveal at the end.',
  highlights: [
    {
      title: 'Modules mapped to your workflow',
      description:
        'Finance, inventory, purchasing, sales, and operations built around how your team works, not a generic template.',
    },
    {
      title: 'Integrated, not islanded',
      description:
        'Connected to your existing systems, from accounting and payment providers to logistics and third-party APIs.',
    },
    {
      title: 'Reporting you can trust',
      description:
        'Dashboards and exports driven by one source of truth, so the numbers match the operation.',
    },
    {
      title: 'You own it',
      description:
        'Source code, infrastructure, and documentation are yours on delivery. No per-seat lock-in.',
    },
  ],
  modules: [
    {
      name: 'Core operations',
      features: [
        'Inventory and stock control',
        'Purchasing and supplier management',
        'Sales orders and fulfillment',
        'Role-based access and audit trails',
      ],
    },
    {
      name: 'Finance and reporting',
      features: [
        'Billing and accounts receivable and payable',
        'Reconciliation and financial reporting',
        'Custom dashboards and scheduled exports',
      ],
    },
    {
      name: 'Integrations and automation',
      features: [
        'Accounting, payment, and logistics integrations',
        'Middleware with retries and observability',
        'Workflow automation and alerts',
      ],
    },
  ],
  whoFor: [
    'Operations outgrowing spreadsheets or a rigid off-the-shelf ERP.',
    'Companies whose process is a competitive edge and does not fit a product.',
    'Teams that need real integration between finance, inventory, and operations.',
  ],
  faqs: [
    {
      q: 'What is a custom ERP?',
      a: 'A custom ERP is enterprise resource planning software built for one company rather than sold as a shared product. It covers the same areas as a packaged ERP, such as finance, inventory, purchasing, and sales, but the modules and workflows are shaped around your actual process, and you own the code.',
    },
    {
      q: 'Is a custom ERP better than SAP, NetSuite, or Odoo?',
      a: 'It depends on your process. Packaged ERPs are the right call when your operation fits their model closely. A custom ERP wins when the standard product forces workarounds, when your process is a competitive edge, or when license and per-seat costs climb faster than the value. Many teams also keep a packaged system and build custom modules around it.',
    },
    {
      q: 'How much does a custom ERP cost?',
      a: 'Cost tracks scope: the number of modules, integrations, data volume, and compliance requirements. A focused ERP for one department costs far less than a company-wide platform. We scope the build with acceptance criteria per module so the price maps to something you can verify.',
    },
    {
      q: 'How long does it take to build a custom ERP?',
      a: 'A first usable module often ships in a few months, with a working demo every two weeks. The full system grows in phases rather than one long build, so you get value from early modules while later ones are still in progress.',
    },
  ],
  related: [
    { label: 'Enterprise systems we build', href: '/services/enterprise-systems' },
    { label: 'Enterprise software development', href: '/enterprise-software-development' },
    { label: 'Custom software development company', href: '/custom-software-development-company' },
  ],
};
