import "./Footerstyle.css";
import React from 'react'
import { FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
         <FaHome size={20} style={{color:"#fff",
         marginRight:"2rem"}} />
            <div>
            <p>192 Room Ganga Hostel</p>
            <p>MNIT JAIPUR</p> 
            
            </div>
            </div>
            <div className="phone"><h4>
            <FaPhone size={20} style={{color:"#fff",
         marginRight:"2rem"}} />
            
            6376294773
           
            </h4>
            </div>
            <div className="email"><h4>
            <FaMailBulk size={20} style={{color:"#fff",
         marginRight:"2rem"}} />
            
            <p>nitinvyas200@gmail.com</p>
           
            </h4>
            </div>
            </div>
        <div className="right">
          <h4>About Me</h4>
            <p> I am a Young Software Developer Looking for a job</p>
            <div className="social">
            <FaFacebook size={30} style={{color:"#fff",
         marginRight:"1rem"}} />
          <FaTwitter size={30} style={{color:"#fff",
         marginRight:"1rem"}} />
          <FaLinkedin size={20} style={{color:"#fff",
         marginRight:"1rem"}} />
            </div>
          
        </div>
        </div>
    </div>
  )
}

export default Footer;