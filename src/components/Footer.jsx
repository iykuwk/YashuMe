import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-logo">
            <span className="bracket">[</span>Yashu<span className="bracket">]</span>
            <span className="cursor-blink">_</span>
          </span>
          <p className="footer-tagline">
            Building secure systems. Breaking insecure ones. 🔐
          </p>
        </div>

        <div className="footer-center">
          <p className="footer-built">
            Built with <span className="heart">♥</span> using{' '}
            <span className="tech-tag">React</span> +{' '}
            <span className="tech-tag">Vite</span>
          </p>
          <p className="footer-copy">
            © {new Date().getFullYear()} Yashodhan Zingade. All rights reserved.
          </p>
        </div>

        <div className="footer-right">
          <a href="https://github.com/iykuwk" target="_blank" rel="noreferrer" className="footer-social">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/yashodhan-zingade-b8064b331/" target="_blank" rel="noreferrer" className="footer-social">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="https://tryhackme.com/p/Yashu4692" target="_blank" rel="noreferrer" className="footer-social">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <path d="M12 17h.01"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-bar">
        <div className="bar-fill" />
      </div>
    </footer>
  )
}
