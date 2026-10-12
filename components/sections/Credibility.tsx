import { credibility } from '@/lib/content';
import { Eyebrow } from '../Eyebrow';
import { Reveal } from '../Reveal';

export function Credibility() {
  return (
    <section className="border-y border-line bg-paper">
      <div className="mx-auto grid max-w-shell gap-10 px-6 py-16 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-16 md:py-20">
        <Reveal>
          <Eyebrow>{credibility.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-display-sm font-semibold tracking-[-0.02em] text-ink">
            {credibility.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">{credibility.lead}</p>
          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent/90"
          >
            Request a quote <span aria-hidden>→</span>
          </a>
        </Reveal>

        <Reveal delay={90} className="grid gap-4">
          {credibility.points.map((p) => (
            <div
              key={p.title}
              className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-card"
            >
              <span aria-hidden className="mt-1.5 h-2 w-2 flex-none rounded-full bg-accent" />
              <div>
                <div className="font-display text-[15px] font-semibold text-ink">{p.title}</div>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-2">{p.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
