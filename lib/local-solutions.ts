// Solutions that have genuine local search intent ("<solution> in <city>").
// Each one powers a programmatic city-page system (see components/city). We
// deliberately do NOT generate a page for every service line: solutions with no
// local demand would be thin doorway pages that hurt rankings. Add an entry here
// only when "<label> in <city>" is a real query, and the copy engine in
// lib/city-content.ts will produce a differentiated page per city.

export type LocalSolution = {
  /** Route base and slug, e.g. 'power-bi' -> /power-bi/[city]. */
  slug: string;
  /** Human label used inline, e.g. 'Power BI'. */
  label: string;
  /** H1 lead-in: rendered as `${h1} in <City>`. */
  h1: string;
  /** Short eyebrow lead-in on the city hero. */
  eyebrow: string;
  /** JSON-LD Service.serviceType. */
  serviceType: string;
  /** Noun phrase for the governed outcome, e.g. 'a governed Power BI model'. */
  governedThing: string;
  /** One sentence listing what we build, used in the FAQ. */
  whatWeBuild: string;
  /** One-line description for meta/OG. */
  blurb: string;
  /** Extra keyword stems (city name is appended by the page). */
  keywordStems: string[];
  /** Hub/index page copy. */
  hub: { title: string; sub: string };
};

export const localSolutions: LocalSolution[] = [
  {
    slug: 'power-bi',
    label: 'Power BI',
    h1: 'Power BI consulting',
    eyebrow: 'Power BI and Power Platform',
    serviceType: 'Power BI consulting',
    governedThing: 'a governed Power BI model',
    whatWeBuild:
      'Power BI dashboards on a governed semantic model with row-level security and one definition per KPI, plus the Azure and Fabric data foundation underneath',
    blurb:
      'Power BI dashboards on a governed model, one definition per KPI, built in your tenant.',
    keywordStems: ['power bi consulting', 'power bi consultant', 'power bi developer'],
    hub: {
      title: 'Power BI consulting by city',
      sub: 'Kadmoon delivers Power BI and the Microsoft data platform for companies across the United States. Find your market below, or talk to us directly.',
    },
  },
  {
    slug: 'microsoft-fabric',
    label: 'Microsoft Fabric',
    h1: 'Microsoft Fabric consulting',
    eyebrow: 'Microsoft Fabric and OneLake',
    serviceType: 'Microsoft Fabric consulting',
    governedThing: 'a single source of truth on Microsoft Fabric',
    whatWeBuild:
      'a Fabric lakehouse on OneLake, Direct Lake datasets, governed pipelines, and Power BI served on top',
    blurb:
      'A single source of truth on Microsoft Fabric and OneLake, served to Power BI via Direct Lake.',
    keywordStems: ['microsoft fabric consulting', 'microsoft fabric consultant', 'onelake fabric'],
    hub: {
      title: 'Microsoft Fabric consulting by city',
      sub: 'We build the Fabric data platform, OneLake, and Direct Lake foundation that gives US companies one source of truth. Find your market below.',
    },
  },
  {
    slug: 'power-platform',
    label: 'Power Platform',
    h1: 'Power Platform and Power Apps consulting',
    eyebrow: 'Power Apps, Power Automate, Copilot Studio',
    serviceType: 'Microsoft Power Platform consulting',
    governedThing: 'governed Power Apps and Power Automate',
    whatWeBuild:
      'Power Apps, Power Automate flows, Power Pages, and Copilot Studio, governed with a Center of Excellence from day one',
    blurb:
      'Power Apps, Power Automate, and Copilot Studio that solve real processes, governed from day one.',
    keywordStems: ['power platform consulting', 'power apps developer', 'power automate consultant'],
    hub: {
      title: 'Power Platform consulting by city',
      sub: 'Low-code apps and automations on Power Apps, Power Automate, and Copilot Studio, governed at scale. Find your market below.',
    },
  },
  {
    slug: 'azure-data-engineering',
    label: 'Azure data engineering',
    h1: 'Azure data engineering',
    eyebrow: 'Azure, Fabric, and Data Factory',
    serviceType: 'Azure data engineering',
    governedThing: 'a clean, governed data foundation on Azure',
    whatWeBuild:
      'pipelines on Azure Data Factory and Microsoft Fabric, a warehouse or lakehouse sized to your volume, and the semantic layer above it',
    blurb:
      'The Azure and Fabric data foundation that makes BI stop lying: pipelines, warehouse, and a clean model.',
    keywordStems: ['azure data engineering', 'azure data factory consultant', 'data pipeline consulting'],
    hub: {
      title: 'Azure data engineering by city',
      sub: 'The governed data foundation underneath trustworthy BI: pipelines, warehouse or lakehouse, and a clean semantic layer. Find your market below.',
    },
  },
  {
    slug: 'power-bi-migration',
    label: 'Power BI migration',
    h1: 'Tableau, Qlik, and Cognos migration to Power BI',
    eyebrow: 'Migrate to Power BI and Fabric',
    serviceType: 'BI migration to Power BI',
    governedThing: 'a clean rebuild on a governed Power BI model',
    whatWeBuild:
      'a full inventory, dependency mapping, and a phased rebuild from Tableau, Qlik, or Cognos onto Power BI and Microsoft Fabric, with no information blackout',
    blurb:
      'Move off Tableau, Qlik, or Cognos onto Power BI and Fabric, inventoried and phased, with no lost history.',
    keywordStems: ['tableau to power bi migration', 'qlik to power bi migration', 'cognos to power bi'],
    hub: {
      title: 'Power BI migration by city',
      sub: 'Cost-driven migrations off Tableau, Qlik, and Cognos onto Power BI and Fabric, run inventoried and in waves. Find your market below.',
    },
  },
];

export function getLocalSolution(slug: string): LocalSolution | undefined {
  return localSolutions.find((s) => s.slug === slug);
}
