import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const LAST_UPDATED = 'October 2026'

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms of Service | Auction Arena'
  }, [])

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

      <main className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 py-16 pb-32">

        <div className="mb-12">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-[#FF5A00] mb-4">Legal</span>
          <h1 className="font-sans font-semibold text-4xl sm:text-5xl text-white mb-4" style={{ letterSpacing: '-0.02em' }}>Terms of Service</h1>
          <p className="text-muted text-sm font-medium">Last updated: <strong className="text-white">{LAST_UPDATED}</strong></p>
        </div>

        <div className="space-y-10 text-muted text-sm leading-[1.85] font-medium">

          <Section>
            Welcome to <strong className="text-white">Auction Arena</strong>. By accessing or using our platform at <strong className="text-white">auctionarena.org</strong>, you agree to be bound by these Terms of Service ("Terms"). Please read them carefully. If you do not agree to these Terms, you must not use our service.
          </Section>

          <Section title="1. Eligibility &amp; Acceptance">
            <p>By using Auction Arena, you confirm that:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>You are at least <strong className="text-white">13 years of age</strong>.</li>
              <li>You have the legal capacity to enter into a binding agreement.</li>
              <li>The information you provide during registration is accurate and up to date.</li>
            </ul>
            <p className="mt-3">Continued use of the platform constitutes your acceptance of these Terms and any future updates.</p>
          </Section>

          <Section title="2. Nature of the Platform — Simulation Only">
            <p>
              Auction Arena is strictly a <strong className="text-white">simulation and entertainment gaming platform</strong>. It replicates the mechanics of live sports auctions (such as IPL-style cricket auctions) in a multiplayer environment for recreational purposes.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong className="text-white">No real money is wagered, won, or lost</strong> through gameplay on this platform.</li>
              <li>All "Purses," "Bids," and "Player Prices" are <strong className="text-white">virtual currency with zero real-world monetary value</strong>.</li>
              <li>This platform is not a gambling or fantasy sports platform and is not regulated as such.</li>
            </ul>
          </Section>

          <Section title="3. User Accounts &amp; Responsibilities">
            <ul className="list-disc pl-6 space-y-2">
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You are solely responsible for all activity that occurs under your account.</li>
              <li>You must not share your account or allow others to access your profile.</li>
              <li>You must not impersonate another person or use a misleading username.</li>
            </ul>
          </Section>

          <Section title="4. Gameplay Rules &amp; Fair Play">
            <ul className="list-disc pl-6 space-y-2">
              <li>All auction bids placed within the system are final and cannot be reversed once the timer expires.</li>
              <li>Auction results, player allocations, and timer resolutions are governed entirely by the platform's server-side logic.</li>
              <li>Users are expected to maintain sportsmanship and fair play at all times.</li>
              <li>Attempting to manipulate, exploit, or hack the auction system is strictly prohibited and may result in account termination.</li>
              <li>Room hosts bear responsibility for the conduct within rooms they create.</li>
            </ul>
          </Section>

          <Section title="5. Content &amp; Intellectual Property">
            <p>
              The names, player data, league names (IPL, Pro Kabaddi, etc.), and sport references used on this platform are included for simulation purposes only. Auction Arena is <strong className="text-white">not affiliated with, endorsed by, or in partnership with</strong> the Indian Premier League (IPL), BCCI, PKL, or any other sports organisation or governing body.
            </p>
            <p className="mt-3">
              All platform code, design, and original assets are the intellectual property of Auction Arena. You may not copy, reproduce, or distribute them without written consent.
            </p>
          </Section>

          <Section title="6. Advertisements">
            <p>
              Auction Arena displays advertisements served by <strong className="text-white">Google AdSense</strong> on our public pages. By using the site, you acknowledge that you may be shown contextual and personalised advertisements. You can manage your ad preferences through{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#FF5A00] hover:text-white transition-colors">Google Ads Settings</a>.
            </p>
          </Section>

          <Section title="7. Donations">
            <p>
              Voluntary donations to support platform development are processed securely through Razorpay. Donations are non-refundable and confer no specific advantages or privileges within the game. Donation links are to Razorpay payment pages and are governed by their Terms of Service.
            </p>
          </Section>

          <Section title="8. Prohibited Conduct">
            <p>You agree NOT to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Use the platform for any illegal purpose or in violation of any applicable laws.</li>
              <li>Upload or transmit harmful, abusive, hateful, or otherwise objectionable content.</li>
              <li>Attempt to interfere with, disrupt, or bypass any security feature of the platform.</li>
              <li>Use automated bots, scripts, or tools to interact with the auction system.</li>
              <li>Engage in any activity that harms other users or the platform's operation.</li>
            </ul>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              Because Auction Arena is a <strong className="text-white">free-to-play simulation</strong>, we bear no financial liability for:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Any perceived "losses" in gameplay (all currency is virtual).</li>
              <li>Service interruptions, server downtime, or data loss due to technical issues.</li>
              <li>Internet disconnections or device compatibility issues affecting gameplay.</li>
            </ul>
            <p className="mt-3">To the maximum extent permitted by applicable law, our total liability is limited to zero, as the service is provided free of charge.</p>
          </Section>

          <Section title="10. Termination">
            <p>
              We reserve the right to suspend or terminate your account at any time if you violate these Terms, engage in abusive behaviour, or act in a manner harmful to other users or the platform. We will make reasonable efforts to notify you before taking such action.
            </p>
          </Section>

          <Section title="11. Changes to These Terms">
            <p>
              We may update these Terms periodically. We will notify you by updating the "Last updated" date at the top of this page. Your continued use of Auction Arena after changes constitutes your acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>For questions or concerns about these Terms, please contact:</p>
            <div className="mt-4 p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <p><strong className="text-white">Auction Arena</strong></p>
              <p className="mt-1">📍 Baharagora, Jharkhand, India</p>
              <p className="mt-1">✉️ <a href="mailto:support.auctionarena@gmail.com" className="text-[#FF5A00] hover:text-white transition-colors">support.auctionarena@gmail.com</a></p>
            </div>
          </Section>

        </div>

        <div className="mt-20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span className="text-muted text-xs">© 2026 Auction Arena. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-muted text-xs hover:text-white transition-colors no-underline">Privacy Policy</Link>
            <Link to="/about" className="text-muted text-xs hover:text-white transition-colors no-underline">About</Link>
            <Link to="/" className="text-muted text-xs hover:text-white transition-colors no-underline">Home</Link>
          </div>
        </div>

      </main>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section>
      {title && (
        <h2 className="font-sans font-semibold text-lg text-white mb-4" style={{ letterSpacing: '-0.01em' }}>
          {title}
        </h2>
      )}
      <div className="space-y-2">{children}</div>
    </section>
  )
}
