import React, { useEffect, useState } from "react";
import "./App.css";
import { quizData } from "./Assets/quiz";
import Select from "react-select";

function App() {
  const allData = quizData;
  const allAnswers = [];
  useEffect(() => {
    CreateAnswerData(); //run the select array
  }, []);

  const [gameData, setGameData] = useState({
    //for the game being currently played
    Q: "Start",
    A: "Start",
  });
  const [answerData, setAnswerData] = useState();

  let answer;

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

  const CreateAnswerData = () => {
    //map the data to an array of value label objects
    const list = allData.map((item) => ({ value: item.A, label: item.A }));
    //  sort by String property ASCENDING (A - Z)
    const listSorted = [...list].sort((a, b) => (a.value > b.value ? 1 : -1));
    console.log("CreateSelectData list", listSorted);
   setAnswerData(listSorted); //pass to the state
  };

  //for the dropdown select https://blog.logrocket.com/getting-started-with-react-select/
  const selectCustomStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid green",
      color: state.isSelected ? "yellow" : "black",
      backgroundColor: state.isSelected ? "green" : "white",
      padding: "0px",
    }),
  };

  const newplaceholder = () => {
    return answer ? "Select an Answer " + answer : "Select an Answer";
  };

  const handleAnswerChange = (e) => {
    console.log(" handleAnswerChange Answer Selected!!", e.value);
    answer = e.value;
  };

  return (
    <div className='App'>
      <div className='row'>
        <div className='col-sm'>
          <button
            className='buttonSubmit btn btn-default'
            onClick={onClickHandlerNewGame}
          >
            Choose a random Question
          </button>
        </div>
        <div className='col-sm'>
          <Select
            styles={selectCustomStyles}
            options={answerData}
            className='selectDropDownStyle'
            value={answer}
            onChange={handleAnswerChange}
            placeholder={newplaceholder()} //'Select the place'
            controlShouldRenderValue={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
