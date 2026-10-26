'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { EMAIL, OFFERS, PHONE, PHONE_HREF, SOCIAL, WHERE } from '@/lib/site'
import { ConsultButton, Page } from '@/components/site/ui'

const fees = [OFFERS.individual, OFFERS.couples, OFFERS.family, OFFERS.groups]

export default function ContactSection() {
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setSuccess(new URLSearchParams(window.location.search).get('success') === 'true')
  }, [])

  return (
    <Page>
      <section className="phero on-dark" style={{ paddingBottom: 96 }}>
        <div className="wrap">
          <p className="eyebrow gold" style={{ marginBottom: 24 }}>Contact</p>
          <h1>Get in touch.</h1>
          <p className="sub">For therapy, the best first step is a free 15-minute call. For anything else, write to me below.</p>
          <div className="btns"><ConsultButton /></div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap cols">
          <div style={{ flex: '1 1 340px' }}>
            <p className="eyebrow">Reach me</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22, fontSize: 17, color: 'var(--ink2)' }}>
              <div>
                <p style={{ color: 'var(--mute)', fontSize: 13, letterSpacing: '.16em', textTransform: 'uppercase' }}>Phone</p>
                <a href={PHONE_HREF} style={{ color: 'var(--ink)', fontSize: 20 }}>{PHONE}</a>
              </div>
              <div>
                <p style={{ color: 'var(--mute)', fontSize: 13, letterSpacing: '.16em', textTransform: 'uppercase' }}>Email</p>
                <a href={`mailto:${EMAIL}`} style={{ color: 'var(--ink)', fontSize: 20 }}>{EMAIL}</a>
              </div>
              <div>
                <p style={{ color: 'var(--mute)', fontSize: 13, letterSpacing: '.16em', textTransform: 'uppercase' }}>Where</p>
                <p>Based in Los Angeles<br />{WHERE}</p>
              </div>
              <div>
                <p style={{ color: 'var(--mute)', fontSize: 13, letterSpacing: '.16em', textTransform: 'uppercase' }}>Elsewhere</p>
                <p style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                  <a href={SOCIAL.substack} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textDecorationColor: 'var(--gold)' }}>Substack</a>
                  <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textDecorationColor: 'var(--gold)' }}>Instagram</a>
                  <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textDecorationColor: 'var(--gold)' }}>LinkedIn</a>
                </p>
              </div>
            </div>

            <div style={{ marginTop: 44, paddingTop: 28, borderTop: '1px solid var(--line)' }}>
              <p className="eyebrow">Fees</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 17 }}>
                {fees.map((o) => (
                  <div key={o.name} className="fee">
                    <span style={{ color: 'var(--mute)' }}>{o.name}</span>
                    <span style={{ fontWeight: 500 }}>{o.fee}</span>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 14, fontSize: 14, color: 'var(--mute)' }}>
                Therapy fees are on a sliding scale, set together in the consult. Out-of-network; superbills available. <Link href="/services" style={{ textDecoration: 'underline' }}>Details</Link>
              </p>
            </div>
          </div>

          <div className="card" style={{ flex: '1 1 440px' }}>
            {success ? (
              <div>
                <p className="eyebrow">Message received</p>
                <h2 style={{ fontWeight: 400, fontSize: 36, lineHeight: 1.1 }}>Thank you for reaching out.</h2>
                <p style={{ marginTop: 16, color: 'var(--ink2)' }}>I’ll be in touch within 1 to 2 business days. If you’d like to move faster, book a free call directly.</p>
                <div className="btns" style={{ marginTop: 28 }}>
                  <ConsultButton tone="dark" />
                </div>
              </div>
            ) : (
              <>
                <h2 style={{ fontWeight: 400, fontSize: 36, lineHeight: 1.1, marginBottom: 20 }}>Send a message</h2>
                <p className="notice" style={{ marginBottom: 28 }}>
                  For speaking, consulting, press, questions about the book, or referrals. Please don’t share clinical or health information here. If you’re looking for therapy, book the free 15-minute call instead.
                </p>

                <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/contact/?success=true" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden-field" aria-hidden="true">
                    <label>
                      Don&apos;t fill this out if you&apos;re human:
                      <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <div className="field">
                    <label htmlFor="contact-name">Name</label>
                    <input type="text" id="contact-name" name="name" autoComplete="name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-email">Email</label>
                    <input type="email" id="contact-email" name="email" autoComplete="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-subject">What brings you here?</label>
                    <select id="contact-subject" name="subject" required>
                      <option value="">Select one</option>
                      <option value="speaking">Speaking or consulting</option>
                      <option value="book">A question about the book</option>
                      <option value="press">Press or media</option>
                      <option value="clinician">Clinician referral or training</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" name="message" rows={6} required style={{ resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn btn-dark" style={{ border: 0, cursor: 'pointer', fontFamily: 'inherit' }}>Send message</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </Page>
  )
}
