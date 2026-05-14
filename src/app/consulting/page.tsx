import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Speaking, Training & Consulting',
  description: 'Speaking, clinical team training, and organizational consulting on attachment, regulation, and culture — for treatment programs, clinical teams, and media.',
  openGraph: {
    images: [{ url: '/images/consulting-hero.jpg', alt: 'Speaking, Team Training & Organizational Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/consulting-hero.jpg'],
  },
}

export default function Consulting() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <Image
          src="/images/consulting-hero.jpg"
          alt="Mountain summit with Tibetan prayer flags at sunset"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-cream-900/60" />
        <div className="absolute inset-0 flex items-end pb-14 md:pb-20">
          <div className="container-main">
            <p className="text-xs uppercase tracking-widest text-cream-300 mb-4">Organizations & Teams</p>
            <h1 className="text-4xl md:text-5xl font-serif text-cream-50 leading-tight max-w-2xl mb-5">
              Bringing attachment intelligence<br />into your organization
            </h1>
            <p className="text-cream-300 text-base leading-relaxed max-w-xl">
              Speaking, clinical team training, and culture consulting — grounded in a decade of building mental health organizations from the inside.
            </p>
          </div>
        </div>
      </section>

      {/* Speaking & Media */}
      <section id="speaking" className="section-cream scroll-mt-20">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <p className="eyebrow">01</p>
              <h2 className="text-3xl font-serif text-cream-900 mb-3">Speaking & Media</h2>
              <p className="text-cream-600 italic text-sm mb-6">Keynotes, conference talks, podcasts, and media on attachment, contemplative practice, and team emotional regulation</p>

              <p className="text-cream-700 leading-relaxed mb-5">
                Daniel speaks nationally on attachment science, adolescent mental health, and the synthesis of contemplative practice with nervous system regulation. He brings clinical depth, direct experience building culture inside mental health organizations, and a story-driven style developed over a decade of work with teens and families.
              </p>

              <h3 className="font-serif text-lg text-cream-900 mb-4">Signature topics</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Attachment Science for Clinicians — the neurobiology of safety and how it applies to therapeutic relationships',
                  'The Synthesis of Meditation and Emotional Regulation — how contemplative practice builds nervous system capacity',
                  'Building Secure Teams — applying attachment principles to staff culture, retention, and burnout',
                  'Teen Mental Health & the Family System — what families and organizations need to understand about adolescent attachment',
                  'Men, Fathers & Attachment — the underrepresented clinical territory at the heart of family repair',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream-700 text-sm">
                    <span className="text-cream-400 shrink-0 mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>

              <a
                href="mailto:daniel@danieljahearnlmft.com?subject=Speaking%20%2F%20Media%20Inquiry"
                className="btn-primary plausible-event-name=Inquiry+Speaking"
              >
                Get in touch about speaking
              </a>
            </div>

            <div className="bg-cream-900 rounded-lg p-7 text-cream-200 self-start">
              <p className="text-xs uppercase tracking-widest text-cream-500 mb-4">Formats</p>
              <div className="space-y-3 text-sm text-cream-400">
                <p>Keynote (60–90 min)</p>
                <p>Conference breakout</p>
                <p>Half-day workshop</p>
                <p>Grand rounds / clinical in-service</p>
                <p>Podcast & media appearance</p>
                <p>Virtual or in-person</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams & Organizations */}
      <section id="teams" className="section-warm scroll-mt-20">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <p className="eyebrow">02</p>
              <h2 className="text-3xl font-serif text-cream-900 mb-3">Teams & Organizations</h2>
              <p className="text-cream-600 italic text-sm mb-6">Clinical team training and culture consulting for treatment programs, clinical leadership, and HR</p>

              <p className="text-cream-700 leading-relaxed mb-5">
                Burnout in mental health organizations isn&rsquo;t a time management problem — it&rsquo;s an attachment and regulation problem. As Director of Culture at Ascend Healthcare, Daniel built and oversaw clinical programming across 4–10 residential and outpatient facilities, developing the staff training and supervision infrastructure that shapes how care is delivered at scale.
              </p>
              <p className="text-cream-700 leading-relaxed mb-5">
                This work is for clinical directors, executive teams, and graduate training programs who want an outside perspective from someone who has built from the inside.
              </p>

              <h3 className="font-serif text-lg text-cream-900 mb-4">Areas of focus</h3>
              <ul className="space-y-2 mb-8">
                {[
                  'Attachment-informed clinical culture design',
                  'Therapeutic programming for residential and outpatient settings',
                  'Staff supervision structures that support secure functioning',
                  'Team emotional regulation and co-regulation skills',
                  'Clinical director and leadership coaching',
                  'Family systems integration into residential programming',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream-700 text-sm">
                    <span className="text-cream-400 shrink-0 mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>

              <a
                href="mailto:daniel@danieljahearnlmft.com?subject=Consult%20with%20Your%20Team"
                className="btn-primary plausible-event-name=Inquiry+TeamTraining"
              >
                Get in touch about your team
              </a>
            </div>

            <div className="bg-cream-900 rounded-lg p-7 text-cream-200 self-start">
              <p className="text-xs uppercase tracking-widest text-cream-500 mb-4">Formats</p>
              <div className="space-y-3 text-sm text-cream-400">
                <p>Single-day intensive</p>
                <p>Multi-session series (4–8 weeks)</p>
                <p>Ongoing leadership consultation</p>
                <p>Grand rounds / clinical in-service</p>
                <p>Virtual or on-site</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials bar */}
      <section className="bg-cream-800 py-12">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { stat: 'LMFT', label: 'Licensed & Certified' },
              { stat: 'IAT', label: 'One of 6 Certified in the U.S.' },
              { stat: '10+ Years', label: 'Adolescent Residential Treatment' },
              { stat: '4–10', label: 'Facilities as Director of Culture' },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-serif text-cream-200 text-xl mb-1">{item.stat}</p>
                <p className="text-xs uppercase tracking-widest text-cream-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
