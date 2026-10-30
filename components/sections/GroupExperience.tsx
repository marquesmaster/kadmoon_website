import { groupExperience as g } from '@/lib/content';

// Discreet "experience behind Kadmoon" band. Shows the track record of the
// team/group as text wordmarks (not logos, which require the organization's
// asset and permission). Framed as group experience across sectors, not as
// Kadmoon's foreign-trade clients.
export function GroupExperience() {
  return (
    <section className="border-y border-line bg-mist">
      <div className="mx-auto max-w-shell px-6 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
            {g.eyebrow}
          </span>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-2">{g.line}</p>
        </div>

        <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-6">
          {g.stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-bold tracking-tight tabular-nums text-ink md:text-5xl">
                  {s.value}
                </span>
                <span className="mt-2 block text-[13px] leading-snug text-ink-2">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-9 gap-y-5">
          {g.orgs.map((org) => (
            <li
              key={org}
              className="font-display text-lg font-semibold tracking-[-0.01em] text-ink-3 transition-colors hover:text-ink-2"
            >
              {org}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3/70">
          {g.note}
        </p>
      </div>
    </section>
  );
}
