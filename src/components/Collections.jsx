import { useState } from 'react'
import './Collections.css'
import ImageModal from './ImageModal'

function Collections() {
  const categories = [
    {
      id: 1,
      name: 'Bedsheets',
      displayName: 'Royal Bedsheets',
      images: [
        { id: 'b1', src: '/images/bedsheets/b1.jpg' },
        { id: 'bd2', src: '/images/bedsheets/bd2.jpg' },
        { id: 'bluebedsheet', src: '/images/bedsheets/bluebedsheet.jpeg' },
        { id: 'bluebedsheet8', src: '/images/bedsheets/bluebedsheet8.jpg.jpeg' },
        { id: 'pinkbedsheet', src: '/images/bedsheets/pinkbedsheet.jpeg' },
        { id: 'pinkformat', src: '/images/bedsheets/pinkformat.jpg' },
        { id: 'red2', src: '/images/bedsheets/red2.jpg.jpeg' },
        { id: 'red3', src: '/images/bedsheets/red3.jpg.jpeg' },
        { id: 'red4', src: '/images/bedsheets/red4.jpg.jpeg' },
        { id: 'red5', src: '/images/bedsheets/red5.jpg.jpeg' },
        { id: 'redformat1', src: '/images/bedsheets/redformat1.jpg' }
      ]
    },
    {
      id: 2,
      name: 'Table Runners',
      displayName: 'Table Runners',
      images: [
        { id: 'tr1', src: '/images/table_runner/tr1.jpg' },
        { id: 'purple1', src: '/images/table_runner/purple1.jpg' },
        { id: 'purple2', src: '/images/table_runner/purple2.jpg' },
        { id: 'bp', src: '/images/table_runner/bp.jpg' },
        { id: 'g1', src: '/images/table_runner/g1.jpg' },
        { id: 'gr2', src: '/images/table_runner/gr2.jpg' },
        { id: 'green1', src: '/images/table_runner/green1.jpg' },
        { id: 'green2', src: '/images/table_runner/green2.jpg' },
        { id: 'o1', src: '/images/table_runner/o1.jpg' },
        { id: 'orange1', src: '/images/table_runner/orange1.jpg' },
        { id: 'orangeset1', src: '/images/table_runner/orangeset1.jpg' }
      ]
    },
    {
      id: 3,
      name: 'Cushion Covers',
      displayName: 'Cushion Covers',
      images: [
        { id: 'cb1', src: '/images/cushion/cb1.jpg' },
        { id: 'p1', src: '/images/cushion/p1.jpg' },
        { id: 'gc1', src: '/images/cushion/gc1.jpg' },
        { id: 'ro1', src: '/images/cushion/ro1.jpg' },
        { id: 'sb1', src: '/images/cushion/sb1.jpg' },
        { id: 'c3', src: '/images/cushion/c3.jpg' },
        { id: 'b2', src: '/images/cushion/b2.jpg' },
        { id: 'pd2', src: '/images/cushion/pd2.jpg' }
      ]
    },
    {
      id: 4,
      name: 'Wall Hangings',
      displayName: 'Wall Hangings',
      images: [
        { id: 'hg1', src: '/images/hangings/hg1.jpg' },
        { id: 'cu1', src: '/images/hangings/cu1.jpg' }
      ]
    },
    {
      id: 5,
      name: 'Table Covers',
      displayName: 'Table Covers',
      images: [
        { id: 'tc1', src: '/images/covers/tc1.jpg' },
        { id: 'tc2', src: '/images/covers/tc2.jpg' }
      ]
    },
    {
      id: 6,
      name: 'Clothing',
      displayName: 'Clothing',
      images: [
        { id: 'rg1', src: '/images/clothing/rustgold1.jpg' },
        { id: 'rg2', src: '/images/clothing/rustgold2.jpg' },
        { id: 'gr1', src: '/images/clothing/grey1.jpg' },
        { id: 'gr2', src: '/images/clothing/grey2.jpg' },
        { id: 'gr4', src: '/images/clothing/grey4.jpg' },
        { id: 'gr5', src: '/images/clothing/grey5.jpg' },
        { id: 'y1', src: '/images/clothing/yellow1.jpg' },
        { id: 'y2', src: '/images/clothing/yellow2.jpg' }
      ]
    }
  ]

  const [activeImageIndex, setActiveImageIndex] = useState({})
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedImageIndexInModal, setSelectedImageIndexInModal] = useState(0)

  const handleImageNavigation = (categoryId, direction) => {
    const category = categories.find(c => c.id === categoryId)
    if (!category) return

    const currentIndex = activeImageIndex[categoryId] || 0
    const maxIndex = category.images.length - 1

    let newIndex = currentIndex
    if (direction === 'next') {
      newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1
    } else {
      newIndex = currentIndex === 0 ? maxIndex : currentIndex - 1
    }

    setActiveImageIndex(prev => ({
      ...prev,
      [categoryId]: newIndex
    }))
  }

  return (
    <section id="collections" className="collections">
      <div className="collections-container">
        <div className="section-header">
          <div className="header-badge">🎨 Collections</div>
          <h2 className="section-title">Heritage Collections</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Each piece is hand-blocked using traditional techniques and natural vegetable dyes.
            Discover our signature range of home decor and apparel.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => {
            const currentImageIndex = activeImageIndex[category.id] || 0
            const currentImage = category.images[currentImageIndex]

            return (
              <div key={category.id} className="category-section">
                <div className="category-card-header">
                  <h3 className="category-title">{category.displayName}</h3>
                </div>

                <div className="carousel-container">
                  {category.images.length > 1 && (
                    <button
                      className="carousel-nav carousel-prev"
                      onClick={() => handleImageNavigation(category.id, 'prev')}
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                  )}

                  <div className="carousel-wrapper-inner">
                    <div
                      className="carousel-image-wrapper"
                      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                      onClick={() => {
                        setSelectedCategory(category)
                        setSelectedImageIndexInModal(currentImageIndex)
                      }}
                    >
                      <img
                        src={currentImage.src}
                        alt={`${category.displayName}`}
                        className="carousel-image"
                        style={{
                          animation: `slideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`
                        }}
                        onError={(e) => e.target.src = 'https://via.placeholder.com/400x400?text=Image'}
                      />
                      <div className="image-zoom-hint">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.35-4.35"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {category.images.length > 1 && (
                    <button
                      className="carousel-nav carousel-next"
                      onClick={() => handleImageNavigation(category.id, 'next')}
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="collections-cta">
          <p>Looking for custom orders or bulk purchases?</p>
          <button
            className="btn-custom"
            onClick={() => {
              const contactSection = document.querySelector('#contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Request Custom Design
          </button>
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        images={selectedCategory ? selectedCategory.images : []}
        currentImageIndex={selectedImageIndexInModal}
        onImageChange={setSelectedImageIndexInModal}
      />
    </section>
  )
}

export default Collections
