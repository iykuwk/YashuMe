import { useEffect, useState } from 'react'
import './Hero.css'

const roles = [
  'Electrical Engineer',
  'Cybersecurity Enthusiast',
  'Blockchain Developer',
  'Malware Researcher',
  'CTF Player',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, 75)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 40)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section id="hero" className="hero">
      {/* Ambient glow blobs */}
      <div className="glow-blob glow-blob-1" />
      <div className="glow-blob glow-blob-2" />

      <div className="hero-inner">
        <div className="hero-content fade-in">
          <p className="hero-greeting">
            <span className="terminal-prompt">$</span> Hello, World! I'm
          </p>

          <h1 className="hero-name">
            <span className="name-line">Yashodhan</span>
            <span className="name-line accent">Zingade</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">{'>'}</span>
            <span className="role-text">{displayed}</span>
            <span className="role-cursor">|</span>
          </div>

          <p className="hero-bio">
            B.Tech Electrical Engineering @ <span className="highlight">VJTI Mumbai</span> — blending hardware
            thinking with software security. I build blockchain systems, break into web apps,
            and research Windows malware internals.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>

          <div className="hero-socials">
            <a href="mailto:7yashzingade@gmail.com" aria-label="Email" className="social-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/yashodhan-zingade-b8064b331/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/iykuwk" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            <a href="https://tryhackme.com/p/Yashu4692" target="_blank" rel="noreferrer" aria-label="TryHackMe" className="social-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            </a>
          </div>
        </div>

        {/* Decorative terminal block */}
        <div className="hero-terminal animate-float">
          <div className="terminal-header">
            <span className="t-dot red" /><span className="t-dot yellow" /><span className="t-dot green" />
            <span className="t-title">yashu@vjti: ~</span>
          </div>
          <div className="terminal-body">
            <div className="t-line"><span className="t-cmd">whoami</span></div>
            <div className="t-line t-output">yashodhan_zingade</div>
            <div className="t-line"><span className="t-cmd">cat skills.txt</span></div>
            <div className="t-line t-output"><span className="t-green">✓</span> Cybersecurity</div>
            <div className="t-line t-output"><span className="t-green">✓</span> Blockchain</div>
            <div className="t-line t-output"><span className="t-green">✓</span> Malware Dev</div>
            <div className="t-line t-output"><span className="t-green">✓</span> Web Security</div>
            <div className="t-line"><span className="t-cmd">./run_ctf.sh</span></div>
            <div className="t-line t-output t-blink">hacking in progress...</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}
