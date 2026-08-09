import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { siteConfig } from '@/lib/site';

const title = 'Cognos to Power BI Migration';
const description =
  'We move IBM Cognos and BusinessObjects reporting to a governed Power BI semantic model: full inventory, dependency mapping, rebuild on one definition per KPI, and a phased, parity-validated cutover with no reporting blackout.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'cognos to power bi migration',
    'migrate cognos to power bi',
    'ibm cognos to power bi',
    'businessobjects to power bi',
  ],
  alternates: { canonical: `${siteConfig.url}/cognos-to-power-bi-migration` },
  openGraph: {
    title: `${title} | Kadmoon`,
    description,
    url: `${siteConfig.url}/cognos-to-power-bi-migration`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'What does a Cognos to Power BI migration actually involve?',
    a: 'A Cognos to Power BI migration moves your reporting off IBM Cognos and onto Power BI by rebuilding the reports on a governed Power BI semantic model, not by copying each report one for one. We inventory every existing report and data source, map the dependencies, translate the Framework Manager model and report specifications into a single governed model with one definition per KPI, and cut over in waves with parity validation at each step so nobody loses their numbers along the way.',
  },
  {
    q: 'Can you also migrate SAP BusinessObjects to Power BI?',
    a: 'Yes. The same method applies to a BusinessObjects to Power BI migration. Whether the source is Cognos Framework Manager or a BusinessObjects universe, the semantic layer, the report catalog, and the scheduled distributions get inventoried, mapped, and rebuilt on a governed Power BI model in your own Microsoft tenant.',
  },
  {
    q: 'Do you copy the reports one for one?',
    a: 'No, and that is deliberate. A one-for-one copy carries forward every duplicated metric, orphaned report, and conflicting definition that made the old estate hard to trust. We consolidate to one governed semantic model where each KPI has a single definition, then rebuild the reports that people actually use on top of it. You keep what matters and retire the noise.',
  },
  {
    q: 'Will reporting go dark during the migration?',
    a: 'No. Cognos or BusinessObjects stays live until the Power BI equivalent is built, validated against the source for parity, and signed off. We cut over wave by wave, so at every point in the project users have a working report. There is no information blackout.',
  },
  {
    q: 'How long does a migration take?',
    a: 'It depends on the size and health of the current estate, but many teams start with a fixed 8-week engagement that covers inventory, dependency mapping, the governed model, and the first cutover wave. Larger estates continue in additional waves on the same method. We give you a scoped range after the inventory, not a guess before it.',
  },
];

