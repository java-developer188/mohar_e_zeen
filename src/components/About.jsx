import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image">
            <img
              src="/images/cushion/gc1.jpg"
              alt="Artisan at work"
              className="about-img"
              onError={(e) => e.target.src = 'https://via.placeholder.com/500x600?text=Artisan+at+Work'}
            />
            <div className="image-frame"></div>
          </div>

          <div className="about-content">
            <h2 className="about-title">Our Story</h2>
            <p className="about-text">
              Mohar-e-Zeen was born from a passion for preserving the ancient art of block printing.
              For over a decade, we've worked with master artisans to revive traditional motifs and
              sustainable practices.
            </p>
            <p className="about-text">
              Each of our pieces tells a story - from the intricate hand-carved wooden blocks passed
              down through generations, to the natural indigo vats that produce those iconic deep blues
              and greens.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <span className="feature-icon">🌿</span>
                <div>
                  <h4>100% Natural Dyes</h4>
                  <p>Sourced from nature, gentle on skin and environment</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🪵</span>
                <div>
                  <h4>Hand-Carved Blocks</h4>
                  <p>Traditional teak wood blocks crafted by master artisans</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">♻️</span>
                <div>
                  <h4>Eco-Friendly</h4>
                  <p>Sustainable practices that respect our planet</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✋</span>
                <div>
                  <h4>Ethically Made</h4>
                  <p>Fair wages and safe working conditions guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
