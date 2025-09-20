import React, { useEffect } from 'react'
import ListTab from './ListTab'
import { useState } from 'react'
import { useRef } from 'react'


export default function ListContainer() {

  const [todos, setTodos] = useState([])
  const inputRef = useRef(null)
  // const countsRef = useRef(0); // useRef to persist without re-renders
  const [errorText, setErrorText] = useState("")


  const inputValidation = (inputData) => {
    const errorData = {}
    console.log(inputData)

    if(inputData === "") {
      console.log("Say Hi")
      alert("No values found, Kindly enter the task")
      errorData.title = "Please enter the values"
    }
    console.log(errorData)
    setErrorText(errorData)
    return errorData
  }

 const addFunction = () => {
  const setValidation = inputValidation(inputRef.current.value)
  //  if (Object.keys(setValidation).length > 0) {
  //     return;
  //   }

  if(Object.keys(setValidation).length) return

  setTodos([...todos, {id: crypto.randomUUID(), textContent: inputRef.current.value, displayStatus: ""}])
  inputRef.current.value = ""
  // localStorage.setItem('todosId', JSON.stringify(countsRef.current))
 }

  useEffect(() => {
    setTimeout(() => {
    console.log(todos)
    localStorage.setItem("todos", JSON.stringify(todos))
    }, 100);

  },[todos])


useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')) || [])
    // JSON.parse(localStorage.getItem("todosId")) || 0;
  },[])

  return (
    <div>
        <div className="container">
        <div className="to-do-app">
            <h1 className='text-2xl font-bold'>List Your Plans &amp; Goals&nbsp;&nbsp;<i className="fa-solid fa-note-sticky" id="change-color"></i></h1>
            <div className="row">
                <input 
                onChange={() => {
                  setErrorText("")
                }}
                 type="text" id="input-box" placeholder="Add your tasks here" ref={inputRef}/>
                <button onClick={addFunction} className="cta-button">Add</button>
            </div>
            <p className={` text-sm text-red-500 text-center ${errorText.title ? 'visible' : 'hidden'}`}>{errorText.title}&nbsp;<i className="fa-solid fa-circle-exclamation"></i></p>
            <ul className="list-container">
                <ListTab todos={todos} setTodos={setTodos}/>
            </ul>
        </div>
    </div>
    </div>
  )
}
