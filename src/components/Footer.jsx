import { useState, useEffect } from 'react'
import './Footer.css'
import { getSectionConfig, getText } from '../utils/siteConfigLoader'

function Footer() {
  const [footerConfig, setFooterConfig] = useState(null)

  useEffect(() => {
    const loadConfig = async () => {
      const config = await getSectionConfig('footer')
      setFooterConfig(config)
    }
    loadConfig()
  }, [])

  if (!footerConfig) return null

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">{footerConfig.logo}</span>
              <span className="logo-text">{footerConfig.companyName}</span>
            </div>
            <p className="footer-tagline">
              {getText(footerConfig.tagline)}
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {footerConfig.quickLinks && footerConfig.quickLinks.map((link, idx) => (
                <li key={idx}><a href={link.href}>{getText(link.text)}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              {footerConfig.supportLinks && footerConfig.supportLinks.map((link, idx) => (
                <li key={idx}><a href={link.href}>{getText(link.text)}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="footer-social">
              {footerConfig.socialLinks && footerConfig.socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title={link.platform}
                >
                  <i className={link.icon}></i> {getText(link.label)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {footerConfig.visitorCounter?.enabled && (
          <div className="visitor-counter-section">
            <div className="counter-divider"></div>
            <div className="visitor-counter">
              <p className="counter-label">{getText(footerConfig.visitorCounter.label)}</p>
              <div className="counter-badge-wrapper">
                <img
                  src={footerConfig.visitorCounter.badgeUrl}
                  alt="visitor count"
                  className="visitor-badge"
                />
              </div>
              <p className="counter-tagline">{getText(footerConfig.visitorCounter.tagline)}</p>
            </div>
            <div className="counter-divider"></div>
          </div>
        )}

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-credits">
            <p>{getText(footerConfig.copyright)}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
