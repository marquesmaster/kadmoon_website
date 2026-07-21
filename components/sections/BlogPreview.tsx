import { getAllPostMeta } from '@/lib/blog';
import { Section } from '../Section';
import { Eyebrow } from '../Eyebrow';
import { BlogCard } from '../BlogCard';
import { Reveal } from '../Reveal';

export function BlogPreview() {
  const posts = getAllPostMeta().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <Section id="insights" tone="paper">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <Eyebrow>Insights</Eyebrow>
          <h2 className="mt-4 font-display text-display-md text-ink">
            Field notes for people evaluating a build.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-2 md:text-lg">
            Practical, data-backed writing on custom software, trade and supply chain systems,
            cost, and vendor due diligence.
          </p>
        </div>
        <a
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-navy/30"
        >
          Read the blog <span aria-hidden>→</span>
        </a>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </Section>
  );
}
