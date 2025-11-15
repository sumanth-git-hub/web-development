
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
export function itemsCartReducerTest(state = [], action) {
  switch (action.type) {
    case ADD_ITEMS_TO_CART:
      const existingCartItem = state.find((findExisting) => findExisting.productId === action.payload.productId)
      // console.log(existingCartItem)
      if(existingCartItem){
        return state.map((findItem) => {
        return  findItem.productId === existingCartItem.productId ?  {...findItem, quantity: findItem.quantity + 1} :  findItem
          // if(findItem.productId === existingCartItem.productId){
          //   return {...findItem, quantity: findItem.quantity + 1}
          // }
          // return findItem
        })
      }
      return [...state, {...action.payload, quantity: 1}]

    case REMOVE_ITEMS:
      return [
        ...state.filter(
          (removeItem) => removeItem.productId !== action.payload.productId
        ),
      ];

    case INCREASE_QUANTITY:
      return [
        ...state.map((increaseQuantity) => {
          if (increaseQuantity.productId === action.payload.productId) {
            return {
              ...increaseQuantity,
              quantity: increaseQuantity.quantity + action.payload.quantity,
            };
          }
          return increaseQuantity;
        }),
      ];
    case DECREASE_QUANTITY:
      return [
        ...state
          .map((decreaseQuantity) => {
            if (decreaseQuantity.productId === action.payload.productId) {
              return {
                ...decreaseQuantity,
                quantity: decreaseQuantity.quantity - action.payload.quantity,
              };
            }
            return decreaseQuantity;
          })
          .filter((deleteObject) => deleteObject.quantity > 0),
      ];
    default:
      return state;
  }
}
