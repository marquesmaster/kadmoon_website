import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Contact } from '@/components/sections/Contact';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { Eyebrow } from '@/components/Eyebrow';
import { siteConfig } from '@/lib/site';
import { usStates, getStateBySlug, getCitiesByStateSlug } from '@/lib/us-cities';
import { ANGLES, US_REGION_CONTEXT } from '@/lib/geo';

export const dynamicParams = false;

export function generateStaticParams() {
  return usStates.map((s) => ({ state: s.slug }));
}

export function generateMetadata({ params }: { params: { state: string } }): Metadata {
  const st = getStateBySlug(params.state);
  if (!st) return {};
  const url = `${siteConfig.url}/power-bi/${st.slug}`;
  const title = `Power BI Consulting in ${st.stateName} | Kadmoon`;
  const description = `Power BI consulting across ${st.stateName}: governed dashboards, semantic models, migration, and Managed Power BI, built in your own Microsoft tenant by a senior US team.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', images: ['/opengraph-image'] },
  };
}

export default function StatePage({ params }: { params: { state: string } }) {
  const st = getStateBySlug(params.state);
  if (!st) notFound();
  const cities = getCitiesByStateSlug(st.slug);
  const ctx = US_REGION_CONTEXT[st.region];

  const faqs = [
    {
      q: `Does Kadmoon work with companies across ${st.stateName}?`,
      a: `Yes. We are a US Microsoft data and analytics firm led by Power BI, and we work with companies across ${st.stateName}, remote or on site as the engagement needs. A senior, US-based team builds and supports your Power BI inside your own Microsoft tenant.`,
    },
    {
      q: `How does a Power BI project start?`,
      a: `Usually with a fixed-scope Power BI assessment that ships first dashboards in about two weeks and produces a scope and a fixed quote. From there you run by project or on Managed Power BI, our monthly subscription.`,
    },
    {
      q: `Who owns the reports and the data?`,
      a: `You do. Everything is built in your own Microsoft tenant with documentation and a full handover. No lock-in.`,
    },
  ];

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <Nav />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <PageHero
          eyebrow={`Power BI · ${st.stateName}`}
          title={`Power BI consulting in ${st.stateName}`}
          breadcrumbs={
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Locations', href: '/locations' },
                { label: st.stateName },
              ]}
            />
          }
        >
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
            Kadmoon is a US Microsoft data and analytics firm led by Power BI. We help {st.stateName}{' '}
            companies turn the data they already run on, across {ctx.industries}, into governed
            dashboards their leaders trust, built in their own Microsoft tenant.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Request a quote <span aria-hidden>→</span>
            </Button>
          </div>
        </PageHero>

        {cities.length > 0 && (
          <section className="mx-auto max-w-shell px-6 py-16 md:py-20">
            <Eyebrow>Cities we serve in {st.stateName}</Eyebrow>
            <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
              Power BI across {st.stateName}.
            </h2>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((c) => (
                <div key={c.slug} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                  <h3 className="font-display text-lg font-semibold text-ink">{c.name}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {ANGLES.map((a) => (
                      <li key={a.base}>
                        <a href={`/${a.base}/${c.slug}`} className="text-[14px] font-medium text-ink-2 hover:text-accent">
                          {a.nav}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="border-t border-line bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-shell px-6">
            <Eyebrow>Power BI services</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-display-sm font-semibold text-ink">
              What we deliver on the Microsoft stack.
            </h2>
            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {ctx.services.map((s) => (
                <li key={s.href} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                  <a href={s.href} className="inline-flex items-center gap-2 text-[15px] font-semibold text-accent">
                    {s.label} <span aria-hidden>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
            Power BI in {st.stateName}, answered.
          </h2>
          <dl className="mt-9 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="font-display text-base font-medium tracking-[-0.01em] text-ink md:text-lg">{f.q}</dt>
                <dd className="mt-3 text-[15px] leading-relaxed text-ink-2">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
