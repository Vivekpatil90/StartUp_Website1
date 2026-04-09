import React from 'react';
import './TermsAndConditions.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const TermsAndConditions = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  return (
    <div className="terms-page">
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
      {/* Hero Header */}
      <section className="terms-hero">
        <div className="container hero-flex">
          <div className="hero-text">
            <h1>Terms & Conditions</h1>
            <p className="welcome-text">Welcome to BrainerHub Solution's Website</p>
            <p>
              You may only use this website and the information shared on it if you agree to the 
              terms of use and privacy policy published by BrainerHub Solutions. If you are 
              browsing the website for any information or services, we will imply that you 
              understand and accept the Terms & conditions displayed on the website.
            </p>
            <p>Please avoid using our website, services, or information in the event of a dispute.</p>
            <p>We can change our Terms & Conditions policy without any prior notification.</p>
          </div>
          <div className="hero-image">
             {/* Replace with your specific Terms illustration */}
            <img src="https://www.brainerhub.com/wp-content/uploads/2023/08/term-and-condition-768x768.png" alt="Terms and Conditions Illustration" />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="container terms-main">
        
        <section className="terms-section">
          <h2>Information on Using Intellectual Property and Copyright</h2>
          <p>
            To begin with, intellectual property laws such as copyright, trademark, patent, and other 
            aspects safeguard BrainerHub Solutions' materials. This also includes text, graphics, logos, 
            and trademarks published on the website...
          </p>
        </section>

        <section className="terms-section">
          <h2>Making Use of the Website</h2>
          <p>
            You agree to comply with and be bound by the terms and conditions listed about the website usage. 
            You consent not to use any of the text, images, graphics, audio, video or other content on this 
            website for public or profit-making purposes...
          </p>
        </section>

        <section className="terms-section">
          <h2>How are Software Services Utilised</h2>
          <p>
            The website offers goods and services "as is" and "as available". At BrainerHub Solutions, 
            we provide legally binding contract that governs the provision of software services...
          </p>
        </section>

        <section className="terms-section">
          <h2>Notification of Services</h2>
          <p>
            The information and content on this website are only offered "as is" and "as available". 
            BrainerHub Solutions hereby expressly disclaims any guarantees, whether express or implied...
          </p>
        </section>

        <section className="terms-section">
          <h2>Policy for Personal Information Safety</h2>
          <p>
            We at BrainerHub Solutions protect personal information and follow ethical business morals. 
            Please read our privacy policy carefully for complete information and understanding.
          </p>
        </section>

        <section className="terms-section">
          <h2>Disclaimer</h2>
          <p>
            The website's content has been complied from reliable sources. It may consist of technical 
            or other errors, inaccuracies, or typographical mistakes. BrainerHub Solutions disclaims 
            all responsibility for the accuracy, comprehensiveness, or adequacy of the information provided.
          </p>
        </section>

      </main>
    </div>
  );
};

export default TermsAndConditions;