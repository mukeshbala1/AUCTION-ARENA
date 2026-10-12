import { Link } from 'react-router-dom'

const LAST_UPDATED = 'October 2026'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg text-text" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Ambient glow */}
      <div className="orb" style={{ width: '100vw', height: '60vh', background: 'radial-gradient(ellipse at top, rgba(255,90,0,0.08) 0%, transparent 70%)', top: 0, left: 0, filter: 'blur(80px)', position: 'fixed', zIndex: 0 }} />

      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4" style={{ background: 'rgba(10,5,0,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <Link to="/" className="font-bebas text-xl tracking-[3px] text-white no-underline">
          AUCTION<span className="text-[#FF5A00]"> ARENA</span>
        </Link>
        <Link to="/" className="text-muted text-xs font-semibold hover:text-white transition-colors no-underline flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Back to Home
        </Link>
      </nav>

      {/* Content */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 py-16 pb-32">

        <div className="mb-12">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-[#FF5A00] mb-4">Legal</span>
          <h1 className="font-sans font-semibold text-4xl sm:text-5xl text-white mb-4" style={{ letterSpacing: '-0.02em' }}>Privacy Policy</h1>
          <p className="text-muted text-sm font-medium">Last updated: <strong className="text-white">{LAST_UPDATED}</strong></p>
        </div>

        <div className="space-y-10 text-muted text-sm leading-[1.85] font-medium">

          <Section>
            Welcome to <strong className="text-white">Auction Arena</strong> ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website at <strong className="text-white">auctionarena.org</strong>. By using Auction Arena, you agree to the practices described in this policy.
          </Section>

          <Section title="1. Information We Collect">
            <p>To deliver a high-quality auction gaming experience, we collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong className="text-white">Account Information:</strong> Your display name, username, and email address — collected during sign-in via Google OAuth.</li>
              <li><strong className="text-white">Gameplay Data:</strong> Auction room history, bids placed, team selections, squad compositions, and general in-game activity.</li>
              <li><strong className="text-white">Technical / Device Data:</strong> Browser type, device type, operating system, IP address, and referring URLs — used for analytics and platform stability.</li>
              <li><strong className="text-white">Cookies &amp; Similar Technologies:</strong> We and our third-party partners (including Google) use cookies and similar tracking technologies. See Section 5 for details.</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the collected data for the following purposes:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Creating and managing your Auction Arena user profile.</li>
              <li>Enabling real-time multiplayer auction rooms, live bidding, and squad management.</li>
              <li>Providing AI-powered squad analysis via Google Gemini.</li>
              <li>Monitoring platform stability, fixing bugs, and improving user experience.</li>
              <li>Enforcing fair-play rules and preventing abuse or misuse of the system.</li>
              <li>Sending transactional emails (e.g. login reminders) when you have opted in.</li>
              <li><strong className="text-white">Serving contextual and interest-based advertisements</strong> through Google AdSense (see Section 5).</li>
            </ul>
          </Section>

          <Section title="3. Virtual Currency &amp; No Real Money">
            <p>
              Auction Arena is strictly an <strong className="text-white">entertainment and simulation platform</strong>. All "Purses," "Bids," and "Player Prices" within the game are virtual and hold <strong className="text-white">zero real-world monetary value</strong>. We do not collect, process, or store any payment card details or banking data in connection with gameplay.
            </p>
            <p className="mt-3">
              Voluntary donations to support the project are processed securely via Razorpay. We do not store your card or bank details — all payment processing is handled exclusively by Razorpay under their own privacy policy.
            </p>
          </Section>

          <Section title="4. Data Sharing &amp; Third Parties">
            <p>We do not sell your personal information. We share data only in the following limited circumstances:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong className="text-white">Supabase (Infrastructure):</strong> Our database, authentication, and real-time services are hosted on Supabase. Data is stored securely in their PostgreSQL database.</li>
              <li><strong className="text-white">Google Gemini AI:</strong> Post-auction squad data is sent to Google's Gemini API to generate analysis reports. No personally identifiable information is included in these requests.</li>
              <li><strong className="text-white">Google AdSense (Advertising):</strong> We use Google AdSense to display advertisements. Google may use cookies to serve personalised ads based on your visits to this and other sites. See Section 5 for opt-out options.</li>
              <li><strong className="text-white">Resend (Email):</strong> Transactional reminder emails are delivered via Resend's email infrastructure.</li>
              <li><strong className="text-white">Legal requirements:</strong> We may disclose information when required by law or to protect the rights and safety of our users.</li>
            </ul>
          </Section>

          <Section title="5. Cookies, Advertising &amp; Google AdSense">
            <p>
              Auction Arena uses <strong className="text-white">Google AdSense</strong> to display advertisements. Google AdSense uses cookies (including the <code className="text-orange-400 text-xs bg-orange-500/10 px-1.5 py-0.5 rounded">DoubleClick cookie</code>) to serve ads based on your prior visits to our site or other websites on the internet.
            </p>
            <p className="mt-3">
              Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to Auction Arena and/or other sites on the internet. You may <strong className="text-white">opt out of personalised advertising</strong> by:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#FF5A00] hover:text-white transition-colors">Google Ads Settings</a></li>
              <li>Visiting the <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-[#FF5A00] hover:text-white transition-colors">Network Advertising Initiative opt-out page</a></li>
              <li>Installing the <a href="https://support.google.com/ads/answer/7395996" target="_blank" rel="noopener noreferrer" className="text-[#FF5A00] hover:text-white transition-colors">Google Analytics Opt-out Browser Add-on</a></li>
            </ul>
            <p className="mt-3">
              For more information about how Google uses data when you use our website, please visit:{' '}
              <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-[#FF5A00] hover:text-white transition-colors">
                How Google uses data from sites that use our services
              </a>.
            </p>
            <p className="mt-3">
              We may also use first-party cookies to remember your session and preferences. You can control cookies through your browser settings, however disabling cookies may affect some features of the site.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain your account and gameplay data for as long as your account is active. If you wish to delete your account and associated data, please contact us at the email address below. We will process deletion requests within 30 days.
            </p>
          </Section>

          <Section title="7. Children's Privacy">
            <p>
              Auction Arena is intended for users aged <strong className="text-white">13 and above</strong>. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal data, please contact us immediately so we can take corrective action.
            </p>
          </Section>

          <Section title="8. Security">
            <p>
              We implement industry-standard security practices including encrypted data transmission (HTTPS), secure authentication via OAuth 2.0, and row-level security policies in our database. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the "Last updated" date at the top of this page. Continued use of Auction Arena after changes constitutes your acceptance of the revised policy.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
            <div className="mt-4 p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <p><strong className="text-white">Auction Arena</strong></p>
              <p className="mt-1">📍 Baharagora, Jharkhand, India</p>
              <p className="mt-1">✉️ <a href="mailto:support.auctionarena@gmail.com" className="text-[#FF5A00] hover:text-white transition-colors">support.auctionarena@gmail.com</a></p>
              <p className="mt-1">📞 +91 9142473745</p>
            </div>
          </Section>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span className="text-muted text-xs">© 2026 Auction Arena. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="text-muted text-xs hover:text-white transition-colors no-underline">Terms of Service</Link>
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
