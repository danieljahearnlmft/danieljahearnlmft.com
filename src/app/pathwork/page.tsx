import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pathwork · Western Dharma Friends',
  description:
    'Recordings and inner-practice resources for those carrying the Pathwork Oracle Deck.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Pathwork Oracle',
    description: 'Guided meditations for those carrying the deck.',
    images: [
      {
        url: '/images/pathwork-deck-art.jpg',
        width: 1200,
        height: 1875,
        alt: 'Pathwork Oracle — illustration by Ana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pathwork Oracle',
    description: 'Guided meditations for those carrying the deck.',
    images: ['/images/pathwork-deck-art.jpg'],
  },
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
                The Pathwork Oracle Deck began as a way to share Dharma with
                people. Whatever that word means to you in this moment, may
                this deck and may these practices help you discover it more
                deeply.
              </p>
              <p>
                It began as a conversation between Ana, as artist, and me, as
                practitioner, inspired by Noble Green Tara, by Tantra, and by
                the idea that we could build a deck that could create practice
                and put it in someone&rsquo;s hands. It was fun. A little
                magicky. A seeding of Dharma in the world.
              </p>
              <p>Most of all, it was a gift.</p>
              <p>
                Ana painted every card, and the deck is her visual language.
                What a gift. I&rsquo;m grateful to her. And I&rsquo;m grateful
                to the sacred feminine energy of Noble Green Tara and Sherab
                Chamma, All MA that moved through this whole project.
              </p>
              <p>
                The forty cards are doorways. The twenty-two recordings below
                are how you walk through them. Draw a card; sit with it; press
                play on whichever meditation meets the moment. Or come for the
                recordings alone. Both are practice.
              </p>
            </div>

            {/* Portrait inset — Daniel in retreat practice */}
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
            Begin wherever you are drawn. The Four Immeasurables can be
            practiced in any order: Loving Kindness, Compassion, Sympathetic
            Joy, Equanimity. Forgiveness, Breath, and Rest are supportive
            practices you can return to anytime.
          </p>

          {/* Pathwork deck art — master tree illustration by Ana */}
          <div className="relative w-full max-w-md mx-auto aspect-[16/25] mb-3 overflow-hidden rounded">
            <Image
              src="/images/pathwork-deck-art.jpg"
              alt="Pathwork Oracle — Green Tara, the tree, and the figures of the deck, illustration by Ana"
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover"
            />
          </div>
          <p className="text-xs text-cream-500 italic text-center mb-14">
            Illustrations by Ana.
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
      <div className="w-full max-w-[900px] mx-auto px-6 py-4">
        <Image
          src="/images/temple-ceremony.jpg"
          alt=""
          width={1263}
          height={1400}
          sizes="(max-width: 900px) 100vw, 900px"
          className="w-full h-auto rounded shadow-sm"
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

          <div className="space-y-3 text-cream-700">
            <p>
              <a
                href="https://keeppractice.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-cream-900 hover:text-cream-700 transition-colors"
              >
                → Keep Practice
              </a>
              <span className="text-cream-500"> · a companion for steady daily sitting · keeppractice.org</span>
            </p>
            <p>
              <a
                href="https://pithdrop.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-cream-900 hover:text-cream-700 transition-colors"
              >
                → Pith Drop
              </a>
              <span className="text-cream-500"> · brief instructions, distilled · pithdrop.netlify.app</span>
            </p>
          </div>

        </div>
      </section>

      {/* Closing — prayer flag tree */}
      <div className="relative w-full max-w-[1400px] mx-auto aspect-[16/9] max-h-[560px] overflow-hidden">
        <Image
          src="/images/prayer-flag-tree.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Contact line */}
      <section className="py-12 md:py-16">
        <div className="container-main max-w-3xl">
          <p className="text-cream-500 text-sm italic text-center">
            If you would like to reach out about practice, the deck, or
            anything dharma-adjacent:{' '}
            <Link href="/contact" className="underline hover:text-cream-700">
              you can write me here
            </Link>
            .
          </p>
          <p className="text-cream-500 text-xs italic text-center mt-6">
            <Link href="/" className="hover:text-cream-700 transition-colors">
              Daniel J. Ahearn, LMFT
            </Link>
            <span className="text-cream-400"> · therapy in Los Angeles</span>
          </p>
        </div>
      </section>
    </>
  )
}
