import { createStore, combineReducers } from "@reduxjs/toolkit";
import { productsReducerTest } from "./Slices/productsSlice";
import { itemsCartReducerTest } from "./Slices/itemsCartSlice";
import { wishListReducerTest } from "./Slices/wishSlice";
// import { produce } from "immer";

const reducer = combineReducers({
  products: productsReducerTest,
  cartItems: itemsCartReducerTest,
  wishList: wishListReducerTest,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

console.log(store.getState());

// const userDetails = [
//     {
//         userName: "Sumanth",
//         userAge: 26,
//     },
//     {
//         userName: "Sharath",
//         userAge: 20,
//     },
//     {
//         userName: "Suresh",
//         userAge: 45,
//     },
// ]
// console.log(userDetails)

// const newArray = userDetails.map((changeAge,index) => {
//      console.log(changeAge, index)
//      if(index === 1){
//         return {...changeAge, userAge: 21}
//      }
//      return changeAge
// })

// console.log(newArray)
// console.log(userDetails)

// const newUsers = produce(userDetails, (userCopy) => {
//  userCopy[1].userAge = 21 // it's a copy of your original object
// })
// console.log(newUsers)