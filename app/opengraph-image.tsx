import { ImageResponse } from 'next/og';

export const alt = 'Kadmoon, Inc. — custom software built for how your business actually runs.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
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
          <span style={{ fontSize: 40, fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em' }}>
            Kadmoon
          </span>
          <span style={{ fontSize: 18, fontWeight: 600, color: '#EA5A1F', letterSpacing: '0.16em' }}>
            INC.
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 24,
              color: '#EA5A1F',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Custom software firm · Austin, TX
          </div>
          <div
            style={{
              fontSize: 62,
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: 980,
            }}
          >
            The custom software your operation runs on—built for your process, owned by you.
          </div>
        </div>

        <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.65)' }}>
          Enterprise systems · SaaS · Mobile · Data &amp; AI · Trade &amp; Supply Chain
        </div>
      </div>
    ),
    { ...size },
  );
}
