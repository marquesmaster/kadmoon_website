import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { categorySlug, type PostMeta, type PostCategory } from './blog-shared';

export { categorySlug };
export type { PostMeta, PostCategory };

export type TocItem = { id: string; text: string; level: number };
export type PostFaq = { q: string; a: string };
export type Post = PostMeta & {
  html: string;
  toc: TocItem[];
  takeaways: string[];
  faqs: PostFaq[];
};

function parseFaqs(raw: unknown): PostFaq[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((f) => {
      const o = f as { q?: unknown; a?: unknown };
      return { q: String(o?.q ?? ''), a: String(o?.a ?? '') };
    })
    .filter((f) => f.q && f.a);
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

marked.setOptions({ gfm: true, breaks: false });

/**
 * Canonical "pillar" explainer posts. The first mention of one of these
 * phrases in an article's body prose is turned into a link to the pillar,
 * which concentrates internal link equity on the pages we most want to rank
 * and gives readers an in-context route deeper. Phrases are matched longest
 * first (so "on-premises data gateway" wins over "data gateway"), at most once
 * per target per post, only in body text (never in headings, code, or existing
 * links), never pointing a post at itself, and only when the target exists.
 */
const PILLAR_LINKS: { phrase: string; slug: string }[] = [
  { phrase: 'on-premises data gateway', slug: 'power-bi-on-premises-data-gateway-explained' },
  { phrase: 'import vs directquery', slug: 'import-vs-directquery-how-power-bi-connects-to-your-data' },
  { phrase: 'row-level security', slug: 'power-bi-row-level-security-explained' },
  { phrase: 'deployment pipelines', slug: 'power-bi-deployment-pipelines-explained' },
  { phrase: 'deployment pipeline', slug: 'power-bi-deployment-pipelines-explained' },
  { phrase: 'customer segmentation', slug: 'customer-segmentation-with-power-bi' },
  { phrase: 'what-if parameters', slug: 'power-bi-what-if-parameters-explained' },
  { phrase: 'incremental refresh', slug: 'power-bi-incremental-refresh-explained' },
  { phrase: 'certified datasets', slug: 'power-bi-certified-and-promoted-datasets' },
  { phrase: 'calculated columns', slug: 'power-bi-measures-vs-calculated-columns' },
  { phrase: 'cohort analysis', slug: 'cohort-analysis-explained' },
  { phrase: 'semantic models', slug: 'power-bi-semantic-models-explained' },
  { phrase: 'semantic model', slug: 'power-bi-semantic-models-explained' },
  { phrase: 'shared datasets', slug: 'power-bi-shared-datasets-one-model-many-reports' },
  { phrase: 'shared dataset', slug: 'power-bi-shared-datasets-one-model-many-reports' },
  { phrase: 'data gateway', slug: 'power-bi-on-premises-data-gateway-explained' },
  { phrase: 'data lineage', slug: 'power-bi-data-lineage-explained' },
  { phrase: 'star schema', slug: 'star-schema-why-your-data-model-shape-matters' },
  { phrase: 'directquery', slug: 'import-vs-directquery-how-power-bi-connects-to-your-data' },
  { phrase: 'date table', slug: 'power-bi-why-you-need-a-date-table' },
];

const PILLARS = [...PILLAR_LINKS]
  .map((p) => ({ phrase: p.phrase.toLowerCase(), slug: p.slug }))
  .sort((a, b) => b.phrase.length - a.phrase.length);

const isWordChar = (ch: string) => /[a-z0-9]/i.test(ch);

/**
 * Inject pillar links into a single run of plain body text, left to right.
 * At each position the longest unused pillar phrase that matches with word
 * boundaries wins; the match is wrapped in an anchor and scanning resumes
 * after it, so freshly injected markup is never re-scanned. `used` (keyed by
 * target slug) and `state.count` are threaded across the whole post so each
 * pillar is linked at most once and the per-post cap is respected.
 */
function linkTextRun(
  text: string,
  targets: { phrase: string; slug: string }[],
  used: Set<string>,
  state: { count: number; max: number },
): string {
  if (state.count >= state.max) return text;
  const lower = text.toLowerCase();
  let out = '';
  let i = 0;
  while (i < text.length) {
    if (state.count >= state.max) {
      out += text.slice(i);
      break;
    }
    let hit: { slug: string; len: number } | null = null;
    for (const t of targets) {
      if (used.has(t.slug)) continue;
      if (!lower.startsWith(t.phrase, i)) continue;
      const before = i > 0 ? text[i - 1] : ' ';
      const after = i + t.phrase.length < text.length ? text[i + t.phrase.length] : ' ';
      if (!isWordChar(before) && !isWordChar(after)) {
        hit = { slug: t.slug, len: t.phrase.length };
        break;
      }
    }
    if (hit) {
      const orig = text.slice(i, i + hit.len);
      out += `<a href="/blog/${hit.slug}">${orig}</a>`;
      used.add(hit.slug);
      state.count++;
      i += hit.len;
    } else {
      out += text[i];
      i++;
    }
  }
  return out;
}

/**
 * Add in-body contextual links to pillar posts. Operates on the rendered HTML,
 * walking tags and text so links are only ever placed in body prose: headings,
 * existing anchors, and code/pre blocks are skipped entirely.
 */
function addContextualLinks(html: string, currentSlug: string, slugSet: Set<string>, max = 4): string {
  const targets = PILLARS.filter((p) => p.slug !== currentSlug && slugSet.has(p.slug));
  if (targets.length === 0) return html;

  const parts = html.split(/(<[^>]+>)/);
  const skipOpen = /^<(a|code|pre|h[1-6])(\s|>)/i;
  const skipClose = /^<\/(a|code|pre|h[1-6])>/i;
  let skipDepth = 0;
  const used = new Set<string>();
  const state = { count: 0, max };

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part) continue;
    if (part.startsWith('<')) {
      if (skipClose.test(part)) skipDepth = Math.max(0, skipDepth - 1);
      else if (skipOpen.test(part) && !part.endsWith('/>')) skipDepth++;
      continue;
    }
    if (skipDepth === 0) parts[i] = linkTextRun(part, targets, used, state);
  }
  return parts.join('');
}

