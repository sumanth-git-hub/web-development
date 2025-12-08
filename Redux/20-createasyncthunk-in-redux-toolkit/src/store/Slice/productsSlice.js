import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export function productsReducerTest(state = []) {
//   return state;
// }

    // by using createAsyncThunk we created the action type
  export const fetchAsyncProductData = createAsyncThunk('product/makeApiCall', async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      return response.json()
    } catch (error) {
      throw error
    }
  })
  console.dir(fetchAsyncProductData)

const slice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    list: [],
    error: ''
  },
  // reducers: {
  //   fetchProducts(state){
  //     state.loading = true
  //   },
  //   handleError(state, action){
  //     state.loading = false
  //     state.error = action.payload || "Something went wrong!"
  //   },
  //   updateAllProducts(state, action){
  //     state.list = action.payload;
  //     state.loading = false;
  //     state.error = "";
  //   }
  // },
  extraReducers: (builder)=> {   // data fetching related action creators are added inside the extraReducer to handle the async function
    builder.addCase(fetchAsyncProductData.pending, (state) => {
      state.loading = true
    }).addCase(fetchAsyncProductData.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.error = "";
    }).addCase(fetchAsyncProductData.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload || "Something went wrong!"
    })
  }
})
export default slice.reducer
export const {updateAllProducts, fetchProducts, handleError} = slice.actions

// exported these selectors to home page
export const getAllProductsList = ((state) => state.products.list)
export const getProductListLoading = ((state) => state.products.loading)
export const handleProductListError = ((state) => state.products.error)

// export const thunkProductActionCreator = () => (dispatch) => {
//       dispatch(fetchProducts())
//       try {
//         fetch(`https://fakestoreapi.com/products`)
//         .then((res) => res.json())
//         .then((data) => {
//             dispatch(updateAllProducts(data))
//         })
//         } catch (error) {
//                 dispatch(handleError())
//         }
//     }