import { NextResponse } from 'next/server';
import { getAllPostMeta } from '@/lib/blog';
import { caseStudies } from '@/lib/content';
import { docs, docText } from '@/lib/docs';

// Static, build-time search index covering docs, blog, cases, and key pages.
// The client search overlay fetches this once on first open.
export const dynamic = 'force-static';

type IndexItem = { type: string; title: string; href: string; text: string; desc?: string };

const pages: IndexItem[] = [
  { type: 'Pages', title: 'Solutions', href: '/services', text: 'solutions analytics platforms trade ERP customs compliance inventory logistics', desc: 'What we build for trade' },
  { type: 'Pages', title: 'Industries', href: '/industries', text: 'industries importers exporters customs brokers freight forwarders 3PL ports manufacturers', desc: 'Who we serve' },
  { type: 'Pages', title: 'Process', href: '/process', text: 'process methodology four phases discovery foundation build sustain', desc: 'How we deliver' },
  { type: 'Pages', title: 'About', href: '/about', text: 'about US software company foreign trade senior team', desc: 'A US firm built for trade' },
  { type: 'Pages', title: 'Contact', href: '/contact', text: 'contact request a quote trade data assessment', desc: 'Request a quote' },
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
