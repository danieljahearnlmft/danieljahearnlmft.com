import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AudioPlayer from '@/components/AudioPlayer'
import './home.css'

export const metadata: Metadata = {
  title: 'Daniel J. Ahearn, LMFT: Attachment Therapist in Los Angeles',
  description:
    'IAT-certified attachment therapist in Los Angeles. Author of The Way Back Home. Attachment repair for men, fathers, parents, teens and families, trained directly with Dr. Daniel P. Brown and Dr. David Elliott.',
}

const CONSULT = 'https://calendly.com/danieljahearn/30min'

function Arrow({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  )
}

const tiles = [
  { label: 'I’m activated', color: '#D8765A' },
  { label: 'My teen is shut down', color: '#7FA2C9' },
  { label: 'We had a rupture', color: '#C9A96A' },
  { label: 'I want to repair', color: '#7DB28A' },
  { label: 'Things are good', color: '#E9E1CF' },
]

const steps = [
  { l: 'R', c: '#3F6E4B', n: 'Step one', t: 'Regulate the breath', d: 'Repair can’t start from a flooded nervous system. Pause first. Your teen’s nervous system is watching yours.' },
  { l: 'E', c: '#8A6420', n: 'Step two', t: 'Explore the moment', d: 'Before you turn toward them, turn toward yourself. What just got activated in you?' },
  { l: 'A', c: '#3B5F85', n: 'Step three', t: 'Attune with empathy', d: 'Try to understand what happened for them. You may get it wrong. The try is what matters.' },
  { l: 'L', c: '#A04A32', n: 'Step four', t: 'Lean back in', d: 'The gesture of return. An apology, a seat beside them, a look that says the relationship is still here.' },
]

const essays = [
  { t: 'Parenting Teens with Presence', d: 'Five ways to support and connect with your teenage children.', h: 'https://www.lionsroar.com/parenting-teens-with-presence/' },
  { t: 'How to Be Honest With Yourself', d: 'False positivity erodes truth and intimacy. A path toward honesty.', h: 'https://www.lionsroar.com/when-resilience-becomes-repression/' },
  { t: 'The Nine Breaths of Purification', d: 'A short Bön practice to clear the mind and reconnect with the body.', h: 'https://www.lionsroar.com/let-the-nine-breaths-of-purification-clear-your-mind-and-open-your-heart/' },
]

