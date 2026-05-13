import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Writing — Daniel J. Ahearn, LMFT',
  description: 'Essays and articles by Daniel J. Ahearn, LMFT on attachment, honesty, and parenting teens — published in Lion’s Roar and on Substack.',
}

const articles = [
  {
    title: 'Parenting Teens with Presence',
    outlet: 'Lion’s Roar',
    dek: 'Five ways to support and connect with your teenage children — written for parents navigating the years when the relationship feels most fragile.',
    href: 'https://www.lionsroar.com/parenting-teens-with-presence/',
  },
  {
    title: 'How to Be Honest With Yourself',
    outlet: 'Lion’s Roar',
    dek: 'False positivity erodes truth and intimacy. A path toward the kind of honesty that makes real closeness possible.',
    href: 'https://www.lionsroar.com/when-resilience-becomes-repression/',
  },
  {
    title: 'Let the “Nine Breaths of Purification” Clear Your Mind and Open Your Heart',
    outlet: 'Lion’s Roar',
    dek: 'A short Bön practice: a way to clear what weighs us down, to reconnect with the body, and to remember that every breath offers a chance to begin again.',
    href: 'https://www.lionsroar.com/let-the-nine-breaths-of-purification-clear-your-mind-and-open-your-heart/',
  },
]

export default function Writing() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-200 py-20 md:py-24">
        <div className="container-main max-w-3xl text-center">
          <p className="eyebrow">Writing</p>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-cream-900 leading-tight mb-5 text-balance">
            Essays on attachment, honesty, and parenting teens
          </h1>
          <p className="text-cream-700 text-lg leading-relaxed max-w-xl mx-auto">
            Published writing on the questions I keep returning to in the therapy room — and at home.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">Featured in <em>Lion&rsquo;s Roar</em></p>
          <h2 className="text-2xl md:text-3xl font-serif text-cream-900 mb-10">Selected essays</h2>
          <div className="flex flex-col gap-8">
            {articles.map((a) => (
              <a
                key={a.href}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-cream-300 pb-8 last:border-b-0"
              >
                <p className="text-xs uppercase tracking-widest text-cream-500 mb-2">{a.outlet}</p>
                <h3 className="font-serif text-xl md:text-2xl text-cream-900 group-hover:text-cream-700 transition-colors mb-3">
                  {a.title}
                </h3>
                <p className="text-cream-700 text-base leading-relaxed mb-3">{a.dek}</p>
                <span className="text-sm text-cream-500 group-hover:text-cream-700 transition-colors">
                  Read on Lion&rsquo;s Roar &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Substack */}
      <section className="section-warm">
        <div className="container-main max-w-2xl text-center">
          <p className="eyebrow">Newsletter</p>
          <h2 className="text-2xl md:text-3xl font-serif text-cream-900 mb-5">Notes on the work, in your inbox</h2>
          <p className="text-cream-700 leading-relaxed mb-7">
            Occasional essays on attachment, parenting teens, and the practice of staying connected when it&rsquo;s hardest. A few emails a year. No spam.
          </p>
          <a
            href="https://substack.com/@danieljahearnlmft"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Read on Substack
          </a>
        </div>
      </section>

      {/* Book CTA */}
      <section className="bg-cream-200 py-16">
        <div className="container-main max-w-xl text-center">
          <p className="eyebrow">The Book</p>
          <h2 className="text-2xl font-serif text-cream-900 mb-4">The Way Back Home</h2>
          <p className="text-cream-600 text-sm italic mb-4">Healing Attachment Wounds With Your Teen</p>
          <p className="text-cream-700 mb-7">
            A practical guide for parents navigating the hardest years of the parent&ndash;child relationship.
          </p>
          <Link href="/the-way-back-home" className="btn-primary">Learn More</Link>
        </div>
      </section>
    </>
  )
}
