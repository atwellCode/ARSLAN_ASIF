import React from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation

const TransBtn = ({ text, link, external, onClick }) => {
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
    <button
      className="btn m-2 fw-semibold rounded"
      style={{
        width: "220px",
        height: "50px",
        background: "transparent",
        color: "#fff",
        border: "1px solid #fff",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0 0 5px #fff",
        cursor: "pointer",
      }}
      onClick={handleClick}
      onMouseOver={(e) => {
        e.target.style.background = "#fff";
        e.target.style.color = "#000";
        e.target.style.boxShadow = "0 0 15px #fff";
        e.target.style.transform = "scale(1.05)";
      }}
      onMouseOut={(e) => {
        e.target.style.background = "transparent";
        e.target.style.color = "#fff";
        e.target.style.boxShadow = "0 0 5px #fff";
        e.target.style.transform = "scale(1)";
      }}
    >
      {text}
    </button>
  );
};

export default TransBtn;
