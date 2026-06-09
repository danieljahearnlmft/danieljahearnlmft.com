'use client'

import { useRef, useState } from 'react'
import type { ReactNode } from 'react'

type Track = { num: number; title: string; file: string }
type Section = { heading: string; subheading?: string; tracks: Track[] }

const fmt = (s: number) =>
  isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}` : '—:—'

// A compact, single-player playlist: one track plays at a time, with a slim
// gold progress bar that appears under the active row.
export default function Recordings({
  sections,
  tail,
}: {
  sections: Section[]
  tail?: ReactNode
}) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [current, setCurrent] = useState<string | null>(null)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const toggle = (file: string) => {
    const a = audioRef.current
    if (!a) return
    if (current === file) {
      playing ? a.pause() : a.play()
      return
    }
    setCurrent(file)
    setTime(0)
    setDuration(0)
    a.src = `/audio/${file}`
    a.play().catch(() => {})
  }

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = audioRef.current
    if (!a || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    a.currentTime = ((e.clientX - rect.left) / rect.width) * duration
  }

  return (
    <div>
      <audio
        ref={audioRef}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false)
          setTime(0)
        }}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 0)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
      />

      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
        {sections.map((section) => (
          <div key={section.heading} className="break-inside-avoid">
            <h3 className="font-serif text-xl text-cream-900 leading-tight">
              {section.heading}
            </h3>
            {section.subheading && (
              <p className="font-serif italic text-cream-500 text-xs mb-1.5">
                {section.subheading}
              </p>
            )}
            <ul className="divide-y divide-cream-200/80">
              {section.tracks.map((t) => {
                const active = current === t.file
                const isPlaying = active && playing
                return (
                  <li key={t.num}>
                    <button
                      onClick={() => toggle(t.file)}
                      aria-label={`${isPlaying ? 'Pause' : 'Play'} ${t.title}`}
                      className="w-full flex items-center gap-3 py-2 text-left group"
                    >
                      <span
                        className={`shrink-0 grid place-items-center w-7 h-7 rounded-full transition-colors ${
                          active
                            ? 'bg-cream-600 text-cream-50'
                            : 'bg-cream-200 text-cream-700 group-hover:bg-cream-300'
                        }`}
                      >
                        {isPlaying ? (
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
                            <rect x="2" y="1.5" width="3" height="9" rx="1" />
                            <rect x="7" y="1.5" width="3" height="9" rx="1" />
                          </svg>
                        ) : (
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
                            <path d="M3 1.8c0-.6.7-1 1.2-.6l6 4.2c.5.3.5 1 0 1.3l-6 4.2c-.5.4-1.2 0-1.2-.6V1.8z" />
                          </svg>
                        )}
                      </span>
                      <span className="text-cream-400 text-xs tabular-nums w-5">
                        {String(t.num).padStart(2, '0')}
                      </span>
                      <span
                        className={`flex-1 text-sm leading-snug ${
                          active ? 'text-cream-900' : 'text-cream-800 group-hover:text-cream-900'
                        }`}
                      >
                        {t.title}
                      </span>
                      {active && (
                        <span className="text-[11px] text-cream-400 tabular-nums">
                          {fmt(time)}
                        </span>
                      )}
                    </button>
                    {active && (
                      <div
                        onClick={seek}
                        className="h-1 bg-cream-200 rounded-full overflow-hidden mb-2.5 ml-10 cursor-pointer"
                        role="presentation"
                      >
                        <div
                          className="h-full bg-cream-600 transition-[width] duration-150"
                          style={{ width: duration ? `${(time / duration) * 100}%` : '0%' }}
                        />
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
        {tail}
      </div>
    </div>
  )
}
