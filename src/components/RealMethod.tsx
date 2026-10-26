import { AMAZON_URL, APP_URL } from '@/lib/site'

const STEPS = [
  {
    letter: 'R',
    color: '#3F6E4B',
    name: 'Regulate the breath',
    body: "Repair can't start from a flooded nervous system. Pause. Three to five slow breaths, feet on the ground, shoulders down. You don't need to be calm, only more regulated than you were thirty seconds ago.",
    line: "Pause first. Your teen's nervous system is watching yours.",
  },
  {
    letter: 'E',
    color: '#8A6420',
    name: 'Explore the moment',
    body: "Once you're steadier, get curious about what happened for your teen. Not interrogation, not problem-solving, not explaining why they're wrong.",
    line: '“Help me understand what just happened for you.”',
  },
  {
    letter: 'A',
    color: '#3B5F85',
    name: 'Attune with empathy',
    body: 'Reflect back what you hear so your teen feels seen. Empathy is not agreement. You can attune to their experience and still hold the limit.',
    line: '“It sounds like you felt dismissed when I said that.”',
  },
  {
    letter: 'L',
    color: '#A04A32',
    name: 'Lean back in',
    body: "The gesture of return. Own your part and signal that the relationship is still here. Sometimes it's words; sometimes it's sitting down next to them and staying in the room.",
    line: "“I'm sorry I raised my voice. I'm still here.”",
  },
]

export default function RealMethod() {
  return (
    <section id="real-method" className="sec t-cream2" aria-labelledby="real-method-heading" style={{ scrollMarginTop: 80 }}>
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">A framework for rupture and repair</p>
          <h2 id="real-method-heading" className="h2">The R.E.A.L. Method</h2>
          <p className="intro">
            Ruptures with your teenager are inevitable. What builds secure attachment is what happens next. R.E.A.L. is the four-step repair method at the center of these groups, first published in Chapter 7 of <em>The Way Back Home</em>. It isn’t a script. It’s a pattern you can return to when things go sideways, and it still counts when your teen isn’t ready to respond.
          </p>
        </div>

        <ol className="row" style={{ listStyle: 'none', margin: 0, padding: 0, gap: '48px 32px' }}>
          {STEPS.map((s) => (
            <li key={s.letter} className="step">
              <div className="big" aria-hidden="true" style={{ color: s.color }}>{s.letter}</div>
              <h3>{s.name}</h3>
              <p>{s.body}</p>
              <p className="serif" style={{ marginTop: 14, fontStyle: 'italic', fontSize: 21, lineHeight: 1.35, color: 'var(--ink)' }}>{s.line}</p>
            </li>
          ))}
        </ol>

        <div className="btns" style={{ marginTop: 56 }}>
          <a className="btn btn-dark plausible-event-name=App+Open" href={APP_URL} target="_blank" rel="noopener noreferrer">Practice R.E.A.L. in the app</a>
          <a className="btn btn-line-d plausible-event-name=Book+Amazon" href={AMAZON_URL} target="_blank" rel="noopener noreferrer">Read Chapter 7</a>
        </div>

        <p style={{ marginTop: 40, paddingTop: 18, borderTop: '1px solid var(--line)', fontSize: 13, color: 'var(--mute)' }}>
          The R.E.A.L. Method (Regulate the Breath, Explore the Moment, Attune with Empathy, Lean Back In) was developed by Daniel J. Ahearn, LMFT, and first published in <em>The Way Back Home</em>, April 1, 2026. © 2026 Daniel J. Ahearn, LMFT. <time dateTime="2026-09-15">Section added September 15, 2026.</time>
        </p>
      </div>
    </section>
  )
}
