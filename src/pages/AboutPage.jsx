import React from 'react';
import CTASection from '../components/CTASection';
import '../styles/AboutPage.css';

// Import images
import industrialImage from '../assets/images/divisions/industrial.png';
import energyImage from '../assets/images/divisions/energy.png';
import techImage from '../assets/images/divisions/tech.png';
import ceoImage from '../assets/images/leadership/ceo.png';

const AboutPage = () => {
  const divisions = [
    {
      id: 1,
      title: "Industrial Division",
      description: "Driving Africa's industrial revolution through advanced manufacturing and production technologies.",
      image: industrialImage
    },
    {
      id: 2,
      title: "Energy & Infrastructure",
      description: "Powering Africa's future through sustainable energy solutions and smart infrastructure development.",
      image: energyImage
    },
    {
      id: 3,
      title: "Technology & Innovation",
      description: "Pioneering digital transformation through cutting-edge technologies and innovative solutions.",
      image: techImage
    }
  ];

  const values = [
    {
      id: 1,
      title: "Innovation",
      description: "Continuously seeking better ways to serve our customers and improve our processes.",
      icon: "💡"
    },
    {
      id: 2,
      title: "Integrity",
      description: "Conducting business with honesty, transparency, and ethical practices.",
      icon: "🤝"
    },
    {
      id: 3,
      title: "Sustainability",
      description: "Committing to environmental stewardship and social responsibility.",
      icon: "🌍"
    },
    {
      id: 4,
      title: "Excellence",
      description: "Striving for the highest standards in everything we do.",
      icon: "⭐"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title animate-fadeIn">
              Building Africa's <span>Future</span>
            </h1>
            <p className="hero-subtitle animate-fadeIn">
              Since 2025, Bornestellar has been at the forefront of industrial 
              transformation across the continent.
            </p>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span className="scroll-text">Scroll</span>
          <span className="scroll-line"></span>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission animate-slideInLeft">
              <div className="mv-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>
                To empower Africa's growth by developing and managing world-class business 
                divisions that deliver innovative, technology-driven, and sustainable solutions 
                across key sectors. We aim to create opportunities, strengthen industries, 
                and contribute to economic independence and self-sufficiency across the continent.
              </p>
            </div>
            <div className="mv-card vision animate-slideInRight">
              <div className="mv-icon">👁️</div>
              <h2>Our Vision</h2>
              <p>
                To be Africa's leading multi-sector enterprise, recognized for innovation, 
                sustainability, and transformative impact — creating a connected, industrialized, 
                and self-reliant Africa built on technology, knowledge, and shared prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Divisions */}
      <section className="divisions-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Key <span>Divisions</span></h2>
            <p>Three pillars driving our diversified business strategy across Africa</p>
          </div>

          <div className="divisions-grid">
            {divisions.map((division, index) => (
              <div 
                key={division.id} 
                className="division-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-image">
                  <img src={division.image} alt={division.title} />
                  <div className="image-overlay"></div>
                </div>
                <div className="card-content">
                  <h3>{division.title}</h3>
                  <p>{division.description}</p>
                  <div className="card-link">
                    Learn More <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <div className="container">
          <div className="leadership-grid">
            <div className="leader-image animate-scaleIn">
              <img src={ceoImage} alt="Henry Sijuade" />
              <div className="image-border"></div>
            </div>
            <div className="leader-content">
              <span className="leader-title">Founder & CEO</span>
              <h2>Henry Sijuade</h2>
              <p className="leader-quote">
                "Technology should solve real business problems and create meaningful value. 
                At Bornestellar, we're committed to delivering solutions that not only work 
                but transform how our clients operate."
              </p>
              <div className="leader-stats">
                <div className="stat">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Led</div>
                </div>
                <div className="stat">
                  <div className="stat-number">12+</div>
                  <div className="stat-label">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <div className="container">
          <div className="journey-content">
            <h2>Our Journey</h2>
            <p>
              Bornstellar Limited, established in 2025, is a multi-sector African enterprise 
              committed to building the continent's next generation of industries.
            </p>
            <p>
              Through innovation, technology, manufacturing, infrastructure, and sustainable 
              development, the company drives solutions that strengthen African economies 
              and empower communities. Alongside its sister company, AFTRACON, Bornstellar 
              operates with a deep commitment to excellence, regional growth, and long-term 
              impact across every sector it serves.
            </p>
            <div className="journey-timeline">
              <div className="timeline-item">
                <div className="year">2025</div>
                <div className="desc">Founded with vision for African transformation</div>
              </div>
              <div className="timeline-item">
                <div className="year">2025</div>
                <div className="desc">Launched 6 business divisions</div>
              </div>
              <div className="timeline-item">
                <div className="year">2025+</div>
                <div className="desc">Expanding across Africa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core <span>Values</span></h2>
            <p>The principles that guide everything we do</p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={value.id} 
                className="value-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <div className="value-number">0{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default AboutPage;