import { stats } from '@/lib/content';
import { Reveal } from '../Reveal';
import { StatCounter } from '../StatCounter';

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-shell px-6 py-14 md:py-16">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal as="div" key={stat.label} delay={i * 70} className="text-center md:text-left">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <StatCounter
                  value={stat.value}
                  className="block font-display text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl"
                />
                <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">
                  {stat.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
          Track record delivered by our engineering team
        </p>
      </div>
    </section>
  );
}
