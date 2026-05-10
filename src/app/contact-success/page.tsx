import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Message Sent',
  robots: { index: false, follow: false },
}

export default function ContactSuccess() {
  return (
    <section className="bg-cream-200 py-32">
      <div className="container-main max-w-xl text-center">
        <p className="eyebrow">Message Received</p>
        <h1 className="text-3xl font-serif text-cream-900 mb-5">Thank you for reaching out.</h1>
        <p className="text-cream-700 leading-relaxed mb-8">
          I'll be in touch within 1–2 business days. If you'd like to move faster, feel free to book a free 30-minute call directly.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="https://calendly.com/danieljahearn/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book a Consult
          </a>
          <Link href="/" className="btn-ghost">Back to Home</Link>
        </div>
      </div>
    </section>
  )
}
