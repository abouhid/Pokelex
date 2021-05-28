import React from "react";
import style from "../styles/pokePage.module.css";
import charmander from "../images/charmander.png";
import squirtle from "../images/squirtle.png";
import bulbasaur from "../images/bulbasaur.png";

const Footer = () => {
  return (
    <footer className={style.footer} style={{ color: "white" }}>
      <img src={bulbasaur} alt="bulbasaur" />
      <img src={squirtle} alt="squirtle" />
      <img src={charmander} alt="charmander" />
      <div>Gotta Catch em All!</div>
      <img src={charmander} alt="charmander" />
      <img src={squirtle} alt="squirtle" />
      <img src={bulbasaur} alt="bulbasaur" />
    </footer>
  );
};

export default Footer;
