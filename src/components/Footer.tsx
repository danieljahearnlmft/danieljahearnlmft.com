'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  if (pathname?.startsWith('/pathwork')) return null
  if (pathname?.startsWith('/visualization')) return null

  return (
    <footer className="bg-[#142016] text-[#D8DFD3]">
      <section className="border-b border-[#2E4232]">
        <div className="container-main py-10 max-w-lg text-center">
          <p className="text-xs uppercase tracking-widest text-[#C9A96A] mb-3">Read me on Substack</p>
          <p className="text-sm text-[#B7C3B3] leading-relaxed mb-5">
            I write on attachment and parenting teens. Come read.
          </p>
          <a
            href="https://danieljahearnlmft.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="s-btn-primary !bg-[#C9A96A] !text-[#1C2B1E] hover:!brightness-110 whitespace-nowrap text-xs plausible-event-name=Substack+Click+Footer"
          >
            Subscribe on Substack
          </a>
        </div>
      </section>

      <div className="container-main py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          <div>
            <p className="font-display italic text-[#F4F0EA] text-xl mb-3">Daniel J. Ahearn, LMFT</p>
            <p className="text-sm text-[#B7C3B3] leading-relaxed">
              IAT-Certified Attachment Therapist<br />
              Based in Los Angeles, CA<br />
              Telehealth throughout California
            </p>
            <p className="text-sm text-[#B7C3B3] mt-4">
              <a href="tel:+12132901146" className="hover:text-white transition-colors">213-290-1146</a>
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#C9A96A] mb-4">Navigation</p>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-[#B7C3B3] hover:text-white transition-colors">About</Link>
              <Link href="/services" className="text-sm text-[#B7C3B3] hover:text-white transition-colors">Individual, Couples & Family</Link>
              <Link href="/mens-work" className="text-sm text-[#B7C3B3] hover:text-white transition-colors">Men's Attachment Repair Groups</Link>
              <Link href="/the-way-back-home" className="text-sm text-[#B7C3B3] hover:text-white transition-colors">The Way Back Home</Link>
              <a href="https://waybackhome.app" target="_blank" rel="noopener noreferrer" className="text-sm text-[#B7C3B3] hover:text-white transition-colors plausible-event-name=App+Open">Practice (waybackhome.app)</a>
              <Link href="/parent-support-groups" className="text-sm text-[#B7C3B3] hover:text-white transition-colors">Parent Support Groups</Link>
              <Link href="/writing" className="text-sm text-[#B7C3B3] hover:text-white transition-colors">Writing</Link>
              <Link href="/contact" className="text-sm text-[#B7C3B3] hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#C9A96A] mb-4">Get Started</p>
            <p className="text-sm text-[#B7C3B3] mb-4 leading-relaxed">
              Free 15-minute consultation to discuss what you're looking for and whether we're a good fit.
            </p>
            <a
              href="https://calendly.com/danieljahearn/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="s-btn-primary !bg-[#C9A96A] !text-[#1C2B1E] hover:!brightness-110 text-xs plausible-event-name=Calendly+Click"
            >
              Schedule a Consult
            </a>
            <div className="flex gap-4 mt-6">
              <a href="https://danieljahearnlmft.substack.com" target="_blank" rel="noopener noreferrer" className="text-[#C9A96A] hover:text-white transition-colors text-sm plausible-event-name=Substack+Click">Substack</a>
              <a href="https://www.instagram.com/danieljahearnlmft" target="_blank" rel="noopener noreferrer" className="text-[#C9A96A] hover:text-white transition-colors text-sm">Instagram</a>
              <a href="https://www.linkedin.com/in/daahearn/" target="_blank" rel="noopener noreferrer" className="text-[#C9A96A] hover:text-white transition-colors text-sm">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2E4232] mt-10 pt-7">
          <p className="text-xs uppercase tracking-widest text-[#C9A96A] mb-3">Topics</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs leading-relaxed">
            <Link href="/integrative-attachment-therapy" className="text-[#C9A96A] hover:text-white transition-colors">Integrative Attachment Therapy</Link>
            <Link href="/parent-support-groups/#real-method" className="text-[#C9A96A] hover:text-white transition-colors">R.E.A.L. Method</Link>
            <Link href="/mens-work/#real-for-men" className="text-[#C9A96A] hover:text-white transition-colors">R.E.A.L. for Men</Link>
            <Link href="/ideal-parent-figure-protocol" className="text-[#C9A96A] hover:text-white transition-colors">IPF Protocol</Link>
            <Link href="/iat-certified-therapist" className="text-[#C9A96A] hover:text-white transition-colors">IAT-Certified Therapist</Link>
            <Link href="/healing-attachment-wounds" className="text-[#C9A96A] hover:text-white transition-colors">Healing Attachment Wounds</Link>
            <Link href="/attachment-based-therapy-los-angeles" className="text-[#C9A96A] hover:text-white transition-colors">Therapy in Los Angeles</Link>
          </div>
        </div>

        <div className="border-t border-[#2E4232] mt-7 pt-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-[#93A38F]">© {new Date().getFullYear()} Daniel J. Ahearn, LMFT. All rights reserved.</p>
          <p className="text-xs text-[#93A38F]">Licensed in California · LMFT 143021</p>
        </div>
      </div>
    </footer>
  )
}
