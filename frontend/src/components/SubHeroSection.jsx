import React from "react";
import heroImage from "../assets/hero.jpg";

const SubHeroSection = ({ title = "Default Title", description = "Default Description" }) => {
  const HeroSection = {
    position: "relative",
    backgroundImage: `linear-gradient(135deg, rgba(4, 26, 59, 0.7), rgba(4, 26, 59, 0.7)), url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "40vh",
    width: "100%",
    display: "flex",
    alignItems: "center", // Centers vertically
    paddingLeft: "5%", // Adjust as needed
  };

  const headingStyle = {
    background: "linear-gradient(135deg, rgba(0, 255, 170, 0.9), rgba(0, 132, 255, 0.9))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textTransform: "uppercase",
    fontSize: "3rem",
    fontWeight: "bold",
  };

  const subHeadingStyle = {
    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontWeight: "400",
    textShadow: "0 0 20px rgba(255, 255, 255, 0.6)",
    color: "#fff",
    margin: "0%",
  };

  return (
    <section style={HeroSection}>
      <div>
        <p style={headingStyle}>{title}</p>
        <p style={subHeadingStyle}>{description}</p>
      </div>
    </section>
  );
};

export default SubHeroSection;
