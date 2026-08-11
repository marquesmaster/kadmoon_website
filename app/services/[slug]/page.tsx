import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { BlogCard } from '@/components/BlogCard';
import { services } from '@/lib/content';
import { getPostsByCategorySlug, categorySlug } from '@/lib/blog';
import { siteConfig } from '@/lib/site';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  const url = `${siteConfig.url}/services/${s.slug}`;
  return {
    title: `${s.title} | Kadmoon`,
    description: s.tagline,
    alternates: { canonical: url },
    openGraph: { title: `${s.title} | Kadmoon`, description: s.tagline, url, type: 'website' },
  };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const related = getPostsByCategorySlug(categorySlug(s.blogCategory)).slice(0, 3);
  const others = services.filter((x) => x.slug !== s.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: s.title,
    provider: { '@type': 'Organization', name: siteConfig.legalName, url: siteConfig.url },
    areaServed: { '@type': 'Country', name: siteConfig.country },
    description: s.tagline,
    url: `${siteConfig.url}/services/${s.slug}`,
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
                { label: 'Services', href: '/services' },
                { label: s.title },
              ]}
            />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>Capability</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">{s.title}</h1>
              <p className="mt-4 text-xl font-medium text-navy">{s.tagline}</p>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">{s.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact" size="lg">
                  Start a project <span aria-hidden>→</span>
                </Button>
                <Button href="/services" size="lg" variant="ghost">
                  All services
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
                  What’s included
                </h2>
                <ul className="mt-5 space-y-3">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-ink">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
                  Typical outcomes
                </h2>
                <ul className="mt-5 space-y-3">
                  {s.outcomes.map((item) => (
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
          <h2 className="mb-6 font-display text-display-sm text-ink">Other capabilities</h2>
          <div className="flex flex-wrap gap-2">
            {others.map((o) => (
              <a
                key={o.slug}
                href={`/services/${o.slug}`}
                className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-navy/30 hover:text-ink"
              >
                {o.title}
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
