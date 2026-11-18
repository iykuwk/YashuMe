import './Certificates.css'
import { CERTIFICATE_PATHS } from '../constants'

const certs = [
  {
    title: 'Blockchain Architecture',
    issuer: 'Coursera — LearnQuest',
    icon: '⛓️',
    color: 'purple',
    desc: 'In-depth study of blockchain architecture, consensus mechanisms, distributed ledger technology, and decentralized application design patterns.',
    image: CERTIFICATE_PATHS.courseraBlockchain,
  },
  {
    title: 'Introduction to Cyber Attacks',
    issuer: 'Coursera — New York University',
    icon: '🔐',
    color: 'green',
    desc: 'Comprehensive overview of cyber attack types, threat modeling, vulnerability identification, and foundational principles of information security.',
    image: CERTIFICATE_PATHS.cyberAttacks,
  },
  {
    title: 'Blockchain and Ethereum',
    issuer: 'Coursera — University of Michigan',
    icon: '⛓️',
    color: 'blue',
    desc: 'Comprehensive exploration of blockchain technology fundamentals, Ethereum platform architecture, smart contract development, and decentralized application ecosystems.',
    image: CERTIFICATE_PATHS.blockchainEthereum,
  },
  {
    title: 'TryHackMe Certificate #1',
    issuer: 'TryHackMe',
    icon: '🧠',
    color: 'purple',
    desc: 'TryHackMe certificate showcasing practical security learning and hands-on challenge completion.',
    image: CERTIFICATE_PATHS.thmCertificate0,
    badgeUrl: 'https://www.credly.com/badges/f0e16e32-d7a7-4add-a343-c78bee67c8f0/',
  },
  {
    title: 'TryHackMe Certificate #2',
    issuer: 'TryHackMe',
    icon: '⚔️',
    color: 'blue',
    desc: 'Second TryHackMe credential highlighting continued cyber security learning and challenge-based validation.',
    image: CERTIFICATE_PATHS.thmCertificate1,
    badgeUrl: 'https://www.credly.com/badges/b800a2b6-a5d4-494e-84d0-a51866244429/',
  },
  {
    title: 'EthicalHacker-Cisco',
    issuer: 'Cisco',
    icon: '🛡️',
    color: 'green',
    desc: 'Cisco Ethical Hacking credential covering penetration testing methodologies, vulnerability assessment, and defensive best practices.',
    image: CERTIFICATE_PATHS.ethicalHacker,
    badgeUrl: 'https://www.credly.com/badges/30c58eef-461d-4221-ba22-84ab598c88e7/linked_in_profile',
    badgeImage: CERTIFICATE_PATHS.ethicalHackerBadge,
  },
  {
    title: 'Electrical Distribution, Automation & UPS',
    issuer: 'Schneider Electric',
    icon: '⚡',
    color: 'green',
    desc: 'Completed a pre-qualification assessment covering electrical distribution, industrial automation, and uninterruptible power supply systems.',
    pdfUrl: CERTIFICATE_PATHS.schneiderPreQualification,
  },
  {
    title: 'Energy Efficiency Fundamentals',
    issuer: 'Schneider Electric University',
    icon: '⚡',
    color: 'blue',
    desc: 'Completed Schneider Electric University training in energy efficiency fundamentals.',
    pdfUrl: CERTIFICATE_PATHS.schneiderEnergyEfficiency,
  },
  {
    title: 'Byte Lotus Competition',
    issuer: 'TryHackMe',
    icon: '🏆',
    color: 'purple',
    desc: 'Completed TryHackMe’s 14-day Byte Lotus competition, solving rooms and challenges throughout the event.',
    pdfUrl: CERTIFICATE_PATHS.byteLotusCompetition,
  },
]

const openCertificate = (url) => {
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

export default function Certificates() {
  return (
    <section id="certificates" className="certs-section">
      <div className="certs-inner">
        <div className="certs-header reveal">
          <h2 className="section-title">Courses & Certs</h2>
          <div className="divider" />
        </div>

        <div className="certs-grid">
          {certs.map((cert, i) => (
            <div
              key={cert.title}
              className={`cert-card card reveal border-${cert.color}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onClick={() => openCertificate(cert.badgeUrl || cert.pdfUrl)}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && (cert.badgeUrl || cert.pdfUrl)) {
                  e.preventDefault()
                  openCertificate(cert.badgeUrl || cert.pdfUrl)
                }
              }}
              role={cert.badgeUrl || cert.pdfUrl ? 'link' : 'article'}
              tabIndex={cert.badgeUrl || cert.pdfUrl ? 0 : -1}
              aria-label={cert.badgeUrl || cert.pdfUrl ? `Open ${cert.title} certificate` : cert.title}
            >
              {cert.image && (
                <div className="cert-image-container">
                  <img src={cert.image} alt={cert.title} className="cert-image" loading="lazy" />
                </div>
              )}
              {!cert.image && cert.pdfUrl && (
                <div className="cert-image-container">
                  <iframe
                    src={`${cert.pdfUrl}#toolbar=0&navpanes=0&view=FitH`}
                    title={`${cert.title} certificate preview`}
                    loading="lazy"
                    tabIndex={-1}
                  />
                </div>
              )}

              <div className="cert-top">
                <span className="cert-icon">{cert.icon}</span>
                {cert.badgeUrl || cert.pdfUrl ? (
                  <a
                    href={cert.badgeUrl || cert.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`tag tag-${cert.color}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {cert.issuer}
                  </a>
                ) : (
                  <span className={`tag tag-${cert.color}`}>{cert.issuer}</span>
                )}
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-desc">{cert.desc}</p>

              <div className="cert-footer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span>Verified Certificate</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
