import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#2d1f0e',
        borderRadius: 6,
      }}
    >
      <div
        style={{
          fontSize: 21,
          color: '#c8a87a',
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          lineHeight: 1,
          paddingTop: 2,
        }}
      >
        A
      </div>
    </div>,
    { width: 32, height: 32 }
  )
}
