import React from 'react'
import './Trainingstyles.css'
import { Link } from 'react-router-dom'
import boat from '../assets/boat.jpg'
import boat2 from '../assets/boat2.jpg'

const Training = () => {
  return (
    <div className='training'>
      <div className="left">
        <h1>What do we provide ?</h1>
        <p>Easy bookings -Assested trips-  culture training </p>
        <Link to='/contact'><button className='btn'>Contact</button></Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className="image-stack top">
            <img src={boat} className='img' alt='/' />
          </div>

          <div className="image-stack bottom">
            <img src={boat2} className='img' alt='/' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Training