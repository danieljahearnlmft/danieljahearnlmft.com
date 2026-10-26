import Link from 'next/link'
import { pageMeta } from '@/lib/site'
import { Closing, Hero, Page, RelatedLinks, Section } from '@/components/site/ui'

export const metadata = pageMeta(
  '/healing-attachment-wounds',
  'Healing Attachment Wounds',
  'What attachment wounds are, how they show up in adult relationships, and what healing them actually requires, from an IAT-certified therapist.',
)

export default function HealingAttachmentWounds() {
  return (
    <Page>
      <Hero
        eyebrow="Clinical focus"
        title="Healing Attachment Wounds"
        sub="Attachment wounds are not dramatic injuries. They are absences: the repeated experience of not being met in ways that mattered."
      />

      <Section width="narrow">
        <div className="prose">
          <h2>The nature of the wound</h2>
          <p>
            The word “wound” implies something that happened: a discrete event, a moment of harm. Attachment wounds are more often the accumulation of what didn’t happen: the attunement that was absent, the soothing that never came, the delight replaced by distraction or demand, the safe base that turned out not to be safe. They form in patterns, in the repetition of relational experiences that taught a developing child what relationship is and what they are worth within it.
          </p>
          <p>
            These teachings don’t arrive as explicit beliefs. They live in the body’s expectation of what happens when someone gets close, in the automatic reading of another person’s face, in the reflexive strategies for managing the fear of losing connection. By adulthood they are not experienced as defenses. They are experienced as reality.
          </p>
          <p className="lede" style={{ margin: '1.4em 0' }}>
            This is the particular difficulty of attachment wounds: they don’t feel like wounds. They feel like the truth.
          </p>

          <h2>The adult signature</h2>
          <p>
            Attachment wounds show up in the texture of relationships, in patterns that recur regardless of who the other person is.
          </p>
          <p>
            With anxious wounds, the signature is often hyperactivation: persistent monitoring of the other person’s state, difficulty tolerating uncertainty, a need for reassurance that never quite lands. With avoidant wounds, it is deactivation: reflexive self-sufficiency and a quiet withdrawal once closeness reaches a certain threshold. Disorganized wounds, often formed with caregivers who were themselves a source of fear, produce the simultaneous pull toward and flight from closeness. Each is described in depth on the <Link href="/attachment-styles">attachment styles</Link> page.
          </p>
          <p>
            In each case, the wound is not a memory that can be processed and released. It is a structure: an organization of the attachment system that shapes every relationship until something changes it.
          </p>

          <h2>What healing actually requires</h2>
          <p>
            Healing attachment wounds requires more than understanding them. The change happens through experience: the repeated, felt sense of what secure attachment would have felt like, which the brain then consolidates. That is what the <Link href="/ideal-parent-figure-protocol">Ideal Parent Figure protocol</Link>, at the center of <Link href="/integrative-attachment-therapy">Integrative Attachment Therapy</Link>, is designed to provide.
          </p>
          <p>
            This is not positive thinking. The process engages the attachment system directly, including the resistance, grief and disbelief that often surface when it begins to open. It is real work, at the right level, with the goal of changing not just how a person understands their history but how they feel in relationship: what they expect, what they allow themselves to need, and what feels possible.
          </p>
        </div>
      </Section>

      <RelatedLinks
        items={[
          { href: '/earned-secure-attachment', t: 'Earned secure attachment', d: 'What the research shows is possible' },
          { href: '/attachment-styles', t: 'Attachment styles in adults', d: 'The four patterns in depth' },
          { href: '/the-way-back-home', t: 'The Way Back Home', d: 'The book, for parents of teenagers' },
        ]}
      />

      <Closing />
    </Page>
  )
}
