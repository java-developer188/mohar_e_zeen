import { useState } from 'react'
import './VideoModal.css'

function VideoModal({ isOpen, onClose, videoId, title }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal-title">{title}</h2>

        <div className="modal-video-container">
          <iframe
            src={`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/${videoId}/&show_text=false&width=600&height=650`}
            width="100%"
            height="auto"
            style={{ border: 'none', display: 'block', minHeight: '600px' }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default VideoModal
