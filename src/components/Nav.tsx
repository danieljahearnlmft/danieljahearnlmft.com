'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setWorkOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-cream-100/95 backdrop-blur-sm border-b border-cream-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-base font-medium text-cream-900 tracking-tight hover:text-cream-700 transition-colors">
          Daniel J. Ahearn, LMFT
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          <Link href="/about" className="text-sm text-cream-700 hover:text-cream-900 transition-colors">About</Link>
          
          <div className="relative" ref={dropdownRef}>
            <button
              className="text-sm text-cream-700 hover:text-cream-900 transition-colors flex items-center gap-1"
              onClick={() => setWorkOpen(v => !v)}
              aria-expanded={workOpen}
            >
              Work With Me
              <svg className={`w-3 h-3 transition-transform ${workOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {workOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-cream-50 border border-cream-300 rounded-lg shadow-sm py-2">
                <Link href="/services" className="block px-4 py-2.5 text-sm text-cream-800 hover:bg-cream-200 transition-colors" onClick={() => setWorkOpen(false)}>
                  Individual, Couples & Family
                </Link>
                <Link href="/mens-work" className="block px-4 py-2.5 text-sm text-cream-800 hover:bg-cream-200 transition-colors" onClick={() => setWorkOpen(false)}>
                  Men's Attachment Repair Groups
                </Link>
                <div className="border-t border-cream-200 my-1" />
                <Link href="/consulting" className="block px-4 py-2.5 text-sm text-cream-800 hover:bg-cream-200 transition-colors" onClick={() => setWorkOpen(false)}>
                  Organizations & Teams
                </Link>
              </div>
            )}
          </div>

          <Link href="/the-way-back-home" className="text-sm text-cream-700 hover:text-cream-900 transition-colors">The Way Back Home</Link>
          <a href="https://waybackhome.app" target="_blank" rel="noopener noreferrer" className="text-sm text-cream-700 hover:text-cream-900 transition-colors">Daily Practice</a>
          <Link href="/parent-support-groups" className="text-sm text-cream-700 hover:text-cream-900 transition-colors">Parent Groups</Link>
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
          <Link href="/mens-work" className="text-sm text-cream-800 pl-2" onClick={() => setMenuOpen(false)}>Men's Attachment Repair Groups</Link>
          <Link href="/consulting" className="text-sm text-cream-800 pl-2" onClick={() => setMenuOpen(false)}>Organizations & Teams</Link>
          <Link href="/the-way-back-home" className="text-sm text-cream-800" onClick={() => setMenuOpen(false)}>The Way Back Home</Link>
          <a href="https://waybackhome.app" target="_blank" rel="noopener noreferrer" className="text-sm text-cream-800" onClick={() => setMenuOpen(false)}>Daily Practice (waybackhome.app)</a>
          <Link href="/parent-support-groups" className="text-sm text-cream-800" onClick={() => setMenuOpen(false)}>Parent Support Groups</Link>
          <Link href="/contact" className="text-sm text-cream-800" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
