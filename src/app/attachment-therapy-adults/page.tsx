import Link from 'next/link'
import { pageMeta } from '@/lib/site'
import { Closing, Hero, List, Page, RelatedLinks, Section } from '@/components/site/ui'

export const metadata = pageMeta(
  '/attachment-therapy-adults',
  'Attachment Therapy for Adults',
  'Healing attachment wounds as an adult: why old patterns persist, how earned secure attachment develops, and who attachment therapy is for. Online across California.',
)

export default function AttachmentTherapyAdults() {
  return (
    <Page>
      <Hero
        eyebrow="For adults"
        title="Attachment Therapy for Adults"
        sub="The patterns formed in early relationship don’t stop running in adulthood. They become invisible, the automatic givens of how we expect relationships to go. And they can change."
      />

      <Section width="narrow">
        <div className="prose">
          <h2 id="healing-attachment-wounds">Attachment wounds are absences</h2>
          <p>
            The word “wound” implies something that happened: a discrete event, a moment of harm. Attachment wounds are more often the accumulation of what didn’t happen: the attunement that was absent, the soothing that never came, the delight replaced by distraction or demand, the safe base that turned out not to be safe. They form in patterns, in the repetition of relational experiences that taught a developing child what relationship is and what they are worth within it.
          </p>
          <p>
            These teachings don’t arrive as explicit beliefs. They live in the body’s expectation of what happens when someone gets close, in the automatic reading of another person’s face, in the reflexive strategies for managing the fear of losing connection.
          </p>
          <p className="lede" style={{ margin: '1.4em 0' }}>
            This is the particular difficulty of attachment wounds: they don’t feel like wounds. They feel like the truth.
          </p>

          <h2>Why patterns persist</h2>
          <p>
            These patterns are not character flaws. They are adaptive strategies: ways the attachment system learned to manage a caregiving environment that couldn’t be counted on. The problem is that they keep working in contexts where they are no longer necessary. The person who learned that needing others was dangerous still flinches from dependence with someone who is genuinely safe. The person who learned to keep closeness by monitoring the other’s mood still does it, even when the other person is not going anywhere.
          </p>
          <p>
            With anxious patterns, the signature is often hyperactivation: persistent monitoring, difficulty tolerating uncertainty, reassurance that never quite lands. With avoidant patterns, it is deactivation: reflexive self-sufficiency and a quiet withdrawal once closeness reaches a certain threshold. Disorganized patterns produce the simultaneous pull toward and flight from closeness. Each is described in depth on the <Link href="/attachment-styles">attachment styles</Link> page.
          </p>
          <p>
            This is why insight, by itself, rarely changes them. You can understand perfectly well that your partner is not your parent and still respond as if they were. The understanding lives in one part of the brain. The pattern lives somewhere older, faster and deeper.
          </p>

          <h2 id="earned-secure-attachment">Security can be earned</h2>
          <p>
            One of the most important findings in attachment research is that attachment classifications are not permanent. The Adult Attachment Interview, developed by Mary Main and colleagues, classifies adults not by what happened to them in childhood but by the coherence of their narrative about it. Some adults with clearly difficult early caregiving nonetheless present as secure. Main and her colleagues called this earned secure attachment: adults who moved from insecure to secure, not because their history changed, but because their relationship to it, and to themselves and others, reorganized. Adults with earned secure attachment parent like securely attached adults, not like insecurely attached ones.
          </p>
          <p>
            Earned security does not look like the absence of difficulty. People moving toward it describe a gradual shift in what closeness feels like: less vigilance, more ease. A growing capacity to receive care without deflecting it. A different sense of their own worth: not a belief arrived at through positive self-talk, but a bodily experience, quiet and increasingly reliable, that they are someone worth being close to.
          </p>
          <p>
            In parenting, the shift is particularly visible. A parent moving toward earned security has a wider range of responses to their child’s distress, and is less likely to be hijacked by their own unprocessed material when their child activates it.
          </p>

          <h2>Working at the right level</h2>
          <p>
            Healing happens through experience: the repeated, felt sense of what secure attachment would have felt like, which the brain then consolidates. The approach I use is <Link href="/integrative-attachment-therapy">Integrative Attachment Therapy</Link>, and its central tool, the <Link href="/ideal-parent-figure-protocol">Ideal Parent Figure protocol</Link>, is designed to provide exactly that.
          </p>
          <p>
            This is not positive thinking. The work engages the attachment system directly, including the resistance, grief and disbelief that often surface as it begins to open. These are not setbacks. They are the work. The goal is not earned insight. It is earned security, available regardless of history and regardless of how many years the pattern has run.
          </p>
        </div>
      </Section>

      <Section width="narrow" tone="cream2" eyebrow="Who this is for" title="Recognizing the pattern">
        <p style={{ color: 'var(--ink2)', marginBottom: 24 }}>Adults who benefit most from attachment-focused therapy often recognize some version of these:</p>
        <List
          items={[
            'A persistent gap between knowing something is safe and feeling like it is',
            'Relationships that follow the same painful arc regardless of who the other person is',
            'A reflexive self-sufficiency that makes accepting care feel uncomfortable or wrong',
            'Chronic anxiety in intimate relationships: monitoring, managing, anticipating loss',
            'A sense of being less worthy than others, less entitled to need',
            'Therapy that produced insight but not the deeper change you were hoping for',
            'A parenting relationship that is triggering in ways you don’t fully understand',
          ]}
        />
        <p style={{ color: 'var(--ink2)', marginTop: 28 }}>
          If any of these land, attachment-focused work may be the right level. Not because previous therapy failed, but because it was working at a different level than where the pattern lives. I work with adults online across California.
        </p>
      </Section>

      <RelatedLinks
        items={[
          { href: '/ideal-parent-figure-protocol', t: 'The Ideal Parent Figure protocol', d: 'How the core intervention works' },
          { href: '/attachment-styles', t: 'Attachment styles in adults', d: 'The four patterns in depth' },
          { href: '/services', t: 'Therapy and fees', d: 'Individual, couples and family work' },
        ]}
      />

      <Closing />
    </Page>
  )
}
