import Image from 'next/image'
import Link from 'next/link'
import QRCode from 'qrcode'
import { Arrow, Page } from '@/components/site/ui'
import { APP_URL, EMAIL, LICENSE, SITE_URL, pageMeta } from '@/lib/site'
import ShareButton from './ShareButton'

const CARD_URL = `${SITE_URL}/card/`
const ROLE = 'Psychotherapist · Attachment Specialist · Author'

export const metadata = pageMeta('/card', 'Digital card', `${ROLE}. Los Angeles, California.`, {
  robots: { index: false, follow: false },
  openGraph: { images: [{ url: '/images/daniel-headshot.jpg', alt: 'Daniel J. Ahearn, LMFT' }] },
})

const AUDIOBOOK_MAILTO =
  `mailto:${EMAIL}?subject=${encodeURIComponent('Audiobook code request: The Way Back Home')}` +
  `&body=${encodeURIComponent('Hi Daniel,\n\nI would like to request a complimentary audiobook code for The Way Back Home.\n\nName:\nRole and organization:\n\nThank you.')}`

const actions = [
  { label: 'Email Daniel', href: `mailto:${EMAIL}`, event: 'Card+Email' },
  { label: 'Psychotherapy & Website', href: '/' },
  { label: 'Speaking, Training & Consulting', href: '/consulting/' },
  { label: 'The Way Back Home: Free App', href: APP_URL, external: true },
]

export default async function CardPage() {
  // Generated at build time, so the page ships the finished SVG and no QR code library.
  const qr = await QRCode.toString(CARD_URL, {
    type: 'svg',
    errorCorrectionLevel: 'M',
    margin: 4,
    color: { dark: '#1C2B1E', light: '#FBF9F5' },
  })

  return (
    <Page>
      <div className="dc-page">
        <article className="dc" aria-labelledby="dc-name">
          <div className="dc-banner">
            <Image src="/images/home/sunset.jpg" alt="" fill sizes="(max-width: 480px) 100vw, 440px" priority style={{ objectFit: 'cover', objectPosition: '50% 78%' }} />
          </div>

          <div className="dc-body">
            <div className="dc-photo">
              <Image src="/images/daniel-headshot.jpg" alt="Daniel J. Ahearn" width={240} height={240} priority />
            </div>

            <h1 id="dc-name">Daniel J. Ahearn, LMFT</h1>
            <p className="dc-role">{ROLE}</p>
            <p className="dc-place">Los Angeles, California</p>

            <nav className="dc-actions" aria-label="Contact and links">
              {actions.map((a) => {
                const inner = <><span>{a.label}</span><Arrow /></>
                if (a.href.startsWith('/')) return <Link key={a.label} href={a.href} className="dc-action">{inner}</Link>
                return (
                  <a
                    key={a.label}
                    href={a.href}
                    className={`dc-action${a.event ? ` plausible-event-name=${a.event}` : ''}`}
                    {...(a.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {inner}
                  </a>
                )
              })}
            </nav>

            <section className="dc-book" aria-labelledby="dc-book-h">
              <Image src="/images/book-cover.jpg" alt="The Way Back Home: Healing Attachment Wounds With Your Teen" width={744} height={1100} />
              <div>
                <h2 id="dc-book-h">The Way Back Home</h2>
                <p>Professional colleagues are welcome to request a complimentary audiobook code, while supplies last.</p>
                <a className="btn btn-dark dc-btn plausible-event-name=Card+Audiobook+Request" href={AUDIOBOOK_MAILTO}>
                  Request an audiobook code
                </a>
              </div>
            </section>

            <section className="dc-share" aria-label="Save or share this card">
              <div className="dc-qr" role="img" aria-label={`QR code linking to ${CARD_URL}`} dangerouslySetInnerHTML={{ __html: qr }} />
              <div className="dc-share-btns">
                <a className="btn btn-gold dc-btn plausible-event-name=Card+Save+Contact" href="/card/daniel-ahearn.vcf" download="Daniel-J-Ahearn-LMFT.vcf">
                  Save Contact
                </a>
                <ShareButton url={CARD_URL} title="Daniel J. Ahearn, LMFT" text={`${ROLE}. Los Angeles, California.`} />
              </div>
            </section>

            <p className="dc-legal">Licensed Marriage and Family Therapist, {LICENSE}</p>
          </div>
        </article>
      </div>
    </Page>
  )
}
