import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Individual, Couples & Family Therapy',
  description: 'IAT-based individual therapy, couples attachment repair, and family & teen work with Daniel J. Ahearn, LMFT in Los Angeles. Telehealth throughout California.',
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <Image
          src="/images/services-hero.jpg"
          alt="Individual, Couples & Family Therapy"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-cream-900/60" />
        <div className="absolute inset-0 flex items-end pb-14 md:pb-20">
          <div className="container-main">
            <p className="text-xs uppercase tracking-widest text-cream-300 mb-4">Services</p>
            <h1 className="text-4xl md:text-5xl font-serif text-cream-50 leading-tight max-w-2xl mb-5">
              Individual, Couples<br />& Family Therapy
            </h1>
            <p className="text-cream-300 text-base leading-relaxed max-w-xl mb-8">
              All work is grounded in Integrative Attachment Therapy and the Ideal Parent Figure Protocol — tailored to your specific attachment history, current struggles, and relational goals.
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
        </div>
      </section>

      {/* Individual */}
      <section id="individual" className="section-cream scroll-mt-20">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <p className="eyebrow">01</p>
              <h2 className="text-3xl font-serif text-cream-900 mb-5">Individual IAT Therapy</h2>
              <p className="text-cream-600 italic mb-5">Deep, personalized attachment repair</p>
              <p className="text-cream-700 leading-relaxed mb-4">
                One-on-one work using the Three Pillars method including the Ideal Parent Figure Protocol — tailored to your specific attachment history, current struggles, and relational goals.
              </p>
              <h3 className="font-serif text-lg text-cream-900 mt-7 mb-4">Who this is for</h3>
              <ul className="space-y-2 mb-6">
                {[
                  'Anyone with insecure attachment (dismissive, anxious, disorganized)',
                  'People healing from developmental trauma or neglect',
                  'Those who need more privacy or customization than group offers',
                  'Clients working through specific relational patterns or wounds',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream-700 text-sm">
                    <span className="text-cream-400 shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
              <h3 className="font-serif text-lg text-cream-900 mb-4">What we do</h3>
              <ul className="space-y-2 mb-7">
                {[
                  'Comprehensive attachment assessment',
                  'Systematic work through developmental stages using IPF',
                  'Integration with current relationship challenges',
                  'Nervous system regulation and somatic work',
                  'Differentiation from family of origin patterns',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream-700 text-sm">
                    <span className="text-cream-400 shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
              {/* TODO: shorten to forms.gle URL — Daniel to provide */}
              <a
                href="https://docs.google.com/forms/d/1x0c4OYQrKwBeJrydlyAY6FxxbuIjvUESfTkIiKWQFHc/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Apply for Individual Therapy
              </a>
            </div>
            <div className="bg-cream-900 rounded-lg p-7 text-cream-200 self-start">
              <p className="text-xs uppercase tracking-widest text-cream-500 mb-4">Format</p>
              <div className="space-y-3 text-sm text-cream-400">
                <p>50-minute sessions</p>
                <p>Weekly or bi-weekly (weekly recommended)</p>
                <p>Minimum 3–6 month commitment</p>
                <p>Telehealth throughout California</p>
              </div>
              <div className="border-t border-cream-700 mt-6 pt-5">
                <p className="text-cream-100 font-medium text-base">$300 / session</p>
                <p className="text-cream-500 text-xs mt-1">Out-of-network · Superbills available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family & Teen */}
      <section id="family" className="section-warm scroll-mt-20">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <p className="eyebrow">02</p>
              <h2 className="text-3xl font-serif text-cream-900 mb-5">Family & Teen Attachment Repair</h2>
              <p className="text-cream-600 italic mb-5">Parent-teen attachment healing through family systems work</p>
              <p className="text-cream-700 leading-relaxed mb-4">
                I help families where adolescents are shutting down emotionally, struggling with identity, or stuck in conflict patterns. This work addresses the attachment wounds underneath behaviors like anxiety, withdrawal, or acting out.
              </p>
              <p className="text-cream-700 leading-relaxed mb-4">
                Through my weekly attachment repair groups at Ascend Healthcare and a decade of adolescent residential treatment, I've developed a family systems approach that addresses attachment wounds in both teens and parents. Healing happens in relationship — not just in the teen.
              </p>
              <h3 className="font-serif text-lg text-cream-900 mt-6 mb-4">Who this is for</h3>
              <ul className="space-y-2 mb-7">
                {[
                  'Parents of teens (13–19) experiencing emotional dysregulation',
                  'Families navigating major transitions or crises',
                  'Parents wanting to understand their teen\'s attachment needs',
                  'Families healing from trauma or systemic disruption',
                  'Parents from Ascend Healthcare seeking continuity of care',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream-700 text-sm">
                    <span className="text-cream-400 shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                {/* TODO: shorten to forms.gle URL — Daniel to provide */}
                <a
                  href="https://docs.google.com/forms/d/1hTETlql6w_WiRBnB2iAmo0ifImcUpw3dfMvw5D_pw0g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Apply for Family Work
                </a>
                {/* TODO: replace with Kit landing page URL after Kit setup */}
                <a
                  href="https://forms.gle/7izvTY7Yi2TcDiGp6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Free Parent Guide
                </a>
              </div>
            </div>
            <div className="bg-cream-900 rounded-lg p-7 text-cream-200 self-start">
              <p className="text-xs uppercase tracking-widest text-cream-500 mb-4">Format</p>
              <div className="space-y-3 text-sm text-cream-400">
                <p>50-minute sessions</p>
                <p>Weekly initially, adjusted based on progress</p>
                <p>Telehealth throughout California</p>
                <p>Walk-and-talk available in LA</p>
              </div>
              <div className="border-t border-cream-700 mt-6 pt-5">
                <p className="text-cream-100 font-medium text-base">$400 / session</p>
                <p className="text-cream-500 text-xs mt-1">Out-of-network · Superbills available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Couples */}
      <section id="couples" className="section-cream scroll-mt-20">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <p className="eyebrow">03</p>
              <h2 className="text-3xl font-serif text-cream-900 mb-5">Couples Attachment Repair</h2>
              <p className="text-cream-600 italic mb-5">Relational repair for couples experiencing disconnection or crisis</p>
              <p className="text-cream-700 leading-relaxed mb-4">
                Using the same IAT methodology from individual and group work, I help couples understand how attachment patterns drive conflict, distance, and breakdown. This is clinical attachment work — not general couples counseling.
              </p>
              <h3 className="font-serif text-lg text-cream-900 mt-6 mb-4">Who this is for</h3>
              <ul className="space-y-2 mb-7">
                {[
                  'Couples experiencing chronic distance or shutdown',
                  'Partners navigating betrayal, affairs, or broken trust',
                  'Couples where one partner avoids and one pursues',
                  'Partners wanting to repair before considering separation',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream-700 text-sm">
                    <span className="text-cream-400 shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
              {/* TODO: shorten to forms.gle URL — Daniel to provide */}
              <a
                href="https://docs.google.com/forms/d/1jSFwo4eSJsnHPgIytK2PnZdOEyRsPeaP9y6l2IwzTuk/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Apply for Couples Work
              </a>
            </div>
            <div className="bg-cream-900 rounded-lg p-7 text-cream-200 self-start">
              <p className="text-xs uppercase tracking-widest text-cream-500 mb-4">Format</p>
              <div className="space-y-3 text-sm text-cream-400">
                <p>50-minute sessions</p>
                <p>Weekly or bi-weekly</p>
                <p>Telehealth throughout California</p>
              </div>
              <div className="border-t border-cream-700 mt-6 pt-5">
                <p className="text-cream-100 font-medium text-base">$400 / session</p>
                <p className="text-cream-500 text-xs mt-1">Out-of-network · Superbills available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services image break */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/services-2.jpg"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-cream-900/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-serif italic text-cream-100 text-2xl md:text-3xl text-center px-6 max-w-xl">
            Security stops being something you perform<br />and starts being something you feel.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <section className="section-cream">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="text-3xl font-serif text-cream-900 mb-10">Common questions</h2>
          <div className="space-y-8">
            {[
              {
                q: 'What does attachment repair actually mean?',
                a: 'Attachment repair changes how your nervous system experiences safety and connection — not just intellectually, but at a body level. Using IAT and the IPF Protocol, we build the internalized experience of secure attachment: "I\'m safe. I\'m valued. I belong." This shifts automatic patterns in relationships, parenting, and emotional regulation.',
              },
              {
                q: 'What if my teen doesn\'t want therapy?',
                a: 'Teens often come in skeptical. I use tools like mentalization and visualization to build insight while engaging parents so repair happens in the family system — not just with the teen. Resistance is normal and workable.',
              },
              {
                q: 'How long does therapy take?',
                a: 'Individual therapy: most clients work with me for 6–12 months, with some continuing longer. Couples/family: 3–6 months typically, depending on goals. Men\'s groups: 16-week commitment minimum; many continue afterward.',
              },
              {
                q: 'Do you take insurance?',
                a: 'I work as an out-of-network provider. I provide superbills for clients who wish to seek reimbursement from their insurance company.',
              },
              {
                q: 'Where are you located? Do you offer telehealth?',
                a: 'I\'m based in Los Angeles and see clients via HIPAA-compliant telehealth throughout California. Walk-and-talk sessions available in LA. Men\'s groups meet in person in Los Feliz.',
              },
              {
                q: 'What\'s the cancellation policy?',
                a: '24 hours notice required for all appointments.',
              },
            ].map((faq) => (
              <div key={faq.q} className="border-l-2 border-cream-300 pl-6">
                <h3 className="font-serif text-lg text-cream-900 mb-2">{faq.q}</h3>
                <p className="text-cream-700 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework links */}
      <section className="section-cream">
        <div className="container-main max-w-4xl">
          <p className="eyebrow">The Framework</p>
          <h2 className="text-2xl font-serif text-cream-900 mb-3">Go deeper into the approach</h2>
          <p className="text-cream-600 text-sm mb-8 leading-relaxed max-w-xl">
            All work in this practice is grounded in Integrative Attachment Therapy. If you want to understand the model before reaching out, these pages go into depth.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/integrative-attachment-therapy', label: 'Integrative Attachment Therapy', desc: 'The Three Pillars framework explained' },
              { href: '/ideal-parent-figure-protocol', label: 'Ideal Parent Figure Protocol', desc: 'How the core intervention works' },
              { href: '/earned-secure-attachment', label: 'Earned Secure Attachment', desc: 'What the research shows is possible' },
              { href: '/iat-certified-therapist', label: 'IAT-Certified Therapist', desc: 'What certification means and why it\'s rare' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-cream-200 hover:bg-cream-300 transition-colors rounded-lg p-5 group"
              >
                <p className="font-serif text-cream-900 text-base leading-snug mb-2 group-hover:text-cream-800">{item.label}</p>
                <p className="text-cream-500 text-xs leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-200 py-16">
        <div className="container-main max-w-xl text-center">
          <h2 className="text-2xl font-serif text-cream-900 mb-4">Not sure which is right?</h2>
          <p className="text-cream-700 mb-7">
            Book a free 30-minute call. We'll discuss what you're struggling with and which format makes the most sense.
          </p>
          <a
            href="https://calendly.com/danieljahearn/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Schedule a Free Consult
          </a>
        </div>
      </section>
    </>
  )
}
