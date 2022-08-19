import React from 'react'
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Trainingsection from '../components/Training'
const Training = () => {
  return (
    <div>
      <Navbar />
      <Heroimage heading='SERVICE.' text=''/>
      <Trainingsection />
      <Footer />
      </div>
  )
}

export default Training