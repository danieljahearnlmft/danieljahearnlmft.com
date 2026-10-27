import Image from 'next/image'
import { EMAIL, pageMeta } from '@/lib/site'
import { Facts, Hero, List, Page, Section } from '@/components/site/ui'

export const metadata = pageMeta(
  '/consulting',
  'Speaking, Training and Consulting',
  'Speaking, clinical team training, and culture consulting on attachment, regulation, and adolescent mental health, for treatment programs and clinical teams.',
  {
    openGraph: { images: [{ url: '/images/consulting-hero.jpg', alt: 'Speaking, training and consulting' }] },
    twitter: { card: 'summary_large_image', images: ['/images/consulting-hero.jpg'] },
  },
)

function Formats({ items }: { items: string[] }) {
  return (
    <aside className="offer" aria-label="Formats">
      <p className="k">Formats</p>
      <ul style={{ marginTop: 0 }}>
        {items.map((f) => <li key={f}>{f}</li>)}
      </ul>
    </aside>
  )
}

const mail = (subject: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`

export default function Consulting() {
  return (
    <Page>
      <Hero
        eyebrow="Organizations and speaking"
        title="Bringing attachment intelligence into your organization."
        sub="Speaking, clinical team training, and culture consulting, grounded in a decade of building mental health organizations from the inside."
        image="/images/consulting-hero.jpg"
        imagePosition="50% 40%"
      >
        <a className="btn btn-gold plausible-event-name=Inquiry+TeamTraining" href={mail('Consult with your team')}>Talk about your team</a>
        <a className="btn btn-line-l plausible-event-name=Inquiry+Speaking" href={mail('Speaking / media inquiry')}>Speaking inquiries</a>
      </Hero>

      <Facts
        items={[
          { k: 'Licensed', v: 'LMFT, California' },
          { k: 'Certified', v: 'IAT attachment clinician' },
          { k: 'Experience', v: '10+ years in adolescent treatment' },
          { k: 'Leadership', v: 'Director of Culture, 10+ sites' },
        ]}
      />

      <section id="teams" className="sec" style={{ scrollMarginTop: 80 }}>
        <div className="wrap svc">
          <div className="body prose">
            <p className="eyebrow">Teams and organizations</p>
            <h2 style={{ color: 'var(--ink)' }}>Clinical training and culture consulting</h2>
            <p className="lede" style={{ marginTop: 24 }}>
              Burnout in mental health organizations isn’t a time management problem. It’s an attachment and regulation problem.
            </p>
            <p>
              As Director of Culture at Ascend Healthcare, Daniel builds and oversees clinical programming across a growing network of residential and outpatient facilities, and develops the staff training and supervision that shape how care is delivered at scale. This work is for clinical directors, executive teams, and graduate training programs who want an outside perspective from someone building from the inside.
            </p>
            <h3>Areas of focus</h3>
            <List
              items={[
                'Attachment-informed clinical culture',
                'Therapeutic programming for residential and outpatient settings',
                'Supervision structures that support secure functioning',
                'Team regulation and co-regulation skills',
                'Clinical director and leadership coaching',
                'Bringing family systems work into residential programs',
              ]}
            />
            <h3>Recent training</h3>
            <List
              items={[
                'Delivered CEU training in integrative attachment therapy for licensed clinicians.',
                'Facilitates an ongoing parent and teen series at Ascend Healthcare, grounded in The Way Back Home.',
              ]}
            />
            <a className="btn btn-dark plausible-event-name=Inquiry+TeamTraining" href={mail('Consult with your team')} style={{ marginTop: 36, textDecoration: 'none' }}>Talk about your team</a>
          </div>
          <Formats items={['Single-day intensive', 'Multi-session series (4 to 8 weeks)', 'Ongoing leadership consultation', 'Grand rounds or clinical in-service', 'Virtual or on-site']} />
        </div>
      </section>

      <section className="sec tight" style={{ paddingTop: 0 }}>
        <div className="wrap-m">
          <Image src="/images/daniel-speaking-1.webp" alt="Daniel speaking to a group of clinicians and parents" width={1294} height={999} sizes="(max-width: 960px) 100vw, 960px" style={{ width: '100%', height: 'auto', borderRadius: 20 }} />
        </div>
      </section>

      <section id="speaking" className="sec t-cream2" style={{ scrollMarginTop: 80 }}>
        <div className="wrap svc">
          <div className="body prose">
            <p className="eyebrow">Speaking and media</p>
            <h2 style={{ color: 'var(--ink)' }}>Keynotes, talks and podcasts</h2>
            <p style={{ marginTop: 24 }}>
              Daniel speaks on attachment science, adolescent mental health, and the meeting point of contemplative practice and nervous system regulation, with clinical depth and a story-driven style shaped by a decade of work with teens and families.
            </p>
            <h3>Signature topics</h3>
            <List
              items={[
                'Attachment science for clinicians: the neurobiology of safety in the therapeutic relationship',
                'Meditation and emotional regulation: how contemplative practice builds nervous system capacity',
                'Building secure teams: attachment principles for staff culture, retention, and burnout',
                'Teen mental health and the family system',
                'Men, fathers and attachment: the underrepresented territory at the heart of family repair',
              ]}
            />
            <h3>Recent speaking</h3>
            <List
              items={[
                'Led a session for LAUSD educators on adult regulation and its role in student mental health.',
                'Presented on meditation technologies and nervous system regulation at a national mental health conference.',
              ]}
            />
            <a className="btn btn-dark plausible-event-name=Inquiry+Speaking" href={mail('Speaking / media inquiry')} style={{ marginTop: 36, textDecoration: 'none' }}>Speaking inquiries</a>
          </div>
          <Formats items={['Keynote (60 to 90 minutes)', 'Conference breakout', 'Half-day workshop', 'Grand rounds or clinical in-service', 'Podcast and media', 'Virtual or in person']} />
        </div>
      </section>
    </Page>
  )
}
