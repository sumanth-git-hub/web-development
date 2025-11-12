import './App.css'
import ProductComponent from './Components/Product'
import {store} from './store/script'
import { productList } from './store/product-list'
import { useSelector } from 'react-redux'
console.log(store)
console.log(store.getState().products)

function App() {

    const updatedProductList = useSelector((state) => state.products)
    console.log(updatedProductList)
    
  return (
   <div>
    <div className='products-container'>
      { 
      // store.getState().products.map(({id, title, rating, price, image}) => {
      //   return <ProductComponent key={id} title={title} rating={rating} price={price} image={image}/>

      updatedProductList.map(({id, title, rating, price, image}) => {
        return <ProductComponent key={id} title={title} rating={rating} price={price} image={image}/>
      })
      }
    </div>
   </div>
  )
}

export default App
