import type { Metadata } from 'next'
import './globals.css'
import './site.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { LICENSE, NAME, PHONE, SITE_URL, SOCIAL } from '@/lib/site'

export const metadata: Metadata = {
  title: {
    default: NAME,
    template: `%s | ${NAME}`,
  },
  description: 'IAT-certified attachment therapist based in Los Angeles, seeing clients online across California. Author of The Way Back Home. Trained directly with Dr. Daniel P. Brown and Dr. David Elliott.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: NAME,
    images: [{ url: '/images/daniel-hero.jpg', alt: NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/daniel-hero.jpg'],
  },
  verification: {
    google: '-xvVkJmV51eF9ynLqQR86bszu1VexnY3d5A2YxegXc8',
  },
}

// Who Daniel is and what the practice offers, in the form search engines read.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#daniel`,
      name: 'Daniel J. Ahearn',
      honorificSuffix: 'LMFT',
      jobTitle: 'Licensed Marriage and Family Therapist',
      description: 'IAT-certified attachment therapist and author of The Way Back Home: Healing Attachment Wounds With Your Teen.',
      url: `${SITE_URL}/about/`,
      image: `${SITE_URL}/images/home/portrait.jpg`,
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: `Licensed Marriage and Family Therapist (${LICENSE})`,
        recognizedBy: { '@type': 'Organization', name: 'California Board of Behavioral Sciences' },
      },
      knowsAbout: ['Attachment therapy', 'Integrative Attachment Therapy', 'Ideal Parent Figure protocol', 'Parenting teenagers', 'Couples therapy', 'Family therapy'],
      sameAs: [SOCIAL.substack, SOCIAL.instagram, SOCIAL.linkedin],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#practice`,
      name: 'Daniel J. Ahearn, LMFT',
      url: `${SITE_URL}/`,
      telephone: `+1-${PHONE}`,
      image: `${SITE_URL}/images/home/portrait.jpg`,
      priceRange: '$60 to $450',
      address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
      areaServed: { '@type': 'State', name: 'California' },
      founder: { '@id': `${SITE_URL}/#daniel` },
      description: 'Attachment-based individual, couples and family therapy online across California, and national parent support groups for parents of teenagers.',
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Individual attachment therapy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Couples attachment therapy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Family and teen therapy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parent support groups for parents of teens' } },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#site`,
      url: `${SITE_URL}/`,
      name: NAME,
      publisher: { '@id': `${SITE_URL}/#daniel` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="danieljahearnlmft.com" src="https://plausible.io/js/script.outbound-links.file-downloads.tagged-events.js" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
