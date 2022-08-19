import React from 'react'
import { Link } from 'react-router-dom'
import './Pricingstyles.css'

const Pricing = () => {
  return (
    <div className='pricing'>
     <div className='card-container'>
      <div className='card'>
        <h3>- Basic -</h3>
        <span className='bar'></span>
        <p className='btc'>$20 </p>
        <p>- Location Featured 🗸 </p>
        <p>- Navigation Route 🗸 </p>
        <p>- Guide ✘</p>
        <p>- premium Access to unique places ✘ </p>
       <Link to="/contact" className='btn'>Book</Link>
      </div>

      <div className='card'>
        <h3>- Private -</h3>
        <span className='bar'></span>
        <p className='btc'>$50</p>
        <p>- Location Featured 🗸 </p>
        <p>- Navigation Route 🗸 </p>
        <p>- Guide  🗸</p>
        <p>- premium Access to unique places ✘</p>
       <Link to="/contact" className='btn'>Book</Link>
      </div>

      <div className='card'>
        <h3>- Premium -</h3>
        <span className='bar'></span>
        <p className='btc'>$100</p>
        <p>- Location Featured 🗸 </p>
        <p>- Navigation Route 🗸</p>
        <p>- Guide 🗸</p>
        <p>- premium Access to unique places 🗸 </p>
       <Link to="/contact" className='btn'>Book</Link>
      </div>

     </div>
      </div>
  )
}

export default Pricing