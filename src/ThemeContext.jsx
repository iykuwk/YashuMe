import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem('theme', theme)
    
    // Update CSS variables based on theme
    const root = document.documentElement
    const themeVars = {
      light: {
        '--bg-primary': '#ffffff',
        '--bg-secondary': '#f8f9fa',
        '--bg-card': '#ffffff',
        '--bg-card-hover': '#f8f9fa',
        '--accent-green': '#1a73e8',
        '--accent-blue': '#1a73e8',
        '--accent-purple': '#1a73e8',
        '--text-primary': '#202124',
        '--text-secondary': '#5f6368',
        '--text-muted': '#70757a',
        '--border': '#dadce0',
        '--border-accent': '#1a73e81a',
        '--glow-green': '0 0 0 3px #1a73e81a',
        '--glow-blue': '0 0 0 3px #1a73e81a',
        '--resume-btn-bg': '#ffffff',
        '--resume-btn-text': '#1a73e8',
        '--resume-btn-border': '#dadce0',
        '--resume-btn-icon': '#1a73e8',
        '--form-header-bg': '#f8f9fa',
        '--form-input-bg': '#ffffff',
        '--form-input-border': '#dadce0',
        '--form-input-color': '#202124',
        '--form-input-placeholder': '#70757a',
        '--form-input-focus-shadow': '0 0 0 3px #1a73e81a',
        '--navbar-scrolled-bg': 'rgba(248, 249, 250, 0.97)',
        '--footer-logo-color': '#202124',
      },
      dark: {
        '--bg-primary': '#202124',
        '--bg-secondary': '#292a2d',
        '--bg-card': '#202124',
        '--bg-card-hover': '#292a2d',
        '--accent-green': '#8ab4f8',
        '--accent-blue': '#8ab4f8',
        '--accent-purple': '#8ab4f8',
        '--text-primary': '#e8eaed',
        '--text-secondary': '#bdc1c6',
        '--text-muted': '#9aa0a6',
        '--border': '#3c4043',
        '--border-accent': '#8ab4f81a',
        '--glow-green': '0 0 0 3px #8ab4f81a',
        '--glow-blue': '0 0 0 3px #8ab4f81a',
        '--resume-btn-bg': '#202124',
        '--resume-btn-text': '#8ab4f8',
        '--resume-btn-border': '#5f6368',
        '--resume-btn-icon': '#8ab4f8',
        '--form-header-bg': '#292a2d',
        '--form-input-bg': '#292a2d',
        '--form-input-border': '#5f6368',
        '--form-input-color': '#e8eaed',
        '--form-input-placeholder': '#9aa0a6',
        '--form-input-focus-shadow': '0 0 0 3px #8ab4f81a',
        '--navbar-scrolled-bg': 'rgba(41, 42, 45, 0.97)',
        '--footer-logo-color': '#e8eaed',
      }
    }

    const currentTheme = themeVars[theme]
    Object.entries(currentTheme).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
