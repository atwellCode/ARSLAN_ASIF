import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaSchool, FaLaptopCode, FaPalette } from "react-icons/fa";
import HeadingText from "../../components/HeadingText";

const EduExperience = () => {
  const styles = {
    section: {
      width: "100%",
      backgroundColor: "#313741",
      padding: "50px 20px",
      textAlign: "center",
    },
    container: {
      maxWidth: "1100px",
      margin: "auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      gap: "20px",
    },
    card: {
      backgroundColor: "#222831",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      color: "white",
      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    },
    details: {
      textAlign: "center",
    },
    title: {
      fontSize: "1.5rem",
      color: "#0084FF",
      fontWeight: "bold",
    },
    institute: {
      fontSize: "1.2rem",
      color: "white",
    },
    duration: {
      fontSize: "1rem",
      color: "#03DDA7",
      fontWeight: "bold",
    },
    description: {
      fontSize: "1rem",
      color: "#ffffffb3",
      marginTop: "10px",
    },
  };

  const iconBg = {
    height: "3rem",
    width: "3rem",
    borderRadius: "50%",
    background: "linear-gradient(135deg, rgba(0, 255, 170, 0.8), rgba(0, 132, 255, 0.8))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    marginBottom: "10px",
  };

  const colorIcon = { fontSize: "1.5rem", color: "#fff" };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <HeadingText header="EDUCATION & CERTIFICATES" subHeader="Knowledge Earned Success Sealed" />

        <div style={styles.grid}>
          {/* Intermediate Education */}
          <div style={{...styles.card, transition: "transform 0.3s ease, box-shadow 0.3s ease"}} className="hover-card">
            <div style={iconBg}>
              <FaSchool style={colorIcon} />
            </div>
            <div style={styles.details}>
              <h3 style={styles.title}>Intermediate in ICS</h3>
              <p style={styles.institute}>Punjab College, Gujrat</p>
              <span style={styles.duration}>2018 - 2020</span>
              <p style={styles.description}>
                Completed **Intermediate in Computer Science (ICS)**, where I built a strong foundation in **programming, mathematics, and IT concepts**.
              </p>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div style={{...styles.card, transition: "transform 0.3s ease, box-shadow 0.3s ease"}} className="hover-card">
            <div style={iconBg}>
              <FaGraduationCap style={colorIcon} />
            </div>
            <div style={styles.details}>
              <h3 style={styles.title}>BSCS - Computer Science</h3>
              <p style={styles.institute}>Arid Agriculture University</p>
              <span style={styles.duration}>2021 - 2025</span>
              <p style={styles.description}>
                Currently pursuing **BSCS**, gaining expertise in **MERN stack development, databases, AI, and software engineering**.
              </p>
            </div>
          </div>

          {/* MERN Stack Bootcamp */}
          <div style={{...styles.card, transition: "transform 0.3s ease, box-shadow 0.3s ease"}} className="hover-card">
            <div style={iconBg}>
              <FaLaptopCode style={colorIcon} />
            </div>
            <div style={styles.details}>
              <h3 style={styles.title}>MERN Stack Bootcamp</h3>
              <p style={styles.institute}>Knowledge Streams</p>
              <span style={styles.duration}>2024</span>
              <p style={styles.description}>
                Completed an **intensive MERN Stack Bootcamp**, mastering **React, Node.js, MongoDB, and Express** with hands-on projects.
              </p>
            </div>
          </div>

          {/* Graphic Designing Course */}
          <div style={{...styles.card, transition: "transform 0.3s ease, box-shadow 0.3s ease"}} className="hover-card">
            <div style={iconBg}>
              <FaPalette style={colorIcon} />
            </div>
            <div style={styles.details}>
              <h3 style={styles.title}>Graphic Designing</h3>
              <p style={styles.institute}>GFXMentor</p>
              <span style={styles.duration}>2024</span>
              <p style={styles.description}>
                Learned **advanced graphic design principles, branding, and UI/UX design** using Photoshop, Illustrator, and Figma.
              </p>
            </div>
          </div>
        </div>

        <style>
          {`
            .hover-card:hover {
              transform: translateY(-10px);
              box-shadow: 0px 15px 15px #03DDA7;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default EduExperience;
