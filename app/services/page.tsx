import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal } from '@/components/Reveal';
import { services } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services — Custom software capabilities',
  description:
    'Bespoke enterprise systems, SaaS platforms, mobile apps, integrations, data & AI, and legacy modernization, built by a senior in-house team and owned by you.',
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default function ServicesIndex() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden pb-10 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-shell px-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>What we build</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                Six competencies, one delivery.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                From the core system to the model in production. Each capability is spec’d with
                measurable acceptance criteria and delivered in validated two-week sprints.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-shell px-6 pb-24">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal
                as="article"
                key={s.slug}
                delay={(i % 2) * 80}
                className="group flex flex-col rounded-2xl border border-line bg-paper p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-8"
              >
                <span className="font-mono text-xs text-ink-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                  {s.title}
                </h2>
                <p className="mt-2 text-[15px] font-medium text-navy">{s.tagline}</p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-2">{s.intro}</p>
                <a
                  href={`/services/${s.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-navy"
                >
                  Explore
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
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
