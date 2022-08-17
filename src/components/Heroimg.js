 import "./Heroimgstyle.css";

 import React from 'react'
 import pic from "../assests/pic.jpg";
import { Link } from "react-router-dom";
 const Heroimg = () => {
   return (
     <div className="hero">
        <div className="mask">
            <img className="into-img"
    src = {pic} alt = "pic"
            />
        </div>
        <div className="content">
            <p>I Am WebDeveloper</p>
            <h1> MERN STACK</h1>
            <div>
                <Link to="/project"
                className="btn">
                  Projects
                </Link>
                <Link to="/contact"
                className="btn btn-light">
                  Contact
                </Link>
            </div>
        </div>
     </div>
   )
 }
 
 export default Heroimg