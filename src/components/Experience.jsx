import React from "react";
import "../styles/Experience.scss";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className="experience-div">
        {experience.map((item) => {
          return (
            <div className="exp-card" key={item.name}>
              <img
                className="experience-img"
                src={item.img}
                alt="experience-img"
              />
              <h3 className="name">{item.name}</h3>
              <p className="where">{item.where}</p>
              <p className="date">{item.date}</p>
              <p className="description">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
