import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Attachment Therapy in Los Angeles · IAT-Certified Clinician' },
  description: 'Attachment-based therapy in Los Angeles with an IAT-certified clinician. Adult work, men\'s groups, and parent-teen repair. Telehealth across CA.',
}

export default function AttachmentTherapyLosAngeles() {
  return (
    <>
      <section className="bg-cream-800 py-16 md:py-24">
        <div className="container-main max-w-3xl">
          <p className="eyebrow text-cream-400">Los Angeles</p>
          <h1 className="text-4xl md:text-5xl font-serif text-cream-100 leading-tight mb-6">
            Attachment-Based Therapy<br />in Los Angeles
          </h1>
          <p className="text-cream-300 text-lg leading-relaxed">
            Private practice with one of six IAT-certified clinicians in the United States. Specializing in adult attachment work, men's relational patterns, and parent-teen repair.
          </p>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">The Practice</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">What I offer</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            I am a licensed marriage and family therapist (LMFT) in Los Angeles and one of six clinicians in the United States certified in Integrative Attachment Therapy (IAT) — the framework developed by Dr. Daniel P. Brown and Dr. David Elliott. My practice is small and focused. I work with adults and parents who are dealing with attachment-based relational patterns that haven't shifted through other approaches, and I bring the full IAT framework to that work.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            Los Angeles has no shortage of therapists who describe themselves as attachment-based or attachment-informed. What is rare is clinical training at the level the IAT model requires: direct, supervised immersion in the Three Pillars framework and the Ideal Parent Figure protocol, assessed and certified by the developers themselves. That training is what I bring to the work.
          </p>
          <p className="text-cream-700 leading-relaxed">
            I see clients in person in Los Angeles and via telehealth for clients across California.
          </p>
        </div>
      </section>

      <section className="section-warm">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">Areas of Focus</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-8">Who I work with</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Men's Attachment Work",
                body: "Men are rarely given language for attachment needs — let alone permission to have them. I work with men whose relational patterns trace back to early caregiving dynamics they've never been able to fully see or name: the reflexive self-sufficiency, the difficulty with intimacy, the ways disconnection has become the default. The IAT framework gives this work precision and depth.",
              },
              {
                title: "Parent-Teen Repair",
                body: "The adolescent years surface every unresolved attachment issue a parent carries. I work with parents who want to show up differently for their teenagers — not just manage the conflict better but actually close the gap. This work often involves the parent's own attachment history as much as the parent-teen relationship itself.",
              },
              {
                title: "Adult Attachment Patterns",
                body: "For adults who recognize the signature of insecure attachment in their relationships — the familiar arcs, the persistent gaps between knowing and feeling, the ways relationship keeps reproducing the same dynamics — IAT offers a path to genuine reorganization, not just better coping.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-serif text-cream-900 mb-3">{item.title}</h3>
                <p className="text-cream-700 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">The Approach</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">What makes IAT different</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            Most therapists in Los Angeles — and most good ones — work at the level of narrative, insight, and conscious understanding. They help clients make sense of their history, identify patterns, develop new ways of thinking about themselves and their relationships. This matters. It is genuinely helpful.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            Attachment patterns, however, are not primarily stored in narrative memory. They are stored in implicit memory — the procedural, body-based, relational knowing that forms before language and operates beneath awareness. You can understand a pattern completely and still not be able to change it, because understanding and pattern live in different systems.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            IAT works at the level where the pattern actually lives. Through the Ideal Parent Figure protocol and the full Three Pillars framework, it creates conditions for new experiences in the attachment system — experiences that, consolidated over time, genuinely change the internal working model. The result is not just better insight but a different felt sense of relationship: less vigilance, more ease, a changed expectation of what's possible between people.
          </p>
          <p className="text-cream-700 leading-relaxed">
            This is what I offer in Los Angeles, and what distinguishes IAT-certified work from attachment-informed therapy more broadly.
          </p>
        </div>
      </section>

      <section className="bg-cream-800 py-14">
        <div className="container-main max-w-2xl text-center">
          <p className="eyebrow text-cream-400">Get in Touch</p>
          <h2 className="text-2xl font-serif text-cream-100 mb-4">Start a conversation</h2>
          <p className="text-cream-400 leading-relaxed mb-7">
            I maintain a small private practice and see a limited number of clients. If you're in Los Angeles or California and looking for attachment-based therapy at the IAT level, I'm glad to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://calendly.com/danieljahearn/15min" target="_blank" rel="noopener noreferrer" className="btn-primary">Free 15-Min Consult</a>
            <Link href="/contact" className="btn-ghost !border-cream-600 !text-cream-300 hover:!bg-cream-700">Get in Touch</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm">
            <Link href="/iat-certified-therapist" className="text-cream-400 hover:text-cream-200 transition-colors">About My Training →</Link>
            <Link href="/services" className="text-cream-400 hover:text-cream-200 transition-colors">All Services →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
