import React from "react";
import Navbar from "../../components/navbar";
import SubHeroSection from "../../components/SubHeroSection";
import ContactContent from "./ContactContent";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <SubHeroSection title="Contact" description="Get in touch for inquiries, collabrations, or professional discussions." />
      <ContactContent/>
      <Footer/>
    </>
  );
};

export default Contact;
