import { useState, useEffect } from 'react'
import './About.css'
import { getSectionConfig, getText } from '../utils/siteConfigLoader'

function About() {
  const [aboutConfig, setAboutConfig] = useState(null)

  useEffect(() => {
    const loadConfig = async () => {
      const config = await getSectionConfig('about')
      setAboutConfig(config)
    }
    loadConfig()
  }, [])

  if (!aboutConfig) return null

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image">
            <img
              src={aboutConfig.image}
              alt={getText(aboutConfig.imageAlt)}
              className="about-img"
              onError={(e) => e.target.src = 'https://via.placeholder.com/500x600?text=Artisan+at+Work'}
            />
            <div className="image-frame"></div>
          </div>

          <div className="about-content">
            <h2 className="about-title">{getText(aboutConfig.title)}</h2>

            {aboutConfig.paragraphs && (Array.isArray(aboutConfig.paragraphs) ? aboutConfig.paragraphs : aboutConfig.paragraphs.en).map((paragraph, idx) => (
              <p key={idx} className="about-text">
                {paragraph}
              </p>
            ))}

            <div className="about-features">
              {aboutConfig.features && aboutConfig.features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <span className="feature-icon">{feature.icon}</span>
                  <div>
                    <h4>{getText(feature.title)}</h4>
                    <p>{getText(feature.description)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
