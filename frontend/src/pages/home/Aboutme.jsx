import React from "react";
import prof from "../../assets/profile2.png";
import TransBtn from "../../components/TransBtn";
import HeadingText from "../../components/HeadingText";


const Aboutme = () => {
  const sectionStyle = {
    background: "#22252C",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
  };
  
  const textCol = {
    color: " rgb(0, 132, 255)",
    fontWeight: "bold",
  };
  return (
    <>
      <section style={sectionStyle}>
      <HeadingText header="Meet Your Developer" subHeader="A Passionate Developer & Designer Dedicated to Excellence." />

        <div className="container text-center py-5">
          <div className="row align-items-center">
            {/* left Section - Profile Image */}
            <div className="col-md-6 text-center mt-0 mb-4">
              <div
                style={{
                  display: "inline-block",
                  padding: "12px",
                  borderRadius: "40% 60% 70% 30% / 50% 45% 55% 50%",
                  background:
                    "linear-gradient(145deg, rgba(0, 255, 170, 0.8), rgba(0, 132, 255, 0.8))",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                }}
              >
                <img
                  src={prof}
                  alt="Profile"
                  className="img-fluid"
                  style={{
                    maxHeight: "60vh",
                    width: "auto",
                    objectFit: "cover",
                    borderRadius: "40% 60% 70% 30% / 50% 45% 55% 50%",
                  }}
                />
              </div>
            </div>

            {/* Right Section - Profile Image */}
            <div className="col-md-6 text-center my-3">
              <p className="text-light text-start fs-6 fw-mediym px-3">
                I’m <span style={textCol}>Arslan Asif</span> , a dedicated Web
                Developer and Graphic Designer with over{" "}
                <span style={textCol}>3+ Years of Experience</span> in crafting
                visually appealing and highly functional digital solutions.
                Specializing in{" "}
                <span style={textCol}>
                  MERN stack development & UI/UX design
                </span>
                , I create responsive, user-friendly websites and applications
                that deliver seamless experiences.
                <br />
                <br />
                Passionate about innovation, I blend creativity with technical
                expertise to build{" "}
                <span style={textCol}>Dynamic Web Applications</span> and
                stunning designs. Whether it’s developing high-performance
                websites, designing engaging visuals, or optimizing user
                experiences, I strive for excellence in every project.
                Constantly learning and evolving, I’m always ready to take on
                new challenges and bring fresh ideas to life.
              </p>
              <TransBtn  text="Résumé"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutme;
