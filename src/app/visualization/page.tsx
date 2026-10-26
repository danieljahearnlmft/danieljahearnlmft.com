import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AMAZON_URL, APP_URL, EMAIL, SUBSTACK_URL } from '@/lib/site'
import { Page, Section, Video } from '@/components/site/ui'

export const metadata: Metadata = {
  title: { absolute: 'Guided Visualizations for Parents of Teens · The Way Back Home' },
  description:
    'A series of guided visualizations rooted in attachment theory and the Five Conditions of Secure Attachment: Safety, Attunement, Soothing, Expressed Delight, Exploration, and being the Ideal Parent for your teen. About twenty minutes each.',
  keywords: [
    'guided visualization', 'parents of teens', 'attachment theory', 'secure attachment',
    'safety meditation', 'attunement', 'nervous system regulation', 'Daniel Ahearn LMFT',
    'The Way Back Home',
  ],
  alternates: { canonical: 'https://danieljahearnlmft.com/visualization' },
  openGraph: {
    type: 'website',
    url: 'https://danieljahearnlmft.com/visualization',
    title: 'Guided Visualizations for Parents of Teens · The Way Back Home',
    description:
      'Guided visualizations rooted in attachment theory and the Five Conditions of Secure Attachment.',
    images: ['/images/visualization-hero.jpg'],
  },
}

// To launch a chapter: set its youtubeId, uploadDate, and minutes.
// Order = release order = chapter number.
type Item = {
  title: string; slug: string; note: string; blurb?: string
  youtubeId: string | null; uploadDate?: string; minutes?: number; audio?: string
}
const series: Item[] = [
  {
    title: 'Safety', slug: 'safety', note: 'Enough steadiness to stay present.',
    blurb: 'The foundation. Enough internal steadiness to remain present, without escalating, withdrawing, or collapsing.',
    youtubeId: 'GGmNdJrYr5E', uploadDate: '2026-06-22', minutes: 22,
    audio: '/audio/safety-visualization.mp3',
  },
  {
    title: 'Attunement', slug: 'attunement', note: 'Being seen and felt accurately.',
    blurb: 'Letting another person’s inner state register in you, and letting them feel that it landed.',
    youtubeId: 'hu401h0m9fE', uploadDate: '2026-06-22', minutes: 18,
  },
  {
    title: 'Soothing', slug: 'soothing', note: 'Calming an activated nervous system.',
    blurb: 'A steady, regulated nervous system settling a distressed one, without fixing, rushing, or explaining.',
    youtubeId: 'lDwGqByPRSY', uploadDate: '2026-06-25', minutes: 22,
  },
  {
    title: 'Expressed Delight', slug: 'expressed-delight', note: 'Being met with warmth and delight.',
    blurb: 'Not praise for what your teen achieves, but the felt sense that their existence is welcomed. The condition most often underestimated, and the one that decides whether a self forms around performance or around essence.',
    youtubeId: '9YD4R-fpRR8', uploadDate: '2026-08-21', minutes: 20,
  },
  { title: 'Exploration', slug: 'exploration', note: 'A secure base to venture from.', youtubeId: null },
  { title: 'Ideal Parent', slug: 'ideal-parent', note: 'Becoming the secure base your teen comes home to.', youtubeId: null },
]

const NUM = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']
const live = series.filter((v) => v.youtubeId)

// VideoObject structured data for the live chapters (helps Google index them as videos)
const videoLd = {
  '@context': 'https://schema.org',
  '@graph': live.map((v) => ({
    '@type': 'VideoObject',
    // Mirrors the actual YouTube titles so the structured data matches what is indexed.
    name: `Guided ${v.title} Visualization for Parents of Teens (${v.minutes} min) | The Way Back Home`,
    description: v.blurb,
    thumbnailUrl: [`https://i.ytimg.com/vi/${v.youtubeId}/maxresdefault.jpg`],
    uploadDate: v.uploadDate,
    duration: `PT${v.minutes}M`,
    embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
    publisher: { '@type': 'Person', name: 'Daniel J. Ahearn, LMFT' },
  })),
}

