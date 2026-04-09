import React, { useState } from "react";
import "./ServicesTech.css";

const techData = {
  Frontend: [
    { name: "AngularJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "React JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vue.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
 ],

  Backend: [
    { name: "Node.js", img: "https://www.brainerhub.com/wp-content/uploads/2023/09/Nodejs-icon.png" },
    { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Django", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Spring", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Laravel", img: "https://www.brainerhub.com/wp-content/uploads/2023/09/Laravel-icon.png" },
    { name: "ASP.NET", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
    { name: "Ruby on Rails", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" },
  ],

  Mobile: [
    { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Swift", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
    { name: "Kotlin", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Ionic", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
  ],

  Database: [
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Redis", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  ],

  Cloud: [
    { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Azure", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Google Cloud", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  ],

  DevOps: [
    { name: "Jenkins", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "GitHub Actions", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "GitLab CI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
    { name: "Terraform", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  ],

  CMS: [
    { name: "WordPress", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    { name: "Strapi", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/strapi/strapi-original.svg" },
    { name: "Contentful", img: "https://cdn.worldvectorlogo.com/logos/contentful.svg" },
  ],

  Ecommerce: [
    { name: "Shopify", img: "https://www.brainerhub.com/wp-content/uploads/2023/09/Shopify.png" },
    { name: "Magento", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" },
    { name: "WooCommerce", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
  ],
};

const tabs = Object.keys(techData);

const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className="tech-section">
      <div className="container">
        <h2>Technologies And Platforms We Use</h2>

        {/* Tabs */}
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "tab active" : "tab"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tech Cards */}
        <div className="tech-grid">
          {techData[activeTab].map((tech, index) => (
            <div key={index} className="tech-card">
              <img src={tech.img} alt={tech.name} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>

        <button className="cta-btn">
          Tell Us About Your Project →
        </button>
      </div>
    </section>
  );
};

export default TechnologySection;