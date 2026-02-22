import React, { useEffect, useState } from 'react'
import ImagesDataCom from './ImagesDataCom'

const InfiniteScrollFun = () => {
    const [scrollImage, setScrollImage] = useState([]);
    const [pageNumber, setPageNumber] = useState(1)
    console.log(scrollImage)

   const fetchData =  async() => {
            try {
                const apiData = await fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=3`)
                const data = await apiData.json()
                console.log(data)
                setScrollImage((prev) => {
                    return [...prev, ...data]
                })
            } catch (error) {
                    console.log(error)
            }
        }
    
    useEffect(() => {
        fetchData()
    }, [pageNumber])

  return (
    <div>
        <h1 className='text-2xl font-bold text-center pt-4 text-white'>Infinite Scroll Function Component in <span className='text-sky-400'>React</span></h1>
        <div className='container mx-auto'>
            <ImagesDataCom scrollImage = {scrollImage} setPageNumber = {setPageNumber} />
        </div>
    </div>
  )
}

export default InfiniteScrollFun