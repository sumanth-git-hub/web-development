import { createSlice } from "@reduxjs/toolkit";
import { productList } from "../product-list";

// export function productsReducerTest(state = []) {
//   return state;
// }

const slice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    list: [],
    error: ''
  },
  reducers: {
    fetchProducts(state){
      state.loading = true
    },
    handleError(state, action){
      state.loading = false
      state.error = action.payload || "Something went wrong!"
    },
    updateAllProducts(state, action){
      state.list = action.payload;
      state.loading = false;
      state.error = "";
      // return action.payload
    }
  }
})
export default slice.reducer
export const {updateAllProducts, fetchProducts, handleError} = slice.actions

// exported these selectors to header component
export const getAllProductsList = ((state) => state.products.list)
export const getProductListLoading = ((state) => state.products.loading)
export const handleProductListError = ((state) => state.products.error)