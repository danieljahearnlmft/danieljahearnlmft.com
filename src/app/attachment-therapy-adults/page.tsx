import Link from 'next/link'
import { pageMeta } from '@/lib/site'
import { Closing, Hero, List, Page, RelatedLinks, Section } from '@/components/site/ui'

export const metadata = pageMeta(
  '/attachment-therapy-adults',
  'Attachment Therapy for Adults',
  'Why early attachment patterns persist into adulthood, how to recognize them, and who attachment-focused therapy is for. Online across California.',
)

export default function AttachmentTherapyAdults() {
  return (
    <Page>
      <Hero
        eyebrow="Approach"
        title="Attachment Therapy for Adults"
        sub="The patterns formed in early relationship don’t stop running in adulthood. They become invisible, operating as the automatic givens of how we expect relationships to go."
      />

      <Section width="narrow">
        <div className="prose">
          <h2>Why patterns persist</h2>
          <p>
            Most adults who grew up with inconsistent, unavailable or frightening caregivers develop insecure attachment patterns. These patterns are not character flaws. They are adaptive strategies: ways the attachment system learned to manage a caregiving environment that couldn’t be counted on. Anxious vigilance, emotional self-sufficiency: these worked, in the context where they were formed.
          </p>
          <p>
            The problem is that they keep working in contexts where they are no longer necessary. The person who learned that needing others was dangerous still flinches from dependence with someone who is genuinely safe. The person who learned to keep closeness by constantly monitoring the other’s mood still does it, even when the other person is not going anywhere.
          </p>
          <p>
            This is why insight, by itself, rarely changes attachment patterns. You can understand perfectly well that your partner is not your parent and still respond as if they were. The understanding lives in one part of the brain. The pattern lives somewhere older, faster and deeper.
          </p>

          <h2>Working at the right level</h2>
          <p>
            Attachment therapy, done well, works where these patterns actually live: in felt sense and body-based expectation. The approach I use is <Link href="/integrative-attachment-therapy">Integrative Attachment Therapy</Link>, and its central tool is the <Link href="/ideal-parent-figure-protocol">Ideal Parent Figure protocol</Link>, which gives the attachment system new experiences of security to draw on.
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
          { href: '/attachment-styles', t: 'Attachment styles in adults', d: 'The four patterns and how each shows up' },
          { href: '/healing-attachment-wounds', t: 'Healing attachment wounds', d: 'What healing actually requires' },
          { href: '/services', t: 'Therapy and fees', d: 'Individual, couples and family work' },
        ]}
      />

      <Closing />
    </Page>
  )
}
