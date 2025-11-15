import { produce } from "immer";

// action types
export const ADD_ITEMS_TO_WISHLIST = "wishList/AddItem";
export const REMOVE_WISHLIST_ITEMS = "wishList/RemoveItems";

// action creators
export function addToWishList(productDetails) {
  return ({type: ADD_ITEMS_TO_WISHLIST, payload: {...productDetails, quantity: 1}})
}
export function removeFromWishList(productId) {
  return ({type: REMOVE_WISHLIST_ITEMS, payload: {productId}})
}

export function wishListReducerTest(originalState = [], action) {
  return produce(originalState, (state) => {
          const existingWishListItemIndex = state.findIndex((findExistingWish) => findExistingWish.productId === action.payload.productId)
    switch (action.type) {
    case ADD_ITEMS_TO_WISHLIST:
      console.log(existingWishListItemIndex)
      if(existingWishListItemIndex !== -1){
         state[existingWishListItemIndex].quantity += 1
         return state
      }
      state.push({...action.payload})
      break
    case REMOVE_WISHLIST_ITEMS:
      state.splice(existingWishListItemIndex, 1)

  }
  return state
  })
}
