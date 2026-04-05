import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'CareSync',
    subtitle: 'Secure Health Records on Blockchain',
    status: 'Completed',
    statusColor: 'green',
    duration: 'Jan 2024 — Mar 2024',
    description:
      'A blockchain-based platform to securely manage patient and insurance data, ensuring privacy, data integrity, and tamper-proof access using smart contracts on Ethereum.',
    tech: ['Solidity', 'Node.js', 'Express.js', 'Metamask', 'IPFS', 'Web3.js'],
    points: [
      'Built smart contracts to automate data validation and access control, eliminating unauthorized manipulation.',
      'Developed RESTful APIs using Node.js & Express.js for smooth data flow between frontend and blockchain.',
      'Enhanced security via cryptographic hashes; built dynamic UI/UX components for seamless interaction.',
    ],
    icon: '🏥',
    featured: true,
    github: 'https://github.com/iykuwk',
  },
  {
    id: 2,
    title: 'Windows Malware Development',
    subtitle: 'Low-Level Security Research',
    status: 'In Progress',
    statusColor: 'blue',
    duration: 'June 2025 — Present',
    description:
      'Deep-dive into Windows internals for security research — developing and analyzing low-level programs using Win32 API with a focus on understanding defensive mechanisms.',
    tech: ['C', 'C++', 'Win32 API', 'x64dbg', 'PEStudio', 'ProcessHacker'],
    points: [
      'Developed low-level programs using C/C++ & Win-API, focusing on system behavior and security mechanisms.',
      'Applied reverse-engineering tools (x64dbg, PEStudio) to debug and verify stealth payload behavior.',
      'Implemented RC4 Encryption/Decryption, DataPayload & TextPayload placement for Windows Powershell.',
    ],
    icon: '🛡️',
    featured: true,
    github: 'https://github.com/iykuwk/CyberSec',
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        <div className="projects-header reveal">
          <p className="section-label">// 03. Projects</p>
          <h2 className="section-title">Things I've Built</h2>
          <div className="divider" />
        </div>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div
              key={proj.id}
              className={`project-card card reveal ${active === proj.id ? 'expanded' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => setActive(active === proj.id ? null : proj.id)}
            >
              {/* Top row */}
              <div className="pc-top">
                <div className="pc-icon">
                  {proj.icon}
                </div>
                {proj.id !== 1 && proj.id !== 2 && (
                  <div className="pc-links">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                      aria-label="GitHub"
                      className="pc-link-btn"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                    </a>
                  </div>
                )}
              </div>

              {/* Badges */}
              <div className="pc-badges">
                {proj.id === 1 || proj.id === 2 ? (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`tag tag-${proj.statusColor}`}
                    onClick={e => e.stopPropagation()}
                    aria-label={`View ${proj.title} on GitHub`}
                  >
                    {proj.status}
                  </a>
                ) : (
                  <span className={`tag tag-${proj.statusColor}`}>{proj.status}</span>
                )}
                <span className="pc-duration">{proj.duration}</span>
              </div>

              <h3 className="pc-title">{proj.title}</h3>
              <p className="pc-subtitle">{proj.subtitle}</p>
              <p className="pc-desc">{proj.description}</p>

              {/* Expanded points */}
              {active === proj.id && (
                <ul className="pc-points">
                  {proj.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              )}

              {/* Tech stack */}
              <div className="pc-tech">
                {proj.tech.map(t => (
                  <span key={t} className="tag tag-green">{t}</span>
                ))}
              </div>

              <button className="pc-toggle">
                {active === proj.id ? '▲ Show Less' : '▼ See Details'}
              </button>
            </div>
          ))}
        </div>

        {/* CTF note */}
        <div className="ctf-banner reveal">
          <div className="ctf-icon">🎯</div>
          <div>
            <p className="ctf-title">Active on TryHackMe & Bug Bounties</p>
            <p className="ctf-desc">
              Continuously sharpening offensive & defensive skills through CTF challenges,
              OWASP labs, and web app security testing platforms.
            </p>
          </div>
          <a
            href="https://tryhackme.com"
            target="_blank"
            rel="noreferrer"
            className="btn-outline ctf-btn"
          >
            TryHackMe ↗
          </a>
        </div>
      </div>
    </section>
  )
}
