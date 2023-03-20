import React from 'react'
import AboutImg from "../assets/3.jpg"
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <Hero
       cName="hero-mid"
       heroimage={AboutImg}
       title="Contact"
    />
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact
