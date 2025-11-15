// action types
export const ADD_ITEMS_TO_WISHLIST = "wishList/AddItem";
export const REMOVE_WISHLIST_ITEMS = "wishList/RemoveItems";

// action creators
export function addToWishList(productDetails) {
  return ({type: ADD_ITEMS_TO_WISHLIST, payload: {...productDetails, quantity: 1}})
}
export function removeFromWishList(productId) {
  return ({type: REMOVE_WISHLIST_ITEMS, payload: {productId}})
}

export function wishListReducerTest(state = [], action) {
  switch (action.type) {
    case ADD_ITEMS_TO_WISHLIST:
      const existingWishListItem = state.find((findExistingWish) => findExistingWish.productId === action.payload.productId)
      console.log(existingWishListItem)
      if(existingWishListItem){
        return state.map((findItem) => {
          return findItem.productId === existingWishListItem.productId ? {...findItem, quantity: findItem.quantity + 1} : findItem
        })
      }
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
