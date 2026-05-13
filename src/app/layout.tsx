import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Daniel J. Ahearn, LMFT',
    template: '%s | Daniel J. Ahearn, LMFT',
  },
  description: 'Author of The Way Back Home — now on Audible. IAT-certified attachment therapist in Los Angeles. One of six IAT-certified clinicians in the U.S.',
  metadataBase: new URL('https://danieljahearnlmft.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://danieljahearnlmft.com',
    siteName: 'Daniel J. Ahearn, LMFT',
    images: [{ url: '/images/daniel-hero.jpg', alt: 'Daniel J. Ahearn, LMFT' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/daniel-hero.jpg'],
  },
  verification: {
    google: '-xvVkJmV51eF9ynLqQR86bszu1VexnY3d5A2YxegXc8',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="danieljahearnlmft.com" src="https://plausible.io/js/script.outbound-links.file-downloads.404.tagged-events.js" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
