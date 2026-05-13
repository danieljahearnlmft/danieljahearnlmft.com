import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Parent Support Groups',
  description: 'National Zoom-based parent psychoeducation groups for parents of teens. Attachment-informed, practical, capped at 12 participants. $60 per session.',
  openGraph: {
    images: [{ url: '/images/parent-groups-hero.jpg', alt: 'Parent Support Groups' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/parent-groups-hero.jpg'],
  },
}

export default function ParentSupportGroups() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <Image
          src="/images/parent-groups-hero.jpg"
          alt="Parent Support Groups"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-cream-900/60" />
        <div className="absolute inset-0 flex items-end pb-14 md:pb-20">
          <div className="container-main">
            <p className="text-xs uppercase tracking-widest text-cream-300 mb-4">Parent Support Groups</p>
            <h1 className="text-4xl md:text-5xl font-serif text-cream-50 leading-tight max-w-2xl mb-5">
              You don't have to figure<br />this out alone.
            </h1>
            <p className="text-cream-300 text-base leading-relaxed max-w-xl mb-8">
              A national Zoom-based psychoeducation group for parents of teenagers — grounded in attachment science, practically focused, and capped at 12 participants so everyone gets heard.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://docs.google.com/forms/d/12Es-CQ6HNGHJ3WvG7a5XJKt8GHGJHaZ1Weodiy20KgI/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Join a Group
              </a>
              <a href="https://calendly.com/danieljahearn/30min" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Free 15-Min Consult
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Details bar */}
      <section className="bg-cream-900 py-6">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-6 md:gap-14">
            {[
              { label: 'Format', value: 'Zoom · National' },
              { label: 'Group Size', value: 'Capped at 12' },
              { label: 'Investment', value: '$60 per session' },
              { label: 'Who It\'s For', value: 'Parents of teens' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-xs uppercase tracking-widest text-cream-500 mb-1">{item.label}</p>
                <p className="text-cream-200 text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What this is */}
      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">What This Is</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-6">Psychoeducation meets peer support</h2>
          <p className="text-cream-700 leading-relaxed mb-5">
            These groups are for parents who are working hard and still feel like they're losing ground with their teenager. Every session is grounded in the attachment science behind adolescent behavior — why teens withdraw, why they push you away, what's actually driving the conflict — and focused on what you can do about it.
          </p>
          <p className="text-cream-700 leading-relaxed mb-5">
            This isn't therapy, and it isn't a support group in the traditional sense. It's structured psychoeducation with room for real conversation. You'll leave each session with a framework that makes your teenager's behavior more intelligible, and with practical tools you can use that week.
          </p>
          <p className="text-cream-700 leading-relaxed">
            Groups are capped at 12 participants so that every parent has room to be heard. We meet on Zoom, which means you can join from anywhere in the country.
          </p>
        </div>
      </section>

      {/* What we cover */}
      <section className="section-warm">
        <div className="container-main max-w-4xl">
          <p className="eyebrow">What We Cover</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-8">Topics include</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Why teenagers push their parents away — and what it signals',
              'The attachment science behind conflict, shutdown, and withdrawal',
              'How your own attachment history shows up in your parenting',
              'Regulation vs. co-regulation: what your teen actually needs',
              'How to stay present during ruptures without shutting down or escalating',
              'What repair looks like — and why most parents do it wrong',
              'The difference between attunement and approval',
              'Setting limits without damaging the relationship',
            ].map((topic) => (
              <div key={topic} className="flex gap-3 text-cream-700 text-sm bg-cream-50 border border-cream-300 rounded-lg p-4">
                <span className="text-cream-400 shrink-0 mt-0.5">—</span>
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is this right for you */}
      <section className="section-cream">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif text-cream-900 mb-6">This is a good fit if:</h2>
              <ul className="space-y-3">
                {[
                  'Your teenager is pulling away and you don\'t know why',
                  'Every conversation turns into a conflict or ends in shutdown',
                  'You\'re doing everything you can think of and nothing is working',
                  'You want to understand attachment science, not just get advice',
                  'You\'re willing to look at your own history as part of the picture',
                  'You want to be around other parents navigating similar things',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream-700 text-sm">
                    <span className="text-cream-400 shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-serif text-cream-900 mb-6">This is not the right fit if:</h2>
              <ul className="space-y-3">
                {[
                  'You\'re looking for a place to vent without wanting to grow',
                  'You want your teenager to be "fixed" without changing yourself',
                  'You\'re in acute crisis and need individual clinical support',
                  'You\'re looking for parenting tips and quick techniques',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream-700 text-sm">
                    <span className="text-cream-400 shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
              <p className="text-cream-600 text-sm mt-5 italic">
                If you need more individualized support, the{' '}
                <Link href="/services#family" className="text-cream-500 hover:text-cream-700 transition-colors">
                  Family & Teen Therapy
                </Link>{' '}
                option may be a better fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the facilitator */}
      <section className="section-warm">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">About the Facilitator</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-5">Who's leading these groups</h2>
          <p className="text-cream-700 leading-relaxed mb-4">
            Daniel J. Ahearn is an LMFT and one of six IAT-certified clinicians in the United States. He's Director of Culture at Ascend Healthcare, a residential treatment program for adolescents, and has spent over a decade in clinical work with teenagers and their families.
          </p>
          <p className="text-cream-700 leading-relaxed mb-4">
            He trained directly with Dr. Daniel P. Brown and Dr. David Elliott in the Three Pillars / Integrative Attachment Therapy framework, and is the author of <em>The Way Back Home: Healing Attachment Wounds With Your Teen</em>.
          </p>
          <p className="text-cream-700 leading-relaxed">
            These groups distill the same framework he uses in individual and family clinical work into a format accessible to any parent — regardless of whether they're in therapy themselves.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-200 py-14">
        <div className="container-main max-w-xl text-center">
          <h2 className="text-2xl font-serif text-cream-900 mb-4">Ready to join a group?</h2>
          <p className="text-cream-700 mb-7">Groups are capped at 12. Reach out to learn about the next available session.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://docs.google.com/forms/d/12Es-CQ6HNGHJ3WvG7a5XJKt8GHGJHaZ1Weodiy20KgI/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Join a Group
            </a>
            <a href="https://calendly.com/danieljahearn/30min" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Free Consult First
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
