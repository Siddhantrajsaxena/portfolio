import React from 'react'
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="CONTACT." text="Lets Have a chat" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact