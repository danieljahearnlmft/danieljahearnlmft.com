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

// ── Card back: a field of interconnected, evolving dharma wheels in gold on
// black. Wheels grow from the center outward; a faint gold mesh links them.
const BACK_W = 300
const BACK_H = 500

type Wheel = { x: number; y: number; r: number; rot: number }

const backWheels: Wheel[] = (() => {
  const wheels: Wheel[] = []
  const colStep = 64
  const rowStep = 56
  const cx = BACK_W / 2
  const cy = BACK_H / 2
  const maxD = Math.hypot(cx, cy)
  // Over-generate beyond the frame; the card clips to a seamless full-bleed pattern.
  for (let row = -1; row * rowStep - 30 < BACK_H + 40; row++) {
    const offset = row % 2 === 0 ? 0 : colStep / 2
    for (let col = -1; col * colStep + offset - 30 < BACK_W + 40; col++) {
      const x = col * colStep + offset
      const y = row * rowStep
      const d = Math.hypot(x - cx, y - cy)
      // Evolving: big wheels touching at the heart of the card, shrinking and
      // opening into space toward the edges.
      const r = 36 - 20 * (d / maxD)
      const rot = ((x * 1.7 + y * 1.1) % 45) // deterministic, varied turn
      wheels.push({ x, y, r, rot })
    }
  }
  return wheels
})()

// Mesh links between nearby wheel hubs.
const backLinks: [number, number][] = (() => {
  const links: [number, number][] = []
  for (let i = 0; i < backWheels.length; i++) {
    for (let j = i + 1; j < backWheels.length; j++) {
      const a = backWheels[i]
      const b = backWheels[j]
      if (Math.hypot(a.x - b.x, a.y - b.y) < 78) links.push([i, j])
    }
  }
  return links
})()

function DharmaWheel({ x, y, r, rot }: Wheel) {
  const hub = r * 0.16
  const inner = r * 0.8
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`} stroke="url(#pwGold)" fill="none">
      <circle r={r} strokeWidth={1.1} />
      <circle r={inner} strokeWidth={0.8} opacity={0.85} />
      <circle r={hub} strokeWidth={1} />
      <circle r={r * 0.04 + 0.6} fill="url(#pwGold)" stroke="none" />
      {Array.from({ length: 8 }).map((_, k) => {
        const a = (k * Math.PI) / 4
        return (
          <line
            key={k}
            x1={hub * Math.cos(a)}
            y1={hub * Math.sin(a)}
            x2={inner * Math.cos(a)}
            y2={inner * Math.sin(a)}
            strokeWidth={0.8}
          />
        )
      })}
      {/* rim nubs where spokes meet the wheel */}
      {Array.from({ length: 8 }).map((_, k) => {
        const a = (k * Math.PI) / 4
        return (
          <circle key={`n${k}`} cx={r * Math.cos(a)} cy={r * Math.sin(a)} r={0.7} fill="url(#pwGold)" stroke="none" />
        )
      })}
    </g>
  )
}

// Face-down card back, shown before a reveal.
export function CardBack({ size = 'md', className = '' }: { size?: Size; className?: string }) {
  return (
    <div
      className={`relative aspect-[3/5] rounded-xl overflow-hidden shadow-lg ring-1 ring-[#caa86a]/30 ${dims[size]} ${className}`}
      style={{ background: '#050505' }}
    >
      <svg
        viewBox={`0 0 ${BACK_W} ${BACK_H}`}
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="pwGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f4dca0" />
            <stop offset="0.5" stopColor="#c9a14e" />
            <stop offset="1" stopColor="#8a6a2e" />
          </linearGradient>
          <radialGradient id="pwGlow" cx="50%" cy="46%" r="62%">
            <stop offset="0" stopColor="#1c160c" />
            <stop offset="0.55" stopColor="#0b0a07" />
            <stop offset="1" stopColor="#030302" />
          </radialGradient>
        </defs>

        {/* deep black base with a faint warm core */}
        <rect width={BACK_W} height={BACK_H} fill="url(#pwGlow)" />

        {/* interconnecting mesh */}
        <g stroke="url(#pwGold)" strokeWidth={0.5} opacity={0.28}>
          {backLinks.map(([i, j], idx) => (
            <line
              key={idx}
              x1={backWheels[i].x}
              y1={backWheels[i].y}
              x2={backWheels[j].x}
              y2={backWheels[j].y}
            />
          ))}
        </g>

        {/* the wheels */}
        <g opacity={0.92}>
          {backWheels.map((w, i) => (
            <DharmaWheel key={i} {...w} />
          ))}
        </g>

        {/* subtle vignette to settle the edges into black */}
        <rect width={BACK_W} height={BACK_H} fill="url(#pwVignette)" />
        <radialGradient id="pwVignette" cx="50%" cy="50%" r="62%">
          <stop offset="0.6" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.7" />
        </radialGradient>
      </svg>

      {/* gold inner frame */}
      <div className="absolute inset-[5%] rounded-lg pointer-events-none border border-[#caa86a]/35" />

      {/* wordmark */}
      <p
        className="absolute bottom-[7%] left-0 right-0 text-center font-serif tracking-[0.28em] uppercase"
        style={{ fontSize: '0.8em', color: '#d9b86a' }}
      >
        Pathwork
      </p>
    </div>
  )
}
