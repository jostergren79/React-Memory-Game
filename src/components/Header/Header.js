import React from "react";
import "./Header.css";

const Header = props => (



<div className="container">
  <nav className="navbar">
    <ul>
      <div className="brand">
        <a href="/">Clicky Game</a>
      </div>

      <div className="answers">{props.answer}</div>
        <div>Score: {props.score} | High Score: {props.highscore}</div>
      </ul>

  </nav>

        <header className="header">
          <h1>Clicky Game!</h1>
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
          </header>

</div>

);

          
export default Header;