export default function Home() {
  return (
    <div className="wbh">
      {/* Hero */}
      <section className="row hero on-dark">
        <div style={{ flex: '1 1 480px', maxWidth: 720, minWidth: 0 }}>
          <p className="eyebrow gold" style={{ marginBottom: 28 }}>IAT-Certified Attachment Therapist</p>
          <h1>Most people aren’t broken. They’re adapted.</h1>
          <p className="sub">Attachment repair for men, fathers, parents and families, with a therapist trained directly by the developers of the Ideal Parent Figure protocol.</p>
          <div style={{ marginTop: 40 }}>
            <a className="btn btn-gold plausible-event-name=Calendly+Click" href={CONSULT} target="_blank" rel="noopener noreferrer">Free 15-minute consult</a>
          </div>
        </div>
        <div style={{ flex: '0 1 440px', minWidth: 260, width: '100%', maxWidth: 440, margin: '0 auto' }}>
          <div className="arch">
            <Image src="/images/home/portrait.jpg" alt="Daniel J. Ahearn, LMFT" width={880} height={1100} priority />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="row trust" aria-label="Credentials">
        <span>Licensed Marriage &amp; Family Therapist</span>
        <span>IAT-Certified</span>
        <span>Trained directly with Dr. Daniel P. Brown and Dr. David Elliott</span>
        <span>Over a decade in clinical practice</span>
      </section>

      {/* Quote */}
      <section style={{ padding: '104px 5% 96px', textAlign: 'center' }}>
        <figure style={{ margin: '0 auto', maxWidth: 900 }}>
          <blockquote className="serif" style={{ margin: 0, fontStyle: 'italic', fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.25 }}>
            “Daniel Ahearn has done something rare. He has translated a sophisticated clinical model into language that parents can actually use.”
          </blockquote>
          <figcaption style={{ marginTop: 28, fontSize: 14, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-d)' }}>
            Dr. David Elliott, PhD · Co-developer, Integrative Attachment Therapy
          </figcaption>
        </figure>
      </section>

      {/* Three doors */}
      <section style={{ padding: '0 5% 120px' }}>
        <div className="wrap">
          <p className="eyebrow">Who I work with</p>
          <h2 className="h2" style={{ marginBottom: 56, maxWidth: 760 }}>Attachment repair, at any age.</h2>
          <div className="row" style={{ gap: 24 }}>
            <article className="door light">
              <div className="tag" style={{ color: 'var(--gold-d)' }}>For adults</div>
              <h3>Men, fathers, couples and families</h3>
              <p style={{ margin: 0, color: 'var(--ink2)', flex: 1 }}>One-on-one work with the Ideal Parent Figure protocol for people carrying old attachment patterns into their relationships and their parenting.</p>
              <a className="lnk plausible-event-name=Calendly+Click" href={CONSULT} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--f1)' }}>Start with a free consult <Arrow /></a>
            </article>
            <article className="door dark">
              <div className="tag" style={{ color: 'var(--gold)' }}>For parents</div>
              <h3>Parents of teenagers</h3>
              <p style={{ margin: 0, color: 'var(--sage)', flex: 1 }}>The book, a free daily practice and weekly groups, all built on the five conditions of secure attachment and the R.E.A.L. repair method.</p>
              <a className="lnk" href="#parents" style={{ color: 'var(--gold)' }}>Explore the parent path <Arrow /></a>
            </article>
            <article className="door light">
              <div className="tag" style={{ color: 'var(--gold-d)' }}>For organizations</div>
              <h3>Treatment programs and clinical teams</h3>
              <p style={{ margin: 0, color: 'var(--ink2)', flex: 1 }}>Consulting on attachment-informed culture, staff retention and therapeutic programming, drawn from a decade inside residential adolescent treatment.</p>
              <Link className="lnk" href="/consulting" style={{ color: 'var(--f1)' }}>Organizations and teams <Arrow /></Link>
            </article>
          </div>
        </div>
      </section>

      {/* Where are you right now */}
      <section id="parents" className="on-dark" style={{ background: 'var(--f1)', padding: '112px 5%', position: 'relative', overflow: 'hidden' }}>
        <Image className="bgimg" src="/images/home/oaks.jpg" alt="" fill sizes="100vw" style={{ objectPosition: '50% 40%' }} />
        <div className="veil" aria-hidden="true" style={{ background: 'rgba(20,32,22,.8)' }} />
        <div className="wrap row" style={{ gap: '56px 80px', alignItems: 'flex-start', position: 'relative' }}>
          <div style={{ flex: '1 1 380px', minWidth: 0 }}>
            <p className="eyebrow gold" style={{ marginBottom: 20 }}>For parents of teens</p>
            <h2 className="h2i" style={{ fontSize: 'clamp(38px,4.8vw,64px)', lineHeight: 1.06 }}>Where are you right now?</h2>
            <p style={{ margin: '28px 0 0', color: 'var(--sage)', maxWidth: 460 }}>The hardest moments with a teenager are small and specific. The daily practice meets you inside them, in about the time it takes to breathe three times.</p>
            <a className="btn btn-gold plausible-event-name=App+Open" href="https://waybackhome.app" target="_blank" rel="noopener noreferrer" style={{ marginTop: 36 }}>Open the free app</a>
          </div>
          <div style={{ flex: '1 1 400px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {tiles.map((t) => (
              <a key={t.label} className="tile plausible-event-name=App+Open" href="https://waybackhome.app" target="_blank" rel="noopener noreferrer">
                <span className="dot" aria-hidden="true" style={{ background: t.color }} />
                <span style={{ flex: 1 }}>{t.label}</span>
                <Arrow size={20} color="#C9A96A" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* R.E.A.L. */}
      <section style={{ padding: '120px 5% 112px' }}>
        <div className="wrap">
          <p className="eyebrow">The R.E.A.L. Method</p>
          <h2 className="h2" style={{ maxWidth: 820 }}>A four-step way back after a rupture.</h2>
          <p style={{ margin: '24px 0 64px', color: 'var(--ink2)', maxWidth: 640 }}>Ruptures are inevitable. What builds secure attachment is what happens next. R.E.A.L. is the repair pattern at the center of my parent groups, and it anchors my work with men and couples too.</p>
          <div className="row" style={{ gap: '48px 32px' }}>
            {steps.map((s) => (
              <div key={s.l} className="step">
                <div className="big" style={{ color: s.c }}>{s.l}</div>
                <div className="n">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <a className="lnk" href="https://waybackhome.app/real/" target="_blank" rel="noopener noreferrer" style={{ marginTop: 56, color: 'var(--f1)' }}>Read the full method <Arrow /></a>
        </div>
      </section>

      {/* Hear a practice */}
      <section id="practice" className="on-dark" style={{ background: 'var(--f2)', padding: '104px 5%', position: 'relative', overflow: 'hidden' }}>
        <Image className="bgimg" src="/images/home/sunrise-band.jpg" alt="" fill sizes="100vw" style={{ objectPosition: '50% 55%' }} />
        <div className="veil" aria-hidden="true" style={{ background: 'rgba(28,43,30,.78)' }} />
        <div className="wrap row" style={{ maxWidth: 1100, gap: '48px 72px', alignItems: 'center', position: 'relative' }}>
          <div style={{ flex: '1 1 360px', minWidth: 0 }}>
            <p className="eyebrow gold" style={{ marginBottom: 20 }}>Hear a practice</p>
            <h2 className="h2i" style={{ fontSize: 'clamp(34px,4.2vw,54px)', lineHeight: 1.1 }}>Most of what I teach is meant to be heard.</h2>
            <p style={{ margin: '24px 0 0', color: 'var(--sage)', maxWidth: 480 }}>Guided visualizations are the heart of this work. Take two minutes with one before you decide anything else.</p>
          </div>
          <div className="player">
            <AudioPlayer src="/audio/attunement.m4a" kicker="Condition two" title="Attunement" blurb="Being truly seen, without being fixed, corrected or redirected" />
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid #3A5440' }}>
              <a className="lnk" href="https://youtu.be/6NzGp6f4Uz0" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-l)', fontSize: 16, fontWeight: 400 }}>Listen to a conversation with me <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Book + essays */}
      <section style={{ padding: '120px 5%' }}>
        <div className="wrap row" style={{ gap: '64px 72px', alignItems: 'flex-start' }}>
          <div className="on-dark" style={{ flex: '1 1 420px', minWidth: 0, background: 'var(--f1)', borderRadius: 24, padding: '56px 48px', color: 'var(--cream)' }}>
            <p style={{ margin: 0, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>Now on Audible · Paperback · Kindle</p>
            <div className="row" style={{ gap: 32, alignItems: 'flex-start', marginTop: 24 }}>
              <Image src="/images/book-cover.jpg" alt="The Way Back Home: Healing Attachment Wounds With Your Teen" width={380} height={540} style={{ width: 150, height: 'auto', borderRadius: 6, boxShadow: '0 12px 32px rgba(0,0,0,.4)', flex: 'none' }} />
              <div style={{ flex: '1 1 220px', minWidth: 0 }}>
                <h2 style={{ fontWeight: 400, fontSize: 'clamp(40px,4.4vw,60px)', lineHeight: 1.02 }}>The Way Back Home</h2>
                <div className="serif" style={{ fontStyle: 'italic', fontSize: 24, color: 'var(--gold-l)', marginTop: 8 }}>Healing Attachment Wounds With Your Teen</div>
              </div>
            </div>
            <p style={{ margin: '28px 0 0', color: 'var(--sage)' }}>A practical guide for parents navigating the hardest years of the parent-child relationship. If your teenager is pulling away, shutting down or pushing you out, this book explains why, and what to do about it.</p>
            <div className="row" style={{ gap: 14, marginTop: 36 }}>
              <a className="btn btn-gold plausible-event-name=Book+Amazon" href="https://www.amazon.com/Way-Back-Home-Healing-Attachment-ebook/dp/B0GLF2JH8T?ref_=ast_author_mpb" target="_blank" rel="noopener noreferrer">Get the book</a>
              <Link className="btn btn-line-l" href="/the-way-back-home">Learn more</Link>
            </div>
          </div>
          <div style={{ flex: '1 1 420px', minWidth: 0 }}>
            <p className="eyebrow">Featured in <i>Lion’s Roar</i></p>
            <h2 className="h2" style={{ fontSize: 'clamp(34px,4vw,48px)', lineHeight: 1.1, marginBottom: 32 }}>Selected essays</h2>
            {essays.map((e) => (
              <a key={e.h} className="essay" href={e.h} target="_blank" rel="noopener noreferrer">
                <span style={{ flex: 1, minWidth: 0 }}><span className="et">{e.t}</span><span className="ed">{e.d}</span></span>
                <Arrow size={20} color="#6B5320" />
              </a>
            ))}
            <Link className="lnk" href="/writing" style={{ marginTop: 28, color: 'var(--f1)' }}>All writing <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* Groups */}
      <section style={{ background: 'var(--cream2)', padding: '96px 5%' }}>
        <div className="wrap row" style={{ gap: '48px 64px', alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 420px', minWidth: 0 }}>
            <p className="eyebrow">Parent support groups</p>
            <h2 className="h2" style={{ fontSize: 'clamp(34px,4vw,50px)', lineHeight: 1.1 }}>Do this work alongside other parents.</h2>
            <p style={{ margin: '20px 0 0', color: 'var(--ink2)', maxWidth: 520 }}>National, Zoom-based groups for parents of teens. Attachment-informed, practical and capped at 12, with R.E.A.L. practiced on the ruptures parents are living that week.</p>
          </div>
          <div style={{ flex: '1 1 380px', minWidth: 0, background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 20, padding: 36 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 17 }}>
              <div className="fee"><span style={{ color: 'var(--mute)' }}>Parent groups</span><span style={{ fontWeight: 500 }}>$60 per session</span></div>
              <div className="fee"><span style={{ color: 'var(--mute)' }}>Schedule</span><span style={{ fontWeight: 500 }}>Mondays, 5pm PT</span></div>
            </div>
            <div className="row" style={{ gap: 14, marginTop: 28 }}>
              <Link className="btn btn-dark" href="/parent-support-groups">Join a group</Link>
              <Link className="btn btn-line-d" href="/services">See individual and couples rates</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="on-dark" style={{ background: 'var(--f1)', padding: '140px 5%', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Image className="bgimg" src="/images/home/sunset.jpg" alt="" fill sizes="100vw" style={{ objectPosition: '50% 70%' }} />
        <div className="veil" aria-hidden="true" style={{ background: 'rgba(20,32,22,.62)' }} />
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
          <h2 className="h2i" style={{ fontSize: 'clamp(40px,5.4vw,72px)', lineHeight: 1.05 }}>Begin where you are.</h2>
          <p style={{ margin: '28px auto 0', color: 'var(--sage)', maxWidth: 520 }}>A free 15-minute consultation to talk through what you’re looking for and whether we’re a good fit.</p>
          <div className="row" style={{ gap: 16, justifyContent: 'center', marginTop: 40 }}>
            <a className="btn btn-gold plausible-event-name=Calendly+Click" href={CONSULT} target="_blank" rel="noopener noreferrer" style={{ padding: '16px 32px' }}>Schedule a consult</a>
            <a className="btn btn-line-l plausible-event-name=Substack+Click" href="https://danieljahearnlmft.substack.com" target="_blank" rel="noopener noreferrer" style={{ padding: '16px 32px' }}>Read on Substack</a>
          </div>
          <p style={{ margin: '36px auto 0', fontSize: 15, color: 'var(--sage2)' }}>A reflection on Tuesdays and a shorter note midweek, on attachment and parenting teens.</p>
        </div>
      </section>
    </div>
  )
}
