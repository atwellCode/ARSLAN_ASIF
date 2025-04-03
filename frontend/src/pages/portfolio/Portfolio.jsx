import React from 'react'
import Navbar from '../../components/Navbar'
import PortfolioHero from './PortfolioHero'
import PortfolioContent from './PortfolioContent'
import SubHeroSection from '../../components/SubHeroSection'
import Footer from '../../components/Footer'

const Portfolio = () => {
  return (
    <>
    <Navbar/>
    <SubHeroSection title ="portfolio" description="View my diverse projects demonstrating creactivity, expertise and innovations."/>
     <PortfolioContent/>
     <Footer/>
    </>
  )
}

export default Portfolio
