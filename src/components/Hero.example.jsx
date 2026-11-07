/**
 * EXAMPLE: Hero Component with JSON Configuration
 *
 * This shows how to refactor a component to read from siteConfig.json
 * instead of hardcoding values.
 *
 * To use this:
 * 1. Copy this content to Hero.jsx
 * 2. Delete the old hardcoded arrays
 * 3. Component now reads from siteConfig.json!
 */

import { useState, useEffect } from 'react'
import './Hero.css'
import FloatingEventBadge from './FloatingEventBadge'
import { getSectionConfig } from '../utils/siteConfigLoader'

function Hero() {
  const [heroConfig, setHeroConfig] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    const loadConfig = async () => {
      const config = await getSectionConfig('hero')
      if (config && config.enabled) {
        setHeroConfig(config)
      }
      setLoading(false)
    }
    loadConfig()
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (loading || !heroConfig) {
    return null
  }

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
          {/* TEXT SECTION - READS FROM JSON */}
          <div className="hero-text-section">
            <div className="hero-pretitle">
              <span className="pretitle-line"></span>
              <span className="pretitle-text">{heroConfig.pretitle}</span>
            </div>

            <h1 className="hero-title">
              <span className="title-line">{heroConfig.title.line1}</span>
              <span className={`title-line ${heroConfig.title.line2Accent ? 'accent-line' : ''}`}>
                {heroConfig.title.line2}
              </span>
              <span className="title-line">{heroConfig.title.line3}</span>
            </h1>

            <p className="hero-subtitle">{heroConfig.subtitle}</p>

            {/* BUTTONS - READS FROM JSON */}
            <div className="hero-cta-buttons">
              {heroConfig.buttons.map((button, idx) => (
                <button
                  key={idx}
                  className={`btn-${button.type}-large`}
                  onClick={() => scrollToSection(button.href)}
                >
                  {button.text}
                  {button.showArrow && <span className="arrow">→</span>}
                </button>
              ))}
            </div>

            {/* STATS - READS FROM JSON */}
            <div className="hero-stats-row">
              {heroConfig.stats.map((stat, idx) => (
                <div key={idx} className="stat-box">
                  <span className="stat-big-number">{stat.number}</span>
                  <span className="stat-big-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE CAROUSEL - READS FROM JSON */}
          <div className="hero-visual-section">
            <div className="hero-image-carousel">
              <div className="carousel-container">
                {heroConfig.carouselImages.map((img, idx) => {
                  const position = (idx - activeImageIndex + heroConfig.carouselImages.length) % heroConfig.carouselImages.length
                  return (
                    <div
                      key={idx}
                      className={`tilted-card tilted-card-${position}`}
                      onMouseEnter={() => setActiveImageIndex((activeImageIndex + 1) % heroConfig.carouselImages.length)}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
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
