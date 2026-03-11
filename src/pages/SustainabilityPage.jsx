import React from 'react';
import CTASection from '../components/CTASection';
import '../styles/SustainabilityPage.css';

const SustainabilityPage = () => {
  const pillars = [
    {
      id: 1,
      title: "Environmental Responsibility",
      description: "Minimizing our environmental footprint through sustainable practices and green technologies.",
      icon: "🌱",
      initiatives: [
        "Carbon footprint reduction",
        "Energy-efficient operations",
        "E-waste management",
        "Green hosting solutions"
      ]
    },
    {
      id: 2,
      title: "Social Impact",
      description: "Creating positive social change through technology education and community engagement.",
      icon: "🤝",
      initiatives: [
        "Tech education programs",
        "Community digital literacy",
        "Pro bono projects for non-profits",
        "Diversity and inclusion initiatives"
      ]
    },
    {
      id: 3,
      title: "Economic Sustainability",
      description: "Building long-term value for our clients, employees, and stakeholders through ethical business practices.",
      icon: "📈",
      initiatives: [
        "Fair pricing models",
        "Employee development programs",
        "Local economic development",
        "Sustainable growth strategies"
      ]
    }
  ];

  const initiatives = [
    {
      id: 1,
      title: "Sustainable Construction & Design",
      description: "Adopting eco-friendly materials, energy-efficient systems, and green building certifications in all real estate and infrastructure developments.",
      impact: "Reduces material waste by 35% and lowers energy costs for end-users by up to 25%.",
      icon: "🏗️"
    },
    {
      id: 2,
      title: "Responsible Supply Chain & Sourcing",
      description: "Partnering with suppliers and contractors who meet strict sustainability, ethics, and labor standards.",
      impact: "Ensures transparency and accountability across 100% of procurement operations.",
      icon: "🔗"
    },
    {
      id: 3,
      title: "Waste Reduction & Circular Production",
      description: "Implementing recycling, material recovery, and sustainable manufacturing processes in machinery and engineering divisions.",
      impact: "Diverts over 50% of industrial waste from landfills annually.",
      icon: "♻️"
    },
    {
      id: 4,
      title: "Smart Agriculture & Resource Efficiency",
      description: "Using precision farming, data analytics, and water-efficient irrigation to enhance productivity while preserving natural resources.",
      impact: "Diverts over 50% of industrial waste from landfills.",
      icon: "🌾"
    },
    {
      id: 5,
      title: "Clean Energy Services in Oil & Gas",
      description: "Integrating emission-control technologies and carbon capture systems within our energy service operations.",
      impact: "Cuts greenhouse gas emissions by up to 40% during production and service cycles.",
      icon: "⚡"
    },
    {
      id: 6,
      title: "Sustainable Trade & Logistics",
      description: "Optimizing global trade routes, packaging, and transportation to minimize fuel use and environmental impact.",
      impact: "Reduces shipping-related emissions by 20% and improves delivery efficiency.",
      icon: "📦"
    },
    {
      id: 7,
      title: "Community Empowerment Programs",
      description: "Supporting education, skill development, and local entrepreneurship through community partnerships and social investments.",
      impact: "Creates long-term employment opportunities and supports inclusive economic growth",
      icon: "👥"
    },
    {
      id: 8,
      title: "Research & Innovation for Sustainability",
      description: "Investing in R&D initiatives that advance renewable technologies, waste-to-energy solutions, and sustainable materials.",
      impact: "Accelerates the development of innovative green technologies with real-world commercial applications",
      icon: "🔬"
    }
  ];

  const roadmap = [
    {
      period: "Short-term",
      aspirations: [
        "Expand Employee Sustainability Training",
        "Optimize Logistics and Trade Efficiency",
        "Develop Community Engagement Programs"
      ]
    },
    {
      period: "Medium-term",
      aspirations: [
        "Attain Global Sustainability Certifications",
        "Scale Community Development Impact",
        "Strengthen Digital Sustainability Leadership"
      ]
    },
    {
      period: "Long-term",
      aspirations: [
        "Institutionalize a Circular Economy Framework",
        "Establish Bornestellar Foundation for tech education",
        "Influence Industry Standards & Policy"
      ]
    }
  ];

  return (
    <div className="sustainability-page">
      {/* Hero Section */}
      <section className="sustainability-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Sustainability at <span>Bornestellar</span>
            </h1>
            <p className="hero-subtitle">
              Building a better future through responsible business practices
            </p>
          </div>
        </div>
        <div className="hero-scroll">
          <span className="scroll-text">Discover Our Commitment</span>
          <span className="scroll-line"></span>
        </div>
      </section>

      {/* Mission Section */}
      <section className="sustainability-mission">
        <div className="container">
          <div className="mission-content">
            <h2>Our Commitment to Sustainable Technology</h2>
            <p>
              At Bornestellar, sustainability and social responsibility are at the heart of how we do business. 
              We recognize that our success is deeply connected to the well-being of the communities we serve 
              and the preservation of the planet we all share.
            </p>
            <p>
              Across every sector we operate in — from technology and energy to real estate, agriculture, 
              and manufacturing — we are committed to driving progress that is ethical, inclusive, and sustainable.
            </p>
            <div className="founder-quote">
              <blockquote>
                "Progress means more than growth — it's about creating solutions that empower people, 
                protect the planet, and sustain prosperity for generations to come."
              </blockquote>
              <cite>- Henry Sijuade, Founder & CEO</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="pillars-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Sustainability <span>Pillars</span></h2>
            <p>Three core principles guiding our sustainable journey</p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.id} 
                className="pillar-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="pillar-icon">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <div className="pillar-initiatives">
                  <h4>Key Initiatives:</h4>
                  <ul>
                    {pillar.initiatives.map((initiative, idx) => (
                      <li key={idx}>{initiative}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="initiatives-section">
        <div className="container">
          <div className="section-header">
            <h2>Key Sustainability <span>Initiatives</span></h2>
            <p>Our actions creating measurable impact</p>
          </div>

          <div className="initiatives-grid">
            {initiatives.map((initiative, index) => (
              <div 
                key={initiative.id} 
                className="initiative-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="initiative-icon">{initiative.icon}</div>
                <h3>{initiative.title}</h3>
                <p>{initiative.description}</p>
                <div className="initiative-impact">
                  <strong>Impact:</strong> {initiative.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="community-section">
        <div className="container">
          <div className="community-content">
            <h2>Empowering Communities Through Innovation</h2>
            <p>
              We are committed to building stronger, more resilient communities by sharing our expertise, 
              resources, and time. Our initiatives focus on education, empowerment, and sustainable development 
              — ensuring that growth benefits everyone.
            </p>
            <div className="community-programs">
              <div className="program">
                <div className="program-icon">👥</div>
                <h3>Mentorship Programs</h3>
                <p>Guiding the next generation of tech professionals</p>
              </div>
              <div className="program">
                <div className="program-icon">💻</div>
                <h3>Tech Skill Development</h3>
                <p>Hands-on training in technology, construction, and sustainable farming</p>
              </div>
              <div className="program">
                <div className="program-icon">🌍</div>
                <h3>Environmental Awareness</h3>
                <p>Promoting responsible resource use and climate education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Sustainability <span>Roadmap</span></h2>
            <p>Charting our course for a sustainable future</p>
          </div>

          <div className="roadmap-grid">
            {roadmap.map((phase, index) => (
              <div key={index} className="roadmap-card">
                <div className="roadmap-header">
                  <h3>{phase.period}</h3>
                  <div className="roadmap-number">0{index + 1}</div>
                </div>
                <ul className="roadmap-aspirations">
                  {phase.aspirations.map((aspiration, idx) => (
                    <li key={idx}>{aspiration}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default SustainabilityPage;