export default function Visualization() {
  return (
    <Page>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }} />

      <section className="phero on-dark" style={{ textAlign: 'center', padding: '160px 5% 150px' }}>
        <Image className="bgimg" src="/images/visualization-hero.jpg" alt="A tree whose canopy and roots form a pair of breathing lungs, lit from within." fill priority sizes="100vw" />
        <div className="veil" aria-hidden="true" style={{ background: 'linear-gradient(rgba(20,32,22,.45), rgba(20,32,22,.7))' }} />
        <div className="wrap-n" style={{ position: 'relative' }}>
          <p className="eyebrow gold" style={{ marginBottom: 24 }}>The five conditions of secure attachment</p>
          <h1 style={{ margin: '0 auto' }}>Guided visualizations</h1>
          <p className="sub" style={{ margin: '24px auto 0' }}>From <em>The Way Back Home</em>, by Daniel J. Ahearn, LMFT</p>
        </div>
      </section>

      <Section width="mid">
        <div className="cols" style={{ alignItems: 'flex-start' }}>
          <div className="prose" style={{ flex: '1 1 460px' }}>
            <p className="lede">
              A series of guided visualizations rooted in attachment theory. Each one corresponds to a foundational condition: Safety, Attunement, Soothing, Expressed Delight, Exploration, and being the Ideal Parent for your teen.
            </p>
            <p>
              Settle into about twenty minutes of breath-work and contemplative practice. Used in clinical work and in home meditation. Begin with Safety; the rest build from there.
            </p>
          </div>
          <div style={{ flex: '0 1 240px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a className="btn btn-dark" href={AMAZON_URL} target="_blank" rel="noopener noreferrer">The book</a>
            <a className="btn btn-line-d" href={APP_URL} target="_blank" rel="noopener noreferrer">The app</a>
            <Link className="btn btn-line-d" href="/">Therapy with Daniel</Link>
          </div>
        </div>
      </Section>

      {live.map((v, i) => (
        <Section key={v.slug} id={v.slug} tone={i % 2 === 0 ? 'cream2' : 'cream'} width="mid" eyebrow={`Chapter ${NUM[series.indexOf(v)]}`} title={v.title}>
          {v.blurb && (
            <p style={{ color: 'var(--ink2)', maxWidth: 640, marginTop: -24, marginBottom: 28 }}>
              {v.blurb} Best with headphones, somewhere you won’t be interrupted.
            </p>
          )}
          <Video id={v.youtubeId as string} title={`${v.title}: Guided Visualization | The Way Back Home`} />
          {v.audio && (
            <a href={v.audio} download style={{ display: 'inline-block', marginTop: 18, fontSize: 16, textDecoration: 'underline', textDecorationColor: 'var(--gold)' }}>
              Download the audio for offline listening
            </a>
          )}
        </Section>
      ))}

      <Section tone="dark" width="narrow" eyebrow="The series" title="Six visualizations">
        <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {series.map((v, i) => (
            <li key={v.slug} style={{ display: 'flex', alignItems: 'baseline', gap: 20, borderTop: '1px solid var(--edge)', padding: '18px 0' }}>
              <span className="serif" style={{ fontStyle: 'italic', fontSize: 22, color: 'var(--gold)', width: 28, flex: 'none' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span className="serif" style={{ display: 'block', fontSize: 26, color: 'var(--cream)' }}>{v.title}</span>
                <span style={{ display: 'block', fontSize: 16, color: 'var(--sage)' }}>{v.note}</span>
              </span>
              {v.youtubeId ? (
                <a href={`#${v.slug}`} style={{ fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>Watch</a>
              ) : (
                <span style={{ fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--sage2)' }}>Coming soon</span>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section width="narrow" eyebrow="What this practice is" title="The five conditions">
        <div className="prose">
          <p>
            These visualizations follow the five conditions of secure attachment as set out in the Integrative Attachment Therapy model developed by Daniel P. Brown and David Elliott. The conditions are not techniques. They describe what a person needs to have received, reliably and often enough, for a secure self to form. Most of us received some of them unevenly, from people doing their best with what they had. The practice is to give the nervous system repeated experiences of them now, in a context safe enough to receive.
          </p>
          <p>
            <strong>Safety</strong> does not mean comfort, agreement, or preventing distress. It means having enough internal steadiness to remain present: without escalating, without withdrawing, and without collapsing. Not the idea of safety, but the body’s recognition that, in this moment, nothing needs to be guarded against.
          </p>
          <p>
            <strong>Attunement</strong> is letting your teen’s inner state actually register in you, and letting them feel that it landed. <strong>Soothing</strong> is a regulated nervous system settling an activated one, without fixing, rushing, or explaining it away. Both ask something of your own state before they ask anything of your teen.
          </p>
          <p>
            <strong>Expressed delight</strong> is being genuinely glad that someone exists. Not for what they achieve, not for how they perform. When it is missing, a self tends to form around performance instead of essence, which is why so many capable teens check every box and still feel see-through.
          </p>
          <p>
            <strong>Exploration</strong> is the half people forget. Security is not closeness alone. A teen who feels held is a teen who can leave the room, take the risk, and come back. The secure base exists so that it can be ventured from.
          </p>
          <p>
            The sixth visualization, the <strong>ideal parent</strong>, gathers the five into a single practice. Not the parent you were told to be, but the steady presence your own nervous system recognizes: the secure base your teen comes home to.
          </p>

          <h2>How to practice</h2>
          <p>
            Begin with Safety and work in order; each one builds on the ones before it. You don’t have to do it perfectly. Notice what happens, including resistance. Resistance is not a sign you’re doing it wrong; it’s information about the pattern you’re working with.
          </p>
          <p>
            Returning regularly matters more than any single sitting. Daily for two weeks is a good place to start. This is a gentle practice, not a performance. If any of it ever feels activating or overwhelming, pause, and return to Safety. Safety is always the foundation.
          </p>
        </div>
      </Section>

      <Section tone="cream2" width="narrow" tight eyebrow="Stay in touch">
        <p style={{ color: 'var(--ink2)' }}>
          Field notes on attachment, adolescence, and the body, on Substack. The same work that runs through the book and this practice, kept short.
        </p>
        <div className="btns" style={{ marginTop: 24 }}>
          <a className="btn btn-dark plausible-event-name=Substack+Click" href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">Read on Substack</a>
        </div>
        <p style={{ marginTop: 32, fontSize: 16, color: 'var(--mute)' }}>
          Questions about the practice or clinical work: <Link href="/contact" style={{ textDecoration: 'underline' }}>write to me</Link> or email <a href={`mailto:${EMAIL}`} style={{ textDecoration: 'underline' }}>{EMAIL}</a>.
          <br />
          <Link href="/" style={{ textDecoration: 'underline' }}>Daniel J. Ahearn, LMFT</Link> · attachment therapy, based in Los Angeles
        </p>
      </Section>
    </Page>
  )
}
