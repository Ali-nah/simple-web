import React from 'react'
import FirstImg from "../assets/1.jpg"
import SecondImg from "../assets/9.jpg"
import ThirdImg from "../assets/5.jpg"
import FourthImg from "../assets/6.jpg"
import FifthImg from "../assets/7.jpg"
import SixthImg from "../assets/8.jpg"

import "./Destination.css"
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destination</h1>
      <p>Tours give your soul power</p>


      <DestinationData
        className="first-desc"
        heading ="Taal, Volcano, Batangas"
        text =" The place where someone is going or where something is being sent or taken: The Virgin Islands are a popular tourist destination.
        "

        img1={FirstImg}
        img2={SecondImg}
          />

<DestinationData
        className="first-desc-reverse"
        heading ="Travel essay"
        text =" A travel essay is a personal account of a trip or vacation, often written as part of a memoir, and is usually fictional. It might focus on the author's experiences and the sights they saw, giving readers a deeper understanding of the journey.
        "

        img1={ThirdImg}
        img2={FourthImg}
          />

<DestinationData
        className="first-desc"
        heading ="Movement"
        text =" Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.
        "

        img1={FifthImg}
        img2={SixthImg}
          />
       </div>
    
  )
}

export default Destination
