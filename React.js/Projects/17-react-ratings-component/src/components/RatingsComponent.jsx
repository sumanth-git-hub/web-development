import React, { useState } from 'react'

const RatingsComponent = ({starValue = 5}) => {
    const [starRatings, setStarRatings] = useState()
    const [hoverValue, setHoverValue] = useState(0)
  return (
    <div className='ratings-container'>
        <p>Please add your Ratings </p>
        {new Array(starValue).fill(0).map((values, index) => {
            return <i key={index} className={`fa-solid fa-star ${hoverValue === 0 && index < starRatings || index < hoverValue ? 'add-gold-color': ''}`} 
            onClick={() => {
            setStarRatings(index + 1)
            }}
            onMouseEnter={() => {
                setHoverValue(index + 1)
            }}
            onMouseLeave={() => {
                setHoverValue(0)
            }}
            ></i>
        })}
        <p>You Rated us! <span>{starRatings}/5</span></p>
    </div>
  )
}

export default RatingsComponent