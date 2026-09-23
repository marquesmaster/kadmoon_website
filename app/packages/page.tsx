import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/Button';
import { SubscriptionPlans } from '@/components/sections/SubscriptionPlans';
import { WhyKadmoon } from '@/components/sections/WhyKadmoon';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Plans | Your Microsoft data team on subscription',
  description:
    'A dedicated Power BI, Fabric, and Power Platform team on a monthly subscription. Defined capacity, a clear SLA, unlimited requests within your hours, built in your tenant. Plans from $15k/mo on a 12-month term.',
  alternates: { canonical: `${siteConfig.url}/packages` },
};

const steps = [
  {
    n: '01',
    t: 'Assessment',
    d: 'A paid 2–3 week assessment proves value on a small, fixed scope before you commit.',
  },
  {
    n: '02',
    t: 'Choose a tier',
    d: 'Pick the capacity and SLA that fit. A 12-month term, with a discount for longer commitments.',
  },
  {
    n: '03',
    t: 'We deliver',
    d: 'A dedicated team works your business hours, unlimited within your monthly pool of hours.',
  },
  {
    n: '04',
    t: 'You own it',
    d: 'Everything is built in your own tenant, documented and handed over. No lock-in.',
  },
];

export default function PackagesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-paper">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-60" aria-hidden />
          <div className="relative mx-auto max-w-4xl px-6 pb-14 pt-36 md:pt-40">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mist px-3.5 py-2 font-mono text-sm tracking-[0.04em] text-ink">
              <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Subscription
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-display-lg font-semibold text-ink">
              Your Microsoft data team, on subscription.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
              A dedicated Power BI, Fabric, and Power Platform team working your business hours, for a
              fixed monthly fee. A defined capacity, a clear SLA, and unlimited requests within your
              hours. The output of a full team, for less than the overhead of one in-house hire.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={siteConfig.bookingsUrl} size="lg">
                Book a meeting <span aria-hidden>→</span>
              </Button>
              <Button href="#plans" size="lg" variant="ghost">
                See plans
              </Button>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-y border-line bg-mist py-14">
          <div className="mx-auto max-w-shell px-6">
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n}>
                  <div className="font-sans text-sm font-semibold text-accent">{s.n}</div>
                  <h3 className="mt-2.5 font-display text-lg font-semibold text-ink">{s.t}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription tiers (client component: term toggle) */}
        <SubscriptionPlans />

        {/* Why Kadmoon */}
        <WhyKadmoon />

        {/* Dark CTA */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              backgroundImage:
                'radial-gradient(900px 500px at 50% 120%, rgba(255,106,26,.2), transparent 60%)',
            }}
          />
          <div className="relative mx-auto max-w-2xl px-6 py-28 text-center">
            <h2 className="font-display text-display-md font-semibold text-white">
              Not sure which tier fits?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/65">
              Start with the assessment. You leave with a clear picture of your data estate and the
              right tier to run it, at a fixed, low-commitment scope.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Button href={siteConfig.bookingsUrl} size="lg">
                Book a meeting <span aria-hidden>→</span>
              </Button>
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-[15px] font-semibold text-paper transition-colors hover:border-white/50 hover:bg-white/5"
              >
                Explore services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
