import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Contact } from '@/components/sections/Contact';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { Eyebrow } from '@/components/Eyebrow';
import { siteConfig } from '@/lib/site';
import { usCities, type USCity } from '@/lib/us-cities';
import { ANGLES, US_REGION_CONTEXT, US_TIER_LABEL, getCityLocal, type Angle } from '@/lib/geo';

function regionLabel(region: USCity['region']): string {
  return region === 'Northeast' ? 'the Northeast'
    : region === 'West' ? 'the West'
    : region === 'South' ? 'the South'
    : 'the Midwest';
}

export function GeoCityPage({ angle, city }: { angle: Angle; city: USCity }) {
  const url = `${siteConfig.url}/${angle.base}/${city.slug}`;
  const ctx = US_REGION_CONTEXT[city.region];
  const local = getCityLocal(city.slug);
  const faqs = [...angle.faqs(city), ...(local?.faq ? [local.faq] : [])];

  const nearby = [
    ...usCities.filter((c) => c.slug !== city.slug && c.stateName === city.stateName),
    ...usCities.filter((c) => c.slug !== city.slug && c.stateName !== city.stateName && c.region === city.region),
  ].slice(0, 6);

  const otherAngles = ANGLES.filter((a) => a.base !== angle.base);

  const economy =
    local?.economy ??
    `${city.name} is ${US_TIER_LABEL[city.tier]}, with demand driven by ${ctx.industries}. Across those sectors the reporting usually lives in separate ERP, CRM, and line-of-business systems that rarely agree. Kadmoon builds one governed Power BI model on top of them, inside your own Microsoft tenant, so leaders in ${city.name} work from the same trusted numbers.`;

  const anchors =
    local?.anchors ??
    ctx.services.map((s) => ({ label: s.label, note: `Delivered on a governed model in your own Microsoft tenant.` }));

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${angle.noun} in ${city.name}, ${city.state}`,
    serviceType: angle.noun,
    provider: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    areaServed: { '@type': 'City', name: `${city.name}, ${city.state}` },
    url,
    description: angle.metaDescription(city),
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <Nav />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

        <PageHero
          eyebrow={`${angle.nav} · ${city.name}, ${city.state}`}
          title={angle.h1(city)}
          breadcrumbs={
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Locations', href: '/locations' },
                { label: `${city.name}, ${city.state}` },
              ]}
            />
          }
        >
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">{angle.lead(city)}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/contact" size="lg">
              Request a quote <span aria-hidden>→</span>
            </Button>
            <Button href="/services/power-bi" size="lg" variant="ghost">
              See Power BI services
            </Button>
          </div>
        </PageHero>

        {/* Local economy + sector anchors */}
        <section className="mx-auto max-w-shell px-6 py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl">
              <Eyebrow>Power BI for {city.name} businesses</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
                Built around how {city.name} runs.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-2">{economy}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                We read from the systems you already run, SQL Server, Dynamics 365, SAP, Oracle,
                NetSuite, Salesforce, Excel, SharePoint, and your APIs, and deliver the analytics on
                Power BI, the Power Platform, and Microsoft Fabric. A senior, US-based team works
                across {regionLabel(city.region)}, remote or on site as the engagement needs.
              </p>
            </div>
            <div className="grid content-start gap-4">
              {anchors.map((a) => (
                <div key={a.label} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                  <h3 className="font-display text-base font-semibold text-ink">{a.label}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{a.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we deliver */}
        <section className="border-y border-line bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-shell px-6">
            <Eyebrow>{angle.deliverTitle}</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-display-sm font-semibold text-ink">
              What {city.name} teams get from Kadmoon.
            </h2>
            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {angle.deliver.map((d) => (
                <li key={d} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-card">
                  <span aria-hidden className="mt-1.5 h-1.5 w-1.5 flex-none rounded-sm bg-accent" />
                  <span className="text-[15px] leading-relaxed text-ink-2">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How we work */}
        <section className="mx-auto max-w-shell px-6 py-16 md:py-20">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-display-sm font-semibold text-ink">
            Start with a two-week assessment, then run it your way.
          </h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              { n: '01', t: '2-Week Power BI Assessment', b: 'A short, fixed-scope first project that maps your decisions and data and ships first dashboards in about two weeks, with a plan and a fixed quote.' },
              { n: '02', t: 'By project or Managed Power BI', b: 'Run a fixed-scope build with milestone billing, or move to Managed Power BI, our monthly subscription, where a senior team runs and evolves it.' },
              { n: '03', t: 'In your own tenant, yours to own', b: 'Everything is built in your own Microsoft tenant with governance and a full handover. You own the model, the reports, and the data. No lock-in.' },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-line bg-white p-7 shadow-card">
                <div className="font-display text-3xl font-semibold tracking-[-0.03em] text-navy/20">{s.n}</div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{s.t}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink-2">{s.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other Power BI services here + nearby cities */}
        <section className="border-t border-line bg-paper py-16 md:py-20">
          <div className="mx-auto max-w-shell px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <Eyebrow>More in {city.name}</Eyebrow>
                <h2 className="mt-4 font-display text-xl font-semibold text-ink">
                  Other Power BI services in {city.name}
                </h2>
                <ul className="mt-5 space-y-2.5">
                  {otherAngles.map((a) => (
                    <li key={a.base}>
                      <a
                        href={`/${a.base}/${city.slug}`}
                        className="inline-flex items-center gap-2 text-[15px] font-semibold text-accent"
                      >
                        {a.nav} in {city.name}
                        <span aria-hidden>→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {nearby.length > 0 && (
                <div>
                  <Eyebrow>Nearby</Eyebrow>
                  <h2 className="mt-4 font-display text-xl font-semibold text-ink">
                    {angle.nav} near {city.name}
                  </h2>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
                    {nearby.map((c) => (
                      <li key={c.slug}>
                        <a href={`/${angle.base}/${c.slug}`} className="text-[15px] font-medium text-ink-2 hover:text-accent">
                          {c.name}, {c.state}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a href="/locations" className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-accent">
                    All locations <span aria-hidden>→</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
            {angle.nav} in {city.name}, answered.
          </h2>
          <dl className="mt-9 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <div key={f.question} className="py-6">
                <dt className="font-display text-base font-medium tracking-[-0.01em] text-ink md:text-lg">
                  {f.question}
                </dt>
                <dd className="mt-3 text-[15px] leading-relaxed text-ink-2">{f.answer}</dd>
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
