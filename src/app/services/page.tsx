import { GUIDE_URL, OFFERS, pageMeta } from '@/lib/site'
import { Arrow, Closing, ConsultButton, Facts, Hero, List, OfferCard, Page, Quote, RelatedLinks } from '@/components/site/ui'

export const metadata = pageMeta(
  '/services',
  'Therapy and Fees',
  'Attachment-based individual, couples, and family therapy with an IAT-certified therapist. Online across California. Fees, format, and common questions.',
)

const faqs = [
  {
    q: 'What does attachment repair actually mean?',
    a: 'Attachment repair changes how your nervous system experiences safety and connection, not only how you think about it. Using Integrative Attachment Therapy and the Ideal Parent Figure protocol, we build the felt experience of secure attachment: I’m safe, I’m valued, I belong. That shifts the automatic patterns in your relationships, your parenting, and how you regulate.',
  },
  {
    q: 'What if my teen doesn’t want therapy?',
    a: 'Teens often come in skeptical. I use mentalization and visualization to build insight while engaging parents, so repair happens in the family system and not only with the teen. Resistance is normal and workable.',
  },
  {
    q: 'How long does therapy take?',
    a: 'Most individual clients work with me for 6 to 12 months, some longer. Couples and family work typically runs 3 to 6 months, depending on goals.',
  },
  {
    q: 'Do you take insurance?',
    a: 'I’m an out-of-network provider. I provide superbills if you’d like to seek reimbursement from your insurance company.',
  },
  {
    q: 'Where do sessions happen?',
    a: 'Online, over secure HIPAA-compliant video, for clients anywhere in California. I’m based in Los Angeles.',
  },
  {
    q: 'What’s the cancellation policy?',
    a: '24 hours’ notice is required for all appointments.',
  },
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function Services() {
  return (
    <Page>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <Hero
        eyebrow="Therapy and fees"
        title="Individual, couples and family therapy."
        sub="Attachment repair grounded in Integrative Attachment Therapy and the Ideal Parent Figure protocol, shaped to your history and what you want to change."
        image="/images/services-hero.jpg"
        imagePosition="50% 45%"
      >
        <ConsultButton />
      </Hero>

      <Facts
        items={[
          { k: 'Where', v: 'Online, across California' },
          { k: 'Sessions', v: '50 minutes' },
          { k: 'Fees', v: 'Sliding scale' },
          { k: 'Insurance', v: 'Out-of-network, superbills' },
        ]}
      />

      <section id="individual" className="sec" style={{ scrollMarginTop: 80 }}>
        <div className="wrap svc">
          <div className="body">
            <p className="eyebrow">Individual</p>
            <h2>Individual attachment therapy</h2>
            <p className="intro" style={{ fontSize: 20 }}>
              One-on-one work using the Three Pillars method, including the Ideal Parent Figure protocol, for people carrying old attachment patterns into their relationships and their parenting.
            </p>
            <h3>Who this is for</h3>
            <List
              items={[
                'Anyone with an insecure attachment pattern: dismissive, anxious, or disorganized',
                'People healing from developmental trauma or neglect',
                'Those who want more privacy or customization than a group offers',
                'Anyone working through a specific relational pattern or wound',
              ]}
            />
            <h3>What we do</h3>
            <List
              items={[
                'A thorough attachment assessment',
                'Systematic work through developmental stages with the IPF protocol',
                'Linking that work to what’s happening in your relationships now',
                'Nervous system regulation and somatic work',
                'Differentiating from family-of-origin patterns',
              ]}
            />
          </div>
          <OfferCard offer={{ ...OFFERS.individual, format: [...OFFERS.individual.format, 'A 3 to 6 month commitment to start'] }} />
        </div>
      </section>

      <section id="family" className="sec t-cream2" style={{ scrollMarginTop: 80 }}>
        <div className="wrap svc">
          <div className="body">
            <p className="eyebrow">Family</p>
            <h2>Family and teen attachment repair</h2>
            <p className="intro" style={{ fontSize: 20 }}>
              For families where a teenager is shutting down, struggling with identity, or stuck in conflict. The work addresses the attachment wounds underneath anxiety, withdrawal, or acting out, in both the teen and the parents. Healing happens in relationship, not only in the teen.
            </p>
            <h3>Who this is for</h3>
            <List
              items={[
                'Parents of teens (13 to 19) facing emotional dysregulation',
                'Families navigating a major transition or crisis',
                'Parents who want to understand their teen’s attachment needs',
                'Families healing from trauma or disruption',
                'Families from Ascend Healthcare seeking continuity of care',
              ]}
            />
            <a className="lnk plausible-event-name=Guide+Download" href={GUIDE_URL} target="_blank" rel="noopener noreferrer" download style={{ marginTop: 28, color: 'var(--f1)' }}>
              Free guide: Why your teen is pushing you away <Arrow />
            </a>
          </div>
          <OfferCard offer={OFFERS.family} />
        </div>
      </section>

      <section id="couples" className="sec" style={{ scrollMarginTop: 80 }}>
        <div className="wrap svc">
          <div className="body">
            <p className="eyebrow">Couples</p>
            <h2>Couples attachment repair</h2>
            <p className="intro" style={{ fontSize: 20 }}>
              The same IAT methodology, applied to how attachment patterns drive conflict, distance, and breakdown between partners. This is clinical attachment work, not general couples counseling.
            </p>
            <h3>Who this is for</h3>
            <List
              items={[
                'Couples living with chronic distance or shutdown',
                'Partners navigating betrayal, an affair, or broken trust',
                'Couples where one partner pursues and the other withdraws',
                'Partners who want to repair before considering separation',
              ]}
            />
          </div>
          <OfferCard offer={OFFERS.couples} />
        </div>
      </section>

      <Quote
        text="Security stops being something you perform and starts being something you feel."
        by=""
        image="/images/services-2.jpg"
        imagePosition="50% 40%"
      />

      <section className="sec">
        <div className="wrap-n">
          <div className="sec-head">
            <p className="eyebrow">Questions</p>
            <h2 className="h2">Common questions</h2>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Understand the approach"
        items={[
          { href: '/integrative-attachment-therapy', t: 'Integrative Attachment Therapy', d: 'The Three Pillars framework' },
          { href: '/ideal-parent-figure-protocol', t: 'Ideal Parent Figure protocol', d: 'How the core intervention works' },
          { href: '/iat-certified-therapist', t: 'IAT certification', d: 'What the training involves' },
        ]}
      />

      <Closing secondary={{ href: '/parent-support-groups', label: 'Parent support groups' }} />
    </Page>
  )
}
