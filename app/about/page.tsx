import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { why, stats, credibility } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About | The US engineering arm of an established software house',
  description:
    'Kadmoon is a US custom-software firm in Austin, TX. Senior in-house team, measurable acceptance criteria, and code you own. Learn how we work and why.',
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden pb-10 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-shell px-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>About Kadmoon</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                The American engineering arm of an established software house.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                Kadmoon, Inc. is a custom-software firm based in {siteConfig.city},{' '}
                {siteConfig.regionCode}. We build bespoke systems for companies that want software
                built for their exact process, not forced into off-the-shelf SaaS. {credibility.text}
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative overflow-hidden bg-navy">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60" aria-hidden />
          <div className="relative mx-auto max-w-shell px-6 py-14 md:py-16">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                      {stat.value}
                    </span>
                    <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* The decisions */}
        <section className="mx-auto max-w-shell px-6 py-16 md:py-24">
          <Eyebrow>How we operate</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-display-sm text-ink">{why.title}</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {why.items.map((item, i) => (
              <Reveal
                as="article"
                key={item.title}
                delay={(i % 3) * 70}
                className="rounded-2xl border border-line bg-paper p-7 shadow-card"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy/5 font-mono text-sm text-navy">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-shell px-6 pb-20 text-center">
          <h2 className="font-display text-display-sm text-ink">Let’s build something you own.</h2>
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
