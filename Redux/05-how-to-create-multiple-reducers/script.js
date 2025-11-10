import { createStore, combineReducers } from "@reduxjs/toolkit";
import { productList } from "./product-list";
import { productReducer } from "./productsReducer";
import { wishListReducer } from "./wishListReducer";
import { cartReducer } from "./cartReducer";

// const initialState = {
//     products: productList,
//     itemsCart: [],
//     wishList: []
// }

const reducer = combineReducers({
    products: productReducer,
    itemsCart: cartReducer,
    wishList: wishListReducer
})

// const ADD_ITEMS_TO_CART = "cart/AddItem"
// const REMOVE_ITEMS = "cart/RemoveItems"
// const INCREASE_QUANTITY = 'cart/increaseQuantity'
// const DECREASE_QUANTITY = 'cart/decreaseQuantity'
// const ADD_ITEMS_TO_WISHLIST = "wishList/AddItem"
// const REMOVE_WISHLIST_ITEMS = "wishList/RemoveItems"


// function reducer(state = initialState, action) {

//     // switch(action.type){
//     //     case ADD_ITEMS_TO_CART : {
//     //         return {...state, itemsCart: [...state.itemsCart, action.payload]}
//     //     }
//     //     case REMOVE_ITEMS : {
//     //         return {...state, itemsCart: [...state.itemsCart.filter((removeCartItem) => removeCartItem.productId !== action.payload.productId)]}
//     //     }
//     //     case INCREASE_QUANTITY : {
//     //         return {...state, itemsCart: [...state.itemsCart.map((increaseCartItem) => {
//     //             if(increaseCartItem.productId === action.payload.productId){
//     //                 return {...increaseCartItem, quantity: increaseCartItem.quantity + 1} 
//     //             }
//     //             return increaseCartItem
//     //         })
//     //     ]}
//     //     }
//     //     case DECREASE_QUANTITY : {
//     //         return {...state, itemsCart: state.itemsCart.map((decreaseCartItem) => {
//     //             if(decreaseCartItem.productId === action.payload.productId){
//     //                 return {...decreaseCartItem, quantity: decreaseCartItem.quantity -1}
//     //             }
//     //             return decreaseCartItem
//     //         }).filter((deleteItem) => deleteItem.quantity > 0)}
//     //     }
//     //     case ADD_ITEMS_TO_WISHLIST : {
//     //         return {...state, wishList: [...state.wishList, action.payload]}
//     //     }
//     //     case REMOVE_WISHLIST_ITEMS : {
//     //         return {...state, wishList: state.wishList.filter((removeWishList) => removeWishList.productId !== action.payload.productId)}
//     //     }

//     //     default :  return state
//     // }
    
// }
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
console.log(store)
console.log(store.getState())

store.dispatch({type: 'cart/AddItem', payload: {productId: 1, quantity: 1}})
store.dispatch({type: 'cart/AddItem', payload: {productId: 12, quantity: 1}})
store.dispatch({type: 'cart/RemoveItems', payload: {productId: 1}})
store.dispatch({type: 'cart/AddItem', payload: {productId: 15, quantity: 12}})
store.dispatch({type: 'cart/increaseQuantity', payload: {productId: 12, quantity: 1}})
store.dispatch({type: 'cart/decreaseQuantity', payload: {productId: 12, quantity: 1}})
store.dispatch({type: 'cart/decreaseQuantity', payload: {productId: 12, quantity: 1}})
store.dispatch({type: 'wishList/AddItem', payload: {productId: 14}})
store.dispatch({type: 'wishList/AddItem', payload: {productId: 16}})
store.dispatch({type: 'wishList/RemoveItems', payload: {productId: 16}})
console.log(store.getState())
