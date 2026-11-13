import { problems } from '@/lib/content';
import { Eyebrow } from '../Eyebrow';
import { Reveal } from '../Reveal';

// "Hard problems" band: names the pain a buyer already feels, then pivots to
// the cause we fix. Data lives in lib/content `problems`.
export function Problems() {
  return (
    <section className="border-t border-line bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-shell px-6">
        <div className="max-w-2xl">
          <Eyebrow>{problems.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">{problems.title}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{problems.sub}</p>
        </div>
        <ul className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problems.items.map((p, i) => (
            <Reveal
              as="li"
              key={p.pain}
              delay={(i % 3) * 70}
              className="rounded-2xl border border-line bg-white p-7 shadow-card"
            >
              <h3 className="font-display text-[17px] font-semibold leading-snug text-ink">{p.pain}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{p.detail}</p>
            </Reveal>
          ))}
        </ul>
        <p className="mt-9 max-w-3xl font-display text-lg font-medium leading-relaxed text-ink">
          {problems.close}
        </p>
      </div>
    </section>
  );
}
