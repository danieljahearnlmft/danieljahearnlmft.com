import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guided Visualizations for Parents of Teens · The Way Back Home',
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

// To launch a chapter: set its youtubeId. Order = release order = chapter number.
type Item = { title: string; slug: string; note: string; blurb?: string; youtubeId: string | null; audio?: string }
const series: Item[] = [
  {
    title: 'Safety', slug: 'safety', note: 'Enough steadiness to stay present.',
    blurb: 'The foundation. Enough internal steadiness to remain present, without escalating, withdrawing, or collapsing.',
    youtubeId: 'GGmNdJrYr5E', audio: '/audio/safety-visualization.mp3',
  },
  {
    title: 'Attunement', slug: 'attunement', note: 'Being seen and felt accurately.',
    blurb: 'Letting another person’s inner state register in you, and letting them feel that it landed.',
    youtubeId: 'hu401h0m9fE',
  },
  { title: 'Soothing', slug: 'soothing', note: 'Calming an activated nervous system.', youtubeId: null },
  { title: 'Expressed Delight', slug: 'expressed-delight', note: 'Being met with warmth and delight.', youtubeId: null },
  { title: 'Exploration', slug: 'exploration', note: 'A secure base to venture from.', youtubeId: null },
  { title: 'Ideal Parent', slug: 'ideal-parent', note: 'Becoming the secure base your teen comes home to.', youtubeId: null },
]

const NUM = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']
const live = series.filter((v) => v.youtubeId)

const btnGold =
  'inline-flex items-center justify-center w-full rounded bg-[#c9a14e] px-6 py-3 ' +
  'text-sm font-medium text-cream-50 hover:bg-[#b88a38] transition-colors'

// VideoObject structured data for the live chapters (helps Google index them as videos)
const videoLd = {
  '@context': 'https://schema.org',
  '@graph': live.map((v) => ({
    '@type': 'VideoObject',
    name: `${v.title}: A Guided Visualization for Parents of Teens | The Way Back Home`,
    description: v.blurb,
    thumbnailUrl: [`https://i.ytimg.com/vi/${v.youtubeId}/maxresdefault.jpg`],
    uploadDate: '2026-06-22',
    embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
    publisher: { '@type': 'Person', name: 'Daniel J. Ahearn, LMFT' },
  })),
}

