import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import LinkIcon from "../../components/LinkIcon";
import HeadingText from "../../components/HeadingText";
const ContactContent = () => {
  const sectionStyle = {
    background: "#313741",
    minHeight: "100vh",
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    // textAlign: "center",
    padding: "20px",
  };
  const rightSide = {
    background: "#22252C",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0 0 25px rgba(0, 255, 170, 0.8)",
  };
  const inputfield = {
    background: "#313741",
    border: "none",
    borderBottom: "2px solid #fff",
    margin: "0.5rem",
    padding: "0.9rem",
    width: "90%",
  };
  const textfield = {
    background: "#313741",
    border: "none",
    borderBottom: "2px solid #fff",
    margin: "0.5rem",
    padding: "0.9rem",
    minHeight: "6rem",
    width: "90%",
  };
  const iconbg = {
    height: "3rem",
    width: "3rem",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, rgba(0, 255, 170, 0.8), rgba(0, 132, 255, 0.8))",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  const colorIcon = {
    color: "#fff",
    fontSize:"1.4rem"
  };
  const textC = {
    textAlign:"center",
    textTransform:"uppercase",
    paddingTop:"10px",
    textShadow: "0 0 10px rgba(255, 255, 255, 0.6)",
    fontWeight:"500"
  }
  return (
    <>
      <section style={sectionStyle}>
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-md-6 text-white  p-4 ">
              <HeadingText header="Contact Me" subHeader="I listen, I care, I deliver." className="text-center"/>
              <div className="d-flex justify-content-start align-items-center gap-4 py-4 rounded">
                <p>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={iconbg}
                  >
                    <FaWhatsapp className="fs-3" style={colorIcon} />
                  </a>
                </p>
                <p>+92 - 306 - 5917565</p>
              </div>
              <div className=" d-flex justify-content-start align-items-center gap-4 py-4">
                <p>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={iconbg}
                  >
                    <FaEnvelope style={colorIcon} />
                  </a>
                </p>
                <div>
                  <p>businessatwellcode@gmail.com</p>
                  <p>m.arslanasif093@gmail.com</p>
                </div>
              </div>
              <p style={textC}>connect with me on social media</p>
                <LinkIcon/>
            </div>
            <div className="col-md-6 text-white  p-4 rounded " style={rightSide}>
              <p className="fw-medium display-6 text-uppercase py-4">
                Get in touch
              </p>
              <form action="">
                <input type="text" style={inputfield} placeholder="Your Name" />
                <input
                  type="email"
                  style={inputfield}
                  placeholder="example@gmail.com"
                />
                <textarea
                  name=""
                  style={textfield}
                  id=""
                  placeholder="Your Message"
                ></textarea>
                <button
                  className="btn m-4 fw-semibold rounded"
                  style={{
                    float: "right",
                    marginRight: "0.5rem",
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
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactContent;
