import Link from 'next/link'
import { pageMeta } from '@/lib/site'
import { Closing, Hero, Page, RelatedLinks, Section } from '@/components/site/ui'

export const metadata = pageMeta(
  '/integrative-attachment-therapy',
  'Integrative Attachment Therapy (IAT)',
  'What Integrative Attachment Therapy (IAT) is, how the Three Pillars framework works, and why it produces lasting change in attachment patterns.',
)

const conditions = [
  { name: 'Safety', body: 'The foundational sense that one will not be harmed or abandoned in the relationship.' },
  { name: 'Attunement', body: 'Being seen accurately, without needing to perform or suppress to be understood.' },
  { name: 'Soothing', body: 'Distress met with calm, regulated response rather than escalation or withdrawal.' },
  { name: 'Expressed Delight', body: 'Being met with genuine pleasure in one’s existence, not just utility or compliance.' },
  { name: 'Support for Exploration', body: 'Encouragement to venture out, return, and try again, with a steady base behind it.' },
]

export default function IntegrativeAttachmentTherapy() {
  return (
    <Page>
      <Hero
        eyebrow="Framework"
        title="Integrative Attachment Therapy"
        sub="A research-grounded framework for treating insecure and disorganized attachment in adults, created by Dr. Daniel P. Brown and Dr. David Elliott, and now carried forward by IAT."
      />

      <Section width="narrow">
        <div className="prose">
          <h2>What IAT is</h2>
          <p>
            Integrative Attachment Therapy (IAT) is a structured clinical framework organized around a central insight: most psychological suffering in adults traces back to disruptions in early attachment, and the most effective path to lasting change is not analyzing those disruptions but systematically providing the experiences the attachment system needed and did not get.
          </p>
          <p>
            IAT is not a single technique. It draws on attachment research, developmental neuroscience, mindfulness-based approaches, and somatic therapy to address the full range of insecure attachment presentations: anxious, avoidant, disorganized, and complex traumatic.
          </p>
          <p>
            What distinguishes it is precision and depth. It works directly at the level of implicit memory: the body-based, procedural relational knowing that forms before language and cannot be reached through insight or cognitive reframing alone. This is where attachment patterns actually live, and it is why so many people who understand their patterns completely still cannot seem to change them.
          </p>

          <h2>The Three Pillars</h2>
          <h3>Pillar one: Collaboration</h3>
          <p>
            Before the deeper work can begin, therapist and client build a genuinely collaborative relationship: shared agenda-setting, transparent rationale for what we do, and the client’s voice shaping the work. For anyone whose early caregivers were directive, intrusive, or absent, the collaborative stance is itself corrective.
          </p>
          <p>
            This pillar also includes the stabilization that makes deeper work possible: developing the capacity for dual awareness, affect regulation, and access to internal resources.
          </p>
          <h3>Pillar two: Metacognition</h3>
          <p>
            IAT systematically builds the capacity to notice mental states as mental states: thoughts as thoughts, feelings as feelings, expectations as expectations. This is what allows old relational patterns to become visible from the inside, rather than continuing to operate as the unquestioned shape of reality. A client who cannot recognize their own internal weather cannot work with it.
          </p>
          <h3>Pillar three: Ideal Parent Figure imagery</h3>
          <p>
            The <Link href="/ideal-parent-figure-protocol">Ideal Parent Figure protocol</Link> is the active intervention at the heart of IAT. Using structured imagery and therapist-guided attunement, clients experience, at the level of felt sense and implicit memory, what it would have been like to have caregivers who provided the five conditions of secure attachment. Over the course of treatment, these experiences consolidate into genuine shifts in the internal working model: new expectations about relationship, new capacities for regulation, a different felt sense of one’s own worthiness to be loved.
          </p>
        </div>
      </Section>

      <Section
        tone="cream2"
        width="mid"
        eyebrow="The Five Conditions"
        title="What the work delivers"
        intro="The Three Pillars describe how the work is structured. The five conditions describe what it delivers: the core relational experiences that, when present, allow secure attachment to develop."
      >
        <div className="row" style={{ gap: '28px 48px' }}>
          {conditions.map((c) => (
            <div key={c.name} style={{ flex: '1 1 260px', minWidth: 0, borderTop: '1px solid var(--line)', paddingTop: 18 }}>
              <h3 style={{ fontWeight: 500, fontSize: 26, lineHeight: 1.2 }}>{c.name}</h3>
              <p style={{ marginTop: 8, color: 'var(--ink2)' }}>{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section width="narrow">
        <div className="prose">
          <h2>What the evidence shows</h2>
          <p>
            IAT is grounded in decades of attachment research: Bowlby and Ainsworth’s foundational work, the Adult Attachment Interview research of Main and Hesse, the neurobiological contributions of Allan Schore, and the mindfulness-based frameworks of Daniel Siegel. It also draws on the clinical research of Brown and Elliott themselves.
          </p>
          <p>
            A central finding from this tradition is that attachment classifications are not fixed. Adults can and do move from insecure to <Link href="/earned-secure-attachment">earned-secure attachment</Link>, and when they do, the changes are measurable in the Adult Attachment Interview, in physiological stress response, and in the quality of their relationships, including their parenting. IAT is designed specifically to produce this kind of movement.
          </p>
          <p>
            The mechanism is neuroplasticity at the level of implicit memory. When a client vividly and repeatedly experiences what safe, attuned, soothing caregiving would have felt like, the brain lays down new implicit memories that begin to compete with and eventually reorganize the older, insecure ones. This is not a workaround or a substitute for healing. It is healing.
          </p>
        </div>
      </Section>

      <RelatedLinks
        items={[
          { href: '/ideal-parent-figure-protocol', t: 'The Ideal Parent Figure protocol', d: 'How the core intervention works' },
          { href: '/iat-certified-therapist', t: 'IAT-certified therapist', d: 'What certification means for the work' },
          { href: '/the-way-back-home', t: 'The Way Back Home', d: 'The framework, written for parents of teens' },
        ]}
      />
      <Closing />
    </Page>
  )
}
