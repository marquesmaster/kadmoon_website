import { Section } from '../Section';
import { Eyebrow } from '../Eyebrow';
import { Reveal } from '../Reveal';

// Named, reusable IP. These are real methodological accelerators (frameworks,
// templates, baselines), not fabricated metrics.
const accelerators = [
  {
    name: 'Migration Toolkit',
    body: 'Inventory, dependency mapping, and number-by-number parity validation for moving off Tableau, Qlik, or Cognos onto Power BI, with no information blackout.',
    tag: 'Migrations',
  },
  {
    name: 'Fabric Landing Zone',
    body: 'A governed OneLake and medallion baseline with security and workspace structure built in, so your Fabric platform starts on best practice instead of drifting into it.',
    tag: 'Microsoft Fabric',
  },
  {
    name: 'Semantic Model Library',
    body: 'Vertical-tuned models for retail, finance, and manufacturing, with one definition per KPI, so the build starts from a proven core rather than a blank canvas.',
    tag: 'Power BI',
  },
  {
    name: 'Governance Baseline',
    body: 'Row-level security, Microsoft Purview lineage, and DLP as a ready-to-apply pattern, so governance ships with the build and survives the first audit.',
    tag: 'Data governance',
  },
  {
    name: 'Dashboard Design System',
    body: 'A visual and interaction standard so every report reads and behaves consistently, the same structure you can preview live in our dashboard gallery.',
    tag: 'Analytics',
  },
  {
    name: 'Copilot-Ready Model',
    body: 'A semantic model prepared for natural-language questions and Copilot, so leaders ask in plain English and get answers from governed, trusted data.',
    tag: 'Analytics & AI',
  },
];

export function Accelerators() {
  return (
    <Section id="accelerators" tone="ice">
      <div className="max-w-2xl">
        <Eyebrow>Accelerators</Eyebrow>
        <h2 className="mt-4 font-display text-display-sm font-semibold text-ink">
          Named accelerators that get you there faster.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink-2">
          We do not start every project from a blank canvas. Reusable toolkits and templates,
          refined across delivery, take weeks off the build and lower the risk, so you pay for the
          outcome, not for us reinventing the basics.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {accelerators.map((a, i) => (
          <Reveal
            as="article"
            key={a.name}
            delay={(i % 3) * 80}
            className="hover-glow flex flex-col rounded-2xl border border-line bg-white p-7"
          >
            <span className="inline-flex w-fit rounded-full bg-mist px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-2">
              {a.tag}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-ink">{a.name}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">{a.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
