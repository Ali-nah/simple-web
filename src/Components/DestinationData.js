import React, { Component } from 'react'
import './Destination.css'
import Destination from './Destination'
import FirstImg from "../assets/9.jpg"
import SecondImg from "../assets/5.jpg"
import ThirdImg from "../assets/6.jpg"
import FourthImg from "../assets/7.jpg"

class DestinationData extends Component {
    render(){
    return (
        <div className={this.props.className}>
        <div className='desc-text'>
          <h2> {this.props.heading}</h2>
          <p> {this.props.text} </p>
        </div>

        <div className='image'>
          <img alt='img' src={this.props.img1}/>
          <img alt='img' src={this.props.img2}/>
  
        </div>
      </div>
  )
}
}

export default DestinationData
