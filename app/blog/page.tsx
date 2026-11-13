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
  title: 'Blog | Power BI, Power Platform & the Microsoft data stack',
  description:
    'Field notes on Power BI and the Microsoft stack: governed semantic models, Power BI governance and migration, Power Platform automation, Microsoft Fabric data engineering, and Copilot and AI. Written for US buyers doing real due diligence.',
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: 'Kadmoon Blog | Power BI and Microsoft data insights',
    description:
      'Practical guides on Power BI, governed models, Microsoft Fabric, the Power Platform, and Copilot, for US B2B buyers.',
    url: `${siteConfig.url}/blog`,
    type: 'website',
    images: ['/opengraph-image'],
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
          title="Notes on Power BI and the Microsoft stack."
          breadcrumbs={<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />}
        >
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            Practical writing on Power BI, governed semantic models, the Power Platform, Microsoft
            Fabric, and Copilot and AI. {posts.length} articles and counting.
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
