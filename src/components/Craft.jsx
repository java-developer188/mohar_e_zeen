import { useState, useRef, useEffect } from 'react'
import './Craft.css'
import VideoModal from './VideoModal'
import { getSectionConfig, getText } from '../utils/siteConfigLoader'

function Craft() {
  const [craftConfig, setCraftConfig] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const gridRef = useRef(null)

  useEffect(() => {
    const loadConfig = async () => {
      const config = await getSectionConfig('craft')
      setCraftConfig(config)
    }
    loadConfig()
  }, [])

  const handleScrollLeft = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: -420, behavior: 'smooth' })
      setTimeout(() => checkScrollPosition(), 600)
    }
  }

  const handleScrollRight = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: 420, behavior: 'smooth' })
      setTimeout(() => checkScrollPosition(), 600)
    }
  }

  const checkScrollPosition = () => {
    if (gridRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = gridRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 50)
    }
  }

  if (!craftConfig) return null

  const videos = craftConfig.videos || []

  return (
    <section id="craft" className="craft">
      <div className="craft-header-visual">
        <img
          src={craftConfig.headerImage}
          alt="Craft process header"
          className="craft-header-image"
          onError={(e) => e.target.src = 'https://via.placeholder.com/1920x400?text=Behind+the+Scenes'}
        />
        <div className="craft-header-overlay">
          <h2 className="craft-title">{getText(craftConfig.title)}</h2>
          <p className="craft-subtitle">{getText(craftConfig.subtitle)}</p>
        </div>
      </div>

      <div className="craft-container">
        <div className="craft-description">
          <p>{getText(craftConfig.description)}</p>
        </div>

        <div className="videos-carousel-wrapper">
          <button
            className="carousel-scroll-btn"
            onClick={handleScrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll videos left"
          >
            ‹
          </button>

          <div className="videos-grid" ref={gridRef} onScroll={checkScrollPosition}>
            {videos.map((video) => (
              <div
                key={video.id}
                className="video-card"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="video-thumbnail">
                  <img
                    src={video.thumbnail}
                    alt={getText(video.title)}
                    className="thumbnail-img"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=Video'}
                  />
                  <div className="play-button-large">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.3)" />
                      <path d="M30 22L30 58L58 40Z" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="video-info">
                  <h3 className="video-title">{getText(video.title)}</h3>
                  <p className="video-description">{getText(video.description)}</p>
                  <button className="btn-watch">Click to Watch</button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-scroll-btn"
            onClick={handleScrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll videos right"
          >
            ›
          </button>
        </div>

        <div className="craft-social">
          <p>{getText(craftConfig.socialDescription)}</p>
          <div className="social-links">
            <a
              href="https://www.instagram.com/mohar_e_zeen"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram-link"
              title="Follow on Instagram"
            >
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61588886203388"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link facebook-link"
              title="Follow on Facebook"
            >
              <i className="fab fa-facebook-f"></i>
              Facebook
            </a>
            <a
              href="https://wa.me/923460832020"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link whatsapp-link"
              title="Chat on WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoId={selectedVideo?.facebookId}
        title={selectedVideo?.title}
      />
    </section>
  )
}

export default Craft
