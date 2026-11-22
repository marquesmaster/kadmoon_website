import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import { pricing } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Power BI Consulting Pricing | Kadmoon',
  description:
    'Fixed, published prices for Power BI and Microsoft Fabric: a $5,000 assessment, dashboard builds from $20,000, Fabric data platforms from $45,000, and Managed Power BI from $3,500 a month. Built in your own Microsoft tenant.',
  alternates: { canonical: `${siteConfig.url}/pricing` },
  openGraph: { url: `${siteConfig.url}/pricing`, type: 'website', images: ['/opengraph-image'] },
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          breadcrumbs={<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]} />}
        >
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">{pricing.lead}</p>
        </PageHero>

        {/* Tiers */}
        <section className="mx-auto max-w-shell px-6 py-14 md:py-20">
          <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2">
            {pricing.tiers.map((t, i) => (
              <Reveal
                as="div"
                key={t.name}
                delay={(i % 4) * 70}
                className={`flex flex-col rounded-2xl border p-6 ${
                  t.featured
                    ? 'border-accent/30 bg-white shadow-card-hover ring-1 ring-accent/20'
                    : 'border-line bg-white shadow-card'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3">
                    {t.best}
                  </span>
                  {t.featured && (
                    <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-white">
                      Popular
                    </span>
                  )}
                </div>
                <h2 className="mt-3 font-display text-lg font-semibold text-ink">{t.name}</h2>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-display text-3xl font-bold tracking-[-0.03em] text-ink">
                    {t.price}
                  </span>
                  {t.unit && <span className="text-[13px] text-ink-3">{t.unit}</span>}
                </div>
                <span className="mt-1.5 inline-block rounded-full border border-line bg-mist px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-2">
                  {t.timeline}
                </span>
                <ul className="mt-5 flex-1 space-y-3">
                  {t.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink-2"
                    >
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 flex-none rounded-sm bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-3">
                  <Button
                    href={siteConfig.bookingUrl}
                    variant={t.featured ? 'primary' : 'ghost'}
                    className="w-full justify-center"
                  >
                    {t.cta ?? 'Book a 30-minute call'}
                  </Button>
                  <a
                    href={`/pricing/${t.slug}`}
                    className="flex items-center justify-center gap-1.5 text-[13px] font-semibold text-accent hover:underline"
                  >
                    See what&apos;s included <span aria-hidden>→</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-[14px] leading-relaxed text-ink-3">{pricing.licenseNote}</p>
        </section>

        {/* Pricing FAQ */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
              Pricing questions
            </span>
            <h2 className="mt-4 font-display text-display-sm text-ink">Straight answers.</h2>
            <dl className="mt-10 divide-y divide-line border-y border-line">
              {pricing.faq.map((item) => (
                <div key={item.q} className="py-6">
                  <dt className="font-display text-base font-medium tracking-[-0.01em] text-ink md:text-lg">
                    {item.q}
                  </dt>
                  <dd className="mt-3 text-[15px] leading-relaxed text-ink-2">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative overflow-hidden bg-navy">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{ backgroundImage: 'radial-gradient(900px 440px at 50% 120%, rgba(139,92,246,.3), transparent 60%)' }}
          />
          <div className="relative mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
            <h2 className="font-display text-display-md font-semibold text-white">{pricing.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">{pricing.cta.body}</p>
            <div className="mt-8 flex justify-center">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent/90"
              >
                Book a 30-minute call <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
