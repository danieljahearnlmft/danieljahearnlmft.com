import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Schedule a free 15-minute consultation with Daniel J. Ahearn, LMFT. Based in Los Angeles, telehealth throughout California.',
}

export default function Contact() {
  return (
    <>
      <section className="bg-cream-200 py-16 md:py-24">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow">Contact</p>
              <h1 className="text-4xl font-serif text-cream-900 mb-5">Get in touch</h1>
              <p className="text-cream-700 leading-relaxed mb-8">
                The best starting point is a free 15-minute phone consultation. We'll discuss what you're navigating, what you're hoping changes, and whether my approach is a good fit for you.
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
                  <p className="text-xs uppercase tracking-widest text-cream-500 mb-2">Location</p>
                  <p className="text-cream-700 text-sm">Los Angeles, CA</p>
                  <p className="text-cream-600 text-sm">Telehealth throughout California</p>
                  <p className="text-cream-600 text-sm">Walk-and-talk available in LA</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-cream-500 mb-2">Social</p>
                  <div className="flex gap-4">
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

            {/* Contact form — handled by Netlify */}
            <div className="bg-cream-50 border border-cream-300 rounded-lg p-8">
              <p className="font-serif text-xl text-cream-900 mb-6">Send a message</p>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/contact-success/"
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-cream-600 mb-1.5" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-cream-300 bg-white rounded px-3 py-2.5 text-sm text-cream-900 focus:outline-none focus:border-cream-500"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-cream-600 mb-1.5" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-cream-300 bg-white rounded px-3 py-2.5 text-sm text-cream-900 focus:outline-none focus:border-cream-500"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-cream-600 mb-1.5" htmlFor="interest">What brings you here?</label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full border border-cream-300 bg-white rounded px-3 py-2.5 text-sm text-cream-900 focus:outline-none focus:border-cream-500"
                  >
                    <option value="">Select one</option>
                    <option>Individual therapy</option>
                    <option>Men's Attachment Repair Group</option>
                    <option>Family & Teen work</option>
                    <option>Couples therapy</option>
                    <option>Parent Support Groups</option>
                    <option>Consulting / speaking</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-cream-600 mb-1.5" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full border border-cream-300 bg-white rounded px-3 py-2.5 text-sm text-cream-900 focus:outline-none focus:border-cream-500 resize-none"
                    placeholder="Tell me a little about what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-center justify-center"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
