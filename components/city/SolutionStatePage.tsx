import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import type { StateGroup } from '@/lib/cities-utils';
import type { LocalSolution } from '@/lib/local-solutions';
import { localSolutions } from '@/lib/local-solutions';
import { stateIntro, stateWhyLocal, stateFaqs, cityIndustryAngle } from '@/lib/city-content';
import { siteConfig } from '@/lib/site';

export function SolutionStatePage({ sol, st }: { sol: LocalSolution; st: StateGroup }) {
  const whyLocal = stateWhyLocal(sol, st);
  const faqs = stateFaqs(sol, st);
  const otherSolutions = localSolutions.filter((s) => s.slug !== sol.slug);
  const url = `${siteConfig.url}/${sol.slug}/${st.slug}`;

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
    areaServed: { '@type': 'State', name: st.state },
    url,
    description: `${sol.label} for companies across ${st.state}.`,
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
                { label: st.state },
              ]}
            />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>{sol.eyebrow} · serving {st.state}</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                {sol.h1} in <span className="text-accent">{st.state}</span>.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-2">{stateIntro(sol, st)}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact" size="lg">
                  Talk to an expert <span aria-hidden>→</span>
                </Button>
                <Button href={`/${sol.slug}`} size="lg" variant="ghost">
                  All markets
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why + industry angle */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-shell px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <h2 className="font-display text-display-sm text-ink">{whyLocal.title}</h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-ink-2 md:text-base">
                <p>{whyLocal.body}</p>
                <p>{cityIndustryAngle(sol, st.cities[0])}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cities in this state */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-shell px-6">
            <Eyebrow>{sol.label} across {st.state}</Eyebrow>
            <h2 className="mt-4 font-display text-display-sm text-ink">
              {st.cities.length} {st.state} markets we serve
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {st.cities.map((c) => (
                <a
                  key={c.slug}
                  href={`/${sol.slug}/${c.slug}`}
                  className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-navy/30 hover:text-ink"
                >
                  {c.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-display-sm text-ink">
              {sol.label} in {st.state}: common questions
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

        {/* Other solutions in this state */}
        <section className="mx-auto max-w-shell px-6 py-16">
          <h2 className="mb-6 font-display text-display-sm text-ink">
            Other solutions in {st.state}
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherSolutions.map((s) => (
              <a
                key={s.slug}
                href={`/${s.slug}/${st.slug}`}
                className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-navy/30 hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
