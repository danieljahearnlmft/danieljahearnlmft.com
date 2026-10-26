import Link from 'next/link'
import { pageMeta } from '@/lib/site'
import { Closing, Hero, Page, RelatedLinks, Section } from '@/components/site/ui'

export const metadata = pageMeta(
  '/attachment-styles',
  'Attachment Styles in Adults',
  'The four adult attachment styles (secure, anxious, avoidant, disorganized), how each shapes relationships, and the clinical path to repair.',
)

export default function AttachmentStyles() {
  return (
    <Page>
      <Hero
        eyebrow="Attachment theory"
        title="Attachment Styles in Adults"
        sub="Attachment styles are not personality types. They are patterns: organizations of the attachment system that formed in response to early caregiving and that keep shaping how we experience closeness, safety and loss."
      />

      <Section width="narrow">
        <div className="prose">
          <h2>Where the categories come from</h2>
          <p>
            Attachment theory began with John Bowlby’s observation that human beings are biologically motivated to seek proximity to caregivers under threat or distress, and that the quality of the caregiver’s response shapes the child’s fundamental expectations about relationship. Mary Ainsworth’s Strange Situation research gave the first empirical taxonomy: secure, anxious-ambivalent and avoidant. Later, Main and Hesse added a fourth: disorganized.
          </p>
          <p>
            The Adult Attachment Interview extended this framework to adults, showing that childhood patterns are carried forward as the internal working model: the largely implicit set of expectations about relationship, self and other that continues to organize adult behavior.
          </p>
          <p>
            Understanding your attachment style is not a goal in itself. It is a map: a way of recognizing the pattern precisely enough to begin working with it.
          </p>

          <h2>Secure attachment</h2>
          <p>
            Securely attached adults had caregivers who were, not perfectly but consistently enough, present, responsive and available. Their internal working model rests on a basic expectation: that reaching out when distressed is likely to bring support, and that needing people is not dangerous.
          </p>
          <p>
            In adult relationships, this shows up as a capacity for both closeness and autonomy without excessive anxiety about either. Securely attached adults can disagree without catastrophizing, be vulnerable without shame, and tolerate distance without reading it as abandonment. Secure attachment is not the absence of difficulty. It is a foundation from which difficulty can be navigated.
          </p>

          <h2>Anxious (preoccupied) attachment</h2>
          <p>
            Anxious attachment develops when caregiving was inconsistent: sometimes warm and responsive, sometimes distracted, unavailable or volatile. The child’s adaptive response was to amplify attachment signals, becoming more insistent and more vigilant, in an attempt to secure a response that was never reliably there.
          </p>
          <p>
            In adulthood, the signature is hyperactivation: heightened sensitivity to signs of rejection, difficulty tolerating uncertainty, an intensity of need that can push away the very closeness it seeks. Reassurance brings temporary relief but doesn’t reach the underlying belief that one is at risk of being abandoned.
          </p>
          <p>
            The therapeutic work involves slowing the hyperactivated system, building internal resources for regulation, and beginning to build an implicit sense of reliable, consistent availability.
          </p>

          <h2>Avoidant (dismissing) attachment</h2>
          <p>
            Avoidant attachment develops when caregivers were consistently emotionally unavailable: physically present but unresponsive to emotional needs, dismissive of distress, uncomfortable with dependence. The child learned that showing need brought rejection, and adapted by deactivating the attachment system and becoming self-sufficient.
          </p>
          <p>
            In adulthood, this shows up as reflexive emotional self-sufficiency, a difficulty with intimacy that grows as closeness deepens, and a tendency to minimize the importance of relationships. Dismissing adults often describe their childhood as fine or normal despite clear signs of emotional unavailability. The strategy has become so automatic it is invisible.
          </p>
          <p>
            The therapeutic work involves gently activating the deactivated system, helping the person feel what was never allowed to be felt, and building an internal experience of needing and being met, rather than needing and being rejected.
          </p>

          <h2>Disorganized (fearful-avoidant) attachment</h2>
          <p>
            Disorganized attachment is the most complex pattern. It develops when the caregiver was both the source of safety and the source of fear: through abuse, frightening behavior, unresolved trauma in the caregiver, or profound dysregulation. The attachment system pulls toward the caregiver while the fear system pushes away. When the caregiver is both, the system collapses.
          </p>
          <p>
            In adulthood, it often looks like a contradictory pull toward and flight from closeness, intense relationship volatility, and difficulty regulating under relational stress. What looks irrational is actually the trace of an impossible early bind.
          </p>
          <p>
            The work here is necessarily careful and gradual: building safety and dual awareness first, and moving into attachment material only as the capacity to hold it is established. The emphasis in <Link href="/integrative-attachment-therapy">Integrative Attachment Therapy</Link> on stabilization before deeper work matters most here.
          </p>

          <h2>Styles can change</h2>
          <p>
            Because these patterns live in implicit memory, insight alone rarely shifts them. The <Link href="/ideal-parent-figure-protocol">Ideal Parent Figure protocol</Link> works at that level, and the research on <Link href="/attachment-therapy-adults/#earned-secure-attachment">earned secure attachment</Link> shows that adults can and do move toward security.
          </p>
        </div>
      </Section>

      <RelatedLinks
        items={[
          { href: '/attachment-therapy-adults', t: 'Attachment therapy for adults', d: 'Healing old wounds and earning security' },
          { href: '/ideal-parent-figure-protocol', t: 'The Ideal Parent Figure protocol', d: 'How the core intervention works' },
          { href: '/services', t: 'Therapy and fees', d: 'Individual, couples and family work' },
        ]}
      />

      <Closing />
    </Page>
  )
}
