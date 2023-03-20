import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import AboutImg from "../assets/1.jpg"
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'

const About = () => {
  return (
    <>
        <Navbar/>
        <Hero
           cName="hero-mid"
           heroimage={AboutImg}
           title="About"
        />
        <AboutUs/>
        <Footer/>
    </>
  )
}

export default About
