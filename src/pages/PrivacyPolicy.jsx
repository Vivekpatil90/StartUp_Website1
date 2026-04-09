import React from 'react';
import './PrivacyPolicy.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PrivacyPolicy = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="privacy-page">
           <header className="navbar">
  <div className="logo">TechNova</div>

  {/* Hamburger */}
  <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
    <span className={menuOpen ? "bar open" : "bar"}></span>
    <span className={menuOpen ? "bar open" : "bar"}></span>
    <span className={menuOpen ? "bar open" : "bar"}></span>
  </div>

  <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
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
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container hero-flex">
          <div className="hero-text">
            <h1>Privacy Policy</h1>
            <p>
              At BrainerHub, we prioritize the privacy of our visitors and have implemented the 
              policy outline mentioned below. The policy explains the procedure associated 
              with gathering information both personal and non-personal, uses, along with 
              distribution. We request you to take a moment and go through the policy for 
              better understanding.
            </p>
          </div>
          <div className="hero-image">
            {/* You can use an SVG or Image here to match the illustration */}
            <img src="https://www.brainerhub.com/wp-content/uploads/2023/08/privacy-policy.png" alt="Privacy Security Illustration" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content container">
        <div className="policy-block">
          <h2>Data Collection and Sharing</h2>
          <p>
            Initially, we gather personal and non-personal information of our visitors when they browse our website...
            (truncated for brevity, paste full text here)
          </p>
          <p>
            When you willing choose to participate in our website as an interested party, we will request you to provide 
            personal information such as name, mail ID, organization's name...
          </p>
        </div>

        <div className="policy-block">
          <h2>Consent Terms</h2>
          <p>On account of providing your personal information to the website, you implicitly agree to the collecting and processing of that information in India and/or any other countries, as well as to its full understanding and agreement.</p>
        </div>

        <div className="policy-block">
          <h2>Children's Privacy</h2>
          <p>At BrainerHub, we do not intentionally gather or save any information from children under the age of 15.</p>
        </div>

        <div className="policy-block">
          <h2>Public Discussion Boards</h2>
          <p>Our website may include interactive forums like message boards or chat rooms. Please note that any information disclosed in such forums is deemed to be public information.</p>
        </div>

        <div className="policy-block">
          <h2>Disclaimer of Law</h2>
          <p>When it becomes necessary to comply with legal obligations or the legal process served on the website, your personal information may release as required by law or with good intents...</p>
        </div>

        <div className="policy-block">
          <h2>Security Measures</h2>
          <p>Our top priority is to protect all personal and non-personal data of our clients and visitors. For maintaining safety, we connect with secure communication channels...</p>
        </div>

        <div className="policy-block">
          <h2>Change of Ownership</h2>
          <p>The data collected on the website is a BrainerHub asset, will be handled and transferred appropriately in the case of sale or change of ownership.</p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;