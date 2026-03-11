import React, { useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import CTASection from '../components/CTASection';
import '../styles/MediaPage.css';

// Import media images
import mediaSlide1 from '../assets/images/hero/business/slide1.jpeg';
import mediaSlide2 from '../assets/images/hero/business/slide2.png';
import mediaSlide3 from '../assets/images/hero/business/slide3.png';
import news1 from '../assets/images/media/news1.png';
import news2 from '../assets/images/media/news2.png';
import news3 from '../assets/images/media/news3.png';
import news4 from '../assets/images/media/news4.png';

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [email, setEmail] = useState('');

  const mediaSlides = [
    {
      id: 1,
      title: "Bornestellar in the News",
      description: "Stay updated with our latest announcements, achievements, and media coverage across global platforms.",
      buttonText: "Latest News",
      image: mediaSlide1,
      link: "/media"
    },
    {
      id: 2,
      title: "Press & Media Resources", 
      description: "Access our press releases, media kit, and company information for journalists and media partners.",
      buttonText: "Press Resources",
      image: mediaSlide2,
      link: "/press"
    },
    {
      id: 3,
      title: "Events & Conferences",
      description: "Join us at upcoming events, workshops, and conferences where we share insights and innovations.",
      buttonText: "View Events",
      image: mediaSlide3,
      link: "/events"
    }
  ];

  const news = [
    {
      id: 1,
      title: "Bornestellar Launches AI-Powered Sustainability Platform",
      date: "March 15, 2024",
      category: "Product Launch",
      summary: "Bornestellar introduces groundbreaking AI platform that helps businesses reduce their carbon footprint through intelligent energy optimization.",
      image: news1,
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Henry Sijuade Speaks at Tech Innovation Summit 2024",
      date: "February 28, 2024",
      category: "Event",
      summary: "Founder Henry Sijuade shares insights on the future of sustainable technology and digital transformation in emerging markets.",
      image: news2,
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Bornestellar Partners with GreenTech Foundation",
      date: "February 12, 2024",
      category: "Partnership",
      summary: "New collaboration aims to provide technology education and resources to underserved communities across Africa.",
      image: news3,
      readTime: "2 min read"
    },
    {
      id: 4,
      title: "Company Achieves 95% Client Satisfaction Rate",
      date: "January 30, 2024",
      category: "Achievement",
      summary: "Annual client survey reveals exceptional satisfaction scores, highlighting Bornestellar's commitment to quality and customer success.",
      image: news4,
      readTime: "3 min read"
    }
  ];

  const pressReleases = [
    {
      id: 1,
      title: "Bornestellar Announces Q1 2024 Financial Results",
      date: "April 5, 2024",
      summary: "Strong quarterly performance driven by increased demand for sustainable technology solutions and digital transformation services."
    },
    {
      id: 2,
      title: "New Headquarters Opening in Lagos Innovation District",
      date: "March 20, 2024",
      summary: "State-of-the-art facility designed with sustainability features to support company growth and community engagement initiatives."
    },
    {
      id: 3,
      title: "Leadership Team Expansion Announcement",
      date: "February 8, 2024",
      summary: "Bornestellar welcomes three new executives to drive innovation in AI, sustainability, and international market expansion."
    }
  ];

  const events = [
    {
      id: 1,
      title: "Digital Transformation Workshop Series",
      date: "May 15-17, 2024",
      location: "Lagos, Nigeria",
      type: "Workshop",
      description: "Hands-on workshops helping businesses navigate digital transformation with sustainable practices.",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Tech for Good Conference",
      date: "June 8, 2024",
      location: "Virtual Event",
      type: "Conference",
      description: "Annual conference exploring how technology can drive positive social and environmental impact.",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Community Coding Bootcamp",
      date: "July 12-14, 2024",
      location: "Abuja, Nigeria",
      type: "Community",
      description: "Free coding bootcamp for aspiring developers from underrepresented communities.",
      status: "upcoming"
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  const featuredNews = [
    {
      source: "TechCrunch",
      title: "Bornestellar's AI Platform Could Revolutionize Sustainable Business",
      description: "Featured in TechCrunch's roundup of innovative African tech startups making global impact."
    },
    {
      source: "Forbes Africa",
      title: "Henry Sijuade: Building Africa's Next Tech Giant",
      description: "Forbes Africa profiles our founder's vision for sustainable technology across the continent."
    },
    {
      source: "Business Day",
      title: "Digital Transformation Made Sustainable",
      description: "Business Day covers our approach to combining digital innovation with environmental responsibility."
    }
  ];

  return (
    <div className="media-page">
      {/* Video Hero Section */}
      <section className="media-hero">
        <div className="video-container">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title animate-fadeIn">
            Media <span>Center</span>
          </h1>
          <p className="hero-subtitle animate-fadeIn">
            Stay connected with the latest news, events, and stories from Bornestellar
          </p>
        </div>
        <div className="hero-scroll">
          <span className="scroll-text">Explore Our Stories</span>
          <span className="scroll-line"></span>
        </div>
      </section>

      {/* Media Contact */}
      <section className="media-contact">
        <div className="container">
          <div className="contact-card">
            <h2>Media Inquiries</h2>
            <p>For press inquiries, interview requests, or media partnerships, please contact our communications team.</p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:bornstellarltd@gmail.com" className="contact-value">
                  bornstellarltd@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <span className="contact-value">08108529124</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Available:</span>
                <span className="contact-value">Mon - Fri, 9AM - 5PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Tabs */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <h2>News & <span>Updates</span></h2>
            <div className="tab-navigation">
              <button 
                className={`tab-button ${activeTab === 'news' ? 'active' : ''}`}
                onClick={() => setActiveTab('news')}
              >
                Latest News
              </button>
              <button 
                className={`tab-button ${activeTab === 'press' ? 'active' : ''}`}
                onClick={() => setActiveTab('press')}
              >
                Press Releases
              </button>
              <button 
                className={`tab-button ${activeTab === 'events' ? 'active' : ''}`}
                onClick={() => setActiveTab('events')}
              >
                Events
              </button>
            </div>
          </div>

          <div className="content-grid">
            {activeTab === 'news' && news.map((item) => (
              <div key={item.id} className="news-card">
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                  <div className="card-category">{item.category}</div>
                </div>
                <div className="card-content">
                  <div className="card-meta">
                    <span className="date">{item.date}</span>
                    <span className="read-time">{item.readTime}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <button className="read-more-btn">
                    Read Full Story
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            ))}

            {activeTab === 'press' && pressReleases.map((item) => (
              <div key={item.id} className="press-card">
                <div className="press-badge">Press Release</div>
                <div className="card-meta">
                  <span className="date">{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <button className="read-more-btn">
                  View Details
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            ))}

            {activeTab === 'events' && events.map((item) => (
              <div key={item.id} className="event-card">
                <div className="event-badge">{item.type}</div>
                <div className="card-meta">
                  <span className="date">{item.date}</span>
                  <span className="location">📍 {item.location}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="register-btn">
                  Register for Event
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In the News */}
      <section className="in-the-news">
        <div className="container">
          <div className="section-header">
            <h2>Bornestellar <span>in the News</span></h2>
          </div>
          <div className="news-highlights">
            {featuredNews.map((item, index) => (
              <div key={index} className="news-item">
                <div className="news-source">{item.source}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="read-article-btn">
                  View Article
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Connected</h2>
            <p>Subscribe to our newsletter for the latest updates, insights, and company news delivered to your inbox.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
            <p className="privacy-note">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default MediaPage;