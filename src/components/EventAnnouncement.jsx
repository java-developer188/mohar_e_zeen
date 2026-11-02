import { useEffect, useState } from 'react'
import './EventAnnouncement.css'

function EventAnnouncement() {
  const [confetti, setConfetti] = useState([])

  useEffect(() => {
    // Generate confetti pieces
    const pieces = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.8,
      duration: 2.5 + Math.random() * 1.5,
      size: 6 + Math.random() * 8
    }))
    setConfetti(pieces)
  }, [])

  const upcomingEvent = {
    title: 'Karachi Hunar Bazaar',
    subtitle: 'Brand Spotlight',
    date: '2026-11-08',
    day: 'Friday',
    time: '5:00 PM - 11:00 PM',
    location: 'Habitt City, Tipu Sultan Road',
    city: 'Karachi'
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  const handleLearnMore = () => {
    const section = document.querySelector('#upcoming-events')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="event-announcement">
      <div className="confetti-container">
        {confetti.map(piece => (
          <span
            key={piece.id}
            className="confetti"
            style={{
              '--left': `${piece.left}%`,
              '--delay': `${piece.delay}s`,
              '--duration': `${piece.duration}s`,
              '--size': `${piece.size}px`
            }}
          />
        ))}
      </div>

      <div className="announcement-content">
        <div className="announcement-left">
          <div className="event-badge-small">✨ LIVE EVENT</div>
          <h3 className="event-title-small">{upcomingEvent.title}</h3>
          <p className="event-subtitle-small">{upcomingEvent.subtitle}</p>
        </div>

        <div className="announcement-center">
          <div className="date-circle">
            <span className="date-num">{formatDate(upcomingEvent.date).split(' ')[1]}</span>
            <span className="date-month">{formatDate(upcomingEvent.date).split(' ')[0]}</span>
          </div>
        </div>

        <div className="announcement-right">
          <div className="event-detail">
            <span className="detail-icon">📍</span>
            <span className="detail-text">{upcomingEvent.location}</span>
          </div>
          <div className="event-detail">
            <span className="detail-icon">⏰</span>
            <span className="detail-text">{upcomingEvent.time}</span>
          </div>
        </div>

        <button
          className="announcement-cta"
          onClick={handleLearnMore}
          title="View event details"
        >
          Learn More →
        </button>
      </div>
    </div>
  )
}

export default EventAnnouncement
