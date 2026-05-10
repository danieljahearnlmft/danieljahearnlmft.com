import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-cream-900 text-cream-300">
      <div className="container-main py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
              <Link href="/mens-work" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Men's Attachment Repair Groups</Link>
              <Link href="/services" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Individual, Couples & Family</Link>
              <Link href="/the-way-back-home" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">The Way Back Home</Link>
              <a href="https://waybackhome.app" target="_blank" rel="noopener noreferrer" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Daily Practice (waybackhome.app)</a>
              <Link href="/parent-support-groups" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Parent Support Groups</Link>
              <Link href="/contact" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-cream-500 mb-4">Clinical Approaches</p>
            <div className="flex flex-col gap-2">
              <Link href="/integrative-attachment-therapy" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Integrative Attachment Therapy</Link>
              <Link href="/ideal-parent-figure-protocol" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Ideal Parent Figure Protocol</Link>
              <Link href="/iat-certified-therapist" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">IAT-Certified Therapist</Link>
              <Link href="/earned-secure-attachment" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Earned Secure Attachment</Link>
              <Link href="/attachment-therapy-adults" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Attachment Therapy for Adults</Link>
              <Link href="/healing-attachment-wounds" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Healing Attachment Wounds</Link>
              <Link href="/attachment-styles" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Attachment Styles</Link>
              <Link href="/attachment-based-therapy-los-angeles" className="text-sm text-cream-400 hover:text-cream-100 transition-colors">Therapy in Los Angeles</Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-cream-500 mb-4">Get Started</p>
            <p className="text-sm text-cream-400 mb-4 leading-relaxed">
              Free 15-minute consultation to discuss what you're looking for and whether we're a good fit.
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
