import React from "react";
import { createRoot } from "react-dom/client";
import style from "./style.css";

// ES6 Destructuring method used to resolve the component error when the argument get shuffle 
function createComponent(props) {
    const {key: passKey, image, title, brand, price} = props
  return (
    <section className="reuseable-component" key={passKey}>
      <img src={image} alt={title} />
      <div className="content-section">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>$ {price}</p>
      </div>
    </section>
  );
}

const appendContainer = createRoot(document.getElementById("root"));

// const multipleCards = [createComponent(1), createComponent(2), createComponent(3), createComponent(4), createComponent(5)];

// appendContainer.render(<div className="second-container">{multipleCards}</div>)

fetch("https://dummyjson.com/products/category/smartphones")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.products);
    appendContainer.render(
      <div className="second-container">
        {data.products.map((product) => {
          return createComponent(
            {
            'price': product.price,
            'image': product.thumbnail,
            'title':product.title,
            'brand': product.brand,
            'key': product.id,
        }
          );
        })}
      </div>
    );
  });
