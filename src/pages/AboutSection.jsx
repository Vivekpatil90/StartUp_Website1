import React from 'react';
import './AboutPage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const stats = [
    { label: "Year Of Foundation", value: "2017" },
    { label: "Global Customers", value: "250+" },
    { label: "IT Professionals", value: "200+" },
    { label: "Countries With Active Customers", value: "20+" },
    { label: "Completed Projects", value: "1500+" },
    { label: "Global Presence", value: "5 Offices" },
    { label: "Customer Retention", value: "90%" },
    { label: "Industries Served", value: "25+" },
  ];

  const features = [
    { title: "Peerless Experience and a Legacy of Innovation", icon: "💡" },
    { title: "Expertise Across Diverse Domains", icon: "🌐" },
    { title: "In-Depth Functional Knowledge", icon: "📊" },
    { title: "Excellent Standards & Assured Quality", icon: "🏆" },
    { title: "A Team of Skilled Visionaries", icon: "👥" },
    { title: "Flexible Engagement Models", icon: "🤝" },
    { title: "Commitment to Security", icon: "🔒" },
    { title: "Cutting-Edge Development Centers", icon: "🚀" },
    { title: "Milestone-Driven Methodology", icon: "📍" },
  ];
  const points = [
    "Innovative Software Development Services",
    "Tailored Solutions",
    "Your Success is our Goal",
    "Domain Knowledge & Resources",
    "Adapt Changing Market Opportunities",
    "Security is our Top Priority",
    "Seamless & Highly Dependable Software",
    "Transparency & Commitment",
    "Strong Values & Work Ethics"
  ];

  return (
    
    <div className="about-container">
      <header className="navbar">
  <div className="logo">TechNova</div>

  {/* Hamburger */}
  <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
    <span className={menuOpen ? "bar open" : "bar"}></span>
    <span className={menuOpen ? "bar open" : "bar"}></span>
    <span className={menuOpen ? "bar open" : "bar"}></span>
  </div>

  <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
    <Link to="/">Home</Link>
    <Link to="/aboutpage">About</Link>
    <Link to="/SolutionPage">Solutions</Link>
    <Link to="/ContactPage">Contact</Link>

    {/* Mobile Button */}
  
  </nav>

  {/* Desktop Button */}
  <div className="auth desktop-auth">
    <Link className="get-started-btn" to="/ContactPage">
      Get Started
    </Link>
  </div>
</header>

        <section className="hero-banner">
      <div className="hero-overlay">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="line-decorator"></span>
              Transforming lives
            </h1>
            <h2 className="hero-subtitle">Through Our Innovative Technology</h2>
            <p className="hero-description">
              We create exceptional digital experiences with bold ideas that enhance the 
              world for everyone.
            </p>
            <button className="hero-cta">
              Let's Discuss Your Project &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
      {/* 1. Stats Section */}
      <section className="stats-section">
        <h2 className="section-title">Continuous Innovation – Result Driven Journey</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Features Section */}
      <section className="features-section">
        <h2 className="section-title">What Sets Technova Apart?</h2>
        <p className="section-subtitle">
          As one of the most sought-after software development companies in India, we climb above the norms 
          and define excellence with our unique features.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <p className="feature-title">{feature.title}</p>
            </div>
          ))}
        </div>
      </section>
      {/* 3. Call to Action Section */
      <section className="advantages-section">
      <div className="advantages-container">
        
        {/* Left Side: Content */}
        <div className="advantages-content">
          <h2 className="advantages-title">
            Advantages Of Collaborating With BrainerHub To Scale Your Business
          </h2>
          <ul className="advantages-list">
            {points.map((point, index) => (
              <li key={index} className="advantage-item">
                <span className="red-dot"></span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Clipped Image */}
        <div className="advantages-image-wrapper">
          <div className="clipped-mask">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
              alt="Professional working" 
              className="clipped-img"
            />
          </div>
        </div>

      </div>
    </section>}
    </div>
  );
};

export default AboutPage;