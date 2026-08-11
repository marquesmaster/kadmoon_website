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
      'Power BI',
      'Microsoft Fabric',
      'Microsoft Power Platform',
      'Azure data engineering',
      'Business intelligence consulting',
      'BI migration',
      'Data governance',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.email,
      contactType: 'sales',
      areaServed: siteConfig.countryCode,
      availableLanguage: 'English',
    },
    sameAs: Object.values(siteConfig.socials).filter(Boolean),
  };

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    image: `${siteConfig.url}/opengraph-image`,
    description: siteConfig.description,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.regionCode,
      addressCountry: siteConfig.countryCode,
    },
    areaServed: { '@type': 'Country', name: siteConfig.country },
    knowsLanguage: 'en-US',
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { '@id': `${siteConfig.url}/#business` },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
