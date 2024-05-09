import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

const Developer = () => {
  return (
    <div>
      {/* Navbar,Hero(landing section),slider, skills,projects,expereience,footer */}
      <NavBar/>
      <Hero/>
      <Slider/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default Developer
