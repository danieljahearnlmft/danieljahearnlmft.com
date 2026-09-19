import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Library · Daniel J. Ahearn, LMFT',
  description:
    'A working library of videos and guided visualizations on attachment, adolescence, and clinical practice. For clinicians and for parents.',
  alternates: { canonical: 'https://danieljahearnlmft.com/library' },
  openGraph: {
    type: 'website',
    url: 'https://danieljahearnlmft.com/library',
    title: 'Library · Daniel J. Ahearn, LMFT',
    description:
      'Videos and guided visualizations on attachment, adolescence, and clinical practice.',
  },
}

type Video = { title: string; slug: string; youtubeId: string | null; note?: string; aspect?: '16/9' | '9/16' }

const clinicianVideos: Video[] = [
  {
    title: 'Your Teenager Comes Home at 1:15 AM. What Do You Do?',
    slug: 'teen-comes-home-115am',
    youtubeId: 'aSk3KdEKhCQ',
  },
  {
    title: 'The Nine Breaths of Purification',
    slug: 'nine-breaths',
    youtubeId: 'W_HtN9BgwaI',
    aspect: '9/16',
    note: 'A Bön practice for releasing anger, attachment, and the certainty we mistake for knowing.',
  },
]

const visualizations: Video[] = [
  { title: 'Safety',           slug: 'safety',           youtubeId: 'GGmNdJrYr5E', note: 'Enough steadiness to stay present.' },
  { title: 'Attunement',       slug: 'attunement',       youtubeId: 'hu401h0m9fE', note: 'Being seen and felt accurately.' },
  { title: 'Soothing',         slug: 'soothing',         youtubeId: 'lDwGqByPRSY', note: 'Calming an activated nervous system.' },
  { title: 'Expressed Delight',slug: 'expressed-delight',youtubeId: '9YD4R-fpRR8', note: 'Being met with warmth and delight.' },
  { title: 'Exploration',      slug: 'exploration',      youtubeId: null,           note: 'A secure base to venture from.' },
  { title: 'Ideal Parent',     slug: 'ideal-parent',     youtubeId: null,           note: 'Becoming the secure base your teen comes home to.' },
]

