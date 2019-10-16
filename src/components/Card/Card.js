import React from "react";
import "./Card.css";

const Card = props => (

  <div className="container">
<<<<<<< HEAD
   
   
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
=======
    <div className="card" onClick={() => props.clickCount(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
>>>>>>> 3e562b4e3a570b2f6d94b06d7ff13dc30d2a59c9
    </div>
  </div>
 
);

export default Card;