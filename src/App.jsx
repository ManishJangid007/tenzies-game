import React, {useState, useEffect} from "react";
import Dice from "./components/Dice";
import Instructions from "./components/Instructions";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import RollCounter from "./components/RollCounter";
import Timer from "./components/Timer";
import { useStopwatch } from "react-timer-hook";
import "./App.css";

export default function App() {
  const timer = useStopwatch({autoStart: false});

  const formatedTime = () => `${timer.hours <= 9 ? '0'+timer.hours : timer.hours} :
  ${timer.minutes <= 9 ? '0'+timer.minutes : timer.minutes} :
  ${timer.seconds <= 9 ? '0'+timer.seconds : timer.seconds}`

  const [dice, setDice] = useState(() => getNewDiceArray());
  const [tenzies, setTenzies] = useState(false);
  const [rollCount, setRollCount] = useState(0);
  const [time, setTime] = useState(() => formatedTime());

  useEffect(() => {
    setTime(formatedTime());
    tenzies && timer.pause(); 
  }, [timer.seconds])

  useEffect(() => {
    dice.every(die => 
      die.isHeld && 
      die.value === dice[0].value
    ) && setTenzies(true);
  }, [dice])

  function getNewDiceArray() {
    const newDiceArray = [];
    while (newDiceArray.length <= 14) newDiceArray.push({
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid()
    });
    return newDiceArray;
  }

  function heldDice(id) {
    setDice(prevDie => 
      prevDie.map(dice => 
        dice.id === id ? 
          {...dice, isHeld: !dice.isHeld} :
          dice
        )
      );
  }

  function updateDice() {
    setRollCount(prevCount => prevCount + 1);
    rollCount === 0 && timer.start();
    setDice(prevDie => 
      prevDie.map(dice => 
        dice.isHeld ?
          dice :
          {...dice, value: Math.floor(Math.random() * 6) + 1}
      )
    );
  }

  function resetGame() {
    timer.reset(undefined, false);
    setTime("00:00:00");
    setDice(getNewDiceArray());
    setTenzies(false);
    setRollCount(0);
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <div className="main--toprow">
        <Timer time={time} />
        <RollCounter value={rollCount} />
      </div>
      <Instructions />
      <div className="dice--grid">
        {dice.map(die => <Dice
          key={die.id}
          heldDice={() => heldDice(die.id)}
          value={die.value} 
          isHeld={die.isHeld}
        />)}
      </div>
      <button onClick={tenzies ? resetGame : updateDice} className="main--rollbtn">{tenzies ? "New Game" : "Roll"}</button>
      {tenzies && <h2 className="main--won--text">You Won !</h2>}
    </main>
  )
}