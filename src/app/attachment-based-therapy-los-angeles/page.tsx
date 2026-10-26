import Link from 'next/link'
import { pageMeta } from '@/lib/site'
import { Closing, ConsultButton, Hero, Page, RelatedLinks, Section } from '@/components/site/ui'

export const metadata = pageMeta(
  '/attachment-based-therapy-los-angeles',
  'Attachment Therapist in Los Angeles',
  'Attachment-based therapy with an IAT-certified therapist based in Los Angeles, online across California. Adults, couples, and parent-teen repair.',
  { title: { absolute: 'Attachment Therapist in Los Angeles · IAT-Certified' } },
)

const focus = [
  {
    title: 'Adult attachment patterns',
    body: 'For adults who recognize the signature of insecure attachment in their relationships, the familiar arcs, the persistent gap between knowing and feeling, IAT offers a path to genuine reorganization, not just better coping.',
  },
  {
    title: 'Parent-teen repair',
    body: 'The adolescent years surface every unresolved attachment issue a parent carries. I work with parents who want to show up differently for their teenagers, not just manage the conflict better but actually close the gap.',
  },
  {
    title: 'Men and fathers',
    body: 'Men are rarely given language for attachment needs, let alone permission to have them. I work with men whose reflexive self-sufficiency and difficulty with intimacy trace back to early caregiving they’ve never been able to fully see or name.',
  },
]

export default function AttachmentTherapyLosAngeles() {
  return (
    <Page>
      <Hero
        eyebrow="Los Angeles · Online across California"
        title="Attachment-Based Therapy in Los Angeles"
        sub="Work with an IAT-certified attachment therapist trained directly with Dr. Daniel P. Brown and Dr. David Elliott. Adult attachment work, couples, and parent-teen repair."
        image="/images/home/oaks.jpg"
        imagePosition="50% 40%"
      >
        <ConsultButton />
      </Hero>

      <Section width="narrow">
        <div className="prose">
          <h2>What I offer</h2>
          <p>
            I am a licensed marriage and family therapist (LMFT) and an IAT-certified clinician. My practice is small and focused. I work with adults and parents dealing with attachment-based relational patterns that haven’t shifted through other approaches, and I bring the full <Link href="/integrative-attachment-therapy">Integrative Attachment Therapy</Link> framework to that work.
          </p>
          <p>
            Los Angeles has no shortage of therapists who describe themselves as attachment-based or attachment-informed. What is rare is clinical training at the level the IAT model requires: direct, supervised immersion in the Three Pillars framework and the Ideal Parent Figure protocol, assessed and certified by the developers themselves.
          </p>
          <p>Based in Los Angeles, online across California.</p>
        </div>
      </Section>

      <Section tone="cream2" eyebrow="Areas of Focus" title="Who I work with">
        <div className="row" style={{ gap: 24 }}>
          {focus.map((f) => (
            <article key={f.title} className="card" style={{ flex: '1 1 300px', minWidth: 0 }}>
              <h3>{f.title}</h3>
              <p style={{ marginTop: 14, color: 'var(--ink2)' }}>{f.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section width="narrow">
        <div className="prose">
          <h2>What makes IAT different</h2>
          <p>
            Most therapists in Los Angeles, and most good ones, work at the level of narrative, insight, and conscious understanding. That matters, and it is genuinely helpful. But attachment patterns live below insight, which is why <Link href="/ideal-parent-figure-protocol">the Ideal Parent Figure protocol</Link> works directly with felt experience. The result is not just better insight but a different felt sense of relationship: less vigilance, more ease, a changed expectation of what’s possible between people.
          </p>
          <p>
            Fees, format and what to expect are on the <Link href="/services">therapy and fees</Link> page.
          </p>
        </div>
      </Section>

      <RelatedLinks
        items={[
          { href: '/services', t: 'Therapy and fees', d: 'Individual, couples and family work' },
          { href: '/iat-certified-therapist', t: 'IAT-certified therapist', d: 'What the training involves' },
          { href: '/about', t: 'About Daniel', d: 'Background and approach' },
        ]}
      />
      <Closing />
    </Page>
  )
}
