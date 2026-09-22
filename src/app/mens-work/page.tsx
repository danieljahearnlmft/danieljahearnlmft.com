import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RealMethod from '@/components/RealMethod'

export const metadata: Metadata = {
  title: "Men's Attachment Repair Groups",
  description: '16-week attachment repair cohort for men using the Ideal Parent Figure Protocol and the R.E.A.L. Method for relationships, fatherhood, and emotional availability.',
  openGraph: {
    images: [{ url: '/images/mens-groups.jpg', alt: "Men's Attachment Repair Groups" }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/mens-groups.jpg'],
  },
}

export default function MensWork() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <Image
          src="/images/mens-groups.jpg"
          alt="Men's Attachment Repair Groups"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-cream-900/60" />
        <div className="absolute inset-0 flex items-end pb-14 md:pb-20">
          <div className="container-main">
            <p className="text-xs uppercase tracking-widest text-cream-300 mb-4">Men's Work</p>
            <h1 className="text-4xl md:text-5xl font-serif text-cream-50 leading-tight max-w-2xl mb-5">
              Men's Attachment<br />Repair Groups
            </h1>
            <p className="text-cream-300 text-base leading-relaxed max-w-xl mb-8">
              A structured group process for men who are competent, responsible, and exhausted by how hard it is to stay that way.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://docs.google.com/forms/d/1qRud6L6w43N5BFNXVdgrWk5GrUFeUEnZl9cny9FjL4I/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Apply for Next Cohort
              </a>
              <a href="https://calendly.com/danieljahearn/30min" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Free 15-Min Consult
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 16-week cohort */}
      <section className="section-cream">
        <div className="container-main max-w-4xl">
          <p className="eyebrow">16-Week Attachment Repair Cohort</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-5">What this is</h2>
          <p className="text-cream-700 leading-relaxed mb-4">
            You function well professionally. You're dependable. People count on you. But relationships feel harder than they should. You withdraw when conflict arises. You solve problems instead of staying present. You feel more comfortable alone than vulnerable.
          </p>
          <p className="text-cream-700 leading-relaxed mb-10">
            This isn't about becoming a "better man." It's about repairing the attachment patterns that keep you from being fully present, connected, and alive in your relationships.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-xl text-cream-900 mb-5">You're a good fit if you:</h3>
              <ul className="space-y-2">
                {[
                  'Are 30–60 years old',
                  'Are professionally successful but relationally struggling',
                  'Are a father who wants to break generational patterns',
                  'Are in a relationship strained by emotional unavailability',
                  'Are willing to be vulnerable in a group of men',
                  'Can commit to 16 weeks without missing sessions',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream-700 text-sm">
                    <span className="text-cream-400 shrink-0">·</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl text-cream-900 mb-5">Specifically for men who:</h3>
              <ul className="space-y-2">
                {[
                  'Withdraw or shut down during conflict',
                  'Over-function at work, under-function at home',
                  'Feel more comfortable solving problems than feeling feelings',
                  'Were raised with dismissive or anxious attachment',
                  'Want their kids to have better than they got',
                  'Are tired of performing competence while feeling empty',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream-700 text-sm">
                    <span className="text-cream-400 shrink-0">·</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 16-week arc */}
      <section className="section-warm">
        <div className="container-main max-w-4xl">
          <p className="eyebrow">The Process</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-10">What happens in 16 weeks</h2>
          <div className="space-y-8">
            {[
              {
                phase: 'Phase 1: Foundation',
                weeks: 'Weeks 1–2',
                items: ['Attachment assessment and mapping', 'Understanding your protective strategies', 'Group safety and agreements', 'Introduction to Ideal Parent Figure Protocol'],
              },
              {
                phase: 'Phase 2: Developmental Repair',
                weeks: 'Weeks 3–10',
                items: [
                  'Infancy: "I matter, my needs are valid"',
                  'Early childhood: "I can explore and return safely"',
                  'Play age: "I\'m delightful, I\'m wanted"',
                  'School age: "I\'m capable, I\'m supported"',
                  'Adolescence: "I can be myself and still belong"',
                ],
              },
              {
                phase: 'Phase 3: Integration',
                weeks: 'Weeks 11–14',
                items: ['Applying secure attachment to current relationships', 'Practicing staying present when activated', 'Repair work with partners, kids, colleagues', 'Differentiating from actual parents'],
              },
              {
                phase: 'Phase 4: Consolidation',
                weeks: 'Weeks 15–16',
                items: ['Deepening internalization', 'Sustainable daily practice', 'Group completion and alumni network'],
              },
            ].map((phase) => (
              <div key={phase.phase} className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <p className="font-serif text-cream-900 font-medium text-base">{phase.phase}</p>
                  <p className="text-cream-500 text-xs mt-1">{phase.weeks}</p>
                </div>
                <ul className="md:col-span-3 space-y-1.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-3 text-cream-700 text-sm">
                      <span className="text-cream-400 shrink-0 mt-0.5">·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RealMethod
        anchorId="real-for-men"
        eyebrow="Repair in Real Time"
        intro={[
          'Most men I work with are good at fixing things and worn out by how often their relationships break down anyway. The pattern is familiar: something goes wrong at home, you shut down or push harder, and the distance grows.',
          'R.E.A.L. is the four-step repair method from my book, The Way Back Home (April 1, 2026). It was written for parents of teens, and it works the same way with a partner, a child, or another man in the room.',
        ]}
        lines={[
          "Before you answer, three slow breaths. You're not trying to win the next thirty seconds.",
          '“Tell me what that was like for you.”',
          '“It sounds like you felt like I wasn’t really there.”',
          '“I shut down on you. That’s on me. I’m here now.”',
        ]}
        closing="In group, we practice R.E.A.L. on the ruptures you're actually living with: at home, with your kids, and in the room with other men."
      />

      {/* Format */}
      <section className="section-cream">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow">Format</p>
              <h2 className="text-3xl font-serif text-cream-900 mb-6">The structure</h2>
              <div className="space-y-4 text-cream-700 text-sm leading-relaxed">
                <p><strong className="text-cream-900 font-medium">16 consecutive weeks.</strong> 90 minutes per session, 8–10 men per cohort, Tuesdays 7–8:30pm PST.</p>
                <p><strong className="text-cream-900 font-medium">Each session includes:</strong> brief check-in, short teaching on attachment and development, guided Ideal Parent Figure visualization (20–30 minutes), group integration and reflection, and a practice assignment.</p>
                <p><strong className="text-cream-900 font-medium">Between sessions:</strong> daily 10-minute IPF practice, optional peer accountability partnerships, and access to guided audio recordings.</p>
              </div>
            </div>
            <div className="bg-cream-900 rounded-lg p-8 text-cream-200">
              <p className="eyebrow text-cream-500">What makes this different</p>
              <div className="space-y-5 mt-2">
                {[
                  { title: 'Not therapy-in-a-group', body: 'The group itself is the therapeutic agent. Men witnessing each other\'s vulnerability creates the safety to go deeper.' },
                  { title: 'Not a men\'s social circle', body: 'It\'s clinical attachment repair using a structured protocol. There\'s homework, commitment, and real work.' },
                  { title: 'Not performance-based', body: 'You\'re not learning to "be a secure man." You\'re repairing the nervous system patterns that prevent security from emerging naturally.' },
                  { title: 'Research-backed', body: 'The Ideal Parent Figure Protocol has evidence supporting its effectiveness for attachment repair. This isn\'t men\'s weekend retreat mysticism. It\'s neurobiology.' },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="text-cream-100 text-sm font-medium mb-1">{item.title}</p>
                    <p className="text-cream-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="section-warm">
        <div className="container-main max-w-xl text-center">
          <p className="eyebrow">The Program</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-3">What&rsquo;s included</h2>
          <p className="text-cream-600 text-sm mb-6">Fee and payment options are discussed during the application process.</p>
          <p className="text-cream-700 text-sm leading-relaxed mb-8">
            Includes 16 guided group sessions (24 hours), guided IPF audio recordings for home practice, written materials and developmental frameworks, email support between sessions, and alumni group access after completion.
          </p>
          <a
            href="https://docs.google.com/forms/d/1qRud6L6w43N5BFNXVdgrWk5GrUFeUEnZl9cny9FjL4I/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Start Application
          </a>
        </div>
      </section>

      {/* Book crosslink */}
      <section className="bg-cream-800 py-12">
        <div className="container-main max-w-3xl text-center">
          <p className="text-cream-400 text-sm leading-relaxed mb-5">
            Many of the fathers in these groups are navigating the hardest years of the parent-child relationship. <em className="text-cream-300">The Way Back Home</em> applies the same developmental repair framework to the space between you and your kid.
          </p>
          <Link href="/the-way-back-home" className="text-cream-300 text-sm font-medium hover:text-cream-100 transition-colors">
            Learn about the book →
          </Link>
        </div>
      </section>
    </>
  )
}
