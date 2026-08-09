import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { CaseDashboard } from '@/components/cases/CaseDashboard';
import { getDashboard } from '@/lib/cases/dashboards';
import { caseStudies } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = caseStudies.find((x) => x.slug === params.slug);
  if (!c) return {};
  const url = `${siteConfig.url}/cases/${c.slug}`;
  return {
    title: `${c.title} | Kadmoon case study`,
    description: c.summary,
    alternates: { canonical: url },
    openGraph: { title: c.title, description: c.summary, url, type: 'article' },
  };
}

export default function CaseDetailPage({ params }: { params: { slug: string } }) {
  const c = caseStudies.find((x) => x.slug === params.slug);
  if (!c) notFound();
  const others = caseStudies.filter((x) => x.slug !== c.slug).slice(0, 3);
  const dash = getDashboard(c.slug);
  const kpis = dash?.kpis.slice(0, 4) ?? [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.title,
    description: c.summary,
    author: { '@type': 'Organization', name: siteConfig.legalName, url: siteConfig.url },
    publisher: { '@type': 'Organization', name: siteConfig.legalName, url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/cases/${c.slug}`,
    articleSection: c.sector,
  };

  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="relative overflow-hidden pb-10 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-3xl px-6">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Cases', href: '/cases' },
                { label: c.title },
              ]}
            />
            <div className="mt-6">
              <Eyebrow>{c.sector}</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">{c.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">{c.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-mist px-3 py-1 font-mono text-[11px] text-ink-2"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {kpis.length > 0 && (
                <div className="mt-8">
                  <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {kpis.map((k) => (
                      <div
                        key={k.label}
                        className="rounded-xl border border-line bg-paper p-4 shadow-card"
                      >
                        <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
                          {k.label}
                        </dt>
                        <dd className="mt-1 font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                          {k.value}
                        </dd>
                        <dd className="mt-1 text-[12px] leading-snug text-ink-2">{k.sub}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
                    Illustrative figures · fictitious client · under NDA
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {c.result && (
          <section className="mx-auto max-w-3xl px-6 pb-4">
            <div className="rounded-2xl border-l-2 border-accent bg-mist p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">Result</p>
              <p className="mt-2 text-lg leading-relaxed text-ink">{c.result}</p>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-3xl px-6 py-10">
          <div className="prose">
            <h2>The challenge</h2>
            <p>{c.challenge}</p>

            <h2>What we built</h2>
            <p>{c.build}</p>
            <ul>
              {c.whatWeBuilt.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <h2>Outcomes</h2>
            <ul>
              {c.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Delivered dashboard (illustrative demo) */}
        {getDashboard(c.slug) && (
          <section className="mx-auto max-w-shell px-6 pb-8">
            <h2 className="mb-4 font-display text-display-sm text-ink">The dashboard we delivered</h2>
            <div className="overflow-x-auto rounded-2xl border border-line">
              <CaseDashboard slug={c.slug} />
            </div>
            <p className="mt-3 text-[13px] text-ink-3">
              Illustrative dashboard with the structure delivered on the project. Client names and
              figures are fictitious and under NDA.
            </p>
          </section>
        )}

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <div className="relative overflow-hidden rounded-2xl bg-navy p-8 md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
            <div className="relative">
              <h2 className="font-display text-2xl font-semibold text-white">
                Want a dashboard like this on your data?
              </h2>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/70">
                Tell us your scenario and get a diagnosis and a proposal with an investment range
                within a few business days.
              </p>
              <a
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent/90"
              >
                Start a project <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* More cases */}
        {others.length > 0 && (
          <section className="mx-auto max-w-shell px-6 pb-20">
            <h2 className="mb-6 font-display text-display-sm text-ink">More case studies</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {others.map((o) => (
                <a
                  key={o.slug}
                  href={`/cases/${o.slug}`}
                  className="group flex flex-col rounded-2xl border border-line bg-paper p-6 shadow-card transition-all hover:-translate-y-0.5"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                    {o.sector}
                  </span>
                  <span className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-accent">
                    {o.title}
                  </span>
                  <span className="mt-2 text-[14px] leading-relaxed text-ink-2">{o.summary}</span>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
