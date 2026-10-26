import Image from 'next/image'
import Link from 'next/link'
import { pageMeta } from '@/lib/site'
import { Arrow, Closing, ConsultButton, ELLIOTT_QUOTE, Hero, Page, Quote, Section } from '@/components/site/ui'

export const metadata = pageMeta(
  '/about',
  'About Daniel',
  'Daniel J. Ahearn is an LMFT and IAT-certified attachment therapist based in Los Angeles, trained directly with Dr. Daniel P. Brown and Dr. David Elliott.',
)

const background = [
  { t: 'Integrative Attachment Therapy', d: 'Trained directly with Dr. Daniel P. Brown and Dr. David Elliott in the Three Pillars framework beginning in 2018. IAT-certified clinician.' },
  { t: 'Licensure', d: 'Licensed Marriage and Family Therapist in California. Also holds CADC certification.' },
  { t: 'Clinical hypnosis', d: 'Trained in clinical hypnosis, which informs the guided visualization at the core of the Ideal Parent Figure protocol.' },
  { t: 'Adolescent treatment', d: 'Over a decade in adolescent residential treatment, currently as Director of Culture at Ascend Healthcare in Los Angeles.' },
  { t: 'Bön contemplative practice', d: 'More than two decades in the Tibetan Bön tradition, which shapes how I understand mind, attention, and the conditions for change.' },
  { t: 'Author', d: 'The Way Back Home: Healing Attachment Wounds With Your Teen (2026), which brings IAT principles to parents of adolescents.' },
]

export default function About() {
  return (
    <Page>
      <Hero
        eyebrow="About"
        title="Daniel J. Ahearn, LMFT"
        sub="Licensed marriage and family therapist and IAT-certified attachment therapist. Based in Los Angeles, seeing clients online across California."
        aside={
          <div style={{ flex: '0 1 420px', minWidth: 260, width: '100%', maxWidth: 420, margin: '0 auto', position: 'relative' }}>
            <div className="arch">
              <Image src="/images/daniel-headshot.jpg" alt="Daniel J. Ahearn, LMFT" width={880} height={1100} priority style={{ objectPosition: '50% 30%' }} />
            </div>
          </div>
        }
      >
        <ConsultButton />
      </Hero>

      <Section width="narrow">
        <div className="prose">
          <p className="lede">
            My clinical work centers on attachment repair: helping people change not just how they think about their relationships, but how their nervous systems experience safety and connection.
          </p>
          <p>
            I’m a licensed marriage and family therapist and certified alcohol and drug counselor. I trained directly with Dr. Daniel P. Brown and Dr. David Elliott in Integrative Attachment Therapy beginning in 2018. I serve as Director of Culture at Ascend Healthcare, a residential treatment program for adolescents in Los Angeles, where I run attachment repair groups and lead clinical training. My private practice focuses on men’s attachment work, father-teen repair, and families navigating the hardest years.
          </p>

          <h2>How I think about this work</h2>
          <p>
            Most people I work with aren’t broken. They’re adapted. What looks like emotional unavailability, withdrawal, chronic conflict, or anxious pursuit is almost always an attachment strategy that once made sense. A child who learned that needing things brought punishment learns not to need things. A child who learned that love was inconsistent learns to stay hypervigilant. Those strategies become personality. They become relationship patterns. They become the thing that wears people out.
          </p>
          <p>
            The work isn’t to override those patterns through willpower or insight. It’s to give the nervous system something it never had: a felt experience of safety, attunement, and genuine care, repeated over time until a new foundation forms. That’s what the <Link href="/ideal-parent-figure-protocol">Ideal Parent Figure protocol</Link> does, and what <Link href="/integrative-attachment-therapy">Integrative Attachment Therapy</Link> is built around.
          </p>
          <p>
            I’m particularly drawn to father-teen repair because it’s underrepresented clinically and deeply consequential. Paternal attachment shapes adolescent identity, risk tolerance, emotional regulation, and the templates teens carry into their own adult relationships. A father who does this work doesn’t just change himself. He changes a family system.
          </p>
        </div>
      </Section>

      <Quote {...ELLIOTT_QUOTE} image="/images/home/sunrise-band.jpg" imagePosition="50% 55%" />

      <Section tone="cream2" eyebrow="Training and background" title="Background">
        <div className="row" style={{ gap: 20 }}>
          {background.map((b) => (
            <div key={b.t} className="card" style={{ flex: '1 1 320px', minWidth: 0 }}>
              <h3 style={{ fontSize: 26 }}>{b.t}</h3>
              <p style={{ marginTop: 10, color: 'var(--ink2)', fontSize: 17 }}>{b.d}</p>
            </div>
          ))}
        </div>
        <Link className="lnk" href="/iat-certified-therapist" style={{ marginTop: 36, color: 'var(--f1)' }}>
          What IAT certification involves <Arrow />
        </Link>
      </Section>

      <Closing />
    </Page>
  )
}
