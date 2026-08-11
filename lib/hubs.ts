// Internal-linking hubs. Maps each blog category to the most relevant hub
// pages so every article links out to them in a contextual "Related resources"
// block, concentrating internal link equity on the pages we want to rank.
// All routes here are valid pages on the Microsoft data platform site.

export type HubLink = { label: string; href: string };

const DASHBOARDS: HubLink = { label: 'Interactive dashboard demos', href: '/dashboards' };
const CASES: HubLink = { label: 'BI and migration case studies', href: '/cases' };
const POWER_BI: HubLink = { label: 'Power BI consulting', href: '/services/power-bi' };
const FABRIC: HubLink = { label: 'Microsoft Fabric', href: '/services/microsoft-fabric' };
const T2T: HubLink = { label: 'Tenant-to-tenant migration', href: '/services/tenant-to-tenant-migration' };
const POWER_PLATFORM: HubLink = { label: 'Power Platform', href: '/services/power-platform' };
const DATA_ENG: HubLink = { label: 'Data engineering', href: '/services/data-engineering' };
const ANALYTICS_AI: HubLink = { label: 'Analytics and AI', href: '/services/analytics-and-ai' };
const GOVERNANCE: HubLink = { label: 'Data governance', href: '/services/data-governance' };
const SERVICES: HubLink = { label: 'What we do', href: '/services' };

// Blog categories currently span the legacy software topics plus Data & AI.
// Until the content is fully re-themed, every category resolves to a valid set
// of Microsoft data platform hubs, defaulting to Power BI, dashboards, cases.
const byCategory: Record<string, HubLink[]> = {
  'Power BI': [POWER_BI, GOVERNANCE, DASHBOARDS],
  'Microsoft Fabric': [FABRIC, DATA_ENG, POWER_BI],
  'Data engineering': [DATA_ENG, FABRIC, POWER_BI],
  'Analytics & AI': [ANALYTICS_AI, POWER_BI, DASHBOARDS],
  'Power Platform': [POWER_PLATFORM, ANALYTICS_AI, CASES],
  Migration: [T2T, FABRIC, POWER_BI],
  Comparisons: [POWER_BI, FABRIC, CASES],
  'Cost & Pricing': [POWER_BI, SERVICES, CASES],
};

export function hubsForCategory(category: string): HubLink[] {
  return byCategory[category] ?? [POWER_BI, DASHBOARDS, CASES];
}
