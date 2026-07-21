import { siteConfig } from '@/lib/site';

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-mono text-xs text-ink-3">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`} className="flex items-center gap-2">
          {item.href ? (
            <a href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </a>
          ) : (
            <span className="text-ink-2">{item.label}</span>
          )}
          {i < items.length - 1 && <span aria-hidden className="text-line">/</span>}
        </span>
      ))}
    </nav>
  );
}
