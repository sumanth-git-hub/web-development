export const ADD_ITEMS_TO_WISHLIST = "wishList/AddItem";
export const REMOVE_WISHLIST_ITEMS = "wishList/RemoveItems";

export function wishListReducerTest(state = [], action) {
  switch (action.type) {
    case ADD_ITEMS_TO_WISHLIST:
      return [...state, action.payload];
    case REMOVE_WISHLIST_ITEMS:
      return [
        ...state.filter(
          (removeFromWhishList) =>
            removeFromWhishList.productId !== action.payload.productId
        ),
      ];
    default:
      return state;
  }
}
