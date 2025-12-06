import React from 'react'
import WishListItem from '../Components/WishListItem'
import { useSelector } from 'react-redux'

const WishList = () => {

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