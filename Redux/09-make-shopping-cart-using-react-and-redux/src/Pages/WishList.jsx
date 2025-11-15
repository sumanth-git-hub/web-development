import React from 'react'
import WishListItem from '../Components/WishListItem'
import { useSelector } from 'react-redux'

const WishList = () => {

//      const wishListItemsStore = [
//     {
//       id: 1,
//       title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
//       imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
//       quantity: 1,
//       rating: 3.9,
//       price: 109.95,
//     },
//     {
//       id: 2,
//       title: 'Mens Cotton Jacket',
//       imageUrl: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png',
//       quantity: 1,
//       rating: 4.7,
//       price: 55.99,
//     },
//     {
//       id: 3,
//       title: 'Mens Casual Slim Fit',
//       imageUrl: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png',
//       quantity: 1,
//       rating: 2.1,
//       price: 15.99,
//     },
//   ]

  const wishListItemsStore = useSelector((state) => state.wishList)

  return (
  <div>
    <h2 className='center-align-content'>Items in Your Wish List</h2>
      <div className='products-container'>
        { wishListItemsStore.length > 0 ?wishListItemsStore.map(({productId, title, rating, price, image }) => {
                return <WishListItem key={productId} title={title} rating={rating} price={price} imageUrl={image} productId={productId} />
            }) : <p>No items found in your wish list!</p>
        }
    </div>
  </div>
  )
}

export default WishList