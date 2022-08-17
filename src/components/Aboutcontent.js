import "./Aboutcontentstyle.css";
import React from 'react'
import {Link} from "react-router-dom";
import photo from '../assests/pic.jpg';
import portfolio from "../assests/Portfolio.png";
import Foodies from "../assests/Foodies.png";
import Photogram from "../assests/Photogram.png";

const Aboutcontent = () => {
  return (
    <div className="about">
    <div className="left">
      <h1> Who Am I</h1>
      <p> I  am React Developer I have created many successful project of MERN stack technologies
      </p>
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
    </div> 
    <div className="right">
    <div className="img-container">
        <div className="img-stack top">
            <img src={portfolio}
            className="img" alt="true" />
        </div>
        <div className="img-stack bottom">
            <img src={Foodies}
            className="img" alt="true" />
        </div>
        
    </div>

    </div>
    </div>
  )
}

export default Aboutcontent;