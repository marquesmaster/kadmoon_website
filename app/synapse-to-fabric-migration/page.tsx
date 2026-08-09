import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { siteConfig } from '@/lib/site';

const title = 'Synapse to Fabric Migration';
const description =
  'We move Azure Synapse Analytics workloads and Power BI Premium capacity to Microsoft Fabric: dedicated SQL pools, pipelines, and Spark rebuilt on OneLake, with phased cutover and parity validation in your own tenant.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'synapse to fabric migration',
    'azure synapse to microsoft fabric',
    'power bi premium to fabric',
    'migrate to microsoft fabric',
  ],
  alternates: { canonical: `${siteConfig.url}/synapse-to-fabric-migration` },
  openGraph: {
    title: `${title} | Kadmoon`,
    description,
    url: `${siteConfig.url}/synapse-to-fabric-migration`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'What does migrating from Synapse to Microsoft Fabric actually involve?',
    a: 'It means moving your Azure Synapse Analytics workloads, dedicated SQL pools, pipelines, and Spark jobs, along with your Power BI Premium capacity, onto Microsoft Fabric so everything sits on a single unified platform backed by OneLake. We do not lift and shift blindly: we inventory what exists, map dependencies, and rebuild on governed Fabric artifacts so the result is cleaner than the source, not just relocated.',
  },
  {
    q: 'Why should we move to Fabric now instead of waiting?',
    a: 'Two reasons. First, Fabric consolidates data engineering, warehousing, real-time analytics, and Power BI into one SaaS platform on OneLake, and Direct Lake lets Power BI read Delta tables directly without import or refresh windows. Second, the Power BI Premium capacity (P SKU) to Fabric (F SKU) transition is time boxed, so teams still on Premium face a real deadline. Planning the move deliberately beats being forced into a rushed cutover.',
  },
  {
    q: 'What changes for our dedicated SQL pools, pipelines, and Spark?',
    a: 'Dedicated SQL pools map to the Fabric Warehouse and Lakehouse SQL endpoint, Synapse pipelines move to Fabric Data Factory pipelines, and Synapse Spark notebooks and jobs move to Fabric Spark. The T-SQL surface, orchestration patterns, and Spark code are largely familiar, but connections, linked services, and storage paths change because data now lands in OneLake as Delta. We rebuild each layer against Fabric primitives and validate output parity before retiring the Synapse equivalent.',
  },
  {
    q: 'Can Synapse and Fabric run side by side during the transition?',
    a: 'Yes, and they should. We run a coexistence period where OneLake shortcuts and the existing Synapse workspace point at the same data, so pipelines and reports keep serving the business while we migrate wave by wave. There is no information blackout: each workload is cut over only after parity is confirmed, and the old path stays available until the new one is trusted.',
  },
  {
    q: 'How long does a Synapse to Fabric migration take?',
    a: 'It depends on the number of pipelines, the size of the SQL estate, and how much modeling debt exists. Smaller, well documented estates can fit a fixed eight week engagement covering assessment, rebuild, and phased cutover. Larger platforms run in sequential waves over a longer window. We size it against your real inventory rather than a generic promise, and everything is built in your own Microsoft tenant.',
  },
];