export default function Visualization() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }} />

      {/* Hero */}
      <section className="relative">
        <img
          src="/images/visualization-hero.jpg"
          alt="A tree whose canopy and roots form a pair of breathing lungs, lit from within."
          className="h-[58vh] min-h-[400px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-cream-100/85 mb-4">
            The Five Conditions of Secure Attachment
          </p>
          <h1 className="font-serif font-bold text-4xl md:text-6xl text-cream-50 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
            The Way Back Home
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-cream-100 mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Guided Visualizations
          </p>
        </div>
      </section>

      {/* Intro — copy left, actions right */}
      <section className="section-cream">
        <div className="container-main max-w-[900px]">
          <div className="grid gap-10 md:grid-cols-[1fr_12rem] md:gap-14 md:items-start">
            <div>
              <div className="space-y-4 text-cream-700 text-lg leading-relaxed">
                <p>
                  A series of guided visualizations rooted in attachment theory and the Five
                  Conditions of Secure Attachment. Each one corresponds to a foundational condition:
                  Safety, Attunement, Soothing, Expressed Delight, Exploration, and being the Ideal
                  Parent for your teen.
                </p>
                <p>
                  Settle into about twenty minutes of breath-work and contemplative practice. Used in
                  clinical work and in home meditation. Begin with Safety; the rest build from there.
                </p>
              </div>
              <div className="mt-8 text-sm leading-relaxed text-[#6a5a4a]">
                <p className="font-serif text-base text-cream-900">Daniel J. Ahearn, LMFT</p>
                <p>Attachment &amp; Family Therapy</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:pt-1">
              <a className={btnGold} href="https://www.amazon.com/dp/B0GLF2JH8T" target="_blank" rel="noopener noreferrer">The Book</a>
              <a className={btnGold} href="https://waybackhome.app" target="_blank" rel="noopener noreferrer">The App</a>
              <a className={btnGold} href="https://danieljahearnlmft.com">Clinical Site</a>
            </div>
          </div>
        </div>
      </section>

      {/* Now available — one player per live chapter */}
      {live.map((v) => {
        const chapter = NUM[series.indexOf(v)]
        return (
          <section key={v.slug} id={v.slug} className="section-warm">
            <div className="container-main max-w-[860px]">
              <p className="eyebrow">Now Available · Chapter {chapter}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-cream-900 mb-2">{v.title}</h2>
              {v.blurb && (
                <p className="text-cream-700 leading-relaxed mb-7 max-w-2xl">
                  {v.blurb} Best with headphones, somewhere you won&rsquo;t be interrupted.
                </p>
              )}
              <div className="overflow-hidden rounded-xl border border-[#e5d9c9] shadow-[0_8px_30px_rgba(45,31,14,0.10)] bg-black">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 h-full w-full border-0"
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={`${v.title} — Guided Visualization | The Way Back Home`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
              {v.audio && (
                <p className="mt-4 text-sm text-cream-600">
                  <a
                    href={v.audio}
                    download
                    className="underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors"
                  >
                    Download the audio for offline listening
                  </a>
                </p>
              )}
            </div>
          </section>
        )
      })}

      {/* The series — slim editorial index */}
      <section className="section-cream">
        <div className="container-main max-w-[780px]">
          <p className="eyebrow">The Series</p>
          <h2 className="font-serif text-3xl text-cream-900 mb-3">Six visualizations</h2>
          <p className="text-cream-700 leading-relaxed mb-8 max-w-2xl">
            Released in order. New chapters arrive in the weeks ahead.
          </p>

          <ol className="border-b border-[#e5d9c9]">
            {series.map((v, i) => (
              <li key={v.slug} className="flex items-baseline gap-4 sm:gap-6 border-t border-[#e5d9c9] py-5">
                <span className="font-serif text-cream-400 text-lg w-7 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-xl text-cream-900">{v.title}</h3>
                    {v.youtubeId ? (
                      <a href={`#${v.slug}`} className="shrink-0 text-xs uppercase tracking-widest text-[#b88a38] hover:text-[#8a6a2e] transition-colors">
                        Watch
                      </a>
                    ) : (
                      <span className="shrink-0 text-xs uppercase tracking-widest text-[#a89878]">Coming soon</span>
                    )}
                  </div>
                  <p className="text-cream-600 text-sm mt-1">{v.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What this practice is */}
      <section className="section-warm">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">What This Practice Is</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">Safety as foundation</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            Safety does not mean comfort. It does not mean agreement. It does not mean preventing distress. Safety means having enough internal steadiness to remain present: without escalating, without withdrawing, and without collapsing.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            This visualization is built around that felt sense. Not the idea of safety, but the body&rsquo;s recognition that, in this moment, nothing needs to be guarded against. For many of us, this felt sense was unreliable in early life. The practice is to give the nervous system repeated experiences of it now, in a context safe enough to receive.
          </p>
          <p className="text-cream-700 leading-relaxed">
            This is the foundation. The other practices that follow in the book, attunement, soothing, expressed delight, exploration, and the ideal parent, build from here. If any of those ever feels activating or overwhelming, return to this one. Safety is always the foundation.
          </p>
        </div>
      </section>

      {/* How to practice */}
      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">How to Practice</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">A few notes</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            You don&rsquo;t have to do it perfectly. Notice what happens, including resistance. Resistance is not a sign you&rsquo;re doing it wrong; it&rsquo;s information about the structure of the pattern you&rsquo;re working with. The work is what arises, whatever it is.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            Returning to the practice regularly is more useful than any single sitting. Daily for two weeks is a good place to start. Notice what shifts in your body and in your relationships. Real change begins there.
          </p>
          <p className="text-cream-700 leading-relaxed">
            This is offered as a gentle practice, not a performance. If at any point it feels activating, confusing, or overwhelming, pause. Come back when you&rsquo;re ready.
          </p>
        </div>
      </section>

      {/* Substack subscribe */}
      <section className="section-warm">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">Stay In Touch</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-3">Read me on Substack</h2>
          <p className="text-cream-700 leading-relaxed mb-7 max-w-xl">
            Field notes on attachment, adolescence, and the body. The same work that runs through the book and through this practice, kept short.
          </p>
          <iframe
            src="https://danieljahearnlmft.substack.com/embed"
            width="480"
            height="320"
            style={{ border: '1px solid #EEE', background: 'white', maxWidth: '100%' }}
            scrolling="no"
            title="Subscribe to Daniel J. Ahearn's Substack"
          />
        </div>
      </section>

      {/* Contact line */}
      <section className="py-12 md:py-16">
        <div className="container-main max-w-3xl">
          <p className="text-cream-700 text-base text-center">
            For questions about the practice or to reach out about clinical work,{' '}
            <Link href="/contact" className="font-serif text-cream-900 underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors">
              write me here
            </Link>
            {' '}or email{' '}
            <a href="mailto:daniel@danieljahearnlmft.com" className="font-serif text-cream-900 underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors">
              daniel@danieljahearnlmft.com
            </a>
            .
          </p>
          <p className="text-cream-600 text-sm text-center mt-8">
            <Link href="/" className="underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors">
              Daniel J. Ahearn, LMFT
            </Link>
            <span className="text-cream-500"> &middot; therapy in Los Angeles</span>
          </p>
        </div>
      </section>
    </>
  )
}
