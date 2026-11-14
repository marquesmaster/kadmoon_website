import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Contact } from '@/components/sections/Contact';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { siteConfig } from '@/lib/site';
import { usCities, usStates, type USRegion } from '@/lib/us-cities';

export const metadata: Metadata = {
  title: 'Power BI Consulting by Location | Kadmoon',
  description:
    'Power BI consulting across the United States: find governed dashboards, semantic models, migration, and Managed Power BI for your state and city, delivered in your own Microsoft tenant.',
  alternates: { canonical: `${siteConfig.url}/locations` },
  openGraph: { url: `${siteConfig.url}/locations`, type: 'website', images: ['/opengraph-image'] },
};

const REGIONS: USRegion[] = ['Northeast', 'South', 'Midwest', 'West'];

export default function LocationsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Locations · United States"
          title="Power BI consulting across the US"
          breadcrumbs={<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations' }]} />}
        >
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
            Kadmoon is a US Microsoft data and analytics firm led by Power BI. We work with companies
            across the country, remote or on site, and deliver everything in your own Microsoft
            tenant. Find your state or city below.
          </p>
        </PageHero>

        {REGIONS.map((region) => {
          const states = usStates.filter((s) => s.region === region);
          if (states.length === 0) return null;
          return (
            <section key={region} className="border-b border-line py-14 md:py-16">
              <div className="mx-auto max-w-shell px-6">
                <Eyebrow>{region}</Eyebrow>
                <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {states.map((st) => {
                    const cities = usCities.filter((c) => c.stateName === st.stateName);
                    return (
                      <div key={st.slug}>
                        <a
                          href={`/power-bi/${st.slug}`}
                          className="font-display text-lg font-semibold text-ink hover:text-accent"
                        >
                          {st.stateName}
                        </a>
                        <ul className="mt-2.5 space-y-1.5">
                          {cities.map((c) => (
                            <li key={c.slug}>
                              <a
                                href={`/power-bi-consulting/${c.slug}`}
                                className="text-[14px] text-ink-2 hover:text-accent"
                              >
                                {c.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}

        <Contact />
      </main>
      <Footer />
    </>
  );
}
