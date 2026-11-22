import { ImageResponse } from 'next/og';

export const alt = 'Kadmoon: Power BI and Microsoft data analytics for US businesses, in your own tenant.';
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
          background: '#1B0E33',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: 40, fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em' }}>
            Kadmoon
          </span>
          <span style={{ fontSize: 16, fontWeight: 600, color: '#A78BFA', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Business Intelligence
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 24,
              color: '#A78BFA',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Power BI · Microsoft Fabric · United States
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
            Power BI for finance and operations teams.
          </div>
        </div>

        <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.65)' }}>
          Power BI · Microsoft Fabric · Finance &amp; Operations
        </div>
      </div>
    ),
    { ...size },
  );
}
