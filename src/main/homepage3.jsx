import React, { useState, useEffect } from "react";
import "./../index3.css";

const Homepage3 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Business Owner",
      text: "Attorney Davis helped me navigate a complex business dispute with remarkable skill and professionalism. His strategic approach saved my company both time and money.",
    },
    {
      name: "Michael Thompson",
      title: "Family Client",
      text: "During my divorce, this firm provided compassionate and steadfast support. They fought for my rights while keeping my children's best interests at heart.",
    },
    {
      name: "Robert Chen",
      title: "Corporate Client",
      text: "Their expertise in corporate law has been invaluable to our company's growth. They anticipate legal challenges before they arise and provide proactive solutions.",
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="app">
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="logo">
            <h1>Katarzyna Sak</h1>
            <p>Attorney at Law</p>
          </div>
          <nav className="desktop-nav">
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#practice-areas">Practice Areas</a>
              </li>
              <li>
                <a href="#attorneys">Our Team</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="contact-btn">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </a>
            </li>
            <li>
              <a
                href="#practice-areas"
                onClick={() => setMobileMenuOpen(false)}
              >
                Practice Areas
              </a>
            </li>
            <li>
              <a href="#attorneys" onClick={() => setMobileMenuOpen(false)}>
                Our Team
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="contact-btn"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </header>

      <section className="hero">
        <div className="overlay"></div>
        <div className="container">
          <h1>Experienced Legal Counsel When You Need It Most</h1>
          <p>
            Dedicated to protecting your rights and securing your future with
            personalized legal solutions
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-primary">
              Schedule a Consultation
            </a>
            <a href="#practice-areas" className="cta-secondary">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Our Firm</h2>
              <div className="section-divider"></div>
              <p>
                Founded in 2005, Davis & Associates has established itself as a
                trusted legal partner for individuals and businesses throughout
                the region. Our attorneys combine decades of experience with a
                client-centered approach that delivers results.
              </p>
              <p>
                We believe in accessible legal representation, transparent
                communication, and relentless advocacy for our clients'
                interests. When you work with us, you gain not just a lawyer,
                but a dedicated team committed to your success.
              </p>
              <a href="#attorneys" className="learn-more">
                Meet Our Team
              </a>
            </div>
            <div className="about-image">
              <div className="image-frame"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="practice-areas" className="practice-areas">
        <div className="container">
          <h2>Our Practice Areas</h2>
          <div className="section-divider"></div>
          <p className="section-intro">
            We offer comprehensive legal services across multiple practice
            areas, each tailored to meet your specific needs.
          </p>

          <div className="practice-grid">
            <div className="practice-card">
              <div className="practice-icon">
                <i className="icon-business"></i>
              </div>
              <h3>Business Law</h3>
              <p>
                From formation to dissolution, we guide businesses through every
                legal challenge with strategic counsel.
              </p>
            </div>
            <div className="practice-card">
              <div className="practice-icon">
                <i className="icon-family"></i>
              </div>
              <h3>Family Law</h3>
              <p>
                Compassionate representation for divorce, custody, and other
                sensitive family matters.
              </p>
            </div>
            <div className="practice-card">
              <div className="practice-icon">
                <i className="icon-estate"></i>
              </div>
              <h3>Estate Planning</h3>
              <p>
                Secure your legacy and protect your loved ones with
                comprehensive estate planning services.
              </p>
            </div>
            <div className="practice-card">
              <div className="practice-icon">
                <i className="icon-injury"></i>
              </div>
              <h3>Personal Injury</h3>
              <p>
                Advocating for fair compensation when you've been injured due to
                another's negligence.
              </p>
            </div>
            <div className="practice-card">
              <div className="practice-icon">
                <i className="icon-real-estate"></i>
              </div>
              <h3>Real Estate</h3>
              <p>
                Navigate property transactions, disputes, and development
                projects with confidence.
              </p>
            </div>
            <div className="practice-card">
              <div className="practice-icon">
                <i className="icon-litigation"></i>
              </div>
              <h3>Litigation</h3>
              <p>
                Powerful courtroom advocacy backed by meticulous preparation and
                strategic thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <div className="why-choose-content">
            <h2>Why Choose Davis & Associates?</h2>
            <div className="section-divider"></div>

            <div className="reasons-grid">
              <div className="reason">
                <div className="reason-number">01</div>
                <h3>Experienced Attorneys</h3>
                <p>
                  Our team brings decades of combined experience across multiple
                  practice areas.
                </p>
              </div>
              <div className="reason">
                <div className="reason-number">02</div>
                <h3>Client-Focused Approach</h3>
                <p>
                  We prioritize your goals and tailor our strategies to your
                  specific situation.
                </p>
              </div>
              <div className="reason">
                <div className="reason-number">03</div>
                <h3>Transparent Communication</h3>
                <p>
                  Clear, consistent updates and straightforward advice
                  throughout your case.
                </p>
              </div>
              <div className="reason">
                <div className="reason-number">04</div>
                <h3>Proven Results</h3>
                <p>
                  A track record of successful outcomes across a wide range of
                  legal matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="attorneys" className="attorneys">
        <div className="container">
          <h2>Our Attorneys</h2>
          <div className="section-divider"></div>
          <p className="section-intro">
            Meet our talented team of legal professionals dedicated to your
            success.
          </p>

          <div className="attorneys-grid">
            <div className="attorney-card">
              <div className="attorney-image"></div>
              <h3>Jonathan Davis</h3>
              <p className="attorney-title">Managing Partner</p>
              <p>
                Specializing in business law and complex litigation with over 20
                years of experience.
              </p>
            </div>
            <div className="attorney-card">
              <div className="attorney-image"></div>
              <h3>Maria Rodriguez</h3>
              <p className="attorney-title">Senior Partner</p>
              <p>
                Expert in family law and estate planning, known for her
                compassionate approach.
              </p>
            </div>
            <div className="attorney-card">
              <div className="attorney-image"></div>
              <h3>David Chen</h3>
              <p className="attorney-title">Associate Attorney</p>
              <p>
                Focused on real estate law and commercial transactions with
                innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>Client Testimonials</h2>
          <div className="section-divider"></div>

          <div className="testimonial-slider">
            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                {testimonials[activeTestimonial].text}
              </p>
              <div className="testimonial-author">
                <p className="author-name">
                  {testimonials[activeTestimonial].name}
                </p>
                <p className="author-title">
                  {testimonials[activeTestimonial].title}
                </p>
              </div>
            </div>

            <div className="slider-controls">
              <button onClick={prevTestimonial} className="prev-btn">
                ←
              </button>
              <div className="slider-dots">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${
                      index === activeTestimonial ? "active" : ""
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                  ></span>
                ))}
              </div>
              <button onClick={nextTestimonial} className="next-btn">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Us</h2>
              <div className="section-divider"></div>
              <p>
                We're ready to discuss your legal needs. Reach out to schedule a
                consultation.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="icon-location"></i>
                  </div>
                  <div>
                    <h4>Our Office</h4>
                    <p>
                      123 Legal Avenue, Suite 500
                      <br />
                      Metropolis, NY 10001
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="icon-phone"></i>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="icon-email"></i>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>info@davislaw.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="icon-clock"></i>
                  </div>
                  <div>
                    <h4>Hours</h4>
                    <p>
                      Monday - Friday: 9AM - 6PM
                      <br />
                      Saturday: By appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <select>
                    <option value="" disabled selected>
                      Select Practice Area
                    </option>
                    <option value="business">Business Law</option>
                    <option value="family">Family Law</option>
                    <option value="estate">Estate Planning</option>
                    <option value="injury">Personal Injury</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="litigation">Litigation</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>Davis & Associates</h2>
              <p>Attorneys at Law</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#practice-areas">Practice Areas</a>
                  </li>
                  <li>
                    <a href="#attorneys">Our Team</a>
                  </li>
                  <li>
                    <a href="#testimonials">Testimonials</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Practice Areas</h4>
                <ul>
                  <li>
                    <a href="#practice-areas">Business Law</a>
                  </li>
                  <li>
                    <a href="#practice-areas">Family Law</a>
                  </li>
                  <li>
                    <a href="#practice-areas">Estate Planning</a>
                  </li>
                  <li>
                    <a href="#practice-areas">Personal Injury</a>
                  </li>
                  <li>
                    <a href="#practice-areas">Real Estate</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Connect With Us</h4>
                <div className="social-links">
                  <p className="social-icon">
                    <i className="icon-facebook"></i>
                  </p>
                  <p>
                    lassName="social-icon">
                    <i className="icon-twitter"></i>
                  </p>
                  <p className="social-icon">
                    <i className="icon-linkedin"></i>
                  </p>
                  <p className="social-icon">
                    <i className="icon-instagram"></i>
                  </p>
                </div>
                <p className="footer-subscribe">
                  Subscribe to our newsletter for legal updates and insights
                </p>
                <div className="footer-subscribe-form">
                  <input type="email" placeholder="Your Email" />
                  <button type="submit">→</button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Davis & Associates. All rights reserved.</p>
            <div className="footer-bottom-links">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Disclaimer</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage3;
