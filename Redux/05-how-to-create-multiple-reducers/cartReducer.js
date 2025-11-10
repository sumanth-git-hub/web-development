export const ADD_ITEMS_TO_CART = "cart/AddItem"
export const REMOVE_ITEMS = "cart/RemoveItems"
export const INCREASE_QUANTITY = 'cart/increaseQuantity'
export const DECREASE_QUANTITY = 'cart/decreaseQuantity'

export function cartReducer(state = [], action) {
            switch(action.type){
        case ADD_ITEMS_TO_CART : {
            return [...state, action.payload]
        }
        case REMOVE_ITEMS : {
            return state.filter((removeCartItem) => removeCartItem.productId !== action.payload.productId)
        }
        case INCREASE_QUANTITY : {
            return state.map((increaseCartItem) => {
                if(increaseCartItem.productId === action.payload.productId){
                    return {...increaseCartItem, quantity: increaseCartItem.quantity + 1} 
                }
                return increaseCartItem
            })
        }
        case DECREASE_QUANTITY : {
            return state.map((decreaseCartItem) => {
                if(decreaseCartItem.productId === action.payload.productId){
                    return {...decreaseCartItem, quantity: decreaseCartItem.quantity -1}
                }
                return decreaseCartItem
            }).filter((deleteItem) => deleteItem.quantity > 0)
        }
        default :  return state
    }
}