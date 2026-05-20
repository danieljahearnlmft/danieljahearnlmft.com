import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pathwork · Western Dharma Friends',
  description:
    'Recordings and inner-practice resources for those carrying the Pathwork Oracle Deck.',
  robots: { index: false, follow: false },
}

type Track = { num: number; title: string; file: string }

const sections: { heading: string; subheading?: string; tracks: Track[] }[] = [
  {
    heading: 'Loving Kindness',
    subheading: 'Metta · the wish that beings be happy',
    tracks: [
      { num: 11, title: 'For Self',                 file: '11-brahma-self.mp3' },
      { num: 10, title: 'For Loved Ones',           file: '10-brahma-loved-ones.mp3' },
      { num: 8,  title: 'For All Sentient Beings',  file: '08-brahma-all-sentient-beings.mp3' },
      { num: 9,  title: 'For Difficult People',     file: '09-brahma-difficultpeople.mp3' },
    ],
  },
  {
    heading: 'Compassion',
    subheading: 'Karuna · the wish that beings be free from suffering',
    tracks: [
      { num: 5, title: 'For Self',                 file: '05-compassion-self.mp3' },
      { num: 7, title: 'For Loved Ones',           file: '07-compassion-loved-ones.mp3' },
      { num: 4, title: 'For Difficult People',     file: '04-compassion-difficult-people.mp3' },
      { num: 6, title: 'For All Sentient Beings',  file: '06-compassion-sentient-beings.mp3' },
    ],
  },
  {
    heading: 'Sympathetic Joy',
    subheading: 'Mudita · rejoicing in the happiness of others',
    tracks: [
      { num: 18, title: 'For Self',                 file: '18-sj-self.mp3' },
      { num: 17, title: 'For Loved Ones',           file: '17-sj-loved-ones.mp3' },
      { num: 16, title: 'For Difficult People',     file: '16-sj-difficult-people.mp3' },
      { num: 19, title: 'For All Sentient Beings',  file: '19-sj-sentient-beings.mp3' },
    ],
  },
  {
    heading: 'Equanimity',
    subheading: 'Upekkha · the steady ground beneath all four',
    tracks: [
      { num: 15, title: 'For Self',                 file: '15-rp-equanimity-self.mp3' },
      { num: 13, title: 'For Loved Ones',           file: '13-rp-equanimity-lovedones.mp3' },
      { num: 14, title: 'For Difficult People',     file: '14-rp-equanimity-difficultpeople.mp3' },
      { num: 12, title: 'For All Sentient Beings',  file: '12-rp-equanimity-sentientbeings.mp3' },
    ],
  },
  {
    heading: 'Forgiveness',
    tracks: [
      { num: 3, title: 'Forgive Me',       file: '03-forgive-me.mp3' },
      { num: 1, title: 'I Forgive You',    file: '01-i-forgive-you.mp3' },
      { num: 2, title: 'I Forgive Myself', file: '02-i-forgive-myself.mp3' },
    ],
  },
  {
    heading: 'Breath',
    tracks: [
      { num: 20, title: 'Find Your Breath',       file: '20-breath-find-your-breath.mp3' },
      { num: 21, title: 'Stay With Your Breath',  file: '21-breath-stay-with-your-breath.mp3' },
    ],
  },
  {
    heading: 'Rest',
    tracks: [
      { num: 22, title: 'The Jewel Tree', file: '22-the-jewel-tree.mp3' },
    ],
  },
]

function TrackRow({ track }: { track: Track }) {
  return (
    <div className="py-4 border-b border-cream-200 last:border-b-0">
      <p className="font-serif text-cream-900 text-base mb-2">
        <span className="text-cream-500 text-sm mr-3">
          {String(track.num).padStart(2, '0')}
        </span>
        {track.title}
      </p>
      <audio
        controls
        preload="metadata"
        src={`/audio/${track.file}`}
        className="w-full"
      >
        Your browser doesn’t support audio playback.
        <a href={`/audio/${track.file}`}>Download the file</a> instead.
      </audio>
    </div>
  )
}

