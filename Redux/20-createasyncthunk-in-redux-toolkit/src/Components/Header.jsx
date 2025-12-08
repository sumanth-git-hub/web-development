import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAsyncProductData } from '../store/Slice/productsSlice'
import { fetchAsyncCartData } from '../store/Slice/itemsCartSlice'

const Header = () => {

  const cartItems = useSelector((state) =>  state.cartItems.list)
  // console.log(cartItems)
  const cartItemsCount = cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0)
  const wishItemsCount = useSelector((state) => state.wishList.length)
  // const [productsListState, setProductListState] = useState("")
  const dispatch = useDispatch()


  useEffect(()=> {

    // dispatch({
    //   type: 'call/makeApiCall',
    //   payload: {
    //     url: 'products',
    //     onSuccess: updateAllProducts.type,
    //     onLoadHandle: fetchProducts.type,
    //     onHandleError: handleError.type
    //   }
    // })
    // dispatch({
    //   type: 'call/makeApiCall',
    //   payload: {
    //     url: 'carts/5',
    //     onSuccess: updateCartItems.type,
    //     onLoadHandle: addLoadingCart.type,
    //     onHandleError: fetchCartError.type
    //   }
    // })

    // thunk middleware action creators

    // dispatch(thunkProductActionCreator())
    dispatch(fetchAsyncProductData())
    // dispatch(thunkCartActionCreator())
    dispatch(fetchAsyncCartData())
  }
  ,[])

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