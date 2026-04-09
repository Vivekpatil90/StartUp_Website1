import React from "react";
import "./ServiceSection.css";

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="container">

        <div className="heading">
          <h1>Our Software Development Services</h1>
          <p>
            We turn your ideas into powerful digital solutions with cutting-edge technologies.
          </p>
        </div>

        <div className="grid">

          {/* Web Development */}
          <div className="card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <h3>Custom Web Development</h3>
            <p>
             We create modern, responsive, and high-performing websites tailored to your business needs. Our web development solutions focus on user experience, speed, and scalability using the latest technologies. Whether it's a startup landing page or a complex web application, we deliver secure and engaging digital experiences.
            </p>
          </div>

          {/* Mobile */}
          <div className="card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"alt="Flutter" />
            <h3>Mobile Apps</h3>
            <p>
              Our mobile development services focus on building intuitive, fast, and feature-rich applications for both Android and iOS platforms. We design apps that deliver seamless performance and engaging user experiences. From idea to launch, we help you turn your vision into powerful mobile solutions.
            </p>
          </div>

          {/* UI/UX */}
          <div className="card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
            <h3>UI/UX Design</h3>
            <p>
  We design user-centric interfaces that are visually appealing and easy to use. Our UI/UX approach focuses on understanding user behavior to create intuitive and engaging experiences. By combining creativity with usability, we ensure your product not only looks great but also delivers real value to users.
            </p>
          </div>

          {/* Blockchain */}
          <div className="card">
            <img src="https://www.brainerhub.com/wp-content/uploads/2024/05/Blockchain-Service.png" alt="Blockchain" />
            <h3>Blockchain Service</h3>
            <p>
              Blockchain technology enables secure, transparent, and decentralized solutions for modern businesses. We build scalable blockchain applications that enhance trust, streamline transactions, and eliminate intermediaries. From smart contracts to decentralized apps (dApps), our solutions help you create secure and future-ready digital ecosystems.
            </p>
          </div>

          {/* AI / ML */}
          <div className="card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="AI" />
            <h3>Machine Learning</h3>
            <p>
              Artificial Intelligence (AI) and Machine Learning (ML) are transforming the way businesses operate by enabling smarter, faster, and more data-driven decisions. At our startup, we leverage advanced AI/ML technologies to build intelligent systems that can learn, adapt, and improve over time. From predictive analytics and natural language processing to computer vision and automation, our solutions help businesses uncover valuable insights, enhance customer experiences, and streamline operations.
            </p>
          </div>

          {/* DevOps */}
          <div className="card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="DevOps" />
            <h3>DevOps</h3>
            <p>
              DevOps bridges the gap between development and operations to deliver faster and more reliable software. We implement automated workflows, continuous integration, and continuous deployment (CI/CD) pipelines to improve efficiency and reduce time-to-market. Our DevOps solutions ensure scalability, stability, and seamless collaboration.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;