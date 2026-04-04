import { useState, useEffect } from 'react'
import { useTheme } from '../ThemeContext'
import './Navbar.css'

const navLinks = [
  { href: '#about',       label: 'About' },
  { href: '#experience',  label: 'Experience' },
  { href: '#projects',    label: 'Projects' },
  { href: '#skills',      label: 'Skills' },
  { href: '#contact',     label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">[</span>
          <span className="logo-name">Yashu</span>
          <span className="logo-bracket">]</span>
          <span className="logo-cursor">_</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                <span className="link-num">//</span> {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/drive/u/2/folders/1M4Z-aHav5Uhmv_5vxVKZtt7tTZo4APly"
              target="_blank"
              rel="noreferrer"
              className="nav-resume-btn"
            >
              Resume ↗
            </a>
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
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
