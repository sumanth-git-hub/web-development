import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex(
    (findExisting) => findExisting.productId === action.payload.productId
  );

const slice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    list: [],
    error: ""
  },
  reducers: { 
    addLoadingCart(state) {
      state.loading = true
    },
    updateCartItems(state, action){
      // console.log(action.payload.products)
       state.list = action.payload.products
       state.loading = false
    },
    fetchCartError(state,action) {
      state.loading = false,
      state.error = action.payload || "Something Went Wrong!"
    }
    ,
    AddToCart(state, action) {
      const existingCartItem = findItemIndex(state.list, action);
      if (existingCartItem !== -1) {
        state.list[existingCartItem].quantity += 1;
        // return state;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const existingCartItem = findItemIndex(state.list, action);
      state.list.splice(existingCartItem, 1);
    },
    increaseQuantity(state, action) {
      const existingCartItem = findItemIndex(state.list, action);
      state.list[existingCartItem].quantity += 1;
    },
    decreaseQuantity(state, action) {
      const existingCartItem = findItemIndex(state.list, action);
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
export const { AddToCart, removeFromCart, increaseQuantity, decreaseQuantity, updateCartItems, addLoadingCart, fetchCartError } =
  slice.actions;
