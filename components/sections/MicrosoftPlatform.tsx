import { Section } from '../Section';
import { Eyebrow } from '../Eyebrow';
import { Reveal } from '../Reveal';

// The Microsoft workloads Kadmoon builds on. Monochrome ink tiles with a single
// orange accent (Brex restraint); Fabric — the backbone — carries the accent.
const platform = [
  { name: 'Microsoft Fabric', mark: 'F', accent: true, body: 'One analytics platform for your lakehouse, pipelines, and real-time data. It is the backbone of most of what we build.' },
  { name: 'Power BI', mark: 'BI', body: 'Dashboards and semantic models your executives trust and open every day.' },
  { name: 'Power Apps', mark: 'PA', body: 'Business apps and automated workflows on the Power Platform, wired straight to your data.' },
  { name: 'Azure Synapse', mark: 'SY', body: 'Data warehousing and large-scale processing that holds up as you grow.' },
  { name: 'Azure SQL & SQL Pool', mark: 'SQL', body: 'Dedicated SQL pools and Azure SQL for fast, structured workloads.' },
  { name: 'Purview & governance', mark: 'PV', body: 'Cataloging, lineage, and access control, so people can find data and trust what they find.' },
];

export function MicrosoftPlatform() {
  return (
    <Section id="platform" tone="ice">
      <div className="max-w-2xl">
        <Eyebrow>100% Microsoft</Eyebrow>
        <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
          One Microsoft platform, one team to run it.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink-2">
          Multi-vendor data stacks leak money and trust at every seam. We build entirely inside the
          Microsoft cloud, so security, cost control, and AI all come from one place your team can
          run without us.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {platform.map((p, i) => (
          <Reveal
            as="article"
            key={p.name}
            delay={(i % 3) * 80}
            className="hover-glow rounded-2xl border border-line bg-white p-7"
          >
            <span
              aria-hidden
              className={`grid h-11 w-11 place-items-center rounded-xl font-display text-sm font-bold tracking-tight ${
                p.accent ? 'bg-accent text-white' : 'bg-ink text-white'
              }`}
            >
              {p.mark}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-ink">{p.name}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
