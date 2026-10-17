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
  title: 'Pricing | Scoped and quoted per engagement',
  description:
    'How Kadmoon prices foreign-trade analytics: a fixed-scope trade data assessment, a trade intelligence subscription scoped to your data and decisions, and an optional managed Microsoft add-on. Quoted per engagement.',
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
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Request a quote <span aria-hidden>→</span>
            </Button>
          </div>
        </PageHero>

        {/* The model */}
        <section className="mx-auto max-w-shell px-6 py-16 md:py-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
            How it works
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-display-sm text-ink">
            Three parts, so you only pay for what you use.
          </h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {pricing.model.map((m, i) => (
              <li key={m.name} className="flex flex-col rounded-2xl border border-line bg-paper p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-semibold tracking-[-0.03em] text-navy/20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="rounded-full border border-line bg-mist px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-2">
                    {m.meta}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{m.name}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{m.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Subscription scopes */}
        <section className="bg-mist py-16 md:py-24">
          <div className="mx-auto max-w-shell px-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
              Subscription scopes
            </span>
            <h2 className="mt-4 max-w-2xl font-display text-display-sm text-ink">
              Pick the scope; we quote it to your data.
            </h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {pricing.scopes.map((s, i) => (
                <Reveal
                  as="div"
                  key={s.name}
                  delay={(i % 3) * 80}
                  className={`flex flex-col rounded-2xl border p-7 ${
                    s.featured
                      ? 'border-accent/30 bg-white shadow-card-hover ring-1 ring-accent/20'
                      : 'border-line bg-white shadow-card'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-semibold text-ink">{s.name}</h3>
                    {s.featured && (
                      <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white">
                        Most chosen
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-[13px] text-ink-3">{s.best}</p>
                  <ul className="mt-5 flex-1 space-y-3">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink-2">
                        <span aria-hidden className="mt-1.5 h-1.5 w-1.5 flex-none rounded-sm bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <Button href="/contact" variant={s.featured ? 'primary' : 'ghost'} className="w-full justify-center">
                      Request a quote {s.featured && <span aria-hidden>→</span>}
                    </Button>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-[14px] leading-relaxed text-ink-3">
              Every scope runs in your own tenant, with managed Microsoft (Fabric, Power BI, Azure) as
              an optional add-on billed on the same invoice.
            </p>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
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
        </section>

        {/* Closing CTA */}
        <section className="relative overflow-hidden bg-navy">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{ backgroundImage: 'radial-gradient(900px 440px at 50% 120%, rgba(20,92,230,.3), transparent 60%)' }}
          />
          <div className="relative mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
            <h2 className="font-display text-display-md font-semibold text-white">{pricing.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">{pricing.cta.body}</p>
            <div className="mt-8 flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent/90"
              >
                Request a quote <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
