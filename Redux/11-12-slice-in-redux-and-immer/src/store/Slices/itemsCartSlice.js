import { produce } from "immer";

// action types
const ADD_ITEMS_TO_CART = "cart/AddItem";
const REMOVE_ITEMS = "cart/RemoveItem";
const INCREASE_QUANTITY = "cart/increaseQuantity";
const DECREASE_QUANTITY = "cart/decreaseQuantity";


//action creators
export function AddToCart(productDetails){
  return ({type: ADD_ITEMS_TO_CART, payload: {...productDetails}})
}
export function removeFromCart(productId){
  return ({type: REMOVE_ITEMS, payload: {productId}})
}
export function increaseQuantity(productId, quantity = 1){
  return ({type: INCREASE_QUANTITY, payload: {productId, quantity}})
}
export function decreaseQuantity(productId, quantity = 1){
  return ({type: DECREASE_QUANTITY, payload: {productId, quantity}})
}

// reducer
export function itemsCartReducerTest(originalState = [], action) {
  return produce(originalState, (state) => {
          const existingCartItemIndex = state.findIndex((findExisting) => findExisting.productId === action.payload.productId)
    // console.log(state)
    switch (action.type) {
    case ADD_ITEMS_TO_CART:
      if(existingCartItemIndex !== -1){
        // console.log(existingCartItemIndex)
        state[existingCartItemIndex].quantity += 1
        return state
      }
      state.push({...action.payload, quantity: 1})
      // return state
      break
    case REMOVE_ITEMS:
      state.splice(existingCartItemIndex, 1)
      return state
      // return [
      //   ...state.filter(
      //     (removeItem) => removeItem.productId !== action.payload.productId
      //   ),
      // ];
      break
    case INCREASE_QUANTITY:
      state[existingCartItemIndex].quantity += 1
      // return state
      // return [
      //   ...state.map((increaseQuantity) => {
      //     if (increaseQuantity.productId === action.payload.productId) {
      //       return {
      //         ...increaseQuantity,
      //         quantity: increaseQuantity.quantity + action.payload.quantity,
      //       };
      //     }
      //     return increaseQuantity;
      //   }),
      // ];
      break
    case DECREASE_QUANTITY:
      state[existingCartItemIndex].quantity -= 1
      if(state[existingCartItemIndex].quantity === 0){
        state.splice(existingCartItemIndex, 1)
      }
      // return state
      // return [
      //   ...state
      //     .map((decreaseQuantity) => {
      //       if (decreaseQuantity.productId === action.payload.productId) {
      //         return {
      //           ...decreaseQuantity,
      //           quantity: decreaseQuantity.quantity - action.payload.quantity,
      //         };
      //       }
      //       return decreaseQuantity;
      //     })
      //     .filter((deleteObject) => deleteObject.quantity > 0),
      // ];
    // default:
    //   return state;
  }
  return state
  })
}
