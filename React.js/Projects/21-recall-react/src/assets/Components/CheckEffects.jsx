import React, { useEffect, useState } from 'react'

export const CheckEffects = () => {
        const [displayCount, setDisplayCount] = useState(false)
  return (
    <div>
        <button onClick={() => {
                setDisplayCount(!displayCount)
            }}>Check the Count</button>
            {displayCount && <CounterComponent />}
        
    </div>
  )
}

function CounterComponent () {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Mounted")

        return () => {
            console.log("Unmounted")
        }
    }, [])

    useEffect(() => {
        console.log("Updating")
    }, [count])

    return (
        <div>
            <button onClick={() => {
                setCount((prevState) => prevState + 1)
            }}>{count}</button>
        </div>
    )
}