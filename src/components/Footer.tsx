import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-cream-900 text-cream-300">
      <section className="border-b border-cream-800">
        <div className="container-main py-10 max-w-lg text-center">
          <p className="text-xs uppercase tracking-widest text-cream-500 mb-3">Stay in touch</p>
          <p className="text-sm text-cream-400 leading-relaxed mb-5">
            Occasional notes on attachment and parenting teens. 4–6 emails a year. No spam.
          </p>
          <form
            action="https://app.kit.com/forms/9427872/subscriptions"
            method="post"
            target="_blank"
            className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto"
          >
            <input
              type="email"
              name="email_address"
              placeholder="Email address"
              required
              aria-label="Email address"
              className="flex-1 bg-cream-800 border border-cream-700 text-cream-100 placeholder-cream-500 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-cream-500 transition-colors"
            />
            <button
              type="submit"
              className="btn-primary !bg-cream-500 hover:!bg-cream-400 whitespace-nowrap text-xs"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <div className="container-main py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          <div>
            <p className="font-serif text-cream-100 text-base mb-3">Daniel J. Ahearn, LMFT</p>
            <p className="text-sm text-cream-400 leading-relaxed">
              IAT-Certified Attachment Therapist<br />
              One of six certified practitioners in the U.S.<br />
              Based in Los Angeles, CA<br />
              Telehealth throughout California
            </p>
            <p className="text-sm text-cream-400 mt-4">
              <a href="tel:+12132901146" className="hover:text-cream-100 transition-colors">213-290-1146</a>
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-cream-500 mb-4">Navigation</p>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">About</Link>
              <Link href="/services" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Individual, Couples & Family</Link>
              <Link href="/mens-work" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Men's Attachment Repair Groups</Link>
              <Link href="/the-way-back-home" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">The Way Back Home</Link>
              <a href="https://waybackhome.app" target="_blank" rel="noopener noreferrer" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Daily Practice (waybackhome.app)</a>
              <Link href="/parent-support-groups" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Parent Support Groups</Link>
              <Link href="/contact" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-cream-500 mb-4">Get Started</p>
            <p className="text-sm text-cream-400 mb-4 leading-relaxed">
              Free 30-minute consultation to discuss what you're looking for and whether we're a good fit.
            </p>
            <a
              href="https://calendly.com/danieljahearn/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !bg-cream-500 hover:!bg-cream-400 text-xs"
            >
              Schedule a Consult
            </a>
            <div className="flex gap-4 mt-6">
              <a href="https://substack.com/@danieljahearnlmft" target="_blank" rel="noopener noreferrer" className="text-cream-500 hover:text-cream-200 transition-colors text-sm">Substack</a>
              <a href="https://www.instagram.com/danieljahearnlmft" target="_blank" rel="noopener noreferrer" className="text-cream-500 hover:text-cream-200 transition-colors text-sm">Instagram</a>
              <a href="https://www.linkedin.com/in/daahearn/" target="_blank" rel="noopener noreferrer" className="text-cream-500 hover:text-cream-200 transition-colors text-sm">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream-800 mt-10 pt-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-cream-600">© {new Date().getFullYear()} Daniel J. Ahearn, LMFT. All rights reserved.</p>
          <p className="text-xs text-cream-600">Licensed in California · LMFT 143021</p>
        </div>
      </div>
    </footer>
  )
}
