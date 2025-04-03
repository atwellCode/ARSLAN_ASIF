import React from "react";
import heroImage from "../../assets/hero.jpg";

const PortfolioHero = () => {
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
    paddingLeft: "5%", // Adjust as needed to move text from left edge
  };

  const headingStyle = {
    background: "linear-gradient(135deg, rgba(0, 255, 170, 0.9), rgba(0, 132, 255, 0.9))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textTransform: "uppercase",
    fontSize: "2.5rem",
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
        <p style={headingStyle}>PORrfolio</p>
        <p style={subHeadingStyle}>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, alias?
        </p>
      </div>
    </section>
  );
};

export default PortfolioHero;