function VideoEmbed({ id, title, aspect = '16/9' }: { id: string; title: string; aspect?: '16/9' | '9/16' }) {
  const paddingBottom = aspect === '9/16' ? '177.78%' : '56.25%'
  const wrapperClass = aspect === '9/16' ? 'mx-auto max-w-[400px]' : 'w-full'
  return (
    <div className={`overflow-hidden rounded-xl border border-[#e5d9c9] shadow-[0_8px_30px_rgba(45,31,14,0.10)] bg-black ${wrapperClass}`}>
      <div className="relative w-full" style={{ paddingBottom }}>
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default function Library() {
  const liveVis = visualizations.filter((v) => v.youtubeId)

  return (
    <>
      {/* Header */}
      <section className="section-cream pt-16 md:pt-20">
        <div className="container-main max-w-[860px]">
          <p className="eyebrow">Library</p>
          <h1 className="font-serif text-4xl md:text-5xl text-cream-900 leading-tight mb-6">
            A working library.
          </h1>
          <p className="text-cream-700 text-lg leading-relaxed max-w-2xl mb-8">
            Videos and guided visualizations on attachment, adolescence, and clinical practice.
            A page you can link to, come back to, or send to a colleague.
          </p>
          <p className="text-cream-700 leading-relaxed max-w-2xl">
            I add one of these every two weeks. If you want them in your inbox as they land,
            subscribe below.
          </p>
        </div>
      </section>

      {/* Substack subscribe */}
      <section className="section-warm">
        <div className="container-main max-w-[860px]">
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

      {/* For Clinicians */}
      <section id="for-clinicians" className="section-cream">
        <div className="container-main max-w-[860px]">
          <p className="eyebrow">For Clinicians</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-900 mb-3">
            Case-based teaching from the room.
          </h2>
          <p className="text-cream-700 leading-relaxed max-w-2xl mb-10">
            Short pieces on what actually happens in the work with adolescents and their families.
            Written for clinicians, useful to anyone who parents.
          </p>

          <div className="space-y-14">
            {clinicianVideos.map((v) => (
              <div key={v.slug} id={v.slug}>
                <h3 className="font-serif text-xl md:text-2xl text-cream-900 mb-1">{v.title}</h3>
                {v.note && <p className="text-cream-600 text-sm mb-4">{v.note}</p>}
                {v.youtubeId && <VideoEmbed id={v.youtubeId} title={v.title} aspect={v.aspect} />}
              </div>
            ))}
          </div>

          <p className="text-cream-600 text-sm mt-10 italic">
            More arriving every two weeks.
          </p>
        </div>
      </section>

      {/* Guided Visualizations */}
      <section id="guided-visualizations" className="section-warm">
        <div className="container-main max-w-[860px]">
          <p className="eyebrow">Guided Visualizations</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-900 mb-3">
            The Five Conditions of Secure Attachment.
          </h2>
          <p className="text-cream-700 leading-relaxed max-w-2xl mb-10">
            A series of guided visualizations rooted in attachment theory: Safety, Attunement,
            Soothing, Expressed Delight, Exploration, and being the Ideal Parent. About twenty
            minutes each. Best with headphones. Begin with Safety; the rest build from there.
          </p>

          <div className="space-y-14">
            {liveVis.map((v) => (
              <div key={v.slug} id={v.slug}>
                <h3 className="font-serif text-xl md:text-2xl text-cream-900 mb-1">{v.title}</h3>
                {v.note && <p className="text-cream-600 text-sm mb-4">{v.note}</p>}
                <VideoEmbed id={v.youtubeId as string} title={`${v.title} — Guided Visualization`} />
              </div>
            ))}
          </div>

          {/* Full index */}
          <div className="mt-14">
            <p className="eyebrow">The Series</p>
            <ol className="border-b border-[#e5d9c9] mt-4">
              {visualizations.map((v, i) => (
                <li key={v.slug} className="flex items-baseline gap-4 sm:gap-6 border-t border-[#e5d9c9] py-5">
                  <span className="font-serif text-cream-400 text-lg w-7 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="font-serif text-xl text-cream-900">{v.title}</h4>
                      {v.youtubeId ? (
                        <a href={`#${v.slug}`} className="shrink-0 text-xs uppercase tracking-widest text-[#b88a38] hover:text-[#8a6a2e] transition-colors">
                          Watch
                        </a>
                      ) : (
                        <span className="shrink-0 text-xs uppercase tracking-widest text-[#a89878]">Coming soon</span>
                      )}
                    </div>
                    {v.note && <p className="text-cream-600 text-sm mt-1">{v.note}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Closing paragraph — group + intensives */}
      <section className="section-cream">
        <div className="container-main max-w-[780px]">
          <p className="text-cream-700 leading-relaxed">
            If this is the work you want to do more of, there are two ways in.{' '}
            <Link href="/parent-support-groups" className="font-serif text-cream-900 underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors">
              The Parent Support Group
            </Link>{' '}
            is a national Zoom-based psychoeducation group for parents of teens, eight weeks, capped
            at twelve.{' '}
            <Link href="/consulting" className="font-serif text-cream-900 underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors">
              Intensives
            </Link>{' '}
            are single-day deep dives for individuals, couples, and clinical teams. Both grow
            out of the same framework you'll find in these videos.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 md:py-16">
        <div className="container-main max-w-3xl">
          <p className="text-cream-700 text-base text-center">
            For questions or to reach out about clinical work,{' '}
            <Link href="/contact" className="font-serif text-cream-900 underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors">
              write me here
            </Link>
            {' '}or email{' '}
            <a href="mailto:daniel@danieljahearnlmft.com" className="font-serif text-cream-900 underline decoration-cream-400 underline-offset-4 hover:decoration-cream-700 transition-colors">
              daniel@danieljahearnlmft.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
