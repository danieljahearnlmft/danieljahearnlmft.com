'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { APP_URL, CONSULT_LABEL, CONSULT_URL, LICENSE, PHONE, PHONE_HREF, SOCIAL, WHERE } from '@/lib/site'

const NAV = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Therapy and fees' },
  { href: '/parent-support-groups', label: 'Parent support groups' },
  { href: '/consulting', label: 'Organizations and speaking' },
  { href: '/the-way-back-home', label: 'The Way Back Home' },
  { href: '/library', label: 'Library' },
  { href: '/writing', label: 'Writing' },
  { href: '/contact', label: 'Contact' },
]

const TOPICS = [
  { href: '/attachment-based-therapy-los-angeles', label: 'Attachment therapy in Los Angeles' },
  { href: '/integrative-attachment-therapy', label: 'Integrative Attachment Therapy' },
  { href: '/ideal-parent-figure-protocol', label: 'Ideal Parent Figure protocol' },
  { href: '/iat-certified-therapist', label: 'IAT-certified therapist' },
  { href: '/attachment-styles', label: 'Attachment styles' },
  { href: '/attachment-therapy-adults', label: 'Attachment therapy for adults' },
  { href: '/parent-support-groups/#real-method', label: 'The R.E.A.L. Method' },
]

export default function Footer() {
  const pathname = usePathname()
  if (pathname?.startsWith('/pathwork') || pathname?.startsWith('/visualization') || pathname?.startsWith('/card')) return null

  return (
    <footer className="wbh sfoot">
      <div className="cols3">
        <div>
          <p className="brand">Daniel J. Ahearn, LMFT</p>
          <p>IAT-certified attachment therapist<br />Based in Los Angeles<br />{WHERE}</p>
          <p style={{ marginTop: 14 }}><a href={PHONE_HREF}>{PHONE}</a></p>
        </div>

        <div>
          <p className="k">Explore</p>
          <nav aria-label="Footer">
            {NAV.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="plausible-event-name=App+Open">The daily practice app</a>
          </nav>
        </div>

        <div>
          <p className="k">Get started</p>
          <p style={{ marginBottom: 20 }}>A free 15-minute call to talk through what you’re looking for and whether we’re a good fit.</p>
          <a className="btn btn-gold plausible-event-name=Calendly+Click" href={CONSULT_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, padding: '12px 24px' }}>
            {CONSULT_LABEL}
          </a>
          <p style={{ marginTop: 24, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <a href={SOCIAL.substack} target="_blank" rel="noopener noreferrer" className="plausible-event-name=Substack+Click+Footer" style={{ color: 'var(--gold)' }}>Substack</a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>Instagram</a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>LinkedIn</a>
          </p>
        </div>
      </div>

      <div className="topics">
        {TOPICS.map((t) => <Link key={t.href} href={t.href}>{t.label}</Link>)}
      </div>

      <div className="legal">
        <p>© {new Date().getFullYear()} Daniel J. Ahearn, LMFT</p>
        <p>Licensed in California · {LICENSE}</p>
      </div>
    </footer>
  )
}
