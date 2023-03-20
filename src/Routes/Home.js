import React from 'react'
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Destination from '../Components/Destination'
import Trip from '../Components/Trip'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero 
          cName="hero"
          heroimage="https://images.unsplash.com/photo-1679176031571-85793af43bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          title="Your Journey"
          text="Choose your destination"
          buttonText="Travel Plan"
          url="/"
          btnClass="show"

        />
        <Destination/>
        <Trip/>
        <Footer/>
    </>
  )
}

export default Home
