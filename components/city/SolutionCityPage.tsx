import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { BlogCard } from '@/components/BlogCard';
import type { City } from '@/lib/cities';
import type { LocalSolution } from '@/lib/local-solutions';
import { getNearbyCities } from '@/lib/cities-utils';
import { cityIntro, cityWhyLocal, cityIndustryAngle, cityFaqs } from '@/lib/city-content';
import { capabilities } from '@/lib/content';
import { getAllPostMeta } from '@/lib/blog';
import { siteConfig } from '@/lib/site';

export function solutionCityMetadata(sol: LocalSolution, city: City): Metadata {
  const url = `${siteConfig.url}/${sol.slug}/${city.slug}`;
  const title = `${sol.h1} in ${city.name}, ${city.stateAbbr}`;
  return {
    title,
    description: `Kadmoon delivers ${sol.label} for ${city.name}, ${city.state} companies. ${sol.blurb} Get a proposal in a few business days.`,
    keywords: [
      ...sol.keywordStems.map((k) => `${k} ${city.name}`),
      `${sol.label} ${city.name} ${city.stateAbbr}`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Kadmoon`,
      description: `${sol.label} for ${city.name}, ${city.stateAbbr} companies. Built by a senior, Microsoft-certified in-house team, in your tenant.`,
      url,
      type: 'website',
    },
  };
}

export function SolutionCityPage({ sol, city }: { sol: LocalSolution; city: City }) {
  const nearby = getNearbyCities(city, 6);
  const whyLocal = cityWhyLocal(sol, city);
  const faqs = cityFaqs(sol, city);
  const allPosts = getAllPostMeta();
  const related =
    allPosts.length > 0
      ? Array.from({ length: Math.min(3, allPosts.length) }, (_, i) =>
          allPosts[(city.rank * 7 + i * 29) % allPosts.length],
        ).filter((p, i, arr) => arr.findIndex((x) => x.slug === p.slug) === i)
      : [];

  const url = `${siteConfig.url}/${sol.slug}/${city.slug}`;
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: sol.serviceType,
    provider: {
      '@type': 'Organization',
      name: siteConfig.legalName,
      url: siteConfig.url,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.regionCode,
        addressCountry: siteConfig.countryCode,
      },
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: { '@type': 'State', name: city.state },
    },
    url,
    description: `${sol.label} for companies in ${city.name}, ${city.state}.`,
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Hero */}
        <section className="relative overflow-hidden pb-14 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-shell px-6">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: sol.hub.title, href: `/${sol.slug}` },
                { label: `${city.name}, ${city.stateAbbr}` },
              ]}
            />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>{sol.eyebrow} · serving {city.name}, {city.stateAbbr}</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                {sol.h1} in <span className="text-accent">{city.name}</span>.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-2">{cityIntro(sol, city)}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact" size="lg">
                  Talk to an expert <span aria-hidden>→</span>
                </Button>
                <Button href="/dashboards" size="lg" variant="ghost">
                  See dashboards
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {city.industries.map((ind) => (
                  <span
                    key={ind}
                    className="rounded-full border border-line bg-mist px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why local */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-shell px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <div>
                <h2 className="font-display text-display-sm text-ink">{whyLocal.title}</h2>
              </div>
              <div className="space-y-4 text-[15px] leading-relaxed text-ink-2 md:text-base">
                <p>{whyLocal.body}</p>
                <p>{cityIndustryAngle(sol, city)}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-shell px-6">
            <Eyebrow>What we deliver for {city.name} teams</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-display-sm text-ink">
              {capabilities.title}
            </h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
              {capabilities.items.map((item, i) => (
                <article key={item.title} className="bg-paper p-6 md:p-7">
                  <span className="font-mono text-xs text-ink-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Migration callout */}
        <section className="mx-auto max-w-shell px-6 pb-16 md:pb-24">
          <div className="relative overflow-hidden rounded-2xl bg-navy p-8 md:p-12">
            <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
            <div className="relative max-w-2xl">
              <Eyebrow onDark>Signature practice</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm text-white">
                Migrating to Power BI and Microsoft Fabric.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70 md:text-base">
                Moving off Tableau, Qlik, or Cognos, or from Azure Synapse to Microsoft Fabric, is
                our deepest work: full inventory, dependency mapping, and a rebuild on a governed
                model, in waves, with no information blackout. It travels well to any {city.name}
                {' '}team that has outgrown its current BI.
              </p>
              <a
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent/90"
              >
                Talk to an expert <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-display-sm text-ink">
              {sol.label} in {city.name}: common questions
            </h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <h3 className="font-display text-base font-medium text-ink md:text-lg">{f.q}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related reading */}
        {related.length > 0 && (
          <section className="mx-auto max-w-shell px-6 py-16 md:py-20">
            <h2 className="mb-6 font-display text-display-sm text-ink">Related reading</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}

        {/* Nearby cities */}
        {nearby.length > 0 && (
          <section className="mx-auto max-w-shell px-6 pb-24">
            <h2 className="mb-6 font-display text-display-sm text-ink">
              Nearby markets we serve
            </h2>
            <div className="flex flex-wrap gap-2">
              {nearby.map((c) => (
                <a
                  key={c.slug}
                  href={`/${sol.slug}/${c.slug}`}
                  className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-navy/30 hover:text-ink"
                >
                  {c.name}, {c.stateAbbr}
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
