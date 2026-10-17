import { microsoftStack } from '@/lib/content';
import { Eyebrow } from '../Eyebrow';
import { Reveal } from '../Reveal';
import { FluentWorkspace } from './FluentWorkspace';

// Home-page "Built on the Microsoft cloud" band: the message on the left, the
// Fluent acrylic workspace panel on the right.
export function MicrosoftStack() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-mist">
      <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-50" aria-hidden />
      <div className="relative mx-auto grid max-w-shell gap-12 px-6 py-16 md:grid-cols-[1fr_0.9fr] md:items-center md:gap-16 md:py-20">
        <Reveal>
          <Eyebrow>{microsoftStack.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-display-sm font-semibold tracking-[-0.02em] text-ink">
            {microsoftStack.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">{microsoftStack.lead}</p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {microsoftStack.points.map((p) => (
              <div key={p.title} className="rounded-xl border border-line bg-white/70 p-4">
                <dt className="font-display text-[14px] font-semibold text-ink">{p.title}</dt>
                <dd className="mt-1.5 text-[13px] leading-relaxed text-ink-2">{p.body}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 max-w-xl text-[13px] leading-relaxed text-ink-3">{microsoftStack.note}</p>
        </Reveal>

        <Reveal delay={120}>
          <FluentWorkspace tone="light" />
        </Reveal>
      </div>
    </section>
  );
}
