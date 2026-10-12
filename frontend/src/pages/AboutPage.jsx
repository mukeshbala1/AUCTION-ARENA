import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const TEAM = [
  {
    name: 'Subrata Bala',
    role: 'Full-Stack Developer & Co-Founder',
    bio: 'Subrata built the core auction engine, real-time Socket.io infrastructure, and backend API powering Auction Arena. He is passionate about building tools that bring communities together.',
    instagram: 'https://www.instagram.com/_itz.subrata',
    linkedin: 'https://www.linkedin.com/in/subrata-bala-89516b302',
    location: 'Baharagora, Jharkhand',
  },
  {
    name: 'Mukesh Bala',
    role: 'Frontend Developer & Co-Founder',
    bio: 'Mukesh designed and built the entire React-based frontend, including the live auction UI, real-time bidding animations, and the Gemini AI analysis dashboard.',
    instagram: 'https://www.instagram.com/mm__raj',
    linkedin: 'https://www.linkedin.com/in/mukeshbala143',
    location: 'Baharagora, Jharkhand',
  },
]

const TECH = [
  { label: 'AI Analysis', value: 'Google Gemini API — post-auction squad rankings & insights' },
  { label: 'Voice Announcer', value: 'Web Speech API — real-time voice announcements during bidding' },
  { label: 'Export', value: 'SheetJS — browser-side Excel (.xlsx) export of squad data' },

]

