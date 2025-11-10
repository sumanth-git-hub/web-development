export const ADD_ITEMS_TO_CART = "cart/AddItem";
export const REMOVE_ITEMS = "cart/RemoveItem";
export const INCREASE_QUANTITY = "cart/increaseQuantity";
export const DECREASE_QUANTITY = "cart/decreaseQuantity";

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
