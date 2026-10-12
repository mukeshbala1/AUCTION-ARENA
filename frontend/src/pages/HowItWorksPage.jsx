import { Link } from 'react-router-dom'

const STEPS_DETAILED = [
  {
    num: '01',
    icon: '🔐',
    title: 'Sign In with Google',
    desc: 'Click "Get Started" and sign in with your Google account. No passwords needed. Your profile (display name + avatar) is automatically created from your Google account.',
    tips: ['Google OAuth is the only sign-in method — fast and secure.', 'Your account data is stored securely on Supabase.', 'You only need one account to create or join any auction room.'],
  },
  {
    num: '02',
    icon: '🏟️',
    title: 'Create a Room',
    desc: 'As the Host (Admin), click "Create Room" and configure your auction: choose the sport (IPL, Kabaddi, or Football), set the starting purse per team, maximum squad size, and player order.',
    tips: ['You can choose from 350+ IPL players, 200+ PKL players, or 500+ football stars.', 'Purse is virtual — e.g. ₹120 Crore for IPL.', 'Player order determines which players go up for bidding first.'],
  },
  {
    num: '03',
    icon: '📨',
    title: 'Share the Room Code',
    desc: 'Once your room is created, you\'ll receive a unique 6-character room code (e.g. "ARENA7"). Share this code with your friends — they can enter it directly on the homepage to join instantly.',
    tips: ['Friends do not need an account to join.', 'Each user assigns themselves a team name upon joining.', 'The room supports up to 10 teams simultaneously.'],
  },
  {
    num: '04',
    icon: '✅',
    title: 'Everyone Marks Ready',
    desc: 'In the Lobby, all participants see each other\'s team names. Once every team clicks "Mark Ready", the Admin can start the auction. This prevents the auction from starting prematurely.',
    tips: ['Only the Admin sees the "Start Auction" button.', 'Unready teams are shown clearly so latecomers can be waited for.', 'The admin can kick inactive participants from the lobby.'],
  },
  {
    num: '05',
    icon: '🎙️',
    title: 'Live Bidding Begins',
    desc: 'Players are presented one by one. A server-side 15-second countdown timer starts. Tap "+₹25L" or "+₹50L" to place bids. Every bid is broadcast in real-time to all participants via WebSocket. The last bidder before the timer reaches zero wins the player.',
    tips: ['The timer resets to 15 seconds on every new bid.', 'Lady voice announcer calls out each bid and final sale live.', 'A red "SOLD" flash with a satisfying sound plays when a player is sold.', 'The system enforces purse limits — you cannot bid more than you can afford.'],
  },
  {
    num: '06',
    icon: '🏳️',
    title: 'Overseas Cap Enforcement',
    desc: 'In IPL Cricket mode, a maximum of 8 overseas players per team is enforced by the server. Once a team hits the overseas cap, the bid button for overseas players is automatically disabled for that team.',
    tips: ['Player nationality is tagged in the player database.', 'Overseas cap rules are enforced on both frontend and server.', 'The cap status is visible to all participants in real-time.'],
  },
  {
    num: '07',
    icon: '↩️',
    title: 'Unsold Round',
    desc: 'After all players have been auctioned once, any unsold players automatically enter the Unsold Round. Teams can then bid on unsold players at the base price. Skip tracking is reset so every team gets a fair second chance.',
    tips: ['The host triggers the Unsold Round from the Admin panel.', 'Unsold players are presented in a random new order.', 'The 15-second timer applies identically in the Unsold Round.'],
  },
  {
    num: '08',
    icon: '🤖',
    title: 'Gemini AI Analysis',
    desc: 'After the auction, navigate to the Analysis tab. Our Google Gemini AI model evaluates every team\'s squad composition, assigns a strategic score, identifies the best playing XI, and predicts the likely tournament winner with reasoning.',
    tips: ['Analysis takes 5–15 seconds depending on squad sizes.', 'Results include role balance scores, batting depth, bowling variety, and leadership assessment.', 'Results can be shared as text or exported.'],
  },
  {
    num: '09',
    icon: '📊',
    title: 'Export to Excel',
    desc: 'Click "Export" to download the complete auction results as a formatted .xlsx file. The spreadsheet includes all teams, every player bid price, squad compositions, and purse spent — fully formatted and ready to share.',
    tips: ['Export runs entirely in the browser — no server upload.', 'The file opens directly in Microsoft Excel, Google Sheets, or Numbers.', 'Separate sheets are created for each team.'],
  },
]

