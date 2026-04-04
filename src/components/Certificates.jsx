import './Certificates.css'

const certs = [
  {
    title: 'Blockchain Architecture',
    issuer: 'Coursera — LearnQuest',
    icon: '⛓️',
    color: 'purple',
    desc: 'In-depth study of blockchain architecture, consensus mechanisms, distributed ledger technology, and decentralized application design patterns.',
    image: '/certificates/Coursera_Blockchain.jpg',
  },
  {
    title: 'Introduction to Cyber Attacks',
    issuer: 'Coursera — New York University',
    icon: '🔐',
    color: 'green',
    desc: 'Comprehensive overview of cyber attack types, threat modeling, vulnerability identification, and foundational principles of information security.',
    image: '/certificates/Coursera_Cyber_Attacks.jpg',
  },
  {
    title: 'Blockchain and Ethereum',
    issuer: 'Coursera — University of Michigan',
    icon: '⛓️',
    color: 'blue',
    desc: 'Comprehensive exploration of blockchain technology fundamentals, Ethereum platform architecture, smart contract development, and decentralized application ecosystems.',
    image: '/certificates/Blockchain_n_Ethereum.jpg',
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="certs-section">
      <div className="certs-inner">
        <div className="certs-header reveal">
          <p className="section-label">// 05. Certifications</p>
          <h2 className="section-title">Courses & Certs</h2>
          <div className="divider" />
        </div>

        <div className="certs-grid">
          {certs.map((cert, i) => (
            <div
              key={cert.title}
              className={`cert-card card reveal border-${cert.color}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {cert.image && (
                <div className="cert-image-container">
                  <img src={cert.image} alt={cert.title} className="cert-image" loading="lazy" />
                </div>
              )}
              
              <div className="cert-top">
                <span className="cert-icon">{cert.icon}</span>
                <span className={`tag tag-${cert.color}`}>{cert.issuer}</span>
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
