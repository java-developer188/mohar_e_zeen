import { useState, useEffect } from 'react'
import './Hero.css'
import FloatingEventBadge from './FloatingEventBadge'
import { getSectionConfig, getText } from '../utils/siteConfigLoader'

function Hero() {
  const [heroConfig, setHeroConfig] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    const loadConfig = async () => {
      const config = await getSectionConfig('hero')
      setHeroConfig(config)
    }
    loadConfig()
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!heroConfig) return null

  return (
    <section id="home" className="hero">
      <FloatingEventBadge />
      <div className="hero-background">
        <img
          src={heroConfig.backgroundImage}
          alt="Block printing background"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-content">
          <div className="hero-text-section">
            <div className="hero-pretitle">
              <span className="pretitle-line"></span>
              <span className="pretitle-text">{heroConfig.pretitle}</span>
            </div>

            <h1 className="hero-title">
              <span className="title-line">{getText(heroConfig.title.line1)}</span>
              <span className={`title-line ${heroConfig.title.line2Accent ? 'accent-line' : ''}`}>
                {getText(heroConfig.title.line2)}
              </span>
              <span className="title-line">{getText(heroConfig.title.line3)}</span>
            </h1>

            <p className="hero-subtitle">{getText(heroConfig.subtitle)}</p>

            <div className="hero-cta-buttons">
              {heroConfig.buttons && heroConfig.buttons.map((button, idx) => (
                <button
                  key={idx}
                  className={`btn-${button.type}-large`}
                  onClick={() => scrollToSection(button.href)}
                >
                  {getText(button.text)}
                  {button.showArrow && <span className="arrow">→</span>}
                </button>
              ))}
            </div>

            <div className="hero-stats-row">
              {heroConfig.stats && heroConfig.stats.map((stat, idx) => (
                <div key={idx} className="stat-box">
                  <span className="stat-big-number">{stat.number}</span>
                  <span className="stat-big-label">{getText(stat.label)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual-section">
            <div className="hero-image-carousel">
              <div className="carousel-container">
                {heroConfig.carouselImages && heroConfig.carouselImages.map((img, idx) => {
                  const position = (idx - activeImageIndex + heroConfig.carouselImages.length) % heroConfig.carouselImages.length
                  return (
                    <div
                      key={idx}
                      className={`tilted-card tilted-card-${position}`}
                      onMouseEnter={() => setActiveImageIndex((activeImageIndex + 1) % heroConfig.carouselImages.length)}
                    >
                      <img
                        src={img.src}
                        alt={getText(img.alt)}
                        className="tilted-image"
                      />
                    </div>
                  )
                })}
              </div>
              <div className="showcase-badge">
                <span className="badge-icon">🎨</span>
                <span className="badge-text">Artisan Crafted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom-indicator" onClick={() => scrollToSection('#collections')}>
        <span>Discover More</span>
        <div className="scroll-dot"></div>
      </div>
    </section>
  )
}

export default Hero
