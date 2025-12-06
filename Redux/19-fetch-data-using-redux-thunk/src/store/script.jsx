import { createStore, combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducerTest  from "./Slice/productsSlice";
import itemsCartReducerTest from "./Slice/itemsCartSlice";
import wishListReducerTest from "./Slice/wishListSlice";
import logger from "./middleware/middlewareFunction";
import customMiddleware from "./middleware/customMiddleware";
import func from "./middleware/func";



export const store = configureStore({reducer: {
  products: productsReducerTest,
  cartItems: itemsCartReducerTest,
  wishList: wishListReducerTest,
},
    // middleware: () => // without writing this also can run the thunk middleware
    // [func],

    middleware: (getDefaultMiddleware) => { // written a middleware like below to run custom middleware and thunk both
      return [...getDefaultMiddleware(), customMiddleware, logger]
    }
});
