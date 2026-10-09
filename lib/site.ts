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
  defaultTitle: 'Kadmoon | Analytics for Foreign Trade: Landed Cost, Duty, Visibility & Compliance',
  titleTemplate: '%s | Kadmoon',
  // Kept to 120-160 chars, no em dashes (SEO + humanizer).
  description:
    'Kadmoon is a US analytics firm focused 100% on foreign trade. We turn data from SAP, Microsoft, and the systems you run into decisions: landed cost, duty exposure, shipment visibility, OTIF, and customs analytics, in your own tenant.',
  ogImageAlt: 'Kadmoon: analytics built for foreign trade in the United States.',
  keywords: [
    'foreign trade analytics',
    'landed cost analytics',
    'customs compliance analytics',
    'import export analytics',
    'trade data analytics',
    'supply chain analytics',
    'Power BI for trade',
  ],
  // The contact form posts to the site's own secure API route.
  contactApi: '/api/contact',
  // Sales presentation served from /public, emailed to prospects on submit.
  presentationUrl: '/kadmoon-overview.pdf',
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
