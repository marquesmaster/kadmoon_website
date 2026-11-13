import { NextResponse } from 'next/server';
import { getAllPostMeta } from '@/lib/blog';
import { caseStudies } from '@/lib/content';
import { docs, docText } from '@/lib/docs';

// Static, build-time search index covering docs, blog, cases, and key pages.
// The client search overlay fetches this once on first open.
export const dynamic = 'force-static';

type IndexItem = { type: string; title: string; href: string; text: string; desc?: string };

const pages: IndexItem[] = [
  { type: 'Pages', title: 'Services', href: '/services', text: 'services power bi power platform microsoft fabric azure copilot data engineering dashboards semantic model', desc: 'Power BI and the Microsoft stack' },
  { type: 'Pages', title: 'Industries', href: '/industries', text: 'industries finance operations retail e-commerce healthcare manufacturing professional services saas technology nonprofit education', desc: 'Who we serve' },
  { type: 'Pages', title: 'Process', href: '/process', text: 'process methodology four phases discovery foundation build sustain', desc: 'How we deliver' },
  { type: 'Pages', title: 'About', href: '/about', text: 'about US microsoft data analytics power bi senior team', desc: 'A US Power BI and Microsoft data team' },
  { type: 'Pages', title: 'Contact', href: '/contact', text: 'contact request a quote power bi assessment', desc: 'Request a quote' },
];

export function GET() {
  const items: IndexItem[] = [
    ...docs.map((d) => ({
      type: 'Docs',
      title: d.title,
      href: `/docs/${d.slug}`,
      desc: d.description,
      text: docText(d),
    })),
    ...caseStudies.map((c) => ({
      type: 'Cases',
      title: c.title,
      href: `/cases/${c.slug}`,
      desc: c.summary,
      text: `${c.title} ${c.summary} ${c.sector} ${c.challenge} ${c.dataSources.join(' ')}`,
    })),
    ...getAllPostMeta().map((p) => ({
      type: 'Blog',
      title: p.title,
      href: `/blog/${p.slug}`,
      desc: p.description,
      text: `${p.title} ${p.description} ${p.category}`,
    })),
    ...pages,
  ];

  return NextResponse.json({ items });
}
