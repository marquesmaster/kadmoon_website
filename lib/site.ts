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
  defaultTitle: 'Kadmoon — Custom Software Engineering Firm | Austin, TX',
  titleTemplate: '%s | Kadmoon',
  // Kept to 120-160 chars, no em dashes (SEO + humanizer).
  description:
    'Kadmoon builds bespoke enterprise systems, SaaS platforms, mobile apps, and AI, from concept to production, with a senior in-house team. You own every line.',
  ogImageAlt: 'Kadmoon, Inc., custom software built for how your business actually runs.',
  keywords: [
    'custom software',
    'bespoke software',
    'software engineering firm',
    'enterprise systems',
    'SaaS development',
    'trade and supply chain software',
    'Austin software company',
  ],
  // The contact form posts to the site's own secure API route.
  contactApi: '/api/contact',
  // Optional analytics. Set NEXT_PUBLIC_GA_ID to a GA4 measurement id
  // (e.g. G-XXXXXXX) to enable Google Analytics.
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  // Social profiles. Fill these in as they go live; empty ones are not
  // rendered. Adding them improves entity/SEO signals (sameAs in JSON-LD).
  socials: {
    linkedin: '',
    x: '',
    github: '',
  } as Record<string, string>,
};

export type SiteConfig = typeof siteConfig;
