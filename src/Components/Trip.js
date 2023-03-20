import "./Trip.css"
import React from 'react'
import TripData from "./TripData"
import Trip1 from "../assets/1.jpg"
import Trip2 from "../assets/2.jpg"
import Trip3 from "../assets/9.jpg"


const Trip = () => {
  return (
    <div className="trip">
      <h1> Recent Trips</h1>
      <p> You can discover unique destinations here using maps</p>
    
    <div className="tripcard">
<TripData
        image={Trip1}
        heading = "Trip is in Indonesia"
        text="My last holiday was a five-day trip to Prague in the Czech Republic. ... Write clear and simple sentences and organise your ideas in short paragraphs. "
        />

<TripData
        image={Trip2}
        heading = "Trip is in Indonesia"
        text="My last holiday was a five-day trip to Prague in the Czech Republic. ... Write clear and simple sentences and organise your ideas in short paragraphs. "
        />

<TripData
        image={Trip3}
        heading = "Trip is in Indonesia"
        text="My last holiday was a five-day trip to Prague in the Czech Republic. ... Write clear and simple sentences and organise your ideas in short paragraphs. "
        />
    </div>
    </div>
  )
}

export default Trip
