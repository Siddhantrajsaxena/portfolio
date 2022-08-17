import "./workcardstyle.css";
import React from 'react';
import Workcard from "./Workcard";
import Workcarddata from "./Workcarddata";
const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
           {Workcarddata.map((val,index) => {
            return(
                <Workcard  
                    key={index}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    text = {val.text}
                    view = {val.view}
                    git = {val.git}
                />
            )
           })}
        </div>
    </div>
  )
}

export default Work