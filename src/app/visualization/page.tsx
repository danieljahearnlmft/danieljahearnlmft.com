import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guided Visualizations · The Way Back Home',
  description:
    'Six guided visualizations rooted in attachment theory and the Five Conditions of Secure Attachment: Safety, Soothing, Attunement, Expressed Delight, Exploration, and Ideal Parent. About twenty-two minutes each.',
  openGraph: {
    title: 'Guided Visualizations · The Way Back Home',
    description:
      'Six guided visualizations rooted in attachment theory and the Five Conditions of Secure Attachment.',
  },
}

// To launch a new video: set its `youtubeId`. A null id renders a "Coming soon" card.
const videos: { title: string; youtubeId: string | null; audio?: string }[] = [
  { title: 'Safety', youtubeId: 'OpY73Z6opTI', audio: '/audio/safety-visualization.mp3' },
  { title: 'Soothing', youtubeId: null },
  { title: 'Attunement', youtubeId: null },
  { title: 'Expressed Delight', youtubeId: null },
  { title: 'Exploration', youtubeId: null },
  { title: 'Ideal Parent', youtubeId: null },
]

const btnGold =
  'inline-flex items-center justify-center w-full sm:w-auto rounded bg-[#c9a14e] px-6 py-3 ' +
  'text-sm font-medium text-cream-50 hover:bg-[#b88a38] transition-colors'

function VideoCard({ title, youtubeId, audio }: (typeof videos)[number]) {
  return (
    <article className="overflow-hidden rounded-lg border border-[#e5d9c9] bg-white shadow-[0_2px_8px_rgba(45,31,14,0.05)] hover:shadow-[0_4px_12px_rgba(45,31,14,0.1)] transition-shadow">
      <div className="border-b border-[#e5d9c9] bg-[#f5f0e8] px-6 py-5">
        <h2 className="font-serif font-bold text-[1.4rem] leading-tight text-cream-900">{title}</h2>
      </div>

      {youtubeId ? (
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={`${title} — Guided Visualization`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ) : (
        <div
          className="relative w-full bg-[#f5f0e8]"
          style={{ paddingBottom: '56.25%' }}
        >
          <span className="absolute inset-0 flex items-center justify-center text-sm uppercase tracking-widest text-[#8a7a6a]">
            Coming soon
          </span>
        </div>
      )}

      {audio && (
        <div className="border-t border-[#e5d9c9] px-6 py-4">
          <a
            href={audio}
            download
            className="text-sm text-cream-600 underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors"
          >
            Download the audio for offline listening
          </a>
        </div>
      )}
    </article>
  )
}

export default function Visualization() {
  return (
    <>
      {/* Series intro */}
      <section className="section-warm">
        <div className="container-main max-w-[900px]">
          <p className="eyebrow">The Five Conditions of Secure Attachment</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-cream-900 leading-tight mb-2">
            The Way Back Home
          </h1>
          <p className="font-serif text-xl md:text-2xl text-cream-700 mb-7">Guided Visualizations</p>

          <div className="max-w-2xl space-y-4 text-cream-700 text-lg leading-relaxed">
            <p>
              A series of six guided visualizations rooted in attachment theory and the Five
              Conditions of Secure Attachment. Each visualization corresponds to a foundational
              condition: Safety, Soothing, Attunement, Expressed Delight, Exploration, and the Ideal
              Parent.
            </p>
            <p>
              Settle into twenty-two minutes of breath-work and contemplative practice. These are
              used in clinical practice and in home meditation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a className={btnGold} href="https://www.amazon.com/dp/B0GLF2JH8T" target="_blank" rel="noopener noreferrer">
              The Book
            </a>
            <a className={btnGold} href="https://waybackhome.app" target="_blank" rel="noopener noreferrer">
              The App
            </a>
            <a className={btnGold} href="https://danieljahearnlmft.com">
              Clinical Site
            </a>
          </div>

          <div className="mt-8 text-sm leading-relaxed text-[#6a5a4a]">
            <p>Daniel J. Ahearn, LMFT</p>
            <p>Director of Culture, Ascend Healthcare</p>
            <p>Attachment &amp; Family Therapy</p>
          </div>
        </div>
      </section>

      {/* Video gallery */}
      <section className="section-cream">
        <div className="container-main max-w-[900px]">
          <div className="space-y-10">
            {videos.map((v) => (
              <VideoCard key={v.title} {...v} />
            ))}
          </div>
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
            <Link
              href="/contact"
              className="font-serif text-cream-900 underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors"
            >
              write me here
            </Link>
            {' '}or email{' '}
            <a
              href="mailto:daniel@danieljahearnlmft.com"
              className="font-serif text-cream-900 underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors"
            >
              daniel@danieljahearnlmft.com
            </a>
            .
          </p>
          <p className="text-cream-600 text-sm text-center mt-8">
            <Link
              href="/"
              className="underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors"
            >
              Daniel J. Ahearn, LMFT
            </Link>
            <span className="text-cream-500"> &middot; therapy in Los Angeles</span>
          </p>
        </div>
      </section>
    </>
  )
}
