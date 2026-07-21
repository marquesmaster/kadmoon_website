import { comparison } from '@/lib/content';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { Reveal } from '../Reveal';

function Cell({ value }: { value: string }) {
  if (value === 'yes') {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-success/12 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-success">
        Yes
      </span>
    );
  }
  if (value === 'partial') {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-ink-3/12 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-ink-2">
        Limited
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-accent">
      No
    </span>
  );
}

export function Comparison() {
  return (
    <Section id="comparison" tone="paper">
      <SectionHeader
        eyebrow={comparison.eyebrow}
        title={comparison.title}
        sub={comparison.sub}
      />

      <Reveal className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-line">
              <th className="py-4 pr-4 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">
                Criteria
              </th>
              {comparison.columns.map((col, i) => (
                <th
                  key={col}
                  className={`px-4 py-4 font-display text-[15px] font-semibold tracking-[-0.01em] ${
                    i === 0 ? 'text-navy' : 'text-ink-2'
                  }`}
                >
                  {col}
                  {i === 0 && (
                    <span className="ml-2 rounded-full bg-accent/10 px-2 py-0.5 align-middle font-mono text-[9px] uppercase tracking-[0.08em] text-accent">
                      Us
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr key={row.label} className="border-b border-line">
                <td className="py-4 pr-4 text-[15px] text-ink">{row.label}</td>
                {row.values.map((v, i) => (
                  <td key={i} className="px-4 py-4">
                    <Cell value={v} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
