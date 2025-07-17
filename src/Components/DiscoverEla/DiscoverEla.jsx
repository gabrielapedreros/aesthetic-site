import React, { useState } from 'react';
import './DiscoverEla.css';

//display ela&ela services in an organized, simple to follow manner
//layout: title of service, examples of the service, short description

//initialize variables
const services = [
  {
    title: "Made by Hand",
    subcategories: ["Jewelry","Clayworks", "Accessories"],
    details: "Crafted with love.",
  },
  {
    title: "Artistry of Being",
    subcategories: ["Sound","Energy","Movement",],
    details: "Connecting to the soul.",
  },
  {
    title: "Enhance Essence",
    subcategories: ["Styling", "Adornments"],
    details: "Decorate your vessel.",
  },
  {
    title: "Social Alchemy",
    subcategories: ["Aura in Motion"],
    details: "Our presence organically adds value to spaces.",
  }
];

const categories = [
  { name: "Made by Hand", key: "madeByHand" },
  { name: "Artistry of Being", key: "alchemyOfBeing" },
  { name: "Enhance Essence", key: "livingArtistry" },
  { name: "Social Alchemy", key: "aestheticElevation" },
];

const galleryImages = {
  //example of demonstrating images of services, using a different number of pictures in each section
  madeByHand: ["/images/ph.jpg","/images/ph.jpg"],
  alchemyOfBeing: ["/images/bph.jpg","/images/bph.jpg","/images/bph.jpg","/images/bph.jpg"],
  livingArtistry: ["/images/sph.jpeg"],
  aestheticElevation: ["/images/sbph.jpg","/images/sbph.jpg","/images/sbph.jpg"],
};

const DiscoverEla = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("madeByHand");
  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);

  };

//return variables
  return (
    <section className="services section" id="services">
      <h2 className="section_title">Ela & Ela</h2>
      <span className="section_subtitle">What You Need Will Find You</span>

      <div className="service_container container grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="services_content" 
            onClick={() => toggleDetails(index)}
          ><section className="service-title-subcat">
            <h3 className="services_title">{service.title}</h3>
            <ul className="services_subcategories">
              {service.subcategories.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            </section>

            
            {activeIndex === index && (
              <div className="services_details">
                <p className="services_details-text">{service.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="tab_container">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`tab_button ${selectedCategory === category.key ? "active" : ""}`}
            onClick={() => setSelectedCategory(category.key)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* gallery Section */}
      <div className="gallery_container">
        {galleryImages[selectedCategory].map((image, index) => (
          <div key={index} className="gallery_item">
            <img src={image} alt={selectedCategory} className="gallery_image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverEla;
