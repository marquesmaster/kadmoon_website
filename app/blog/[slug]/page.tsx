import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BlogCard } from '@/components/BlogCard';
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  categorySlug,
} from '@/lib/blog';
import { siteConfig } from '@/lib/site';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const url = `${siteConfig.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: [post.primaryKeyword, ...post.tags],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [siteConfig.legalName],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  const related = getRelatedPosts(post.slug, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: siteConfig.legalName, url: siteConfig.url },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    keywords: [post.primaryKeyword, ...post.tags].join(', '),
    articleSection: post.category,
  };

  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />

        <article className="pb-16 pt-28 md:pt-32">
          <div className="mx-auto max-w-3xl px-6">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: post.category, href: `/blog/category/${categorySlug(post.category)}` },
                { label: post.title },
              ]}
            />

            <div className="mt-6 flex items-center gap-3">
              <a
                href={`/blog/category/${categorySlug(post.category)}`}
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent"
              >
                {post.category}
              </a>
              <span aria-hidden className="text-line">·</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">
                {post.readingTime}
              </span>
            </div>

            <h1 className="mt-4 font-display text-display-md text-ink">{post.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-2">{post.description}</p>

            <div className="mt-8 border-t border-line pt-8" />

            {post.toc.filter((t) => t.level === 2).length >= 3 && (
              <nav
                aria-label="Table of contents"
                className="mb-10 rounded-2xl border border-line bg-mist p-6"
              >
                <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
                  In this article
                </h2>
                <ol className="mt-3 space-y-2">
                  {post.toc
                    .filter((t) => t.level === 2)
                    .map((t) => (
                      <li key={t.id}>
                        <a
                          href={`#${t.id}`}
                          className="text-[15px] text-ink-2 transition-colors hover:text-accent"
                        >
                          {t.text}
                        </a>
                      </li>
                    ))}
                </ol>
              </nav>
            )}

            <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </article>

        {/* Inline CTA */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <div className="relative overflow-hidden rounded-2xl bg-navy p-8 md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
            <div className="relative">
              <h2 className="font-display text-2xl font-semibold text-white">
                Have a project that fits this?
              </h2>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/70">
                Tell us about it and you get a technical proposal within one business day, covering
                scope, architecture, timeline, and investment.
              </p>
              <a
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent/90"
              >
                Start a project <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="mx-auto max-w-shell px-6 pb-20">
            <h2 className="mb-6 font-display text-display-sm text-ink">Keep reading</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
