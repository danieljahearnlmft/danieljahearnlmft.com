import Link from 'next/link'
import { pageMeta } from '@/lib/site'
import { Closing, Hero, Page, RelatedLinks, Section } from '@/components/site/ui'

export const metadata = pageMeta(
  '/earned-secure-attachment',
  'Earned Secure Attachment',
  'What earned secure attachment is, what the research shows about developing it as an adult, and what it looks like in relationships and parenting.',
)

export default function EarnedSecureAttachment() {
  return (
    <Page>
      <Hero
        eyebrow="Clinical concept"
        title="Earned Secure Attachment"
        sub="Secure attachment is not only for people who had it from the beginning. Adults can develop genuine security, not as a performance or a coping strategy, but as a real reorganization of the attachment system."
      />

      <Section width="narrow">
        <div className="prose">
          <h2>Security is not fixed at birth</h2>
          <p>
            One of the most important findings in attachment research is that attachment classifications are not permanent. The Adult Attachment Interview (AAI), developed by Mary Main and colleagues, classifies adults not by what happened to them in childhood but by the coherence and integration of their narrative about it. Some adults who had clearly difficult or inadequate early caregiving nonetheless present as secure on the AAI. Their narrative is coherent. Their relationship with their history is integrated.
          </p>
          <p>
            Main and her colleagues called this earned secure attachment. It describes adults who moved from insecure to secure, not because their history changed, but because their processing of that history, and their relationship to themselves and others, reorganized. The change is real and consequential: adults with earned secure attachment parent like securely attached adults, not like insecurely attached ones.
          </p>
          <p>
            The research identifies several pathways to this shift: sustained therapeutic relationships, significant attachment figures in adulthood such as partners and mentors, and clinical work designed specifically to build the internal experience of security that was absent in childhood. That last pathway is what <Link href="/integrative-attachment-therapy">Integrative Attachment Therapy</Link> is built for.
          </p>

          <h2>What it looks like</h2>
          <p>
            Earned secure attachment does not look like the absence of difficulty. Adults who have developed it still have a history. What changes is the relationship to that history and, more importantly, the felt sense of relationship in the present.
          </p>
          <p>
            People moving toward earned security often describe a gradual shift in what closeness feels like: less vigilance, more ease. Less need to monitor the other person for signs of abandonment or criticism. A growing capacity to receive care without deflecting it. A different sense of their own worth: not a belief arrived at through positive self-talk, but a bodily experience, quiet and increasingly reliable, that they are someone worth being close to.
          </p>

          <h3>In parenting</h3>
          <p>
            In parenting, the shift is particularly visible. A parent moving toward earned security has a wider range of responses to their child’s distress, need or difficulty, and is less likely to be hijacked by their own unprocessed material when their child activates it. Safety, attunement, soothing, delight and support for exploration become more available because they are less blocked by the parent’s own unmet needs.
          </p>

          <h2>How the work gets there</h2>
          <p>
            Insight alone rarely produces this shift, because attachment patterns live in felt sense and implicit memory rather than in conscious understanding. The <Link href="/ideal-parent-figure-protocol">Ideal Parent Figure protocol</Link> works at that level.
          </p>
          <p>
            The process is not linear. Old strategies reassert themselves; disbelief and grief surface as the system begins to open. These are not setbacks. They are the work, and they show precisely where it needs to go next. The goal is not earned insight. It is earned security, available regardless of history and regardless of how many years the pattern has run.
          </p>
        </div>
      </Section>

      <RelatedLinks
        items={[
          { href: '/ideal-parent-figure-protocol', t: 'The Ideal Parent Figure protocol', d: 'How the core intervention works' },
          { href: '/attachment-styles', t: 'Attachment styles in adults', d: 'The four patterns and how each shows up' },
          { href: '/attachment-therapy-adults', t: 'Attachment therapy for adults', d: 'Who this work is for' },
        ]}
      />

      <Closing />
    </Page>
  )
}
