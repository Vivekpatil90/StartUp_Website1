import React, { useState } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    id: 1,
    name: "Sparrow",
    company: "Conserv",
    text: "The platform has received positive feedback for its simplicity and intuitive design. BrainerHub recommended features that weren’t on our product roadmap, but they’ve become an imperative part of our product.",
    image: "https://www.brainerhub.com/wp-content/uploads/2024/06/Customer-Reviews-BrainerHub-Solutions-926x1024.jpg", // Replace with your image
    avatar: "https://images.pexels.com/photos/28114093/pexels-photo-28114093.jpeg"
  },
  {
    id: 2,
    name: "Alex Chen",
    company: "TechFlow",
    text: "The development team exceeded our expectations. The new interface is not only beautiful but significantly faster. Our user engagement has increased by 40% since the launch.",
    image:"https://www.brainerhub.com/wp-content/uploads/2024/06/Indian-Outsourcing-Software-Development-Company.png",
    avatar: "https://images.pexels.com/photos/5088238/pexels-photo-5088238.jpeg"
  }
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        
        {/* Left Side: Image Container */}
        <div className="testimonial-image-wrapper">
          <div className="image-mask">
            <img 
              src={testimonials[index].image} 
              alt="Client" 
              className="main-img"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="testimonial-content">
          <h2 className="testimonial-title">Clients Testimonials</h2>
          
          <div className="testimonial-body">
            <p className="testimonial-text">
              {testimonials[index].text}
            </p>
            
            <div className="client-info">
              <img 
                src={testimonials[index].avatar} 
                alt={testimonials[index].name}
                className="client-avatar"
              />
              <div className="client-details">
                <h4 className="client-name">{testimonials[index].name}</h4>
                <p className="client-company">{testimonials[index].company}</p>
              </div>
            </div>
          </div>

          <div className="slider-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`dot ${index === i ? 'active' : ''}`}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="cta-wrapper">
            <button className="cta-button">
              Tell Us About Your Project &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;