import { useState, useEffect } from 'react'
import './Navbar.css'
import { getSectionConfig, getText } from '../utils/siteConfigLoader'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [navbarConfig, setNavbarConfig] = useState(null)

  useEffect(() => {
    const loadConfig = async () => {
      const config = await getSectionConfig('navbar')
      setNavbarConfig(config)
    }
    loadConfig()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  if (!navbarConfig) return null

  const activeLinks = navbarConfig.links?.filter(link => link.enabled) || []

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => scrollToSection(e, '#home')}>
          <img
            src={navbarConfig.logoImage}
            alt={navbarConfig.logoText}
            className="navbar-logo-image"
            onError={(e) => e.target.style.display = 'none'}
          />
        </a>

        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {activeLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {getText(link.label)}
            </a>
          ))}
        </div>

        <div className="navbar-cta">
          {navbarConfig.socialLinks && navbarConfig.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon-link ${link.platform}-link`}
              title={getText(link.title)}
            >
              <i className={link.icon}></i>
            </a>
          ))}
          {navbarConfig.ctaButton?.enabled && (
            <button
              className="btn-inquire"
              onClick={() => document.querySelector(navbarConfig.ctaButton.href)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {getText(navbarConfig.ctaButton.text)}
            </button>
          )}
        </div>

        <button
          className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
