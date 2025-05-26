import AppleBasket from "./AppleBasket";
import ButtonsComponent from "./Buttons";
import LeftArrow from "../assets/images/arrow-left-solid.svg";
import RightArrow from "../assets/images/arrow-right-solid.svg";
import { useState } from "react";


// let rightBasketApples = 0;
// let leftBasketApples = totalAppleCounts - rightBasketApples;

const AppleCounter = ({ AddClass }) => {
  const totalAppleCounts = 10;
  const [rightBasketApples, setRightBasketApples] = useState(0)
  const [leftBasketApples, setLeftBasketApples] = useState(totalAppleCounts - rightBasketApples)
  const leftArrowClick = () => {
    if(rightBasketApples > 0){
      setRightBasketApples(rightBasketApples - 1);
      setLeftBasketApples(leftBasketApples + 1);
      console.log("Left Basket Counts", leftBasketApples + 1);
      console.log("Right Basket Counts",rightBasketApples -1);
    }
  };
  const rightArrowClick = () => {
    if(leftBasketApples > 0){
      // leftBasketApples--;
      // rightBasketApples++;
      setLeftBasketApples(leftBasketApples - 1);
      setRightBasketApples(rightBasketApples + 1);
      console.log("Left Basket Counts", leftBasketApples - 1);
      console.log("Right Basket Counts",rightBasketApples + 1);
    }
  };

  return (
    <>
      <section className={AddClass}>
        <AppleBasket appleCount={leftBasketApples} basketName={"Basket 1"} />
        <ButtonsComponent
          imageUrl="/arrow-left-solid.a0f2c648.svg"
          className="image-styles"
          alt={"left arrow"}
          hoverButton={"Left Arrow"}
          clickEvent={leftArrowClick}
        />
        <ButtonsComponent
          imageUrl="/arrow-right-solid.8716cb6f.svg"
          className="image-styles"
          alt={"right arrow"}
          hoverButton={"Right Arrow"}
          clickEvent={rightArrowClick}
        />
        <AppleBasket appleCount={rightBasketApples} basketName={"Basket 2"} />
      </section>
      {/* <p
        style={{
          textAlign: "center",
        }}
      >
        <button onClick={() => {console.log("Unable to do re-render")}}
          style={{
            padding: "10px",
            cursor: "pointer",
            backgroundColor: "#fa1",
            borderRadius: "5px",
            border: "none",
          }}
        >
          Re-Render
        </button>
      </p> */}
    </>
  );
};

export default AppleCounter;
