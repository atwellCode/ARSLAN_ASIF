import React from 'react'
import Navbar from '../../components/navbar'
import SubHeroSection from '../../components/SubHeroSection'
import Footer from '../../components/Footer'
import EduExperience from './EduExperience'
import WrokExperience from './WrokExperience'

const Experience = () => {
  return (
    <>
      <Navbar/>
      <SubHeroSection title='Experience' description='Explore my career journey, skills, and achievements over the years.' />
      <EduExperience/>
      <WrokExperience/>
      <Footer/>
    </>
  )
}

export default Experience
