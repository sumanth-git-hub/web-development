import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addLoadEffect, exportThunkMiddlewareProductData, fetchProductsFromApi, handleError } from '../store/Slice/productsSlice'
import { exportThunkMiddlewareCartData, fetchCartItems, handleCartError, handleLoadCart } from '../store/Slice/itemsCartSlice'
import { fetchMiddlewareData } from '../store/middleware/customMiddleware'

const Header = () => {

    const cartItems = useSelector((state) =>  state.cartItems.list)
  const cartItemsCount = cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0)
  const wishItemsCount = useSelector((state) => state.wishList.length)

  const dispatch = useDispatch()
  
//   const fetchProductsApi =  async () => {
//         try {
//           const apiUrl = await fetch('https://fakestoreapi.com/products')
//         const data = await apiUrl.json()
//         dispatch(fetchProductsFromApi(data))
//         } catch (error) {
//           dispatch(handleError())
//         }
//     }

// const fetchCartApi = async () => {
//   try {
//     const cartApiUrl = await fetch('https://fakestoreapi.com/carts/5')
//     const data = await cartApiUrl.json()
//     // console.log(data.products)
//     dispatch(fetchCartItems(data))
//   } catch (error) {
//     dispatch(handleCartError())
//   }
// }

    // const baseUrl = 'https://fakestoreapi.com'


    useEffect(() => {
      // dispatch(fetchMiddlewareData({
      //     url: 'products',
      //     onSuccess: fetchProductsFromApi.type,
      //     onStart: addLoadEffect.type,
      //     onError: handleError.type
      //   }))
      
      // dispatch(fetchMiddlewareData(
      //   {
      //     url: 'carts/5',
      //     onSuccess: fetchCartItems.type,
      //     onStart: handleLoadCart.type,
      //     onError: handleCartError.type
      //   }
      // ))
        dispatch(exportThunkMiddlewareProductData())
        dispatch(exportThunkMiddlewareCartData())
      
      // dispatch((dispatch) => { // this code moved inside the cartSlice and imported above
      //   dispatch(handleLoadCart())
      //    fetch(`${baseUrl}/carts/5`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //       dispatch(fetchCartItems(data))
      //   }).catch(() => {
      //       dispatch(handleCartError())
      //   })
      // })

      // dispatch(addLoadEffect())
      // fetchProductsApi()

      // dispatch(handleLoadCart())
      // fetchCartApi()
    },[])
   
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