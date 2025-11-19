import { createStore, combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducerTest } from "./Slice/productsSlice";
import itemsCartReducerTest from "./Slice/itemsCartSlice";
import wishListReducerTest from "./Slice/wishListSlice";
import testScript from "../Pages/testScript";

// import { produce } from "immer";

// const reducer = combineReducers({
//   products: productsReducerTest,
//   cartItems: itemsCartReducerTest,
//   wishList: wishListReducerTest,
// });

export const store = configureStore({reducer: {
  products: productsReducerTest,
  cartItems: itemsCartReducerTest,
  wishList: wishListReducerTest,
}});

// const userDetails = [
//   {
//     userName: "Sumanth S S",
//     userAge: 26
//   },
//   {
//     userName: "Sharath S S",
//     userAge: 26
//   },
//   {
//     userName: "Suresh",
//     userAge: 48
//   },
// ]

// console.log("Original Object: ",userDetails)

// userDetails[1].userAge = 21 // mutable way of writing


// const updatedUserDetails = userDetails.map((fixAge, index) => {  //immutable state updated
//   if(index === 1){
//     return {...fixAge, userAge: 21}
//   }
//   return fixAge
// })
// console.log(updatedUserDetails)


// const newArray = produce(userDetails, (copiedObject) => { // writing the state like mutable but works behind as immutable with the help of immer library
//   copiedObject[1].userAge = 21
// })
// console.log("Modified Object: ", newArray)

/*

//else if condition

const switchToObject = (a,b) => {
  if(a > b){
    return "A is Greater than B"
  }
  else if (b > a) {
    return "B is Greater than A"
  }
  else if (a === b){
    return "Both are Equal"
  }
  else {
    return "None of the above"
  }
}
*/

/*
// switch case condition
const switchToObject = (a,b) => {
  switch (true) {
    case a > b :
      return "A is Greater than B"
    case b > a : 
    return "B is Greater than A"
    case a === b : 
    return "Both are Equal"
    default:
      return "None of the above"
  }
}
*/

/*

// converted the switch statement to object
const switchToObject = (a,b) => { 

  let key = a > b ? "a > b" : b > a ? "b > a" : a === b ? "a === b" : "default"

  let findAnswer = {
    'a > b' : "A is Greater than B",
    "b > a" : "B is Greater than A",
    "a === b" : "Both are Equal",
    "default" : "None of the above"
  }[key]
  return findAnswer
}
  */

// console.log(switchToObject(4,2))
// console.log(switchToObject(2,4))
// console.log(switchToObject(4,4))
// console.log(switchToObject(0))
