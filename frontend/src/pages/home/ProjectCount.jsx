import React, { useEffect, useState } from "react";
import { FaCertificate } from "react-icons/fa";
import HeadingText from "../../components/HeadingText";

const ProjectCount = () => {
  const sectionStyle = {
    background: "#22252C",
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
  };
  const upperText = {
    fontWeight: "700",
    fontSize: "4rem",
    color: "#0084FF",
    textShadow: "0 3px 5px #00F29A",
    marginBottom: "0%",
  };
  const lowerText = {
    margin: "0%",
    padding: "0%",
    fontSize: "0.9rem",
    textShadow: "0 0 10px rgba(255, 255, 255, 0.6)",
  };

  const [counts, setCounts] = useState({
    experience: 0,
    customers: 0,
    projects: 0,
    certifications: 0,
  });

  useEffect(() => {
    const animateCount = (target, key) => {
      let start = 0;
      const duration = 5000;
      const interval = 50;
      const steps = duration / interval;
      const increment = target / steps;

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCounts((prev) => ({ ...prev, [key]: target }));
          clearInterval(counter);
        } else {
          setCounts((prev) => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, interval);
    };

    animateCount(3, "experience");
    animateCount(38, "customers");
    animateCount(48, "projects");
    animateCount(3, "certifications");
  }, []);

  return (
    <>
      <section style={sectionStyle}>
        <HeadingText header="Project Counts" subHeader="A Passionate Developer & Designer Dedicated to Excellence." />
        <div className="container">
          <div className="row text-light">
            <div className="col-md-3 col-sm-6 col-6">
              <p style={upperText}>{counts.experience}+</p>
              <p style={lowerText}>Years of Experience</p>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <p style={upperText}>{counts.customers}</p>
              <p style={lowerText}>Happy Customers</p>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <p style={upperText}>{counts.projects}</p>
              <p style={lowerText}>Done Projects</p>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <p style={upperText}>{counts.certifications}</p>
              <p style={lowerText}>Certifications</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectCount;
