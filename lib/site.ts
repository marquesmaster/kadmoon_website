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
  defaultTitle: 'Kadmoon: US Custom Software House | Austin, TX',
  titleTemplate: '%s | Kadmoon',
  // Kept to 120-160 chars, no em dashes (SEO + humanizer).
  description:
    'Kadmoon is a US custom software house in Austin, TX. Bespoke enterprise systems, SaaS, mobile, and AI, built by a senior in-house team. You own every line.',
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
