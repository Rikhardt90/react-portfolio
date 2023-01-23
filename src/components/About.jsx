import React from "react";
import "../styles/About.scss";


const About = () => {
  return (
    <div id="about">

        <div className="about-text">
          <h2>About me:</h2>
          <p>
            Hi! I´m Ricardo. I´ve just finished a fullstack web development
            bootcamp and I´m looking for a job opportunity to expand my
            knowledge in coding web apps. I´m a former electric technician who
            fell in love with coding.
          </p>
        </div>
        <div className="about-img">
          <img
            src="https://res.cloudinary.com/dbamkolrf/image/upload/v1643323646/Profile/perfil_et92wr.png"
            alt="profile"
          />
        </div>
    </div>
  );
};

export default About;
