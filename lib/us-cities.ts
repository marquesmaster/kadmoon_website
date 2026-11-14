// Dataset of major US metros for the local Power BI landing pages
// (/power-bi-consulting/[city], /power-bi-dashboards/[city], and the other
// angle routes). Kadmoon is a US Microsoft data and analytics consultancy led
// by Power BI. Local relevance comes from the metro, its state and region, and
// the industries that drive analytics demand there. We do not invent figures;
// the geography and sector mix are what make each page genuinely local.

export type USRegion = 'Northeast' | 'West' | 'South' | 'Midwest';
export type USTier = 'primary' | 'major' | 'emerging';

export interface USCity {
  name: string;
  state: string; // 2-letter abbreviation
  stateName: string;
  region: USRegion;
  tier: USTier;
  slug: string;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// [name, state, stateName, region, tier]
const RAW: [string, string, string, USRegion, USTier][] = [
  // West
  ['Los Angeles', 'CA', 'California', 'West', 'primary'],
  ['San Francisco', 'CA', 'California', 'West', 'primary'],
  ['San Jose', 'CA', 'California', 'West', 'major'],
  ['San Diego', 'CA', 'California', 'West', 'major'],
  ['Sacramento', 'CA', 'California', 'West', 'emerging'],
  ['Seattle', 'WA', 'Washington', 'West', 'primary'],
  ['Portland', 'OR', 'Oregon', 'West', 'major'],
  ['Denver', 'CO', 'Colorado', 'West', 'major'],
  ['Phoenix', 'AZ', 'Arizona', 'West', 'major'],
  ['Las Vegas', 'NV', 'Nevada', 'West', 'emerging'],
  ['Salt Lake City', 'UT', 'Utah', 'West', 'emerging'],

  // South
  ['Houston', 'TX', 'Texas', 'South', 'primary'],
  ['Dallas', 'TX', 'Texas', 'South', 'primary'],
  ['Austin', 'TX', 'Texas', 'South', 'major'],
  ['San Antonio', 'TX', 'Texas', 'South', 'major'],
  ['Atlanta', 'GA', 'Georgia', 'South', 'primary'],
  ['Miami', 'FL', 'Florida', 'South', 'primary'],
  ['Tampa', 'FL', 'Florida', 'South', 'major'],
  ['Orlando', 'FL', 'Florida', 'South', 'major'],
  ['Jacksonville', 'FL', 'Florida', 'South', 'emerging'],
  ['Charlotte', 'NC', 'North Carolina', 'South', 'major'],
  ['Raleigh', 'NC', 'North Carolina', 'South', 'emerging'],
  ['Nashville', 'TN', 'Tennessee', 'South', 'major'],

  // Northeast
  ['New York', 'NY', 'New York', 'Northeast', 'primary'],
  ['Boston', 'MA', 'Massachusetts', 'Northeast', 'primary'],
  ['Philadelphia', 'PA', 'Pennsylvania', 'Northeast', 'major'],
  ['Pittsburgh', 'PA', 'Pennsylvania', 'Northeast', 'emerging'],
  ['Washington', 'DC', 'District of Columbia', 'Northeast', 'primary'],
  ['Newark', 'NJ', 'New Jersey', 'Northeast', 'emerging'],

  // Midwest
  ['Chicago', 'IL', 'Illinois', 'Midwest', 'primary'],
  ['Minneapolis', 'MN', 'Minnesota', 'Midwest', 'major'],
  ['Detroit', 'MI', 'Michigan', 'Midwest', 'major'],
  ['Columbus', 'OH', 'Ohio', 'Midwest', 'emerging'],
  ['Cincinnati', 'OH', 'Ohio', 'Midwest', 'emerging'],
  ['Indianapolis', 'IN', 'Indiana', 'Midwest', 'emerging'],
  ['Kansas City', 'MO', 'Missouri', 'Midwest', 'emerging'],
  ['St. Louis', 'MO', 'Missouri', 'Midwest', 'emerging'],
  ['Milwaukee', 'WI', 'Wisconsin', 'Midwest', 'emerging'],
];

export const usCities: USCity[] = RAW.map(([name, state, stateName, region, tier]) => ({
  name,
  state,
  stateName,
  region,
  tier,
  slug: slugify(name),
}));

export function getUSCityBySlug(slug: string): USCity | undefined {
  return usCities.find((c) => c.slug === slug);
}

export function getCitiesByStateSlug(stateSlug: string): USCity[] {
  return usCities.filter((c) => slugify(c.stateName) === stateSlug);
}

// Distinct states present in the dataset, for the state landing pages.
export const usStates = [...new Map(usCities.map((c) => [c.state, c])).values()]
  .map((c) => ({ state: c.state, stateName: c.stateName, region: c.region, slug: slugify(c.stateName) }))
  .sort((a, b) => a.stateName.localeCompare(b.stateName));

export function getStateBySlug(slug: string) {
  return usStates.find((s) => s.slug === slug);
}

export const US_TIER_LABEL: Record<USTier, string> = {
  primary: 'one of the largest business economies in the country',
  major: 'a major metropolitan economy',
  emerging: 'a fast-growing business hub',
};

// Region context: the industries that drive analytics demand, and the
// Power BI angles that resonate most. Links point to real Kadmoon pages.
export const US_REGION_CONTEXT: Record<
  USRegion,
  { industries: string; services: { label: string; href: string }[] }
> = {
  West: {
    industries: 'technology, SaaS, media, healthcare, and venture-backed growth companies',
    services: [
      { label: 'Power BI dashboards and reports', href: '/services/power-bi' },
      { label: 'Copilot and AI on your data', href: '/services/copilot-ai' },
      { label: 'Data engineering on Fabric and Azure', href: '/services/data-engineering' },
    ],
  },
  South: {
    industries: 'energy, logistics, healthcare, financial services, and manufacturing',
    services: [
      { label: 'Power BI dashboards and reports', href: '/services/power-bi' },
      { label: 'Power BI migration', href: '/blog/migrating-to-power-bi' },
      { label: 'Power Platform automation', href: '/services/power-platform' },
    ],
  },
  Northeast: {
    industries: 'financial services, insurance, healthcare, pharma, and professional services',
    services: [
      { label: 'Power BI governance and row-level security', href: '/blog/power-bi-governance-rls-workspaces' },
      { label: 'Power BI dashboards and reports', href: '/services/power-bi' },
      { label: 'Data engineering on Fabric and Azure', href: '/services/data-engineering' },
    ],
  },
  Midwest: {
    industries: 'manufacturing, insurance, agriculture, logistics, and consumer goods',
    services: [
      { label: 'Power BI migration', href: '/blog/migrating-to-power-bi' },
      { label: 'Power BI dashboards and reports', href: '/services/power-bi' },
      { label: 'Power Platform automation', href: '/services/power-platform' },
    ],
  },
};
