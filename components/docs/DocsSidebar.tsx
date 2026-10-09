import { docs } from '@/lib/docs';

// Left navigation for the docs section. `current` is the active doc slug, or
// 'overview' for the /docs hub.
export function DocsSidebar({ current }: { current: string }) {
  const groups: { title: string; items: { slug: string; title: string; href: string }[] }[] = [
    {
      title: 'Get started',
      items: [
        { slug: 'overview', title: 'Overview', href: '/docs' },
        ...docs
          .filter((d) => d.group === 'Get started')
          .sort((a, b) => a.order - b.order)
          .map((d) => ({ slug: d.slug, title: d.title, href: `/docs/${d.slug}` })),
      ],
    },
    {
      title: 'Reference',
      items: docs
        .filter((d) => d.group === 'Reference')
        .sort((a, b) => a.order - b.order)
        .map((d) => ({ slug: d.slug, title: d.title, href: `/docs/${d.slug}` })),
    },
  ];

  return (
    <nav aria-label="Docs" className="space-y-7">
      {groups.map((group) => (
        <div key={group.title}>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">{group.title}</p>
          <ul className="mt-3 space-y-0.5">
            {group.items.map((it) => {
              const activeItem = it.slug === current;
              return (
                <li key={it.href}>
                  <a
                    href={it.href}
                    aria-current={activeItem ? 'page' : undefined}
                    className={`block rounded-lg px-3 py-2 text-[14px] transition-colors ${
                      activeItem
                        ? 'bg-mist font-semibold text-accent'
                        : 'text-ink-2 hover:bg-mist hover:text-ink'
                    }`}
                  >
                    {it.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
