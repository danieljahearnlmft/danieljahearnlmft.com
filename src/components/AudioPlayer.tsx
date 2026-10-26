'use client'

import { useRef, useState } from 'react'

function fmt(t: number) {
  if (!isFinite(t)) return '0:00'
  const m = Math.floor(t / 60)
  const r = Math.floor(t % 60)
  return `${m}:${r < 10 ? '0' : ''}${r}`
}

export default function AudioPlayer({ src, title, kicker, blurb }: { src: string; title: string; kicker: string; blurb: string }) {
  const ref = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [cur, setCur] = useState(0)
  const [dur, setDur] = useState(0)

  const toggle = () => {
    const a = ref.current
    if (!a) return
    if (a.paused) a.play().catch(() => {})
    else a.pause()
  }
  const seek = (v: number) => {
    const a = ref.current
    if (!a || !isFinite(a.duration)) return
    a.currentTime = (v / 1000) * a.duration
    setCur(a.currentTime)
  }

  return (
    <div>
      <audio
        ref={ref}
        src={src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => { setPlaying(false); setCur(0) }}
        onTimeUpdate={(e) => setCur(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <button type="button" className="play" onClick={toggle} aria-label={`${playing ? 'Pause' : 'Play'} the ${title} practice`}>
          {playing ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#1C2B1E" aria-hidden="true"><rect x="6" y="5" width="4.2" height="14" rx="1" /><rect x="13.8" y="5" width="4.2" height="14" rx="1" /></svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#1C2B1E" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" /></svg>
          )}
        </button>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96A' }}>{kicker}</div>
          <div className="serif" style={{ fontSize: 32, lineHeight: 1.15, color: '#F4F0EA', marginTop: 4 }}>{title}</div>
          <div style={{ fontSize: 15, color: '#B7C3B3', marginTop: 2 }}>{blurb}</div>
        </div>
      </div>
      <input
        type="range" min={0} max={1000} step={1}
        value={dur ? Math.round((cur / dur) * 1000) : 0}
        onChange={(e) => seek(Number(e.target.value))}
        aria-label="Seek within the practice"
        style={{ marginTop: 28 }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#B7C3B3', marginTop: 8 }}>
        <span>{fmt(cur)}</span><span>{fmt(dur)}</span>
      </div>
    </div>
  )
}
