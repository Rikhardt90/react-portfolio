import React from "react";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div id="home">
      <h1>Hi, my name is</h1>
      <h2>Ricardo Mera Ciudad</h2>
      <h3>
        I make things <span className="home-react">React</span>
      </h3>
      <p>
        "I´m a fullstack web development student looking to expand my career in
        a field that I love. Currently I´m looking for my first job as a
        developer"
      </p>
      <div className="home-button">
        <a className="gh-link" href="https://github.com/Rikhardt90">
          Check out my Github page
        </a>
      </div>
    </div>
  );
};

export default Home;
