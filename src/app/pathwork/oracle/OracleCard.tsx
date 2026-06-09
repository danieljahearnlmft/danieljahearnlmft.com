'use client'

import { useState } from 'react'
import { Card, elements, HAS_CARD_ART, cardImage } from './cards'
import Motif from './Motif'

// Visual sizes for the card face.
type Size = 'sm' | 'md' | 'lg'

const dims: Record<Size, string> = {
  sm: 'w-[112px] text-[9px]',
  md: 'w-[180px] text-[11px]',
  lg: 'w-full max-w-[300px] text-[13px]',
}

export function CardFace({
  card,
  size = 'md',
  className = '',
}: {
  card: Card
  size?: Size
  className?: string
}) {
  const e = elements[card.element]
  const [artFailed, setArtFailed] = useState(false)
  const showArt = HAS_CARD_ART && !artFailed
  return (
    <div
      className={`relative aspect-[3/5] rounded-xl overflow-hidden shadow-lg ring-1 ring-black/10 ${dims[size]} ${className}`}
      style={{ background: `linear-gradient(155deg, ${e.from}, ${e.to})`, color: e.ink }}
    >
      {/* Ana's painted card — full-bleed, the complete card face. Falls back to
          the designed face below if the file is missing. */}
      {showArt && (
        <img
          src={cardImage(card.id)}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover z-10"
          loading="lazy"
          onError={() => setArtFailed(true)}
        />
      )}

      {/* gold inner frame */}
      <div
        className="absolute inset-[5%] rounded-lg pointer-events-none"
        style={{ border: `1px solid ${e.accent}`, opacity: 0.5 }}
      />
      {/* card number */}
      <div className="absolute top-[6%] left-0 right-0 text-center tracking-[0.3em] uppercase opacity-70"
        style={{ fontSize: '0.85em' }}>
        {String(card.n).padStart(2, '0')}
      </div>

      {/* motif */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[16%] w-[44%]" style={{ color: e.accent }}>
        <Motif motif={card.motif} className="w-full h-auto" />
      </div>

      {/* title */}
      <div className="absolute left-0 right-0 top-[52%] px-[10%] text-center">
        <p className="font-serif leading-tight" style={{ fontSize: '1.45em' }}>
          {card.title}
        </p>
      </div>

      {/* phrase / element label */}
      <div className="absolute left-0 right-0 bottom-[7%] px-[10%] text-center">
        {card.phrase ? (
          <p className="italic leading-snug opacity-90" style={{ fontSize: '0.95em' }}>
            “{card.phrase}”
          </p>
        ) : (
          <p className="uppercase tracking-[0.2em] opacity-70" style={{ fontSize: '0.85em' }}>
            {e.label}
          </p>
        )}
      </div>
    </div>
  )
}

// Card back lives in DharmaBack (pure presentational, server-safe).
export { CardBack } from './DharmaBack'
