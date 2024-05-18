import React from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import SliderTop from "./components/ SliderTop"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Footer from "./components/Footer"

const Developer = () => {
  return (
    <div>
      {/* Navbar,Hero(landing section),slider, skills,projects,expereience,footer */}
      <NavBar />
      <Hero />
      <SliderTop/>
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  )
}

export default Developer
