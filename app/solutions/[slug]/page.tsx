import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { solutions, getSolution } from '@/lib/solutions';
import { siteConfig } from '@/lib/site';

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getSolution(params.slug);
  if (!s) return {};
  const url = `${siteConfig.url}/solutions/${s.slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: url },
    openGraph: { title: s.tagline, description: s.metaDescription, url, type: 'website' },
  };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const s = getSolution(params.slug);
  if (!s) notFound();

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: s.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />

        <section className="relative overflow-hidden pb-10 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-3xl px-6">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Solutions', href: '/solutions' },
                { label: s.name },
              ]}
            />
            <div className="mt-6">
              <Eyebrow>{s.eyebrow}</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">{s.tagline}</h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">{s.heroIntro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact" size="lg">
                  Start a project <span aria-hidden>→</span>
                </Button>
                <Button href="/cases" size="lg" variant="ghost">
                  See our work
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="mx-auto max-w-3xl px-6 pb-4">
          <div className="prose">
            <h2>The problem</h2>
            <p>{s.problem}</p>
            <h2>How we build it</h2>
            <p>{s.approach}</p>
          </div>
        </section>

        {/* Highlights */}
        <section className="mx-auto max-w-shell px-6 py-12">
          <div className="grid gap-5 sm:grid-cols-2">
            {s.highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-line bg-paper p-6 shadow-card">
                <h3 className="font-display text-lg font-semibold text-ink">{h.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{h.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Capability modules */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-shell px-6">
            <h2 className="font-display text-display-sm text-ink">What we build</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {s.modules.map((m) => (
                <div key={m.name} className="rounded-2xl border border-line bg-paper p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{m.name}</h3>
                  <ul className="mt-3 space-y-2">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink-2">
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it is for */}
        <section className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="font-display text-display-sm text-ink">Who it is for</h2>
          <ul className="mt-6 space-y-3">
            {s.whoFor.map((w) => (
              <li key={w} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {w}
              </li>
            ))}
          </ul>
          {s.related && s.related.length > 0 && (
            <div className="mt-8 border-t border-line pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">Related</p>
              <ul className="mt-3 space-y-2">
                {s.related.map((r) => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      className="text-[15px] font-medium text-ink transition-colors hover:text-accent"
                    >
                      {r.label} <span aria-hidden>→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* FAQ */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-display-sm text-ink">Frequently asked questions</h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              {s.faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <h3 className="font-display text-base font-medium text-ink md:text-lg">{f.q}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-display text-display-sm text-ink">Planning a {s.name.toLowerCase()} project?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            Tell us about your operation and get a technical proposal within one business day.
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
