'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { KeyboardEvent as ReactKeyboardEvent } from 'react';

type IndexItem = { type: string; title: string; href: string; text: string; desc?: string };

const TYPE_ORDER = ['Docs', 'Cases', 'Blog', 'Pages'];

export function SearchOverlay() {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState<IndexItem[] | null>(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const load = useCallback(async () => {
    if (index) return;
    try {
      const res = await fetch('/search-index.json');
      if (!res.ok) return;
      const data = (await res.json()) as { items: IndexItem[] };
      setIndex(data.items || []);
    } catch {
      setIndex([]);
    }
  }, [index]);

  const openNow = useCallback(() => {
    setMounted(true);
    void load();
  }, [load]);

  useEffect(() => {
    const onEvt = () => openNow();
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openNow();
      }
    };
    window.addEventListener('kadmoon:search', onEvt);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('kadmoon:search', onEvt);
      window.removeEventListener('keydown', onKey);
    };
  }, [openNow]);

  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => inputRef.current?.focus(), 20);
    return () => {
      document.body.style.overflow = '';
      clearTimeout(t);
    };
  }, [mounted]);

  const results = useMemo(() => {
    if (!index) return [];
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const terms = q.split(/\s+/);
    const scored = index
      .map((it) => {
        const title = it.title.toLowerCase();
        const hay = `${it.title} ${it.desc ?? ''} ${it.text}`.toLowerCase();
        if (!terms.every((t) => hay.includes(t))) return null;
        let score = 0;
        if (title.includes(q)) score += 10;
        if (title.startsWith(q)) score += 5;
        for (const t of terms) if (title.includes(t)) score += 2;
        return { it, score };
      })
      .filter((x): x is { it: IndexItem; score: number } => x !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, 24)
      .map((x) => x.it);
    return scored;
  }, [index, query]);

  useEffect(() => setActive(0), [query]);

  const close = useCallback(() => {
    setMounted(false);
    setQuery('');
  }, []);

  const go = useCallback((href: string) => {
    window.location.href = href;
  }, []);

  const onKeyDown = (e: ReactKeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, Math.max(results.length - 1, 0)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter' && results[active]) {
      go(results[active].href);
    }
  };

  if (!mounted) return null;

  const grouped = TYPE_ORDER.map((type) => ({
    type,
    items: results.filter((r) => r.type === type),
  })).filter((g) => g.items.length > 0);

  let runningIndex = -1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
      className="fixed inset-0 z-[90] flex items-start justify-center px-4 pt-[12vh]"
      onKeyDown={onKeyDown}
    >
      <button aria-label="Close search" className="absolute inset-0 bg-navy/40 backdrop-blur-sm" onClick={close} />
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_32px_64px_-24px_rgba(9,38,66,0.45)]">
        <div className="flex items-center gap-3 border-b border-line px-4">
          <svg aria-hidden width="18" height="18" viewBox="0 0 16 16" className="text-ink-3">
            <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search docs, cases, and the blog"
            className="w-full bg-transparent py-4 text-[15px] text-ink outline-none placeholder:text-ink-3"
            aria-label="Search"
          />
          <button
            onClick={close}
            className="rounded-md border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3"
          >
            Esc
          </button>
        </div>

        <div className="max-h-[55vh] overflow-y-auto p-2">
          {!index && <p className="px-3 py-6 text-center text-sm text-ink-3">Loading…</p>}
          {index && query.trim() && results.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-ink-3">No results for &ldquo;{query}&rdquo;.</p>
          )}
          {index && !query.trim() && (
            <p className="px-3 py-6 text-center text-sm text-ink-3">
              Type to search the methodology docs, case studies, and articles.
            </p>
          )}

          {grouped.map((group) => (
            <div key={group.type} className="mb-2">
              <p className="px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3">
                {group.type}
              </p>
              <ul>
                {group.items.map((r) => {
                  runningIndex += 1;
                  const idx = runningIndex;
                  return (
                    <li key={r.href}>
                      <a
                        href={r.href}
                        onMouseEnter={() => setActive(idx)}
                        className={`block rounded-lg px-3 py-2.5 ${idx === active ? 'bg-mist' : ''}`}
                      >
                        <span className="block text-sm font-semibold text-ink">{r.title}</span>
                        {r.desc && (
                          <span className="mt-0.5 block truncate text-[13px] text-ink-3">{r.desc}</span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
