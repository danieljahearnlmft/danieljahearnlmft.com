import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Healing Attachment Wounds — Daniel J. Ahearn, LMFT',
  description: 'What attachment wounds are, how they show up in adult life, and the clinical path to lasting repair — from an IAT-certified therapist.',
}

export default function HealingAttachmentWounds() {
  return (
    <>
      <section className="bg-cream-800 py-16 md:py-24">
        <div className="container-main max-w-3xl">
          <p className="eyebrow text-cream-400">Clinical Focus</p>
          <h1 className="text-4xl md:text-5xl font-serif text-cream-100 leading-tight mb-6">
            Healing Attachment Wounds
          </h1>
          <p className="text-cream-300 text-lg leading-relaxed">
            Attachment wounds are not dramatic injuries. They are absences — the repeated experience of not being met in ways that mattered. Understanding them is the first step. Healing them requires something different.
          </p>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">What Attachment Wounds Are</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">The nature of the wound</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            The word "wound" implies something that happened — a discrete event, a moment of harm. Attachment wounds are more often the accumulation of what didn't happen: the attunement that was absent, the soothing that never came, the delight that was replaced by distraction or demand, the safe base that turned out not to be safe. They form not in single moments but in patterns — in the repetition of relational experiences that taught the developing child what relationship is, what they can expect from it, and what they are worth within it.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            These teachings don't arrive as explicit beliefs. They are deposited in implicit memory — in the body's expectation of what happens when someone gets close, in the automatic reading of another person's face, in the reflexive strategies for managing the fear of losing connection or the threat of being overwhelmed by it. By the time a child reaches adulthood, these patterns are simply how relationship works. They are not experienced as defenses or adaptations. They are experienced as reality.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            This is the particular difficulty of attachment wounds: they don't feel like wounds. They feel like the truth.
          </p>
        </div>
      </section>

      <section className="section-warm">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">How They Show Up</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">The adult signature</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            Attachment wounds don't announce themselves in adulthood. They show up in the texture of relationships — in the quality of what it feels like to be close to someone, in the patterns that recur regardless of who the other person is.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            For people with anxious attachment wounds, the signature is often hyperactivation: a persistent monitoring of the other person's emotional state, a difficulty tolerating uncertainty about the relationship's stability, a need for reassurance that never quite lands because the underlying belief — that they are not reliably loved — is not actually touched by the reassurance. The anxiety is not about this relationship. It is about all relationship, as it was encoded in the body long ago.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            For those with avoidant wounds, the signature is often deactivation: a reflexive self-sufficiency, a difficulty letting others matter too much, a subtle withdrawal from intimacy that begins when closeness reaches a certain threshold. The strategy was adaptive — if depending on caregivers was dangerous or humiliating, the safest move was to stop depending. It worked then. It keeps working, automatically, in every relationship since.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            Disorganized attachment wounds — often formed in the context of caregivers who were themselves the source of fear — produce a more complex picture: the simultaneous pull toward and flight from closeness, the collapse of strategy under stress, the relational patterns that seem contradictory because they reflect the impossible double bind of needing the person you are afraid of.
          </p>
          <p className="text-cream-700 leading-relaxed">
            In each case, the wound is not a memory that can be processed and released. It is a structure — an organization of the attachment system that shapes every relationship until something changes it.
          </p>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">The Path to Healing</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">What healing actually requires</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            Healing attachment wounds requires more than understanding them. The structural change that needs to happen — the reorganization of the attachment system, the development of new implicit memories of security — doesn't happen through insight. It happens through experience: the repeated, felt sense of what secure attachment would have felt like, which the brain then consolidates into new internal representations.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            This is the insight at the heart of the Integrative Attachment Therapy framework I use. The Ideal Parent Figure protocol doesn't ask clients to revisit painful memories or analyze their childhood. It guides them through structured imaginal experiences of receiving exactly what the attachment system needed — safety, attunement, soothing, delight, and support for exploration — until those experiences become real in the body and begin to change how relationship feels from the inside.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            This is not positive thinking. The process engages the attachment system directly, including the resistance, grief, and disbelief that are often part of what surfaces when the system begins to open. Healing attachment wounds is not comfortable work. It is real work, at the right level, with the specific goal of changing not just how a person understands their history but how they feel in relationship — what they expect, what they allow themselves to need, and what feels possible.
          </p>
          <p className="text-cream-700 leading-relaxed">
            That change is available to adults. It is what the clinical literature on earned secure attachment confirms. And it is what the IAT framework is specifically designed to produce.
          </p>
        </div>
      </section>

      <section className="bg-cream-800 py-14">
        <div className="container-main max-w-2xl text-center">
          <p className="eyebrow text-cream-400">The Book</p>
          <h2 className="text-2xl font-serif text-cream-100 mb-4">The Way Back Home</h2>
          <p className="text-cream-400 leading-relaxed mb-7">
            My book <em>The Way Back Home: Healing Attachment Wounds With Your Teen</em> applies this framework specifically to parents navigating the adolescent years — where attachment wounds in the parent surface with particular force and particular consequence.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/the-way-back-home" className="btn-primary">About the Book</Link>
            <Link href="/contact" className="btn-ghost !border-cream-600 !text-cream-300 hover:!bg-cream-700">Work With Me →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
