import {
  FaInstagram,
  FaDribbble,
  FaBehance,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import LinkIcon from "../../components/LinkIcon";
import TransBtn from "../../components/TransBtn";
import HeadingText from "../../components/HeadingText";

const ViewPortfolio = () => {
  const sectionStyle = {
    background: "#22252C",
    minHeight: "50vh",
    textAlign: "center",
    padding: "20px",
  };

  return (
    <>
      <section style={sectionStyle}>
        <HeadingText header="View My Portfolio" subHeader="View my diverse projects demonstrating creactivity, expertise and innovations." />
       
        <div>
          <TransBtn text="View Portfolio" link="/portfolio"/>
          <LinkIcon/>
        </div>
      </section>
    </>
  );
};

export default ViewPortfolio;
