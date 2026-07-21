export const siteConfig = {
  name: 'Kadmoon, Inc.',
  legalName: 'Kadmoon, Inc.',
  shortName: 'Kadmoon',
  url: 'https://kadmoon.com',
  email: 'hello@kadmoon.com',
  city: 'Austin',
  region: 'Texas',
  regionCode: 'TX',
  country: 'United States',
  countryCode: 'US',
  defaultTitle: 'Kadmoon — Custom Software Engineering Firm | Austin, TX',
  titleTemplate: '%s | Kadmoon',
  description:
    'Kadmoon builds bespoke enterprise systems, SaaS platforms, mobile apps, and AI—concept to production—with a senior in-house team. You own every line. Flagship practice: Trade & Supply Chain.',
  ogImageAlt: 'Kadmoon, Inc. — custom software built for how your business actually runs.',
  keywords: [
    'custom software',
    'bespoke software',
    'software engineering firm',
    'enterprise systems',
    'SaaS development',
    'trade and supply chain software',
    'Austin software company',
  ],
  // Optional form-service endpoint. When set (NEXT_PUBLIC_CONTACT_ENDPOINT),
  // the contact form POSTs the JSON payload there. Otherwise it falls back
  // to a prefilled mailto to hello@kadmoon.com. No backend required.
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || '',
};

export type SiteConfig = typeof siteConfig;
