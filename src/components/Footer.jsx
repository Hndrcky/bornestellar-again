import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

// Import logo (adjust path as needed)
import footerLogo from '../assets/images/logo/logo-white.png';

const Footer = () => {
  const socialIcons = [
    { name: 'LinkedIn', icon: '🔗', url: 'https://linkedin.com/company/bornestellar' },
    { name: 'X', icon: '𝕏', url: 'https://x.com/bornestellar' }, // Updated to X
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/bornestellar' },
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/bornestellar' },
    { name: 'YouTube', icon: '▶️', url: 'https://youtube.com/bornestellar' }
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Divisions', path: '/divisions' },
    { label: 'Sustainability', path: '/sustainability' },
    { label: 'Media', path: '/media' },
    { label: 'Contact', path: '/contact' }
  ];

  const businessUnits = [
    { label: 'Information Technology', path: '/divisions' },
    { label: 'Agriculture', path: '/divisions' },
    { label: 'Real Estate', path: '/divisions' },
    { label: 'Oil & Gas', path: '/divisions' },
    { label: 'Manufacturing', path: '/divisions' }
  ];

  const contactInfo = {
    address: 'No23, Oluyole estate, Ibadan, Nigeria',
    phone: '08108529124',
    email: 'bornstellarltd@gmail.com',
    hours: 'Mon - Fri: 8:00 AM - 6:00 PM'
  };

  return (
    <footer className="footer">
      <div className="footer-decoration">
        <div className="decoration-line"></div>
        <div className="decoration-dots"></div>
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo and Social Section */}
          <div className="footer-section brand-section">
            <div className="footer-logo">
              <img src={footerLogo} alt="Bornestellar" className="footer-logo-img" />
              <div className="footer-logo-text">
                <span className="logo-text">BORNE</span>
                <span className="logo-highlight">STELLAR</span>
              </div>
            </div>
            <p className="footer-description">
              Africa's uprising conglomerate, building the continent's next generation of industries through innovation, technology, and sustainable development.
            </p>
            <div className="social-icons">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Units */}
          <div className="footer-section">
            <h3 className="footer-title">Business Units</h3>
            <ul className="footer-links">
              {businessUnits.map((unit) => (
                <li key={unit.label}>
                  <Link to={unit.path} className="footer-link">
                    {unit.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <p>{contactInfo.address}</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href={`tel:${contactInfo.phone}`} className="contact-link">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <a href={`mailto:${contactInfo.email}`} className="contact-link">
                  {contactInfo.email}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <p>{contactInfo.hours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Bornestellar Limited. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="separator">|</span>
              <Link to="/terms">Terms of Service</Link>
              <span className="separator">|</span>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;