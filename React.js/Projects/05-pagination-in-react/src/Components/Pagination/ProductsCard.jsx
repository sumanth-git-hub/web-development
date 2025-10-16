import React from 'react'

const ProductsCard = ({image, title,price}) => {
  return (
    <div className='h-80 w-2xs shadow rounded'>
        <div className='h-60'>
            <img loading='lazy' className='object-cover w-full h-full' src={image} alt={title} />
        </div>
        <div className='px-4 py-2'>
        <p>{title}</p>
        <span>${price}</span>
        </div>
    </div>
  )
}

export default ProductsCard