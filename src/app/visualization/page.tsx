import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Safety Visualization · The Way Back Home',
  description:
    'A guided safety visualization from The Way Back Home, for parents and adults working with attachment-based practice.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Safety Visualization · The Way Back Home',
    description: 'A guided safety visualization from The Way Back Home.',
  },
}

export default function Visualization() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-200 py-16 md:py-24">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">From The Way Back Home</p>
          <h1 className="text-4xl md:text-5xl font-serif text-cream-900 leading-tight mb-6">
            Safety Visualization
          </h1>
          <p className="text-cream-700 text-lg leading-relaxed">
            A guided practice for grounding the nervous system in the felt sense of safety. About twenty-two minutes. Best with headphones, somewhere you won&rsquo;t be interrupted.
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
            </p>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="section-warm">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">How to Use</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">A few notes for practice</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            This visualization is built around the felt sense of safety: not the idea of safety, but the body&rsquo;s recognition that, in this moment, nothing needs to be guarded against. For many of us, this felt sense was unreliable in early life. The practice is to give the nervous system repeated experiences of it now, in a context safe enough to receive.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            You don&rsquo;t have to do it perfectly. Notice what happens, including resistance. Resistance is information, not a sign you&rsquo;re doing it wrong. The work is what arises, whatever it is.
          </p>
          <p className="text-cream-700 leading-relaxed">
            Returning to the practice regularly is more useful than any single sitting. Consider it part of a daily rhythm, however brief.
          </p>
        </div>
      </section>

      {/* Substack subscribe */}
      <section className="section-cream">
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
