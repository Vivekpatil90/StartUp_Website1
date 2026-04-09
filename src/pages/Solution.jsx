import React from 'react';
import './Solution.css';

const FlagshipProducts = () => {
  const products = [
    {
      id: 1,
      title: "Project Management Software",
      description: "Project management software helps teams plan, track, and manage tasks, timelines, and collaboration across projects. It provides tools like task assignment, progress tracking, Gantt charts, file sharing, and communication features.",
      image: "https://www.brainerhub.com/wp-content/uploads/2025/08/PMS-7.png", // Replace with your laptop mockup image
      icon: "📊"
    },
    {
      id: 2,
      title: "Real Estate App",
      description: "Looking to buy, rent, or sell a property? Our easy-to-use real estate app makes it simple. Browse a wide range of homes—from cozy apartments to luxury estates—with smart search filters and beautiful photos.",
      image: "https://www.brainerhub.com/wp-content/uploads/2025/08/RI-4.png", // Replace with your laptop mockup image
      icon: "🏠"
    }
  ];

  return (
    <section className="products-section">
        <section className="hero-container">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-header">
            <div className="accent-line"></div>
            <h1>
              Innovative<br />
              <span>Business Solutions</span>
            </h1>
          </div>
          
          <p className="hero-description">
            BrainerHub is a prominent developer of creative business software solutions 
            that are meticulously crafted to address the unique challenges faced by 
            diverse industries. Our bespoke solutions are designed to address specific 
            pain points, providing organizations with cutting-edge technology to 
            streamline processes, improve productivity, and generate long-term 
            success. At BrainerHub, we collaborate with our customers to create 
            bespoke, scalable, and future-ready software that brings their vision to life.
          </p>

          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </section>
      <div className="section-header">
        <h2>Our Flagship Products</h2>
      </div>

      <div className="products-container">
        {products.map((product, index) => (
          <div key={product.id} className={`product-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
            {/* Text Side */}
            <div className="product-text">
              <div className="product-icon">{product.icon}</div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-desc">{product.description}</p>
              <button className="inquiry-btn">Inquiry Now</button>
            </div>

            {/* Image Side */}
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlagshipProducts;