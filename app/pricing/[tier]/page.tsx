import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { PageHero } from '@/components/sections/PageHero';
import { pricingDetail } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export function generateStaticParams() {
  return Object.keys(pricingDetail).map((tier) => ({ tier }));
}

export function generateMetadata({ params }: { params: { tier: string } }): Metadata {
  const d = pricingDetail[params.tier];
  if (!d) return {};
  const url = `${siteConfig.url}/pricing/${d.slug}`;
  return {
    title: `${d.name}: scope and deliverables | Kadmoon`,
    description: d.summary,
    alternates: { canonical: url },
    openGraph: { title: `${d.name} | Kadmoon`, description: d.summary, url, type: 'website', images: ['/opengraph-image'] },
  };
}

function List({ label, items, dot = 'accent' }: { label: string; items: string[]; dot?: 'accent' | 'navy' }) {
  return (
    <div>
      <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">{label}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink">
            <span
              aria-hidden
              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot === 'accent' ? 'bg-accent' : 'bg-navy'}`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingTierPage({ params }: { params: { tier: string } }) {
  const d = pricingDetail[params.tier];
  if (!d) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: d.name,
    provider: { '@type': 'Organization', name: siteConfig.legalName, url: siteConfig.url },
    areaServed: { '@type': 'Country', name: siteConfig.country },
    description: d.summary,
    url: `${siteConfig.url}/pricing/${d.slug}`,
    offers: { '@type': 'Offer', price: d.price, priceCurrency: 'USD' },
  };

  return (
    <>
      <Nav />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <PageHero
          eyebrow="Pricing"
          title={d.name}
          breadcrumbs={
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Pricing', href: '/pricing' },
                { label: d.name },
              ]}
            />
          }
        >
          <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className="font-display text-3xl font-bold tracking-[-0.03em] text-ink">{d.price}</span>
            {d.unit && <span className="text-[14px] text-ink-3">{d.unit}</span>}
            <span className="rounded-full border border-line bg-mist px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-2">
              {d.timeline}
            </span>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">{d.summary}</p>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-3">
            <span className="font-semibold text-ink-2">Best for:</span> {d.forWho}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={siteConfig.bookingUrl} size="lg">
              Book a 30-minute call <span aria-hidden>→</span>
            </Button>
            <Button href="/pricing" size="lg" variant="ghost">
              All pricing
            </Button>
          </div>
        </PageHero>

        {/* What you receive + included */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-shell px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <List label="What you receive" items={d.receive} />
              <List label="What the price includes" items={d.included} dot="navy" />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-shell px-6 py-16 md:py-20">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 font-display text-display-sm text-ink">What to expect, step by step.</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {d.process.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-line bg-paper p-6 shadow-card">
                <span className="font-display text-2xl font-semibold tracking-[-0.03em] text-navy/20">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Ownership + acceptance + not included */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-shell px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <Eyebrow>Ownership and your tenant</Eyebrow>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-2">{d.ownership}</p>
                <div className="mt-8">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
                    How you sign off
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {d.acceptance.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl border border-line bg-paper p-6 shadow-card">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
                  Not included
                </h3>
                <ul className="mt-4 space-y-3">
                  {d.notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-ink-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-shell px-6 py-16 text-center md:py-20">
          <h2 className="font-display text-display-sm text-ink">Start with a 30-minute call.</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            We will look at how your team reports today and confirm the scope and the price.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={siteConfig.bookingUrl} size="lg">
              Book a 30-minute call <span aria-hidden>→</span>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
