import type { ReactNode } from 'react';
import { Nav } from './Nav';
import { Footer } from './sections/Footer';
import { Breadcrumbs } from './Breadcrumbs';
import { Eyebrow } from './Eyebrow';

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden pb-8 pt-28 md:pt-32">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-3xl px-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: title }]} />
            <div className="mt-6">
              <Eyebrow>Legal</Eyebrow>
              <h1 className="mt-4 font-display text-display-md text-ink">{title}</h1>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-ink-3">
                Last updated: {updated}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-24">
          <div className="prose">{children}</div>
          <p className="mt-12 rounded-xl border border-line bg-mist px-5 py-4 text-[13px] leading-relaxed text-ink-2">
            This is a general template provided for convenience and does not constitute legal
            advice. Have it reviewed by qualified counsel before relying on it.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