/**
 * Add stable ids to the H2/H3 headings in the rendered HTML and return the
 * table of contents. Anchor ids power in-page navigation and help search
 * engines and AI extractors understand the article structure.
 */
function withHeadingAnchors(html: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  let i = 0;
  const out = html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_m, level: string, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, '').trim();
    const base = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 60);
    const id = `${base || 'section'}-${i++}`;
    toc.push({ id, text, level: Number(level) });
    return `<h${level} id="${id}">${inner}</h${level}>`;
  });
  return { html: out, toc };
}

/**
 * Deterministic publish date from the slug so the build is reproducible and
 * dates are spread across roughly the last 18 months. We avoid Date.now() at
 * module scope so static generation stays stable between builds.
 */
function dateForSlug(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  const end = Date.UTC(2026, 5, 1); // June 1, 2026 as the newest boundary
  const spanDays = 540; // ~18 months
  const offsetDays = hash % spanDays;
  const d = new Date(end - offsetDays * 24 * 60 * 60 * 1000);
  return d.toISOString().slice(0, 10);
}

function readingTimeFor(words: number): string {
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

let cache: Post[] | null = null;

export function getAllPosts(): Post[] {
  if (cache) return cache;
  if (!fs.existsSync(BLOG_DIR)) {
    cache = [];
    return cache;
  }
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
    const { data, content } = matter(raw);
    const wordCount = content.trim().split(/\s+/).length;
    const parsed = marked.parse(content) as string;
    const { html, toc } = withHeadingAnchors(parsed);
    return {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ''),
      category: String(data.category ?? 'Custom Software'),
      primaryKeyword: String(data.primaryKeyword ?? ''),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      date: String(data.date ?? dateForSlug(slug)),
      readingTime: readingTimeFor(wordCount),
      wordCount,
      html,
      toc,
      takeaways: Array.isArray(data.takeaways) ? data.takeaways.map(String) : [],
      faqs: parseFaqs(data.faqs),
    } satisfies Post;
  });
  // Second pass: inject in-body links to pillar posts now that every slug is
  // known, so a link is only added when its target actually exists.
  const slugSet = new Set(posts.map((p) => p.slug));
  for (const p of posts) {
    p.html = addContextualLinks(p.html, p.slug, slugSet);
  }
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  cache = posts;
  return posts;
}

