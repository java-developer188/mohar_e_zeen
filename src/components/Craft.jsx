import { useState, useRef } from 'react'
import './Craft.css'
import VideoModal from './VideoModal'

function Craft() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const gridRef = useRef(null)

  const videos = [
    {
      id: 1,
      title: 'Table Runner Collection',
      facebookId: '864596886710084',
      description: 'Explore our latest table runner designs',
      thumbnail: '/images/saverscreen.jpg'
    },
    {
      id: 3,
      title: 'Indigo Dye Process',
      facebookId: '981851268316588',
      description: 'Watch the magic of natural indigo dyeing',
      thumbnail: '/images/tagscreen.jpg'
    },
    {
      id: 4,
      title: 'Block Carving Artistry',
      facebookId: '1529320775912340',
      description: 'Master artisans hand-carving wooden blocks',
      thumbnail: '/images/cushion/gc1.jpg'
    },
    {
      id: 5,
      title: 'Stamping in Action',
      facebookId: '1548433177065963',
      description: 'The rhythmic dance of the block stamp',
      thumbnail: '/images/bedsheets/b1.jpg'
    }
  ]

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

  return (
    <section id="craft" className="craft">
      {/* Header section with saverscreen image */}
      <div className="craft-header-visual">
        <img
          src="/images/saverscreen.jpg"
          alt="Craft process header"
          className="craft-header-image"
          onError={(e) => e.target.src = 'https://via.placeholder.com/1920x400?text=Behind+the+Scenes'}
        />
        <div className="craft-header-overlay">
          <h2 className="craft-title">Behind the Scenes</h2>
          <p className="craft-subtitle">Witness The Rhythmic Stamp</p>
        </div>
      </div>

      <div className="craft-container">
        <div className="craft-description">
          <p>
            Follow us on social media to see the entire process of how we create
            these beautiful hand-crafted textiles using traditional techniques.
          </p>
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
                    alt={video.title}
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
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-description">{video.description}</p>
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
          <p>Follow us for more behind-the-scenes content and exclusive updates</p>
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
