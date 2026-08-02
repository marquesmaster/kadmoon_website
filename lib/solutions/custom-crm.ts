import type { Solution } from './types';

export const customCrm: Solution = {
  slug: 'custom-crm-development',
  name: 'Custom CRM',
  category: 'Enterprise systems',
  eyebrow: 'Custom CRM development',
  metaTitle: 'Custom CRM Development | Kadmoon',
  metaDescription:
    'Kadmoon builds custom CRM software around your real sales and service process: pipeline, contacts, activities, integrations, and reporting you own. Senior in-house team, measurable scope, code you keep.',
  keywords: [
    'custom crm development',
    'custom crm software',
    'bespoke crm',
    'crm development company',
    'custom crm system',
  ],
  tagline: 'Custom CRM built around how your team actually sells and serves.',
  heroIntro:
    'A custom CRM is a sales and service system built for one company instead of a product you bend your process to fit. Kadmoon designs the pipeline, contacts, and activities around how your team really works, connects the tools you already run, and hands you the code and infrastructure on delivery, so the CRM matches your process and you own it.',
  problem:
    'Off-the-shelf CRMs like Salesforce and HubSpot impose a standard pipeline, and the parts that do not fit get patched with spreadsheets, manual notes, and fields nobody trusts. Reps stop logging activity, the data goes stale, reporting drifts from reality, and every real change waits on an admin, a consultant, or a bigger per-seat plan.',
  approach:
    'We start from your sales and service process, not a template. We map the pipeline stages, the handoffs, and the reporting you need, define measurable acceptance criteria per module, and build in two-week sprints with a working demo each cycle, so the CRM earns adoption instead of fighting for it.',
  highlights: [
    {
      title: 'Pipeline that fits your process',
      description:
        'Stages, fields, and rules modeled on how your team actually moves a deal or a case, not a generic funnel.',
    },
    {
      title: 'Contacts and activity that stay current',
      description:
        'A single view of every account, contact, and interaction, with logging that fits the workflow so reps keep it up to date.',
    },
    {
      title: 'Integrated, not islanded',
      description:
        'Connected to email, calendar, phone, marketing, billing, and the rest of your stack so data flows both ways.',
    },
    {
      title: 'Reporting you can trust',
      description:
        'Forecasts, dashboards, and exports driven by one source of truth, so the numbers match the pipeline.',
    },
    {
      title: 'You own it',
      description:
        'Source code, data, infrastructure, and documentation are yours on delivery. No per-seat lock-in.',
    },
  ],
  modules: [
    {
      name: 'Sales and pipeline',
      features: [
        'Custom pipeline stages and deal workflow',
        'Lead capture, scoring, and assignment',
        'Quotes, proposals, and approvals',
        'Role-based access and audit trails',
      ],
    },
    {
      name: 'Contacts and activities',
      features: [
        'Unified accounts, contacts, and company records',
        'Activity timeline across email, calls, and meetings',
        'Tasks, reminders, and follow-up automation',
      ],
    },
    {
      name: 'Service and support',
      features: [
        'Case and ticket management',
        'SLA tracking and escalation rules',
        'Customer history tied to the same records as sales',
      ],
    },
    {
      name: 'Integrations and reporting',
      features: [
        'Email, calendar, phone, and marketing integrations',
        'Billing, ERP, and third-party API connections',
        'Forecasts, dashboards, and scheduled exports',
      ],
    },
  ],
  whoFor: [
    'Sales and service teams outgrowing spreadsheets or fighting a rigid off-the-shelf CRM.',
    'Companies whose sales or service process is a competitive edge and does not fit a product.',
    'Teams tired of climbing per-seat costs and paying an admin or consultant for every change.',
  ],
  faqs: [
    {
      q: 'What is a custom CRM?',
      a: 'A custom CRM is customer relationship management software built for one company rather than sold as a shared product. It covers the same areas as a packaged CRM, such as pipeline, contacts, activities, and reporting, but the stages and workflows are shaped around your actual sales and service process, and you own the code and the data.',
    },
    {
      q: 'Is a custom CRM better than Salesforce or HubSpot?',
      a: 'It depends on your process. Packaged CRMs are the right call when your process fits their model and you value a large app marketplace. A custom CRM wins when the standard product forces workarounds, when your process is a competitive edge, or when per-seat and add-on costs climb faster than the value. Some teams also keep a packaged CRM and build custom modules around it.',
    },
    {
      q: 'How much does a custom CRM cost?',
      a: 'Cost tracks scope: the number of modules, integrations, data volume, automation, and reporting requirements. A focused CRM for one team costs far less than a company-wide platform spanning sales and service. We scope the build with acceptance criteria per module so the price maps to something you can verify.',
    },
    {
      q: 'How long does it take to build a custom CRM?',
      a: 'A first usable version often ships in a few months, with a working demo every two weeks. The system grows in phases rather than one long build, so your team can start selling and logging in the CRM while later modules and integrations are still in progress.',
    },
    {
      q: 'Can a custom CRM integrate with our email, phone, and billing tools?',
      a: 'Yes. Integrations are core to the build, not an afterthought. We connect email and calendar, phone systems, marketing tools, and billing or ERP through their APIs, with middleware that handles retries and gives you visibility when something fails, so records stay in sync across your stack.',
    },
  ],
  related: [
    { label: 'Enterprise systems we build', href: '/services/enterprise-systems' },
    { label: 'Integrations and APIs', href: '/services/integrations-and-apis' },
    { label: 'Custom software development company', href: '/custom-software-development-company' },
  ],
};
