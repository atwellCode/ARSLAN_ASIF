import React from 'react'
import Navbar from './components/navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from './pages/Home/Homepage'
import Portfolio from './pages/portfolio/Portfolio'
import Experience from './pages/experience/Experience'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
     
    </Routes>
  </BrowserRouter>
{/* 34732847434
03446207744  06 mar
*/}
     
    </>
  )
}

export default App
