import './About.css'

const stats = [
  { value: '8.36', label: 'CGPA' },
  { value: '3+', label: 'Projects' },
  { value: '2', label: 'Internships' },
  { value: '2nd', label: 'Place @ Inheritance' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="about-text reveal">
          <p className="section-label">// 01. About Me</p>
          <h2 className="section-title">Who Am I?</h2>
          <div className="divider" />

          <p className="about-desc">
            I'm <strong>Yashodhan Zingade</strong>, a 3rd-year Electrical Engineering student
            at <span className="highlight">VJTI Mumbai</span> (CGPA: 8.36). My world sits at the
            crossroads of hardware fundamentals and software security — I reverse-engineer malware
            by day and build blockchain dApps by night.
          </p>

          <p className="about-desc">
            My journey has taken me through <span className="highlight">cybersecurity internships</span>,
            supply chain analytics, smart contract development, and Windows low-level programming.
            I'm a firm believer in learning by doing — TryHackMe, bug bounties, and CTFs are
            my training grounds.
          </p>

          <p className="about-desc">
            Outside of tech, I manage large-scale event logistics and mentor fellow coders — because
            leadership and communication are skills no IDE can teach.
          </p>

          <div className="about-meta">
            <div className="meta-item">
              <span className="meta-label">Location</span>
              <span className="meta-value">Mumbai, India 🇮🇳</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Degree</span>
              <span className="meta-value">B.Tech EE — VJTI (2023–2027)</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Focus</span>
              <span className="meta-value">Cybersecurity &amp; Blockchain</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Status</span>
              <span className="meta-value status-open">🟢 Open to Opportunities</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          {/* Stats */}
          <div className="stats-grid reveal">
            {stats.map(s => (
              <div key={s.label} className="stat-card">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Interests */}
          <div className="interests-card card reveal">
            <p className="interests-title">// Current Focus</p>
            <ul className="interests-list">
              <li><span className="li-icon">⚔️</span> Windows Malware & Evasion Research</li>
              <li><span className="li-icon">🔐</span> Web Application Penetration Testing</li>
              <li><span className="li-icon">⛓️</span> Decentralized Healthcare Systems</li>
              <li><span className="li-icon">🎯</span> CTF Competitions & Bug Bounties</li>
              <li><span className="li-icon">🔵</span> Blue Team & SOC Fundamentals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
