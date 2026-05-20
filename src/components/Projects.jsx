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
  {
    id: 3,
    title: 'LiFi - Research & Development',
    subtitle: 'Visible Light Communication & Applications',
    status: 'Completed',
    statusColor: 'green',
    duration: 'Mar 2024',
    description:
      'Research and development of LiFi (Visible Light Communication) systems — designed LED-based transmitters and photodiode receivers, evaluated modulation schemes, and prototyped application demos for indoor high-speed data transfer and secure positioning.',
    tech: ['Python', 'Arduino', 'FPGA', 'LED Drivers', 'Photodiodes', 'MATLAB'],
    points: [
      'Designed and built a LiFi transmitter using LED arrays and a receiver with photodiode amplification.',
      'Implemented modulation schemes (OOK, OFDM) and evaluated link performance in lab conditions achieving reliable Mbps-class throughput.',
      'Developed demo applications for secure indoor positioning and short-range high-speed data transfer.',
      'Packaged research findings and application examples in the "LIFI APPLICATIONS.pdf" for distribution.',
    ],
    icon: '💡',
    featured: true,
  },
]

export default function Projects() {
  // Removed expand/collapse state — projects show details by default
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
              className={`project-card card reveal`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Top row */}
              <div className="pc-top">
                <div className="pc-icon">
                  {proj.icon}
                </div>
                {/* Git buttons removed as requested */}
              </div>

              {/* Badges */}
              <div className="pc-badges">
                {/* If this is the LiFi project, link the Completed tag to the PDF */}
                {proj.title && proj.title.toLowerCase().includes('lifi') ? (
                  <a
                    href="/certificates/LIFI%20APPLICATIONS.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className={`tag tag-${proj.statusColor}`}
                    onClick={e => e.stopPropagation()}
                    aria-label={`Open ${proj.title} applications PDF`}
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

              {/* Points (always visible) */}
              <ul className="pc-points">
                {proj.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="pc-tech">
                {proj.tech.map(t => (
                  <span key={t} className="tag tag-green">{t}</span>
                ))}
              </div>

              {/* 'See Details' toggle removed as requested */}
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
