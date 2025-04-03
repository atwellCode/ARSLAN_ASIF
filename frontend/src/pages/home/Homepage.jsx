import React from 'react'
import Navbar from '../../components/navbar';
import HeroSection from './HeroSection.jsx';
import Aboutme from './Aboutme.jsx';
import ServicesSection from "./ServicesSection.jsx";
import ProjectCount from './ProjectCount.jsx';
import Testimonial from './Testimonial.jsx';
import ViewPortfolio from './ViewPortfolio.jsx';
import Footer from '../../components/Footer.jsx';
import ContactContent from '../contact/ContactContent.jsx';


const Homepage = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Aboutme/>
    <ServicesSection/>
    <ProjectCount/>
    <Testimonial/>
    <ViewPortfolio/>
    <ContactContent/>
    <Footer/>
    </>
  )
}

export default Homepage
