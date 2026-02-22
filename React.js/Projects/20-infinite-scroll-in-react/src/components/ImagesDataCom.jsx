import React, { useEffect } from 'react'

const ImagesDataCom = ({scrollImage, setPageNumber}) => {

    useEffect(() => {
        const lastImage = document.querySelector('.image-element:last-child')
        console.log(lastImage)
        if(!lastImage) return

        const observerFun = new IntersectionObserver((entries) => {
            console.log(entries)
            if(entries[0].isIntersecting){
                console.log(entries[0].intersectionRatio)
                observerFun.unobserve(lastImage) // reason behind to add this piece of code is "“I’ve detected the intersection once, now stop watching this element.”"
                setPageNumber((prev) => {
                    return prev + 1
                })
            }
        }, {threshold: 0.5})

        observerFun.observe(lastImage)

        //clean up
        return (() => {
            // observerFun.unobserve(lastImage)
            observerFun.disconnect()
        })
    }, [scrollImage, setPageNumber])

  return (
    <>
    {
        scrollImage.map((item, index) => {
           return <img key={index} className='w-60 h-96 object-cover rounded-lg m-4 image-element block mx-auto' src={item.download_url} alt={item.author} />
            
        })
    }
    </>
  )
}

export default ImagesDataCom