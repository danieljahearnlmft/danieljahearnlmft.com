'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Card, cards, elements, CATEGORIES } from './cards'
import { CardFace, CardBack } from './OracleCard'

// ─────────────────────────────────────────────────────────────────────────────
// Persistence
// ─────────────────────────────────────────────────────────────────────────────
type Store = {
  journal: Record<string, string>
  completed: string[] // card ids finished in the 40-day path
  history: { date: string; id: string }[] // daily pulls
  streak: number
  longest: number
  lastDay: string // YYYY-MM-DD of last practice
  totalDraws: number
}

const KEY = 'pathwork-oracle-v1'
const emptyStore: Store = {
  journal: {},
  completed: [],
  history: [],
  streak: 0,
  longest: 0,
  lastDay: '',
  totalDraws: 0,
}

function dateKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate()
  ).padStart(2, '0')}`
}
function hashStr(s: string) {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}
function daysBetween(a: string, b: string) {
  const da = new Date(a + 'T00:00:00')
  const db = new Date(b + 'T00:00:00')
  return Math.round((db.getTime() - da.getTime()) / 86400000)
}

// ─────────────────────────────────────────────────────────────────────────────
// Reading — the full card text, audio, reflection
// ─────────────────────────────────────────────────────────────────────────────
function Reading({
  card,
  value,
  onChange,
}: {
  card: Card
  value: string
  onChange: (v: string) => void
}) {
  const e = elements[card.element]
  return (
    <div className="space-y-6">
      <div>
        <p className="eyebrow !mb-2">{card.category}{card.group ? ` · ${card.group}` : ''}</p>
        <h3 className="font-serif text-3xl text-cream-900 leading-tight">{card.title}</h3>
        <p className="text-sm text-cream-500 mt-1">{e.label}</p>
      </div>

      {card.phrase && (
        <blockquote
          className="font-serif italic text-xl text-cream-800 border-l-2 pl-4"
          style={{ borderColor: e.to }}
        >
          “{card.phrase}”
        </blockquote>
      )}

      <p className="text-cream-700 leading-relaxed">{card.body}</p>

      {card.meta && (
        <ul className="text-sm text-cream-600 space-y-1">
          {card.meta.chakra && <li><span className="text-cream-500">Chakra:</span> {card.meta.chakra}</li>}
          {card.meta.color && <li><span className="text-cream-500">Sacred color:</span> {card.meta.color}</li>}
          {card.meta.keywords && <li><span className="text-cream-500">Keywords:</span> {card.meta.keywords}</li>}
          {card.meta.vehicle && <li><span className="text-cream-500">Vehicle:</span> {card.meta.vehicle}</li>}
        </ul>
      )}

      {card.audio && (
        <div>
          <p className="eyebrow !mb-2">Guided meditation</p>
          <audio controls preload="none" src={`/audio/${card.audio}`} className="w-full">
            Your browser doesn’t support audio playback.
          </audio>
        </div>
      )}

      <div>
        <label className="eyebrow !mb-2 block" htmlFor={`refl-${card.id}`}>
          Reflection
        </label>
        <textarea
          id={`refl-${card.id}`}
          value={value}
          onChange={(ev) => onChange(ev.target.value)}
          rows={4}
          placeholder="Step into the card. What moves through you?"
          className="w-full rounded-md border border-cream-300 bg-cream-50 p-3 text-cream-800 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-cream-400 resize-y"
        />
        <p className="text-xs text-cream-400 mt-1">Saved on this device.</p>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Flip card — back → face reveal
// ─────────────────────────────────────────────────────────────────────────────
function FlipCard({
  card,
  flipped,
  size = 'lg',
  onClick,
}: {
  card: Card
  flipped: boolean
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
}) {
  return (
    <div className="flip-scene" onClick={onClick} role={onClick ? 'button' : undefined}>
      <div className={`flip-card ${flipped ? 'is-flipped' : ''} ${onClick ? 'cursor-pointer' : ''}`}>
        <div className="flip-face">
          <CardBack size={size} />
        </div>
        <div className="flip-face flip-back-face">
          <CardFace card={card} size={size} />
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Card detail overlay (used by Path & Deck)
// ─────────────────────────────────────────────────────────────────────────────
function Detail({
  card,
  store,
  setJournal,
  onClose,
  onComplete,
  completed,
}: {
  card: Card
  store: Store
  setJournal: (id: string, v: string) => void
  onClose: () => void
  onComplete?: () => void
  completed?: boolean
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-cream-900/50 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-cream-50 rounded-xl shadow-2xl max-w-3xl w-full my-8 oracle-rise"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end p-3">
          <button
            onClick={onClose}
            className="text-cream-500 hover:text-cream-800 text-sm px-3 py-1 rounded hover:bg-cream-200 transition-colors"
            aria-label="Close"
          >
            Close ✕
          </button>
        </div>
        <div className="px-6 md:px-10 pb-10 grid md:grid-cols-[240px_1fr] gap-8 items-start">
          <div className="w-[240px] max-w-full mx-auto md:sticky md:top-4">
            <CardFace card={card} size="lg" />
          </div>
          <div>
            <Reading
              card={card}
              value={store.journal[card.id] || ''}
              onChange={(v) => setJournal(card.id, v)}
            />
            {onComplete && (
              <button
                onClick={onComplete}
                disabled={completed}
                className={`mt-6 ${completed ? 'btn-ghost opacity-60 cursor-default' : 'btn-primary'}`}
              >
                {completed ? '✓ Day complete' : 'Mark this day complete'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Spreads
// ─────────────────────────────────────────────────────────────────────────────
type SpreadDef = {
  key: string
  name: string
  intro: string
  positions: { label: string; meaning: string }[]
  layout: 'row' | 'bodhi' | 'diamond'
}
const SPREADS: SpreadDef[] = [
  {
    key: 'bodhi',
    name: 'Bodhichitta Spread',
    intro:
      'Bodhichitta means awakened heart-mind. Set your deep wish: to awaken your heart-mind for the benefit of all sentient beings. Six cards, one for each gesture of the path.',
    layout: 'bodhi',
    positions: [
      { label: 'Generosity', meaning: 'How you give — in action, speech and awareness.' },
      { label: 'Ethical discipline', meaning: 'How you hold your conduct.' },
      { label: 'Patience', meaning: 'How you meet difficulty.' },
      { label: 'Enthusiastic effort', meaning: 'Where your energy wants to move.' },
      { label: 'Concentration', meaning: 'Where to steady your attention.' },
      { label: 'Wisdom', meaning: 'What clear seeing asks of you.' },
    ],
  },
  {
    key: 'clearlight',
    name: 'Clear Light View Spread',
    intro:
      'Designed to cut through whatever you are concerned with and find clarity for your next steps. Four cards in a diamond; a fifth in the center synthesizes them into a clear light view.',
    layout: 'diamond',
    positions: [
      { label: 'Above', meaning: 'What presides over the situation.' },
      { label: 'Left', meaning: 'What you are moving away from.' },
      { label: 'Right', meaning: 'What you are moving toward.' },
      { label: 'Below', meaning: 'The ground beneath it all.' },
      { label: 'Clear Light', meaning: 'The synthesis — what needs to be done at this time.' },
    ],
  },
  {
    key: 'lifetime',
    name: 'Lifetime Spread',
    intro: 'Five cards across the arc of a life — past, present, future, synthesis, and the karma you carry.',
    layout: 'row',
    positions: [
      { label: 'Past', meaning: 'Things that happened to you in the past.' },
      { label: 'Present', meaning: 'What you are attempting to do in the present.' },
      { label: 'Future', meaning: 'What you need to explore in the future.' },
      { label: 'Synthesis', meaning: 'Synthesizes the first three and offers further insight.' },
      { label: 'Karma', meaning: 'Past-life karma — what you carry across generations of your spiritual evolution.' },
    ],
  },
]

function shuffleDraw(n: number): Card[] {
  const pool = [...cards]
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, n)
}

function SpreadsView({ onOpen }: { onOpen: (c: Card) => void }) {
  const [active, setActive] = useState<SpreadDef>(SPREADS[0])
  const [drawn, setDrawn] = useState<Card[] | null>(null)
  const [revealed, setRevealed] = useState<Set<number>>(new Set())

  const deal = (s: SpreadDef) => {
    setActive(s)
    setDrawn(shuffleDraw(s.positions.length))
    setRevealed(new Set())
  }
  const reveal = (i: number) => setRevealed((r) => new Set(r).add(i))
  const revealAll = () => setRevealed(new Set(active.positions.map((_, i) => i)))

  const Slot = ({ i }: { i: number }) => {
    const card = drawn?.[i]
    if (!card) return null
    const isUp = revealed.has(i)
    return (
      <div className="flex flex-col items-center gap-2">
        <div
          onClick={() => (isUp ? onOpen(card) : reveal(i))}
          className="cursor-pointer w-[112px] md:w-[140px]"
        >
          <FlipCard card={card} flipped={isUp} size="sm" />
        </div>
        <p className="text-[11px] uppercase tracking-widest text-cream-500 text-center max-w-[140px]">
          {active.positions[i].label}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {SPREADS.map((s) => (
          <button
            key={s.key}
            onClick={() => deal(s)}
            className={s.key === active.key && drawn ? 'btn-primary' : 'btn-ghost'}
          >
            {s.name}
          </button>
        ))}
      </div>

      <p className="text-cream-700 leading-relaxed max-w-2xl">{active.intro}</p>

      {!drawn ? (
        <button onClick={() => deal(active)} className="btn-primary">
          Shuffle &amp; deal the {active.name}
        </button>
      ) : (
        <>
          {active.layout === 'row' && (
            <div className="flex flex-wrap justify-center gap-5">
              {active.positions.map((_, i) => <Slot key={i} i={i} />)}
            </div>
          )}
          {active.layout === 'bodhi' && (
            <div className="grid grid-cols-3 gap-5 justify-items-center max-w-xl mx-auto">
              {active.positions.map((_, i) => <Slot key={i} i={i} />)}
            </div>
          )}
          {active.layout === 'diamond' && (
            <div className="flex flex-col items-center gap-4">
              <Slot i={0} />
              <div className="flex items-center justify-center gap-4 md:gap-10">
                <Slot i={1} />
                <Slot i={4} />
                <Slot i={2} />
              </div>
              <Slot i={3} />
            </div>
          )}

          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <button onClick={revealAll} className="btn-ghost">Reveal all</button>
            <button onClick={() => deal(active)} className="btn-primary">Re-deal</button>
          </div>
          <p className="text-center text-sm text-cream-500">
            Tap a card to turn it. Tap again to read it in full.
          </p>
        </>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main app
// ─────────────────────────────────────────────────────────────────────────────
type Tab = 'today' | 'path' | 'deck' | 'spreads'

export default function OracleApp() {
  const [mounted, setMounted] = useState(false)
  const [store, setStore] = useState<Store>(emptyStore)
  const [tab, setTab] = useState<Tab>('today')
  const [detail, setDetail] = useState<Card | null>(null)
  const [todayFlipped, setTodayFlipped] = useState(false)
  const [freeCard, setFreeCard] = useState<Card | null>(null)
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Load
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY)
      if (raw) setStore({ ...emptyStore, ...JSON.parse(raw) })
    } catch {}
    const t = new URLSearchParams(window.location.search).get('tab')
    if (t === 'deck' || t === 'path' || t === 'spreads' || t === 'today') setTab(t)
    setMounted(true)
  }, [])

  // Save (debounced)
  const persist = useCallback((next: Store) => {
    setStore(next)
    if (saveTimer.current) clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => {
      try {
        localStorage.setItem(KEY, JSON.stringify(next))
      } catch {}
    }, 250)
  }, [])

  const setJournal = useCallback(
    (id: string, v: string) => {
      persist({ ...store, journal: { ...store.journal, [id]: v } })
    },
    [store, persist]
  )

  // Pure streak bookkeeping — returns the fields to merge, so callers persist
  // everything in ONE write (avoids clobbering from a second stale persist).
  const practiceFields = useCallback((s: Store): Partial<Store> => {
    const today = dateKey()
    if (s.lastDay === today) return {}
    const gap = s.lastDay ? daysBetween(s.lastDay, today) : 1
    const streak = gap === 1 ? s.streak + 1 : 1
    return { lastDay: today, streak, longest: Math.max(s.longest, streak) }
  }, [])

  // Today's card — deterministic from the date
  const today = mounted ? dateKey() : ''
  const todayCard = useMemo(
    () => (today ? cards[hashStr(today) % cards.length] : cards[0]),
    [today]
  )
  const alreadyPulledToday =
    mounted && store.history.some((h) => h.date === today)

  const drawToday = () => {
    setTodayFlipped(true)
    if (!alreadyPulledToday) {
      const history = [...store.history, { date: today, id: todayCard.id }]
      persist({
        ...store,
        history,
        totalDraws: store.totalDraws + 1,
        ...practiceFields(store),
      })
    }
  }

  // 40-day path
  const completedSet = new Set(store.completed)
  const nextDay = cards.find((c) => !completedSet.has(c.id)) || cards[cards.length - 1]
  const completeDay = (card: Card) => {
    if (completedSet.has(card.id)) return
    persist({
      ...store,
      completed: [...store.completed, card.id],
      ...practiceFields(store),
    })
  }

  if (!mounted) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center text-cream-400">
        Shuffling the deck…
      </div>
    )
  }

  return (
    <div>
      {/* Streak ribbon */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-cream-600 mb-10">
        <Stat label="Day streak" value={store.streak} />
        <Stat label="Longest" value={store.longest} />
        <Stat label="Cards drawn" value={store.totalDraws} />
        <Stat label="Path" value={`${store.completed.length}/40`} />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {([
          ['today', 'Today’s Card'],
          ['path', 'The 40-Day Path'],
          ['deck', 'The Deck'],
          ['spreads', 'Spreads'],
        ] as [Tab, string][]).map(([t, label]) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              tab === t
                ? 'bg-cream-800 text-cream-50'
                : 'text-cream-600 hover:bg-cream-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── Today ── */}
      {tab === 'today' && (
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
            <div className="flex flex-col items-center gap-5">
              <div className={`w-[260px] md:w-[300px] ${todayFlipped ? '' : 'oracle-float'}`}>
                <FlipCard
                  card={todayCard}
                  flipped={todayFlipped || alreadyPulledToday}
                  size="lg"
                  onClick={!todayFlipped && !alreadyPulledToday ? drawToday : undefined}
                />
              </div>
              {!todayFlipped && !alreadyPulledToday ? (
                <button onClick={drawToday} className="btn-primary">
                  Draw today’s card
                </button>
              ) : (
                <p className="text-xs text-cream-400 text-center">
                  Your card returns each day at midnight.
                </p>
              )}
            </div>

            <div>
              {todayFlipped || alreadyPulledToday ? (
                <div className="oracle-rise">
                  <Reading
                    card={todayCard}
                    value={store.journal[todayCard.id] || ''}
                    onChange={(v) => setJournal(todayCard.id, v)}
                  />
                </div>
              ) : (
                <div className="text-cream-600 leading-relaxed space-y-4">
                  <p className="font-serif text-2xl text-cream-900">A card for today.</p>
                  <p>
                    Center yourself with a few rounds of breath. When you’re ready,
                    turn the card and let its image and intention guide your practice.
                    Step into it. Sit with it. Press play on the meditation that meets
                    the moment.
                  </p>
                  <p className="text-sm text-cream-500">
                    Return daily and your streak will grow — one card at a time, the
                    whole deck becomes a practice.
                  </p>
                </div>
              )}
            </div>
          </div>

          {(todayFlipped || alreadyPulledToday) && (
            <div className="mt-12 text-center border-t border-cream-200 pt-8">
              <p className="text-sm text-cream-500 mb-3">Want to keep going?</p>
              <button
                onClick={() => setFreeCard(shuffleDraw(1)[0])}
                className="btn-ghost"
              >
                Pull another card
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── Path ── */}
      {tab === 'path' && (
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-cream-700 leading-relaxed max-w-2xl mx-auto">
              Worked sequentially, the deck is a 40-day meditation practice you can
              repeat and deepen continuously. One card a day, in order.
            </p>
            <button onClick={() => setDetail(nextDay)} className="btn-primary mt-6">
              {store.completed.length === 0
                ? 'Begin — Day 1'
                : store.completed.length >= 40
                ? 'Revisit the path'
                : `Continue — Day ${store.completed.length + 1}`}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {cards.map((c) => {
              const done = completedSet.has(c.id)
              const isNext = c.id === nextDay.id && !done
              const e = elements[c.element]
              return (
                <button
                  key={c.id}
                  onClick={() => setDetail(c)}
                  className={`text-left p-3 rounded-lg border transition-all ${
                    isNext
                      ? 'border-cream-500 ring-2 ring-cream-300'
                      : 'border-cream-200 hover:border-cream-400'
                  } ${done ? 'bg-cream-100' : 'bg-cream-50'}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] text-white"
                      style={{ background: e.from }}
                    >
                      {c.n}
                    </span>
                    {done && <span className="text-cream-500 text-sm">✓</span>}
                    {isNext && <span className="text-[10px] uppercase tracking-wide text-cream-500">next</span>}
                  </div>
                  <p className="font-serif text-sm text-cream-900 leading-tight">{c.title}</p>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* ── Deck ── */}
      {tab === 'deck' && (
        <div className="max-w-5xl mx-auto space-y-14">
          {CATEGORIES.map((cat) => {
            const group = cards.filter((c) => c.category === cat)
            if (!group.length) return null
            return (
              <div key={cat}>
                <h3 className="font-serif text-2xl text-cream-900 mb-1 text-center">{cat}</h3>
                <p className="text-center text-sm text-cream-500 mb-6">{group.length} cards</p>
                <div className="flex flex-wrap justify-center gap-5">
                  {group.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setDetail(c)}
                      className="transition-transform hover:-translate-y-1"
                    >
                      <CardFace card={c} size="md" />
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* ── Spreads ── */}
      {tab === 'spreads' && (
        <div className="max-w-4xl mx-auto">
          <SpreadsView onOpen={setDetail} />
        </div>
      )}

      {/* Overlays */}
      {detail && (
        <Detail
          card={detail}
          store={store}
          setJournal={setJournal}
          onClose={() => setDetail(null)}
          onComplete={
            tab === 'path' ? () => completeDay(detail) : undefined
          }
          completed={completedSet.has(detail.id)}
        />
      )}
      {freeCard && (
        <Detail
          card={freeCard}
          store={store}
          setJournal={setJournal}
          onClose={() => setFreeCard(null)}
        />
      )}
    </div>
  )
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="text-center">
      <div className="font-serif text-2xl text-cream-900 leading-none">{value}</div>
      <div className="text-[11px] uppercase tracking-widest text-cream-500 mt-1">{label}</div>
    </div>
  )
}
