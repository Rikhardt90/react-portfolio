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
      <div className="about-bottom">
        <h3>
          Here are some of the technologies I’ve been working with recently:
        </h3>
        <div className="bottom-list">
          <ul>
            <li>HTML, CSS & Javascript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
          <ul>
            <li>Typescript</li>
            <li>Sass & GD</li>
            <li>Wordpress</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
