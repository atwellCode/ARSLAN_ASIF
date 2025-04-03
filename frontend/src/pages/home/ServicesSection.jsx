import React, { useState } from "react";
import { FaPencilRuler, FaCode, FaPalette } from "react-icons/fa";
import HeadingText from "../../components/HeadingText";

const ServicesSection = () => {
  const [hovered, setHovered] = useState(null);

  const sectionStyle = {
    background: "#313741",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
  };

  const cardContainerStyle = {
    display: "grid",
    gap: "20px",
    width: "90%",
    maxWidth: "1200px",
    margin: "auto",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  };

  const cardStyle = {
    background: "#222831",
    padding: "1.1rem",
    textAlign: "center",
    borderRadius: "10px",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  };

  const cardHoverStyle = {
    transform: "scale(1.05) translateY(1rem)",
    boxShadow: "0 0 20px rgba(0, 255, 170, 0.8)",
  };

  const iconWrapperStyle = {
    width: "4rem",
    height: "4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    background: "linear-gradient(135deg, rgba(0, 255, 170, 1), rgba(0, 132, 255, 1))",
    boxShadow: "0 0 10px rgba(0, 255, 170, 0.6)",
    margin: "auto",
    marginBottom: "10px",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  };

  const iconHoverStyle = {
    transform: "scale(1.1)",
    boxShadow: "0 0 25px rgba(0, 132, 255, 0.9)",
  };

  const iconStyle = {
    fontSize: "2rem",
    color: "#fff",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "500",
    color: "rgb(0, 132, 255)",
  };

  const listStyle = {
    listStyle: "none",
    textAlign: "left",
    fontSize: "0.9rem",
    color: "#ddd",
    marginTop: "0.8rem",
    padding:"0.5rem"
  };

  const services = [
    {
      id: 1,
      title: "Graphic Design",
      icon: <FaPalette style={iconStyle} />,
      details: [
        "Logo Design",
        "Social Media Posts",
        "Photo Editing",
        "Stories & Banners",
        "Brochures & Flyers",
        "Flex & Bill Boards ",
      ],
    },
    {
      id: 2,
      title: "Web Development",
      icon: <FaCode style={iconStyle} />,
      details: [
        "PHP Websites",
        "MERN Stack Development",
        "MEAN Stack Development",
        "WordPress Websites",
        "Shopify Stores",
        "Domain & Hosting Setup",
      ],
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: <FaPencilRuler style={iconStyle} />,
      details: [
        "User Interface (UI) Design",
        "User Experience (UX) Research",
        "Wireframing & Prototyping",
        "Mobile & Web App Design",
        "Customize & Innovative Design",
        "Accessibility & Usability Testing",
      ],
    },
  ];

  return (
    <section style={sectionStyle}>
      <HeadingText header="Services" subHeader="A Passionate Developer & Designer Dedicated to Excellence." />
     
      <div style={cardContainerStyle}>
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              ...cardStyle,
              ...(hovered === service.id ? cardHoverStyle : {}),
            }}
            onMouseEnter={() => setHovered(service.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              style={{
                ...iconWrapperStyle,
                ...(hovered === service.id ? iconHoverStyle : {}),
              }}
            >
              {service.icon}
            </div>
            <h3 style={titleStyle}>{service.title}</h3>
            <ul style={listStyle}>
              {service.details.map((item, index) => (
                <li key={index}>✅ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