const MILESTONES = [
  { year: 'Apr 2026', event: 'Auction Arena launched with IPL Cricket support and real-time bidding.' },
  { year: 'May 2026', event: 'Pro Kabaddi League auction mode added. Voice announcer introduced.' },
  { year: 'Jun 2026', event: 'Gemini AI analysis, Excel export, and login reminder system released.' },
  { year: 'Oct 2026', event: 'World Football auction mode and enhanced mobile experience shipped.' },
]

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us - Free Cricket Auction Game Creators | Auction Arena'
  }, [])

  return (
    <div className="min-h-screen bg-bg text-text" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      <div className="orb" style={{ width: '100vw', height: '70vh', background: 'radial-gradient(ellipse at top, rgba(255,90,0,0.1) 0%, transparent 70%)', top: 0, left: 0, filter: 'blur(100px)', position: 'fixed', zIndex: 0 }} />

      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4" style={{ background: 'rgba(10,5,0,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <Link to="/" className="font-bebas text-xl tracking-[3px] text-white no-underline">
          AUCTION<span className="text-[#FF5A00]"> ARENA</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/how-it-works" className="text-muted text-xs font-semibold hover:text-white transition-colors no-underline hidden sm:block">How It Works</Link>
          <Link to="/" className="text-muted text-xs font-semibold hover:text-white transition-colors no-underline flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="relative z-10">

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 pb-16 text-center">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-[#FF5A00] mb-6">About Us</span>
          <h1 className="font-sans font-semibold text-5xl sm:text-6xl text-white mb-6" style={{ letterSpacing: '-0.03em', lineHeight: '1.05' }}>
            We built the auction<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] to-[#F59E0B]">your friends deserved.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Auction Arena was born from a simple frustration: planning cricket auctions with friends required spreadsheets, timers, and constant shouting across a room. We wanted something better — a real-time, beautiful, automated auction platform that anyone could use without setup.
          </p>
        </section>

        {/* Mission */}
        <section className="max-w-5xl mx-auto px-6 md:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Our Mission', text: 'To make live auction gaming accessible, fair, and thrilling for every friend group — regardless of technical expertise or resources.' },
              { icon: '🌍', title: 'Who We Serve', text: 'Cricket fans, fantasy sports enthusiasts, office leagues, college tournaments, and anyone who wants to experience the buzz of a live player auction.' },
              { icon: '🚀', title: 'Why Free', text: 'We believe fun should be accessible. Auction Arena is completely free to use. We sustain the platform through voluntary community donations and advertising.' },
            ].map(({ icon, title, text }) => (
              <div key={title} className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="text-3xl mb-4">{icon}</div>
                <h2 className="font-semibold text-white text-base mb-2">{title}</h2>
                <p className="text-muted text-sm leading-relaxed font-medium">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What is Auction Arena */}
        <section className="max-w-4xl mx-auto px-6 md:px-8 pb-20">
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-white mb-6" style={{ letterSpacing: '-0.02em' }}>What is Auction Arena?</h2>
          <div className="text-muted text-sm leading-[1.9] space-y-4 font-medium">
            <p>
              <strong className="text-white">Auction Arena</strong> is a free, real-time multiplayer auction simulator that lets groups of 2–10 players experience the excitement of a live sports auction — just like the ones conducted by the Indian Premier League (IPL), Pro Kabaddi League (PKL), and international football organisations.
            </p>
            <p>
              The platform is powered by a <strong className="text-white">server-side 15-second countdown timer</strong> — the same clock for every participant, with zero lag or desync. The moment a player goes unsold or a bid is placed, <strong className="text-white">every connected user sees it instantly</strong> through our Socket.io real-time infrastructure.
            </p>
            <p>
              After your auction, our <strong className="text-white">Google Gemini AI analysis engine</strong> evaluates every team's squad, identifies strengths and weaknesses, predicts rankings, and suggests an optimal playing XI — all within seconds.
            </p>
            <p>
              Every currency figure in Auction Arena is <strong className="text-white">virtual</strong>. The "₹120 Crore purse" in an IPL auction room holds no real monetary value and cannot be exchanged for real money or goods. This is a simulation game for entertainment.
            </p>
          </div>
        </section>

        {/* Technology */}
        <section className="max-w-5xl mx-auto px-6 md:px-8 pb-20">
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-white mb-8" style={{ letterSpacing: '-0.02em' }}>Technology Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TECH.map(({ label, value }) => (
              <div key={label} className="flex gap-4 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="w-1.5 shrink-0 rounded-full mt-1" style={{ background: 'linear-gradient(180deg, #FF5A00, #F59E0B)', minHeight: '1.5rem' }} />
                <div>
                  <div className="text-xs font-bold text-[#FF5A00] uppercase tracking-wide mb-1">{label}</div>
                  <div className="text-white text-sm font-medium leading-snug">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-4xl mx-auto px-6 md:px-8 pb-20">
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-white mb-8" style={{ letterSpacing: '-0.02em' }}>Our Journey</h2>
          <div className="relative pl-6" style={{ borderLeft: '1px solid rgba(255,90,0,0.25)' }}>
            {MILESTONES.map(({ year, event }, i) => (
              <div key={i} className="mb-8 relative">
                <div className="absolute -left-[29px] w-3 h-3 rounded-full bg-[#FF5A00] border-2 border-bg" style={{ top: '4px' }} />
                <div className="text-xs font-bold text-[#FF5A00] mb-1 uppercase tracking-wide">{year}</div>
                <p className="text-white text-sm font-medium leading-relaxed">{event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="max-w-5xl mx-auto px-6 md:px-8 pb-20">
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-white mb-8" style={{ letterSpacing: '-0.02em' }}>The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TEAM.map(({ name, role, bio, instagram, linkedin, location }) => (
              <div key={name} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl mb-5 text-[#FF5A00]" style={{ background: 'rgba(255,90,0,0.1)', border: '1px solid rgba(255,90,0,0.2)' }}>
                  {name[0]}
                </div>
                <h3 className="font-semibold text-white text-base mb-1">{name}</h3>
                <p className="text-[#FF5A00] text-xs font-bold uppercase tracking-wide mb-3">{role}</p>
                <p className="text-muted text-sm leading-relaxed mb-4 font-medium">{bio}</p>
                <div className="flex items-center gap-1 text-muted text-xs mb-4">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  {location}
                </div>
                <div className="flex items-center gap-3">
                  <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#FF5A00] transition-colors text-xs font-semibold flex items-center gap-1.5 no-underline">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    Instagram
                  </a>
                  <span className="text-white/20">·</span>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#FF5A00] transition-colors text-xs font-semibold flex items-center gap-1.5 no-underline">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 md:px-8 pb-28 text-center">
          <div className="p-12 rounded-3xl" style={{ background: 'linear-gradient(180deg, rgba(255,90,0,0.1) 0%, rgba(0,0,0,0) 100%)', border: '1px solid rgba(255,90,0,0.2)' }}>
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-white mb-4" style={{ letterSpacing: '-0.02em' }}>Ready to start your auction?</h2>
            <p className="text-muted text-sm mb-8 font-medium">Create a free room in seconds. No download, no signup required for guests.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="btn-theme no-underline" style={{ padding: '0.9rem 2.2rem' }}>Get Started Free</Link>
              <Link to="/how-it-works" className="btn-outline no-underline" style={{ padding: '0.9rem 2.2rem' }}>How It Works</Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t px-6 py-8 text-center" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <span className="font-bebas text-lg tracking-[3px] text-white">AUCTION<span className="text-[#FF5A00]"> ARENA</span></span>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <Link to="/" className="text-muted text-xs hover:text-white transition-colors no-underline">Home</Link>
          <Link to="/how-it-works" className="text-muted text-xs hover:text-white transition-colors no-underline">How It Works</Link>
          <Link to="/privacy-policy" className="text-muted text-xs hover:text-white transition-colors no-underline">Privacy Policy</Link>
          <Link to="/terms" className="text-muted text-xs hover:text-white transition-colors no-underline">Terms</Link>
          <Link to="/contact" className="text-muted text-xs hover:text-white transition-colors no-underline">Contact</Link>
        </div>
        <p className="text-muted text-xs mt-4">© 2026 Auction Arena. Not affiliated with IPL, BCCI, PKL, or any sports body.</p>
      </footer>
    </div>
  )
}
