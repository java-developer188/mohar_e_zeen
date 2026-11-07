import { useState, useEffect } from 'react'
import './UpcomingEvents.css'
import { getSectionConfig, getText } from '../utils/siteConfigLoader'

function UpcomingEvents() {
  const [eventsConfig, setEventsConfig] = useState(null)

  useEffect(() => {
    const loadConfig = async () => {
      const config = await getSectionConfig('events')
      setEventsConfig(config)
    }
    loadConfig()
  }, [])

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (timeStr) => {
    return timeStr
  }

  if (!eventsConfig) return null

  const events = eventsConfig.upcomingEventsList || []

  return (
    <section id="upcoming-events" className="upcoming-events">
      <div className="events-container">
        <div className="section-header">
          <div className="header-badge">📅 Upcoming Events</div>
          <h2 className="section-title">{getText(eventsConfig.sectionTitle)}</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            {getText(eventsConfig.sectionSubtitle)}
          </p>
        </div>

        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image-wrapper">
                <img
                  src={event.image}
                  alt={getText(event.title)}
                  className="event-image"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/500x400?text=Exhibition'}
                />
                <div className="event-badge">
                  <span className="badge-icon">✨</span>
                  <span className="badge-text">Upcoming</span>
                </div>
              </div>

              <div className="event-details">
                <h3 className="event-title">{getText(event.title)}</h3>

                <div className="event-info">
                  <div className="info-item">
                    <span className="info-icon">📅</span>
                    <div>
                      <span className="info-label">Date</span>
                      <span className="info-value">{formatDate(event.date)}</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <span className="info-icon">⏰</span>
                    <div>
                      <span className="info-label">Time</span>
                      <span className="info-value">{formatTime(event.startTime)} - {formatTime(event.endTime)}</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <span className="info-icon">📍</span>
                    <div>
                      <span className="info-label">Location</span>
                      <span className="info-value">{getText(event.location)}</span>
                      <span className="info-value-secondary">{getText(event.city)}</span>
                    </div>
                  </div>
                </div>

                <p className="event-description">
                  {getText(event.description)}
                </p>

                <div className="event-highlights">
                  <h4 className="highlights-title">What to Expect:</h4>
                  <ul className="highlights-list">
                    {event.highlights && event.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <span className="highlight-icon">✓</span>
                        {typeof highlight === 'string' ? highlight : getText(highlight)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
