import { SUBSTACK_URL, pageMeta } from '@/lib/site'
import { Arrow, Closing, Hero, Page, Section } from '@/components/site/ui'

export const metadata = pageMeta(
  '/writing',
  'Writing',
  'Essays by Daniel J. Ahearn, LMFT on attachment, honesty, and parenting teens, published in Lion’s Roar and on Substack.',
)

const articles = [
  {
    title: 'Parenting Teens with Presence',
    dek: 'Five ways to support and connect with your teenage children, for the years when the relationship feels most fragile.',
    href: 'https://www.lionsroar.com/parenting-teens-with-presence/',
  },
  {
    title: 'How to Be Honest With Yourself',
    dek: 'False positivity erodes truth and intimacy. A path toward the kind of honesty that makes real closeness possible.',
    href: 'https://www.lionsroar.com/when-resilience-becomes-repression/',
  },
  {
    title: 'The Nine Breaths of Purification',
    dek: 'A short Bön practice to clear what weighs us down, reconnect with the body, and remember that every breath is a chance to begin again.',
    href: 'https://www.lionsroar.com/let-the-nine-breaths-of-purification-clear-your-mind-and-open-your-heart/',
  },
]

export default function Writing() {
  return (
    <Page>
      <Hero
        eyebrow="Writing"
        title="Essays on attachment, honesty, and parenting teens."
        sub="Published writing on the questions I keep returning to in the therapy room, and at home."
      />

      <Section width="mid" eyebrow="Featured in Lion’s Roar" title="Selected essays">
        <div>
          {articles.map((a) => (
            <a key={a.href} className="essay" href={a.href} target="_blank" rel="noopener noreferrer">
              <span style={{ flex: 1, minWidth: 0 }}>
                <span className="et">{a.title}</span>
                <span className="ed">{a.dek}</span>
              </span>
              <Arrow size={20} color="#6B5320" />
            </a>
          ))}
        </div>
      </Section>

      <Section tone="cream2" width="narrow" eyebrow="Substack" title="Notes on the work, in your inbox.">
        <p style={{ color: 'var(--ink2)', marginTop: -16 }}>A reflection on Tuesdays and a shorter note midweek, on attachment and parenting teens.</p>
        <a className="btn btn-dark plausible-event-name=Substack+Click" href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer" style={{ marginTop: 28 }}>Read on Substack</a>
      </Section>

      <Closing secondary={{ href: '/the-way-back-home', label: 'The book' }} />
    </Page>
  )
}
