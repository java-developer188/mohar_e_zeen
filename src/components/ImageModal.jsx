import './ImageModal.css'

function ImageModal({ isOpen, onClose, images, currentImageIndex, onImageChange }) {
  if (!isOpen || !images || images.length === 0) return null

  const currentImage = images[currentImageIndex]

  const handlePrev = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    onImageChange(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    onImageChange(newIndex)
  }

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="image-modal-container">
          <button
            className="image-nav image-nav-prev"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="image-display">
            <img
              src={currentImage.src}
              alt="Product view"
              className="modal-image"
            />
          </div>

          <button
            className="image-nav image-nav-next"
            onClick={handleNext}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        {images.length > 1 && (
          <div className="image-modal-indicators">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`modal-indicator ${idx === currentImageIndex ? 'active' : ''}`}
                onClick={() => onImageChange(idx)}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageModal
