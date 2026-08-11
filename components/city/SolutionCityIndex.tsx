import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import type { LocalSolution } from '@/lib/local-solutions';
import { localSolutions } from '@/lib/local-solutions';
import { getAllCities, citiesByState } from '@/lib/cities-utils';
import { siteConfig } from '@/lib/site';

export function solutionIndexMetadata(sol: LocalSolution): Metadata {
  const url = `${siteConfig.url}/${sol.slug}`;
  return {
    title: `${sol.h1} across the United States`,
    description: `Kadmoon delivers ${sol.label} for companies in 300+ US cities. ${sol.blurb}`,
    alternates: { canonical: url },
    openGraph: {
      title: `${sol.h1} across the United States | Kadmoon`,
      description: `${sol.label} for companies in 300+ US cities. Senior, Microsoft-certified in-house team, US business hours, built in your tenant.`,
      url,
      type: 'website',
    },
  };
}

export function SolutionCityIndex({ sol }: { sol: LocalSolution }) {
  const cities = getAllCities();
  const states = citiesByState();
  const top = cities.slice(0, 12);
  const otherSolutions = localSolutions.filter((s) => s.slug !== sol.slug);

  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden pb-10 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-shell px-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: sol.hub.title }]} />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>{sol.hub.title}</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                {sol.h1} across the United States.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">{sol.hub.sub}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {top.map((c) => (
                <a
                  key={c.slug}
                  href={`/${sol.slug}/${c.slug}`}
                  className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-navy/30 hover:text-ink"
                >
                  {c.name}, {c.stateAbbr}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-shell px-6 pb-16">
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
                        href={`/${sol.slug}/${c.slug}`}
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

        {/* Cross-link the other local solutions */}
        <section className="border-t border-line bg-mist py-14">
          <div className="mx-auto max-w-shell px-6">
            <h2 className="font-display text-display-sm text-ink">Other solutions by city</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {otherSolutions.map((s) => (
                <a
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-navy/30 hover:text-ink"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
