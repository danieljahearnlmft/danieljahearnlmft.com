import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pathwork · Western Dharma Friends',
  description:
    'Recordings and inner-practice resources alongside the Pathwork Oracle Deck.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Pathwork Oracle',
    description: 'Guided meditations and inner-practice resources.',
    images: [
      {
        url: '/images/pathwork-deck-art.jpg',
        width: 1200,
        height: 1875,
        alt: 'Pathwork Oracle, illustration by Ana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pathwork Oracle',
    description: 'Guided meditations and inner-practice resources.',
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
      {/* Hero image — full-width Lubra tree with inlaid title */}
      <div className="relative w-full h-[55vh] min-h-[360px] max-h-[640px] overflow-hidden">
        <Image
          src="/images/lubra-tree.jpg"
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
              'linear-gradient(135deg, rgba(20,14,5,0.45) 0%, rgba(20,14,5,0.20) 45%, rgba(20,14,5,0) 75%)',
          }}
        />
        <div className="absolute inset-0 flex items-start md:items-center justify-start">
          <div className="pl-6 pr-6 pt-10 md:pl-16 md:pt-0 max-w-2xl">
            <h1
              className="font-serif text-5xl md:text-7xl leading-[1.05]"
              style={{ color: '#fdfbf7' }}
            >
              <span className="block">Western</span>
              <span className="block">Dharma</span>
              <span className="block">Friends</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Title panel */}
      <section className="bg-cream-200 py-12 md:py-16">
        <div className="container-main max-w-3xl text-center">
          <p className="font-serif text-4xl md:text-5xl text-cream-900 leading-tight">
            Pathwork Oracle
          </p>
        </div>
      </section>

      {/* Intro essay — with portrait inset alongside */}
      <section className="py-16 md:py-20">
        <div className="container-main max-w-3xl">
          <div className="grid md:grid-cols-[1fr_240px] gap-10 items-start">
            <div className="space-y-5 text-cream-700 leading-relaxed">
              <p>
                The{' '}
                <a
                  href="https://www.amazon.com/Pathwork-Oracle-Daniel-Ahearn/dp/1646712005/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors"
                >
                  Pathwork Oracle
                </a>
                {' '}Deck began as a way to share Dharma with people. Whatever
                that word means to you in this moment, may this deck and may
                these practices help you discover it more deeply.
              </p>
              <p>
                It began as a conversation between Ana, as artist, and me, as
                practitioner, inspired by Noble Green Tara, by Tantra, and by
                the idea that we could build a deck that could create practice
                and put it in someone&rsquo;s hands. It was fun. A little
                magicky. A seeding of Dharma in the world.
              </p>
              <p>Most of all, it was a gift we wanted to share.</p>
              <p>
                Ana painted every card, and the deck is her visual language.
                I&rsquo;m grateful to her. And I&rsquo;m grateful to the sacred
                feminine energy of Noble Green Tara and Sherab Chamma: All Ma -
                that moved through this project.
              </p>
              <p>
                The twenty-two recordings below help you walk through them. You
                can pull a card; sit with it; press play on whichever meditation
                meets the moment. Or come to the recordings alone and build the
                habit of practice.
              </p>
              <p>
                May you be peaceful, may you be free from suffering, may you see
                things as they are, and may your life be a celebration.
              </p>
              <p className="pt-2">- Daniel</p>
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
        <p className="text-cream-600 mb-12">
          The Rest card holds the Jewel Tree meditation, in the form
          taught by Robert Thurman. It is a practice that centers on
          taking refuge: offering a “wish-fulfilling jewel tree” of
          interconnected awakened beings as a gentle, systematic path
          to wake up, find compassion, and remember our original heart.
          It is one of the great joys of my life that I have been able
          to share this practice with hundreds of teenagers. May it
          bring you joy and rest.
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

      {/* Friends doorway + In Her Honor — balanced two-column block */}
      <section className="bg-cream-100 py-16 md:py-20 border-t border-cream-300">
        <div className="container-main max-w-5xl">
          <p className="text-cream-700 leading-relaxed text-center mb-14 max-w-xl mx-auto">
            These may help deepen your practice.
          </p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* In Her Honor — left column */}
            <div>
              <p className="eyebrow">In Her Honor</p>
              <h3 className="text-2xl md:text-3xl font-serif text-cream-900 leading-tight mb-6">
                Caroline
              </h3>
              <div className="space-y-5 text-cream-700 leading-relaxed">
                <p>
                  My friend Caroline was an advocate for mercy, peace, and
                  awareness. She also loved to dance.{' '}
                  <a
                    href="https://carolinerainbow.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors"
                  >
                    Caroline Rainbow
                  </a>{' '}
                  is in her honor. In the Bön, we learn that sound, light, and
                  light&rsquo;s rays are inseparable — the spontaneous play of
                  awareness, eventually resolving into the rainbow body. This
                  is encouragement to celebrate through music, dance,
                  expression, and care.
                </p>
                <p>
                  If you would like to explore the spirit of generosity,
                  consider{' '}
                  <a
                    href="https://www.every.org/animalcharityevaluators/f/recommended-charity-c87e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors"
                  >
                    this
                  </a>{' '}
                  in her honor.
                </p>
                <p className="font-serif italic text-cream-600 pt-2">
                  May all beings be free,
                  <br />
                  and may our celebration of life
                  <br />
                  contribute to that forever.
                </p>
              </div>
            </div>

            {/* Keep Practice — right column, balanced with Caroline */}
            <div>
              <p className="eyebrow">A Companion</p>
              <h3 className="text-2xl md:text-3xl font-serif text-cream-900 leading-tight mb-6">
                <a
                  href="https://keeppractice.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors"
                >
                  Keep Practice
                </a>
              </h3>
              <div className="space-y-5 text-cream-700 leading-relaxed">
                <p>
                  A quiet companion for steady daily sitting — gentle
                  reminders, a sense of rhythm, the kind of low-friction
                  support that lets the practice take root.
                </p>
                <p>
                  Less about doing more, more about remembering to return.
                  Open it, sit, close it. The shape of a day begins to hold
                  the shape of a path.
                </p>
              </div>
            </div>
          </div>

          {/* Pith Drop — single centered line below the two columns */}
          <div className="mt-16 md:mt-20 pt-10 border-t border-cream-300 text-center">
            <p className="text-cream-700 leading-relaxed">
              <a
                href="https://pithdrop.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-cream-900 underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors"
              >
                Pith Drop
              </a>
              <span className="text-cream-500"> · a monthly starter practice for those interested</span>
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
          <div className="container-main max-w-3xl text-center">
            <p className="text-cream-600 text-sm italic">
              To return to my clinical work,{' '}
              <a href="/contact/" className="underline hover:text-cream-800">
                you can reach me here
             </a>
              .
            </p>
          </div>
        </section>
    </>
  )
}
