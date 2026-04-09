import React from 'react';
import './ContactPage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  
    <div className="contact-page">
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
      {/* Top Banner */}
      <div className="contact-banner">
        <div className="banner-text">
          <h2><span className="accent">|</span> Let's Talk.</h2>
          <p>Feel free to contact us any time. We will get back to you as soon as we can!</p>
          <div className="contact-info">
            <p>📧 sales@Technova.com</p>
            <p>📞 +91 76001 54545</p>
          </div>
        </div>
        <div className="banner-large-title">
          <h1>Contact Us</h1>
          <p>📧 sales@Technova.com</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="contact-container">
        {/* Left Column: Form */}
        <div className="contact-form-card">
          <p className="form-note">Note: For guest posting, marketing collaboration and related inquiries, contact us at <span>marketing@Technova.com</span></p>
          <form>
            <input type="text" placeholder="Your name *" required />
            <input type="email" placeholder="Email ID *" required />
            <div className="phone-input">
              <select><option>+91</option></select>
              <input type="text" placeholder="Mobile Number *" />
            </div>
            <select><option>Interested Service *</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>UI/UX Design</option>
            </select>
            <select><option>Project Budget</option>
            <option>Less than ₹50,000</option>
            <option>₹50,000 - ₹1,00,000</option>
            <option>More than ₹1,00,000</option>
            </select>
            <select><option>Project Type *</option>
            <option>New Project</option>
            <option>Existing Project</option>
            </select>
            <textarea placeholder="Tell us more about your project *"></textarea>
            
            <div className="file-upload">
              <input type="file" />
              <span>Allow only .jpg, .png, .pdf (max 5MB)</span>
            </div>

            <div className="form-buttons">
              <button type="button" className="btn-orange-outline">SCHEDULE A CALL</button>
              <button type="submit" className="btn-orange">SUBMIT</button>
            </div>
          </form>
        </div>

        {/* Right Column: Address/Maps */}
        <div className="contact-address-card">
          <div className="location-item">
            <div className="map-placeholder"><img src="https://tse3.mm.bing.net/th/id/OIP.onchxYBLpcLnRTkpwsCKrgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" /></div>
            <div className="address-text">
              <h3>Sales Office</h3>
              <p>📍 Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae quisquam placeat! Suscipit, eum deleniti pariatur velit numquam quas natus.</p>
            </div>
          </div>
          <div className="location-item">
            <div className="map-placeholder"><img src="https://tse1.mm.bing.net/th/id/OIP.blapo2vguqMzszgQ7dNCRgHaJQ?w=864&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" /></div>
            <div className="address-text">
              <h3>Development Centre</h3>
              <p>📍 Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae quisquam placeat! Suscipit, eum deleniti pariatur velit numquam quas natus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;