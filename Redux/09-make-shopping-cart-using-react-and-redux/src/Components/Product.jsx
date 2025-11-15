import { useDispatch } from "react-redux"
import { AddToCart } from "../store/itemsCartReducer"
import { addToWishList } from "../store/wishListReducer"


export default function ProductComponent({ title, rating, price, image, productId }) {

    const dispatch = useDispatch()
    // console.log(dispatch)
        

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{rating.rate} ★ ★ ★ ★</p>
        <p className="price">{price}</p>
      </div>
      <div className="cta-container">
        <button onClick={() => {
            dispatch(AddToCart({title, rating, price, image, productId})) 
        }}>Add to Cart</button>
        <button onClick={() => {
          dispatch(addToWishList({title, rating, price, image, productId}))
        }}>Add to Wish List</button>
      </div>
    </div>
  )
}
