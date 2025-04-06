import React from "react";
import "./../index2.css";

const Homepage2 = () => {
  return (
    <>
      {/* Split Hero Section */}
      <section className="split-hero">
        <div className="split-hero-content">
          <div className="hero-text">
            <h1>
              Committed to <span className="text-primary">Justice</span>
            </h1>
            <h2>
              Dedicated to <span className="text-primary">Excellence</span>
            </h2>
            <p>
              Smith Legal Partners provides strategic counsel and zealous
              advocacy for clients facing complex legal challenges.
            </p>
            <div className="hero-buttons">
              {/* <Link to="/contact" className="btn btn-primary">Free Case Evaluation</Link> */}
              {/* <Link to="/about" className="btn btn-outline">About Our Firm</Link> */}
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              {/* In a real implementation, this would be an actual image */}
              <div className="placeholder-text">Attorney Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Band */}
      <section className="services-band">
        <div className="container">
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">🏛️</div>
              <h3>Civil Litigation</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">💼</div>
              <h3>Business Law</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">🏠</div>
              <h3>Real Estate</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">👪</div>
              <h3>Family Law</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">⚖️</div>
              <h3>Criminal Defense</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Firm Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              {/* <div className="image-placeholder">
                <div className="placeholder-text">Team Image</div>
              </div> */}
            </div>
            <div className="about-text">
              <h2>
                A Premier <span className="text-primary">Law Firm</span> With a
                Winning Record
              </h2>
              <p>
                With over 25 years of combined experience, Smith Legal Partners
                has established a reputation for providing exceptional legal
                representation across a wide range of practice areas.
              </p>
              <p>
                Our attorneys combine deep legal knowledge with practical
                business sense to deliver strategic solutions that achieve our
                clients' objectives.
              </p>
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Cases Won</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
              {/* <Link to="/about" className="btn btn-primary">Meet Our Team</Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="practice-areas-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Practice Areas</h2>
            <p>
              We offer comprehensive legal services to meet the diverse needs of
              our clients.
            </p>
          </div>

          <div className="practice-area-tabs">
            <div className="tabs-container">
              <div className="tab active">Civil Litigation</div>
              <div className="tab">Business Law</div>
              <div className="tab">Real Estate</div>
              <div className="tab">Family Law</div>
              <div className="tab">Criminal Defense</div>
            </div>

            <div className="tab-content">
              <h3>Civil Litigation</h3>
              <p>
                Our civil litigation team represents clients in a wide range of
                disputes, including contract disputes, property disputes,
                personal injury claims, and more. We work diligently to protect
                our clients' interests and achieve favorable outcomes, whether
                through negotiation, mediation, or trial.
              </p>
              <ul className="feature-list">
                <li>Contract Disputes</li>
                <li>Property Litigation</li>
                <li>Personal Injury</li>
                <li>Employment Disputes</li>
              </ul>
              {/* <Link to="/practice-areas/civil-litigation" className="text-link">Learn more about our Civil Litigation services <span className="arrow">→</span></Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-container">
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">
              Smith Legal Partners provided exceptional representation in our
              complex business litigation case. Their strategic approach and
              attention to detail resulted in a favorable settlement that
              exceeded our expectations.
            </p>
            <div className="testimonial-author">
              <div className="author-image">
                <div className="image-placeholder small"></div>
              </div>
              <div className="author-info">
                <h4>Robert Johnson</h4>
                <p>CEO, Johnson Enterprises</p>
              </div>
            </div>
            <div className="testimonial-nav">
              <button className="nav-dot active"></button>
              <button className="nav-dot"></button>
              <button className="nav-dot"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <h2>Latest Insights</h2>
            {/* <Link to="/blog" className="view-all">View All Articles</Link> */}
          </div>

          <div className="news-grid">
            <div className="news-card">
              <div className="news-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="news-date">March 10, 2025</div>
              <h3>
                Recent Changes to Real Estate Law and What They Mean for
                Property Owners
              </h3>
              <p>
                New legislation has introduced significant changes to real
                estate transactions in our state. Learn how these changes might
                affect your property rights.
              </p>
              {/* <Link to="/blog/real-estate-law-changes" className="text-link">Read More <span className="arrow">→</span></Link> */}
            </div>

            <div className="news-card">
              <div className="news-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="news-date">February 28, 2025</div>
              <h3>
                Understanding Business Contract Essentials: Protecting Your
                Company
              </h3>
              <p>
                Properly drafted contracts are essential for business success.
                Discover the key elements every business contract should
                include.
              </p>
              {/* <Link to="/blog/business-contract-essentials" className="text-link">Read More <span className="arrow">→</span></Link> */}
            </div>

            <div className="news-card">
              <div className="news-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="news-date">February 15, 2025</div>
              <h3>Family Law Update: Child Custody Considerations in 2025</h3>
              <p>
                Recent court decisions have reshaped how judges approach child
                custody cases. Learn about these important developments.
              </p>
              {/* <Link to="/blog/child-custody-updates" className="text-link">Read More <span className="arrow">→</span></Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="cta-grid">
            <div className="cta-content">
              <h2>Ready to Discuss Your Legal Matter?</h2>
              <p>
                Schedule a confidential consultation with one of our experienced
                attorneys to discuss your case and explore your legal options.
              </p>
              {/* <Link to="/contact" className="btn btn-white">
                Schedule Consultation
              </Link> */}
            </div>
            <div className="cta-contact-info">
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-text">
                  <h4>Call Us</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-text">
                  <h4>Email Us</h4>
                  <p>info@smithlegal.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-text">
                  <h4>Visit Us</h4>
                  <p>
                    123 Legal Avenue, Suite 500
                    <br />
                    Los Angeles, CA 90001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage2;
