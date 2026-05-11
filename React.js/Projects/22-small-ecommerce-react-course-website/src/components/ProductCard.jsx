import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export const ProductCard = ({product}) => {
  const {cartItems, addToCart} = useCart()
  const productsInCart = cartItems.find((item) => item.id === product.id)
  const productLabel = productsInCart && `(${productsInCart.quantity})` 
  return (
    <div className="product-card">
                    <img className="product-card-image" src={product.image} alt= {product.name} />
                    <div className="product-card-content">
                    <h3 className="product-card-name">{product.name}</h3>
                    <p className="product-card-price">${product.price}</p>
                    <div className="product-card-actions">
                        <Link className="btn btn-primary" to={`/products/${product.id}`}>View Details</Link>
                        <button className="btn btn-secondary" onClick={() => addToCart(product.id)}>Add to Cart {productLabel}</button>
                    </div>
                    </div>
            </div>
  )
}
