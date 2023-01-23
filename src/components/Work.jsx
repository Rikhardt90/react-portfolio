import React from "react";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import { useState } from "react";
import "../styles/Work.scss";

const Work = ({ education, experience }) => {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div id="work">
      <div className="work-title">
        <h2><span>02. </span>Education and experience</h2>
      </div>
      <div className="work-info">
        <div className="buttons-div">
          <button onClick={() => setShowEducation(true)}>Education</button>
          <button onClick={() => setShowEducation(false)}>Experience</button>
        </div>

        <div className="exp-edu-div">
          {showEducation ? (
            <Education education={education} />
          ) : (
            <Experience experience={experience} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
