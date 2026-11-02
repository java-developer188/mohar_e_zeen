import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#collections', label: 'Collections' },
    { href: '#about', label: 'Our Story' },
    { href: '#craft', label: 'Our Craft' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => scrollToSection(e, '#home')}>
          <img
            src="/images/green_logo.png"
            alt="Mohar-e-Zeen Logo"
            className="navbar-logo-image"
            onError={(e) => e.target.style.display = 'none'}
          />
        </a>

        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-cta">
          <a
            href="https://www.instagram.com/mohar_e_zeen"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link instagram-link"
            title="Follow on Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61588886203388"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link facebook-link"
            title="Follow on Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://wa.me/923460832020"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link whatsapp-link"
            title="Chat on WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <button className="btn-inquire" onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}>
            Inquire Now
          </button>
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
