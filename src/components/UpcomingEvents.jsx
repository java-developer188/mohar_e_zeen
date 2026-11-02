import './UpcomingEvents.css'

function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: 'Karachi Hunar Bazaar - Brand Spotlight',
      date: '2026-11-08',
      startTime: '5:00 PM',
      endTime: '11:00 PM',
      location: 'Habitt City, Tipu Sultan Road',
      city: 'Karachi, Pakistan',
      description: 'Mohar-e-Zeen is thrilled to be featured at the Karachi Hunar Bazaar, presented by Karachi Women\'s Community by Uffaira. Come meet us at our stall and experience our hand block printed pieces up close. Bring your family and friends for an evening celebrating artisan craftsmanship and traditional textiles. Take home something made with heart and passion.',
      highlights: [
        'Hand block printed textiles on display',
        'Meet the Mohar-e-Zeen team',
        'Exclusive bazaar collection',
        'Browse our artisan pieces',
        'Support local craftsmanship'
      ],
      image: '/images/hunarbazar.jpg'
    }
  ]

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

  return (
    <section id="upcoming-events" className="upcoming-events">
      <div className="events-container">
        <div className="section-header">
          <div className="header-badge">📅 Upcoming Events</div>
          <h2 className="section-title">Celebrate With Us</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Experience the artistry of block printing firsthand. Visit our exhibitions and meet the artisans who keep this ancient craft alive.
          </p>
        </div>

        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image-wrapper">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/500x400?text=Exhibition'}
                />
                <div className="event-badge">
                  <span className="badge-icon">✨</span>
                  <span className="badge-text">Upcoming</span>
                </div>
              </div>

              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>

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
                      <span className="info-value">{event.location}</span>
                      <span className="info-value-secondary">{event.city}</span>
                    </div>
                  </div>
                </div>

                <p className="event-description">
                  {event.description}
                </p>

                <div className="event-highlights">
                  <h4 className="highlights-title">What to Expect:</h4>
                  <ul className="highlights-list">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <span className="highlight-icon">✓</span>
                        {highlight}
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
