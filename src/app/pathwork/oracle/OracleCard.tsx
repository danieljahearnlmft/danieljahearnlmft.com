import { Card, elements } from './cards'
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
  return (
    <div
      className={`relative aspect-[3/5] rounded-xl overflow-hidden shadow-lg ring-1 ring-black/10 ${dims[size]} ${className}`}
      style={{ background: `linear-gradient(155deg, ${e.from}, ${e.to})`, color: e.ink }}
    >
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

// Face-down card back, shown before a reveal.
export function CardBack({ size = 'md', className = '' }: { size?: Size; className?: string }) {
  return (
    <div
      className={`relative aspect-[3/5] rounded-xl overflow-hidden shadow-lg ring-1 ring-black/20 ${dims[size]} ${className}`}
      style={{ background: 'radial-gradient(circle at 50% 40%, #6b4a8f, #2a2350 70%)', color: '#e8d8ff' }}
    >
      <div className="absolute inset-[5%] rounded-lg pointer-events-none border border-[#caa8ff]/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[42%] opacity-80">
          <svg viewBox="0 0 100 100" className="w-full h-auto" aria-hidden>
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
            <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
            <circle cx="50" cy="50" r="2.5" fill="currentColor" />
            {Array.from({ length: 8 }).map((_, i) => {
              const a = (i * Math.PI) / 4
              return (
                <line
                  key={i}
                  x1={50 + 10 * Math.cos(a)}
                  y1={50 + 10 * Math.sin(a)}
                  x2={50 + 30 * Math.cos(a)}
                  y2={50 + 30 * Math.sin(a)}
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.4"
                />
              )
            })}
          </svg>
        </div>
      </div>
      <p
        className="absolute bottom-[8%] left-0 right-0 text-center font-serif tracking-[0.25em] uppercase opacity-70"
        style={{ fontSize: '0.8em' }}
      >
        Pathwork
      </p>
    </div>
  )
}
