import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'IAT-Certified Therapist',
  description: 'Daniel J. Ahearn is one of six IAT-certified clinicians in the U.S. What IAT certification means, what it requires, and why it matters for clients.',
}

export default function IATCertifiedTherapist() {
  return (
    <>
      <section className="bg-cream-800 py-16 md:py-24">
        <div className="container-main max-w-3xl">
          <p className="eyebrow text-cream-400">Credentials</p>
          <h1 className="text-4xl md:text-5xl font-serif text-cream-100 leading-tight mb-6">
            IAT-Certified Therapist
          </h1>
          <p className="text-cream-300 text-lg leading-relaxed">
            There are six IAT-certified clinicians in the United States. I am one of them. What that means — in terms of training, clinical capacity, and what it offers clients — is worth explaining clearly.
          </p>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">What Certification Means</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">Why it's rare</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            IAT certification — certification in the Integrative Attachment Therapy framework developed by Daniel P. Brown, Ph.D. and David Elliott, Ph.D. — requires direct, sustained training with the developers of the model over an extended period. It is not a weekend workshop credential. It is not earned through a self-study course or an online program. It requires working cases under supervision, demonstrating clinical competence in the Three Pillars framework, and being assessed directly by the clinicians who built the model.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            As of this writing, there are six IAT-certified clinicians practicing in the United States. This is not a marketing claim about exclusivity. It reflects the reality that the training is intensive, the model is demanding to learn, and the developers have been deliberate about limiting certification to clinicians who have demonstrated genuine mastery rather than familiarity.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            I trained directly with Dr. Daniel P. Brown — one of the world's foremost researchers in attachment, hypnosis, and trauma — and with Dr. David Elliott over the course of several years. That training included extended immersion in the Three Pillars framework, supervised clinical work with complex attachment presentations, and direct feedback on my application of the Ideal Parent Figure protocol. Certification came at the end of a process, not at the beginning of one.
          </p>
        </div>
      </section>

      <section className="section-warm">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">What It Means for Clients</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">Why it matters in the room</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            Attachment-informed therapy has become a widely used phrase. Many therapists describe themselves as attachment-based or attachment-focused. In most cases, this means they understand attachment theory conceptually and use it to frame their understanding of clients' relational patterns. That is valuable. It is not the same as the IAT framework.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            The IAT framework is a structured clinical model with specific protocols, specific assessment tools, and a specific theory of change. Working it well requires not just conceptual understanding but clinical skill developed through practice: the ability to track a client's attachment system in real time, recognize the precise quality of what's needed at a given moment, and guide the Ideal Parent Figure imagery with the attunement and precision that makes the difference between a session that's pleasant and one that actually changes something.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            For clients, working with a certified practitioner means working with someone who has demonstrated that capacity — not just read about it. The protocol is designed to produce movement at the level of implicit memory, the level where attachment patterns actually live. Getting there requires clinical skill, not just knowledge. Certification exists to distinguish between the two.
          </p>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">My Background</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">Training and clinical context</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            I am a licensed marriage and family therapist (LMFT) practicing in Los Angeles. Beyond IAT certification, I serve as Director of Culture at Ascend Healthcare, a residential treatment program for adolescents, where I work with teenagers and families navigating complex attachment disruptions, developmental trauma, and family system breakdown.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            My private practice focuses on three overlapping areas: men's attachment work, father-teen repair, and adult clients with insecure attachment patterns who have not found lasting change through other therapeutic approaches. The IAT framework is the backbone of all three.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            I am also the author of <em>The Way Back Home: Healing Attachment Wounds and Rebuilding Connection with Your Teen</em>, which translates the IAT framework for parents — and the creator of <a href="https://waybackhome.app" className="text-cream-500 hover:text-cream-700 underline underline-offset-2">waybackhome.app</a>, a daily practice companion that brings the five conditions of secure attachment into a ten-minute daily ritual for parents of teenagers.
          </p>
          <p className="text-cream-700 leading-relaxed">
            The clinical work and the public-facing work are the same project: making the most effective attachment-based model available to as many people as possible, at whatever level of depth their situation calls for.
          </p>
        </div>
      </section>

      <section className="bg-cream-800 py-14">
        <div className="container-main max-w-2xl text-center">
          <p className="eyebrow text-cream-400">Work With Me</p>
          <h2 className="text-2xl font-serif text-cream-100 mb-4">Private practice in Los Angeles</h2>
          <p className="text-cream-400 leading-relaxed mb-7">
            I accept a limited number of private practice clients and work via telehealth across California. If you're looking for IAT-certified clinical work, I'm glad to talk.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
            <Link href="/ideal-parent-figure-protocol" className="btn-ghost !border-cream-600 !text-cream-300 hover:!bg-cream-700">About the IPF Protocol →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
