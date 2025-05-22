import React from "react";
import { createRoot } from "react-dom/client";
import styles from "./style.css";

function CreateComponent(props) {
  const { passKey, image, title, brand, price } = props;
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

function card() {
  return <h2>Hello World!!</h2>;
}

// appendContainer.render({
//   $$typeof: Symbol.for("react.element"),
//   type: createComponent,
//   ref: null,
//   props: {

//   }
// });

/*
// by using the react.createElement method is used 

appendContainer.render(
  React.createElement(createComponent, {
    price: 1000,
    image: 'https://media.zigcdn.com/media/model/2023/Mar/new-virtus.jpg',
    title: 'Virtus GT',
    brand: 'Volkswagen',
    passKey: 2
  })
);
*/

/*
// by using the JSX we can create the component like below

appendContainer.render(
  <CreateComponent
    title="Virtus GT"
    image="https://media.zigcdn.com/media/model/2023/Mar/new-virtus.jpg"
    brand="Volkswagen"
    price="1000"
    passKey = '1'
  />
);
*/

fetch("https://dummyjson.com/products/category/smartphones")
  .then((response) => response.json())
  .then((data) => {
    appendContainer.render(
      <div className="second-container">
        {data.products.map((product) => {
          return (
            <CreateComponent
              title={product.title}
              brand={product.brand}
              price={product.price}
              image={product.thumbnail}
              key={product.id}
            />
          );
        })}
      </div>
    );
  });
