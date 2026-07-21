import { ImageResponse } from 'next/og';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

export const alt = 'Kadmoon blog article';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const title = post?.title ?? 'Kadmoon';
  const category = post?.category ?? 'Custom software';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0C1D44',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: 34, fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em' }}>
            Kadmoon
          </span>
          <span style={{ fontSize: 16, fontWeight: 600, color: '#EA5A1F', letterSpacing: '0.16em' }}>
            INC.
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 22,
              color: '#EA5A1F',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            {category}
          </div>
          <div
            style={{
              fontSize: title.length > 70 ? 52 : 62,
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              maxWidth: 1000,
              display: 'flex',
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.65)' }}>
          kadmoon.com · Custom software firm, Austin TX
        </div>
      </div>
    ),
    { ...size },
  );
}
