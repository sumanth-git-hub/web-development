import React from "react";
import { createRoot } from "react-dom/client";

import style from "./style.css";

/*
//Rendered the multiple elements manually here

const cardContainer = <section className="card-container">
    <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="car image"/>
    <div className="content-section">
    <h3>Mustang</h3>
    <p>Ford</p>
    <p>$ 1000</p>
    </div>
</section>

const allCardsSection = [cardContainer, cardContainer, cardContainer, cardContainer, cardContainer];

const allCardsSection = [cardsFunction(1), cardsFunction(2), cardsFunction(3),cardsFunction(4),cardsFunction(5)]

const appendRoot = createRoot(document.querySelector('#root'));

appendRoot.render(<div className="all-cards-container">{allCardsSection}</div>)

*/

//rendered the multiple elements with the help of API Data

function cardsFunction(passKey, image, title, brand, price) {
  return (
    <section className="card" key={passKey}>
      <img src={image} alt="car image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>$ {price}</p>
      </div>
    </section>
  );
}

const appendRoot = createRoot(document.querySelector('#root'));


fetch("https://dummyjson.com/products/category/smartphones")
  .then((res) => res.json())
  .then((data) => {
    appendRoot.render(
      <div className="all-cards-container">
        {data.products.map((product) => {
          console.log(product);
          return cardsFunction(
            product.id,
            product.thumbnail,
            product.title,
            product.brand,
            product.price
          );
        })}
      </div>
    );
  });
