import type { Metadata } from 'next'
import ContactSection from './ContactSection'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Daniel J. Ahearn, LMFT for speaking, consulting, press, and clinician inquiries. Los Angeles based, telehealth across CA.',
}

export default function Contact() {
  return <ContactSection />
}
