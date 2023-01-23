import React from "react";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import { useState } from "react";
import "../styles/Work.scss";


const Work = ({ education, experience }) => {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div id="work">

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
  );
};

export default Work;
