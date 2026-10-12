import { useState } from 'react'
import { Link } from 'react-router-dom'

const WEB3FORMS_ACCESS_KEY = '5a7d81b6-3b40-470d-bf3c-8b4e3be462f3'

const CONTACT_ITEMS = [
  { icon: '📍', label: 'Location', value: 'Baharagora, Jharkhand, India' },
  { icon: '✉️', label: 'Email', value: 'support.auctionarena@gmail.com', href: 'mailto:support.auctionarena@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91 9142473745 · +91 9835656896', href: 'tel:+919142473745' },
]

export default function ContactPage() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const data = new FormData()
      data.append('access_key', WEB3FORMS_ACCESS_KEY)
      data.append('subject', `New Contact Message from Auction Arena!`)
      data.append('from_name', 'Auction Arena Contact Form')
      data.append('name', formData.name)
      data.append('email', formData.email)
      data.append('subject_user', formData.subject)
      data.append('message', formData.message)

      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-bg text-text" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      <div className="orb" style={{ width: '100vw', height: '60vh', background: 'radial-gradient(ellipse at top, rgba(255,90,0,0.08) 0%, transparent 70%)', top: 0, left: 0, filter: 'blur(80px)', position: 'fixed', zIndex: 0 }} />

      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4" style={{ background: 'rgba(10,5,0,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <Link to="/" className="font-bebas text-xl tracking-[3px] text-white no-underline">
          AUCTION<span className="text-[#FF5A00]"> ARENA</span>
        </Link>
        <Link to="/" className="text-muted text-xs font-semibold hover:text-white transition-colors no-underline flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Back to Home
        </Link>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-16 pb-32">

        <div className="mb-14">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-[#FF5A00] mb-4">Support</span>
          <h1 className="font-sans font-semibold text-4xl sm:text-5xl text-white mb-4" style={{ letterSpacing: '-0.02em' }}>Get in Touch</h1>
          <p className="text-muted text-base max-w-xl font-medium">Have a question, found a bug, or want to share feedback? We read every message and reply within 24–48 hours.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          {/* Contact info */}
          <aside className="md:col-span-2 space-y-5">

            {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
              <div key={label} className="p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="text-xs font-bold text-[#FF5A00] uppercase tracking-wide mb-2">{icon} {label}</div>
                {href ? (
                  <a href={href} className="text-white text-sm font-medium hover:text-[#FF5A00] transition-colors no-underline">{value}</a>
                ) : (
                  <p className="text-white text-sm font-medium">{value}</p>
                )}
              </div>
            ))}

            <div className="p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="text-xs font-bold text-[#FF5A00] uppercase tracking-wide mb-3">📣 Follow Us</div>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/_itz.subrata" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors no-underline text-xs font-semibold flex items-center gap-1.5">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/subrata-bala-89516b302" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors no-underline text-xs font-semibold flex items-center gap-1.5">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'rgba(255,90,0,0.05)', border: '1px solid rgba(255,90,0,0.15)' }}>
              <div className="text-xs font-bold text-[#FF5A00] uppercase tracking-wide mb-2">⏱️ Response Time</div>
              <p className="text-white text-sm font-medium">We typically respond within <strong>24–48 hours</strong> on business days.</p>
            </div>

          </aside>

          {/* Form */}
          <div className="md:col-span-3 relative p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>

            {status === 'success' && (
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl" style={{ background: 'rgba(10,5,0,0.92)', backdropFilter: 'blur(12px)' }}>
                <div className="text-center p-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}>
                    <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="font-sans font-semibold text-2xl text-white mb-2">Message Sent!</h3>
                  <p className="text-muted text-sm mb-6">We'll get back to you within 24–48 hours.</p>
                  <button onClick={() => setStatus('idle')} className="btn-outline text-xs" style={{ padding: '0.6rem 1.5rem' }}>Send Another</button>
                </div>
              </div>
            )}

            <h2 className="font-sans font-semibold text-xl text-white mb-6">Send us a message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-muted mb-2 uppercase tracking-wide">Your Name *</label>
                  <input id="contact-name" type="text" name="name" required value={formData.name} onChange={handleChange}
                    placeholder="Jane Doe" className="aa-input" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted mb-2 uppercase tracking-wide">Email Address *</label>
                  <input id="contact-email" type="email" name="email" required value={formData.email} onChange={handleChange}
                    placeholder="jane@example.com" className="aa-input" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted mb-2 uppercase tracking-wide">Subject *</label>
                <input id="contact-subject" type="text" name="subject" required value={formData.subject} onChange={handleChange}
                  placeholder="How can we help?" className="aa-input" />
              </div>

              <div>
                <label className="block text-xs font-bold text-muted mb-2 uppercase tracking-wide">Message *</label>
                <textarea id="contact-message" name="message" rows={5} required value={formData.message} onChange={handleChange}
                  placeholder="Tell us more..." className="aa-input resize-none custom-scrollbar" style={{ borderRadius: '8px' }} />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-xs">Something went wrong. Please try emailing us directly at support.auctionarena@gmail.com</p>
              )}

              <button id="contact-submit" type="submit" disabled={status === 'sending'}
                className="w-full py-4 rounded-full text-sm font-bold transition-all text-black bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>

      </main>

      <footer className="relative z-10 border-t px-6 py-8 text-center" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/" className="text-muted text-xs hover:text-white transition-colors no-underline">Home</Link>
          <Link to="/about" className="text-muted text-xs hover:text-white transition-colors no-underline">About</Link>
          <Link to="/how-it-works" className="text-muted text-xs hover:text-white transition-colors no-underline">How It Works</Link>
          <Link to="/privacy-policy" className="text-muted text-xs hover:text-white transition-colors no-underline">Privacy Policy</Link>
          <Link to="/terms" className="text-muted text-xs hover:text-white transition-colors no-underline">Terms</Link>
        </div>
        <p className="text-muted text-xs mt-4">© 2026 Auction Arena. All rights reserved.</p>
      </footer>
    </div>
  )
}
