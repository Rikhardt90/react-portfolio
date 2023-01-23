import React from "react";
import "../styles/About.scss";

const About = () => {
  return (
    <div id="about">
      <div className="about-header">
        <h2>
          <span>01. </span>About me
        </h2>
      </div>
      <div className="about-info">
        <div className="about-img">
          <img
            src="https://res.cloudinary.com/dbamkolrf/image/upload/v1643323646/Profile/perfil_et92wr.png"
            alt="profile"
          />
        </div>
        <div className="about-text">
          <h2>Hi there!</h2>
          <p>
            - I´m Ricardo. I´ve just finished a fullstack web development
            bootcamp and I´m looking for a job opportunity to expand my
            knowledge in coding web apps.
          </p>
          <p>
            I´m a former electric technician with a backgound in Technology and
            Robotics who fell in love with coding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