export function getAllPostMeta(): PostMeta[] {
  return getAllPosts().map(({ html, toc, takeaways, faqs, ...meta }) => meta);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

const RELATED_STOPWORDS = new Set([
  'power', 'bi', 'the', 'a', 'an', 'to', 'of', 'for', 'and', 'in', 'with', 'on',
  'your', 'you', 'is', 'are', 'it', 'that', 'this', 'how', 'what', 'why', 'when',
  'vs', 'not', 'into', 'from', 'can', 'do', 'does', 'get', 'got', 'its',
]);

function significantTokens(s: string): Set<string> {
  return new Set(
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .split(' ')
      .filter((w) => w.length > 2 && !RELATED_STOPWORDS.has(w)),
  );
}

function normalizedTags(tags: string[]): Set<string> {
  return new Set(tags.map((t) => t.toLowerCase().trim()).filter(Boolean));
}

/**
 * Pick the most topically related posts for internal linking.
 *
 * Relevance is scored, not just "same category by date". With ~180 posts split
 * across a couple of large categories, same-category ordering is effectively
 * arbitrary. Instead we weight shared tags by inverse document frequency, so a
 * ubiquitous tag like "Power BI" (on nearly every post) counts for almost
 * nothing while a rare, specific tag ("retail", "DAX", "occupancy") dominates,
 * and we add shared title/keyword tokens plus a light same-category tiebreaker.
 * A genuinely related post therefore links to its real neighbours, which is
 * what concentrates internal link equity usefully. We still guarantee the block
 * is filled, topping up with same-category then recent posts when a post has
 * few strong matches, so no article shows an empty "Keep reading".
 */
export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const all = getAllPosts();
  const current = all.find((p) => p.slug === slug);
  if (!current) return [];

  const n = all.length;
  const docFreq = new Map<string, number>();
  for (const p of all) {
    for (const t of normalizedTags(p.tags)) {
      docFreq.set(t, (docFreq.get(t) ?? 0) + 1);
    }
  }
  const idf = (tag: string) => Math.log(n / (docFreq.get(tag) ?? 1));

  const currentTags = normalizedTags(current.tags);
  const currentTokens = significantTokens(`${current.title} ${current.primaryKeyword}`);

  const scored = all
    .filter((p) => p.slug !== slug)
    .map((p) => {
      let score = 0;
      for (const t of normalizedTags(p.tags)) {
        if (currentTags.has(t)) score += idf(t);
      }
      for (const tok of significantTokens(`${p.title} ${p.primaryKeyword}`)) {
        if (currentTokens.has(tok)) score += 0.6;
      }
      if (p.category === current.category) score += 0.3;
      return { p, score };
    })
    .sort((a, b) => b.score - a.score || (a.p.date < b.p.date ? 1 : -1));

  // A single shared specific tag or title token clears this; a shared
  // ubiquitous tag plus same category (~0.3) does not, so arbitrary
  // same-category posts only appear as fill, never as false "related".
  const picked = scored.filter((s) => s.score > 0.35).slice(0, limit).map((s) => s.p);

  if (picked.length < limit) {
    const have = new Set<string>([slug, ...picked.map((p) => p.slug)]);
    const fill = [
      ...all.filter((p) => !have.has(p.slug) && p.category === current.category),
      ...all.filter((p) => !have.has(p.slug) && p.category !== current.category),
    ];
    for (const p of fill) {
      if (picked.length >= limit) break;
      picked.push(p);
      have.add(p.slug);
    }
  }

  return picked.slice(0, limit).map(({ html, toc, takeaways, faqs, ...m }) => m);
}

export function getCategories(): { name: string; slug: string; count: number }[] {
  const map = new Map<string, number>();
  for (const p of getAllPosts()) {
    map.set(p.category, (map.get(p.category) ?? 0) + 1);
  }
  return [...map.entries()]
    .map(([name, count]) => ({ name, slug: categorySlug(name), count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByCategorySlug(slug: string): PostMeta[] {
  return getAllPostMeta().filter((p) => categorySlug(p.category) === slug);
}
