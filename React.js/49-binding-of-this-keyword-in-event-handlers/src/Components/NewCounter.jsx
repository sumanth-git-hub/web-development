import React, { useEffect, useState } from 'react'

export default function NewCounter({name, titleTagInc, titleTagDec, divider}) {
    const [count, setCount] = useState(0)
    // const [count2, setCount2] = useState(0)

    // useEffect(() => {
    //     const runTimer = setInterval(() => {
    //         console.log("Did Mount")
    //     }, 1000)

    //     return () => {
    //         clearInterval(runTimer)
    //                 console.log("will Unmount")
    //     }
    // },[])
    
  return (
    <>
    <h3 className="my-2">{name}</h3>
    <div className="flex gap-4 items-center">
        <button className="bg-blue-400 px-4 py-2 rounded-md font-semibold cursor-pointer" title={titleTagDec} onClick={(e) => {
            setCount(count - 1)
        }}>-</button>
        <p className="w-5 text-center">{count}</p>
        <button className="bg-blue-400 px-4 py-2 rounded-md font-semibold cursor-pointer" title={titleTagInc} onClick={() => {
            setCount(count + 1)
        }}>+</button>
    </div>
    {/* <div className="flex gap-4 items-center mt-4">
        <button className="bg-blue-400 px-4 py-2 rounded-md font-semibold cursor-pointer" title={titleTagDec} onClick={(e) => {
            setCount2(count2 - 1)
        }}>-</button>
        <p className="w-5 text-center">{count2}</p>
        <button className="bg-blue-400 px-4 py-2 rounded-md font-semibold cursor-pointer" title={titleTagInc} onClick={() => {
            setCount2(count2 + 1)
        }}>+</button>
    </div> */}
    {divider}
    </>
  )
}
