import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark py-3 shadow-lg sticky-top">
      <div className="container">
        {/* Brand Name */}
        <a className="navbar-brand fw-bold fs-4" href="#" style={{background:
      "linear-gradient(135deg, rgba(0, 255, 170, 0.9), rgba(0, 132, 255, 0.8))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",}}>
          ARSLAN ASIF
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "white", padding: "5px 8px", borderRadius: "3px", }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-1">
            <li className="nav-item">
              <a className="nav-link text-white fs-6" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fs-6" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fs-6" href="/experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fs-6" href="/contact">
                Contact
              </a>
            </li>
          </ul>

          {/* Hire Me Button */}
          <button
                className="btn m-2 fw-semibold rounded"
                style={{
                  width: "220px",
                  height: "50px",
                  background: "transparent", // Transparent background
                  color: "#fff",
                  border: "1px solid #fff",
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "0 0 5px #fff", // Initial neon glow
                }}
                onMouseOver={(e) => {
                  e.target.style.background = "#fff"; // Invert colors on hover
                  e.target.style.color = "#000";
                  e.target.style.boxShadow = "0 0 15px #fff"; // Stronger neon glow
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "#fff";
                  e.target.style.boxShadow = "0 0 5px #fff";
                  e.target.style.transform = "scale(1)";
                }}
              >
                Buy Me a Coffee
              </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
