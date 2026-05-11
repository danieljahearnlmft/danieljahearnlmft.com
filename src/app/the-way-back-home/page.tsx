import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Way Back Home',
  description: 'The new book by Daniel J. Ahearn, LMFT — a practical guide for parents healing attachment wounds and rebuilding connection with their teen.',
  openGraph: {
    images: [{ url: '/images/book-cover.jpg', alt: 'The Way Back Home — book cover' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/book-cover.jpg'],
  },
}

export default function Book() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-200 py-16 md:py-24">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow">Now Available</p>
              <h1 className="text-4xl md:text-5xl font-serif text-cream-900 leading-tight mb-3">
                The Way Back Home
              </h1>
              <p className="font-serif italic text-cream-600 text-lg mb-6">
                Healing Attachment Wounds With Your Teen
              </p>
              <p className="text-cream-700 leading-relaxed mb-4">
                If your teenager is shutting down, pulling away, or in constant conflict — this book explains the attachment science behind it, and what you can actually do about it.
              </p>
              <p className="text-cream-700 leading-relaxed mb-8">
                Written for parents who are doing everything right and still feel miles away from their kid. Grounded in the same IAT framework at the center of my clinical practice.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="https://www.amazon.com/Way-Back-Home-Healing-Attachment-ebook/dp/B0GLF2JH8T?ref_=ast_author_mpb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Buy on Amazon
                </a>
                <a
                  href="https://daniel-j-ahearn-lmft.kit.com/b676813fd3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Free Chapter + Guide
                </a>
              </div>
              <p className="text-cream-500 text-xs">Available in paperback · Kindle · Audiobook</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <a
                href="https://www.amazon.com/Way-Back-Home-Healing-Attachment-ebook/dp/B0GLF2JH8T?ref_=ast_author_mpb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/book-cover.jpg"
                  alt="The Way Back Home by Daniel J. Ahearn"
                  width={380}
                  height={540}
                  className="rounded shadow-lg hover:opacity-90 transition-opacity"
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Endorsement */}
      <section className="bg-cream-800 py-12">
        <div className="container-main max-w-3xl text-center">
          <p className="font-serif italic text-cream-200 text-xl leading-relaxed mb-5">
            "Daniel Ahearn has done something rare — he has translated a sophisticated clinical model into language that parents can actually use."
          </p>
          <p className="text-cream-400 text-sm">— Dr. David Elliott, PhD · Co-developer, Integrative Attachment Therapy</p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-cream">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="eyebrow">Who This Book Is For</p>
              <h2 className="text-3xl font-serif text-cream-900 mb-6">You might recognize yourself here</h2>
              <ul className="space-y-3">
                {[
                  `Your teenager has pulled away and you don't know why`,
                  'Every conversation turns into a conflict',
                  `You're grieving the relationship you used to have`,
                  `You've tried therapy, boundaries, consequences — nothing sticks`,
                  'You suspect your own history is part of the problem',
                  'You want to repair things before they get worse',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream-700 text-sm leading-relaxed">
                    <span className="text-cream-400 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">What You'll Get</p>
              <h2 className="text-3xl font-serif text-cream-900 mb-6">What the book covers</h2>
              <ul className="space-y-3">
                {[
                  'The attachment science behind adolescent withdrawal and conflict',
                  'How your own attachment history shows up in parenting',
                  'The Ideal Parent Figure framework adapted for families',
                  'Practical repair strategies for ruptures, shutdown, and distance',
                  'How to stay present when activated — without performing calm',
                  'A framework for rebuilding earned security with your teen',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream-700 text-sm leading-relaxed">
                    <span className="text-cream-400 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About the author */}
      <section className="section-warm">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">About the Author</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-5">Written from clinical practice</h2>
          <p className="text-cream-700 leading-relaxed mb-4">
            Daniel J. Ahearn is an LMFT and one of six IAT-certified clinicians in the United States. He is Director of Culture at Ascend Healthcare, a residential treatment program for adolescents in Los Angeles, and maintains a private practice specializing in men's attachment work, father-teen repair, and family systems.
          </p>
          <p className="text-cream-700 leading-relaxed mb-7">
            He trained directly with Dr. Daniel P. Brown and Dr. David Elliott in the Three Pillars / IAT framework. The Way Back Home distills over a decade of clinical work with teenagers and their parents into a framework any family can use.
          </p>
          <Link href="/about" className="text-cream-500 text-sm font-medium hover:text-cream-700 transition-colors">
            Read more about Daniel →
          </Link>
        </div>
      </section>

      {/* Companion App */}
      <section className="bg-cream-900 py-14">
        <div className="container-main max-w-3xl text-center">
          <p className="eyebrow text-cream-500">Companion App</p>
          <h2 className="text-2xl font-serif text-cream-100 mb-4">The Way Back Home App</h2>
          <p className="text-cream-400 leading-relaxed mb-7">
            A progressive web app companion to the book with guided visualizations, reflection prompts, and tools to support your practice between sessions. Available now at waybackhome.app.
          </p>
          <a
            href="https://waybackhome.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !bg-cream-500 hover:!bg-cream-400"
          >
            Open the App
          </a>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-cream-200 py-14">
        <div className="container-main max-w-xl text-center">
          <p className="eyebrow">Free Resource</p>
          <h2 className="text-2xl font-serif text-cream-900 mb-4">
            Why Your Teen Is Pushing You Away
          </h2>
          <p className="text-cream-700 mb-7">
            A free guide that introduces the Integrative Attachment Therapy framework and what's driving adolescent withdrawal — drawn directly from the book.
          </p>
          <a
            href="https://daniel-j-ahearn-lmft.kit.com/b676813fd3"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Download Free Guide
          </a>
        </div>
      </section>
    </>
  )
}
