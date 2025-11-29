import React from 'react'
import CartItem from '../Components/CartItem'
import { useSelector } from 'react-redux'
import { cartItemsHandleError, cartItemsLoadingStatus, getAllCartItems } from '../store/Slice/itemsCartSlice'

export default function Cart() {

  // imported the selectors from itemsCartSlice
  const cartItems = useSelector(getAllCartItems)
  const cartItemsCount = cartItems.reduce((accumulator, currentItem) => accumulator + (currentItem.quantity * currentItem.price), 0)
  const loadCartItems = useSelector(cartItemsLoadingStatus)
  const handleCartItemsError = useSelector(cartItemsHandleError)

  return (  
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        { loadCartItems ? <h2 className='align-text-center'>Loading...</h2> : handleCartItemsError ? <h2 className='align-text-center'>{handleCartItemsError}</h2> :
        cartItems.map(({ id, title, rating, price, image, quantity }) => (
          <CartItem
            key={id}
            productId={id}
            title={title}
            price={price}
            quantity={quantity}
            image={image}
            rating={rating.rate}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
         {loadCartItems ||  handleCartItemsError ? "" : <div className="total">&#36;{Math.ceil(cartItemsCount)}</div>}
        </div>
      </div>
    </div>
  )
}