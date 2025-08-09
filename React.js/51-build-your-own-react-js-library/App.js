import render from "./react-dom.js";
import React from "./react";

import styles from './App.css'

const GenElement = (
  <div className="container" id="reactApp" title="React App">
    <span>How to write </span>
    {"Hello"} <b>World!</b> <span className="js-section">in JavaScript?</span>
  </div>
);

const carArray = ["VolksWagen", "Skoda", "Honda", "Hyundai"]

// function Card(props){
//     console.log(props)
//     return (
//   <div className="container">
//     <span>Function type </span> 
//         <ul>
//             {
//                 carArray.map((cars) => <li className="list-elements">{cars}</li>)
//             }
//         </ul>
//   </div>
// )
// }

function Card({ title, image, brand, price }) {
  return (
    <div className="card">
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  )
}

fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}
              title={product.title}
              brand={product.brand}
              price={product.price}
              image={product.thumbnail}
            />
          )
        })}
      </div>,
            document.getElementById('root')
    )
  })

console.log(<Card />)
// const nestChild = document.getElementById('root')
// console.log(h1Element)
// nestChild.append(h1Element)

const newElement = <div className="new-element">New Element Created</div>

const rootElement = document.getElementById("root");
// render([GenElement, newElement, "String Element", <Card className="function-element" /> ], rootElement);

// render(<Card className="function-type"></Card>, rootElement)
