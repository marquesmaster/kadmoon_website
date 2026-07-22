'use client';

import { useMemo, useState } from 'react';
import type { PostMeta } from '@/lib/blog-shared';
import { BlogCard } from './BlogCard';

type Cat = { name: string; slug: string; count: number };

export function BlogExplorer({
  posts,
  categories,
}: {
  posts: PostMeta[];
  categories: Cat[];
}) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<string>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (active !== 'all' && p.category !== active) return false;
      if (!q) return true;
      const hay = `${p.title} ${p.description} ${p.category} ${p.tags.join(' ')}`.toLowerCase();
      return hay.includes(q);
    });
  }, [posts, query, active]);

  return (
    <div>
      <div className="flex flex-col gap-5">
        {/* Search box */}
        <div className="relative max-w-xl">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            aria-label="Search articles"
            className="w-full rounded-full border border-line bg-paper py-3 pl-11 pr-4 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-3 focus:border-accent"
          />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActive('all')}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === 'all'
                ? 'border-navy bg-navy text-white'
                : 'border-line bg-paper text-ink-2 hover:border-navy/30 hover:text-ink'
            }`}
          >
            All
            <span className="ml-1.5 font-mono text-xs opacity-70">{posts.length}</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setActive(cat.name)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === cat.name
                  ? 'border-navy bg-navy text-white'
                  : 'border-line bg-paper text-ink-2 hover:border-navy/30 hover:text-ink'
              }`}
            >
              {cat.name}
              <span className="ml-1.5 font-mono text-xs opacity-70">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <p className="mt-8 font-mono text-xs uppercase tracking-[0.1em] text-ink-3">
        {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-line bg-mist p-10 text-center">
          <p className="text-ink-2">
            No articles match “{query}”. Try another term or clear the filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setActive('all');
            }}
            className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-navy"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
