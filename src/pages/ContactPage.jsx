import React, { useState } from 'react';
import CTASection from '../components/CTASection';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    department: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mgvppwbz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          department: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      city: "Ibadan, Nigeria",
      address: "No23, Oluyole estate, Ibadan",
      phone: "08108529124",
      email: "bornstellarltd@gmail.com",
      hours: "Mon - Fri: 8:00 AM - 6:00 PM"
    }
  ];

  const departments = [
    { name: "General Inquiries", email: "info@bornestellar.com" },
    { name: "Sales & Partnerships", email: "sales@bornestellar.com" },
    { name: "Technical Support", email: "support@bornestellar.com" },
    { name: "Careers", email: "careers@bornestellar.com" },
    { name: "Media & Press", email: "press@bornestellar.com" }
  ];

  const faqs = [
    {
      q: "What's your typical response time?",
      a: "We respond to all inquiries within 24 hours during business days. For urgent matters, please call our main office line."
    },
    {
      q: "Do you offer free consultations?",
      a: "Yes! We offer complimentary 30-minute consultations to discuss your project needs and how we can help."
    },
    {
      q: "What industries do you serve?",
      a: "We work with businesses across various sectors including healthcare, finance, e-commerce, education, and more."
    },
    {
      q: "Do you work with international clients?",
      a: "Absolutely! We have experience working with clients across Africa, Europe, and North America."
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title animate-fadeIn">
              Get in <span>Touch</span>
            </h1>
            <p className="hero-subtitle animate-fadeIn">
              Let's discuss how we can transform your business with innovative solutions
            </p>
          </div>
        </div>
        <div className="hero-scroll">
          <span className="scroll-text">Connect With Us</span>
          <span className="scroll-line"></span>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <div className="methods-grid">
            <div className="method-card">
              <div className="method-icon">📧</div>
              <h3>Email Us</h3>
              <p>Reach out directly to our team for any inquiries or questions.</p>
              <a href="mailto:bornstellarltd@gmail.com" className="method-link">
                bornstellarltd@gmail.com
              </a>
            </div>
            <div className="method-card">
              <div className="method-icon">📞</div>
              <h3>Call Us</h3>
              <p>Speak directly with our team during business hours.</p>
              <a href="tel:08108529124" className="method-link">
                08108529124
              </a>
            </div>
            <div className="method-card">
              <div className="method-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Coming Soon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  ❌ There was an error sending your message. Please try again or email us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                    >
                      <option value="">Select department</option>
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales & Partnerships</option>
                      <option value="support">Technical Support</option>
                      <option value="careers">Careers</option>
                      <option value="media">Media & Press</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Brief subject of your message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              
              <div className="info-card">
                <h3>📍 Our Offices</h3>
                {offices.map((office, index) => (
                  <div key={index} className="office-item">
                    <h4>{office.city}</h4>
                    <p>{office.address}</p>
                    <div className="office-contact">
                      <span>📞 {office.phone}</span>
                      <span>📧 {office.email}</span>
                      <span>🕒 {office.hours}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="info-card">
                <h3>📧 Department Emails</h3>
                <div className="department-list">
                  {departments.map((dept, index) => (
                    <div key={index} className="department-item">
                      <strong>{dept.name}:</strong>
                      <a href={`mailto:${dept.email}`}>{dept.email}</a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="info-card">
                <h3>🌐 Connect With Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">LinkedIn</a>
                  <a href="#" className="social-link">Twitter</a>
                  <a href="#" className="social-link">GitHub</a>
                  <a href="#" className="social-link">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126301.40895210752!2d3.78728175!4d7.3781669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039f8f2e8c9e3b3%3A0xb8a3c9b8d8c8e8b!2sIbadan%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1645567890123!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Bornestellar Location"
        ></iframe>
      </section>

      <CTASection />
    </div>
  );
};

export default ContactPage;