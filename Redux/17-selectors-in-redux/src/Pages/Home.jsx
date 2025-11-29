import React from 'react'
import ProductComponent from '../Components/Product'
import { useSelector } from 'react-redux'
import { getAllProductsList, getProductListLoading, handleProductListError } from '../store/Slice/productsSlice'

const Home = () => {

  // imported the selectors from productSlice
    const storedProductList = useSelector(getAllProductsList)
    const storedProductLoading = useSelector(getProductListLoading)
    const storedProductError = useSelector(handleProductListError)

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