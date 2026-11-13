export const siteConfig = {
  name: 'Kadmoon, Inc.',
  legalName: 'Kadmoon, Inc.',
  shortName: 'Kadmoon',
  url: 'https://kadmoon.com',
  email: 'commercial@kadmoon.com',
  // No public operating city: Kadmoon is a remote, nationwide service-area
  // business. Texas is the state of incorporation (the legal home state), used
  // for governing law and as the structured-data region. `city` is intentionally
  // empty so no specific city is claimed; the structured data omits locality.
  city: '',
  region: 'Texas',
  regionCode: 'TX',
  country: 'United States',
  countryCode: 'US',
  // --- Business location / NAP (Name, Address, Phone) ---
  // Fill these with REAL, verifiable data once the US address and phone exist.
  // Empty fields are omitted from the structured data, so nothing fake is
  // emitted. Kadmoon serves clients remotely (a service-area business), so a
  // precise street address can stay hidden on Google Business Profile after
  // verification; set streetAddress here only if you list a real, staffed
  // location and want it public. Keep these consistent with the Google
  // Business Profile listing (same name, address, and phone everywhere).
  phone: '+1 (682) 293-5727',
  streetAddress: '',
  postalCode: '',
  latitude: '', // e.g. '30.2672'
  longitude: '', // e.g. '-97.7431'
  openingHours: '', // e.g. 'Mo-Fr 09:00-17:00'
  foundingYear: '', // e.g. '2025'
  // Google Business Profile / Google Maps URL. Added to sameAs once the
  // listing is live, which links the site and the profile as one entity.
  googleBusinessUrl: '',
  defaultTitle: 'Kadmoon | Power BI & Microsoft Data Analytics Consultancy in the US',
  titleTemplate: '%s | Kadmoon',
  // Kept to 120-160 chars, no em dashes (SEO + humanizer).
  description:
    'Kadmoon is a US Microsoft data and analytics firm led by Power BI services. We build governed dashboards, Power Platform automation, and Fabric data engineering in your own tenant. You own it.',
  ogImageAlt: 'Kadmoon: Power BI and Microsoft data analytics for US businesses.',
  keywords: [
    'Power BI consulting',
    'Power BI services',
    'Microsoft data analytics',
    'Power BI dashboards',
    'Power Platform consulting',
    'Microsoft Fabric',
    'Power BI migration',
    'business intelligence consulting',
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