export default function SynapseToFabricPage() {
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
              items={[{ label: 'Home', href: '/' }, { label: 'Synapse to Fabric migration' }]}
            />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>Azure Synapse to Microsoft Fabric</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                Migrate from Azure Synapse to Microsoft Fabric.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-2">
                A Synapse to Fabric migration moves your dedicated SQL pools, pipelines, and Spark
                workloads, along with your Power BI Premium capacity, onto Microsoft Fabric and
                OneLake as one unified platform. We rebuild on governed Fabric artifacts, cut over
                wave by wave with parity checks, and keep the business running the whole time, all
                inside your own Microsoft tenant.
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
        <section className="mx-auto max-w-3xl px-6 pb-4">
          <div className="prose">
            <h2>Why move from Synapse to Fabric, and when</h2>
            <p>
              Microsoft Fabric folds data engineering, warehousing, real-time analytics, and Power
              BI into a single SaaS platform, with every workload reading and writing the same Delta
              tables in OneLake. That removes the copies and hand-offs that pile up in a Synapse
              plus Power BI estate. Direct Lake is the payoff most teams feel first: Power BI reads
              Lakehouse and Warehouse tables directly, so you drop the import refresh windows and
              the memory ceilings that come with them.
            </p>
            <p>
              Timing matters too. The Power BI Premium to Fabric transition is time boxed: Premium
              capacity (the P SKUs) is being replaced by Fabric capacity (the F SKUs), and teams
              still on Premium face a real deadline rather than an open-ended choice. Moving to
              Fabric on your own schedule, with a plan, beats being pushed into a rushed capacity
              swap. If Power BI is central to your reporting, our{' '}
              <a href="/services/power-bi">Power BI practice</a> and{' '}
              <a href="/services/microsoft-fabric">Microsoft Fabric practice</a> carry the modeling
              and platform work end to end.
            </p>

            <h2>What actually changes</h2>
            <p>
              The migration is not a rename. Each Synapse component maps to a Fabric equivalent, and
              the connections and storage paths change because data now lands in OneLake:
            </p>
            <ul>
              <li>
                <strong>Dedicated SQL pools</strong> move to the Fabric Warehouse and the Lakehouse
                SQL endpoint. The T-SQL surface is familiar, but tables live as Delta in OneLake and
                distribution and indexing assumptions are revisited.
              </li>
              <li>
                <strong>Synapse pipelines</strong> move to Fabric Data Factory pipelines. The
                orchestration patterns carry over, while linked services and datasets are rebuilt
                against Fabric connections.
              </li>
              <li>
                <strong>Synapse Spark</strong> notebooks and jobs move to Fabric Spark, writing to
                Lakehouse Delta tables instead of dedicated storage accounts.
              </li>
              <li>
                <strong>Workspaces and capacity</strong> consolidate: Synapse workspaces and Power
                BI Premium capacity are replaced by Fabric workspaces on F SKU capacity, with a
                single governance and security model.
              </li>
            </ul>
            <p>
              Underneath all of it, the storage layer shifts to OneLake, which is why our{' '}
              <a href="/services/data-engineering">data engineering</a> work focuses on getting the
              lakehouse structure and Delta tables right before anything reads from them.
            </p>

            <h2>How we run the migration</h2>
            <p>
              We treat a Synapse to Fabric migration as a rebuild on a governed foundation, not a
              one-for-one copy of every object. The method is concrete:
            </p>
            <ul>
              <li>
                <strong>Full inventory.</strong> We catalogue every report, dataset, SQL pool,
                pipeline, notebook, and data source in the existing estate so nothing is discovered
                mid-cutover.
              </li>
              <li>
                <strong>Dependency mapping.</strong> We trace what feeds what, from source system
                through pipeline and model to the report a user opens, so we migrate in the right
                order.
              </li>
              <li>
                <strong>Rebuild on a governed semantic model.</strong> Reports are rebuilt on a
                governed Power BI semantic model with one definition per KPI, rather than copying
                forward duplicated and conflicting measures.
              </li>
              <li>
                <strong>Phased, wave-by-wave cutover.</strong> We migrate in waves, validating
                parity at each step so the numbers on Fabric match the numbers on Synapse before a
                workload is trusted.
              </li>
              <li>
                <strong>No information blackout.</strong> Coexistence keeps the current platform
                serving the business until each new path is confirmed, so reporting never goes dark.
              </li>
              <li>
                <strong>Your own tenant.</strong> Everything is built in your Microsoft tenant, on
                your capacity, with your governance, so you own the result outright.
              </li>
            </ul>
            <p>
              For well documented estates this fits a fixed eight week engagement covering
              assessment, rebuild, and cutover. Larger platforms run in sequential waves over a
              longer window. If your move also spans Microsoft 365 or Azure AD boundaries, our{' '}
              <a href="/services/tenant-to-tenant-migration">tenant to tenant migration</a> work
              slots into the same plan.
            </p>

            <h2>Coexistence during the transition</h2>
            <p>
              The riskiest part of any platform migration is the gap between old and new. We remove
              it with a deliberate coexistence period: OneLake shortcuts let Fabric read the data
              your Synapse workspace already owns, so pipelines and reports run against a single
              source while we migrate around them. Old and new paths run side by side, each workload
              is cut over only after parity is confirmed, and the Synapse equivalent stays available
              until its Fabric replacement has earned trust. You can see the kind of reporting this
              produces in our <a href="/dashboards">dashboards</a> and{' '}
              <a href="/cases">case studies</a>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-display-sm text-ink">
              Synapse to Fabric migration: common questions
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
            Ready to move to Microsoft Fabric?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            Tell us what your Synapse and Power BI Premium estate looks like today, and we&rsquo;ll
            come back with an assessment and a phased migration plan sized to your real inventory.
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
