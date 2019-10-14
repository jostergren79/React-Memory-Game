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
          setAnswerState("You guessed incorrectly!")
          }
          cardState.forEach(card => {
          card.count = 0;
          });
          alert(`Game Over :( \nscore: ${scoreState}`);
          setScoreState(0)
          setCardState(cardState.sort(() => Math.random() - 0.5))
        }
        return true;
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


