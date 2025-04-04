import React, { useState } from "react";

const PortfolioNavbar = ({ setCategory }) => {
  const [activeItem, setActiveItem] = useState("Posts");

  return (
    <>
      <ul className="nav text-decoration-none justify-content-center py-4 text-uppercase">
        {["Posts", "Banners", "Flyers", "Websites"].map((item) => (
          <li key={item} className="nav-item px-3">
            <button
              className={`nav-link text-light fw-bold position-relative border-0 bg-transparent ${
                activeItem === item ? "active" : ""
              }`}
              onClick={() => {
                setCategory(item);
                setActiveItem(item);
              }}
              style={{
                textTransform: "uppercase",
                cursor: "pointer",
                position: "relative",
              }}
            >
              {item}
              <span
                className={`underline position-absolute start-50 translate-middle-x w-100 ${
                  activeItem === item ? "active-underline" : "inactive-underline"
                }`}
              ></span>
            </button>
          </li>
        ))}
      </ul>

      <style>
        {`
          .nav-link {
            transition: text-shadow 0.3s ease;
          }

          .nav-link:hover {
            text-decoration: underline;
          }

          .underline {
            height: 2px;
            bottom: 0;
            display: block;
            transition: all 0.3s ease;
          }

          .inactive-underline {
            background-color: transparent;
          }

          .active-underline {
            background-color: #0084FF;
          }

          .active {
            text-shadow: 0px 0px 5px #0084FF;
          }
        `}
      </style>
    </>
  );
};

export default PortfolioNavbar;
