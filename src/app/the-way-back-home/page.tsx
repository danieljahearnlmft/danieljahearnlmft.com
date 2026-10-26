import Image from 'next/image'
import Link from 'next/link'
import { AMAZON_URL, APP_URL, AUDIBLE_URL, GUIDE_URL, SITE_URL, pageMeta } from '@/lib/site'
import { Arrow, Closing, ELLIOTT_QUOTE, Hero, List, Page, Quote, Section } from '@/components/site/ui'

export const metadata = pageMeta(
  '/the-way-back-home',
  'The Way Back Home: Healing Attachment Wounds With Your Teen',
  'The book by Daniel J. Ahearn, LMFT: a practical guide for parents healing attachment wounds and rebuilding connection with their teen. Paperback, Kindle, Audible.',
  {
    title: { absolute: 'The Way Back Home: Healing Attachment Wounds With Your Teen' },
    openGraph: { images: [{ url: '/images/book-cover.jpg', alt: 'The Way Back Home book cover' }] },
    twitter: { card: 'summary_large_image', images: ['/images/book-cover.jpg'] },
  },
)

const conditions = [
  { name: 'Safety', body: 'Building the secure foundation.' },
  { name: 'Attunement', body: 'Connection over correction.' },
  { name: 'Soothing', body: 'Regulating before solving.' },
  { name: 'Expressed delight', body: 'The engine of self-esteem.' },
  { name: 'Exploration', body: 'Boundaries that strengthen bonds.' },
]

const bookLd = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'The Way Back Home: Healing Attachment Wounds With Your Teen',
  author: { '@id': `${SITE_URL}/#daniel` },
  datePublished: '2026-04-01',
  image: `${SITE_URL}/images/book-cover.jpg`,
  bookFormat: ['https://schema.org/Paperback', 'https://schema.org/EBook', 'https://schema.org/AudiobookFormat'],
  url: `${SITE_URL}/the-way-back-home/`,
  sameAs: [AMAZON_URL, AUDIBLE_URL],
}

export default function Book() {
  return (
    <Page>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookLd) }} />

      <Hero
        eyebrow="Now on Audible · Paperback · Kindle"
        title="The Way Back Home"
        sub={
          <>
            <span className="serif" style={{ display: 'block', fontStyle: 'italic', fontSize: 'clamp(24px,2.6vw,30px)', color: 'var(--gold-l)', marginBottom: 20 }}>Healing Attachment Wounds With Your Teen</span>
            If your teenager is shutting down, pulling away, or in constant conflict, this book explains the attachment science behind it, and what you can actually do about it.
          </>
        }
        aside={
          <div style={{ flex: '0 1 340px', minWidth: 220, maxWidth: 340, margin: '0 auto', position: 'relative' }}>
            <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" className="plausible-event-name=Book+Amazon">
              <Image src="/images/book-cover.jpg" alt="The Way Back Home by Daniel J. Ahearn" width={680} height={1005} priority style={{ width: '100%', height: 'auto', borderRadius: 6, boxShadow: '0 24px 60px rgba(0,0,0,.45)' }} />
            </a>
          </div>
        }
      >
        <a className="btn btn-gold plausible-event-name=Book+Amazon" href={AMAZON_URL} target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        <a className="btn btn-line-l plausible-event-name=Audible+Click" href={AUDIBLE_URL} target="_blank" rel="noopener noreferrer">Listen on Audible</a>
      </Hero>

      <Quote {...ELLIOTT_QUOTE} />

      <Section tone="cream2" width="mid">
        <div className="cols">
          <div>
            <p className="eyebrow">Who it’s for</p>
            <h2 className="h2" style={{ fontSize: 'clamp(30px,3.2vw,40px)', marginBottom: 24 }}>You might recognize yourself here</h2>
            <List
              items={[
                'Your teenager has pulled away and you don’t know why',
                'Every conversation turns into a conflict',
                'You’re grieving the relationship you used to have',
                'You’ve tried boundaries and consequences, and nothing sticks',
                'You suspect your own history is part of the picture',
              ]}
            />
          </div>
          <div>
            <p className="eyebrow">What’s inside</p>
            <h2 className="h2" style={{ fontSize: 'clamp(30px,3.2vw,40px)', marginBottom: 24 }}>What the book covers</h2>
            <List
              items={[
                'The attachment science behind adolescent withdrawal and conflict',
                'How your own attachment history shows up in your parenting',
                'The Ideal Parent Figure framework, adapted for families',
                'Practical repair for ruptures, shutdown, and distance',
                'Staying present when you’re activated, without performing calm',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="The framework"
        title="The five conditions of secure attachment"
        intro="The book is built around the core relational experiences that allow security to develop, drawn from the work of Dr. Daniel P. Brown and Dr. David Elliott and applied to parenting teenagers."
      >
        <div className="row" style={{ gap: 16 }}>
          {conditions.map((c, i) => (
            <div key={c.name} className="card" style={{ flex: '1 1 200px', minWidth: 0, padding: 28 }}>
              <p className="serif" style={{ fontStyle: 'italic', fontSize: 44, lineHeight: 1, color: 'var(--gold)' }}>{i + 1}</p>
              <h3 style={{ fontSize: 26, marginTop: 14 }}>{c.name}</h3>
              <p style={{ marginTop: 6, color: 'var(--ink2)', fontSize: 16 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark" width="mid" eyebrow="Inside the book" title="The R.E.A.L. Method">
        <p style={{ color: 'var(--sage)', maxWidth: 640, marginTop: -24 }}>
          Chapter 7 introduces R.E.A.L., a four-step way back after a rupture: Regulate the breath, Explore the moment, Attune with empathy, Lean back in. Parents practice it in the support groups and every day in the free app.
        </p>
        <div className="btns" style={{ marginTop: 36 }}>
          <a className="btn btn-gold plausible-event-name=App+Open" href={APP_URL} target="_blank" rel="noopener noreferrer">Open the free app</a>
          <Link className="btn btn-line-l" href="/parent-support-groups/#real-method">R.E.A.L. in the parent groups</Link>
        </div>
      </Section>

      <Section width="mid">
        <div className="cols" style={{ alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Free guide</p>
            <h2 className="h2" style={{ fontSize: 'clamp(30px,3.2vw,40px)' }}>Why your teen is pushing you away</h2>
            <p style={{ marginTop: 16, color: 'var(--ink2)' }}>A short introduction to the framework and what drives adolescent withdrawal, drawn directly from the book.</p>
            <a className="btn btn-dark plausible-event-name=Guide+Download" href={GUIDE_URL} target="_blank" rel="noopener noreferrer" download style={{ marginTop: 28 }}>Download the free guide</a>
          </div>
          <div className="prose">
            <p className="eyebrow">About the author</p>
            <p>
              Daniel J. Ahearn is an LMFT and IAT-certified attachment therapist and Director of Culture at Ascend Healthcare, a residential treatment program for adolescents in Los Angeles. The book distills over a decade of clinical work with teenagers and their parents into a framework any family can use.
            </p>
            <Link className="lnk" href="/about" style={{ color: 'var(--f1)', textDecoration: 'none' }}>More about Daniel <Arrow /></Link>
          </div>
        </div>
      </Section>

      <Closing
        title="Bring it into your family."
        text="If you’d like support putting the book into practice, start with a free 15-minute call."
        secondary={{ href: '/parent-support-groups', label: 'Parent support groups' }}
      />
    </Page>
  )
}
