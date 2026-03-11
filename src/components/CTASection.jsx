import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CTASection.css';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="cta-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to build the <span>future</span> together?
          </h2>
          <p className="cta-description">
            Explore our specific service pages to learn more, or contact us directly 
            to discuss how our integrated solutions can power your next project.
          </p>
          <div className="cta-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/contact')}
            >
              CONTACT US TODAY
              <span className="btn-icon">→</span>
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/divisions')}
            >
              VIEW OUR SERVICES
              <span className="btn-icon">→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="cta-shape shape1"></div>
      <div className="cta-shape shape2"></div>
    </section>
  );
};

export default CTASection;