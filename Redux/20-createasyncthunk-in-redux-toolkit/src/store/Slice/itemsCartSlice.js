import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex(
    (findExisting) => findExisting.productId === action.payload.productId
  );

    // by using createAsyncThunk we created the action type
  export const fetchAsyncCartData = createAsyncThunk('cart/makeApiCall', async() => {
        try {
            const response = await fetch('https://fakestoreapi.com/carts/5')
            return response.json()
        } catch (error) {
          throw error
        }
    })

    // console.dir(fetchAsyncCartData)

const slice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    list: [],
    error: ""
  },
  reducers: { 
    // addLoadingCart(state) {
    //   state.loading = true
    // },
    // updateCartItems(state, action){
    //   // console.log(action.payload.products)
    //    state.list = action.payload.products
    //    state.loading = false
    // },
    // fetchCartError(state,action) {
    //   state.loading = false,
    //   state.error = action.payload || "Something Went Wrong!"
    // }
    // ,
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
  // data fetching related action creators are added inside the extraReducer to handle the async function
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncCartData.pending, (state)=> {
      state.loading = true
    }).addCase(fetchAsyncCartData.fulfilled, (state, action) => {
        state.list = action.payload.products
       state.loading = false
    }).addCase(fetchAsyncCartData.rejected, (state, action)=> {
      state.loading = false,
      state.error = action.payload || "Something Went Wrong!"
    })
  }
});
// console.dir(slice.reducer)
export default slice.reducer;
export const { AddToCart, removeFromCart, increaseQuantity, decreaseQuantity, updateCartItems, addLoadingCart, fetchCartError } =
  slice.actions;

// export the selector to cart page and to used memoized selector

  export const getAllCartItems = createSelector( // used to create memoized selectors
  [
    (state) => state.products,
    (state) => state.cartItems
  ], (products, cartItems) => {
    return cartItems.list.map(({ productId, quantity }) => {
        const cartProduct = products.list.find((findProduct) => findProduct.id === productId);
        return { ...cartProduct, quantity };
      })
      .filter(({title}) => title)
  }
);
  export const cartItemsLoadingStatus = ((state) => state.cartItems.loading)
  export const cartItemsHandleError = ((state) => state.cartItems.error)

  // export const thunkCartActionCreator = () => (dispatch) => {
  //     dispatch(addLoadingCart())
  //     try {
  //       fetch(`https://fakestoreapi.com/carts/5`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //           dispatch(updateCartItems(data))
  //       })
  //       } catch (error) {
  //               dispatch(fetchCartError())
  //       }
  //   }

