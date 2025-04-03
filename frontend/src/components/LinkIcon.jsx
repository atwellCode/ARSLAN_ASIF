import React from 'react';
import {
    FaInstagram,
    FaDribbble,
    FaBehance,
    FaLinkedin,
    FaGithub,
  } from "react-icons/fa";

const LinkIcon = () => {
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
      };
  return (
    <>
     <div className="d-flex justify-content-center align-item-center gap-3 fs-3 my-4">
     <a
                   href="https://github/atwellcode"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={iconbg}
                 >
                   <FaGithub style={colorIcon} />
                 </a>
                 <a
                   href="https://linkedin/malikarslanasif"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={iconbg}
                 >
                   <FaLinkedin style={colorIcon} />
                 </a>
                 <a
                   href="https://instagram.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={iconbg}
                 >
                   <FaInstagram style={colorIcon} />
                 </a>
                 <a
                   href="https://dribbble.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={iconbg}
                 >
                   <FaDribbble style={colorIcon} />
                 </a>
                 <a
                   href="https://www.behance.net"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={iconbg}
                 >
                   <FaBehance style={colorIcon} />
                 </a>
                 
                
               </div> 
    </>
  )
}

export default LinkIcon
