import React from "react";
import "./WhyChoose.css";

const WhyChoose = () => {
  return (
    <section className="why-section">
      <div className="container why-container">
        
        {/* Left Image */}
        <div className="why-image">
          <div className="blob">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="team"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="why-content">
          <h2>Why Choose Outsourcing Software Development Services?</h2>

          <p>
            The best way to optimize your company’s productivity is to opt for
            software outsourcing services. You will have trusted expertise
            without compromising on your budget criteria.
          </p>

          <p>
            Software outsourcing is a wise decision when you are planning to
            work on a defined project and want to hire a leading software
            development company.
          </p>

          <ul>
            <li>Reduce Expenses Up To 60% Without Compromising On Quality</li>
            <li>Work With Reputed Software Development Companies</li>
            <li>Access To Global Talent Pool Of Developers</li>
            <li>Faster Delivery And Market Adaptability</li>
            <li>Focus On Core Business Operations</li>
          </ul>

          <p>
            Our approach empowers businesses to focus on core competencies,
            improve product development, and achieve market goals efficiently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;