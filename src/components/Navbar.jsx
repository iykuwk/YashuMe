import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import { CERTIFICATE_PATHS } from '../constants'
import './Navbar.css'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/certifications', label: 'Certifications' },
]

const resumeLinks = [
  { label: 'Software', href: CERTIFICATE_PATHS.softwareCorePdf },
  { label: 'Electrical', href: CERTIFICATE_PATHS.electricalCorePdf },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-bracket">[</span>
          <span className="logo-name">Hi! Yashodhan Here</span>
          <span className="logo-bracket">]</span>
          <span className="logo-cursor">_</span>
        </Link>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} onClick={() => setMenuOpen(false)}>
                <span className="link-num">//</span> {link.label}
              </Link>
            </li>
          ))}

          <li className="nav-resume">
            <div className="resume-wrapper">
              <button
                type="button"
                className="nav-resume-btn"
                onClick={() => setResumeOpen((open) => !open)}
                aria-haspopup="menu"
                aria-expanded={resumeOpen}
              >
                Resume ↗
              </button>

              {resumeOpen && (
                <ul className="resume-menu">
                  {resumeLinks.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} target="_blank" rel="noreferrer" onClick={() => setResumeOpen(false)}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>

          <li>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
