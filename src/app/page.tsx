import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Daniel J. Ahearn, LMFT — Attachment Therapist in Los Angeles',
  description: 'Author of The Way Back Home — now on Audible. IAT-certified attachment therapist in Los Angeles working with men, fathers, teens, and families. One of six certified IAT clinicians in the U.S.',
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-200 py-20 md:py-28">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow">IAT-Certified · One of Six in the U.S.</p>
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-cream-900 leading-tight mb-5 text-balance">
                The teen years are your most powerful window for repair.
              </h1>
              <p className="text-cream-700 text-lg leading-relaxed mb-8 max-w-md">
                Working with parents, men, fathers, and families on the attachment wounds beneath the surface — grounded in over a decade of clinical work in Los Angeles.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://calendly.com/danieljahearn/30min" target="_blank" rel="noopener noreferrer" className="btn-primary plausible-event-name=Calendly+Click">
                  Free 15-Min Consult
                </a>
                <Link href="/about" className="btn-ghost">
                  Learn My Approach
                </Link>
              </div>
              <a
                href="https://waybackhome.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-sm text-cream-600 hover:text-cream-900 transition-colors plausible-event-name=App+Open"
              >
                Or try the free daily practice at waybackhome.app →
              </a>
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/daniel-hero.jpg"
                alt="Daniel J. Ahearn, LMFT"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credential bar */}
      <section className="bg-cream-900 py-5">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center">
            {[
              'LMFT',
              'IAT-Certified (One of 6 in the U.S.)',
              'Director of Culture, Ascend Healthcare',
              '12+ Years Clinical Experience',
            ].map((cred) => (
              <span key={cred} className="text-xs uppercase tracking-widest text-cream-400">{cred}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro copy */}
      <section className="section-cream">
        <div className="container-main max-w-3xl text-center">
          <p className="eyebrow">The Work</p>
          <h2 className="text-3xl md:text-4xl font-serif text-cream-900 mb-6">Most people I work with aren't broken — they're adapted.</h2>
          <p className="text-cream-700 text-base leading-relaxed mb-4">
            What looks like emotional unavailability, withdrawal, or conflict is almost always an attachment strategy that once made sense. The goal isn't to fix what's wrong with you. It's to repair the foundation underneath — so that security stops being something you perform and starts being something you feel.
          </p>
          <p className="text-cream-600 text-sm leading-relaxed">
            I work using Integrative Attachment Therapy (IAT) and the Ideal Parent Figure Protocol — a research-backed method developed by Dr. Daniel P. Brown and Dr. David Elliott, and now carried forward through IAT. I trained directly with Drs. Brown and Elliott and am one of six IAT-certified clinicians in the United States.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-warm">
        <div className="container-main">
          <p className="eyebrow text-center">Ways to Work Together</p>
          <h2 className="text-3xl font-serif text-cream-900 text-center mb-12">Find the right fit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Family & Teen Attachment Repair',
                description: 'For parents of adolescents navigating shutdown, conflict, or disconnection. Healing happens in the relationship — not just in the teen. $400 per session.',
                href: '/services#family',
                cta: 'Family Work',
              },
              {
                title: 'Parent Support Groups',
                description: 'National Zoom-based psychoeducation groups for parents of teens. Attachment-informed, practical, and capped at 12 participants. $60 per session.',
                href: '/parent-support-groups',
                cta: 'Join a Parent Group',
              },
              {
                title: 'Individual Therapy',
                description: 'One-on-one IAT work using the Three Pillars method, tailored to your specific attachment history and relational goals. $300 per session.',
                href: '/services',
                cta: 'Individual & Couples',
              },
            ].map((service) => (
              <div key={service.title} className="bg-cream-50 border border-cream-300 rounded-lg p-7 flex flex-col justify-between gap-5">
                <div>
                  <h3 className="font-serif text-xl text-cream-900 mb-3">{service.title}</h3>
                  <p className="text-cream-700 text-sm leading-relaxed">{service.description}</p>
                </div>
                <Link href={service.href} className="text-cream-500 text-sm font-medium hover:text-cream-700 transition-colors">
                  {service.cta} →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-cream-600 text-sm">
            <Link href="/mens-work" className="hover:text-cream-900 transition-colors">
              Also accepting applications for the next men&rsquo;s attachment repair cohort &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Book section */}
      <section className="section-cream">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative max-w-xs mx-auto md:mx-0">
              <Image
                src="/images/book-cover.jpg"
                alt="The Way Back Home: Healing Attachment Wounds With Your Teen"
                width={380}
                height={540}
                className="rounded shadow-md"
              />
            </div>
            <div>
              <p className="eyebrow">Now on Audible &middot; Paperback &middot; Kindle</p>
              <h2 className="text-3xl md:text-4xl font-serif text-cream-900 mb-4">
                The Way Back Home
              </h2>
              <p className="text-cream-600 text-sm italic mb-5">Healing Attachment Wounds With Your Teen</p>
              <p className="text-cream-700 leading-relaxed mb-4">
                A practical guide for parents navigating the hardest years of the parent-child relationship — grounded in the same IAT framework at the center of my clinical practice.
              </p>
              <p className="text-cream-700 leading-relaxed mb-7">
                If your teenager is pulling away, shutting down, or pushing you out — this book explains why, and what to do about it.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.amazon.com/Way-Back-Home-Healing-Attachment-ebook/dp/B0GLF2JH8T?ref_=ast_author_mpb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary plausible-event-name=Book+Amazon"
                >
                  Buy on Amazon
                </a>
                <Link href="/the-way-back-home" className="btn-ghost">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured writing — Lion's Roar */}
      <section className="bg-cream-100 py-16">
        <div className="container-main max-w-4xl">
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-8">
            <div>
              <p className="eyebrow">Featured in <em>Lion&rsquo;s Roar</em></p>
              <h2 className="text-2xl md:text-3xl font-serif text-cream-900">Selected essays</h2>
            </div>
            <Link href="/writing" className="text-sm text-cream-600 hover:text-cream-900 transition-colors">
              All writing &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Parenting Teens with Presence',
                dek: 'Five ways to support and connect with your teenage children.',
                href: 'https://www.lionsroar.com/parenting-teens-with-presence/',
              },
              {
                title: 'How to Be Honest With Yourself',
                dek: 'False positivity erodes truth and intimacy. A path toward honesty.',
                href: 'https://www.lionsroar.com/when-resilience-becomes-repression/',
              },
              {
                title: 'The Nine Breaths of Purification',
                dek: 'A short Bön practice to clear the mind and reconnect with the body.',
                href: 'https://www.lionsroar.com/let-the-nine-breaths-of-purification-clear-your-mind-and-open-your-heart/',
              },
            ].map((a) => (
              <a
                key={a.href}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-cream-50 border border-cream-300 rounded-lg p-6 flex flex-col justify-between gap-4 hover:border-cream-500 transition-colors"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-cream-500 mb-2">Lion&rsquo;s Roar</p>
                  <h3 className="font-serif text-lg text-cream-900 mb-2 leading-snug">{a.title}</h3>
                  <p className="text-cream-700 text-sm leading-relaxed">{a.dek}</p>
                </div>
                <span className="text-cream-500 text-sm font-medium group-hover:text-cream-700 transition-colors">
                  Read essay &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Endorsement */}
      <section className="bg-cream-800 py-14">
        <div className="container-main max-w-3xl text-center">
          <p className="font-serif italic text-cream-200 text-xl md:text-2xl leading-relaxed mb-6">
            "Daniel Ahearn has done something rare — he has translated a sophisticated clinical model into language that parents can actually use."
          </p>
          <p className="text-cream-400 text-sm">— Dr. David Elliott, PhD · Co-developer, Integrative Attachment Therapy</p>
        </div>
      </section>

      {/* Consulting CTA */}
      <section className="section-warm">
        <div className="container-main max-w-3xl text-center">
          <p className="eyebrow">Organizational Consulting</p>
          <h2 className="text-2xl font-serif text-cream-900 mb-4">Working with treatment organizations and clinical teams</h2>
          <p className="text-cream-700 leading-relaxed mb-7">
            I consult with residential treatment programs and clinical teams on attachment-informed culture, staff retention, and therapeutic programming. Drawing on my role as Director of Culture at Ascend Healthcare and a decade in adolescent residential treatment.
          </p>
          <Link href="/consulting" className="btn-primary">Organizations & Teams</Link>
        </div>
      </section>

    </>
  )
}
