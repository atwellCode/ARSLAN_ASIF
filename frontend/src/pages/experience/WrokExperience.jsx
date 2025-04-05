import React from 'react';
import fiverr from "../../assets/FIVERR.jpg";
import upwork from "../../assets/UPWORK.png";
import ks from "../../assets/knowledge_streams.jpeg";
import vbt from "../../assets/VBT_LOGO.png";
import HeadingText from '../../components/HeadingText';
import 'bootstrap/dist/css/bootstrap.min.css';

const WorkExperience = () => {
  const sectionStyle = {
    backgroundColor: "#313741",
    padding: "60px 20px",
    color: "white",
  };

  const cardStyle = {
    backgroundColor: "#222831",
    borderRadius: "15px",
    padding: "30px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Added box-shadow transition
    height: "100%",
  };

  const logoStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
    border: "3px solid #03DDA7",
  };

  const titleStyle = {
    color: "#0084FF",
    fontSize: "1.4rem",
    fontWeight: "bold",
    marginTop: "10px",
  };

  const companyStyle = {
    fontSize: "1.1rem",
    color: "#ffffff",
    marginBottom: "5px",
  };

  const durationStyle = {
    fontSize: "0.9rem",
    color: "#03DDA7",
    fontStyle: "italic",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    fontSize: "0.95rem",
    color: "#eeeeee",
  };

  const experiences = [
    {
      image: upwork,
      title: "Web Developer (MERN Stack)",
      company: "Upwork",
      duration: "Current Position",
      description:
        "Developing full-stack web applications using React, Node.js, Express, and MongoDB. Focused on clean UI and robust backend logic.",
    },
    {
      image: fiverr,
      title: "Graphic Designer",
      company: "Fiverr",
      duration: "Current Position",
      description:
        "Creating visually appealing social media posts, flyers, menus, and more. Specialize in modern, client-friendly designs.",
    },
    {
      image: ks,
      title: "MERN Stack Intern",
      company: "Knowledge Streams",
      duration: "Oct 2024 - Jan 2025",
      description:
        "Completed an intensive internship in MERN stack. Gained hands-on experience building admin panels, form handling, routing, and state management.",
    },
    {
      image: vbt,
      title: "Intern Developer & Designer",
      company: "Vision Bird Technologies",
      duration: "Mar 2024 - Oct 2024",
      description:
        "Worked on real-time projects involving both front-end development and graphic designing. Improved skills in responsive layouts and user interfaces.",
    },
  ];

  return (
    <div style={sectionStyle}>
      <div className="container">
        <HeadingText header="WORK EXPERIENCE" subHeader="Current Job Status & Work Experience" />
        <div className="row mt-5">
          {experiences.map((exp, idx) => (
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={idx}>
              <div style={cardStyle} className="h-100 hover-card">
                <img src={exp.image} alt={exp.company} style={logoStyle} />
                <h4 style={titleStyle}>{exp.title}</h4>
                <p style={companyStyle}>{exp.company}</p>
                <p style={durationStyle}>{exp.duration}</p>
                <p style={descriptionStyle}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internal Hover Effect */}
      <style>
        {`
          .hover-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 25px rgba(3, 221, 167, 0.7); /* Ensuring box-shadow works */
          }
        `}
      </style>
    </div>
  );
};

export default WorkExperience;
