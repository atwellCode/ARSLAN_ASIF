import React from "react";

const PortfolioNavbar = ({ setCategory }) => {
  return (
    <ul className="nav nav-underline justify-content-center py-4 ">
      {["Posts", "Banners", "Flyers", "Websites"].map((item) => (
        <li key={item} className="nav-item px-3">
          <button
            className="nav-link text-light btn btn-link"
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PortfolioNavbar;
