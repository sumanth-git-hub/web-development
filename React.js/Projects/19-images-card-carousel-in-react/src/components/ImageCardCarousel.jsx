import React, { useEffect, useRef, useState } from 'react'
import { imageData } from '../ImageData'

export const ImageCardCarousel = () => {
  const [imageCount, setImageCount] = useState(0)
  // console.log(imageCount)
const refElement = useRef(null)
// console.log(refElement.current)
    const handleNext = () => {
      setImageCount((prev) => {
        if(prev === imageData.length - 1){
          return 0
        }
        return prev + 1
      })
    }
    const handlePrev = () => {
      setImageCount((prev) => {
        if(prev === 0){
          return imageData.length - 1
        }
        return prev - 1
      })
    }
    useEffect(() => {
    refElement.current =  setInterval(() => {
        // console.log("Hello")
        handleNext()
      }, 5000)

      return () => {
        clearInterval(refElement.current)
      }
    }, [])
  return (
    <div>
        <h2 className='text-center'>Images Card Carousel in React</h2>
        <div className='container' onMouseEnter={() => {
          clearInterval(refElement.current)
        }}
        onMouseLeave={() => {
          refElement.current =  setInterval(() => {
        handleNext()
      }, 5000)
        }}
        style={{backgroundImage: `url(${imageData[imageCount].download_url})`}}
        >
            <div
        className="slide-element left"
        onClick={() => {
          handlePrev();
        }}
      >
        <i className="fa-solid fa-circle-chevron-left"></i>
      </div>
      <img className='image-object' src={imageData[imageCount].download_url} alt={imageData[imageCount].author}/>
       <div
        className="slide-element right"
        onClick={() => {
          handleNext();
        }}
      >
        <i className="fa-solid fa-circle-chevron-right"></i>
      </div>
        </div>
        <p className='text-center'>Image Count <span className='image-count-color'>{imageCount + 1}</span>/{imageData.length}</p>
    </div>
  )
}
