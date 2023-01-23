import React from "react";
import "../styles/Contact.scss";

const Contact = ({ contact }) => {
  return (
    <div id="contact">
      <div className="contact-title">
        <h2>
          <span>03. </span>Contact
        </h2>
      </div>
      <div className="contact-info">
        <div className="contact-links">
          <h3>
            Get In Touch! I’m currently looking for any new
            opportunities, my inbox is always open. Whether you have a question
            or just want to say hi, I’ll try my best to get back to you!
          </h3>
          <div className="contact-card">
            <p>Email:</p>
            <a href="mailto:ricardo.meraciudad@gmail.com">{contact.email}</a>
          </div>

          <div className="contact-card">
            <p>Social:</p>
            <a href="https://www.instagram.com/rikhardt90"><img src="https://res.cloudinary.com/dbamkolrf/image/upload/v1669220895/React-portfolio/icons/face_xgbcea.png" alt="face-icon"/></a>
            <a href="https://www.instagram.com/rikhardt90"><img src="https://res.cloudinary.com/dbamkolrf/image/upload/v1669220895/React-portfolio/icons/insta_zlgtby.png" alt="insta-icon"/></a>
            <a href="https://www.instagram.com/rikhardt90"><img src="https://res.cloudinary.com/dbamkolrf/image/upload/v1669220895/React-portfolio/icons/Github_bpdrs6.png" alt="github-icon"/></a>
            
          </div>
        </div>

        <div className="contact-img">
          <img src={contact.contactImage} alt="contact" />
        </div>
      </div>
      <div className="contact-bottom">
        <h3>Made with React</h3>
        <img
          src="https://res.cloudinary.com/dbamkolrf/image/upload/v1674484471/React-portfolio/icons/logo192_ihs7w9.png"
          alt="react"
        />
      </div>
    </div>
  );
};

export default Contact;
