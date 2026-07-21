import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BlogCard } from '@/components/BlogCard';
import { Eyebrow } from '@/components/Eyebrow';
import { getAllPostMeta, getCategories, getPostsByCategorySlug } from '@/lib/blog';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog — Custom software, software house & trade tech insights',
  description:
    'Field notes on custom software, choosing a software house, trade & supply chain systems, SaaS, integrations, and AI — written for US buyers doing real due diligence.',
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: 'Kadmoon Blog — Custom software & software house insights',
    description:
      'Practical guides on custom software, trade & supply chain systems, cost, and vendor evaluation for US B2B buyers.',
    url: `${siteConfig.url}/blog`,
    type: 'website',
  },
};

export default function BlogIndex() {
  const posts = getAllPostMeta();
  const categories = getCategories();
  const featured = posts.slice(0, 3);

  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden pb-10 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-shell px-6">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>Insights</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                Notes on building software worth owning.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                Practical writing on custom software, choosing a software house, trade and supply
                chain systems, cost, and the questions a serious buyer should ask. {posts.length}{' '}
                articles and counting.
              </p>
            </div>

            {categories.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <a
                    key={cat.slug}
                    href={`/blog/category/${cat.slug}`}
                    className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-navy/30 hover:text-ink"
                  >
                    {cat.name}
                    <span className="ml-1.5 font-mono text-xs text-ink-3">{cat.count}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        {featured.length > 0 && (
          <section className="mx-auto max-w-shell px-6 pb-8">
            <div className="grid gap-5 lg:grid-cols-3">
              {featured.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {categories.map((cat) => {
          const catPosts = getPostsByCategorySlug(cat.slug);
          if (catPosts.length === 0) return null;
          return (
            <section key={cat.slug} className="mx-auto max-w-shell px-6 py-10">
              <div className="mb-6 flex items-end justify-between">
                <h2 className="font-display text-display-sm text-ink">{cat.name}</h2>
                <a
                  href={`/blog/category/${cat.slug}`}
                  className="font-mono text-xs uppercase tracking-[0.1em] text-navy hover:text-accent"
                >
                  All {cat.count} →
                </a>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {catPosts.slice(0, 6).map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
