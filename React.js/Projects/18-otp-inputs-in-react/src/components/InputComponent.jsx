import React, { useEffect, useRef, useState } from 'react'

const InputComponent = () => {
    const countOfInputs = 6
    const [inputCount, setInputCount] = useState(new Array(countOfInputs).fill(''));
    const refInput = useRef([])
    // console.log(refInput)

    const handleClick = (value, index) => {
        if(isNaN(value)) return
        const newArray = [...inputCount]
        const newValue = value.trim()
        newArray[index] = newValue.slice(-1);
        setInputCount(newArray)
        newValue && refInput.current[index + 1]?.focus()
    }
    const handleOnKeyDown = (e, index) => {
        if(e.key === "Backspace" && !e.target.value){
           refInput.current[index - 1]?.focus()
        }
    }
    useEffect(() => {
        refInput.current[0]?.focus()
    },[])

  return (
    <div>
        <h3>Validate OTP</h3>
        {
        inputCount.map((input,index) => {
            return <input key={index} className='input-element' value={inputCount[index]} onChange={(e) => {
                handleClick(e.target.value, index)
            }} 
            onKeyDown={(e) => {
                handleOnKeyDown(e, index)
            }}
            ref={(currentInput) => (refInput.current[index] = currentInput)}
            />
        })
        }</div>
  )
}

export default InputComponent