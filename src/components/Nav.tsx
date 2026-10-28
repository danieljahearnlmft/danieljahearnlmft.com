'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { APP_URL, CONSULT_LABEL, CONSULT_URL, SUBSTACK_URL } from '@/lib/site'

type Item = { href: string; label: string }
type Group = { key: string; label: string; items: Item[] }

const GROUPS: Group[] = [
  {
    key: 'work',
    label: 'Work With Me',
    items: [
      { href: '/services', label: 'Therapy and fees' },
      { href: '/parent-support-groups', label: 'Parent support groups' },
      { href: '/consulting', label: 'Organizations and speaking' },
    ],
  },
  {
    key: 'twbh',
    label: 'The Way Back Home',
    items: [
      { href: '/the-way-back-home', label: 'The book' },
      { href: APP_URL, label: 'The daily practice app' },
      { href: '/library', label: 'Library' },
      { href: '/writing', label: 'Writing' },
      { href: SUBSTACK_URL, label: 'Substack' },
    ],
  },
]

function NavLink({ item, className, onClick }: { item: Item; className?: string; onClick?: () => void }) {
  if (item.href.startsWith('/')) {
    return <Link href={item.href} className={className} onClick={onClick}>{item.label}</Link>
  }
  return <a href={item.href} className={className} onClick={onClick} target="_blank" rel="noopener noreferrer">{item.label}</a>
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" style={{ transform: open ? 'rotate(180deg)' : undefined, transition: 'transform .15s' }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [open, setOpen] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(null)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(null)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    setOpen(null)
    setMobileOpen(false)
  }, [pathname])

  if (pathname?.startsWith('/pathwork') || pathname?.startsWith('/visualization') || pathname?.startsWith('/card')) return null

  const consult = (
    <a className="btn btn-gold plausible-event-name=Calendly+Click" href={CONSULT_URL} target="_blank" rel="noopener noreferrer">
      {CONSULT_LABEL}
    </a>
  )

  return (
    <nav className="wbh snav" aria-label="Main">
      <div className="bar">
        <Link href="/" className="brand">Daniel J. Ahearn, LMFT</Link>

        <div className="links-d" ref={ref}>
          <Link href="/about" className="nl">About</Link>
          {GROUPS.map((g) => (
            <div key={g.key} style={{ position: 'relative' }}>
              <button className="nl" onClick={() => setOpen(open === g.key ? null : g.key)} aria-expanded={open === g.key}>
                {g.label} <Chevron open={open === g.key} />
              </button>
              {open === g.key && (
                <div className="menu">
                  {g.items.map((i) => <NavLink key={i.href} item={i} onClick={() => setOpen(null)} />)}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="nl">Contact</Link>
          {consult}
        </div>

        <button className="burger" onClick={() => setMobileOpen((v) => !v)} aria-label="Menu" aria-expanded={mobileOpen}>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="mob">
          <Link href="/about">About</Link>
          {GROUPS.map((g) => (
            <div key={g.key} style={{ display: 'contents' }}>
              <p className="k">{g.label}</p>
              {g.items.map((i) => <NavLink key={i.href} item={i} />)}
            </div>
          ))}
          <p className="k">Get in touch</p>
          <Link href="/contact">Contact</Link>
          {consult}
        </div>
      )}
    </nav>
  )
}
