import React, { useState } from 'react';
import CTASection from '../components/CTASection';
import '../styles/DivisionsPage.css';

const DivisionsPage = () => {
  const [activeProcess, setActiveProcess] = useState(1);

  const services = [
    {
      id: 1,
      title: "Information Technology & Software Development",
      description: "We provide full-spectrum IT consultancy, software development, advisory, and training services. Our expertise covers all areas of information technology, helping businesses design, build, and manage digital solutions that drive growth and innovation.",
      features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"],
      icon: "💻"
    },
    {
      id: 2,
      title: "Energy & Natural Resources & Agribusiness",
      description: "We engage in Energy & Natural Resources and agribusiness operations, including crop cultivation, livestock and dairy farming, and agricultural trading. We also support farmers and agribusinesses through technology-driven solutions and supply-chain support.",
      features: ["Land Utilization", "Biological Production", "Investment in Inputs", "Technological Integration"],
      icon: "⚡"
    },
    {
      id: 3,
      title: "Real Estate Development & Construction",
      description: "Our team offers real estate consultancy, civil engineering, and construction services for residential, commercial, and industrial projects. We work independently or through joint ventures and partnerships with government agencies, corporations, and private developers.",
      features: ["Comprehensive lifecycle", "Pre-development", "Project coordination", "Sustainability"],
      icon: "🏗️"
    },
    {
      id: 4,
      title: "Machinery Manufacturing & Engineering",
      description: "We manufacture and supply farm machinery, automotive parts, and industrial equipment. Our services include fabrication, assembly, maintenance, and contracting for engineering and infrastructure projects.",
      features: ["Design and planning", "Production and automation", "Quality and control", "Material and efficiency"],
      icon: "⚙️"
    },
    {
      id: 5,
      title: "General Contracting",
      description: "We undertake construction, repair, and maintenance contracts for buildings, roads, and other infrastructure projects. We operate as principal contractors or subcontractors, delivering reliable and efficient project management.",
      features: ["Project oversight", "Budget and scheduling", "Quality and safety", "Streamlined process"],
      icon: "🔨"
    },
    {
      id: 6,
      title: "General Trading & Import/Export",
      description: "We are engaged in general trading, including the buying, selling, importing, exporting, and distribution of goods and commodities across sectors — from consumer products to industrial materials.",
      features: ["Diverse operations", "Regulatory compliance", "Logistics and distribution", "Global reach"],
      icon: "📦"
    },
    {
      id: 7,
      title: "Oil, Gas & Energy Services",
      description: "We provide oil and gas consulting, technical, and operational services, along with renewable energy solutions. This includes solar module design, development, and installation, supporting the global transition to cleaner energy.",
      features: ["Exploration Support", "Logistics and Transportation", "Processing and Refining Support", "Equipment and Technology Supply"],
      icon: "🛢️"
    },
    {
      id: 8,
      title: "Management & Business Consultancy",
      description: "We deliver comprehensive management consulting services — including administrative, office support, and business process optimization — tailored to enhance organizational performance and efficiency.",
      features: ["Expertise and knowledge", "Objective analysis", "Problem-solving", "Project management"],
      icon: "📊"
    },
    {
      id: 9,
      title: "Forensic Accounting & Financial Advisory",
      description: "We specialize in forensic accounting, auditing, and investigative financial services, helping organizations detect fraud, ensure compliance, and strengthen internal controls.",
      features: ["Data Analysis", "Ethical Conduct", "Litigation Support", "Forensic Accountancy"],
      icon: "💰"
    },
    {
      id: 10,
      title: "Research & Development",
      description: "Developing Africa's mobility future through vehicle manufacturing, trading, and parts distribution that broaden access to reliable transport solutions.",
      features: ["Manufacturing", "Trading", "Real-solutions"],
      icon: "🔬"
    },
    {
      id: 11,
      title: "Automotive Manufacturing & Distribution",
      description: "We specialize in forensic accounting, auditing, and investigative financial services, helping organizations detect fraud, ensure compliance, and strengthen internal controls.",
      features: ["Data Analysis", "Ethical Conduct", "Litigation Support", "Forensic Accountancy"],
      icon: "🚗"
    },
    {
      id: 12,
      title: "Renewable Energy Solutions",
      description: "Accelerating Africa's clean-energy transition with solar and sustainable power technologies designed to expand access and protect the environments.",
      features: ["Energy", "Energy Solution"],
      icon: "☀️"
    }
  ];

  const processes = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "We begin by understanding your business needs, goals, and technical requirements to create a comprehensive project plan."
    },
    {
      id: 2,
      title: "Design & Prototyping",
      description: "Our design team creates wireframes and prototypes to visualize the solution before development begins."
    },
    {
      id: 3,
      title: "Development",
      description: "Our developers build your solution using best practices, modern technologies, and agile methodologies."
    },
    {
      id: 4,
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your solution meets quality standards and performs as expected."
    },
    {
      id: 5,
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing support to ensure optimal performance and user satisfaction."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "15+", label: "Industries Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="divisions-page">
      {/* Hero Section */}
      <section className="divisions-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Our <span>Divisions</span>
            </h1>
            <p className="hero-subtitle">
              Comprehensive solutions across multiple sectors, driving innovation 
              and growth throughout Africa.
            </p>
          </div>
        </div>
        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Overview */}
      <section className="overview-section">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content animate-slideInLeft">
              <h2>About Bornestellar</h2>
              <p>
                Founded by Henry Sijuade, Bornestellar is a premier technology solutions provider 
                dedicated to empowering businesses through innovative digital transformation. 
                We combine technical expertise with business acumen to deliver solutions that 
                drive growth and efficiency.
              </p>
              <p>
                Our team of experienced developers, designers, and strategists work collaboratively 
                to create custom solutions that address your unique challenges and opportunities. 
                We believe in building partnerships, not just projects.
              </p>
              <div className="founder-note">
                <div className="founder-quote">
                  "Technology should solve real business problems and create meaningful value. 
                  At Bornestellar, we're committed to delivering solutions that not only work 
                  but transform how our clients operate."
                </div>
                <div className="founder-signature">
                  - Henry Sijuade, Founder & CEO
                </div>
              </div>
            </div>
            <div className="overview-stats animate-slideInRight">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our <span>Services</span></h2>
            <p>Comprehensive solutions tailored to your business needs</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="service-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="service-number">0{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our <span>Process</span></h2>
            <p>A systematic approach to delivering excellence</p>
          </div>

          <div className="process-container">
            <div className="process-timeline">
              {processes.map((process) => (
                <div
                  key={process.id}
                  className={`process-step ${activeProcess === process.id ? 'active' : ''}`}
                  onClick={() => setActiveProcess(process.id)}
                >
                  <div className="step-number">0{process.id}</div>
                  <div className="step-title">{process.title}</div>
                </div>
              ))}
            </div>

            <div className="process-content">
              {processes.map((process) => (
                <div
                  key={process.id}
                  className={`process-detail ${activeProcess === process.id ? 'active' : ''}`}
                >
                  <h3>{process.title}</h3>
                  <p>{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default DivisionsPage;