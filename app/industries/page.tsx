import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal } from '@/components/Reveal';
import { industryPages } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Industries | Custom software for 10+ sectors',
  description:
    'Custom software for trade & supply chain, logistics, financial services, healthcare, retail, manufacturing, education, and government. Built for each sector’s requirements.',
  alternates: { canonical: `${siteConfig.url}/industries` },
};

export default function IndustriesIndex() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden pb-10 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-shell px-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Industries' }]} />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>Industries</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                Custom software for 10+ sectors.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                Every vertical carries its own regulatory, integration, and UX requirements. Trade
                and supply chain is our flagship practice; we’ve shipped across the rest.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-shell px-6 pb-24">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industryPages.map((ind, i) => (
              <Reveal
                as="article"
                key={ind.slug}
                delay={(i % 3) * 70}
                className={`flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  ind.flagship
                    ? 'border-navy/15 bg-navy text-white shadow-card-hover sm:col-span-2'
                    : 'border-line bg-paper shadow-card hover:shadow-card-hover'
                }`}
              >
                {ind.flagship && (
                  <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white">
                    Flagship
                  </span>
                )}
                <h2
                  className={`font-display text-xl font-semibold tracking-[-0.02em] ${
                    ind.flagship ? 'text-white' : 'text-ink'
                  }`}
                >
                  {ind.name}
                </h2>
                <p
                  className={`mt-3 flex-1 text-[15px] leading-relaxed ${
                    ind.flagship ? 'text-white/75' : 'text-ink-2'
                  }`}
                >
                  {ind.intro}
                </p>
                <a
                  href={`/industries/${ind.slug}`}
                  className={`mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] ${
                    ind.flagship ? 'text-white' : 'text-navy'
                  }`}
                >
                  Explore <span aria-hidden>→</span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
