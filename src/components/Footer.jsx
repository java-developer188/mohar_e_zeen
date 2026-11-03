import './Footer.css'

function Footer() {

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
            <div className="counter-badge-wrapper">
              <img
                src="https://visitor-badge.laobi.icu/badge?page_id=mohar-e-zeen.vercel.app&left_color=%231B4D42&right_color=%23D4AF37&left_text=Total%20Visitors"
                alt="visitor count"
                className="visitor-badge"
              />
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
