export const siteConfig = {
  name: 'Kadmoon, Inc.',
  legalName: 'Kadmoon, Inc.',
  shortName: 'Kadmoon',
  url: 'https://kadmoon.com',
  email: 'comercial@kadmoon.com',
  city: 'Austin',
  region: 'Texas',
  regionCode: 'TX',
  country: 'United States',
  countryCode: 'US',
  defaultTitle: 'Kadmoon: Power BI & Microsoft Power Platform Consultancy | Austin, TX',
  titleTemplate: '%s | Kadmoon',
  // Kept to 120-160 chars, no em dashes (SEO + humanizer).
  description:
    'Kadmoon is a US Power BI and Microsoft Power Platform consultancy in Austin, TX. Power BI, Microsoft Fabric, data engineering, and migrations that turn scattered data into decisions.',
  ogImageAlt: 'Kadmoon: Power BI and Microsoft Power Platform consultancy.',
  keywords: [
    'Power BI consulting',
    'Microsoft Power Platform consulting',
    'Microsoft Fabric consulting',
    'Power BI migration',
    'Tableau to Power BI migration',
    'Azure data engineering',
    'Power Platform Center of Excellence',
  ],
  // The contact form posts to the site's own secure API route.
  contactApi: '/api/contact',
  // Google Tag Manager container id. Public value; overridable via env.
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-WK2T78RK',
  // Social profiles. Fill these in as they go live; empty ones are not
  // rendered. Adding them improves entity/SEO signals (sameAs in JSON-LD).
  socials: {
    linkedin: '',
    x: '',
    github: '',
  } as Record<string, string>,
};

export type SiteConfig = typeof siteConfig;
