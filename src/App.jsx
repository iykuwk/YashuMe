import { useEffect, useRef } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ThemeProvider } from './ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function PortfolioApp() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0
    let animationFrameId = null

    const isMobile = window.matchMedia('(max-width: 768px)').matches

    const moveCursor = (e) => {
      if (!isMobile) {
        mouseX = e.clientX
        mouseY = e.clientY
        cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`
      }
    }

    const animateFollower = () => {
      if (!isMobile) {
        followerX += (mouseX - followerX - 18) * 0.12
        followerY += (mouseY - followerY - 18) * 0.12
        follower.style.transform = `translate(${followerX}px, ${followerY}px)`
        animationFrameId = requestAnimationFrame(animateFollower)
      }
    }

    if (!isMobile) {
      window.addEventListener('mousemove', moveCursor)
      animateFollower()
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
      }
      observer.disconnect()
    }
  }, [location.pathname])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <PortfolioApp />
      </BrowserRouter>
    </ThemeProvider>
  )
}
