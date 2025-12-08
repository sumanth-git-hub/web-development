import { createStore, combineReducers, configureStore } from "@reduxjs/toolkit";
import  productsReducerTest from "./Slice/productsSlice";
import itemsCartReducerTest from "./Slice/itemsCartSlice";
import wishListReducerTest from "./Slice/wishListSlice";
import testScript from "../Pages/testScript";
import logger from "./middleware/middlewareFunction";
import customMiddleware from "./middleware/customMidddleware";
import funcMiddleware from "./middleware/func";



export const store = configureStore({reducer: {
  products: productsReducerTest,
  cartItems: itemsCartReducerTest,
  wishList: wishListReducerTest,
},
    // middleware: () => {
    //   return [ logger, customMiddleware, funcMiddleware]
    // }

    // middleware: (getDefaultMiddleware) => {
    //   return [...getDefaultMiddleware(), customMiddleware, logger]
    // }
});
