import React from "react";
import LinkIcon from "../components/LinkIcon"; // Social media component

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row justify-content-between">
          {/* Column 1 - Brand & About */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h3
              className="fw-bold text-uppercase"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 255, 170, 0.9), rgba(0, 132, 255, 0.8))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Arslan Asif
            </h3>
            <p className="text-light">
              Empowering creativity through digital experiences. Let’s innovate
              together!
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className=" col-md-3 mb-4 text-center">
            <h5 className="fw-bold text-uppercase">Explore</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none d-block">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-light text-decoration-none d-block"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-light text-decoration-none d-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="  col-md-4 mb-4 text-center text-md-end">
            <h5 className="fw-bold text-uppercase">Get in Touch</h5>
            <p className="text-light mb-1">📧 businessatwellcode@gmail.com</p>
            <p className="text-light mb-1">📧 m.arslanasif093@gmail.com</p>
            <p className="text-light">📞 +92 306 5917565</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mt-4 border-top pt-3">
          <h5 className="fw-bold text-uppercase">Follow Me</h5>
          <LinkIcon /> {/* Social Media Icons */}
        </div>

        {/* Bottom Section */}
        <div className="text-center text-light mt-3">
          &copy; {new Date().getFullYear()} Designed with ❤️ by Arslan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
