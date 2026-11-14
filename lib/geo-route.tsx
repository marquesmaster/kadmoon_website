import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { usCities, getUSCityBySlug } from './us-cities';
import { getAngle } from './geo';
import { siteConfig } from './site';
import { GeoCityPage } from '@/components/geo/GeoCityPage';

// Builds the three Next.js route exports (generateStaticParams,
// generateMetadata, Page) for one Power BI angle route, e.g. power-bi-consulting.
export function geoAngleRoute(base: string) {
  const resolved = getAngle(base);
  if (!resolved) throw new Error(`Unknown geo angle: ${base}`);
  const angle = resolved;

  function generateStaticParams() {
    return usCities.map((c) => ({ city: c.slug }));
  }

  function generateMetadata({ params }: { params: { city: string } }): Metadata {
    const city = getUSCityBySlug(params.city);
    if (!city) return {};
    const url = `${siteConfig.url}/${base}/${city.slug}`;
    return {
      title: angle.metaTitle(city),
      description: angle.metaDescription(city),
      alternates: { canonical: url },
      openGraph: {
        title: angle.metaTitle(city),
        description: angle.metaDescription(city),
        url,
        type: 'website',
        images: ['/opengraph-image'],
      },
    };
  }

  function Page({ params }: { params: { city: string } }) {
    const city = getUSCityBySlug(params.city);
    if (!city) notFound();
    return <GeoCityPage angle={angle} city={city} />;
  }

  return { generateStaticParams, generateMetadata, Page };
}
