// Line-art motifs for the Pathwork card faces. Single-color (currentColor),
// drawn to honor the deck's visual language without reproducing the paintings.

type Props = { motif: string; className?: string }

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const paths: Record<string, JSX.Element> = {
  flame: (
    <>
      <path d="M50 14c10 14 20 22 20 38a20 20 0 0 1-40 0c0-9 5-15 9-21 2 6 5 9 9 10-3-9 1-19 2-27z" {...stroke} />
      <path d="M50 46c5 4 8 8 8 14a8 8 0 0 1-16 0c0-4 3-7 4-10 1 3 2 4 4 5z" {...stroke} />
    </>
  ),
  drop: (
    <>
      <path d="M50 16C40 32 30 44 30 58a20 20 0 0 0 40 0c0-14-10-26-20-42z" {...stroke} />
      <path d="M44 52c-3 4-4 7-4 11a10 10 0 0 0 6 9" {...stroke} opacity={0.7} />
    </>
  ),
  wind: (
    <>
      <path d="M22 38h34a8 8 0 1 0-8-8" {...stroke} />
      <path d="M22 52h46a9 9 0 1 1-9 9" {...stroke} />
      <path d="M28 66h24a7 7 0 1 0-7-7" {...stroke} />
    </>
  ),
  mountain: (
    <>
      <path d="M16 76L40 34l14 22 8-12 22 32z" {...stroke} />
      <path d="M34 44l6 8 6-6" {...stroke} opacity={0.7} />
      <circle cx="68" cy="28" r="6" {...stroke} />
    </>
  ),
  tree: (
    <>
      <path d="M50 84V40" {...stroke} />
      <path d="M50 52C40 46 30 48 24 40M50 52c10-6 20-4 26-12M50 64c-8-5-16-3-22-9M50 64c8-5 16-3 22-9" {...stroke} />
      <path d="M50 40a14 14 0 1 0 0-1" {...stroke} />
      <path d="M42 84c4-6 12-6 16 0" {...stroke} opacity={0.7} />
    </>
  ),
  cosmos: (
    <>
      <ellipse cx="50" cy="50" rx="34" ry="13" {...stroke} />
      <ellipse cx="50" cy="50" rx="34" ry="13" transform="rotate(60 50 50)" {...stroke} />
      <ellipse cx="50" cy="50" rx="34" ry="13" transform="rotate(120 50 50)" {...stroke} />
      <circle cx="50" cy="50" r="5" fill="currentColor" />
    </>
  ),
  heart: (
    <>
      <path d="M50 78C30 62 22 52 22 40a14 14 0 0 1 28-4 14 14 0 0 1 28 4c0 12-8 22-28 38z" {...stroke} />
      <path d="M38 44c3-1 7 1 8 5M62 44c-3-1-7 1-8 5" {...stroke} opacity={0.7} />
    </>
  ),
  world: (
    <>
      <ellipse cx="50" cy="50" rx="20" ry="30" {...stroke} />
      <circle cx="50" cy="50" r="30" {...stroke} opacity={0.6} />
      <path d="M20 50h60M30 32c12 8 28 8 40 0M30 68c12-8 28-8 40 0" {...stroke} opacity={0.7} />
    </>
  ),
  mudra: (
    <>
      <path d="M38 80V44c0-3 4-3 4 0v8m0 0V36c0-3 4-3 4 0v16m0 0V34c0-3 4-3 4 0v18m0 0V40c0-3 4-3 4 0v22" {...stroke} />
      <path d="M38 56c-3-2-6-1-7 3-2 6 1 13 5 18 2 3 5 5 8 5h8c6 0 10-5 10-12V46" {...stroke} />
      <circle cx="50" cy="22" r="7" {...stroke} />
    </>
  ),
  door: (
    <>
      <path d="M34 82V26c0-3 2-5 5-5h22c3 0 5 2 5 5v56" {...stroke} />
      <path d="M34 82h32" {...stroke} />
      <circle cx="58" cy="52" r="2.4" fill="currentColor" />
      <path d="M50 21c8-9 8-9 0-13-8 4-8 4 0 13z" {...stroke} opacity={0.7} />
    </>
  ),
  path: (
    <>
      <path d="M44 84c0-14-14-20-14-34s14-16 14-30" {...stroke} />
      <path d="M56 84c0-14 14-20 14-34S56 34 56 20" {...stroke} />
      <path d="M50 84V30" {...stroke} opacity={0.5} />
      <circle cx="50" cy="20" r="6" {...stroke} />
    </>
  ),
  bird: (
    <>
      <path d="M18 56c14-18 22-18 32-2 10-16 18-16 32 2" {...stroke} />
      <path d="M40 54c4 6 6 14 6 24M60 54c-4 6-6 14-6 24" {...stroke} opacity={0.6} />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </>
  ),
  rose: (
    <>
      <path d="M50 84V50" {...stroke} />
      <circle cx="44" cy="38" r="12" {...stroke} />
      <circle cx="56" cy="44" r="12" {...stroke} />
      <path d="M44 38a5 5 0 1 0 0 .1M56 44a5 5 0 1 0 0 .1" {...stroke} opacity={0.6} />
      <path d="M50 64c-6 0-10-4-12-9M50 70c6 0 10-4 12-9" {...stroke} opacity={0.7} />
    </>
  ),
  chains: (
    <>
      <ellipse cx="36" cy="40" rx="9" ry="13" transform="rotate(-30 36 40)" {...stroke} />
      <ellipse cx="60" cy="58" rx="9" ry="13" transform="rotate(-30 60 58)" {...stroke} />
      <path d="M70 30l16-12M30 70L14 82" {...stroke} />
      <path d="M46 50l8 4" {...stroke} opacity={0.5} strokeDasharray="2 4" />
    </>
  ),
  // Five Wisdom Buddhas — each a lotus with a distinguishing mark
  elephant: (
    <>
      <Lotus />
      <path d="M40 40c0-8 6-13 14-13s14 5 14 13c0 6-3 9-3 14 0 4-3 6-6 6" {...stroke} />
      <path d="M59 60c0 6 1 12 4 16" {...stroke} />
      <circle cx="48" cy="40" r="2" fill="currentColor" />
    </>
  ),
  dragon: (
    <>
      <Lotus />
      <path d="M34 56c8-2 10-10 16-10s6 8 14 6c-4 6-10 8-16 6-2 5-8 7-14 4z" {...stroke} />
      <path d="M64 52c4-3 5-7 4-11" {...stroke} />
      <circle cx="60" cy="50" r="1.8" fill="currentColor" />
    </>
  ),
  peacock: (
    <>
      <Lotus />
      <path d="M50 64c0-10 0-18-6-26M50 64c0-10 0-18 6-26M50 64c0-14-10-22-14-28M50 64c0-14 10-22 14-28" {...stroke} />
      <circle cx="42" cy="34" r="2" {...stroke} />
      <circle cx="58" cy="34" r="2" {...stroke} />
      <circle cx="50" cy="30" r="2.4" {...stroke} />
    </>
  ),
  lion: (
    <>
      <Lotus />
      <circle cx="50" cy="44" r="12" {...stroke} />
      <path d="M50 32c0-6 4-9 4-9M50 32c0-6-4-9-4-9M38 44c-6-2-9 0-9 0M62 44c6-2 9 0 9 0M50 56c0 6-3 9-3 9M50 56c0 6 3 9 3 9" {...stroke} opacity={0.7} />
      <circle cx="45" cy="42" r="1.6" fill="currentColor" />
      <circle cx="55" cy="42" r="1.6" fill="currentColor" />
    </>
  ),
  garuda: (
    <>
      <Lotus />
      <path d="M28 46c12-12 18-12 22-4 4-8 10-8 22 4" {...stroke} />
      <path d="M50 42v20" {...stroke} />
      <path d="M44 62h12l-6 8z" {...stroke} />
      <circle cx="50" cy="40" r="3" {...stroke} />
    </>
  ),
}

function Lotus() {
  return (
    <path
      d="M50 80c-12 0-22-6-26-12 6 1 10 0 13-2-6-2-11-7-13-13 6 3 10 3 14 1-3-5-4-11-2-17 4 5 7 7 11 8 1-6 4-11 3-17 3 5 5 9 5 13 0-4 2-8 5-13-1 6 2 11 3 17 4-1 7-3 11-8 2 6 1 12-2 17 4 2 8 2 14-1-2 6-7 11-13 13 3 2 7 3 13 2-4 6-14 12-26 12z"
      {...stroke}
      opacity={0.85}
    />
  )
}

export default function Motif({ motif, className }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {paths[motif] ?? paths.flame}
    </svg>
  )
}
