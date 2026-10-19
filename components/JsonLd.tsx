import { siteConfig } from '@/lib/site';
import { faq } from '@/lib/content';

/** Organization + FAQPage structured data for search engines. */
export function JsonLd() {
  // Optional NAP fields: included only when set, so nothing fake is emitted.
  const phone = siteConfig.phone ? { telephone: siteConfig.phone } : {};
  const streetAddr = siteConfig.streetAddress
    ? {
        streetAddress: siteConfig.streetAddress,
        ...(siteConfig.postalCode ? { postalCode: siteConfig.postalCode } : {}),
      }
    : {};
  const geo =
    siteConfig.latitude && siteConfig.longitude
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: siteConfig.latitude,
            longitude: siteConfig.longitude,
          },
        }
      : {};
  const hours = siteConfig.openingHours
    ? { openingHours: siteConfig.openingHours }
    : {};
  const founding = siteConfig.foundingYear
    ? { foundingDate: siteConfig.foundingYear }
    : {};
  // Link the site and the Google Business Profile as one entity via sameAs.
  const sameAs = [siteConfig.googleBusinessUrl, ...Object.values(siteConfig.socials)].filter(Boolean);

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    email: siteConfig.email,
    ...phone,
    ...founding,
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
      ...streetAddr,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.regionCode,
      addressCountry: siteConfig.countryCode,
    },
    areaServed: {
      '@type': 'Country',
      name: siteConfig.country,
    },
    knowsAbout: [
      'Foreign trade analytics',
      'Landed cost and margin analytics',
      'Duty and tariff exposure',
      'Customs and compliance analytics',
      'Shipment visibility and OTIF',
      'Inventory and warehouse analytics',
      'Supply chain and logistics analytics',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.email,
      ...phone,
      contactType: 'sales',
      areaServed: siteConfig.countryCode,
      availableLanguage: 'English',
    },
    sameAs,
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
    ...phone,
    ...founding,
    address: {
      '@type': 'PostalAddress',
      ...streetAddr,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.regionCode,
      addressCountry: siteConfig.countryCode,
    },
    ...geo,
    ...hours,
    areaServed: { '@type': 'Country', name: siteConfig.country },
    knowsLanguage: 'en-US',
    ...(sameAs.length ? { sameAs } : {}),
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
