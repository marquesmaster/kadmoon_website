import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { getAllCities, citiesByState } from '@/lib/cities-utils';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Custom software development across the United States',
  description:
    'Kadmoon builds bespoke enterprise systems, SaaS platforms, and AI for companies in 300+ US cities. Find custom software development in your market.',
  alternates: { canonical: `${siteConfig.url}/custom-software-development` },
  openGraph: {
    title: 'Custom software development across the United States — Kadmoon',
    description:
      'Bespoke software for companies in 300+ US cities. Senior in-house team, US business hours, code you own.',
    url: `${siteConfig.url}/custom-software-development`,
    type: 'website',
  },
};

export default function LocationsIndex() {
  const cities = getAllCities();
  const states = citiesByState();
  const top = cities.slice(0, 12);

  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden pb-10 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-shell px-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations' }]} />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>Locations</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                Custom software development across the United States.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                Kadmoon is based in Austin, TX and works with companies in {cities.length}+ US
                markets. Bespoke enterprise systems, SaaS platforms, mobile apps, and AI, built by a
                senior in-house team on US business hours. Find your city below.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {top.map((c) => (
                <a
                  key={c.slug}
                  href={`/custom-software-development/${c.slug}`}
                  className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-navy/30 hover:text-ink"
                >
                  {c.name}, {c.stateAbbr}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-shell px-6 pb-24">
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {states.map((s) => (
              <div key={s.state}>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
                  {s.state}
                </h2>
                <ul className="mt-3 space-y-2 border-t border-line pt-3">
                  {s.cities.map((c) => (
                    <li key={c.slug}>
                      <a
                        href={`/custom-software-development/${c.slug}`}
                        className="text-[15px] text-ink-2 transition-colors hover:text-accent"
                      >
                        {c.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
