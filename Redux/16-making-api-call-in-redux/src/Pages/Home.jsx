import React from 'react'
import ProductComponent from '../Components/Product'
import { useSelector } from 'react-redux'

const Home = () => {

    const storedProductList = useSelector((state) => state.products.list)
    const storedProductLoading = useSelector((state) => state.products.loading)
    const storedProductError = useSelector((state) => state.products.error)

  return (
    storedProductLoading ? <h1 className='align-text-center'>Loading...</h1> : storedProductError ? <h2 className='align-text-center'>{storedProductError}</h2> : 
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