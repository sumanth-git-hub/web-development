import { createStore,combineReducers } from "@reduxjs/toolkit";
import { productsReducerTest } from "./productsReducer";
import { itemsCartReducerTest } from "./itemsCartReducer";
import { wishListReducerTest } from "./wishListReducer";



// const initialState = {
//     products: productsReducerTest,
//     cartItems: itemsCartReducerTest,
//     wishList: wishListReducerTest
// }

const reducer = combineReducers({
    products: productsReducerTest,
    cartItems: itemsCartReducerTest,
    wishList: wishListReducerTest
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

store.dispatch({type: 'cart/AddItem', payload: {productId: 4, quantity: 1}})
store.dispatch({type: 'cart/AddItem', payload: {productId: 6, quantity: 1}})
store.dispatch({type: 'cart/RemoveItem', payload: {productId: 6}})
store.dispatch({type: 'cart/increaseQuantity', payload: {productId: 4, quantity: 2}})
store.dispatch({type: 'cart/decreaseQuantity', payload: {productId: 4, quantity: 1}})
store.dispatch({type: 'cart/decreaseQuantity', payload: {productId: 4, quantity: 1}})
store.dispatch({type: 'cart/decreaseQuantity', payload: {productId: 4, quantity: 1}})
store.dispatch({type: 'cart/AddItem', payload: {productId: 12, quantity: 1}})
store.dispatch({type: 'wishList/AddItem', payload: {productId: 10}})
store.dispatch({type: 'wishList/AddItem', payload: {productId: 14}})
store.dispatch({type: 'wishList/RemoveItems', payload: {productId: 14}})
