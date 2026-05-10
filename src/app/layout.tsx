import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Daniel J. Ahearn, LMFT',
    template: '%s | Daniel J. Ahearn, LMFT',
  },
  description: 'IAT-certified attachment therapist in Los Angeles. Working with men, fathers, teens, and families. One of six IAT-certified clinicians in the U.S.',
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
