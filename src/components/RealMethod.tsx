const steps = [
  {
    letter: "R",
    name: "Regulate the Breath",
    body: "Repair can't start from a flooded nervous system. Pause. Three to five slow breaths, feet on the ground, shoulders down. You don't need to be calm, only more regulated than you were thirty seconds ago.",
    line: "Pause first. Your teen's nervous system is watching yours.",
  },
  {
    letter: "E",
    name: "Explore the Moment",
    body: "Once you're steadier, get curious about what happened for your teen. Not interrogation, not problem-solving, not explaining why they're wrong.",
    line: "“Help me understand what just happened for you.”",
  },
  {
    letter: "A",
    name: "Attune with Empathy",
    body: "Reflect back what you hear so your teen feels seen. Empathy is not agreement. You can attune to their experience and still hold the limit.",
    line: "“It sounds like you felt dismissed when I said that.”",
  },
  {
    letter: "L",
    name: "Lean Back In",
    body: "The gesture of return. Own your part and signal that the relationship is still here. Sometimes it's words; sometimes it's sitting down next to them and staying in the room.",
    line: "“I'm sorry I raised my voice. I'm still here.”",
  },
]

export default function RealMethod() {
  return (
    <section id="real-method" className="section-warm" aria-labelledby="real-method-heading">
      <div className="container-main max-w-4xl">
        <p className="eyebrow">A Framework for Rupture and Repair</p>
        <h2 id="real-method-heading" className="text-3xl md:text-4xl font-serif text-cream-900 mb-5">
          The R.E.A.L. Method
        </h2>
        <p className="text-cream-700 leading-relaxed mb-4 max-w-2xl">
          Ruptures with your teenager are inevitable. What builds secure attachment is what happens
          next. R.E.A.L. is the four-step repair method at the center of these groups, first
          published in Chapter 7 of <em>The Way Back Home: Healing Attachment Wounds With Your Teen</em>{' '}
          (April 1, 2026).
        </p>
        <p className="text-cream-700 leading-relaxed mb-10 max-w-2xl">
          It isn't a script. It's a pattern you can return to when things go sideways, and it still
          counts when your teen isn't ready to respond.
        </p>
        <ol className="grid md:grid-cols-2 gap-6 mb-10">
          {steps.map((s) => (
            <li key={s.letter} className="bg-cream-50 border border-cream-300 rounded-lg p-7 flex gap-5">
              <span aria-hidden="true" className="font-serif text-4xl leading-none text-cream-500 shrink-0 w-8">
                {s.letter}
              </span>
              <div>
                <h3 className="font-serif text-xl text-cream-900 mb-2">{s.name}</h3>
                <p className="text-cream-700 text-sm leading-relaxed mb-3">{s.body}</p>
                <p className="font-serif italic text-cream-600 text-sm leading-relaxed">{s.line}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-cream-700 leading-relaxed mb-8 max-w-2xl">
          In group, we practice R.E.A.L. with the ruptures parents are actually living through that
          week. The free daily practice app walks through the same four steps.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <a
            href="https://waybackhome.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary plausible-event-name=App+Open"
          >
            Practice R.E.A.L. in the App
          </a>
          <a
            href="https://www.amazon.com/Way-Back-Home-Healing-Attachment-ebook/dp/B0GLF2JH8T"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost plausible-event-name=Book+Amazon"
          >
            Read Chapter 7 in the Book
          </a>
        </div>
        <p className="text-cream-600 text-xs leading-relaxed border-t border-cream-300 pt-4">
          The R.E.A.L. Method (Regulate the Breath, Explore the Moment, Attune with Empathy, Lean Back
          In) was developed by Daniel J. Ahearn, LMFT, and first published in{' '}
          <em>The Way Back Home</em>, April 1, 2026. © 2026 Daniel J. Ahearn, LMFT.{' '}
          <time dateTime="2026-09-15">Section added September 15, 2026.</time>
        </p>
      </div>
    </section>
  )
}
