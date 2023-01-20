import React from "react";
import "../styles/Navbar.scss";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#000000") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div>
      <header>
        <nav
          style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s",
          }}
        >
          <img
            src="https://res.cloudinary.com/dbamkolrf/image/upload/v1669286414/React-portfolio/icons/40381_2_wozpgq.png"
            alt="logo"
          />
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="home">
                HOME
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="work">
                WORK
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                CONTACT ME
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
