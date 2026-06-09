import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import OracleApp from './OracleApp'

export const metadata: Metadata = {
  title: 'Pathwork Oracle · Daily Companion',
  description:
    'A daily companion to the Pathwork Oracle Deck — pull a card, walk the 40-day path, read the spreads, and practice.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Pathwork Oracle · Daily Companion',
    description: 'Pull a card a day and walk the 40-day path of the Pathwork Oracle.',
    images: [{ url: '/images/pathwork-deck-art.jpg', width: 1200, height: 1875 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pathwork Oracle · Daily Companion',
    description: 'Pull a card a day and walk the 40-day path of the Pathwork Oracle.',
    images: ['/images/pathwork-deck-art.jpg'],
  },
}

export default function OraclePage() {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[42vh] min-h-[300px] max-h-[520px] overflow-hidden">
        <Image
          src="/images/prayer-flag-tree.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(20,14,5,0.55) 0%, rgba(20,14,5,0.25) 55%, rgba(20,14,5,0.1) 100%)',
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container-main">
            <p className="eyebrow !text-cream-200/80 !mb-3">A daily companion</p>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight" style={{ color: '#fdfbf7' }}>
              Pathwork Oracle
            </h1>
            <p className="mt-3 max-w-md text-cream-100/90 text-sm md:text-base">
              Pull a card. Walk the path. Practice every day.
            </p>
          </div>
        </div>
      </div>

      {/* App */}
      <section className="py-14 md:py-20">
        <div className="container-main">
          <OracleApp />
        </div>
      </section>

      {/* Deeper dive */}
      <section className="bg-cream-100 py-16 border-t border-cream-200">
        <div className="container-main max-w-3xl text-center space-y-8">
          <div>
            <p className="eyebrow">Go deeper</p>
            <h2 className="font-serif text-3xl text-cream-900">Beyond the daily pull</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <a
              href="https://www.amazon.com/Pathwork-Oracle-Daniel-Ahearn/dp/1646712005/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-lg border border-cream-300 hover:border-cream-500 transition-colors"
            >
              <p className="font-serif text-lg text-cream-900">The physical deck</p>
              <p className="text-sm text-cream-600 mt-1">
                40 cards painted by Ana Tourian, with the full guidebook. Published by
                U.S. Games Systems.
              </p>
            </a>
            <Link
              href="/pathwork"
              className="block p-5 rounded-lg border border-cream-300 hover:border-cream-500 transition-colors"
            >
              <p className="font-serif text-lg text-cream-900">The 22 recordings</p>
              <p className="text-sm text-cream-600 mt-1">
                The full set of guided meditations, including the Jewel Tree, on the
                Pathwork page.
              </p>
            </Link>
            <a
              href="https://keeppractice.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-lg border border-cream-300 hover:border-cream-500 transition-colors"
            >
              <p className="font-serif text-lg text-cream-900">Keep Practice</p>
              <p className="text-sm text-cream-600 mt-1">A companion for steady daily sitting.</p>
            </a>
            <a
              href="https://pithdrop.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-lg border border-cream-300 hover:border-cream-500 transition-colors"
            >
              <p className="font-serif text-lg text-cream-900">Pith Drop</p>
              <p className="text-sm text-cream-600 mt-1">Brief instructions, distilled.</p>
            </a>
          </div>
          <p className="text-sm text-cream-500 italic pt-2">
            May you be peaceful, may you be free from suffering, may you see things as
            they are, and may your life be a celebration. — Daniel
          </p>
          <p className="text-cream-600 text-sm italic pt-2">
            To learn about my clinical work,{' '}
            <Link href="/" className="underline hover:text-cream-800">
              you can reach me here
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
