import React, { useEffect, useRef, useState } from 'react'

const AutoSearchBar = () => {

    const [results, setResults] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [query, setQuery] = useState("")
    const [cache, setCache] = useState({})
    // const searchResult = useRef(null)

    
    const fetchApiData = async() => {

        if(cache[query]){
            console.log("Cache Returned", query)
            setResults(cache[query])
            return
        }

        const data = await fetch(`https://dummyjson.com/recipes/search?q=${query}&limit=10`)
        const json = await data.json()
        setResults(json.recipes)
        // console.log(json.recipes)
        console.log("Called API", query)

        setCache((prevState) => ({...prevState, [query]: json.recipes}))
    }


    useEffect(() => {
        const timer = setTimeout(() => {
            fetchApiData()
        }, 400);

        return () => clearTimeout(timer)
    },[query])

  return (
    <div>
        <div className='w-4xl mx-auto'>
        <h2 className='text-xl font-bold text-center mt-20 mb-4'>Auto Complete Recipe Search Bar in <span className='text-sky-300'>React</span></h2>
        <form action="https://www.google.com/search">
                <div className='flex gap-4'>
                    <input className='border w-1/2 px-4 rounded' name="q" type="search" placeholder='Find the recipe here...' value= {query} onChange={(e) => {
                setQuery(e.target.value)
                setShowResults(false)
            }} 
            // onFocus={() => {
            //     setShowResults(true)
            // }} 
            // onBlur={() => {
            //     setShowResults(true)
            // }}
            />
            <button className='cursor-pointer px-4 bg-amber-500 rounded'>Submit</button>
                </div>
        </form>
            <ul className='w-1/2 shadow overflow-y-scroll max-h-96'>
                {
                    showResults ? "" :
                 results?.map((result) => {
                    console.log(showResults)
                    return <li  onClick={() => {
                        setQuery(result.name)
                        setShowResults(true)
                    }} className='cursor-pointer hover:bg-gray-300 px-4' key={result.id}>{result.name} </li>
                })
            }
            </ul>
        </div>
    </div>
  )
}

export default AutoSearchBar