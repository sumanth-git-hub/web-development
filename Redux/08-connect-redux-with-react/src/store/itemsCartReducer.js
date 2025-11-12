
// action types
const ADD_ITEMS_TO_CART = "cart/AddItem";
const REMOVE_ITEMS = "cart/RemoveItem";
const INCREASE_QUANTITY = "cart/increaseQuantity";
const DECREASE_QUANTITY = "cart/decreaseQuantity";


//action creators
export function AddToCart(productId, quantity){
  return ({type: ADD_ITEMS_TO_CART, payload: {productId, quantity}})
}
export function removeFromCart(productId){
  return ({type: REMOVE_ITEMS, payload: {productId}})
}
export function increaseQuantity(productId, quantity){
  return ({type: INCREASE_QUANTITY, payload: {productId, quantity}})
}
export function decreaseQuantity(productId, quantity){
  return ({type: DECREASE_QUANTITY, payload: {productId, quantity}})
}

// reducer
export function itemsCartReducerTest(state = [], action) {
  switch (action.type) {
    case ADD_ITEMS_TO_CART:
      return [...state, action.payload];

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
