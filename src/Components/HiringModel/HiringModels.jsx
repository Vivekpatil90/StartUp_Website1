import React, { useState } from 'react';
import './HiringModels.css';

const HiringModels = () => {
  const [activeTab, setActiveTab] = useState('dedicated');

  const content = {
    dedicated: [
      {
        title: "Hire Dedicated Team",
        items: ["Expertise You Can Trust", "Tailored Solutions, Every Time", "Your Success Is Our Priority"],
        colorClass: "blue-text"
      },
      {
        title: "Project Development",
        items: ["Turning Ideas into Reality", "Seamless Project Progression", "Innovative Project Solutions"],
        colorClass: "red-text"
      },
      {
        title: "Project Delivery",
        items: ["On-Time Project Delivery", "Uncompromising Quality Assurance", "Client-Driven Project Success"],
        colorClass: "red-text"
      }
    ],
    fixed: [
      {
        title: "Fixed Price Model",
        items: ["Defined Budget & Scope", "Low Risk Environment", "Clear Milestones"],
        colorClass: "blue-text"
      },
      {
        title: "Optimized Workflow",
        items: ["Structured Planning", "Strict Deadlines", "Predictable Outcomes"],
        colorClass: "red-text"
      },
      {
        title: "Final Handoff",
        items: ["Complete Documentation", "Smooth Transition", "Post-Launch Support"],
        colorClass: "red-text"
      }
    ]
  };

  return (
    <section className="hiring-section">
      <div className="hiring-header">
        <h1>Business Friendly Hiring Models</h1>
        <p>
          We are the most consumer-centric software development company that focuses on providing budget-friendly 
          models that will pave the way for efficient talent acquisition, seamless integration and streamlined growth.
        </p>
      </div>

      <div className="tabs-container">
        <div className="tabs-header">
          <button 
            className={`tab-btn ${activeTab === 'dedicated' ? 'active' : ''}`}
            onClick={() => setActiveTab('dedicated')}
          >
            Dedicated Team
          </button>
          <button 
            className={`tab-btn ${activeTab === 'fixed' ? 'active' : ''}`}
            onClick={() => setActiveTab('fixed')}
          >
            Fixed Price Model
          </button>
        </div>

        <div className="tab-content">
          {content[activeTab].map((card, index) => (
            <div key={index} className="info-card">
              <h3 className={card.colorClass}>{card.title}</h3>
              <ul>
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringModels;