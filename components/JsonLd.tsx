import { siteConfig } from '@/lib/site';
import { faq } from '@/lib/content';

/** Organization + FAQPage structured data for search engines. */
export function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.regionCode,
        addressCountry: siteConfig.countryCode,
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.regionCode,
      addressCountry: siteConfig.countryCode,
    },
    areaServed: {
      '@type': 'Country',
      name: siteConfig.country,
    },
    knowsAbout: [
      'Custom software development',
      'Enterprise systems',
      'SaaS platforms',
      'Trade and supply chain software',
      'Legacy modernization',
      'Data and AI',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.email,
      contactType: 'sales',
      areaServed: siteConfig.countryCode,
      availableLanguage: 'English',
    },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
