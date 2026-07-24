import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { BlogCard } from '@/components/BlogCard';
import { industryPages } from '@/lib/content';
import { getAllPostMeta } from '@/lib/blog';
import { siteConfig } from '@/lib/site';

export function generateStaticParams() {
  return industryPages.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const ind = industryPages.find((x) => x.slug === params.slug);
  if (!ind) return {};
  const url = `${siteConfig.url}/industries/${ind.slug}`;
  return {
    title: `Custom software for ${ind.name}`,
    description: ind.intro.slice(0, 155),
    alternates: { canonical: url },
    openGraph: { title: `${ind.name} software | Kadmoon`, description: ind.intro.slice(0, 155), url, type: 'website' },
  };
}

export default function IndustryDetail({ params }: { params: { slug: string } }) {
  const ind = industryPages.find((x) => x.slug === params.slug);
  if (!ind) notFound();

  const posts = getAllPostMeta();
  const kw = ind.keyword.toLowerCase();
  const related = posts
    .filter((p) => `${p.slug} ${p.title} ${p.primaryKeyword}`.toLowerCase().includes(kw))
    .slice(0, 3);
  const others = industryPages.filter((x) => x.slug !== ind.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `Custom software for ${ind.name}`,
    provider: { '@type': 'Organization', name: siteConfig.legalName, url: siteConfig.url },
    areaServed: { '@type': 'Country', name: siteConfig.country },
    description: ind.intro,
    url: `${siteConfig.url}/industries/${ind.slug}`,
  };

  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="relative overflow-hidden pb-14 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-shell px-6">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Industries', href: '/industries' },
                { label: ind.name },
              ]}
            />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>{ind.flagship ? 'Flagship practice' : 'Industry'}</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                Custom software for <span className="text-accent">{ind.name}</span>.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">{ind.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact" size="lg">
                  Start a project <span aria-hidden>→</span>
                </Button>
                <Button href="/industries" size="lg" variant="ghost">
                  All industries
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-shell px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
                  Systems we build
                </h2>
                <ul className="mt-5 space-y-3">
                  {ind.systems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-ink">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
                  Common integrations
                </h2>
                <ul className="mt-5 space-y-3">
                  {ind.integrations.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-ink">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="mx-auto max-w-shell px-6 py-16 md:py-20">
            <h2 className="mb-6 font-display text-display-sm text-ink">Related reading</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}

        <section className="mx-auto max-w-shell px-6 pb-24">
          <h2 className="mb-6 font-display text-display-sm text-ink">Other industries</h2>
          <div className="flex flex-wrap gap-2">
            {others.map((o) => (
              <a
                key={o.slug}
                href={`/industries/${o.slug}`}
                className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-navy/30 hover:text-ink"
              >
                {o.name}
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
