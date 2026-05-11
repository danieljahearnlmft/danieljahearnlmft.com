import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Daniel J. Ahearn is an LMFT and one of six IAT-certified clinicians in the United States. Based in Los Angeles, working with men, fathers, teens, and families.',
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-200 py-16 md:py-24">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow">About</p>
              <h1 className="text-4xl md:text-5xl font-serif text-cream-900 mb-6 leading-tight">
                Daniel J. Ahearn,<br />LMFT
              </h1>
              <p className="text-cream-700 leading-relaxed mb-4">
                I'm a licensed marriage and family therapist and certified alcohol and drug counselor based in Los Angeles. I'm one of six clinicians in the United States certified in Integrative Attachment Therapy — a method I trained in directly with Dr. Daniel P. Brown and Dr. David Elliott beginning in 2018.
              </p>
              <p className="text-cream-700 leading-relaxed mb-4">
                My clinical work centers on attachment repair: helping people change not just how they think about their relationships, but how their nervous systems experience safety and connection.
              </p>
              <p className="text-cream-700 leading-relaxed mb-8">
                I serve as Director of Culture at Ascend Healthcare, a residential treatment program for adolescents in Los Angeles, where I run attachment repair groups and lead clinical training. I also maintain a private practice specializing in men's attachment work, father-teen repair, and families navigating the hardest years.
              </p>
              <a
                href="https://calendly.com/danieljahearn/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Free 30-Min Consult
              </a>
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/daniel-speaking-1.webp"
                alt="Daniel J. Ahearn, LMFT"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Philosophy */}
      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">Clinical Philosophy</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-7">How I think about this work</h2>

          <div className="space-y-5 text-cream-700 leading-relaxed">
            <p>
              Most people I work with aren't broken — they're adapted. What looks like emotional unavailability, withdrawal, chronic conflict, or anxious pursuit is almost always an attachment strategy that once made sense. A child who learned that needing things brought punishment learns not to need things. A child who learned that love was inconsistent learns to stay hypervigilant. Those strategies become personality. They become relationship patterns. They become the thing that wears people out.
            </p>
            <p>
              The work isn't to override those patterns through willpower or insight. It's to provide the nervous system with something it never had — a felt experience of safety, attunement, and genuine care — and to do that repeatedly, over time, until a new foundation forms. That's what the Ideal Parent Figure Protocol does. That's what Integrative Attachment Therapy is built around.
            </p>
            <p>
              I'm particularly drawn to father-teen attachment repair because it's underrepresented clinically and deeply consequential. The research is clear: paternal attachment shapes adolescent identity, risk tolerance, emotional regulation, and the templates teens carry into their own adult relationships. A father who does this work doesn't just change himself — he changes a family system.
            </p>
          </div>
        </div>
      </section>

      {/* Training & Credentials */}
      <section className="section-warm">
        <div className="container-main">
          <p className="eyebrow">Training & Credentials</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-10">Background</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Integrative Attachment Therapy (IAT)',
                body: 'Trained directly with Dr. Daniel P. Brown and Dr. David Elliott in the Three Pillars / IAT framework. One of six certified IAT clinicians in the United States.',
              },
              {
                title: 'Licensure & Certification',
                body: 'Licensed Marriage and Family Therapist (LMFT), licensed in California. Also holds CADC certification.',
              },
              {
                title: 'Clinical Hypnosis',
                body: 'Trained in clinical hypnosis, which informs the guided visualization and state-based work at the core of the Ideal Parent Figure Protocol.',
              },
              {
                title: 'Adolescent Residential Treatment',
                body: 'Over a decade working in adolescent residential treatment settings, including current work as Director of Culture at Ascend Healthcare in Los Angeles.',
              },
              {
                title: 'Bön Buddhist Contemplative Practice',
                body: 'A contemplative practice rooted in the Tibetan Bön tradition for over two decades, which informs an understanding of mind, attention, and the conditions for change.',
              },
              {
                title: 'Author',
                body: 'Author of The Way Back Home: Healing Attachment Wounds With Your Teen (2026), a clinical guide for families applying IAT principles to adolescent attachment repair.',
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-cream-400 pl-5">
                <h3 className="font-serif text-lg text-cream-900 mb-2">{item.title}</h3>
                <p className="text-cream-700 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IAT section */}
      <section className="section-cream">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow">The Method</p>
              <h2 className="text-3xl font-serif text-cream-900 mb-5">Integrative Attachment Therapy</h2>
              <p className="text-cream-700 leading-relaxed mb-4">
                IAT is a structured, research-backed approach to attachment repair developed by Dr. Daniel P. Brown at Harvard Medical School. It works by providing corrective emotional experiences — through guided visualization — that the nervous system can internalize as a new foundation for security.
              </p>
              <p className="text-cream-700 leading-relaxed mb-4">
                The Ideal Parent Figure Protocol is its central tool: a systematic process of moving through developmental stages and building the internalized experience of being seen, soothed, safe, and supported.
              </p>
              <p className="text-cream-700 leading-relaxed">
                Unlike models focused primarily on insight, IAT works at the level of implicit memory — changing not just how you understand your history, but how your body holds it.
              </p>
            </div>
            <div className="bg-cream-900 rounded-lg p-10 text-cream-200">
              <p className="eyebrow text-cream-500">The Three Pillars</p>
              <div className="space-y-5 mt-3">
                {[
                  { num: '01', title: 'Collaborative Attunement', body: 'The therapist meets you where you are, attuning to your state and building a secure base within the therapeutic relationship itself.' },
                  { num: '02', title: 'Ideal Parent Figure Protocol', body: 'Systematic guided visualization through developmental stages, building the internalized experience of secure attachment from the inside out.' },
                  { num: '03', title: 'Metacognitive Monitoring', body: 'Building the capacity to observe your own mental states — recognizing patterns as they arise and choosing a different response.' },
                ].map((p) => (
                  <div key={p.num} className="flex gap-4">
                    <span className="font-serif text-cream-600 text-sm mt-1 shrink-0">{p.num}</span>
                    <div>
                      <p className="font-medium text-cream-100 text-sm mb-1">{p.title}</p>
                      <p className="text-cream-400 text-sm leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-200 py-16">
        <div className="container-main max-w-xl text-center">
          <h2 className="text-2xl font-serif text-cream-900 mb-4">Ready to talk?</h2>
          <p className="text-cream-700 mb-7">A free 30-minute consult to discuss what you're navigating and whether we're a fit.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://calendly.com/danieljahearn/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Schedule a Consult
            </a>
            <Link href="/services" className="btn-ghost">See All Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
