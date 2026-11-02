import { useState } from 'react'
import './Hero.css'
import FloatingEventBadge from './FloatingEventBadge'

function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const images = [
    { src: '/images/cushion/sb1.jpg', alt: 'Cushion design' },
    { src: '/images/cushion/p1.jpg', alt: 'Cushion display' },
    { src: '/images/table_runner/g1.jpg', alt: 'Green table runner' }
  ]

  const handleImageHover = (index) => {
    setActiveImageIndex(index)
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <FloatingEventBadge />
      {/* Background with your block printing motif */}
      <div className="hero-background">
        <img
          src="/images/table_runner/bp.jpg"
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
              <span className="pretitle-text">MOHAR-E-ZEEN</span>
            </div>

            <h1 className="hero-title">
              <span className="title-line">Handcrafted</span>
              <span className="title-line accent-line">Textiles</span>
              <span className="title-line">That Tell Stories</span>
            </h1>

            <p className="hero-subtitle">
              Traditional block printing meets modern elegance. Each piece is hand-stamped
              with love using natural dyes and ancestral wooden blocks.
            </p>

            <div className="hero-cta-buttons">
              <button
                className="btn-primary-large"
                onClick={() => scrollToSection('#collections')}
              >
                Explore Our Collections
                <span className="arrow">→</span>
              </button>
              <button
                className="btn-secondary-large"
                onClick={() => scrollToSection('#craft')}
              >
                Watch Our Process
              </button>
            </div>

            <div className="hero-stats-row">
              <div className="stat-box">
                <span className="stat-big-number">100%</span>
                <span className="stat-big-label">Natural Dyes</span>
              </div>
              <div className="stat-box">
                <span className="stat-big-number">✓</span>
                <span className="stat-big-label">Artisan Made</span>
              </div>
              <div className="stat-box">
                <span className="stat-big-number">∞</span>
                <span className="stat-big-label">Love & Care</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-section">
            <div className="hero-image-carousel">
              <div className="carousel-container">
                {images.map((img, idx) => {
                  const position = (idx - activeImageIndex + images.length) % images.length
                  return (
                    <div
                      key={idx}
                      className={`tilted-card tilted-card-${position}`}
                      onMouseEnter={() => setActiveImageIndex((activeImageIndex + 1) % images.length)}
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
