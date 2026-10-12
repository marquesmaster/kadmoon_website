import { comparison } from '@/lib/content';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { Reveal } from '../Reveal';

function Mark({ value, strong = false }: { value: string; strong?: boolean }) {
  const base = 'inline-flex h-7 w-7 items-center justify-center rounded-full';
  if (value === 'yes') {
    return (
      <span className={`${base} ${strong ? 'bg-accent text-white' : 'bg-success/15 text-success'}`}>
        <span className="sr-only">Yes</span>
        <svg aria-hidden width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (value === 'partial') {
    return (
      <span className={`${base} bg-ink-3/12 text-ink-3`}>
        <span className="sr-only">Limited</span>
        <svg aria-hidden width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    );
  }
  return (
    <span className={`${base} bg-ink/5 text-ink-3/60`}>
      <span className="sr-only">No</span>
      <svg aria-hidden width="13" height="13" viewBox="0 0 16 16" fill="none">
        <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function Comparison() {
  return (
    <Section id="comparison" tone="paper">
      <SectionHeader eyebrow={comparison.eyebrow} title={comparison.title} sub={comparison.sub} />

      <Reveal className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr>
              <th className="border-b border-line py-4 pr-4 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">
                Criteria
              </th>
              {comparison.columns.map((col, i) => {
                const us = i === 0;
                return (
                  <th
                    key={col}
                    className={`border-b px-4 py-4 text-center font-display text-[15px] font-semibold tracking-[-0.01em] ${
                      us
                        ? 'rounded-t-xl border-accent/20 bg-accent/[0.06] text-navy'
                        : 'border-line text-ink-3'
                    }`}
                  >
                    {col}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row, r) => {
              const last = r === comparison.rows.length - 1;
              return (
                <tr key={row.label}>
                  <td className="border-b border-line py-4 pr-4 text-[15px] text-ink">{row.label}</td>
                  {row.values.map((v, i) => {
                    const us = i === 0;
                    return (
                      <td
                        key={i}
                        className={`px-4 py-4 text-center align-middle ${
                          us
                            ? `bg-accent/[0.06] ${last ? 'rounded-b-xl border-b border-accent/20' : ''}`
                            : 'border-b border-line'
                        }`}
                      >
                        <Mark value={v} strong={us} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
