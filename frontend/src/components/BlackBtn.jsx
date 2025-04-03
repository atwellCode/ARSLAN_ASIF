import React from 'react'
import { useNavigate } from "react-router-dom";
const BlackBtn = ({ text, link, external, onClick }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      if (onClick) {
        onClick(); // If an onClick function is provided, execute it
      } else if (link) {
        if (external) {
          window.open(link, "_blank"); // Open external links in a new tab
        } else {
          navigate(link); // Navigate within the app
        }
      }
    };
  return (
    <>
      <button
                className="btn m-2 fw-semibold rounded"
                style={{
                  width: "220px",
                  height: "50px",
                  background: "#000", // Black background
                  color: "#fff", // White text
                  border: "1px solid #fff",
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "0 0 5px #fff", // Initial neon glow
                }}
                onClick={handleClick}
                onMouseOver={(e) => {
                  e.target.style.boxShadow = "0 0 15px #fff"; // Stronger neon glow
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.target.style.boxShadow = "0 0 5px #fff";
                  e.target.style.transform = "scale(1)";
                }}
              >
                {text}
              </button>
    </>
  )
}

export default BlackBtn
