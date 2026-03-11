import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import CTASection from '../components/CTASection';
import '../styles/HomePage.css';

// Import local images 
import itImage from '../assets/images/divisions/it.png';
import agricultureImage from '../assets/images/divisions/agriculture.png';
import realEstateImage from '../assets/images/divisions/real-estate.png';
import manufacturingImage from '../assets/images/divisions/manufacturing.png';
import tradingImage from '../assets/images/divisions/trading.png';
import energyImage from '../assets/images/divisions/energy.png';

const HomePage = () => {
  const navigate = useNavigate();

  const businesses = [
    {
      id: 1,
      title: "Information Technology & Software Development",
      description: "Cutting-edge software solutions, digital transformation services, and IT infrastructure development to drive technological innovation across Africa.",
      image: itImage
    },
    {
      id: 2,
      title: "Agriculture",
      description: "Large-scale farming operations, food processing, and agricultural technology to ensure food security and promote sustainable farming practices.",
      image: agricultureImage
    },
    {
      id: 3,
      title: "Real Estate Development & Construction",
      description: "Developing commercial, residential, and industrial properties while undertaking major construction projects across the continent.",
      image: realEstateImage
    },
    {
      id: 4,
      title: "Machinery Manufacturing & Engineering",
      description: "Designing and manufacturing industrial machinery, equipment, and providing engineering solutions for various sectors.",
      image: manufacturingImage
    },
    {
      id: 5,
      title: "General Trading & Import/Export",
      description: "Facilitating international trade, import-export operations, and distribution of essential commodities across African markets.",
      image: tradingImage
    },
    {
      id: 6,
      title: "Oil, Gas & Energy Services",
      description: "Providing comprehensive energy solutions including petroleum refining, gas distribution, and renewable energy projects.",
      image: energyImage
    }
  ];

  return (
    <div className="home-page">
      <HeroSlider />

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content animate-slideInLeft">
              <span className="section-subtitle">About Bornestellar Limited</span>
              <h2 className="about-title">
                Africa's Uprising <span>Conglomerate</span>
              </h2>
              <p className="about-text">
                Bornstellar Limited, established in 2025, is a multi-sector African enterprise 
                committed to building the continent's next generation of industries.
              </p>
              <p className="about-text">
                Through innovation, technology, manufacturing, infrastructure, and sustainable 
                development, the company drives solutions that strengthen African economies 
                and empower communities.
              </p>
              <p className="about-text">
                Alongside its sister company, AFTRACON, Bornstellar operates with a deep 
                commitment to excellence, regional growth, and long-term impact across every 
                sector it serves.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">2025</div>
                  <div className="stat-label">Established</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">12+</div>
                  <div className="stat-label">Sectors</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Projects</div>
                </div>
              </div>
            </div>
            <div className="about-image animate-slideInRight">
              <div className="image-wrapper">
                <div className="image-overlay"></div>
                <div className="experience-badge">
                  <span className="years">2025</span>
                  <span className="text">Established</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business Section */}
      <section className="business-section">
        <div className="container">
          <div className="section-header">
            <h2>Our <span>Business</span></h2>
            <p>
              Diversified business portfolio driving economic growth and industrial 
              development across Africa
            </p>
          </div>

          <div className="business-grid">
            {businesses.map((business, index) => (
              <div 
                key={business.id} 
                className="business-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-image-wrapper">
                  <img src={business.image} alt={business.title} />
                  <div className="card-overlay"></div>
                </div>
                <div className="card-content">
                  <h3>{business.title}</h3>
                  <p>{business.description}</p>
                </div>
                <div className="card-number">0{index + 1}</div>
              </div>
            ))}
          </div>

          <div className="business-cta">
            <button 
              className="btn btn-primary btn-large"
              onClick={() => navigate('/divisions')}
            >
              Explore All Businesses
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default HomePage;