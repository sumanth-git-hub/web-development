import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

    const cartItems = useSelector((state) =>  state.cartItems)
  const cartItemsCount = cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0)
  const wishItemsCount = useSelector((state) => state.wishList.length)

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
       <div className='stored-items-in-cart-wish'>
        <Link to="/wishlist" className='wishListNav'>
        <i className={`fa-solid fa-heart`}></i>
         <div className="wishlist-items-count">{wishItemsCount}</div>
        </Link>
         <Link className="cart-icon" to="/cart">
          <i className="fa-solid fa-cart-arrow-down"></i>
          <div className="cart-items-count">{cartItemsCount}</div>
        </Link>
        
       </div>
      </div>
    </header>
  )
}

export default Header