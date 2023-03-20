import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import AboutImg from "../assets/2.jpg"
import Footer from '../Components/Footer'
import Trip from '../Components/Trip'

const Service = () => {
  return (
    <>
    <Navbar/>
    <Hero
       cName="hero-mid"
       heroimage={AboutImg}
       title="Services"
    />
    <Trip/>
     <Footer/>
    </>
  )
}

export default Service
