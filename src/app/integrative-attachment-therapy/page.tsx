import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Integrative Attachment Therapy',
  description: 'What Integrative Attachment Therapy (IAT) is, how the Three Pillars framework works, and why it produces lasting change in attachment patterns.',
}

export default function IntegrativeAttachmentTherapy() {
  return (
    <>
      <section className="bg-cream-800 py-16 md:py-24">
        <div className="container-main max-w-3xl">
          <p className="eyebrow text-cream-400">Framework</p>
          <h1 className="text-4xl md:text-5xl font-serif text-cream-100 leading-tight mb-6">
            Integrative Attachment Therapy
          </h1>
          <p className="text-cream-300 text-lg leading-relaxed">
            A comprehensive, research-grounded framework for treating insecure and disorganized attachment in adults. Created by Dr. Daniel P. Brown and Dr. David Elliott, and now carried forward through IAT by Dr. Elliott, Nigel Denning, and Traill Dowie.
          </p>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">The Framework</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">What IAT is</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            Integrative Attachment Therapy (IAT) is a structured clinical framework created by Daniel P. Brown, Ph.D., one of the world's foremost researchers and clinicians in attachment theory, and David Elliott, Ph.D. Following Dr. Brown's death, the work is carried forward through IAT by Dr. Elliott alongside Nigel Denning, Traill Dowie, and a small international community of certified clinicians. The model is organized around a central insight: that most psychological suffering in adults traces back to disruptions in early attachment, and that the most effective path to lasting change is not analyzing those disruptions but systematically providing the experiences the attachment system needed and did not get.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            IAT is not a single technique. It is an integrated model that draws on attachment research, developmental neuroscience, mindfulness-based approaches, and somatic therapy to address the full range of insecure attachment presentations: anxious, avoidant, disorganized, and complex traumatic. The model is organized as the Three Pillars framework, reflecting its three foundational components: Collaboration, Metacognition, and the Ideal Parent Figure (IPF) Imagery protocol.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            What distinguishes IAT from other attachment-informed therapies is its precision and its depth. It works directly at the level of implicit memory: the body-based, procedural relational knowing that forms before language and cannot be reached through insight or cognitive reframing alone. This is where attachment patterns actually live, and it is why so many people who understand their patterns completely still cannot seem to change them.
          </p>
        </div>
      </section>

      <section className="section-warm">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">The Three Pillars</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-8">How the model is structured</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-serif text-cream-900 mb-3">Pillar One: Collaboration</h3>
              <p className="text-cream-700 leading-relaxed mb-3">
                Before the deeper work can begin, therapist and client build a genuinely collaborative therapeutic relationship: shared agenda-setting, transparent rationale for what we do, and the client's voice shaping the work. For anyone whose early caregivers were directive, intrusive, or absent, the collaborative stance is itself corrective. It is the relational foundation the rest of the work stands on.
              </p>
              <p className="text-cream-700 leading-relaxed">
                This pillar also includes the stabilization that makes deeper work possible: developing the client's capacity for dual awareness, affect regulation, and access to internal resources. These capacities are prerequisites for the imaginal work that follows, and developing them is itself therapeutic.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-cream-900 mb-3">Pillar Two: Metacognition</h3>
              <p className="text-cream-700 leading-relaxed mb-3">
                IAT systematically builds the client's capacity to notice their own mental states as mental states: thoughts as thoughts, feelings as feelings, expectations as expectations. This metacognitive awareness is what allows old attachment and relational patterns to become visible from the inside, rather than continuing to operate as the unquestioned shape of reality.
              </p>
              <p className="text-cream-700 leading-relaxed">
                It is also a prerequisite for the imaginal work that follows. A client who cannot recognize their own internal weather cannot work with it. Metacognition is the lens that makes the work possible.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-cream-900 mb-3">Pillar Three: Ideal Parent Figure Imagery (IPF Protocol)</h3>
              <p className="text-cream-700 leading-relaxed mb-3">
                The IPF protocol is the active intervention at the heart of IAT. Using structured imagery and therapist-guided attunement, clients are helped to experience, at the level of felt sense and implicit memory, what it would have been like to have caregivers who provided the five conditions of secure attachment: safety, attunement, soothing, expressed delight, and support for exploration.
              </p>
              <p className="text-cream-700 leading-relaxed">
                Over the course of treatment, these imaginative experiences consolidate into genuine shifts in the internal working model: new expectations about relationship, new capacities for regulation, a fundamentally different felt sense of one's own worthiness to be loved and supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">Research Base</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">What the evidence shows</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            IAT is grounded in decades of attachment research: from Bowlby and Ainsworth's foundational work through the Adult Attachment Interview research of Main and Hesse, the neurobiological contributions of Allan Schore, and the mindfulness-based frameworks of Daniel Siegel. It also draws on the clinical research of Brown and Elliott themselves, who developed the Three Pillars framework over many years of treating complex attachment disruptions.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            A central finding from this research tradition is that attachment classifications are not fixed. Adults can and do move from insecure to earned-secure attachment classifications, and when they do, the changes are measurable in the Adult Attachment Interview, in physiological stress response, and in the quality of their relationships, including their parenting. IAT is designed specifically to produce this kind of movement.
          </p>
          <p className="text-cream-700 leading-relaxed">
            The mechanism is neuroplasticity at the level of implicit memory. When a client vividly and repeatedly experiences what safe, attuned, soothing caregiving would have felt like, the brain lays down new implicit memories that begin to compete with and eventually reorganize the older, insecure ones. This is not a workaround or a substitute for healing. It is healing.
          </p>
        </div>
      </section>

      <section className="bg-cream-800 py-14">
        <div className="container-main max-w-2xl text-center">
          <p className="eyebrow text-cream-400">Work With Me</p>
          <h2 className="text-2xl font-serif text-cream-100 mb-4">IAT in my practice</h2>
          <p className="text-cream-400 leading-relaxed mb-7">
            I am an IAT-certified clinician. I trained directly with Dr. Daniel P. Brown and Dr. David Elliott and use the full Three Pillars framework in my work with adults, parents, and men navigating attachment-based patterns in their relationships and lives.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://calendly.com/danieljahearn/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">Free 15-Min Consult</a>
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
