import AppleBasket from "./AppleBasket";
import ButtonsComponent from "./Buttons";
import LeftArrow from '../assets/images/arrow-left-solid.svg'
import RightArrow from '../assets/images/arrow-right-solid.svg'

const AppleCounter = ({AddClass}) => {
  return (
    <section className={AddClass}>
      <AppleBasket appleCount={10} basketName={"Basket 1"} />
      <ButtonsComponent
        imageUrl='/arrow-left-solid.a0f2c648.svg'
        className="image-styles"
        alt={"left arrow"}
        hoverButton={"Left Arrow"}
      />
      <ButtonsComponent
        imageUrl='/arrow-right-solid.8716cb6f.svg'
        className="image-styles"
        alt={"right arrow"}
        hoverButton={"Right Arrow"}
      />
      <AppleBasket appleCount={0} basketName={"Basket 2"} />
    </section>
  );
};

export default AppleCounter;
