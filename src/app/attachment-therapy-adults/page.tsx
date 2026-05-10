import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Attachment Therapy for Adults — Daniel J. Ahearn, LMFT',
  description: 'What attachment therapy for adults looks like, who it helps, and how the IAT approach produces lasting change in long-standing relational patterns.',
}

export default function AttachmentTherapyAdults() {
  return (
    <>
      <section className="bg-cream-800 py-16 md:py-24">
        <div className="container-main max-w-3xl">
          <p className="eyebrow text-cream-400">Approach</p>
          <h1 className="text-4xl md:text-5xl font-serif text-cream-100 leading-tight mb-6">
            Attachment Therapy for Adults
          </h1>
          <p className="text-cream-300 text-lg leading-relaxed">
            The patterns formed in early relationship don't stop running in adulthood. They just become invisible — operating as the automatic givens of how we expect relationships to go, how safe we feel being known, and whether we believe our needs are legitimate.
          </p>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">The Problem</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">Why patterns persist</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            Most adults who grew up with inconsistent, unavailable, or frightening caregivers develop insecure attachment patterns. These patterns are not character flaws or neuroses. They are adaptive strategies — ways the attachment system learned to manage the reality of a caregiving environment that couldn't be counted on. Anxious vigilance, emotional self-sufficiency, hyperactivation or deactivation of attachment needs — these worked, in the context where they were formed.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            The problem is that they keep working, in contexts where they are no longer necessary. The person who learned that needing others was dangerous still flinches from dependence in a relationship with someone who is genuinely safe. The person who learned that the way to maintain closeness was through constant monitoring of the other's emotional state still does that, even when the other person is not going anywhere. The strategy runs automatically, beneath the level of conscious intention, because it is encoded in implicit memory — not as a belief or a thought but as a body-level expectation about how relationship works.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            This is why insight, by itself, rarely changes attachment patterns. The person can understand perfectly well, at a cognitive level, that their partner is not their parent — and still respond to them as if they were. The understanding lives in one part of the brain. The pattern lives somewhere older, faster, and deeper.
          </p>
        </div>
      </section>

      <section className="section-warm">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">What Attachment Therapy Offers</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">Working at the right level</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            Attachment therapy for adults, done well, works at the level where attachment patterns actually live — not at the level of conscious understanding but at the level of felt sense, body-based expectation, and implicit memory. This requires approaches that are not primarily cognitive: approaches that can activate the attachment system, create conditions for new experiences within it, and consolidate those experiences into genuine change over time.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            The Integrative Attachment Therapy framework I use is designed specifically for this. Its central protocol — the Ideal Parent Figure (IPF) work — guides clients through structured, imagination-based experiences of receiving exactly what the attachment system needed and didn't get: a caregiver who is simply glad you're there, whose nervous system communicates safety without words, who soothes rather than amplifies distress, who supports rather than constrains exploration.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            These imagined experiences, repeated over the course of treatment and consolidated with precision, change the internal working model — the implicit relational template that has been organizing relationship behavior since childhood. The change is not cognitive reframing. It is new implicit memory: the brain now has experiences of security to draw on that it didn't have before.
          </p>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">Who This Work Is For</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">Recognizing the pattern</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            Adults who benefit most from attachment-focused therapy often recognize some version of the following in their lives:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'A persistent gap between knowing something is safe and feeling like it is',
              'Relationships that follow the same painful arc regardless of who the other person is',
              'A reflexive self-sufficiency that makes accepting care feel uncomfortable or wrong',
              'Chronic anxiety in intimate relationships — monitoring, managing, anticipating loss',
              'A sense of being fundamentally different from others, less worthy, less entitled to need',
              'Therapy that produced insight but not the deeper change you were hoping for',
              'A parenting relationship that is triggering in ways you don\'t fully understand',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-cream-700 text-sm leading-relaxed">
                <span className="text-cream-400 mt-0.5">—</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-cream-700 leading-relaxed">
            If any of these land, attachment-focused therapy — particularly the IAT approach — may be the right level of work. Not because previous therapy failed, but because it was working at a different level than where the pattern lives.
          </p>
        </div>
      </section>

      <section className="bg-cream-800 py-14">
        <div className="container-main max-w-2xl text-center">
          <p className="eyebrow text-cream-400">Work With Me</p>
          <h2 className="text-2xl font-serif text-cream-100 mb-4">Private practice in Los Angeles</h2>
          <p className="text-cream-400 leading-relaxed mb-7">
            I am one of six IAT-certified clinicians in the United States, and I work with adults carrying insecure attachment patterns that have not yielded to other approaches. I practice in Los Angeles and via telehealth across California.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://calendly.com/danieljahearn/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">Free 15-Min Consult</a>
            <Link href="/contact" className="btn-ghost !border-cream-600 !text-cream-300 hover:!bg-cream-700">Get in Touch</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm">
            <Link href="/integrative-attachment-therapy" className="text-cream-400 hover:text-cream-200 transition-colors">About the IAT Framework →</Link>
            <Link href="/the-way-back-home" className="text-cream-400 hover:text-cream-200 transition-colors">About the book →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
