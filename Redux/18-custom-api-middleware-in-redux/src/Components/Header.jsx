import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts, handleError, updateAllProducts } from '../store/Slice/productsSlice'
import { productList } from '../store/product-list'
import { useState } from 'react'
import { addLoadingCart, fetchCartError, updateCartItems } from '../store/Slice/itemsCartSlice'

const Header = () => {

  const cartItems = useSelector((state) =>  state.cartItems.list)
  const cartItemsCount = cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0)
  const wishItemsCount = useSelector((state) => state.wishList.length)
  // const [productsListState, setProductListState] = useState("")
  const dispatch = useDispatch()



// Async/Await method to fetch data from API (cleaner and recommended)

// const fetchAPIData = async () => {
//     try {
//         const fetchAPIurl = await fetch('https://fakestoreapi.com/products')
//         const data = await fetchAPIurl.json()
//         console.log(data)
//         dispatch(updateAllProducts(data))
//     } catch (error) {
//         dispatch(handleError())
//     }
// }
// const fetchCartItem = async() => {
//   try {
//       const fetchCartUrl = await fetch('https://fakestoreapi.com/carts/5')
//       const data = await fetchCartUrl.json()
//       console.log(data)
//       dispatch(updateCartItems(data))
//   } catch (error) {
//     dispatch(fetchCartError())
//   }
// }

  useEffect(()=> {

    dispatch({
      type: 'api/makeApiCall',
      payload: {
        url: 'products',
        onSuccess: updateAllProducts.type,
        onLoadHandle: fetchProducts.type,
        onError: handleError.type
      }
    })
    dispatch({
      type: 'api/makeApiCall',
      payload: {
        url: 'carts/5',
        onSuccess: updateCartItems.type,
        onLoadHandle: addLoadingCart.type,
        onError: fetchCartError.type
      }
    })

    // dispatch(fetchProducts())
    // fetchAPIData()
    // dispatch(addLoadingCart())
    // fetchCartItem()
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