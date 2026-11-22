import { stats } from '@/lib/content';
import { Reveal } from '../Reveal';
import { StatCounter } from '../StatCounter';

// Light stats band: the real track record of the group behind Kadmoon, on a
// bright surface so the page does not lean dark.
export function StatsBand() {
  return (
    <section className="border-y border-line bg-mist">
      <div className="mx-auto max-w-shell px-6 py-14 md:py-16">
        <div className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            The group behind Kadmoon
          </span>
          <p className="mt-3 text-lg leading-relaxed text-ink-2">
            Six years of Microsoft data and analytics delivery, through our affiliate Fynx, now
            focused on Power BI and Microsoft Fabric for US finance and operations teams.
          </p>
        </div>
        <dl data-testid="stat-band" className="mt-11 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal as="div" key={stat.label} delay={i * 70}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <StatCounter
                  value={stat.value}
                  className="block font-display text-4xl font-bold tracking-[-0.035em] text-accent md:text-5xl"
                />
                <span className="mt-2.5 block font-display text-[15px] font-semibold text-ink">
                  {stat.label}
                </span>
                <span className="mt-1 block text-[13px] leading-snug text-ink-3">{stat.sub}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
