import { useState, useEffect } from 'react'
import './Contact.css'
import { getSectionConfig, getText } from '../utils/siteConfigLoader'

function Contact() {
  const [contactConfig, setContactConfig] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Home Decor & Textiles',
    message: ''
  })

  useEffect(() => {
    const loadConfig = async () => {
      const config = await getSectionConfig('contact')
      setContactConfig(config)
      if (config?.formFields) {
        const interestField = config.formFields.find(f => f.name === 'interest')
        if (interestField?.options?.[0]) {
          setFormData(prev => ({
            ...prev,
            interest: interestField.options[0].value
          }))
        }
      }
    }
    loadConfig()
  }, [])

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
    const interestField = contactConfig?.formFields?.find(f => f.name === 'interest')
    const defaultInterest = interestField?.options?.[0]?.value || 'Home Decor & Textiles'
    setFormData({
      name: '',
      email: '',
      interest: defaultInterest,
      message: ''
    })
    alert(getText(contactConfig.successMessage))
  }

  if (!contactConfig) return null

  const interestField = contactConfig.formFields?.find(f => f.name === 'interest')
  const renderFormField = (field) => {
    switch (field.type) {
      case 'text':
      case 'email':
        return (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name} className="form-label">{getText(field.label)}</label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              placeholder={getText(field.placeholder)}
              className="form-input"
              required={field.required}
            />
          </div>
        )
      case 'select':
        return (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name} className="form-label">{getText(field.label)}</label>
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="form-select"
            >
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {getText(option.label)}
                </option>
              ))}
            </select>
          </div>
        )
      case 'textarea':
        return (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name} className="form-label">{getText(field.label)}</label>
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              placeholder={getText(field.placeholder)}
              className="form-textarea"
              rows="5"
              required={field.required}
            ></textarea>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-title">{getText(contactConfig.title)}</h2>
            <p className="contact-description">
              {getText(contactConfig.description)}
            </p>

            <div className="contact-details">
              {contactConfig.contactDetails && contactConfig.contactDetails.map((detail, idx) => (
                <div key={idx} className="detail-item">
                  <span className="detail-icon">{detail.icon.includes('fa-') ? <i className={detail.icon}></i> : detail.icon}</span>
                  <div>
                    <h4>{getText(detail.label)}</h4>
                    {detail.items && detail.items.map((item, vidx) => <p key={vidx}>{item}</p>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              {contactConfig.socialLinks && contactConfig.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon ${link.platform}-link`}
                  title={link.platform}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {contactConfig.formFields && contactConfig.formFields.map(renderFormField)}

            <button type="submit" className="btn-submit">
              {getText(contactConfig.submitButton)}
              <span><i className="fas fa-paper-plane"></i></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
