import React, { useState } from "react";
import "./App.css";
import { quizData } from "./Assets/quiz";
import Select from "react-select";

function App() {
  const [gameData, setGameData] = useState({
    //for the game being currently played
    Q: "Start",
    A: "Start",
  });
  const [answerData, setAnswerData] = useState();
  const allData = quizData;

  const onClickHandlerNewGame = () => {
    // console.log("onClickHandlerNewGame", "triggered");
    let length = allData.length;
    let min = 0;
    let max = length;
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    //console.log("rand ", rand);
    //pass the Q and A to the state.
    setGameData({ Q: allData[rand].Q, A: allData[rand].A });
    console.log("gameData ", gameData.Q + " " + gameData.A);
  };

  return (
    <div className='App'>
      <button
        className='buttonSubmit btn btn-default'
        onClick={onClickHandlerNewGame}
      >
        Choose a random Question
      </button>
    </div>
  );
}

export default App;
