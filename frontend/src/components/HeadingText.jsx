import React from 'react'

const HeadingText = ({header ="default Header", subHeader="defalut sub heading"}) => {
    const headingStyle = {
        background: "linear-gradient(135deg, rgba(0, 255, 170, 0.8), rgba(0, 132, 255, 0.8))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "10px",
        textAlign:"center"
      };
    
      const subHeadingStyle = {
        fontSize: "0.9rem",
        textTransform: "uppercase",
        letterSpacing: "2px",
        fontWeight: "400",
        textShadow: "0 0 10px rgba(255, 255, 255, 0.6)",
        color: "#fff",
        marginBottom: "40px",
         textAlign:"center"
      }; 
  return (
    <>
      <p style={headingStyle}>{header}</p>
      <p style={subHeadingStyle}>{subHeader}</p>
    </>
  )
}

export default HeadingText
