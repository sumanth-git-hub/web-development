import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

// action types
// export const ADD_ITEMS_TO_WISHLIST = "wishList/AddItem";
// export const REMOVE_WISHLIST_ITEMS = "wishList/RemoveItems";

// action creators
// export function addToWishList(productDetails) {
//   return {
//     type: ADD_ITEMS_TO_WISHLIST,
//     payload: { ...productDetails, quantity: 1 },
//   };
// }
// export function removeFromWishList(productId) {
//   return { type: REMOVE_WISHLIST_ITEMS, payload: { productId } };
// }

//reducer
// export function wishListReducerTest(originalState = [], action) {
//   return produce(originalState, (state) => {
//     const existingWishListItem = state.findIndex(
//       (findExistingWish) =>
//         findExistingWish.productId === action.payload.productId
//     );
//     switch (action.type) {
//       case ADD_ITEMS_TO_WISHLIST:
//         console.log(existingWishListItem);
//         if (existingWishListItem !== -1) {
//           state[existingWishListItem].quantity += 1;
//           return state;
//         }
//         state.push({ ...action.payload });
//         break;
//       case REMOVE_WISHLIST_ITEMS:
//         state.splice(existingWishListItem, 1);
//     }
//     return state;
//   });
// }

const findWishListItemsIndex = (state, action) => state.findIndex((findExistingWish) =>findExistingWish.productId === action.payload.productId);

const slice = createSlice({
  name: 'wishList',
  initialState: [],
  reducers: {
    addToWishList(state, action){
      const existingWishListItem = findWishListItemsIndex(state, action)
      if (existingWishListItem !== -1) {
          state[existingWishListItem].quantity += 1;
          return state;
        } else {
          state.push({ ...action.payload });
        }
    },
    removeFromWishList(state, action){
      const existingWishListItem = findWishListItemsIndex(state, action)
      state.splice(existingWishListItem, 1);
    },
  }
})

export default slice.reducer
export const {addToWishList, removeFromWishList} = slice.actions