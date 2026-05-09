import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#2d1f0e',
        borderRadius: 36,
      }}
    >
      <div
        style={{
          fontSize: 118,
          color: '#c8a87a',
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          lineHeight: 1,
          paddingTop: 10,
        }}
      >
        A
      </div>
    </div>,
    { width: 180, height: 180 }
  )
}
