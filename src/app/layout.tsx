import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Daniel J. Ahearn, LMFT',
    template: '%s | Daniel J. Ahearn, LMFT',
  },
  description: 'IAT-certified attachment therapist in Los Angeles. Working with men, fathers, teens, and families using the Ideal Parent Figure Protocol. One of six certified IAT clinicians in the U.S.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://danieljahearnlmft.com',
    siteName: 'Daniel J. Ahearn, LMFT',
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
