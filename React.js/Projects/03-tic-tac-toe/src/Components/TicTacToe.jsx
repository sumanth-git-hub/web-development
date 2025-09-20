import React, { useState } from "react";
import { useRef } from "react";

let storeData = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
let box0 = useRef(null)
let box1 = useRef(null)
let box2 = useRef(null)
let box3 = useRef(null)
let box4 = useRef(null)
let box5 = useRef(null)
let box6 = useRef(null)
let box7 = useRef(null)
let box8 = useRef(null)

const boxesArray = [box0,box1,box2,box3,box4,box5,box6,box7,box8]

  function toggleFunction(e, num) {
    console.log(num);
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<i class="fa-solid fa-x xIcon"></i>`;
      storeData[num] = "X";
      // setCount(++count)
      console.log("Odd Number");
    } else {
      e.target.innerHTML = `<i class="fa-regular fa-circle circleIcon"></i>`;
      storeData[num] = "O";
      // setCount(++count)
      console.log("Even Number");
    }
    setCount(count + 1);
    checkWin();
  }

  const checkWin = () => {
    if (
      storeData[0] === storeData[1] &&
      storeData[1] === storeData[2] &&
      storeData[2] !== ""
    ) {
      won(storeData[2]);
    } else if (
      storeData[3] === storeData[4] &&
      storeData[4] === storeData[5] &&
      storeData[5] !== ""
    ) {
      won(storeData[5]);
    } else if (
      storeData[6] === storeData[7] &&
      storeData[7] === storeData[8] &&
      storeData[8] !== ""
    ) {
      won(storeData[8]);
    } else if (
      storeData[0] === storeData[3] &&
      storeData[3] === storeData[6] &&
      storeData[6] !== ""
    ) {
      won(storeData[6]);
    } else if (
      storeData[1] === storeData[4] &&
      storeData[4] === storeData[7] &&
      storeData[7] !== ""
    ) {
      won(storeData[7]);
    } else if (
      storeData[2] === storeData[5] &&
      storeData[5] === storeData[8] &&
      storeData[8] !== ""
    ) {
      won(storeData[8]);
    } else if (
      storeData[0] === storeData[4] &&
      storeData[4] === storeData[8] &&
      storeData[8] !== ""
    ) {
      won(storeData[8]);
    } else if (
      storeData[2] === storeData[4] &&
      storeData[4] === storeData[6] &&
      storeData[6] !== ""
    ) {
      won(storeData[6]);
    }
  };

  function won(winner) {
    setLock(true);
    if (winner === "X") {
      titleRef.current.innerHTML = `Congratulations: <i class="fa-solid fa-x xIcon"></i> Won`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <i class="fa-regular fa-circle circleIcon"></i> Won`;
    }
  }

  function resetGame() {
    setLock(false)
    storeData = ["", "", "", "", "", "", "", "", ""];
    boxesArray.map((box) => box.current.innerHTML = "");
    titleRef.current.innerHTML = "Well Played, Play Again!"
  }

  return (
    <div className="ticTackSection">
      <h2>
        Tic Tac Toe Game in <span className="reactColor">React</span>
      </h2>
      <h3 ref={titleRef}></h3>
      <div className="blockContainer">
        <div className="rows0">
          <div className="boxes" ref={box0} onClick={(e) => toggleFunction(e, 0)}></div>
          <div className="boxes" ref={box1} onClick={(e) => toggleFunction(e, 1)}></div>
          <div className="boxes"  ref={box2}onClick={(e) => toggleFunction(e, 2)}></div>
        </div>
        <div className="rows1">
          <div className="boxes" ref={box3} onClick={(e) => toggleFunction(e, 3)}></div>
          <div className="boxes" ref={box4} onClick={(e) => toggleFunction(e, 4)}></div>
          <div className="boxes" ref={box5} onClick={(e) => toggleFunction(e, 5)}></div>
        </div>
        <div className="rows2">
          <div className="boxes" ref={box6} onClick={(e) => toggleFunction(e, 6)}></div>
          <div className="boxes" ref={box7} onClick={(e) => toggleFunction(e, 7)}></div>
          <div className="boxes" ref={box8} onClick={(e) => toggleFunction(e, 8)}></div>
        </div>
      </div>
      <button onClick={() => {
        resetGame()
      }} className="resetButton">Reset</button>
    </div>
  );
};

export default TicTacToe;
