import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Speaking, Training & Consulting',
  description: 'Speaking, clinical team training, and organizational consulting on attachment, regulation, and culture — for treatment programs and clinical teams.',
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

      {/* Who this is for */}
      <section className="section-warm">
        <div className="container-main max-w-4xl">
          <p className="eyebrow">Who This Is For</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-8">Built for organizations doing serious work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                label: 'Residential & Outpatient Treatment Programs',
                body: 'Clinical directors and executive teams building attachment-informed culture across multi-site facilities.',
              },
              {
                label: 'Clinical Training Programs',
                body: 'Graduate programs, supervision cohorts, and professional development teams deepening their understanding of attachment theory in practice.',
              },
              {
                label: 'Corporate & Healthcare HR Teams',
                body: 'People leaders who want to build teams capable of emotional regulation, secure communication, and sustainable performance.',
              },
              {
                label: 'Podcast Hosts & Media',
                body: 'Booking Daniel to discuss attachment science, teen mental health, and the synthesis of meditation and emotional regulation with a broad audience.',
              },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-cream-400 pl-6">
                <h3 className="font-serif text-lg text-cream-900 mb-2">{item.label}</h3>
                <p className="text-cream-700 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking */}
      <section id="speaking" className="section-cream scroll-mt-20">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <p className="eyebrow">01</p>
              <h2 className="text-3xl font-serif text-cream-900 mb-3">Keynote & Conference Speaking</h2>
              <p className="text-cream-600 italic text-sm mb-6">National speaker on attachment, meditation, and team emotional regulation</p>

              <p className="text-cream-700 leading-relaxed mb-5">
                Daniel has spoken nationally on attachment science — including the synthesis of contemplative practice and evidence-based emotional regulation. Drawing on both clinical expertise and direct experience building culture inside mental health organizations, his talks are grounded, practical, and designed to change how teams understand connection.
              </p>

              <h3 className="font-serif text-lg text-cream-900 mb-4">Signature Topics</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Attachment Science for Clinicians — the neurobiology of safety and how it applies to therapeutic relationships',
                  'The Synthesis of Meditation and Emotional Regulation — how contemplative practice builds nervous system capacity in clinical teams',
                  'Building Secure Teams — applying attachment principles to staff culture, retention, and burnout prevention',
                  'Teen Mental Health & the Family System — what families and organizations need to understand about adolescent attachment',
                  'The Director of Culture Role — a model for embedding emotional intelligence into organizational structure',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream-700 text-sm">
                    <span className="text-cream-400 shrink-0 mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>

              <a
                href="mailto:danieljahearn@gmail.com?subject=Consult%20with%20Your%20Team"
                className="btn-primary"
              >
                Inquire About Speaking
              </a>
            </div>

            <div className="bg-cream-900 rounded-lg p-7 text-cream-200 self-start">
              <p className="text-xs uppercase tracking-widest text-cream-500 mb-4">Formats</p>
              <div className="space-y-3 text-sm text-cream-400">
                <p>Keynote (60–90 min)</p>
                <p>Half-day workshop</p>
                <p>Conference breakout</p>
                <p>Grand rounds / clinical in-service</p>
                <p>Virtual or in-person</p>
              </div>
              <div className="border-t border-cream-700 mt-6 pt-5">
                <p className="text-cream-400 text-xs leading-relaxed">Contact to discuss availability, travel, and format. Custom talks developed for your audience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Building & Emotional Regulation */}
      <section id="team-training" className="section-warm scroll-mt-20">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <p className="eyebrow">02</p>
              <h2 className="text-3xl font-serif text-cream-900 mb-3">Team Emotional Regulation Training</h2>
              <p className="text-cream-600 italic text-sm mb-6">For clinical and organizational teams who need more than a wellness day</p>

              <p className="text-cream-700 leading-relaxed mb-5">
                Burnout in mental health organizations isn't a time management problem. It's an attachment and regulation problem — staff who lack the nervous system tools to stay present with chronic distress without shutting down or burning out.
              </p>
              <p className="text-cream-700 leading-relaxed mb-5">
                This training builds practical emotional regulation capacity in teams using the same principles Daniel applied as Director of Culture across multiple residential and outpatient facilities. Grounded in attachment theory, somatic awareness, and the synthesis of contemplative practice.
              </p>

              <h3 className="font-serif text-lg text-cream-900 mb-4">What teams develop</h3>
              <ul className="space-y-2 mb-8">
                {[
                  'Individual nervous system awareness and co-regulation skills',
                  'Secure communication under stress',
                  'Attachment-informed supervision and team structure',
                  'Sustainable presence with clients experiencing acute distress',
                  'Organizational culture that supports regulation — not just manages it',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream-700 text-sm">
                    <span className="text-cream-400 shrink-0 mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>

              <a
                href="mailto:danieljahearn@gmail.com?subject=Consult%20with%20Your%20Team"
                className="btn-primary"
              >
                Inquire About Team Training
              </a>
            </div>

            <div className="bg-cream-900 rounded-lg p-7 text-cream-200 self-start">
              <p className="text-xs uppercase tracking-widest text-cream-500 mb-4">Formats</p>
              <div className="space-y-3 text-sm text-cream-400">
                <p>Single-day intensive</p>
                <p>Multi-session series (4–8 weeks)</p>
                <p>Ongoing consultation</p>
                <p>Virtual or on-site</p>
              </div>
              <div className="border-t border-cream-700 mt-6 pt-5">
                <p className="text-cream-400 text-xs leading-relaxed">Tailored for clinical teams, executive leadership, or full staff. Pricing based on scope and group size.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Consulting / Ascend background */}
      <section id="consulting" className="section-cream scroll-mt-20">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <p className="eyebrow">03</p>
              <h2 className="text-3xl font-serif text-cream-900 mb-3">Organizational Culture Consulting</h2>
              <p className="text-cream-600 italic text-sm mb-6">For treatment organizations building culture from the inside</p>

              <p className="text-cream-700 leading-relaxed mb-5">
                As Director of Culture at Ascend Healthcare, Daniel built and oversaw mental health programming across 4–10 residential and outpatient facilities — developing the clinical culture, therapeutic programming, and staff training infrastructure that shapes how care is delivered at scale.
              </p>
              <p className="text-cream-700 leading-relaxed mb-5">
                This consulting work is for clinical directors, executive teams, and founders who want an outside perspective from someone who has built from the inside: how attachment principles translate into hiring, supervision, programming, and the lived experience of working in a mental health organization.
              </p>

              <h3 className="font-serif text-lg text-cream-900 mb-4">Areas of focus</h3>
              <ul className="space-y-2 mb-8">
                {[
                  'Attachment-informed clinical culture design',
                  'Therapeutic programming development (residential & outpatient)',
                  'Staff supervision structures that support secure functioning',
                  'Clinical director and leadership coaching',
                  'Family systems integration into residential programming',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream-700 text-sm">
                    <span className="text-cream-400 shrink-0 mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>

              <a
                href="mailto:danieljahearn@gmail.com?subject=Consult%20with%20Your%20Team"
                className="btn-primary"
              >
                Start a Conversation
              </a>
            </div>

            <div className="bg-cream-900 rounded-lg p-7 text-cream-200 self-start">
              <p className="text-xs uppercase tracking-widest text-cream-500 mb-4">Background</p>
              <div className="space-y-3 text-sm text-cream-400">
                <p>Director of Culture, Ascend Healthcare</p>
                <p>4–10 facilities under tenure</p>
                <p>10+ years adolescent residential treatment</p>
                <p>IAT-Certified, LMFT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast booking */}
      <section id="podcast" className="section-warm scroll-mt-20">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <p className="eyebrow">04</p>
              <h2 className="text-3xl font-serif text-cream-900 mb-3">Podcast & Media</h2>
              <p className="text-cream-600 italic text-sm mb-6">Available to discuss attachment, teen mental health, and contemplative practice</p>

              <p className="text-cream-700 leading-relaxed mb-5">
                Daniel is available for podcast interviews and media appearances on attachment theory, adolescent mental health, the synthesis of meditation and emotional regulation, and the intersection of clinical practice with organizational culture.
              </p>

              <h3 className="font-serif text-lg text-cream-900 mb-4">What Daniel brings to a conversation</h3>
              <ul className="space-y-2 mb-8">
                {[
                  'Attachment theory made accessible — without losing clinical depth',
                  'The synthesis of contemplative practice and nervous system science',
                  'A decade working in adolescent residential treatment',
                  'National speaking experience and a published book',
                  'Direct, story-driven communication style',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream-700 text-sm">
                    <span className="text-cream-400 shrink-0 mt-0.5">—</span>{item}
                  </li>
                ))}
              </ul>

              <a
                href="mailto:danieljahearn@gmail.com?subject=Podcast%20Booking%20Inquiry"
                className="btn-primary"
              >
                Book Daniel for Your Podcast
              </a>
            </div>

            <div className="bg-cream-900 rounded-lg p-7 text-cream-200 self-start">
              <p className="text-xs uppercase tracking-widest text-cream-500 mb-4">Topics</p>
              <div className="space-y-3 text-sm text-cream-400">
                <p>Attachment & teen mental health</p>
                <p>Meditation + emotional regulation</p>
                <p>The Way Back Home (book)</p>
                <p>Men, fathers & attachment</p>
                <p>Building mental health culture</p>
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

      {/* CTA */}
      <section className="section-cream">
        <div className="container-main max-w-2xl text-center">
          <p className="eyebrow">Get in Touch</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-5">Ready to bring this work to your team?</h2>
          <p className="text-cream-700 leading-relaxed mb-8">
            Reach out with details about your organization, what you're building, and what you need. All inquiries are responded to directly.
          </p>
          <a
            href="mailto:danieljahearn@gmail.com?subject=Consult%20with%20Your%20Team"
            className="btn-primary text-base px-8 py-4"
          >
            Consult with Your Team →
          </a>
          <p className="text-cream-500 text-xs mt-4">Email opens with subject: "Consult with Your Team" · or call 213-290-1146</p>
        </div>
      </section>
    </>
  )
}
