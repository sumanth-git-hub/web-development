import myCreateSlice from "../myCreateSlice";

const findItemIndex = (state, action) =>
  state.findIndex(
    (findExisting) => findExisting.productId === action.payload.productId
  );

// const slice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: { // converted the switch case into object format
//     AddToCart(state, action) {
//       const existingCartItem = findItemIndex(state, action);
//       if (existingCartItem !== -1) {
//         state[existingCartItem].quantity += 1;
//         // return state;
//       } else {
//         state.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeFromCart(state, action) {
//       const existingCartItem = findItemIndex(state, action);
//       state.splice(existingCartItem, 1);
//     },
//     increaseQuantity(state, action) {
//       const existingCartItem = findItemIndex(state, action);
//       state[existingCartItem].quantity += 1;
//     },
//     decreaseQuantity(state, action) {
//       const existingCartItem = findItemIndex(state, action);
//       state[existingCartItem].quantity -= 1;
//       if (state[existingCartItem].quantity <= 0) {
//         state.splice(existingCartItem, 1);
//         // return state;
//       }
//     },
//   },
// });
// console.dir(slice.reducer)



const mySlice = myCreateSlice({
  name: "cart",
  initialState: [],
  reducers: { 
    AddToCart(state, action) {
      const existingCartItem = findItemIndex(state, action);
      if (existingCartItem !== -1) {
        state[existingCartItem].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const existingCartItem = findItemIndex(state, action);
      state.splice(existingCartItem, 1);
    },
    increaseQuantity(state, action) {
      const existingCartItem = findItemIndex(state, action);
      state[existingCartItem].quantity += 1;
    },
    decreaseQuantity(state, action) {
      const existingCartItem = findItemIndex(state, action);
      state[existingCartItem].quantity -= 1;
      if (state[existingCartItem].quantity <= 0) {
        state.splice(existingCartItem, 1);
        // return state;
      }
    },
  },
})

// console.log(mySlice.actions)

export default mySlice.reducer;
export const { AddToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  mySlice.actions;
