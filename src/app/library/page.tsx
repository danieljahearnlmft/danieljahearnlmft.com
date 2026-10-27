import Link from 'next/link'
import { SUBSTACK_URL, pageMeta } from '@/lib/site'
import { Arrow, Closing, Hero, Page, Section, Video } from '@/components/site/ui'

export const metadata = pageMeta(
  '/library',
  'Library',
  'Videos and guided visualizations on attachment, adolescence, and clinical practice, for clinicians and for parents.',
)

const talks = [
  { title: 'Your teenager comes home at 1:15 AM. What do you do?', slug: 'teen-comes-home-115am', id: 'aSk3KdEKhCQ' },
  {
    title: 'The Nine Breaths of Purification',
    slug: 'nine-breaths',
    id: 'W_HtN9BgwaI',
    tall: true,
    note: 'A Bön practice for releasing anger, attachment, and the certainty we mistake for knowing.',
  },
]

export default function Library() {
  return (
    <Page>
      <Hero
        eyebrow="Library"
        title="A working library."
        sub="Videos and guided practices on attachment, adolescence, and clinical work. A page to come back to, or send to a colleague. New ones are added as they're made."
      >
        <a className="btn btn-gold plausible-event-name=Substack+Click" href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">Get new ones on Substack</a>
      </Hero>

      <Section id="for-clinicians" width="mid" eyebrow="For clinicians" title="Case-based teaching from the room." intro="Short pieces on what actually happens in the work with adolescents and their families. Made for clinicians, useful to anyone who parents.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
          {talks.map((v) => (
            <div key={v.slug} id={v.slug} style={{ scrollMarginTop: 80 }}>
              <h3 style={{ fontWeight: 500, fontSize: 30, lineHeight: 1.15 }}>{v.title}</h3>
              {v.note && <p style={{ marginTop: 6, color: 'var(--mute)', fontSize: 17 }}>{v.note}</p>}
              <div style={{ marginTop: 20 }}>
                <Video id={v.id} title={v.title} tall={v.tall} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="guided-visualizations" tone="dark" width="mid" eyebrow="Guided visualizations" title="The five conditions of secure attachment.">
        <p style={{ color: 'var(--sage)', maxWidth: 640, marginTop: -24 }}>
          A series of guided visualizations, about twenty minutes each: Safety, Attunement, Soothing, Expressed Delight, Exploration, and being the Ideal Parent. Best with headphones. Begin with Safety.
        </p>
        <Link className="btn btn-gold" href="/visualization" style={{ marginTop: 36 }}>Listen to the series</Link>
      </Section>

      <Section width="narrow" tight>
        <p style={{ color: 'var(--ink2)' }}>
          If this is the work you want more of, the <Link href="/parent-support-groups" style={{ textDecoration: 'underline', textDecorationColor: 'var(--gold)' }}>parent support groups</Link> meet weekly on Zoom, and <Link href="/services" style={{ textDecoration: 'underline', textDecorationColor: 'var(--gold)' }}>individual, couples and family therapy</Link> is available online across California. Both grow out of the same framework as these videos.
        </p>
        <Link className="lnk" href="/contact" style={{ marginTop: 20, color: 'var(--f1)' }}>Get in touch <Arrow /></Link>
      </Section>

      <Closing />
    </Page>
  )
}
