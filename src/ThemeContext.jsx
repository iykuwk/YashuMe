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
        '--bg-primary': '#f8f9fa',
        '--bg-secondary': '#f0f2f5',
        '--bg-card': '#ffffff',
        '--bg-card-hover': '#f5f7fa',
        '--accent-green': '#2e7d32',
        '--accent-blue': '#1976d2',
        '--accent-purple': '#7b1fa2',
        '--text-primary': '#1a1a1a',
        '--text-secondary': '#666666',
        '--text-muted': '#999999',
        '--border': '#e0e0e0',
        '--border-accent': '#2e7d3220',
        '--glow-green': '0 0 20px #2e7d3233',
        '--glow-blue': '0 0 20px #1976d233',
      },
      dark: {
        '--bg-primary': '#050508',
        '--bg-secondary': '#0d0d14',
        '--bg-card': '#0f0f1a',
        '--bg-card-hover': '#141428',
        '--accent-green': '#00ff9d',
        '--accent-blue': '#00cfff',
        '--accent-purple': '#9b5de5',
        '--text-primary': '#e8e8f0',
        '--text-secondary': '#8888aa',
        '--text-muted': '#44445a',
        '--border': '#1e1e35',
        '--border-accent': '#00ff9d33',
        '--glow-green': '0 0 20px #00ff9d44',
        '--glow-blue': '0 0 20px #00cfff44',
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
