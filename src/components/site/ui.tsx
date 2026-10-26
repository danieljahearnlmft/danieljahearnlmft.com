import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'
import { CONSULT_LABEL, CONSULT_URL, SUBSTACK_URL, type Offer } from '@/lib/site'

export function Page({ children }: { children: ReactNode }) {
  return <div className="wbh">{children}</div>
}

export function Arrow({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  )
}

/** The one consult button. Same label and link everywhere on the site. */
export function ConsultButton({ tone = 'gold', className = '' }: { tone?: 'gold' | 'dark' | 'line-l' | 'line-d'; className?: string }) {
  return (
    <a
      className={`btn btn-${tone} plausible-event-name=Calendly+Click ${className}`}
      href={CONSULT_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {CONSULT_LABEL}
    </a>
  )
}

/** Text link version of the consult call, for use inside cards. */
export function ConsultLink({ color }: { color?: string }) {
  return (
    <a className="lnk plausible-event-name=Calendly+Click" href={CONSULT_URL} target="_blank" rel="noopener noreferrer" style={{ color }}>
      {CONSULT_LABEL} <Arrow />
    </a>
  )
}

/** Smart link: internal routes use next/link, everything else opens in a new tab. */
export function A({ href, className, children, style }: { href: string; className?: string; children: ReactNode; style?: CSSProperties }) {
  if (href.startsWith('/') && !href.endsWith('.pdf')) {
    return <Link href={href} className={className} style={style}>{children}</Link>
  }
  const download = href.endsWith('.pdf')
  return (
    <a href={href} className={className} style={style} target="_blank" rel="noopener noreferrer" download={download || undefined}>
      {children}
    </a>
  )
}

export function Hero({
  eyebrow,
  title,
  sub,
  children,
  image,
  imagePosition = '50% 50%',
  veil = 0.72,
  aside,
}: {
  eyebrow: string
  title: ReactNode
  sub?: ReactNode
  children?: ReactNode
  image?: string
  imagePosition?: string
  veil?: number
  aside?: ReactNode
}) {
  const text = (
    <div style={{ flex: '1 1 480px', minWidth: 0, position: 'relative' }}>
      <p className="eyebrow gold" style={{ marginBottom: 24 }}>{eyebrow}</p>
      <h1>{title}</h1>
      {sub && <p className="sub">{sub}</p>}
      {children && <div className="btns">{children}</div>}
    </div>
  )
  return (
    <section className={`phero on-dark${aside ? ' split' : ''}`}>
      {image && (
        <>
          <Image className="bgimg" src={image} alt="" fill priority sizes="100vw" style={{ objectPosition: imagePosition }} />
          <div className="veil" aria-hidden="true" style={{ background: `rgba(20,32,22,${veil})` }} />
        </>
      )}
      <div className="wrap" style={{ position: 'relative' }}>
        {text}
        {aside}
      </div>
    </section>
  )
}

export function Section({
  id,
  tone = 'cream',
  width = 'wide',
  tight,
  eyebrow,
  title,
  intro,
  children,
}: {
  id?: string
  tone?: 'cream' | 'cream2' | 'dark' | 'dark2'
  width?: 'wide' | 'mid' | 'narrow'
  tight?: boolean
  eyebrow?: string
  title?: ReactNode
  intro?: ReactNode
  children?: ReactNode
}) {
  const dark = tone === 'dark' || tone === 'dark2'
  const wrap = width === 'wide' ? 'wrap' : width === 'mid' ? 'wrap-m' : 'wrap-n'
  return (
    <section id={id} className={`sec${tight ? ' tight' : ''}${tone !== 'cream' ? ` t-${tone}` : ''}${dark ? ' on-dark' : ''}`} style={id ? { scrollMarginTop: 80 } : undefined}>
      <div className={wrap}>
        {(eyebrow || title || intro) && (
          <div className="sec-head">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="h2">{title}</h2>}
            {intro && <p className="intro">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list">
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  )
}

/** Fee and format, in the same shape on every page. */
export function OfferCard({ offer, cta }: { offer: Offer; cta?: ReactNode }) {
  return (
    <aside className="offer" aria-label={`${offer.name}: fee and format`}>
      <p className="k">{offer.name}</p>
      <p className="price">{offer.fee}</p>
      <ul>
        {offer.format.map((f) => <li key={f}>{f}</li>)}
      </ul>
      {offer.note && <p className="note">{offer.note}</p>}
      {cta ?? <ConsultButton tone="dark" />}
    </aside>
  )
}

export function Facts({ items }: { items: { k: string; v: string }[] }) {
  return (
    <section className="facts" aria-label="At a glance">
      {items.map((f) => (
        <div key={f.k}>
          <p className="k">{f.k}</p>
          <p className="v">{f.v}</p>
        </div>
      ))}
    </section>
  )
}

export function Quote({ text, by, image, imagePosition = '50% 50%' }: { text: string; by: string; image?: string; imagePosition?: string }) {
  return (
    <section className={`sec${image ? ' t-dark on-dark' : ''}`} style={{ textAlign: 'center' }}>
      {image && (
        <>
          <Image className="bgimg" src={image} alt="" fill sizes="100vw" style={{ objectPosition: imagePosition }} />
          <div className="veil" aria-hidden="true" style={{ background: 'rgba(20,32,22,.66)' }} />
        </>
      )}
      <figure className="quote" style={{ position: 'relative' }}>
        <blockquote style={image ? { color: 'var(--cream)' } : undefined}>{text}</blockquote>
        {by && <figcaption>{by}</figcaption>}
      </figure>
    </section>
  )
}

export const ELLIOTT_QUOTE = {
  text: '“Daniel Ahearn has done something rare. He has translated a sophisticated clinical model into language that parents can actually use.”',
  by: 'Dr. David Elliott, PhD · Co-developer, Integrative Attachment Therapy',
}

export function RelatedLinks({ title = 'Keep reading', items }: { title?: string; items: { href: string; t: string; d: string }[] }) {
  return (
    <Section tone="cream2" tight eyebrow={title}>
      <div className="links">
        {items.map((i) => (
          <Link key={i.href} href={i.href}>
            <span className="lt">{i.t}</span>
            <span className="ld">{i.d}</span>
          </Link>
        ))}
      </div>
    </Section>
  )
}

export function Video({ id, title, tall }: { id: string; title: string; tall?: boolean }) {
  return (
    <div className={`video${tall ? ' tall' : ''}`}>
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  )
}

/** The closing band on every page: one consult call, one quiet secondary. */
export function Closing({
  title = 'Begin where you are.',
  text = 'A free 15-minute call to talk through what you’re looking for and whether we’re a good fit.',
  secondary,
}: {
  title?: string
  text?: string
  secondary?: { href: string; label: string }
}) {
  const sec = secondary ?? { href: SUBSTACK_URL, label: 'Read on Substack' }
  return (
    <section className="sec on-dark t-dark" style={{ textAlign: 'center', padding: '128px 5%' }}>
      <Image className="bgimg" src="/images/home/sunset.jpg" alt="" fill sizes="100vw" style={{ objectPosition: '50% 70%' }} />
      <div className="veil" aria-hidden="true" style={{ background: 'rgba(20,32,22,.62)' }} />
      <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
        <h2 className="h2i" style={{ fontSize: 'clamp(40px,5.4vw,72px)', lineHeight: 1.05 }}>{title}</h2>
        <p style={{ margin: '28px auto 0', color: 'var(--sage)', maxWidth: 520 }}>{text}</p>
        <div className="btns" style={{ justifyContent: 'center', marginTop: 40 }}>
          <ConsultButton />
          <A className="btn btn-line-l" href={sec.href}>{sec.label}</A>
        </div>
      </div>
    </section>
  )
}
