import React from "react";
import "./WhyTechNova.css";

const features = [
  {
    title: "Assertive Communication",
    desc: "At TechNova, we prioritize clear and proactive communication to ensure your vision is understood and executed effectively.",
    icon: "💬",
  },
  {
    title: "Scalable Teams",
    desc: "We provide adaptable development teams that scale with your project needs, ensuring seamless growth and flexibility.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Efficient Project Management",
    desc: "Using Agile and DevOps, our project managers ensure timely delivery, optimized workflows, and efficient resource usage.",
    icon: "⚙️",
  },
  {
    title: "Positive Experience",
    desc: "TechNova delivers excellence with years of experience, ensuring innovative and high-quality solutions for every client.",
    icon: "⭐",
  },
];

const WhyTechNova = () => {
  return (
    <section className="why-technova">
      <div className="container">
        <h2>
          Why Choose <span>TechNova</span> Solutions For Software Development
          Services?
        </h2>

        <div className="card-grid">
          {features.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTechNova;