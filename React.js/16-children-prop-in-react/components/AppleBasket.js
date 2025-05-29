import React, { useState } from "react";
import Buttons from "./Buttons";
import leftArrow from "url:../assets/arrow-left-solid.svg";
import rightArrow from "url:../assets/arrow-right-solid.svg";
import AppleCounter from "./AppleCounter";

export default function () {
  const totalAppleCounts = "10";

  const [rightAppleCounts, setRightAppleCount] = useState(0);
  const [leftAppleCounts, setLeftAppleCounts] = useState(
    totalAppleCounts - rightAppleCounts
  );
  // const [count, setCount] = useState(0);  //destructured way

  // const myCounts = useState(0)  //normal way to declare variables
  // console.log(myCounts[1](myCounts[0] + 1))

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginBlock: "20px",
        }}
      >
        Children Prop in React
      </h1>
      <section className="apple-basket-container">
        <AppleCounter
          appleCounts={leftAppleCounts + " "}
          basketNo={"Basket 1"}
        />
        <Buttons
          imgUrl={leftArrow}
          passChildren={"Left Arrow"}
          clickFunction={(e) => {
            if(rightAppleCounts > 0){
              setLeftAppleCounts(leftAppleCounts + 1);
              setRightAppleCount(rightAppleCounts - 1);
            }
          }}
        ></Buttons>
        <Buttons
          imgUrl={rightArrow}
          passChildren={"Right Arrow"}
          clickFunction={(e) => {
            if(leftAppleCounts > 0){
              setLeftAppleCounts(leftAppleCounts - 1);
              setRightAppleCount(rightAppleCounts + 1);
            }
          }}
        ></Buttons>
        <AppleCounter
          appleCounts={rightAppleCounts + " "}
          basketNo={"Basket 2"}
        />
      </section>
    </>
  );
}
