import React from "react";
import "./Header.css";

const Header = props => (
  // <div className="header">
  //   <div className="title">{props.children}</div>
  //   <div className="scores">
  //     Score: {props.score} Highscore: {props.highscore}
  //   </div>
  // </div>




<nav class="navbar" className="header">
  <ul>
    <li class="brand" className="title"><a href="/">{props.children}</a></li>
    <li class="scores">You guessed incorrectly!</li>
    <li class="scores">You guessed correctly!</li>

    <li>Score: {props.score} | Top Score: {props.highscore} </li>
    </ul>
</nav>

);

export default Header;