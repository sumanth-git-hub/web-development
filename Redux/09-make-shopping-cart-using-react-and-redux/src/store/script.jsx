import { createStore,combineReducers } from "@reduxjs/toolkit";
import { productsReducerTest } from "./productsReducer";
import { AddToCart, decreaseQuantity, increaseQuantity, itemsCartReducerTest, removeFromCart } from "./itemsCartReducer";
import { addToWishList, removeFromWishList, wishListReducerTest } from "./wishListReducer";


const reducer = combineReducers({
    products: productsReducerTest,
    cartItems: itemsCartReducerTest,
    wishList: wishListReducerTest
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

// store.subscribe(() => {
//   console.log(store.getState());
// });

//dispatch function // It’s a Redux method that dispatches actions to reducers.
// store.dispatch(AddToCart(4, 1))
// store.dispatch(AddToCart(6,1))
// store.dispatch(removeFromCart(6))
// store.dispatch(removeFromCart(4))
// store.dispatch(increaseQuantity(4,2))
// store.dispatch(decreaseQuantity(4,1))
// store.dispatch(decreaseQuantity(4,1))
// store.dispatch(decreaseQuantity(4,1))
// store.dispatch(AddToCart(12,1))
// store.dispatch(addToWishList(10))
// store.dispatch(addToWishList(14))
// store.dispatch(removeFromWishList(14))


