import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BlogCard } from '@/components/BlogCard';
import { Eyebrow } from '@/components/Eyebrow';
import { getCategories, getPostsByCategorySlug } from '@/lib/blog';
import { siteConfig } from '@/lib/site';

export function generateStaticParams() {
  return getCategories().map((c) => ({ category: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const cat = getCategories().find((c) => c.slug === params.category);
  if (!cat) return {};
  const url = `${siteConfig.url}/blog/category/${cat.slug}`;
  return {
    title: `${cat.name} — Kadmoon blog`,
    description: `${cat.count} articles on ${cat.name.toLowerCase()} for US software buyers: practical, specific, and written for people doing real vendor due diligence.`,
    alternates: { canonical: url },
    openGraph: { title: `${cat.name} — Kadmoon blog`, url, type: 'website' },
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const cat = getCategories().find((c) => c.slug === params.category);
  if (!cat) notFound();
  const posts = getPostsByCategorySlug(cat.slug);

  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden pb-8 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-shell px-6">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: cat.name },
              ]}
            />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>{cat.count} articles</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">{cat.name}</h1>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-shell px-6 pb-20">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
