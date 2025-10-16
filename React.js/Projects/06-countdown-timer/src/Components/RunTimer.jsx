import React, { useEffect, useRef, useState } from 'react'


const RunTimer = () => {
    

    const [time, setTime] = useState(0)
    // const [minutes, setMinutes]  = useState("00");
    // const [seconds, setSeconds] = useState("00")
    const [isActive, setIsActive] = useState(false);
    const [isPause, setIsPause] = useState(false)
    const timerRef = useRef(null);
    const inputRef = useRef(null)

    const handleInput = (el) => {
        setTime(parseInt(el.target.value * 60))
    }

const minutes = (String(Math.floor(time/60)).padStart(2,"0"));
 const seconds = (String(time%60).padStart(2,"0"));


 const startTimer = () => {
    setIsActive(true)
    setIsPause(false)
 }
 const pauseTimer = () => {
    setIsPause(!isPause)
    console.log(!isPause) // when you click on the pause button the value is turning to true and it works like an toggle
 }
 const resetTimer = () => {
    clearInterval(timerRef.current)
    setIsActive(false)
    setIsPause(false)
    setTime(0)
    inputRef.current.value = ""
 }

 useEffect(() => {
   if(isActive && !isPause && time > 0) {
     timerRef.current = setInterval(() => {
        setTime((prevState) => prevState - 1)
    }, 1000);
   }
    else if (time === 0 && isActive){
        clearInterval(timerRef.current)
         setIsActive(false)
         alert("Time is Up")
         inputRef.current.value = ""
    }

    return () => clearInterval(timerRef.current)
 },[time, isActive, isPause])

  return (
    <div className='bg-black text-white min-h-screen'>
        <div className='w-full max-w-3xl mx-auto pt-10'>
            
        <h2 className='text-2xl text-center mb-10'>Countdown Timer in <span className='text-sky-300'>React</span></h2>
            <input onChange={(element) => {
                handleInput(element)
            }} type="number" className='bg-gray-300 w-1/3 text-black outline-0 rounded mx-auto block mb-4 px-4 py-2 text-center'
            placeholder='Enter Value in Minutes' ref={inputRef} />
            <h3 className='text-center text-2xl font-bold'>{minutes} : {seconds}</h3>
            <div className='buttonsSection mt-4 flex justify-center'>
                <button onClick={() => {
                    startTimer()
                }} className='bg-amber-500 px-4 py-2 rounded-xl text-black mx-2 cursor-pointer' disabled = {isActive}><i className="fa-solid fa-play"></i></button>
                <button onClick={() => {
                    pauseTimer()
                }} className='bg-amber-500 px-4 py-2 rounded-xl text-black mx-2 cursor-pointer' disabled = {!isActive}><i className={`fa-solid  ${isPause ? "fa-circle-play" : "fa-circle-pause"}`}></i></button>
                <button onClick={() => {
                    resetTimer()
                }} className='bg-amber-500 px-4 py-2 rounded-xl text-black mx-2 cursor-pointer'><i className="fa-solid fa-rotate-right"></i></button>
            </div>
        </div>
    </div>
  )
}

export default RunTimer