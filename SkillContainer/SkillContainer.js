import React from "react";
import { Element } from "react-scroll";
import LinearProgress from "@material-ui/core/LinearProgress";
import './SkillContainer.css'

function SkillContainer() {
  return (
    <Element className="skillContainer" id="skills">
      <div className="skillContainer__image">
        <img src="./Assets/skillset.avif" alt=""></img>
      </div>
      <div className="skillContainer__text">
        <h2>SKILLSET</h2>
        <div className="skillContainer__skillset">
          <h5>React</h5>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillContainer__skillset">
          <h5>Python</h5>
          <div className="skillContainer__slider skillContainer__slider2">
            <LinearProgress variant="determinate" value={40} />
          </div>
        </div>
        <div className="skillContainer__skillset">
          <h5>Javascript</h5>
          <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillContainer__skillset">
          <h5>Mysql</h5>
          <div className="skillContainer__slider skillContainer__slider4">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default SkillContainer;
