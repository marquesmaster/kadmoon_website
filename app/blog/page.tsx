import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BlogExplorer } from '@/components/BlogExplorer';
import { Eyebrow } from '@/components/Eyebrow';
import { getAllPostMeta, getCategories } from '@/lib/blog';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog | Custom software, software house & trade tech insights',
  description:
    'Field notes on custom software, choosing a software house, trade & supply chain systems, SaaS, integrations, and AI, written for US buyers doing real due diligence.',
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: 'Kadmoon Blog | Custom software & software house insights',
    description:
      'Practical guides on custom software, trade & supply chain systems, cost, and vendor evaluation for US B2B buyers.',
    url: `${siteConfig.url}/blog`,
    type: 'website',
  },
};

export default function BlogIndex() {
  const posts = getAllPostMeta();
  const categories = getCategories();

  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden pb-8 pt-28 md:pt-36">
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
          </div>
        </section>

        <section className="mx-auto max-w-shell px-6 pb-24">
          <BlogExplorer posts={posts} categories={categories} />
        </section>
      </main>
      <Footer />
    </>
  );
}
