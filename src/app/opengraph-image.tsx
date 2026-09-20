import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'John Bryce | Full Stack & AI Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#1D1D20',
          color: '#ECEFF1',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            width: '160px',
            height: '8px',
            marginBottom: '40px',
            backgroundImage: 'linear-gradient(90deg, #C97064, #2196F3)',
          }}
        />
        <div style={{ fontSize: 84, fontWeight: 700 }}>John Bryce</div>
        <div style={{ fontSize: 40, marginTop: 16, color: '#C97064' }}>
          Full Stack & AI Software Engineer
        </div>
        <div style={{ fontSize: 28, marginTop: 40, color: '#707070' }}>
          jbryce.dev
        </div>
      </div>
    ),
    size
  )
}
