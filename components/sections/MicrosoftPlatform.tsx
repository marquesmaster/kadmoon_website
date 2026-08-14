import { Section } from '../Section';
import { Eyebrow } from '../Eyebrow';
import { Reveal } from '../Reveal';

// The Microsoft workloads Kadmoon builds on. Gradient tiles echo each product's
// brand color; no external assets needed.
const platform = [
  { name: 'Microsoft Fabric', grad: 'linear-gradient(135deg,#7c3aed,#22b3ff)', body: 'One analytics platform for your lakehouse, pipelines, and real-time data. It is the backbone of most of what we build.' },
  { name: 'Power BI', grad: 'linear-gradient(135deg,#F2C811,#e8a400)', body: 'Dashboards and semantic models your executives trust and open every day.' },
  { name: 'Power Apps', grad: 'linear-gradient(135deg,#742774,#b14ad8)', body: 'Business apps and automated workflows on the Power Platform, wired straight to your data.' },
  { name: 'Azure Synapse', grad: 'linear-gradient(135deg,#0089d6,#00b7c3)', body: 'Data warehousing and large-scale processing that holds up as you grow.' },
  { name: 'Azure SQL & SQL Pool', grad: 'linear-gradient(135deg,#003b73,#0078d4)', body: 'Dedicated SQL pools and Azure SQL for fast, structured workloads.' },
  { name: 'Purview & governance', grad: 'linear-gradient(135deg,#118d57,#3bd07a)', body: 'Cataloging, lineage, and access control, so people can find data and trust what they find.' },
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
            <span aria-hidden className="block h-10 w-10 rounded-[10px]" style={{ background: p.grad }} />
            <h3 className="mt-4 font-display text-xl font-semibold text-ink">{p.name}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
