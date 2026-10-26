import type { Metadata } from 'next'

export const SITE_URL = 'https://danieljahearnlmft.com'
export const NAME = 'Daniel J. Ahearn, LMFT'

export const CONSULT_URL = 'https://calendly.com/danieljahearn/30min'
export const CONSULT_LABEL = 'Free 15-minute consult'

export const SUBSTACK_URL = 'https://danieljahearnlmft.substack.com'
export const APP_URL = 'https://waybackhome.app'
export const AMAZON_URL = 'https://www.amazon.com/Way-Back-Home-Healing-Attachment-ebook/dp/B0GLF2JH8T'
export const AUDIBLE_URL = 'https://www.audible.com/pd/The-Way-Back-Home-Audiobook/B0H12DWQFP'
export const GUIDE_URL = '/why-your-teen-is-pushing-you-away.pdf'
export const PARENT_GROUP_FORM = 'https://docs.google.com/forms/d/12Es-CQ6HNGHJ3WvG7a5XJKt8GHGJHaZ1Weodiy20KgI/viewform'

export const PHONE = '213-290-1146'
export const PHONE_HREF = 'tel:+12132901146'
export const EMAIL = 'daniel@danieljahearnlmft.com'
export const LICENSE = 'LMFT 143021'

export const SOCIAL = {
  substack: SUBSTACK_URL,
  instagram: 'https://www.instagram.com/danieljahearnlmft',
  linkedin: 'https://www.linkedin.com/in/daahearn/',
}

export const WHERE = 'Online sessions across California'

// One source of truth for fees and format. Every page that shows a fee reads from here.
export type Offer = { name: string; fee: string; format: string[]; note?: string }

const SLIDING = 'Sliding scale, set together in the consult. Out-of-network; superbills available.'

export const OFFERS = {
  individual: {
    name: 'Individual therapy',
    fee: '$250 to $350 per session',
    format: ['50-minute sessions', 'Weekly or every other week', WHERE],
    note: SLIDING,
  },
  family: {
    name: 'Family and teen therapy',
    fee: '$350 to $450 per session',
    format: ['50-minute sessions', 'Weekly to start, then adjusted', WHERE],
    note: SLIDING,
  },
  couples: {
    name: 'Couples therapy',
    fee: '$350 to $450 per session',
    format: ['50-minute sessions', 'Weekly or every other week', WHERE],
    note: SLIDING,
  },
  groups: {
    name: 'Parent support groups',
    fee: '$60 per session',
    format: ['Mondays, 5pm PT, on Zoom', 'Ongoing; join any time', 'Capped at 12 parents'],
    note: 'Open to parents anywhere in the U.S.',
  },
} satisfies Record<string, Offer>

/** Page metadata with a canonical URL that matches Netlify's trailing-slash serving. */
export function pageMeta(path: string, title: string, description: string, extra: Metadata = {}): Metadata {
  const url = `${SITE_URL}${path === '/' ? '/' : `${path}/`}`
  return {
    title,
    description,
    alternates: { canonical: url },
    ...extra,
    openGraph: { url, title, description, ...(extra.openGraph ?? {}) },
  }
}
