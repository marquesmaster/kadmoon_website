import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { caseStudies, credibility } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Case studies | custom software our team has delivered',
  description:
    'Real systems Kadmoon\'s engineering team has built and shipped: public-sector delivery at scale, an education platform, fleet management, interoperable health records, foreign-trade operations, and enterprise migration.',
  keywords: [
    'software house case studies',
    'custom software case studies',
    'enterprise software portfolio',
    'kadmoon cases',
  ],
  alternates: { canonical: `${siteConfig.url}/cases` },
  openGraph: {
    title: 'Kadmoon case studies',
    description:
      'Real systems our engineering team has built and shipped, across public sector, education, logistics, healthcare, and trade.',
    url: `${siteConfig.url}/cases`,
    type: 'website',
  },
};

export default function CasesPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden pb-10 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-shell px-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cases' }]} />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>Case studies</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                Systems our team has built and shipped.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                {credibility.text}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-shell px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((c) => (
              <a
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-card transition-all hover:-translate-y-0.5"
              >
                <div className="relative flex h-28 items-end bg-navy p-6">
                  <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
                  <span className="relative font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">
                    {c.sector}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink group-hover:text-accent">
                    {c.title}
                  </h2>

                  <p className="mt-4 text-[13px] font-medium uppercase tracking-[0.08em] text-ink-3">
                    The challenge
                  </p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{c.challenge}</p>

                  <p className="mt-4 text-[13px] font-medium uppercase tracking-[0.08em] text-ink-3">
                    What we built
                  </p>
                  <p className="mt-1.5 flex-1 text-[15px] leading-relaxed text-ink-2">{c.build}</p>

                  {c.result && (
                    <div className="mt-5 rounded-xl border-l-2 border-accent bg-mist p-4">
                      <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-navy">
                        Result
                      </p>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-ink">{c.result}</p>
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-line bg-mist px-3 py-1 font-mono text-[11px] text-ink-2"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Read the case study{' '}
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-display text-display-sm text-ink">
            Want a system like these built for your operation?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            Tell us about your project and get a technical proposal within one business day.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/#contact" size="lg">
              Start a project <span aria-hidden>→</span>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
