import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Basic form validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.')
      setLoading(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.')
      setLoading(false)
      return
    }

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_SERVICE_ID
      const contactTemplateId = import.meta.env.VITE_TEMPLATE_CONTACT
      const replyTemplateId = import.meta.env.VITE_TEMPLATE_REPLY

      if (!serviceId || !contactTemplateId || !replyTemplateId) {
        throw new Error('EmailJS configuration missing. Please check your .env file.')
      }

      // Send contact email to you
      const contactParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: 'zingadeyashodhan@gmail.com'
      }

      await emailjs.send(serviceId, contactTemplateId, contactParams)

      // Send auto-reply to visitor
      const replyParams = {
        to_name: form.name,
        to_email: form.email,
        from_name: 'Yashodhan Zingade'
      }

      await emailjs.send(serviceId, replyTemplateId, replyParams)

      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 4000)

    } catch (err) {
      console.error('Email send failed:', err)

      // Provide user-friendly error messages
      let errorMessage = 'Failed to send message. '
      if (err.text?.includes('rate limit')) {
        errorMessage += 'Too many requests. Please try again later.'
      } else if (err.text?.includes('invalid')) {
        errorMessage += 'Invalid configuration. Please contact the administrator.'
      } else {
        errorMessage += 'Please try again or contact me directly at zingadeyashodhan@gmail.com'
      }

      setError(errorMessage)

      // Fallback to mailto if EmailJS fails
      setTimeout(() => {
        const mailtoLink = `mailto:zingadeyashodhan@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`
        window.open(mailtoLink)
      }, 2000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-left reveal">
          <p className="section-label">// 06. Contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="divider" />

          <p className="contact-desc">
            Whether you have a security question, a blockchain idea, or just want to say hi —
            my inbox is open. I'm currently looking for internship and freelance opportunities.
          </p>

          <div className="contact-links">
            <a href="mailto:zingadeyashodhan@gmail.com" className="contact-link-item">
              <div className="cli-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <p className="cli-label">Email</p>
                <p className="cli-value">zingadeyashodhan@gmail.com</p>
              </div>
            </a>

            <a href="tel:+918149414692" className="contact-link-item">
              <div className="cli-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="cli-label">Phone</p>
                <p className="cli-value">+91 81494 14692</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/yashodhan-zingade-b8064b331/" target="_blank" rel="noreferrer" className="contact-link-item">
              <div className="cli-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <div>
                <p className="cli-label">LinkedIn</p>
                <p className="cli-value">Yashodhan Zingade</p>
              </div>
            </a>

            <a href="https://github.com/iykuwk" target="_blank" rel="noreferrer" className="contact-link-item">
              <div className="cli-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <div>
                <p className="cli-label">GitHub</p>
                <p className="cli-value">github.com/yashodhan</p>
              </div>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-wrap reveal">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <span className="t-dot red" /><span className="t-dot yellow" /><span className="t-dot green" />
              <span className="form-title">send_message.sh</span>
            </div>

            <div className="form-body">
              <div className="form-group">
                <label className="form-label">// name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">// email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">// message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  required
                  rows={5}
                  className="form-input form-textarea"
                />
              </div>

              <button type="submit" className="btn-primary form-submit" disabled={loading}>
                {loading ? '⏳ Sending...' : sent ? '✅ Message Sent!' : 'Send Message →'}
              </button>

              {error && (
                <div className="form-error">
                  <p>❌ {error}</p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
