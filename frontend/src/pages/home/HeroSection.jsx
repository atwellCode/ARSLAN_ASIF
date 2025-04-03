import React from "react";
import Typewriter from "typewriter-effect";
import heroImage from "../../assets/hero.jpg";
import TransBtn from "../../components/TransBtn";
import BlackBtn from "../../components/BlackBtn";

const HeroSection = () => {
  return (
    <section style={styles.heroSection}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.hello}>Hello!</h1>
        <h1 style={styles.name}>
          <span style={styles.im}>I'm</span> <span className="display-2" style={styles.highlight}>Arslan Asif</span>
        </h1>
        <h2 style={styles.subtitle}>
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "Graphic Designer",
                "MERN Stack Developer",
                "UI/UX Developer",
                "Web Designer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
            }}
          />
        </h2>
        <div style={styles.buttons}>
          <BlackBtn text="Explore Portfolio" link="/portfolio" />
          <TransBtn text="Contact Me" link="/contact" />
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    position: "relative",
    width: "100%",
    height: "100vh",
    background: `linear-gradient(135deg, rgba(0, 255, 170, 0.8), rgba(0, 132, 255, 0.8)), url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    position: "relative",
    zIndex: 1,
    color: "#fff",
    maxWidth: "90%",
    textAlign: "center",
  },
  hello: {
    fontSize: "6rem",
    fontWeight: "300",
    fontStyle: "italic",
    color: "#ccc",
    marginBottom: "10px",
  },
  name: {
    fontSize: "2rem",
    fontWeight: "400",
    marginBottom: "20px",
  },
  im: {
    color: "#bbb",
    fontWeight: "300",
  },
  highlight: {
    color: "#00FFAA",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    color: "#ddd",
  },
  buttons: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  "@media (max-width: 768px)": {
    hello: {
      fontSize: "3.5rem",
      marginBottom: "5px",
    },
    name: {
      fontSize: "3rem",
    },
    subtitle: {
      fontSize: "1.2rem",
    },
  },
  "@media (max-width: 480px)": {
    hello: {
      fontSize: "3rem",
    },
    name: {
      fontSize: "2.5rem",
    },
    subtitle: {
      fontSize: "1rem",
    },
  },
};

export default HeroSection;
