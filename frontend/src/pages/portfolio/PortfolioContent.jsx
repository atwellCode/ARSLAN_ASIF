import React, { useState } from "react";
import PortfolioNavbar from "../../components/PortfolioNavbar";
import post from "../../assets/post.png";
import flyer from "../../assets/flyers.png";
import banner from "../../assets/banner.png";
import website from "../../assets/website.png";

const portfolioItems = [
  { id: 1, title: "Post 1", category: "Posts", image: post },
  { id: 2, title: "Post 2", category: "Posts", image: post },
  { id: 3, title: "Post 3", category: "Posts", image: post },
  { id: 4, title: "Post 4", category: "Posts", image: post },
  { id: 5, title: "Post 5", category: "Posts", image: post },
  { id: 6, title: "Post 6", category: "Posts", image: post },
  { id: 7, title: "Post 7", category: "Posts", image: post },
  { id: 8, title: "Post 8", category: "Posts", image: post },
  { id: 9, title: "Post 9", category: "Posts", image: post },
  { id: 10, title: "Post 10", category: "Posts", image: post },
  { id: 11, title: "Post 11", category: "Posts", image: post },
  { id: 12, title: "Post 12", category: "Posts", image: post },


  { id: 13, title: "Banner 13", category: "Banners", image: banner },
  { id: 14, title: "Banner 14", category: "Banners", image: banner },
  { id: 15, title: "Banner 15", category: "Banners", image: banner },
  { id: 16, title: "Banner 16", category: "Banners", image: banner },
  { id: 17, title: "Banner 17", category: "Banners", image: banner },
  { id: 18, title: "Banner 18", category: "Banners", image: banner },
  { id: 19, title: "Banner 19", category: "Banners", image: banner },
  { id: 20, title: "Banner 20", category: "Banners", image: banner },
  { id: 21, title: "Banner 21", category: "Banners", image: banner },
  { id: 22, title: "Banner 22", category: "Banners", image: banner },
  { id: 23, title: "Banner 23", category: "Banners", image: banner },
  { id: 24, title: "Banner 24", category: "Banners", image: banner },

  { id: 25, title: "Flyer 25", category: "Flyers", image: flyer },
  { id: 26, title: "Flyer 26", category: "Flyers", image: flyer },
  { id: 27, title: "Flyer 27", category: "Flyers", image: flyer },
  { id: 28, title: "Flyer 28", category: "Flyers", image: flyer },
  { id: 29, title: "Flyer 29", category: "Flyers", image: flyer },
  { id: 30, title: "Flyer 30", category: "Flyers", image: flyer },
  { id: 31, title: "Flyer 31", category: "Flyers", image: flyer },
  { id: 32, title: "Flyer 32", category: "Flyers", image: flyer },
  { id: 33, title: "Flyer 33", category: "Flyers", image: flyer },
  { id: 34, title: "Flyer 34", category: "Flyers", image: flyer },
  { id: 35, title: "Flyer 35", category: "Flyers", image: flyer },
  { id: 36, title: "Flyer 36", category: "Flyers", image: flyer },

  { id: 37, title: "Website 37", category: "Websites", image: website, url: "https://example.com" },
  { id: 38, title: "Website 38", category: "Websites", image: website, url: "https://website2.com" },
  { id: 39, title: "Website 39", category: "Websites", image: website, url: "https://example.com" },
  { id: 40, title: "Website 40", category: "Websites", image: website, url: "https://website2.com" },
  { id: 41, title: "Website 41", category: "Websites", image: website, url: "https://example.com" },
  { id: 42, title: "Website 42", category: "Websites", image: website, url: "https://website2.com" },
  { id: 43, title: "Website 43", category: "Websites", image: website, url: "https://example.com" },
  { id: 44, title: "Website 44", category: "Websites", image: website, url: "https://website2.com" },
  { id: 45, title: "Website 45", category: "Websites", image: website, url: "https://example.com" },
  { id: 46, title: "Website 46", category: "Websites", image: website, url: "https://website2.com" },
  { id: 47, title: "Website 47", category: "Websites", image: website, url: "https://example.com" },
  { id: 48, title: "Website 48", category: "Websites", image: website, url: "https://website2.com" },
];
 
const portSection = {
    backgroundColor:"#22252C",
    height:"auto",
    width:"80%"
}
const PortfolioContent = () => {
  const [category, setCategory] = useState("Posts");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const sectionStyling = {
    height: "auto",
    width: "100%",
    backgroundColor: "#222831",
    margin: "auto",
    padding: "20px",
    overflow: "hidden",
  };

  const filteredItems = portfolioItems.filter((item) => item.category === category);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Change Page
  const paginate = (direction) => {
    if (direction === "next" && indexOfLastItem < filteredItems.length) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section style={sectionStyling}>
      <PortfolioNavbar setCategory={setCategory} />
      <div className="container" style={portSection}>
        <div className="row row-cols-1 row-cols-md-3 g-3 p-3">
          {currentItems.map((item) => (
            <div key={item.id} className={`col ${["Flyers", "Banners"].includes(category) ? "col-md-6" : "col-md-4"}`}>
              <div>
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div >
                  <p className="fs-6 fw-bold text-light text-center">{item.title}</p>
                  {category === "Websites" && (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" >
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {filteredItems.length > itemsPerPage && (
          <div className="d-flex justify-content-center pb-5">
            <button onClick={() => paginate("prev")} disabled={currentPage === 1} className="btn btn-secondary mx-2">
              Previous
            </button>
            <button onClick={() => paginate("next")} disabled={indexOfLastItem >= filteredItems.length} className="btn btn-secondary mx-2">
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioContent;