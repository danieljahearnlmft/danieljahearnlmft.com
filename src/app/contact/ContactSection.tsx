'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ContactSection() {
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      setSuccess(params.get('success') === 'true')
    }
  }, [])

  return (
    <section className="bg-cream-200 py-16 md:py-24">
      <div className="container-main max-w-4xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="text-4xl font-serif text-cream-900 mb-5">Get in touch</h1>
            <p className="text-cream-700 leading-relaxed mb-8">
              The best starting point for therapy clients is a free 15-minute phone consultation. For speaking, consulting, press, or clinician inquiries, the form to the right is the right channel.
            </p>

            <div className="space-y-5 mb-10">
              <div>
                <p className="text-xs uppercase tracking-widest text-cream-500 mb-1.5">Schedule a Consult</p>
                <a
                  href="https://calendly.com/danieljahearn/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book Free 15-Min Call
                </a>
              </div>

              <div className="pt-2">
                <p className="text-xs uppercase tracking-widest text-cream-500 mb-2">Phone</p>
                <p className="text-cream-700 text-sm">
                  <a href="tel:+12132901146" className="hover:text-cream-900 transition-colors">213-290-1146</a>
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-cream-500 mb-2">Location</p>
                <p className="text-cream-700 text-sm">Los Angeles, CA</p>
                <p className="text-cream-600 text-sm">Telehealth throughout California</p>
                <p className="text-cream-600 text-sm">Walk-and-talk available in LA</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-cream-500 mb-2">Social</p>
                <div className="flex gap-4">
                  <a href="https://substack.com/@danieljahearnlmft" target="_blank" rel="noopener noreferrer" className="text-cream-600 text-sm hover:text-cream-900 transition-colors">Substack</a>
                  <a href="https://www.instagram.com/danieljahearnlmft" target="_blank" rel="noopener noreferrer" className="text-cream-600 text-sm hover:text-cream-900 transition-colors">Instagram</a>
                  <a href="https://www.linkedin.com/in/daahearn/" target="_blank" rel="noopener noreferrer" className="text-cream-600 text-sm hover:text-cream-900 transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="border-t border-cream-300 pt-7">
              <p className="text-xs uppercase tracking-widest text-cream-500 mb-3">Rates</p>
              <div className="space-y-1.5 text-sm text-cream-700">
                <p>Individual therapy — $300 per session</p>
                <p>Family / couples — $400 per session</p>
                <p>Men's group cohort — $5,500 for 16 weeks</p>
                <p>Parent support groups — $60 per session</p>
              </div>
              <p className="text-cream-500 text-xs mt-3">Out-of-network provider. Superbills available for reimbursement.</p>
            </div>
          </div>

          {/* Form column */}
          <div className="bg-cream-50 border border-cream-300 rounded-lg p-8">
            {success ? (
              <div>
                <p className="eyebrow">Message Received</p>
                <h2 className="font-serif text-2xl text-cream-900 mb-4">Thank you for reaching out.</h2>
                <p className="text-cream-700 leading-relaxed mb-6">
                  I'll be in touch within 1–2 business days. If you'd like to move faster, feel free to book a free 15-minute call directly.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://calendly.com/danieljahearn/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Book a Consult
                  </a>
                  <Link href="/" className="btn-ghost">Back to Home</Link>
                </div>
              </div>
            ) : (
              <>
                <p className="font-serif text-xl text-cream-900 mb-4">Send a message</p>

                <p className="form-disclaimer">
                  Use this form for general inquiries only — speaking, consulting, questions about the book, or referrals. Please do not share clinical or health information here. To inquire about therapy, please use the application forms on the <Link href="/services">Services page</Link>.
                </p>

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/contact/?success=true"
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <p className="hidden-field" aria-hidden="true">
                    <label>
                      Don&apos;t fill this out if you&apos;re human:
                      <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-cream-600 mb-1.5" htmlFor="contact-name">Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      className="w-full border border-cream-300 bg-white rounded px-3 py-2.5 text-sm text-cream-900 focus:outline-none focus:border-cream-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-cream-600 mb-1.5" htmlFor="contact-email">Email</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      className="w-full border border-cream-300 bg-white rounded px-3 py-2.5 text-sm text-cream-900 focus:outline-none focus:border-cream-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-cream-600 mb-1.5" htmlFor="contact-subject">What brings you here?</label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      className="w-full border border-cream-300 bg-white rounded px-3 py-2.5 text-sm text-cream-900 focus:outline-none focus:border-cream-500"
                    >
                      <option value="">Select one</option>
                      <option value="speaking">Speaking / consulting inquiry</option>
                      <option value="book">Question about the book</option>
                      <option value="press">Press / media</option>
                      <option value="clinician">Clinician referral or training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-cream-600 mb-1.5" htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      required
                      className="w-full border border-cream-300 bg-white rounded px-3 py-2.5 text-sm text-cream-900 focus:outline-none focus:border-cream-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-center justify-center"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
