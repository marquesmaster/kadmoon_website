import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { solutions } from '@/lib/solutions';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Software Solutions | Custom ERP, CRM, WMS, and more | Kadmoon',
  description:
    'Custom software solutions Kadmoon builds and you own: ERP, CRM, warehouse and fleet management, hospital and school management, and more, shaped around your process.',
  alternates: { canonical: `${siteConfig.url}/solutions` },
  openGraph: {
    title: 'Kadmoon software solutions',
    description:
      'Custom software solutions built around your process: ERP, CRM, WMS, fleet, healthcare, and education systems you own.',
    url: `${siteConfig.url}/solutions`,
    type: 'website',
  },
};

export default function SolutionsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden pb-10 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-shell px-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions' }]} />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>Solutions</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                Custom software solutions, built around your process.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                These are the systems we build most often. Each one is bespoke, shaped around how
                your team actually works, and delivered as code and infrastructure you own. If your
                need is not listed, we still build it.
              </p>
              <div className="mt-8">
                <Button href="/#contact" size="lg">
                  Start a project <span aria-hidden>→</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-shell px-6 pb-20">
          <div className="grid gap-5 md:grid-cols-2">
            {solutions.map((s) => (
              <a
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-paper p-7 shadow-card transition-all hover:-translate-y-0.5 md:p-8"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                  {s.category}
                </span>
                <h2 className="mt-2 font-display text-xl font-semibold text-ink group-hover:text-accent">
                  {s.name}
                </h2>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-2">{s.heroIntro}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Explore{' '}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
