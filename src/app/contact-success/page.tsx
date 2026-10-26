import type { Metadata } from 'next'
import Link from 'next/link'
import { ConsultButton, Page } from '@/components/site/ui'

export const metadata: Metadata = {
  title: 'Message Sent',
  robots: { index: false, follow: false },
}

export default function ContactSuccess() {
  return (
    <Page>
      <section className="phero on-dark" style={{ textAlign: 'center', padding: '152px 5%' }}>
        <div className="wrap-n">
          <p className="eyebrow gold" style={{ marginBottom: 24 }}>Message received</p>
          <h1 style={{ margin: '0 auto' }}>Thank you for reaching out.</h1>
          <p className="sub" style={{ margin: '28px auto 0' }}>I’ll be in touch within 1 to 2 business days. If you’d like to move faster, book a free call directly.</p>
          <div className="btns" style={{ justifyContent: 'center' }}>
            <ConsultButton />
            <Link className="btn btn-line-l" href="/">Back to home</Link>
          </div>
        </div>
      </section>
    </Page>
  )
}
