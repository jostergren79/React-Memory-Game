import React, { useState } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "../src/cards.json";
import "./App.css";


function App () {

const [cardState, setCardState] = useState(cards); 
const [scoreState, setScoreState] = useState(0);
const [highScoreState, setHighScoreState] = useState(0);
const [answerState, setAnswerState] = useState("Click an image to start!")

function clickCount(id) {
  // eslint-disable-next-line
    return cardState.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          setScoreState(scoreState + 1)
          setAnswerState("You guessed correctly!")
          setCardState(cardState.sort(() => Math.random() - 0.5))
        } else {
          if (scoreState > highScoreState) {
          setHighScoreState(scoreState)
<<<<<<< HEAD
          setAnswerState("You have the highest score!")
=======
          setAnswerState("You guessed incorrectly!")
>>>>>>> 3e562b4e3a570b2f6d94b06d7ff13dc30d2a59c9
          }
          cardState.forEach(card => {
          card.count = 0;
          });
<<<<<<< HEAD
          alert(`You guessed incorrectly! \nscore: ${scoreState}`);
          // eslint-disable-next-line
          setCardState(cardState.sort(() => Math.random() - 0.5))
=======
          alert(`Game Over :( \nscore: ${scoreState}`);
          // eslint-disable-next-line
>>>>>>> 3e562b4e3a570b2f6d94b06d7ff13dc30d2a59c9
          setScoreState(0)
          setCardState(cardState.sort(() => Math.random() - 0.5))
        }
<<<<<<< HEAD
return true;
=======
        return true;
>>>>>>> 3e562b4e3a570b2f6d94b06d7ff13dc30d2a59c9
      }
    });
  }

    return (
      <Wrapper>
        <Header answer={answerState} score={scoreState} highscore={highScoreState}>Clicky Game</Header>
        {cardState.map(card => (
          <Card
            clickCount={clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          /> 
        ))}
      </Wrapper>
    );
  
}

export default App;


