import Link from 'next/link'
import { pageMeta } from '@/lib/site'
import { Closing, Hero, List, Page, RelatedLinks, Section } from '@/components/site/ui'

export const metadata = pageMeta(
  '/ideal-parent-figure-protocol',
  'The Ideal Parent Figure Protocol',
  'What the Ideal Parent Figure (IPF) protocol is, how it works, what a session looks like, and who it helps, from an IAT-certified clinician.',
)

export default function IdealParentFigureProtocol() {
  return (
    <Page>
      <Hero
        eyebrow="Clinical Approach"
        title="The Ideal Parent Figure Protocol"
        sub="A structured, imagination-based approach to building secure attachment from the inside out, developed by Dr. Daniel P. Brown and Dr. David Elliott, and now carried forward by IAT."
      />

      <Section width="narrow">
        <div className="prose">
          <h2>Building security that was never built</h2>
          <p>
            The Ideal Parent Figure (IPF) protocol is the central intervention of the <Link href="/integrative-attachment-therapy">Integrative Attachment Therapy</Link> framework. It works directly with the imagination to create new internal representations of secure attachment: experiences that many adults never had as children and have been carrying the absence of ever since.
          </p>
          <p>
            The protocol is grounded in a fundamental insight from attachment research: the brain cannot easily distinguish between an imagined experience and a lived one at the level of implicit memory. The felt sense of being held, soothed, delighted in, and supported, if experienced vividly and repeatedly in a safe therapeutic context, begins to lay down new implicit memories. Over time, these change the internal working model: the largely unconscious set of expectations about relationships, safety, and self-worth that was formed in early life.
          </p>
          <p>
            This is not visualization in the casual sense. It is a structured, carefully guided process that activates the same attachment systems that were active in childhood and consolidates new experiences across sessions into genuine change in how a person feels in relationship.
          </p>

          <h2>The mechanism of change</h2>
          <p>
            Most therapy works at the level of explicit memory and conscious insight. The IPF protocol works primarily at the level of implicit memory: the procedural, body-based, relational knowing that forms before language and operates beneath awareness. This is where attachment patterns live, and it is why insight alone rarely changes them.
          </p>
          <p>
            In a session, the client is guided into a relaxed, internally focused state and invited to imagine ideal parent figures: not their actual parents, but figures who would respond to them with exactly what they needed. The therapist guides specific qualities of experience: being fully seen without judgment, having distress met with calm soothing rather than anxiety, being held in a way that allows the body to release rather than brace.
          </p>
          <p>
            The five conditions that structure this work, Safety, Attunement, Soothing, Expressed Delight, and Exploration, correspond to what attachment research identifies as the essential ingredients of a secure caregiving environment.
          </p>
          <p>
            What makes the protocol distinct is its precision. The therapist is tracking the client’s real-time responses, the subtle signs of activation, resistance, or softening, and adjusting the guidance accordingly. The goal is not relaxation or reassurance but genuine reorganization of the attachment system.
          </p>

          <h2>Inside a session</h2>
          <p>
            Sessions begin with stabilization: developing dual awareness, the ability to be in an imagined experience while grounded in the present moment. This is not a dissociative state. It is closer to the focused presence of an actor who is fully in a scene while also aware of the stage. Dual awareness is what makes the work both safe and effective.
          </p>
          <p>
            From this grounded state, the therapist introduces ideal parent figure imagery. The images are not scripted. They emerge from the client’s own internal landscape, guided by the therapist’s questions and attunement: what it feels like to be in the presence of a figure who is simply glad they’re there, who has nowhere else to be, whose nervous system communicates safety without a word being spoken.
          </p>
          <p>
            Clients often encounter unexpected resistance: a sense that the image doesn’t feel real, or that they don’t deserve it, or that allowing it in would be somehow dangerous. These responses are not obstacles to the work. They are the work. They reveal the structure of the insecure pattern that has been running the show.
          </p>
          <p>
            Treatment typically runs 20 to 40 sessions depending on developmental complexity. Clients report a gradual shift not just in insight but in felt experience: greater ease in relationship, less reactivity, a groundedness that doesn’t depend on external conditions being right.
          </p>
        </div>
      </Section>

      <Section tone="cream2" width="narrow" eyebrow="Who It Helps" title="The right fit">
        <div className="prose">
          <p>
            The protocol is well suited to adults whose patterns don’t yield to insight: automatic behaviors in relationship, chronic anxiety in closeness, a reflexive self-reliance that makes intimacy feel dangerous, or a persistent sense of unworthiness.
          </p>
          <p>
            It is also central to my work with parents. The capacity to offer a child safety, attunement, soothing, delight, and support for exploration depends heavily on whether those conditions exist, even partially, in the parent’s own internal world. IPF work builds that resource in the parent, which then becomes available to the child.
          </p>
          <List
            items={[
              'Adults with anxious, avoidant, or disorganized attachment patterns',
              'Parents working to repair connection with a teenager',
              'Adults who completed other trauma therapies but still feel something fundamental hasn’t shifted',
              'People who understand their patterns but can’t seem to change them through insight alone',
              'Adults who grew up with emotionally unavailable, neglectful, or inconsistent caregivers',
            ]}
          />
        </div>
      </Section>

      <RelatedLinks
        items={[
          { href: '/integrative-attachment-therapy', t: 'Integrative Attachment Therapy', d: 'The Three Pillars framework' },
          { href: '/attachment-therapy-adults', t: 'Attachment therapy for adults', d: 'Healing old wounds and earning security' },
          { href: '/services', t: 'Therapy and fees', d: 'Individual, couples and family work' },
        ]}
      />
      <Closing />
    </Page>
  )
}
