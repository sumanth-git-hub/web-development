import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../store/Slice/itemsCartSlice'

export default function CartItem({ title, rating, price, image, quantity, productId }) {

const dispatch = useDispatch()

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={() => {
          dispatch(decreaseQuantity({productId}))
        }}>-</button>
        <span>{quantity}</span>
        <button onClick={() => {
        dispatch(increaseQuantity({productId})) }}>+</button>
        <i className="fa-solid fa-circle-xmark" onClick={() => {
          dispatch(removeFromCart({productId}))
        }}></i>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  )
}