// ── Card back: tight rows of interlocking dharma wheels (dharmachakras) in
// gold on black — a fine repeating texture you only read up close. Each wheel
// keeps the traditional eight ornate spokes, double rim, protruding bulb caps
// and swirl hub; neighbors connect at the caps so the field reads as one mesh.
// Pure presentational (no hooks/state) so it can render in server components.

type Size = 'sm' | 'md' | 'lg'

const dims: Record<Size, string> = {
  sm: 'w-[112px] text-[9px]',
  md: 'w-[180px] text-[11px]',
  lg: 'w-full max-w-[300px] text-[13px]',
}

const BACK_W = 300
const BACK_H = 500
const TILE = 48 // wheel-to-wheel spacing; smaller = denser
const C = TILE / 2
const DIRS = Array.from({ length: 8 }, (_, k) => (k * Math.PI) / 4)
const GOLD = 'url(#pwGold)'

function WheelTile() {
  return (
    <g transform={`translate(${C} ${C})`}>
      {/* protruding bulb caps — these meet the neighbouring wheels' caps */}
      {DIRS.map((a, k) => (
        <circle key={`cap${k}`} cx={20.6 * Math.cos(a)} cy={20.6 * Math.sin(a)} r={3.2} fill={GOLD} />
      ))}
      {/* double rim */}
      <circle r={17.2} fill="none" stroke={GOLD} strokeWidth={3.8} />
      <circle r={13.7} fill="none" stroke={GOLD} strokeWidth={0.9} opacity={0.8} />
      {/* eight spokes with a small vajra diamond on each */}
      {DIRS.map((a, k) => (
        <line
          key={`sp${k}`}
          x1={6 * Math.cos(a)}
          y1={6 * Math.sin(a)}
          x2={14.6 * Math.cos(a)}
          y2={14.6 * Math.sin(a)}
          stroke={GOLD}
          strokeWidth={2.1}
          strokeLinecap="round"
        />
      ))}
      {DIRS.map((a, k) => (
        <rect
          key={`dm${k}`}
          x={-1.3}
          y={-1.3}
          width={2.6}
          height={2.6}
          fill={GOLD}
          transform={`translate(${10.4 * Math.cos(a)} ${10.4 * Math.sin(a)}) rotate(45)`}
        />
      ))}
      {/* hub with swirl */}
      <circle r={6} fill={GOLD} />
      <circle r={3.9} fill="#0b0a07" />
      <path d="M0 -2.4a2.4 2.4 0 0 1 0 4.8 1.2 1.2 0 0 0 0 -2.4 1.2 1.2 0 0 1 0 -2.4z" fill={GOLD} />
    </g>
  )
}

// Face-down card back. `width` overrides the size preset (e.g. for the
// /pathwork hero card).
export function CardBack({
  size = 'md',
  className = '',
}: {
  size?: Size
  className?: string
}) {
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
          <radialGradient id="pwGlow" cx="50%" cy="46%" r="65%">
            <stop offset="0" stopColor="#16120a" />
            <stop offset="0.55" stopColor="#0a0906" />
            <stop offset="1" stopColor="#030302" />
          </radialGradient>
          <radialGradient id="pwVignette" cx="50%" cy="50%" r="62%">
            <stop offset="0.55" stopColor="#000" stopOpacity="0" />
            <stop offset="1" stopColor="#000" stopOpacity="0.78" />
          </radialGradient>
          <pattern id="pwWheels" width={TILE} height={TILE} patternUnits="userSpaceOnUse">
            <WheelTile />
          </pattern>
        </defs>

        {/* deep black base with a faint warm core */}
        <rect width={BACK_W} height={BACK_H} fill="url(#pwGlow)" />
        {/* the tiled wheel mesh */}
        <rect width={BACK_W} height={BACK_H} fill="url(#pwWheels)" opacity={0.9} />
        {/* vignette to settle the edges into black */}
        <rect width={BACK_W} height={BACK_H} fill="url(#pwVignette)" />
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
