import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-parch-200 py-32">
      <div className="container-main max-w-xl text-center">
        <p className="s-eyebrow">404</p>
        <h1 className="text-3xl font-display text-parch-900 mb-5">Page not found</h1>
        <p className="text-parch-700 mb-8">That page doesn't exist or may have moved.</p>
        <Link href="/" className="s-btn-primary">Back to Home</Link>
      </div>
    </section>
  )
}
