import { useEffect, useRef } from 'react'
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

export default function App() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`
    }

    const animateFollower = () => {
      followerX += (mouseX - followerX - 18) * 0.12
      followerY += (mouseY - followerY - 18) * 0.12
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`
      requestAnimationFrame(animateFollower)
    }

    window.addEventListener('mousemove', moveCursor)
    animateFollower()

    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <ThemeProvider>
      <>
        <div className="cursor" ref={cursorRef} />
        <div className="cursor-follower" ref={followerRef} />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </>
    </ThemeProvider>
  )
}
