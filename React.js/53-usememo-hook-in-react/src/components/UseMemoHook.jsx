import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {

    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);

    // used the useMemo hook here to memoize the results of the calculation
    const multiplicationMemo = useMemo(() => {
        console.log(add, "multiplicationMemo Recomputes only when dependencies change")
        return add * 10
    }, [add])

    // const multiplyValue = () => {
    //     console.log(add, "Multiply is called")
    //     return add * 10
    // }

  return (
    <div>
        <h1>Understand the Concept of useMemo() hook in React</h1>
        <h3>Simple Example to understand useMemo hook in react</h3>
            <p>{multiplicationMemo}</p>
            {/* <p>{multiplyValue()}</p> */}
        <button onClick={() => {
            setAdd((prev) => {
                return prev + 1
            })
        }}>Add</button>&nbsp;<span>{add}</span><br />
        <button onClick={() => {
            setSub((prev) => {
                return prev - 1
            })
        }}>Subtract</button>&nbsp;<span>{sub}</span>
    </div>
  )
}

export default UseMemoHook