const FAQ = [
  { q: 'Is Auction Arena free?', a: 'Yes, completely free. You can create unlimited rooms, join any auction, and use all features including AI analysis and Excel export at no cost. We sustain the platform through voluntary donations and advertising.' },
  { q: 'Is real money involved?', a: 'No. All currency values (Purses, Bids, Player Prices) in Auction Arena are virtual and hold zero real-world monetary value. This is a simulation game for entertainment purposes only.' },
  { q: 'How many players can join a room?', a: 'Up to 10 teams can participate in a single auction room simultaneously. The host sets the room up and shares the 6-character code.' },
  { q: 'Do guests need to sign in?', a: 'Only the room creator (host/admin) needs a Google account. Friends who join via the room code do not need to sign in — they just enter their team name.' },
  { q: 'What sports are supported?', a: 'Currently we support IPL Cricket (350+ players), Pro Kabaddi League (200+ players), and World Football (500+ players). More sports are planned for future releases.' },
  { q: 'How does the 15-second timer work?', a: 'The countdown timer runs on our backend server — not in your browser. This ensures all participants see the exact same timer, preventing any player from gaining an unfair advantage through browser manipulation or network lag.' },
  { q: 'What happens to unsold players?', a: 'All unsold players automatically enter an Unsold Round after the main auction. Teams bid on unsold players at their base price. The host triggers this round from the admin controls.' },
  { q: 'What is the Gemini AI analysis?', a: 'After an auction, our Google Gemini AI model evaluates every team\'s squad and generates a comprehensive report including: team rankings, best playing XI, role balance assessment, and a tournament winner prediction with detailed reasoning.' },
  { q: 'Can I export auction results?', a: 'Yes. Use the Export button to download a fully formatted Excel (.xlsx) file with all teams, squad compositions, player prices, and purse data. The export runs entirely in your browser.' },
  { q: 'Is there a voice announcer?', a: 'Yes! A fast AI lady voice announces every bid placed and every player sold in real-time using the Web Speech API. This creates an authentic live auction atmosphere.' },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-bg text-text" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      <div className="orb" style={{ width: '100vw', height: '60vh', background: 'radial-gradient(ellipse at top, rgba(255,90,0,0.1) 0%, transparent 70%)', top: 0, left: 0, filter: 'blur(100px)', position: 'fixed', zIndex: 0 }} />

      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4" style={{ background: 'rgba(10,5,0,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <Link to="/" className="font-bebas text-xl tracking-[3px] text-white no-underline">
          AUCTION<span className="text-[#FF5A00]"> ARENA</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/about" className="text-muted text-xs font-semibold hover:text-white transition-colors no-underline hidden sm:block">About</Link>
          <Link to="/" className="text-muted text-xs font-semibold hover:text-white transition-colors no-underline flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="relative z-10">

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 pb-12 text-center">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-[#FF5A00] mb-6">Complete Guide</span>
          <h1 className="font-sans font-semibold text-5xl sm:text-6xl text-white mb-6" style={{ letterSpacing: '-0.03em', lineHeight: '1.05' }}>
            How Auction Arena Works
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            From creating your first room to exporting the final squads — here is a complete step-by-step guide to everything you can do on Auction Arena.
          </p>
        </section>

        {/* Quick Stats */}
        <section className="max-w-5xl mx-auto px-6 md:px-8 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '350+', label: 'IPL Players' },
              { value: '10', label: 'Teams per Room' },
              { value: '15s', label: 'Server Timer' },
              { value: 'Free', label: 'Forever' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="font-bebas text-4xl text-[#FF5A00] mb-1">{value}</div>
                <div className="text-muted text-xs font-medium uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step */}
        <section className="max-w-4xl mx-auto px-6 md:px-8 pb-20">
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-white mb-12" style={{ letterSpacing: '-0.02em' }}>Step-by-Step Walkthrough</h2>
          <div className="space-y-6">
            {STEPS_DETAILED.map(({ num, icon, title, desc, tips }) => (
              <article key={num} className="p-7 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl" style={{ background: 'rgba(255,90,0,0.1)', border: '1px solid rgba(255,90,0,0.2)' }}>
                    {icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold text-[#FF5A00] font-mono tracking-widest">STEP {num}</span>
                    </div>
                    <h3 className="font-sans font-semibold text-lg text-white mb-3" style={{ letterSpacing: '-0.01em' }}>{title}</h3>
                    <p className="text-muted text-sm leading-relaxed font-medium mb-4">{desc}</p>
                    <ul className="space-y-1.5">
                      {tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted font-medium">
                          <span className="text-[#FF5A00] mt-0.5 shrink-0">→</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Sports Arenas */}
        <section className="max-w-5xl mx-auto px-6 md:px-8 pb-20">
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-white mb-4" style={{ letterSpacing: '-0.02em' }}>Supported Sports Arenas</h2>
          <p className="text-muted text-sm mb-8 font-medium">Choose from three fully configured sports databases — each with its own ruleset, player pool, and purse structure.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🏏', color: '#FF5A00', name: 'IPL Cricket', stats: '350+ Players · ₹120Cr Purse · 8 Overseas Cap', desc: 'The full Indian Premier League experience. Capped legends, uncapped gems, and overseas stars compete for spots on 8–10 franchise teams. Overseas cap strictly enforced.' },
              { icon: '🤼', color: '#EF4444', name: 'Pro Kabaddi League', stats: '200+ Players · ₹4Cr Purse · 3 Roles', desc: 'Bid on PKL raiders, defenders, and all-rounders. Build a balanced roster across attack and defence. A fast-paced auction with compact squads.' },
              { icon: '⚽', color: '#10B981', name: 'World Football', stats: '500+ Players · 200M Budget · 10 Positions', desc: 'Over 500 global superstars from the Premier League, La Liga, Serie A, ISL, and beyond. Build your dream starting XI with positional balance and budget discipline.' },
            ].map(({ icon, color, name, stats, desc }) => (
              <div key={name} className="p-7 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${color}30` }}>
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-semibold text-white text-lg mb-1">{name}</h3>
                <p className="text-xs font-bold mb-3" style={{ color }}>{stats}</p>
                <p className="text-muted text-sm leading-relaxed font-medium">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 md:px-8 pb-28">
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-white mb-10" style={{ letterSpacing: '-0.02em' }}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="group p-5 rounded-xl cursor-pointer" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <summary className="flex items-center justify-between gap-4 text-white text-sm font-semibold select-none list-none">
                  {q}
                  <svg className="shrink-0 w-4 h-4 text-[#FF5A00] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </summary>
                <p className="mt-3 text-muted text-sm leading-relaxed font-medium">{a}</p>
              </details>
            ))}
          </div>
        </section>

      </main>

      {/* CTA + Footer */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 pb-16 text-center">
        <div className="p-12 rounded-3xl" style={{ background: 'linear-gradient(180deg, rgba(255,90,0,0.1) 0%, rgba(0,0,0,0) 100%)', border: '1px solid rgba(255,90,0,0.2)' }}>
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-white mb-4" style={{ letterSpacing: '-0.02em' }}>Start your auction in 60 seconds</h2>
          <p className="text-muted text-sm mb-8 font-medium">No spreadsheets. No timers. No shouting. Just pure auction excitement.</p>
          <Link to="/login" className="btn-theme no-underline inline-flex" style={{ padding: '1rem 2.5rem' }}>Create a Free Room</Link>
        </div>
      </section>

      <footer className="relative z-10 border-t px-6 py-8 text-center" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <span className="font-bebas text-lg tracking-[3px] text-white">AUCTION<span className="text-[#FF5A00]"> ARENA</span></span>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <Link to="/" className="text-muted text-xs hover:text-white transition-colors no-underline">Home</Link>
          <Link to="/about" className="text-muted text-xs hover:text-white transition-colors no-underline">About</Link>
          <Link to="/privacy-policy" className="text-muted text-xs hover:text-white transition-colors no-underline">Privacy Policy</Link>
          <Link to="/terms" className="text-muted text-xs hover:text-white transition-colors no-underline">Terms</Link>
          <Link to="/contact" className="text-muted text-xs hover:text-white transition-colors no-underline">Contact</Link>
        </div>
        <p className="text-muted text-xs mt-4">© 2026 Auction Arena. Not affiliated with IPL, BCCI, PKL, or any sports body.</p>
      </footer>
    </div>
  )
}
