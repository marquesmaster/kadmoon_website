import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact | Book a discovery call',
  description:
    'Tell us where you are today and get a senior point of view on the fastest path to measurable results on the Microsoft data platform. Response within one business day.',
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const firstCall = [
  'A senior perspective on your Microsoft data estate',
  'A candid read on your fastest, highest-value wins',
  'A clear next step, not a sales pitch',
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-paper">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-60" aria-hidden />
          <div className="relative mx-auto max-w-4xl px-6 pb-12 pt-36 md:pt-40">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mist px-3.5 py-2 font-mono text-sm tracking-[0.04em] text-ink">
              <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Contact
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-display-lg font-semibold text-ink">
              Let us put your Microsoft platform to work.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
              Tell us where you are today. You get a senior point of view on the fastest path to
              measurable results, starting with a 30-minute discovery call, at no cost and no
              obligation.
            </p>
          </div>
        </section>

        {/* Form + sidebar */}
        <section id="book" className="bg-paper py-20 md:py-24">
          <div className="mx-auto flex max-w-6xl flex-wrap items-start gap-7 px-6">
            {/* Form */}
            <div className="min-w-0 flex-1 basis-[440px]">
              <div className="rounded-3xl border border-line bg-white p-8 shadow-card md:p-11">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Tell us about your project
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
                  A few details are enough to prepare a useful first conversation.
                </p>
                <div className="mt-7">
                  <ContactForm theme="light" idPrefix="contact" />
                </div>
                <p className="mt-4 text-[13px] leading-relaxed text-ink-3">
                  We respond within one business day. Your details stay with Kadmoon, we never share
                  them.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex min-w-0 flex-1 basis-[300px] flex-col gap-5">
              <div className="rounded-3xl border border-line bg-white p-8 shadow-card">
                <div className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-3">
                  Reach us directly
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-4 block font-display text-lg font-semibold text-ink hover:text-accent"
                >
                  {siteConfig.email}
                </a>
                <div className="mt-5 flex items-center gap-2.5 text-[14px] font-medium text-ink-2">
                  <span aria-hidden className="h-2 w-2 rounded-full bg-accent" style={{ boxShadow: '0 0 0 4px rgba(232,73,43,.14)' }} />
                  United States · Serving clients nationwide
                </div>
                <div className="mt-3 text-[14px] font-medium text-ink-2">
                  Response within one business day
                </div>
              </div>

              <div className="rounded-3xl border border-line bg-mist p-8">
                <div className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-3">
                  What a first call gets you
                </div>
                <ul className="mt-4 space-y-3.5">
                  {firstCall.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-sm bg-accent" />
                      <span className="text-[15px] leading-relaxed text-ink-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
