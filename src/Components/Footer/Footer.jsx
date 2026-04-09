import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Services Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            <li><Link to="/">Web Development</Link></li>
            <li><Link to="/">Hire Software Developers</Link></li>
            <li><Link to="/">UI/UX Development</Link></li>
            <li><Link to="/">DevOps Services</Link></li>
            <li><Link to="/">AI & ML Services</Link></li>
          </ul>
        </div>

        {/* Contact/Location Column */}
        <div className="footer-column">
          <h3 className="footer-heading">India</h3>
          <p className="address-text">
            J-405/406, 4th Floor, DLF Galleria, DLF Phase 4, Gurugram, Haryana 122002
          </p>

          <h3 className="footer-heading mt-30">Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon-box red-bg">✉</span>
              <a href="mailto:sales@Technova.com">sales@Technova.com</a>
            </div>
            <div className="contact-item">
              <span className="icon-box red-bg">✉</span>
              <a href="mailto:marketing@Technova.com">marketing@Technova.com</a>
            </div>
            <div className="contact-item">
              <span className="icon-box red-text phone-icon">📞</span>
              <a href="tel:+917600195293">+917600195293</a>
            </div>
          </div>

          <h3 className="footer-heading mt-30">Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">G</a>
            <a href="#" className="social-icon">in</a>
            <a href="#" className="social-icon">ig</a>
            <a href="#" className="social-icon">yt</a>
            <a href="#" className="social-icon">gh</a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/SolutionPage">Portfolio</Link></li>
            <li><Link to="/aboutpage">About Us</Link></li>
            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
            <li><Link to="/TermsAndConditions">Terms & Conditions</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;