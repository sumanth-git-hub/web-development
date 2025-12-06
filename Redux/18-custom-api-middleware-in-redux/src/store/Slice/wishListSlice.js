import { createSlice } from "@reduxjs/toolkit";

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