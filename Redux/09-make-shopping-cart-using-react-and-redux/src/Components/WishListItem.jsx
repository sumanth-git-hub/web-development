import React from 'react'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../store/itemsCartReducer'
import { removeFromWishList } from '../store/wishListReducer'

const WishListItem = ({title, rating, price, imageUrl, productId }) => {

    const dispatch = useDispatch()

  return (
     <div className="product">
         <div className="product-image">
           <img src={imageUrl} alt={title} />
         </div>
         <div className="title-container">
           <h3>
             <a href="#">{title}</a>
           </h3>
         </div>
         <div className="price-rating-container">
           <p className="rating">{rating.rate} ★ ★ ★ ★</p>
           <p className="price">&#36;{price}</p>
         </div>
         <div className="cta-container">
           <button onClick={() => {
                dispatch(AddToCart({ title, rating, price, imageUrl, productId }))
           }}>Add to Cart</button>
           <button onClick={() => {
            dispatch(removeFromWishList(productId))
           }}>Remove from Wish List</button>
         </div>
       </div>
  )
}

export default WishListItem