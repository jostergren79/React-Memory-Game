import React from "react";
import "./Header.css";

const Header = props => (



<div>
  <nav class="navbar">
    <ul>
      <li class="brand">
        <a href="/">Clicky Game</a>
        </li>
        <li class="">You guessed correctly!</li>
        <li>Score: {props.score} | High Score: {props.highscore}</li>
        </ul>
        </nav>

        <header class="header">
          <h1>Clicky Game!</h1>
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
          </header>

</div>

);

          
         



export default Header;