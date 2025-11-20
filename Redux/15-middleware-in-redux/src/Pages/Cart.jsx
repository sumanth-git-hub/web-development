import React from 'react'
import CartItem from '../Components/CartItem'
import { useSelector } from 'react-redux'

export default function Cart() {

  const cartItems = useSelector((state) => {
    return state.cartItems
  })
  const cartItemsCount = cartItems.reduce((accumulator, currentItem) => accumulator + (currentItem.quantity * currentItem.price), 0)

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
        {cartItems.map(({ productId, title, rating, price, image, quantity }) => (
          <CartItem
            key={productId}
            productId={productId}
            title={title}
            price={price}
            quantity={quantity}
            image={image}
            rating={rating}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">&#36;{Math.ceil(cartItemsCount)}</div>
        </div>
      </div>
    </div>
  )
}