import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Attachment Styles in Adults — Daniel J. Ahearn, LMFT',
  description: 'The four adult attachment styles — secure, anxious, avoidant, and disorganized — what each means, how each shows up in adult relationships, and what the therapeutic path looks like for each.',
}

export default function AttachmentStyles() {
  return (
    <>
      <section className="bg-cream-800 py-16 md:py-24">
        <div className="container-main max-w-3xl">
          <p className="eyebrow text-cream-400">Attachment Theory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-cream-100 leading-tight mb-6">
            Attachment Styles in Adults
          </h1>
          <p className="text-cream-300 text-lg leading-relaxed">
            Attachment styles are not personality types or fixed categories. They are patterns — organizations of the attachment system that formed in response to early caregiving and that continue to shape how we experience closeness, safety, and loss in every relationship since.
          </p>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">The Framework</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">Where the categories come from</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            Attachment theory began with John Bowlby's observation that human beings are biologically motivated to seek proximity to caregivers under conditions of threat or distress — and that the quality of the caregiver's response to that seeking shapes the child's fundamental expectations about relationship. Mary Ainsworth's Strange Situation research gave the first empirical taxonomy of these patterns: secure, anxious-ambivalent, and avoidant. Later, Main and Hesse added a fourth: disorganized.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            The Adult Attachment Interview, developed by Main and colleagues, extended this framework to adults — revealing that the patterns formed in childhood are not simply left behind but reorganized, internalized, and carried forward in the form of what researchers call the internal working model: the largely implicit set of expectations about relationship, self, and other that was built in those early interactions and that continues to organize adult relational behavior.
          </p>
          <p className="text-cream-700 leading-relaxed">
            Understanding one's attachment style is not a goal in itself. It is a map — a way of recognizing the pattern precisely enough to begin working with it at the level where it actually lives.
          </p>
        </div>
      </section>

      <section className="section-warm">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">The Four Patterns</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-8">What each looks like in adult life</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif text-cream-900 mb-4">Secure Attachment</h3>
              <p className="text-cream-700 leading-relaxed mb-3">
                Securely attached adults had caregivers who were — not perfectly, but consistently enough — present, responsive, and available. The internal working model they developed is organized around a basic expectation: that reaching out to others when distressed is likely to result in support, and that needing people is not dangerous.
              </p>
              <p className="text-cream-700 leading-relaxed mb-3">
                In adult relationships, this shows up as a capacity for both closeness and autonomy without excessive anxiety about either. Securely attached adults can disagree without catastrophizing, be vulnerable without shame, and tolerate periods of distance without interpreting them as abandonment. They tend to have coherent, integrated narratives about their history — acknowledging difficulty without being overwhelmed by it or dismissing it.
              </p>
              <p className="text-cream-700 leading-relaxed">
                Secure attachment is not the absence of difficulty. It is a foundation from which difficulty can be navigated.
              </p>
            </div>

            <div className="border-t border-cream-300 pt-10">
              <h3 className="text-2xl font-serif text-cream-900 mb-4">Anxious (Preoccupied) Attachment</h3>
              <p className="text-cream-700 leading-relaxed mb-3">
                Anxious attachment develops when caregiving was inconsistent — sometimes warm and responsive, sometimes distracted, unavailable, or emotionally volatile. The child's attachment system could not find a reliable pattern. The adaptive response was to amplify attachment signals — to become more insistent, more demanding, more vigilant — in an attempt to secure a response that was never reliably present.
              </p>
              <p className="text-cream-700 leading-relaxed mb-3">
                In adulthood, the signature is hyperactivation: a heightened sensitivity to signs of rejection or withdrawal, a difficulty tolerating uncertainty about the relationship's stability, an intensity of need that often frightens away the very closeness it's seeking. Reassurance provides temporary relief but doesn't land at the level of the underlying belief — that one is fundamentally at risk of being abandoned.
              </p>
              <p className="text-cream-700 leading-relaxed">
                The therapeutic work with anxious attachment involves slowing down the hyperactivated system, building internal resources for self-regulation, and — through the Ideal Parent Figure protocol — beginning to build an implicit sense of reliable, consistent availability that the nervous system never had.
              </p>
            </div>

            <div className="border-t border-cream-300 pt-10">
              <h3 className="text-2xl font-serif text-cream-900 mb-4">Avoidant (Dismissing) Attachment</h3>
              <p className="text-cream-700 leading-relaxed mb-3">
                Avoidant attachment develops when caregivers were consistently emotionally unavailable — present physically but unresponsive to emotional needs, dismissive of distress, uncomfortable with dependence. The child learned that showing attachment needs produced rejection or withdrawal, and adapted accordingly: deactivating the attachment system, minimizing emotional need, becoming self-sufficient.
              </p>
              <p className="text-cream-700 leading-relaxed mb-3">
                In adulthood, this shows up as a reflexive emotional self-sufficiency, a difficulty with intimacy that increases as closeness deepens, and a tendency to minimize or dismiss the importance of relationships. Dismissing adults often describe their childhood as fine or normal despite evidence in their narrative of significant emotional unavailability. The strategy has become so automatic it has become invisible.
              </p>
              <p className="text-cream-700 leading-relaxed">
                The therapeutic work involves gently activating the deactivated attachment system — helping the person begin to feel what was never allowed to be felt — and building, through the IAT framework, an internal experience of what it would be like to need and be met, rather than to need and be rejected.
              </p>
            </div>

            <div className="border-t border-cream-300 pt-10">
              <h3 className="text-2xl font-serif text-cream-900 mb-4">Disorganized (Fearful-Avoidant) Attachment</h3>
              <p className="text-cream-700 leading-relaxed mb-3">
                Disorganized attachment is the most complex pattern and is associated with the most significant relational difficulties in adulthood. It develops when the caregiver was simultaneously the source of safety and the source of fear — through abuse, frightening behavior, unresolved trauma in the caregiver, or profound emotional dysregulation. The child faced an impossible bind: the attachment system pulls toward the caregiver for safety, and the fear system pushes away from the source of danger. When the caregiver is both, the system collapses.
              </p>
              <p className="text-cream-700 leading-relaxed mb-3">
                In adulthood, disorganized attachment often manifests as a contradictory pull toward and flight from closeness, intense relationship volatility, difficulty with affect regulation under relational stress, and patterns that can appear to others — and to the person themselves — as unpredictable or irrational. What looks irrational is actually the trace of an impossible early bind.
              </p>
              <p className="text-cream-700 leading-relaxed">
                The therapeutic work is necessarily careful and gradual — building safety and dual awareness before anything else, and moving into the attachment material only as the regulatory capacity to hold it is established. The IAT framework's emphasis on stabilization as a prerequisite for the deeper work is particularly important here.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-800 py-14">
        <div className="container-main max-w-2xl text-center">
          <p className="eyebrow text-cream-400">Work With Me</p>
          <h2 className="text-2xl font-serif text-cream-100 mb-4">Attachment-focused clinical work</h2>
          <p className="text-cream-400 leading-relaxed mb-7">
            I am one of six IAT-certified clinicians in the United States, trained directly in the Three Pillars framework and the Ideal Parent Figure protocol. I work with adults across the full range of insecure attachment presentations in Los Angeles and via telehealth.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
            <Link href="/earned-secure-attachment" className="btn-ghost !border-cream-600 !text-cream-300 hover:!bg-cream-700">Earned Secure Attachment →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
