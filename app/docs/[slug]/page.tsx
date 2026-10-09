import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DocsSidebar } from '@/components/docs/DocsSidebar';
import { docs, getDoc, docHeadings } from '@/lib/docs';
import { siteConfig } from '@/lib/site';

const ordered = [
  ...docs.filter((d) => d.group === 'Get started').sort((a, b) => a.order - b.order),
  ...docs.filter((d) => d.group === 'Reference').sort((a, b) => a.order - b.order),
];

export function generateStaticParams() {
  return docs.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const d = getDoc(params.slug);
  if (!d) return {};
  const url = `${siteConfig.url}/docs/${d.slug}`;
  return {
    title: `${d.title} | Kadmoon docs`,
    description: d.description,
    alternates: { canonical: url },
    openGraph: { title: `${d.title} | Kadmoon docs`, description: d.description, url, type: 'article' },
  };
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const doc = getDoc(params.slug);
  if (!doc) notFound();

  const headings = docHeadings(doc);
  const pos = ordered.findIndex((d) => d.slug === doc.slug);
  const prev = pos > 0 ? ordered[pos - 1] : null;
  const next = pos >= 0 && pos < ordered.length - 1 ? ordered[pos + 1] : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: doc.title,
    description: doc.description,
    author: { '@type': 'Organization', name: siteConfig.legalName, url: siteConfig.url },
    publisher: { '@type': 'Organization', name: siteConfig.legalName, url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/docs/${doc.slug}`,
  };

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-shell px-6 pb-24 pt-28 md:pt-32">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)_200px]">
          {/* Left: section nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <DocsSidebar current={doc.slug} />
            </div>
          </aside>

          {/* Main */}
          <article className="min-w-0">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Docs', href: '/docs' },
                { label: doc.title },
              ]}
            />
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-navy">{doc.group}</p>
            <h1 className="mt-2 font-display text-display-md text-ink" style={{ textWrap: 'balance' }}>
              {doc.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-2">{doc.intro}</p>

            <div className="prose mt-10 max-w-none">
              {doc.blocks.map((b, i) => {
                if (b.type === 'h2') {
                  return (
                    <h2 key={b.id} id={b.id} className="scroll-mt-28">
                      {b.text}
                    </h2>
                  );
                }
                if (b.type === 'p') return <p key={i}>{b.text}</p>;
                return (
                  <ul key={i}>
                    {b.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                );
              })}
            </div>

            {/* Prev / next */}
            <div className="mt-14 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
              {prev ? (
                <a
                  href={`/docs/${prev.slug}`}
                  className="rounded-xl border border-line bg-paper p-5 transition-colors hover:border-ink-3/40"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3">Previous</span>
                  <span className="mt-1 block font-display text-[15px] font-semibold text-ink">{prev.title}</span>
                </a>
              ) : (
                <span />
              )}
              {next && (
                <a
                  href={`/docs/${next.slug}`}
                  className="rounded-xl border border-line bg-paper p-5 text-right transition-colors hover:border-ink-3/40 sm:text-right"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3">Next</span>
                  <span className="mt-1 block font-display text-[15px] font-semibold text-ink">{next.title}</span>
                </a>
              )}
            </div>

            <div className="mt-10 rounded-2xl border border-line bg-navy p-6">
              <p className="font-display text-lg font-semibold text-white">Want this on your trade data?</p>
              <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-white/70">
                Tell us where your numbers live and what leadership needs to see. You get a scoped plan
                and a quote within one business day.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
              >
                Request a quote <span aria-hidden>→</span>
              </a>
            </div>
          </article>

          {/* Right: on this page */}
          <aside className="hidden lg:block">
            {headings.length > 0 && (
              <div className="sticky top-28">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">On this page</p>
                <ul className="mt-3 space-y-2 border-l border-line">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className="-ml-px block border-l border-transparent pl-4 text-[13px] leading-snug text-ink-3 transition-colors hover:border-accent hover:text-ink"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
