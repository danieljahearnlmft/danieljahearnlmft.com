import Link from 'next/link'
import { Page } from '@/components/site/ui'

export default function NotFound() {
  return (
    <Page>
      <section className="phero on-dark" style={{ textAlign: 'center', padding: '152px 5%' }}>
        <div className="wrap-n">
          <p className="eyebrow gold" style={{ marginBottom: 24 }}>Page not found</p>
          <h1 style={{ margin: '0 auto' }}>This path doesn’t lead anywhere.</h1>
          <p className="sub" style={{ margin: '28px auto 0' }}>The page may have moved. Start from home, or look at therapy and fees.</p>
          <div className="btns" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-gold" href="/">Back to home</Link>
            <Link className="btn btn-line-l" href="/services">Therapy and fees</Link>
          </div>
        </div>
      </section>
    </Page>
  )
}
