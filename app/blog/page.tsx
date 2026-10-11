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
  title: 'Blog | Foreign-trade analytics, customs & logistics insights',
  description:
    'Field notes on foreign-trade analytics: landed cost, duty exposure, customs and compliance, inventory, logistics, and the data that runs a cross-border operation. Written for US buyers doing real due diligence.',
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: 'Kadmoon Blog | Foreign-trade analytics insights',
    description:
      'Practical guides on landed cost, duty, customs, logistics, and the analytics a cross-border operation runs on, for US B2B buyers.',
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
          title="Notes on the business of trade."
          breadcrumbs={<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />}
        >
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            Practical writing on customs and compliance, landed cost, inventory, logistics, and the
            analytics and software that run a cross-border operation. {posts.length} articles and
            counting.
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
