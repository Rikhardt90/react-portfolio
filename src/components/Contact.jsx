import React from "react";
import "../styles/Contact.scss";


const Contact = ({ contact }) => {
  return (
    <div id="contact">

        <div className="contact-div--left">
        

          <div className="contact-card">
            <p>Email:</p>{" "}
            <a href="mailto:ricardo.meraciudad@gmail.com">{contact.email}</a>
          </div>

          <div className="contact-card">
            <p>LinkedIn:</p>{" "}
            <a href="https://www.linkedin.com/in/ricardo-mera-ciudad-26b58a159/">
              LinkedIn
            </a>
          </div>

          <div className="contact-card">
            <p>Social:</p> <a href="https://www.facebook.com/ricardo.meraciudad">Facebook</a><a href="https://www.instagram.com/rikhardt90">Instagram</a>
          </div>
        </div>

        <div className="contact-div--right">
          <img src={contact.contactImage} alt="" />
        </div>
  
    </div> 
  );
};

export default Contact;