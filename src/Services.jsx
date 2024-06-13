import React from 'react';

const Services = () => {
  const services = [
    { title: "Web Devlopment", description: "I specialize in frontend development using HTML, CSS, JavaScript, React, Tailwind CSS, and React+Vite. I create responsive and interactive websites that deliver an excellent user experience.", imgSrc: "/7365.jpg" },
    { title: "Graphic Designer", description: "With expertise in Figma, prototyping, logo design, and poster design, I craft visually appealing and user-friendly interfaces. I focus on creating designs that are both functional and aesthetically pleasing.", imgSrc: "/2951471.jpg" },
    { title: "Social Media Marketikg", description: "I help businesses grow their online presence through strategic social media marketing. My services include content creation, campaign management, and audience engagement", imgSrc: "/Socialmedia.jpg" },
    { title: "SEO", description: "I improve website visibility and search engine rankings through effective SEO strategies. My approach includes keyword research, on-page optimization, and link building.", imgSrc: "./seo-concept-illustration_24908-61507.jpg" },
    
  ];

  return (
    <div className="services-section">
      <h2 className="services-heading">Services</h2>
      <div className="services">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <div className="image-container">
              <img src={service.imgSrc} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button type="primary">see more</button>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Services;