export default function CognosToPowerBiPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Hero */}
        <section className="relative overflow-hidden pb-14 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-shell px-6">
            <Breadcrumbs
              items={[{ label: 'Home', href: '/' }, { label: 'Cognos to Power BI Migration' }]}
            />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>Migration</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                Cognos to Power BI migration.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                A Cognos to Power BI migration moves your IBM Cognos (and related BusinessObjects)
                reporting onto a governed Power BI semantic model, so every KPI has one definition
                and every report is rebuilt on data people can trust. We inventory the full estate,
                map the dependencies, and cut over wave by wave with parity checks at each step. No
                reporting blackout, and everything is built in your own Microsoft tenant.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact" size="lg">
                  Talk to an expert <span aria-hidden>→</span>
                </Button>
                <Button href="/dashboards" size="lg" variant="ghost">
                  See dashboards
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <div className="prose">
            <h2>Why teams move off Cognos and BusinessObjects</h2>
            <p>
              IBM Cognos and SAP BusinessObjects were built for a different era of reporting. Teams
              move for concrete reasons: licensing and maintenance costs that keep climbing, a
              shrinking pool of people who know Framework Manager or the universe, slow authoring
              cycles, and a report catalog that has grown into thousands of near-duplicate objects
              nobody fully trusts. Meanwhile the rest of the business already lives in Microsoft 365,
              so Power BI puts analytics next to the tools people use every day and connects cleanly
              to a modern data platform.
            </p>
            <p>
              The goal is not just a new tool. It is a chance to consolidate a sprawling estate into
              one governed{' '}
              <a href="/services/power-bi">Power BI</a> model, backed where it helps by{' '}
              <a href="/services/microsoft-fabric">Microsoft Fabric</a> and solid{' '}
              <a href="/services/data-engineering">data engineering</a>, so the numbers finally
              agree with each other.
            </p>

            <h2>Translating the model, not just the reports</h2>
            <p>
              The hard part of a migration is not redrawing charts. It is the semantic layer. In
              Cognos that logic lives in the Framework Manager model: query subjects, determinants,
              relationships, calculated columns, and the report specifications built on top. In
              BusinessObjects it lives in the universe. Both encode years of business rules, and both
              accumulate contradictions over time.
            </p>
            <p>
              We translate that layer into a governed Power BI semantic model. Query subjects and
              universe objects become tables, columns, and measures in a clean star schema.
              Framework Manager filters and BusinessObjects prompts become DAX and Power BI
              parameters. Crucially, where the source had three slightly different definitions of
              &ldquo;net revenue,&rdquo; we resolve them into one. Each KPI gets a single, documented
              definition, so the report is a view over governed logic rather than another place for
              the numbers to drift.
            </p>

            <h2>Our migration method</h2>
            <p>
              We do not lift and shift, and we do not copy reports one for one. We follow a method
              that keeps the business running throughout:
            </p>
            <ol>
              <li>
                <strong>Full inventory.</strong> We catalog every report, package, universe, data
                source, and scheduled distribution in the current estate, along with who actually
                runs each one. This is where the real scope, and the dead weight, becomes visible.
              </li>
              <li>
                <strong>Dependency mapping.</strong> We map how reports depend on the model, how the
                model depends on sources, and how downstream distributions and exports depend on the
                reports. Nothing gets retired or rebuilt without knowing what it feeds.
              </li>
              <li>
                <strong>Rebuild on a governed model.</strong> We build a Power BI semantic model with
                one definition per KPI and rebuild the reports people rely on over it, rather than
                recreating every legacy object. You keep what matters and retire the noise.
              </li>
              <li>
                <strong>Phased, wave-by-wave cutover.</strong> We migrate in waves by subject area or
                audience. Each wave is validated for parity against the Cognos or BusinessObjects
                source before anyone switches, then signed off.
              </li>
              <li>
                <strong>No information blackout.</strong> The legacy platform stays live until each
                wave&rsquo;s Power BI equivalent is proven. Users always have a working report.
              </li>
              <li>
                <strong>Built in your tenant.</strong> Everything is delivered inside your own
                Microsoft tenant, on your governance and security, so you own the result. If a
                consolidation or move is also in play, we handle{' '}
                <a href="/services/tenant-to-tenant-migration">tenant-to-tenant migration</a> the
                same disciplined way.
              </li>
            </ol>

            <h2>Risks we handle</h2>
            <p>
              Reporting migrations fail in predictable ways, and we plan for each. <strong>Numbers
              that do not match</strong> are caught by parity validation at every wave, comparing
              Power BI output to the live source before cutover. <strong>Hidden dependencies</strong>{' '}
              like bursting schedules, downstream extracts, and embedded reports are surfaced in the
              dependency map, not discovered after go-live. <strong>Definition sprawl</strong> is
              resolved up front by consolidating to one governed model instead of importing the same
              contradictions into a new tool. <strong>Scope creep</strong> is contained because the
              inventory tells us what to rebuild and what to retire. And <strong>user
              disruption</strong> is minimized because the old estate stays available until the new
              one is signed off.
            </p>
            <p>
              You can see the kind of governed reporting this produces in our{' '}
              <a href="/dashboards">dashboards</a> and{' '}
              <a href="/cases">case studies</a>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-display-sm text-ink">
              Cognos to Power BI migration: common questions
            </h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <h3 className="font-display text-base font-medium text-ink md:text-lg">{f.q}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-display text-display-sm text-ink">
            Ready to move off Cognos or BusinessObjects?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            Send us your current reporting estate and we will come back with an inventory-based scope
            and an investment range. Many teams start with a fixed 8-week engagement.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/#contact" size="lg">
              Talk to an expert <span aria-hidden>→</span>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
