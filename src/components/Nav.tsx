'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

type MenuKey = 'work' | 'twbh' | null

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<MenuKey>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const twbhRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node
      const inWork = workRef.current?.contains(target)
      const inTwbh = twbhRef.current?.contains(target)
      if (!inWork && !inTwbh) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (pathname?.startsWith('/pathwork')) return null
  if (pathname?.startsWith('/visualization')) return null

  const close = () => setOpenMenu(null)

  return (
    <nav className="sticky top-0 z-50 bg-cream-100/95 backdrop-blur-sm border-b border-cream-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-base font-medium text-cream-900 tracking-tight hover:text-cream-700 transition-colors">
          Daniel J. Ahearn, LMFT
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          <Link href="/about" className="text-sm text-cream-700 hover:text-cream-900 transition-colors">About</Link>

          {/* Work With Me */}
          <div className="relative" ref={workRef}>
            <button
              className="text-sm text-cream-700 hover:text-cream-900 transition-colors flex items-center gap-1"
              onClick={() => setOpenMenu(openMenu === 'work' ? null : 'work')}
              aria-expanded={openMenu === 'work'}
            >
              Work With Me
              <svg className={`w-3 h-3 transition-transform ${openMenu === 'work' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openMenu === 'work' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-cream-50 border border-cream-300 rounded-lg shadow-sm py-2">
                <Link href="/services" className="block px-4 py-2.5 text-sm text-cream-800 hover:bg-cream-200 transition-colors" onClick={close}>
                  Individual, Couples & Family
                </Link>
                <Link href="/parent-support-groups" className="block px-4 py-2.5 text-sm text-cream-800 hover:bg-cream-200 transition-colors" onClick={close}>
                  Parent Support Groups
                </Link>
                <Link href="/mens-work" className="block px-4 py-2.5 text-sm text-cream-800 hover:bg-cream-200 transition-colors" onClick={close}>
                  Men's Attachment Repair Groups
                </Link>
                <div className="border-t border-cream-200 my-1" />
                <Link href="/consulting" className="block px-4 py-2.5 text-sm text-cream-800 hover:bg-cream-200 transition-colors" onClick={close}>
                  Organizations & Teams
                </Link>
              </div>
            )}
          </div>

          {/* The Way Back Home */}
          <div className="relative" ref={twbhRef}>
            <button
              className="text-sm text-cream-700 hover:text-cream-900 transition-colors flex items-center gap-1"
              onClick={() => setOpenMenu(openMenu === 'twbh' ? null : 'twbh')}
              aria-expanded={openMenu === 'twbh'}
            >
              The Way Back Home
              <svg className={`w-3 h-3 transition-transform ${openMenu === 'twbh' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openMenu === 'twbh' && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-cream-50 border border-cream-300 rounded-lg shadow-sm py-2">
                <Link href="/the-way-back-home" className="block px-4 py-2.5 text-sm text-cream-800 hover:bg-cream-200 transition-colors" onClick={close}>
                  The Book
                </Link>
                <a href="https://waybackhome.app" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 text-sm text-cream-800 hover:bg-cream-200 transition-colors" onClick={close}>
                  Practice (app)
                </a>
                <Link href="/library" className="block px-4 py-2.5 text-sm text-cream-800 hover:bg-cream-200 transition-colors" onClick={close}>
                  Library
                </Link>
                <a href="https://danieljahearnlmft.substack.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 text-sm text-cream-800 hover:bg-cream-200 transition-colors" onClick={close}>
                  Substack
                </a>
              </div>
            )}
          </div>

          <Link href="/contact" className="text-sm text-cream-700 hover:text-cream-900 transition-colors">Contact</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream-900 p-1"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-cream-300 bg-cream-100 px-6 py-5 flex flex-col gap-4">
          <Link href="/about" className="text-sm text-cream-800" onClick={() => setMenuOpen(false)}>About</Link>

          <div className="text-xs uppercase tracking-widest text-cream-500 mt-1">Work With Me</div>
          <Link href="/services" className="text-sm text-cream-800 pl-2" onClick={() => setMenuOpen(false)}>Individual, Couples & Family</Link>
          <Link href="/parent-support-groups" className="text-sm text-cream-800 pl-2" onClick={() => setMenuOpen(false)}>Parent Support Groups</Link>
          <Link href="/mens-work" className="text-sm text-cream-800 pl-2" onClick={() => setMenuOpen(false)}>Men's Attachment Repair Groups</Link>
          <Link href="/consulting" className="text-sm text-cream-800 pl-2" onClick={() => setMenuOpen(false)}>Organizations & Teams</Link>

          <div className="text-xs uppercase tracking-widest text-cream-500 mt-1">The Way Back Home</div>
          <Link href="/the-way-back-home" className="text-sm text-cream-800 pl-2" onClick={() => setMenuOpen(false)}>The Book</Link>
          <a href="https://waybackhome.app" target="_blank" rel="noopener noreferrer" className="text-sm text-cream-800 pl-2" onClick={() => setMenuOpen(false)}>Practice (app)</a>
          <Link href="/library" className="text-sm text-cream-800 pl-2" onClick={() => setMenuOpen(false)}>Library</Link>
          <a href="https://danieljahearnlmft.substack.com" target="_blank" rel="noopener noreferrer" className="text-sm text-cream-800 pl-2" onClick={() => setMenuOpen(false)}>Substack</a>

          <Link href="/contact" className="text-sm text-cream-800" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
