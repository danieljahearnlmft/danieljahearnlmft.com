import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Earned Secure Attachment — Daniel J. Ahearn, LMFT',
  description: 'What earned secure attachment is, what the research shows about developing it as an adult, and the clinical path to get there.',
}

export default function EarnedSecureAttachment() {
  return (
    <>
      <section className="bg-cream-800 py-16 md:py-24">
        <div className="container-main max-w-3xl">
          <p className="eyebrow text-cream-400">Clinical Concept</p>
          <h1 className="text-4xl md:text-5xl font-serif text-cream-100 leading-tight mb-6">
            Earned Secure Attachment
          </h1>
          <p className="text-cream-300 text-lg leading-relaxed">
            Secure attachment is not only for people who had it from the beginning. Adults can develop genuine security — not as a performance or a coping strategy, but as a real reorganization of the attachment system. This is what the research calls earned secure attachment, and it changes everything.
          </p>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">What the Research Shows</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">Security is not fixed at birth</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            One of the most important findings in attachment research is that attachment classifications are not permanent. The Adult Attachment Interview (AAI), developed by Mary Main and colleagues, classifies adults not by what happened to them in childhood but by the coherence and integration of their narrative about it. What researchers found — and what has been replicated consistently — is that some adults who had clearly difficult, disrupting, or inadequate early caregiving nonetheless present as secure on the AAI. Their narrative is coherent. Their relationship with their history is integrated. They function, in relationship, with the flexibility and availability characteristic of secure attachment.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            Main and her colleagues called this earned secure attachment. It describes adults who moved from insecure to secure — not because their history changed, but because something in their processing of that history, and their relationship to themselves and others, reorganized. The change is real, measurable, and consequential: adults with earned secure attachment parent like securely attached adults, not like insecurely attached ones.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            The research on what produces this shift identifies several pathways: sustained therapeutic relationships, significant attachment figures in adulthood (partners, mentors), and — most efficiently — clinical work specifically designed to build the internal experience of secure attachment that was absent in childhood. This last pathway is what the Integrative Attachment Therapy framework is built for.
          </p>
        </div>
      </section>

      <section className="section-warm">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">What It Looks Like</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">The experience of moving toward security</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            Earned secure attachment does not look like the absence of difficulty. Adults who have developed earned security still have a history, still carry the marks of what was inadequate or absent. What changes is the relationship to that history, and — more importantly — the felt sense of relationship in the present.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            People moving toward earned security often describe a gradual shift in what closeness feels like: less vigilance, more ease. A reduced need to monitor the other person's emotional state for signs of impending abandonment or criticism. A growing capacity to receive care without immediately deflecting it or becoming suspicious of it. A different felt sense of their own worth — not a belief arrived at through positive self-talk, but a bodily experience, quiet and increasingly reliable, that they are someone worth being close to.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            In parenting, the shift is particularly visible. A parent who is moving toward earned security has access to a wider range of responses to their child's distress, need, or difficulty. They are less likely to be hijacked by their own unprocessed material when their child activates it. The five conditions of secure caregiving — safety, attunement, soothing, delight, and support for exploration — become more available because they are less blocked by the parent's own unmet attachment needs.
          </p>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">The Clinical Path</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">How the work produces change</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            The Integrative Attachment Therapy framework I use is, at its core, a method for producing earned secure attachment. The Ideal Parent Figure protocol creates conditions for new implicit memories of security — the felt sense of being safely held, accurately seen, soothed when distressed, delighted in, and supported toward one's own life. Repeated over the course of treatment, these experiences begin to genuinely reorganize the internal working model.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            The process is not linear. Resistance arises — the old strategies assert themselves, the disbelief that this is real or deserved, the grief of beginning to feel what was missed. These are not setbacks. They are the work. They reveal exactly what needs to shift and give the therapist precise information about where to direct the next phase of the intervention.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            What the model offers that many other approaches do not is a clear theory of change operating at the right level — not the level of conscious understanding but the level of felt sense and implicit memory, where attachment patterns actually live. The goal is not earned insight. It is earned security: a genuine, measurable, lasting reorganization of the attachment system.
          </p>
          <p className="text-cream-700 leading-relaxed">
            That is what I work toward with every adult client I see, and it is available — regardless of history, regardless of how many years the pattern has run.
          </p>
        </div>
      </section>

      <section className="bg-cream-800 py-14">
        <div className="container-main max-w-2xl text-center">
          <p className="eyebrow text-cream-400">Work With Me</p>
          <h2 className="text-2xl font-serif text-cream-100 mb-4">Begin the work toward security</h2>
          <p className="text-cream-400 leading-relaxed mb-7">
            I am one of six IAT-certified clinicians in the United States. I work with adults whose attachment patterns have not shifted through other approaches, and I bring the full Integrative Attachment Therapy framework to that work. Los Angeles and telehealth across California.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://calendly.com/danieljahearn/15min" target="_blank" rel="noopener noreferrer" className="btn-primary">Free 15-Min Consult</a>
            <Link href="/contact" className="btn-ghost !border-cream-600 !text-cream-300 hover:!bg-cream-700">Get in Touch</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm">
            <Link href="/ideal-parent-figure-protocol" className="text-cream-400 hover:text-cream-200 transition-colors">The IPF Protocol →</Link>
            <Link href="/the-way-back-home" className="text-cream-400 hover:text-cream-200 transition-colors">About the book →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
