// Single source of truth for the subscription tiers, shared by the /packages
// page (with the term toggle) and the home-page plans teaser.

export type Tier = {
  name: string;
  capacity: string;
  base: number | null; // monthly USD at the 12-month term, or null for "custom"
  sla: string;
  bestFor: string;
  includesLabel: string;
  includes: string[];
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    name: 'Core',
    capacity: '160 hrs/mo · ~1 specialist',
    base: 15000,
    sla: 'Next business day',
    bestFor: 'You already have Power BI and need it to run reliably.',
    includesLabel: 'Includes',
    includes: [
      'Refresh, gateway and pipeline monitoring',
      'Bug fixes and small changes',
      'Report and measure tweaks',
      'Monthly review',
    ],
  },
  {
    name: 'Growth',
    capacity: '320 hrs/mo · ~2 specialists',
    base: 28000,
    sla: 'Same business day',
    bestFor: "You're evolving your BI continuously.",
    includesLabel: 'Everything in Core, plus',
    includes: [
      'A named delivery lead',
      'An active roadmap',
      'New reports, dashboards and models each month',
      'Performance optimization',
    ],
    featured: true,
  },
  {
    name: 'Scale',
    capacity: '480 hrs/mo · ~3 specialists',
    base: 42000,
    sla: 'Priority',
    bestFor: 'You want us to be your data team.',
    includesLabel: 'Everything in Growth, plus',
    includes: [
      'A solution architect',
      'Data engineering capacity',
      'Governance: RLS, Microsoft Purview, DLP',
      'Monthly executive review (QBR)',
    ],
  },
  {
    name: 'Enterprise',
    capacity: 'Dedicated pod · 4+ specialists',
    base: null,
    sla: 'Dedicated',
    bestFor: 'Multi-team or enterprise-scale operations.',
    includesLabel: 'Everything in Scale, plus',
    includes: [
      'A dedicated pod, staffed to your scope',
      'Bespoke scope and roadmap',
      'A named account manager',
      'Enterprise governance and security',
    ],
  },
];

export function formatUsd(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US');
}
