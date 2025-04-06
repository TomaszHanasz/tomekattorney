import React from "react";
import "./../index.css";

const Homepage = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Katarzyna Sak</h1>
            <p>Attorney at Law</p>
            {/* <Link to="/contact" className="button">Schedule Consultation</Link> */}
          </div>
        </div>
      </section>

      <section className="section practice-areas-section">
        <div className="container">
          <h2 className="section-title">Our Practice Areas</h2>
          <p className="section-subtitle">
            We offer specialized legal services in various practice areas to
            meet your specific needs.
          </p>

          <div className="practice-areas-grid">
            <div className="practice-area-card">
              <div className="practice-area-icon">⚖️</div>
              <h3>Corporate Law</h3>
              <p>
                Expert counsel for businesses of all sizes, from startups to
                established corporations.
              </p>
              {/* <Link to="/practice-areas#corporate">Learn More</Link> */}
            </div>

            <div className="practice-area-card">
              <div className="practice-area-icon">👪</div>
              <h3>Family Law</h3>
              <p>
                Compassionate representation for divorce, custody, and other
                family matters.
              </p>
              {/* <Link to="/practice-areas#family">Learn More</Link> */}
            </div>

            <div className="practice-area-card">
              <div className="practice-area-icon">🏛️</div>
              <h3>Criminal Defense</h3>
              <p>
                Vigorous defense strategies for those facing criminal charges.
              </p>
              {/* <Link to="/practice-areas#criminal">Learn More</Link> */}
            </div>

            <div className="practice-area-card">
              <div className="practice-area-icon">🏠</div>
              <h3>Real Estate</h3>
              <p>
                Comprehensive legal services for real estate transactions and
                disputes.
              </p>
              {/* <Link to="/practice-areas#real-estate">Learn More</Link> */}
            </div>
          </div>
        </div>
      </section>

      <section className="section why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose Smith & Associates?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>Experience</h3>
              <p>
                Over 25 years of combined legal experience across various
                practice areas.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>Client Focus</h3>
              <p>
                We prioritize your needs and provide personalized legal
                solutions.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>Results</h3>
              <p>Proven track record of successful outcomes for our clients.</p>
            </div>

            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>Integrity</h3>
              <p>
                Committed to the highest ethical standards in legal practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "Smith & Associates provided exceptional legal counsel during
                  our corporate merger. Their attention to detail and strategic
                  approach made all the difference."
                </p>
              </div>
              <div className="testimonial-author">
                <p className="author-name">John D.</p>
                <p className="author-company">CEO, Tech Innovations Inc.</p>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "The family law team showed incredible compassion and
                  expertise during my divorce proceedings. They guided me
                  through every step with professionalism and understanding."
                </p>
              </div>
              <div className="testimonial-author">
                <p className="author-name">Sarah M.</p>
                <p className="author-info">Family Law Client</p>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "Their real estate team helped us navigate a complex
                  commercial property transaction with ease. Their knowledge of
                  local regulations saved us from potential issues."
                </p>
              </div>
              <div className="testimonial-author">
                <p className="author-name">Michael R.</p>
                <p className="author-info">Real Estate Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Discuss Your Legal Needs?</h2>
            <p>
              Schedule a consultation with one of our experienced attorneys
              today.
            </p>
            {/* <Link to="/contact" className="button">Contact Us Now</Link> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
