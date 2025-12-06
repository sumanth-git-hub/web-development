import React from 'react'
import CartItem from '../Components/CartItem'
import { useSelector } from 'react-redux'
import { createSelectorOfExportCartItems, exportAddLoadEffectOnCart, exportHandleErrorOnCart } from '../store/Slice/itemsCartSlice'

export default function Cart() {

  const cartItems = useSelector(createSelectorOfExportCartItems)
  // console.log(cartItems)
  // console.log(cartItems)
  const cartItemsCount = cartItems.reduce((accumulator, currentItem) => accumulator + (currentItem.quantity * currentItem.price), 0)
  const addLoadEffectOnCart = useSelector(exportAddLoadEffectOnCart)
  const handleErrorOnCart = useSelector(exportHandleErrorOnCart)
  return (
    addLoadEffectOnCart ? <h2 style={{textAlign: 'center'}}>Loading...</h2> : handleErrorOnCart ? <h2 style={{textAlign: 'center'}}>Something went wrong!!</h2> :
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItems.map(({ id, title, rating, price, image, quantity }) => (
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
          <div className="total">&#36;{Math.ceil(cartItemsCount)}</div>
        </div>
      </div>
    </div>
  )
}