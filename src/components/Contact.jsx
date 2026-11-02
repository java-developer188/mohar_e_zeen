import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Home Decor & Textiles',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      name: '',
      email: '',
      interest: 'Home Decor & Textiles',
      message: ''
    })
    alert('Thank you for your inquiry! We\'ll get back to you soon.')
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-title">Let's Create Something <span className="italic">Beautiful</span></h2>
            <p className="contact-description">
              Have a custom project or wholesale inquiry? We'd love to hear from you.
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-icon"><i className="fas fa-envelope"></i></span>
                <div>
                  <h4>Email</h4>
                  <p>info@moharezeen.com</p>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon"><i className="fas fa-phone"></i></span>
                <div>
                  <h4>Phone</h4>
                  <p>+92 346 0832020</p>
                  <p>+92 342 2277977</p>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon"><i className="fas fa-map-marker-alt"></i></span>
                <div>
                  <h4>Location</h4>
                  <p>Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a href="https://www.instagram.com/mohar_e_zeen" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61588886203388" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://wa.me/923460832020" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="interest" className="form-label">What Are You Interested In?</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="form-select"
              >
                <option>Home Decor & Textiles</option>
                <option>Clothing & Apparel</option>
                <option>Custom Commissions</option>
                <option>Wholesale/B2B</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements..."
                className="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Send Message
              <span><i className="fas fa-paper-plane"></i></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
