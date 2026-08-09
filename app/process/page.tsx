import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { process, engagement } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Process | Working dashboards from week two',
  description:
    'How Kadmoon delivers Power BI: discovery from the decision, the right data foundation, a governed semantic model, dashboards validated each cycle, and managed support on an SLA.',
  alternates: { canonical: `${siteConfig.url}/process` },
};

export default function ProcessPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden pb-10 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-shell px-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Process' }]} />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>{process.eyebrow}</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">{process.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                No black boxes. You see working software from the first month and know exactly what
                ships, when, and how to validate it.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-shell px-6 pb-8">
          <ol className="space-y-4">
            {process.steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.num}
                delay={(i % 2) * 70}
                className="grid gap-4 rounded-2xl border border-line bg-paper p-7 shadow-card md:grid-cols-[auto_1fr] md:gap-8 md:p-8"
              >
                <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-2">
                  <span className="font-display text-4xl font-semibold tracking-[-0.03em] text-navy/20">
                    {step.num}
                  </span>
                  <span className="rounded-full border border-line bg-mist px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-2">
                    {step.meta}
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* Engagement models */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-shell px-6">
            <Eyebrow>{engagement.eyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-display-sm text-ink">
              {engagement.title}
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {engagement.models.map((m) => (
                <div key={m.name} className="rounded-2xl border border-line bg-paper p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{m.name}</h3>
                  <p className="mt-1 text-[13px] text-ink-3">{m.best}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-shell px-6 py-16 text-center md:py-20">
          <h2 className="font-display text-display-sm text-ink">Ready to scope your project?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            Tell us about it and you get a technical proposal within one business day.
          </p>
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
