import { NextResponse } from 'next/server';
import { getAllPostMeta } from '@/lib/blog';
import { docs, docText } from '@/lib/docs';

// Static, build-time search index covering docs, blog, cases, and key pages.
// The client search overlay fetches this once on first open.
export const dynamic = 'force-static';

type IndexItem = { type: string; title: string; href: string; text: string; desc?: string };

const pages: IndexItem[] = [
  { type: 'Pages', title: 'Services', href: '/services', text: 'services power bi microsoft fabric azure data engineering dashboards semantic model governance migration', desc: 'Power BI and Microsoft Fabric' },
  { type: 'Pages', title: 'Power BI for Finance', href: '/power-bi-for-finance', text: 'finance operations month-end close budget vs actual variance gross margin cash flow AR aging FP&A controller CFO', desc: 'Power BI for finance and operations teams' },
  { type: 'Pages', title: 'Process', href: '/process', text: 'process methodology four phases discovery foundation build sustain', desc: 'How we deliver' },
  { type: 'Pages', title: 'About', href: '/about', text: 'about US microsoft data analytics power bi senior team', desc: 'A US Power BI and Microsoft data team' },
  { type: 'Pages', title: 'Contact', href: '/contact', text: 'contact book a 30-minute call power bi assessment', desc: 'Book a 30-minute call' },
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
