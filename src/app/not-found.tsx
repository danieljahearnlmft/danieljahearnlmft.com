import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-cream-200 py-32">
      <div className="container-main max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="text-3xl font-serif text-cream-900 mb-5">Page not found</h1>
        <p className="text-cream-700 mb-8">That page doesn't exist or may have moved.</p>
        <Link href="/" className="btn-primary">Back to Home</Link>
      </div>
    </section>
  )
}
