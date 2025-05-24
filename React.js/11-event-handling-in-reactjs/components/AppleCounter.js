import AppleBasket from "./AppleBasket";
import ButtonsComponent from "./Buttons";
import LeftArrow from "../assets/images/arrow-left-solid.svg";
import RightArrow from "../assets/images/arrow-right-solid.svg";

const totalAppleCounts = 10;

let rightBasketApples = 0;
let leftBasketApples = totalAppleCounts - rightBasketApples;

const AppleCounter = ({ AddClass }) => {
  const leftArrowClick = () => {
    if(rightBasketApples > 0){
      rightBasketApples--;
      leftBasketApples++;
      console.log(leftBasketApples);
      console.log(rightBasketApples);
    }
  };
  const rightArrowClick = () => {
    if(leftBasketApples > 0){
      leftBasketApples--;
      rightBasketApples++;
      console.log(leftBasketApples);
      console.log(rightBasketApples);
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
      <p
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
      </p>
    </>
  );
};

export default AppleCounter;
