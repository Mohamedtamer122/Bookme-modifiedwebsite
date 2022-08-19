import React from 'react'
import './Videostyles.css'
import { Link } from 'react-router-dom'
import mainimage from'../assets/mainimage.jpg'
import mainimage2 from '../assets/mainimage2.jpg'


const Video = () => {
  return (
    <div className="hero">
      <img src={mainimage2} alt="/"/>
      <div className="content">
      
      <h1>Book Me. Travel.</h1>
      <p>Booking Experience never before</p>
      

      <div>
        <Link to='/training' className='btn'>Our service</Link>
        <Link to='/contact' className='btn btn-light'>Get started</Link>
      </div>

      </div>
      </div>
  )
}

export default Video