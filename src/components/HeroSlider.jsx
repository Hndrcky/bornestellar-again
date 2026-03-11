import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HeroSlider.css';

const HeroSlider = ({ customSlides, autoPlay = true, interval = 5000 }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const defaultSlides = [
    {
      id: 1,
      title: "Agricultural Business",
      description: "Strengthening Africa's food systems with modern farming, livestock management, dairy production, and agri-produce trading that support sustainable rural economies.",
      buttonText: "Learn more",
      image: null
    },
    {
      id: 2,
      title: "Information Technology Services",
      description: "Driving Africa's digital transformation through IT consultancy, custom software solutions, technical advisory, and skills training that empower businesses to compete globally.",
      buttonText: "Learn more",
      image: null
    },
    {
      id: 3,
      title: "Real Estate & Land Development",
      description: "Advancing Africa's urban growth through innovative real estate solutions, land development, and construction initiatives that shape future-ready communities.",
      buttonText: "Learn More",
      image: null
    },
    {
      id: 4,
      title: "Machinery & Equipment Manufacturing",
      description: "Building local capacity by producing durable farm and automotive machinery, tools, and equipment tailored to Africa's industrial and agricultural demands.",
      buttonText: "Learn more",
      image: null
    },
    {
      id: 5,
      title: "Oil & Gas Services",
      description: "Enhancing Africa's energy sector with specialized services, operational support, and technical solutions that strengthen exploration and production capability.",
      buttonText: "Learn more",
      image: null
    }
  ];

  const slides = customSlides || defaultSlides;

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleButtonClick = () => {
    navigate('/divisions');
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div className="slide-overlay"></div>
          
          {/* Background with gradient if no image */}
          {!slide.image && (
            <div 
              className="slide-bg-gradient"
              style={{
                background: `linear-gradient(135deg, 
                  ${index % 2 === 0 ? '#f97316' : '#000000'} 0%, 
                  ${index % 2 === 0 ? '#000000' : '#f97316'} 100%)`
              }}
            ></div>
          )}

          <div className="slide-content">
            <div className="slide-badge" style={{ animationDelay: '0.2s' }}>
              {`0${index + 1}`}
            </div>
            <h1 className="slide-title" style={{ animationDelay: '0.4s' }}>
              {slide.title}
            </h1>
            <p className="slide-description" style={{ animationDelay: '0.6s' }}>
              {slide.description}
            </p>
            <button 
              className="slide-btn"
              onClick={handleButtonClick}
              style={{ animationDelay: '0.8s' }}
            >
              {slide.buttonText}
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      ))}

      <button className="slider-arrow prev" onClick={goToPrevious}>
        ←
      </button>
      <button className="slider-arrow next" onClick={goToNext}>
        →
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <span className="dot-number">0{index + 1}</span>
          </button>
        ))}
      </div>

      <div className="slider-progress">
        <div 
          className="progress-bar"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroSlider;