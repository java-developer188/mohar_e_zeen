import { useState, useEffect } from 'react'
import './Footer.css'

function Footer() {
  const [visitors, setVisitors] = useState(0)
  const [displayCount, setDisplayCount] = useState(0)

  useEffect(() => {
    const storedCount = parseInt(localStorage.getItem('moharEZeenVisitors') || '0')
    const newCount = storedCount + 1
    localStorage.setItem('moharEZeenVisitors', newCount.toString())
    setVisitors(newCount)

    // Animate counter from 0 to actual count
    let current = 0
    const increment = Math.ceil(newCount / 30)
    const timer = setInterval(() => {
      current += increment
      if (current >= newCount) {
        setDisplayCount(newCount)
        clearInterval(timer)
      } else {
        setDisplayCount(current)
      }
    }, 30)

    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🪡</span>
              <span className="logo-text">Mohar-e-Zeen</span>
            </div>
            <p className="footer-tagline">
              Reviving ancient traditions through hand-blocked textiles and ethical craftsmanship.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#collections">Collections</a></li>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#craft">Our Craft</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="footer-social">
              <a href="https://www.instagram.com/mohar_e_zeen" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="Instagram">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://www.facebook.com/profile.php?id=61588886203388" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="Facebook">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://wa.me/923460832020" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="WhatsApp">
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="visitor-counter-section">
          <div className="counter-divider"></div>
          <div className="visitor-counter">
            <p className="counter-label">✨ Visitors Who've Admired Our Craft</p>
            <div className="counter-display">
              <span className="counter-icon-left">🧵</span>
              <span className="counter-number">{displayCount.toLocaleString()}</span>
              <span className="counter-icon-right">👁️</span>
            </div>
            <p className="counter-tagline">Each visitor is a thread in our creative tapestry</p>
          </div>
          <div className="counter-divider"></div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-credits">
            <p>&copy; 2026 Mohar-e-Zeen. All rights reserved. | Handcrafted with 💚</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
