// Internal-linking hubs. Maps each blog category to the most relevant service
// pages so every article links out to them in a contextual "Related" block,
// concentrating internal link equity on the pages we want to rank.
// All routes here are valid Power BI / Microsoft-stack pages.

export type HubLink = { label: string; href: string };

const POWER_BI: HubLink = { label: 'Power BI', href: '/services/power-bi' };
const FABRIC: HubLink = { label: 'Microsoft Fabric', href: '/services/microsoft-fabric' };
const FINANCE: HubLink = { label: 'Power BI for finance', href: '/power-bi-for-finance' };
const SERVICES: HubLink = { label: 'All services', href: '/services' };

// Power Platform and Copilot are no longer standalone services, so their blog
// categories point at Power BI (and finance) instead of a dead service page.
const byCategory: Record<string, HubLink[]> = {
  'Power BI': [POWER_BI, FINANCE, SERVICES],
  'Power Platform': [POWER_BI, FINANCE, SERVICES],
  'Data Engineering': [FABRIC, POWER_BI, SERVICES],
  'Copilot & AI': [POWER_BI, FABRIC, SERVICES],
  'Analytics Strategy': [POWER_BI, FINANCE, SERVICES],
};

export function hubsForCategory(category: string): HubLink[] {
  return byCategory[category] ?? [POWER_BI, FINANCE, SERVICES];
}
