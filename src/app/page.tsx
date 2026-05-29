import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Daniel J. Ahearn, LMFT: Attachment Therapist in Los Angeles',
  description: 'IAT-certified attachment therapist in Los Angeles. Author of The Way Back Home. Working with men, fathers, teens, and families; trained directly with Dr. Daniel P. Brown and Dr. David Elliott.',
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-200 py-20 md:py-28">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow">IAT-Certified Attachment Therapist</p>
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-cream-900 leading-tight mb-5 text-balance">
                The teen years are your most powerful window for repair.
              </h1>
              <p className="text-cream-700 text-lg leading-relaxed mb-8 max-w-md">
                I help fathers and parents repair attachment with their teenagers. The work reaches the wounds beneath the conflict; it&rsquo;s grounded in over a decade of clinical practice in Los Angeles.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://calendly.com/danieljahearn/30min" target="_blank" rel="noopener noreferrer" className="btn-primary plausible-event-name=Calendly+Click">
                  Free 15-Min Consult
                </a>
                <a href="https://waybackhome.app" target="_blank" rel="noopener noreferrer" className="btn-ghost plausible-event-name=App+Open">
                  Try the Daily Practice
                </a>
              </div>
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
              'IAT-Certified',
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
          <h2 className="text-3xl md:text-4xl font-serif text-cream-900 mb-6">Most people I work with aren't broken. They're adapted.</h2>
          <p className="text-cream-700 text-base leading-relaxed mb-4">
            What looks like emotional unavailability, withdrawal, or conflict is almost always an attachment strategy that once made sense. The goal isn't to fix what's wrong with you. It's to repair the foundation underneath: so that security stops being something you perform and starts being something you feel.
          </p>
          <p className="text-cream-600 text-sm leading-relaxed">
            I work using Integrative Attachment Therapy (IAT) and the Ideal Parent Figure Protocol: a research-backed method developed by Dr. Daniel P. Brown and Dr. David Elliott, and now carried forward through IAT. I trained directly with Drs. Brown and Elliott and bring the full Three Pillars framework to private practice.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-warm">
        <div className="container-main">
          <p className="eyebrow text-center">Ways to Work Together</p>
          <h2 className="text-3xl font-serif text-cream-900 text-center mb-12">Find the right fit</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-cream-50 border border-cream-300 rounded-lg p-7 flex flex-col justify-between gap-5">
              <div>
                <h3 className="font-serif text-xl text-cream-900 mb-3">Individual Therapy for Men &amp; Fathers</h3>
                <p className="text-cream-700 text-sm leading-relaxed">
                  One-on-one IAT work for men carrying old attachment patterns into their relationships and their parenting. The Three Pillars method, tailored to your history and what you want to change.
                </p>
              </div>
              <a href="https://calendly.com/danieljahearn/30min" target="_blank" rel="noopener noreferrer" className="text-cream-500 text-sm font-medium hover:text-cream-700 transition-colors plausible-event-name=Calendly+Click">
                Start with a free 15-min consult &rarr;
              </a>
            </div>
            <div className="bg-cream-50 border border-cream-300 rounded-lg p-7 flex flex-col justify-between gap-5">
              <div>
                <h3 className="font-serif text-xl text-cream-900 mb-3">Parent Support Groups</h3>
                <p className="text-cream-700 text-sm leading-relaxed">
                  National, Zoom-based groups for parents of teens. Attachment-informed, practical, capped at 12. $60 per session.
                </p>
              </div>
              <Link href="/parent-support-groups" className="text-cream-500 text-sm font-medium hover:text-cream-700 transition-colors">
                Join a group &rarr;
              </Link>
            </div>
          </div>
          <p className="text-center mt-8 text-cream-600 text-sm">
            Couples and family work also available.{' '}
            <Link href="/services" className="underline decoration-cream-300 underline-offset-4 hover:text-cream-900 hover:decoration-cream-700 transition-colors">
              See all services &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Companion app */}
      <section className="bg-cream-800 py-16 md:py-20">
        <div className="container-main max-w-3xl text-center">
          <p className="eyebrow text-cream-400">Daily Practice</p>
          <h2 className="text-3xl md:text-4xl font-serif text-cream-100 mb-5">waybackhome.app</h2>
          <p className="text-cream-300 leading-relaxed mb-7 max-w-xl mx-auto">
            A free daily practice for parents of teens. The five conditions of secure attachment, distilled into a short morning ritual. Use it on its own or alongside the book.
          </p>
          <a
            href="https://waybackhome.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !bg-cream-500 hover:!bg-cream-400 plausible-event-name=App+Open"
          >
            Open the App
          </a>
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
                A practical guide for parents navigating the hardest years of the parent-child relationship, grounded in the same IAT framework at the center of my clinical practice.
              </p>
              <p className="text-cream-700 leading-relaxed mb-7">
                If your teenager is pulling away, shutting down, or pushing you out, this book explains why, and what to do about it.
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

      {/* Featured writing: Lion's Roar */}
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
            "Daniel Ahearn has done something rare. He has translated a sophisticated clinical model into language that parents can actually use."
          </p>
          <p className="text-cream-400 text-sm">Dr. David Elliott, PhD · Co-developer, Integrative Attachment Therapy</p>
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
