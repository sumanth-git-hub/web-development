import { createSlice } from "@reduxjs/toolkit";
import { productList } from "../product-list";

// export function productsReducerTest(state = []) {
//   return state;
// }

const slice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    list: [],
    error: ''
  },
  reducers: {
      addLoadEffect(state) {
      state.loading = true
    },
    fetchProductsFromApi(state, action) {
      state.loading = false
      state.list = action.payload
    },
    handleError(state, action) {
      state.loading = false
      state.error = action.payload || "Something went wrong!"
    }
  }
});
// console.log(slice.reducer)
export default slice.reducer
export const {fetchProductsFromApi, addLoadEffect, handleError} = slice.actions 

export const exportStoredProductList = ((state) => state.products.list)
export const exportLoadingEffect = ((state) => state.products.loading)
export const exportDisplayFetchError = ((state) => state.products.error)

  // thunk action creator
  export const exportThunkMiddlewareProductData = () => (dispatch) => {
        dispatch(addLoadEffect())
         fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(fetchProductsFromApi(data))
        }).catch(() => {
            dispatch(handleError())
        })
      }