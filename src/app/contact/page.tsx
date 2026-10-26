import { pageMeta } from '@/lib/site'
import ContactSection from './ContactSection'

export const metadata = pageMeta(
  '/contact',
  'Contact',
  'Book a free 15-minute consult for therapy, or get in touch about speaking, consulting, press, or referrals. Based in Los Angeles, online across California.',
)

export default function Contact() {
  return <ContactSection />
}
