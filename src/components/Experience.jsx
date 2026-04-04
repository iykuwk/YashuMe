import './Experience.css'

const experiences = [
  {
    role: 'Heavy Electricals Intern',
    company: 'Ashvee Electricals',
    duration: 'Dec 2025 — Jan 2026',
    type: 'Internship',
    color: 'blue',
    github: 'https://drive.google.com/drive/u/2/folders/1UybCxVrxn-hm5w2HOlXgzAkV6NKcIIoe',
    points: [
      'Analyzed supply chain data in control panel manufacturing, identified inefficiencies, and optimized procurement & inventory flow to improve production efficiency.',
      'Prepared data-driven reports supporting strategic decisions in marketing, scaling, and HR — improving coordination and overall business operations.',
    ],
  },
  {
    role: 'Cyber-Security Analyst Intern',
    company: 'NullClass Pvt Ltd.',
    duration: 'Aug 2024 — Oct 2024',
    type: 'Internship',
    color: 'green',
    github: 'https://github.com/iykuwk/Web-Application-Security-',
    points: [
      'Completed a hands-on CyberSecurity internship gaining practical exposure to web security, building a solid foundation in identifying vulnerabilities and system protection.',
      'Applied OWASP Top 10 concepts via TryHackMe and bug-bounty labs, gaining hands-on experience in web application security testing.',
    ],
  },
]

const competitions = [
  {
    title: 'Inheritance 2024',
    result: '🥈 2nd Place',
    duration: 'Jan 2024 — Mar 2024',
    tech: ['Solidity', 'DID', 'Truffle', 'Remix IDE', 'Ethereum', 'IPFS'],
    points: [
      'Developed a decentralized blockchain-based system for managing patient and insurance data using Ethereum and IPFS, ensuring secure, reliable, accessible medical records.',
      'Built and tested smart contracts using Remix IDE to automate validation, improving data security and reducing manual effort and unauthorized manipulation.',
      'Delivered an end-to-end solution meeting all problem requirements — ranked 2nd.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="exp-inner">
        <div className="exp-header reveal">
          <p className="section-label">// 02. Experience</p>
          <h2 className="section-title">Where I've Worked</h2>
          <div className="divider" />
        </div>

        <div className="exp-grid">
          {/* Work Experience */}
          <div className="exp-column">
            <h3 className="col-title reveal">Work Experience</h3>
            <div className="timeline">
              {experiences.map((exp, i) => (
                <div key={i} className={`timeline-item reveal color-${exp.color}`}>
                  <div className="timeline-dot" />
                  <div className="timeline-card card">
                    <div className="tc-header">
                      <div>
                        <h4 className="tc-role">{exp.role}</h4>
                        <p className="tc-company">{exp.company}</p>
                      </div>
                      <div className="tc-meta">
                        <span className={`tag tag-${exp.color}`}>
                          {exp.github ? (
                            <a
                              href={exp.github}
                              target="_blank"
                              rel="noreferrer"
                              onClick={e => e.stopPropagation()}
                              className="exp-github-link"
                              aria-label="View internship GitHub profile"
                              title="View internship GitHub profile"
                            >
                              {exp.type}
                            </a>
                          ) : exp.type}
                        </span>
                      </div>
                    </div>
                    <p className="tc-duration">{exp.duration}</p>
                    <ul className="tc-points">
                      {exp.points.map((pt, j) => (
                        <li key={j}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competitions */}
          <div className="exp-column">
            <h3 className="col-title reveal">Competitions</h3>
            {competitions.map((comp, i) => (
              <div key={i} className="comp-card card reveal">
                <div className="comp-header">
                  <div>
                    <h4 className="comp-title">{comp.title}</h4>
                    <p className="comp-result">{comp.result}</p>
                  </div>
                  <span className="tc-duration">{comp.duration}</span>
                </div>
                <div className="comp-tags">
                  {comp.tech.map(t => (
                    <span key={t} className="tag tag-purple">{t}</span>
                  ))}
                </div>
                <ul className="tc-points">
                  {comp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Community */}
            <div className="card reveal community-section">
              <h4 className="col-title" style={{fontSize:'1rem', marginBottom:'1rem'}}>Community & Clubs</h4>
              <div className="community-item">
                <div className="comm-dot green" />
                <div>
                  <p className="comm-name">Community Of Coders, VJTI</p>
                  <p className="comm-role">Mentee (2023) → Maintainer (2024)</p>
                  <p className="comm-desc">Held workshops on Git/GitHub, mentored junior developers</p>
                </div>
              </div>
              <div className="community-item">
                <div className="comm-dot blue" />
                <div>
                  <p className="comm-name">Rangwardhan Social Fest</p>
                  <p className="comm-role">Logistics Manager (Sept 2024 — May 2025)</p>
                  <p className="comm-desc">Managed logistics for 2,000+ attendees; primary POC for Hon. Education Minister Mr. Deepak Kesarkar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
