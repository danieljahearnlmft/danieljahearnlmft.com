import Link from 'next/link'
import { APP_URL, pageMeta } from '@/lib/site'
import { Closing, Hero, Page, RelatedLinks, Section } from '@/components/site/ui'

export const metadata = pageMeta(
  '/iat-certified-therapist',
  'IAT-Certified Therapist',
  'What IAT certification requires, what it means for clients, and why it is harder to earn than most attachment-based credentials.',
)

export default function IATCertifiedTherapist() {
  return (
    <Page>
      <Hero
        eyebrow="Credentials"
        title="IAT-Certified Therapist"
        sub="IAT certification is not a weekend workshop credential. It requires direct training with the developers of the model over years, supervised clinical work, and demonstrated mastery of the Three Pillars framework."
      />

      <Section width="narrow">
        <div className="prose">
          <h2>What certification requires</h2>
          <p>
            IAT certification is certification in the <Link href="/integrative-attachment-therapy">Integrative Attachment Therapy</Link> framework, now carried forward by IAT. It requires direct, sustained training with the developers of the model. It is not earned through a self-study course or an online program. It requires working cases under supervision, demonstrating clinical competence in the Three Pillars framework, and being assessed directly by the clinicians who built the model.
          </p>
          <p>
            Certification is granted by the developers themselves, not by an institute or an exam. The developers are deliberate about limiting it to clinicians who have demonstrated genuine mastery rather than familiarity. The bar is high on purpose.
          </p>
          <p>
            I trained directly with Dr. Daniel P. Brown, one of the world’s foremost researchers in attachment, hypnosis, and trauma, and with Dr. David Elliott over the course of several years. That training included extended immersion in the Three Pillars framework, supervised clinical work with complex attachment presentations, and direct feedback on my application of the Ideal Parent Figure protocol. Certification came at the end of a process, not at the beginning of one.
          </p>

          <h2>Why it matters in the room</h2>
          <p>
            Many therapists describe themselves as attachment-based or attachment-focused. In most cases, this means they understand attachment theory conceptually and use it to frame their understanding of clients’ relational patterns. That is valuable. It is not the same as the IAT framework.
          </p>
          <p>
            IAT is a structured clinical model with specific protocols, specific assessment tools, and a specific theory of change. Working it well requires clinical skill developed through practice: the ability to track a client’s attachment system in real time, recognize the precise quality of what’s needed at a given moment, and guide the imagery with the attunement that makes the difference between a session that’s pleasant and one that actually changes something.
          </p>
          <p>
            The protocol is designed to produce change at the level where attachment patterns live, which is <Link href="/ideal-parent-figure-protocol">below insight</Link>. Getting there requires clinical skill, not just knowledge. Certification exists to distinguish between the two.
          </p>

          <h2>Training and clinical context</h2>
          <p>
            I am a licensed marriage and family therapist (LMFT), based in Los Angeles and seeing clients online across California. I also serve as Director of Culture at Ascend Healthcare, a residential treatment program for adolescents, where I work with teenagers and families navigating complex attachment disruptions.
          </p>
          <p>
            I am the author of <Link href="/the-way-back-home"><em>The Way Back Home: Healing Attachment Wounds With Your Teen</em></Link>, which translates the IAT framework for parents, and the creator of <a href={APP_URL} target="_blank" rel="noopener noreferrer">waybackhome.app</a>, a daily practice companion for parents of teenagers.
          </p>
          <p>
            The clinical work and the public-facing work are the same project: making the most effective attachment-based model available to as many people as possible, at whatever level of depth their situation calls for.
          </p>
        </div>
      </Section>

      <RelatedLinks
        items={[
          { href: '/about', t: 'About Daniel', d: 'Background, training and approach' },
          { href: '/ideal-parent-figure-protocol', t: 'The Ideal Parent Figure protocol', d: 'How the core intervention works' },
          { href: '/services', t: 'Therapy and fees', d: 'Individual, couples and family work' },
        ]}
      />
      <Closing />
    </Page>
  )
}
