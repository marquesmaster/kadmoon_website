import { platform } from '@/lib/content';
import { Section } from '../Section';
import { Button } from '../Button';
import { Reveal } from '../Reveal';
import { LandedCostCard } from '../reports/SampleReports';

// Home-page teaser for the platform (the EIP). Pulls copy from the shared
// `platform` content and reuses one built sample report, so the home surfaces
// the product and routes to the full /platform page.
const inside = [
  'Reads from the systems you already run',
  'One governed trade data model',
  'Reports and alerts you can act on',
  'In your own Microsoft tenant',
];

export function PlatformTeaser() {
  return (
    <Section id="platform" tone="mist">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
            {platform.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-display-sm text-ink">{platform.title}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">{platform.lead}</p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {inside.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href="/platform" size="lg">
              See the platform <span aria-hidden>→</span>
            </Button>
          </div>
        </div>

        <Reveal as="div" className="lg:pl-6">
          <LandedCostCard />
        </Reveal>
      </div>
    </Section>
  );
}
