import { categorySlug, type PostMeta } from '@/lib/blog-shared';

export function BlogCard({ post, featured = false }: { post: PostMeta; featured?: boolean }) {
  return (
    <article
      className={`group flex flex-col rounded-2xl border border-line bg-paper p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-7 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="flex items-center gap-3">
        <a
          href={`/blog/category/${categorySlug(post.category)}`}
          className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent transition-colors hover:text-navy"
        >
          {post.category}
        </a>
        <span aria-hidden className="text-line">·</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
          {post.readingTime}
        </span>
      </div>

      <h3
        className={`mt-4 font-display font-semibold tracking-[-0.02em] text-ink ${
          featured ? 'text-2xl' : 'text-lg'
        }`}
      >
        <a href={`/blog/${post.slug}`} className="transition-colors group-hover:text-navy">
          {post.title}
        </a>
      </h3>

      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-2">
        {post.description}
      </p>

      <a
        href={`/blog/${post.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-navy"
      >
        Read
        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </a>
    </article>
  );
}
