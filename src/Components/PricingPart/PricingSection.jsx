import React from 'react';
import './PricingSection.css';
import { Link } from 'react-router-dom';

const pricingData = [
  {
    category: "Web Development",
    price: "From $2,500",
    features: ["React / Next.js", "Responsive UI/UX", "SEO Optimization", "Admin Dashboard"],
    tag: "Most Popular"
  },
  {
    category: "Mobile Dev",
    price: "From $4,000",
    features: ["iOS & Android (React Native)", "App Store Submission", "Push Notifications", "Cloud Integration"],
    tag: null
  },
  {
    category: "AI / ML",
    price: "From $6,000",
    features: ["LLM Integration", "Predictive Analytics", "Computer Vision", "Custom Model Training"],
    tag: "High Demand"
  },
  {
    category: "Blockchain",
    price: "From $8,000",
    features: ["Smart Contracts (Solidity)", "DApp Development", "Wallet Integration", "Tokenomics Design"],
    tag: null
  }
];

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2>Transparent Pricing for Every Tech Stack</h2>
        <p>Choose the model that fits your project goals. We deliver high-quality code across modern frameworks.</p>
      </div>

      <div className="pricing-grid">
        {pricingData.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.tag ? 'featured' : ''}`}>
            {plan.tag && <span className="badge">{plan.tag}</span>}
            <h3 className="category-name">{plan.category}</h3>
            <div className="price-amount">{plan.price}</div>
            <ul className="feature-list">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <Link className="pricing-btn" to="/ContactPage">
              Get Started &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;