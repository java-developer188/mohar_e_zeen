import { useEffect, useState } from 'react'
import './FloatingEventBadge.css'
import { getTranslatedSection } from '../utils/siteConfigLoader'

function FloatingEventBadge() {
  const [confetti, setConfetti] = useState([])
  const [isVisible, setIsVisible] = useState(true)
  const [eventDate, setEventDate] = useState({ day: '', month: '' })

  useEffect(() => {
    // Load event date from config
    const loadEventDate = async () => {
      const eventsConfig = await getTranslatedSection('events')
      if (eventsConfig?.upcomingEventsList?.[0]?.date) {
        const date = new Date(eventsConfig.upcomingEventsList[0].date)
        const day = date.getDate()
        const month = date.toLocaleString('en-US', { month: 'short' })
        setEventDate({ day, month })
      }
    }
    loadEventDate()
  }, [])

  useEffect(() => {
    const colors = ['#FFD700', '#FF6B9D', '#00D4FF', '#7FFF00', '#FF8C00', '#00FF88']

    const generateParticles = () => {
      const pieces = Array.from({ length: 40 }, (_, i) => ({
        id: `${Date.now()}-${i}`,
        angle: (i / 40) * Math.PI * 2,
        delay: (i / 40) * 0.2,
        duration: 1.5 + Math.random() * 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 8 + Math.random() * 16
      }))
      setConfetti(pieces)
    }

    generateParticles()
    const interval = setInterval(generateParticles, 2500)

    const handleScroll = () => {
      const eventsSection = document.querySelector('#upcoming-events')
      if (eventsSection) {
        const rect = eventsSection.getBoundingClientRect()
        setIsVisible(rect.top > 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(interval)
    }
  }, [])

  const handleClick = () => {
    const section = document.querySelector('#upcoming-events')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      className={`floating-event-badge ${!isVisible ? 'hidden' : ''}`}
      onClick={handleClick}
      title="Click to see event details"
    >
      <div className="particle-burst-container">
        {confetti.map(piece => (
          <span
            key={piece.id}
            className="burst-particle"
            style={{
              '--angle': `${piece.angle}rad`,
              '--delay': `${piece.delay}s`,
              '--duration': `${piece.duration}s`,
              '--color': piece.color,
              '--size': `${piece.size}px`
            }}
          />
        ))}
      </div>

      <div className="event-circle">
        <span className="circle-date">{eventDate.day}</span>
        <span className="circle-month">{eventDate.month}</span>
      </div>
    </div>
  )
}

export default FloatingEventBadge
