import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BlogExplorer } from '@/components/BlogExplorer';
import { Eyebrow } from '@/components/Eyebrow';
import { PageHero } from '@/components/sections/PageHero';
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
        <PageHero
          eyebrow="Insights"
          title="Notes on data worth trusting."
          breadcrumbs={<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />}
        >
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            Practical writing on Power BI, Microsoft Fabric, semantic models, governance, and BI
            migrations, and the questions a serious data leader should ask. {posts.length} articles
            and counting.
          </p>
        </PageHero>

        <section className="mx-auto max-w-shell px-6 pb-24">
          <BlogExplorer posts={posts} categories={categories} />
        </section>
      </main>
      <Footer />
    </>
  );
}
