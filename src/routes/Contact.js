import React from 'react'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'
import Form from '../components/Form' 
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimage  heading='CONTACT.' text='Contact BookMe staff to  Setup a trip '/>
      <Form />
      <Footer />
      </div>
  )
}

export default Contact