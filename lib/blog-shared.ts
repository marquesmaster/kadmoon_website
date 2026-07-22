// Client-safe blog types and helpers (no fs / server-only imports).

export type PostCategory = string;

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  category: PostCategory;
  primaryKeyword: string;
  tags: string[];
  date: string;
  readingTime: string;
  wordCount: number;
};

export function categorySlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
