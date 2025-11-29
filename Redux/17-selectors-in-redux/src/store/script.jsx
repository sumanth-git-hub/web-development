import { createStore, combineReducers, configureStore } from "@reduxjs/toolkit";
import  productsReducerTest from "./Slice/productsSlice";
import itemsCartReducerTest from "./Slice/itemsCartSlice";
import wishListReducerTest from "./Slice/wishListSlice";
import testScript from "../Pages/testScript";
import logger from "./middlewareFunction";



export const store = configureStore({reducer: {
  products: productsReducerTest,
  cartItems: itemsCartReducerTest,
  wishList: wishListReducerTest,
},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});
