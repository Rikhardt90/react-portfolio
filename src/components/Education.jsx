import React from "react";
import "../styles/Education.scss";

const Education = ({ education }) => {
  return (
    <div className="education-div">
      {education.map((item) => {
        return (
          <div className="edu-card" key={item.id}>
            <img className="education-img" src={item.img} alt="education-img" />
            <h3 className="name">{item.name}</h3>
            <p className="where">{item.where}</p>
            <p className="date">{item.date}</p>
            <p className="description">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
