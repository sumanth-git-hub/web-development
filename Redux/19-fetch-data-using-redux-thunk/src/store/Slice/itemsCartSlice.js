import { createSelector, createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
// action types
// const ADD_ITEMS_TO_CART = "cart/AddItem";
// const REMOVE_ITEMS = "cart/RemoveItem";
// const INCREASE_QUANTITY = "cart/increaseQuantity";
// const DECREASE_QUANTITY = "cart/decreaseQuantity";

//action creators
// export function AddToCart(productDetails) {
//   return { type: ADD_ITEMS_TO_CART, payload: { ...productDetails } };
// }
// export function removeFromCart(productId) {
//   return { type: REMOVE_ITEMS, payload: { productId } };
// }
// export function increaseQuantity(productId, quantity = 1) {
//   return { type: INCREASE_QUANTITY, payload: { productId, quantity } };
// }
// export function decreaseQuantity(productId, quantity = 1) {
//   return { type: DECREASE_QUANTITY, payload: { productId, quantity } };
// }

// reducer
/*
export function itemsCartReducerTest(originalState = [], action) {
  return produce(originalState, (state) => {
    const existingCartItem = state.findIndex(
      (findExisting) => findExisting.productId === action.payload.productId
    );
    switch (action.type) {
      case ADD_ITEMS_TO_CART:
        console.log(existingCartItem);
        if (existingCartItem !== -1) {
          state[existingCartItem].quantity += 1;
          return state;
        }
        state.push({ ...action.payload, quantity: 1 });
        break;
      case REMOVE_ITEMS:
        state.splice(existingCartItem, 1);
        break;
      case INCREASE_QUANTITY:
        state[existingCartItem].quantity += 1;
        break;
      case DECREASE_QUANTITY:
        state[existingCartItem].quantity -= 1;
        if (state[existingCartItem].quantity <= 0) {
          state.splice(existingCartItem, 1);
          return state;
        }
    }
    return state;
  });
}
*/

const findItemIndex = (state, action) =>
  state.list.findIndex(
    (findExisting) => findExisting.productId === action.payload.productId
  );

const slice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    list: [],
    error: ''
  },
  reducers: { // converted the switch case into object format
    fetchCartItems(state, action){
      state.loading = false
       state.list = action.payload.products
    },
    handleLoadCart(state, action){
      state.loading = true
    },
    handleCartError(state, action){
    state.loading = false
    state.error = action.payload || 'Something went wrong!'
    },
    AddToCart(state, action) {
      const existingCartItem = findItemIndex(state, action);
      if (existingCartItem !== -1) {
        state.list[existingCartItem].quantity += 1;
        // return state;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const existingCartItem = findItemIndex(state, action);
      state.list.splice(existingCartItem, 1);
    },
    increaseQuantity(state, action) {
      const existingCartItem = findItemIndex(state, action);
      state.list[existingCartItem].quantity += 1;
    },
    decreaseQuantity(state, action) {
      const existingCartItem = findItemIndex(state, action);
      state.list[existingCartItem].quantity -= 1;
      if (state.list[existingCartItem].quantity <= 0) {
        state.list.splice(existingCartItem, 1);
        // return state;
      }
    },
  },
});
// console.dir(slice.reducer)
export default slice.reducer;
export const { AddToCart, removeFromCart, increaseQuantity, decreaseQuantity, fetchCartItems, handleLoadCart, handleCartError} =
  slice.actions;

export const exportAddLoadEffectOnCart = ((state) => state.cartItems.loading)
export const exportHandleErrorOnCart = ((state) => state.cartItems.error)
 const exportCartItems = (((products, cartItems) => {
  return  cartItems.list.map(({productId, quantity}) => {
   const newCartSection =  products.list.find((findProductDetails) => (findProductDetails.id === productId))
    return {...newCartSection, quantity}
    }).filter(({title}) => title)
  }))

//  export const createSelectorOfExportCartItems = createSelector([
//     (state) => state.products,
//     (state) => state.cartItems
//   ],exportCartItems)

 export const createSelectorOfExportCartItems = createSelector([
    (state) => state.products,
    (state) => state.cartItems
  ],exportCartItems)


  // thunk action creator
  export const exportThunkMiddlewareCartData = () => (dispatch) => {
        dispatch(handleLoadCart())
         fetch(`https://fakestoreapi.com/carts/5`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(fetchCartItems(data))
        }).catch(() => {
            dispatch(handleCartError())
        })
      }