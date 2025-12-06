import { createStore, combineReducers, configureStore } from "@reduxjs/toolkit";
import  productsReducerTest from "./Slice/productsSlice";
import itemsCartReducerTest from "./Slice/itemsCartSlice";
import wishListReducerTest from "./Slice/wishListSlice";
import customMiddleware from "./middleware/customMiddleware";



export const store = configureStore({reducer: {
  products: productsReducerTest,
  cartItems: itemsCartReducerTest,
  wishList: wishListReducerTest,
},
    middleware: () => {
    return  [customMiddleware]
    }
});
