import React, { useState } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="landing-container">
      {/* NAVBAR */}
      <header className="navbar">
  <div className="logo">TechNova</div>

  {/* Hamburger */}
  <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
    <span className={menuOpen ? "bar open" : "bar"}></span>
    <span className={menuOpen ? "bar open" : "bar"}></span>
    <span className={menuOpen ? "bar open" : "bar"}></span>
  </div>

 <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
  <Link to="/aboutpage">About Us</Link>
  <Link to="/SolutionPage">Solutions</Link>
  <Link to="/ContactPage">Contact</Link>
</nav>

  <div className="auth desktop-auth">
    <Link className="get-started-btn" to="/ContactPage">
      Get Started
    </Link>
  </div>
</header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
              <span className="gradient-text">
                
            Engineering digital products
 <br />
        that scale businesses globally </span>
          
          <p>
     Create tech-advanced, future-proof, and scalable digital solutions with a leading software development company in India.

Delivering software solutions to build intelligent enterprises with speed and agility.
          </p>
         <div className="ctadiv">
           <Link className="cta" to="/ContactPage">
            Start Project →
          </Link>
         </div>
        </div>

        {/* ORBITAL VISUAL */}
        <div className="hero-visual">
          <div className="orbit orbit1">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="angular" />
          </div>

          <div className="orbit orbit2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongodb" />
          </div>

          <div className="orbit orbit3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="docker" />
          </div>

          <div className="center-text">
            <h2>Trendy</h2>
            <p>Technology</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;