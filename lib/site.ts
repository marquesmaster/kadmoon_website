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
  defaultTitle: 'Kadmoon | Software for Foreign Trade: ERP, Customs, Logistics & Security',
  titleTemplate: '%s | Kadmoon',
  // Kept to 120-160 chars, no em dashes (SEO + humanizer).
  description:
    'Kadmoon is a US software company focused 100% on foreign trade. We build trade ERP, customs and compliance, inventory, security vision, and logistics software for importers, exporters, brokers, and forwarders.',
  ogImageAlt: 'Kadmoon: software built for foreign trade in the United States.',
  keywords: [
    'foreign trade software',
    'customs compliance software',
    'trade ERP',
    'import export software',
    'customs brokerage software',
    'freight forwarding software',
    'supply chain logistics software',
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