export default function Pathwork() {
  return (
    <>
      {/* Hero image — full-width Lubra tree */}
      <div className="relative w-full h-[55vh] min-h-[360px] max-h-[640px] overflow-hidden">
        <Image
          src="/images/lubra-tree.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Title panel */}
      <section className="bg-cream-200 py-12 md:py-16">
        <div className="container-main max-w-3xl text-center">
          <p className="eyebrow">Western Dharma Friends</p>
          <h1 className="text-4xl md:text-5xl font-serif text-cream-900 leading-tight mb-4">
            Pathwork Oracle
          </h1>
          <p className="font-serif italic text-cream-600 text-lg">
            Guided meditations for those carrying the deck.
          </p>
        </div>
      </section>

      {/* Intro essay — with portrait inset alongside */}
      <section className="py-16 md:py-20">
        <div className="container-main max-w-3xl">
          <div className="grid md:grid-cols-[1fr_240px] gap-10 items-start">
            <div className="space-y-5 text-cream-700 leading-relaxed">
              <p>
                The Pathwork Oracle is a deeply personal project. I created it
                in collaboration with Ana, a gifted artist and spiritual
                friend, as a way to share the wisdom and inner practices that
                have shaped my own life. This 40-card deck is rooted in the
                heart of Dharma and draws from traditions that speak to
                transformation, compassion, and liberation.
              </p>
              <p>
                Each card is an invitation — a portal to deepen self-awareness,
                reconnect with sacred truth, and engage the healing power of
                imagination and reflection. Whether you are a seasoned
                meditator or new to spiritual practice, the Pathwork Oracle
                offers a way to explore your inner world.
              </p>
              <p className="text-cream-700">The deck includes:</p>
              <ul className="list-disc pl-6 space-y-2 text-cream-700">
                <li>A 40-day meditation journey structured for daily card work</li>
                <li>22 guided meditations to support your practice (below)</li>
                <li>
                  Symbolic, archetypal imagery anchored in sacred themes —
                  especially the energy of Green Tara, the liberator, a figure
                  of great compassion and wisdom
                </li>
              </ul>
              <p>
                This is more than a tool. It is an offering from my practice
                to yours. I hold deep gratitude for Ana, whose spirit and
                vision shaped the visual language of the deck.
              </p>
              <p className="font-serif italic text-cream-600">
                May your life be a celebration.
                <br />
                — Daniel
              </p>
            </div>

            {/* Portrait inset — hidden on mobile, visible md+ */}
            <div className="hidden md:block sticky top-24">
              <Image
                src="/images/daniel-cave.jpg"
                alt="Daniel in retreat practice"
                width={480}
                height={640}
                className="rounded shadow-sm w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meditations */}
      <section className="bg-cream-100 py-16 md:py-20 border-t border-cream-300">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">The Recordings</p>
          <h2 className="text-3xl md:text-4xl font-serif text-cream-900 leading-tight mb-3">
            Twenty-two guided meditations
          </h2>
          <p className="text-cream-600 mb-12">
            Begin wherever you are drawn. The Four Immeasurables — Loving
            Kindness, Compassion, Sympathetic Joy, and Equanimity — can be
            practiced in any order. Forgiveness, Breath, and Rest are
            supportive practices you can return to anytime.
          </p>

          {sections.map((section) => (
            <div key={section.heading} className="mb-12 last:mb-0">
              <h3 className="font-serif text-2xl text-cream-900 mb-1">
                {section.heading}
              </h3>
              {section.subheading && (
                <p className="font-serif italic text-cream-500 text-sm mb-4">
                  {section.subheading}
                </p>
              )}
              <div>
                {section.tracks.map((t) => (
                  <TrackRow key={t.num} track={t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Atmospheric break — cave vista */}
      <div className="relative w-full h-[42vh] min-h-[260px] max-h-[440px] overflow-hidden">
        <Image
          src="/images/cave-vista.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Western Dharma Friends doorway */}
      <section className="py-16 md:py-20">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">If you found your way here</p>
          <h2 className="text-3xl md:text-4xl font-serif text-cream-900 leading-tight mb-3">
            Western Dharma Friends
          </h2>
          <p className="text-cream-700 leading-relaxed mb-10 max-w-2xl">
            Two small offerings, kept quietly outside the main site. If the
            Pathwork resonates, these may resonate too.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <a
              href="https://keeppractice.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-7 bg-cream-50 border border-cream-300 rounded-lg hover:border-cream-400 hover:shadow-sm transition-all"
            >
              <p className="eyebrow">Daily Practice Support</p>
              <h3 className="font-serif text-xl text-cream-900 mb-2">
                Keep Practice
              </h3>
              <p className="text-cream-600 text-sm leading-relaxed mb-4">
                A companion for steady daily sitting.
              </p>
              <p className="text-cream-500 text-xs">keeppractice.org →</p>
            </a>

            <a
              href="https://pithdrop.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-7 bg-cream-50 border border-cream-300 rounded-lg hover:border-cream-400 hover:shadow-sm transition-all"
            >
              <p className="eyebrow">Short Teachings</p>
              <h3 className="font-serif text-xl text-cream-900 mb-2">
                Pith Drop
              </h3>
              <p className="text-cream-600 text-sm leading-relaxed mb-4">
                Brief instructions, distilled.
              </p>
              <p className="text-cream-500 text-xs">pithdrop.netlify.app →</p>
            </a>
          </div>

          <p className="text-cream-500 text-sm mt-10 italic">
            If you would like to reach out about practice, the deck, or
            anything dharma-adjacent —{' '}
            <Link href="/contact" className="underline hover:text-cream-700">
              you can write me here
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
