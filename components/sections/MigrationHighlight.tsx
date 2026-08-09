import { migrationHighlight as m } from '@/lib/content';
import { Section } from '../Section';
import { Eyebrow } from '../Eyebrow';
import { Button } from '../Button';
import { Reveal } from '../Reveal';

export function MigrationHighlight() {
  return (
    <Section id="migration" tone="mist">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{m.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-display-sm text-ink">{m.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-2">{m.body}</p>

          <ul className="mt-7 space-y-3">
            {m.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink">
                <span
                  aria-hidden
                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {m.ctas.map((c) => (
              <Button key={c.href} href={c.href} variant={c.primary ? 'primary' : 'ghost'}>
                {c.label}
              </Button>
            ))}
          </div>
        </div>

        <Reveal className="relative overflow-hidden rounded-2xl border border-navy/10 bg-navy p-7 shadow-card md:p-8">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
          <div className="relative flex items-baseline justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">
              {m.panel.label}
            </span>
            <span className="font-mono text-[11px] text-white/40">{m.panel.caption}</span>
          </div>
          <dl className="relative mt-6 divide-y divide-white/10">
            {m.panel.rows.map((row) => (
              <div key={row.label} className="flex items-center justify-between py-3">
                <dt className="text-[14px] text-white/80">{row.label}</dt>
                <dd className="flex items-center gap-3">
                  <span className="font-display text-lg font-semibold tabular-nums text-white">
                    {row.value}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] ${
                      row.status === 'review'
                        ? 'bg-accent/20 text-accent'
                        : 'bg-white/10 text-white/60'
                    }`}
                  >
                    {row.status}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
