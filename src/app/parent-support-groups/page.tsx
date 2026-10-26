import Link from 'next/link'
import RealMethod from '@/components/RealMethod'
import { OFFERS, PARENT_GROUP_FORM, pageMeta } from '@/lib/site'
import { Closing, ConsultButton, Facts, Hero, List, OfferCard, Page, Section } from '@/components/site/ui'

export const metadata = pageMeta(
  '/parent-support-groups',
  'Parent Support Groups',
  'Online groups for parents of teens, grounded in attachment science. Practice the R.E.A.L. repair method. Mondays 5pm PT, capped at 12, $60 per session.',
  {
    openGraph: { images: [{ url: '/images/parent-groups-hero.jpg', alt: 'Parent support groups' }] },
    twitter: { card: 'summary_large_image', images: ['/images/parent-groups-hero.jpg'] },
  },
)

function JoinButton({ tone = 'gold' }: { tone?: 'gold' | 'dark' }) {
  return (
    <a className={`btn btn-${tone} plausible-event-name=Group+Join`} href={PARENT_GROUP_FORM} target="_blank" rel="noopener noreferrer">
      Join a group
    </a>
  )
}

export default function ParentSupportGroups() {
  return (
    <Page>
      <Hero
        eyebrow="Parent support groups"
        title="You don’t have to figure this out alone."
        sub="Online groups for parents of teenagers, grounded in attachment science, practical, and capped at 12 so everyone gets heard."
        image="/images/parent-groups-hero.jpg"
        imagePosition="50% 35%"
      >
        <JoinButton />
        <ConsultButton tone="line-l" />
      </Hero>

      <Facts
        items={[
          { k: 'When', v: 'Mondays, 5pm PT' },
          { k: 'Where', v: 'Zoom, anywhere in the U.S.' },
          { k: 'Size', v: 'Capped at 12' },
          { k: 'Fee', v: '$60 per session' },
        ]}
      />

      <section className="sec">
        <div className="wrap svc">
          <div className="body prose">
            <p className="eyebrow">What this is</p>
            <h2 style={{ color: 'var(--ink)' }}>Psychoeducation meets peer support</h2>
            <p className="lede" style={{ marginTop: 24 }}>
              For parents who are working hard and still feel like they’re losing ground with their teenager.
            </p>
            <p>
              Every session is grounded in the attachment science behind adolescent behavior: why teens withdraw, why they push you away, what’s actually driving the conflict. Then we focus on what you can do about it. This isn’t therapy, and it isn’t a support group in the traditional sense. It’s structured teaching with room for real conversation, and you leave with something you can use that week.
            </p>
            <h3>What we cover</h3>
            <List
              items={[
                'Why teenagers push their parents away, and what it signals',
                'How your own attachment history shows up in your parenting',
                'Regulation and co-regulation: what your teen actually needs',
                'Staying present during ruptures without shutting down or escalating',
                'The difference between attunement and approval',
                'Setting limits without damaging the relationship',
              ]}
            />
          </div>
          <OfferCard offer={OFFERS.groups} cta={<div style={{ marginTop: 26 }}><JoinButton tone="dark" /></div>} />
        </div>
      </section>

      <RealMethod />

      <Section width="mid">
        <div className="cols">
          <div>
            <h2 className="h2" style={{ fontSize: 'clamp(30px,3.2vw,40px)', marginBottom: 24 }}>A good fit if</h2>
            <List
              items={[
                'Your teenager is pulling away and you don’t know why',
                'Every conversation turns into a conflict or ends in shutdown',
                'You want to understand the science, not just get advice',
                'You’re willing to look at your own history as part of the picture',
                'You want to be around other parents going through it too',
              ]}
            />
          </div>
          <div>
            <h2 className="h2" style={{ fontSize: 'clamp(30px,3.2vw,40px)', marginBottom: 24 }}>Not the right fit if</h2>
            <List
              items={[
                'You want your teenager “fixed” without changing anything yourself',
                'You’re looking for quick tips and techniques',
                'You’re in acute crisis and need individual clinical support',
              ]}
            />
            <p style={{ marginTop: 24, color: 'var(--ink2)', fontSize: 17 }}>
              If you need more individual support, <Link href="/services#family" style={{ textDecoration: 'underline', textDecorationColor: 'var(--gold)' }}>family and teen therapy</Link> may be a better fit.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cream2" width="narrow" eyebrow="Who leads the groups">
        <div className="prose">
          <p>
            Daniel J. Ahearn is an LMFT and IAT-certified attachment therapist, trained directly with Dr. Daniel P. Brown and Dr. David Elliott, and the author of <em>The Way Back Home: Healing Attachment Wounds With Your Teen</em>. He is Director of Culture at Ascend Healthcare, a residential treatment program for adolescents, and has spent over a decade working with teenagers and their families.
          </p>
          <p>
            The groups distill the framework he uses in individual and family work into a format any parent can use, whether or not they’re in therapy themselves. <Link href="/about">More about Daniel</Link>.
          </p>
        </div>
      </Section>

      <Closing
        title="Join any time."
        text="Groups are ongoing and capped at 12. There’s no cohort to wait for. If you’d like to talk first, book a free call."
        secondary={{ href: PARENT_GROUP_FORM, label: 'Join a group' }}
      />
    </Page>
  )
}
