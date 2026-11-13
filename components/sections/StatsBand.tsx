import { stats } from '@/lib/content';
import { Reveal } from '../Reveal';
import { StatCounter } from '../StatCounter';

export function StatsBand() {
  return (
    <section className="relative overflow-hidden border-t-2 border-accent bg-navy">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-shell px-6 py-14 md:py-16">
        <div className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8FB8FF]">
            The team and group behind Kadmoon
          </span>
          <p className="mt-3 text-lg leading-relaxed text-white/70">
            Six years of Microsoft data and analytics delivery, now focused on Power BI for US
            businesses.
          </p>
        </div>
        <dl data-testid="stat-band" className="mt-11 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal as="div" key={stat.label} delay={i * 70} className="text-center sm:text-left">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <StatCounter
                  value={stat.value}
                  className={`block font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl ${
                    i === 0 ? 'text-[#4C8DFF]' : 'text-white'
                  }`}
                />
                <span className="mt-2.5 block font-display text-[15px] font-semibold text-white">
                  {stat.label}
                </span>
                <span className="mt-1 block text-[13px] leading-snug text-white/55">{stat.sub}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
