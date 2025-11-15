import React from 'react'
import { Link } from 'react-router-dom'
import { productList } from '../store/product-list'
import ProductComponent from '../Components/Product'
import { useSelector } from 'react-redux'

const Home = () => {

    const storedProductList = useSelector((state) => state.products)

    // useSelector(console.log)
  return (
    <div>
       <div className='products-container'>
         {
            storedProductList.map(({id, title, rating, price, image }) => (
            <ProductComponent key={id} productId={id} title={title} rating={rating.rate} price={price} image={image} />))
        }
       </div>
    </div>
  )
}

export default Home