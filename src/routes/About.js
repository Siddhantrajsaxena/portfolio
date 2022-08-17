import React from 'react'
import Aboutcontent from '../components/Aboutcontent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT." text="I am Friendly Front-End Developer" />
      <Aboutcontent />
      <Footer />
    </div>
  )
}

export default About