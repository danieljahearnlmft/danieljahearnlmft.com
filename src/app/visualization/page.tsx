import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Safety Visualization · The Way Back Home',
  description:
    'A guided Safety Visualization from Chapter 2 of The Way Back Home. About twenty minutes. Safety is the foundation; the other practices build from here.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Safety Visualization · The Way Back Home',
    description: 'A guided Safety Visualization from Chapter 2 of The Way Back Home.',
  },
}

export default function Visualization() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-200 py-16 md:py-24">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">From The Way Back Home · Chapter 2</p>
          <h1 className="text-4xl md:text-5xl font-serif text-cream-900 leading-tight mb-6">
            Safety Visualization
          </h1>
          <p className="text-cream-700 text-lg leading-relaxed">
            A clinical, attachment-based practice for parents of teens. About twenty minutes. Best with headphones, somewhere you won&rsquo;t be interrupted.
          </p>
        </div>
      </section>

      {/* Audio player */}
      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <div className="bg-cream-50 border border-cream-300 rounded-lg p-7">
            <p className="eyebrow mb-3">Listen</p>
            <h2 className="font-serif text-2xl text-cream-900 mb-5">Safety Visualization</h2>
            <audio
              controls
              preload="metadata"
              src="/audio/safety-visualization.mp3"
              className="w-full mb-4"
            >
              Your browser doesn&rsquo;t support audio playback.{' '}
              <a href="/audio/safety-visualization.mp3">Download the file</a> instead.
            </audio>
            <p className="text-cream-600 text-sm">
              <a
                href="/audio/safety-visualization.mp3"
                download
                className="underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors"
              >
                Download for offline listening
              </a>
              <span className="text-cream-400"> &middot; </span>
              <a
                href="https://www.youtube.com/watch?v=JdDb2kE56dM"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors"
              >
                Or watch on YouTube
              </a>
            </p>
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
