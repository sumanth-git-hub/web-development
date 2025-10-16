import React, { useEffect } from 'react'
import ListTab from './ListTab'
import { useState } from 'react'
import { useRef } from 'react'
import { useStoreLocal } from '../hooks/useStoreLocal'
import {DndContext, closestCorners, useSensors,useSensor,PointerSensor, TouchSensor} from '@dnd-kit/core';
import {SortableContext, verticalListSortingStrategy, arrayMove} from '@dnd-kit/sortable';



export default function ListContainer() {

  const [todos, setTodos] = useStoreLocal("todos",[])
  // const inputRef = useRef(null)
  // const countsRef = useRef(0); // useRef to persist without re-renders
  // const [errorText, setErrorText] = useState("")
  const [isInputValues, setIsInputValues] = useStoreLocal("isInputValues","")
  const [isEditingRowId, setIsEditingRowId] = useStoreLocal("isEditingRowId", null)

// const [numberArray, setNumberArray] = useState([1,2,3,4])
// const [numberArray, setNumberArray] = useStoreLocal("numberArray",[1,2,3,4])
// const increaseNumber = () => {
//   setNumberArray((prev) => [...prev, prev.length + 1])
// }



  // const inputValidation = (inputData) => {
  //   const errorData = {}
  //   console.log(inputData)

  //   if(inputData === "") {
  //     console.log("Say Hi")
  //     alert("No values found, Kindly enter the task")
  //     errorData.title = "Please enter the values"
  //   }
  //   console.log(errorData)
  //   setErrorText(errorData)
  //   return errorData
  // }

 const addFunction = () => {
  //  if (Object.keys(setValidation).length > 0) {
  //     return;
  //   }
  const trimmedData = isInputValues.trim()

  if(trimmedData === "") {
    alert("Please Enter the values in the input")
    return
  }

  if(isEditingRowId){
    setTodos((prev) => prev.map((todo) => todo.id === isEditingRowId ? {...todo, textContent: trimmedData, displayStatus: ""}: todo))
    setIsEditingRowId(null)
  }
  else {
    setTodos((prev) => [...prev, {id: crypto.randomUUID(), textContent: trimmedData, displayStatus: ""}])
  }
  
  setIsInputValues("")
  // localStorage.setItem('todosId', JSON.stringify(countsRef.current))
 }



  // useEffect(() => {
  //   setTimeout(() => {
  //   console.log(todos)
  //   localStorage.setItem("todos", JSON.stringify(todos))
  //   }, 100);

  // },[todos])


// useEffect(() => {
//     setTodos(JSON.parse(localStorage.getItem('todos')) || [])
//     // JSON.parse(localStorage.getItem("todosId")) || 0;
//   },[])


const sensors = useSensors(
  useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10, 
    },
  }),
  useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,    
      tolerance: 5,  
    },
  }),
);

  //  const getPosition = (id) => {
  //     return  data.findIndex((obj) => obj.id === id)
  //   }

    const getPosition = (id) => todos.findIndex((obj) => obj.id === id);


const handleDragEnd = (ev) => {
        const {active, over} = ev;
        // console.log(active, over)

        if(!over || active.id === over.id) return

        setTodos((prev) => {
            const oldIndex = getPosition(active.id)
            const newIndex = getPosition(over.id)

            return arrayMove(prev, oldIndex, newIndex)
        })

    }

  return (
    <div>
        <div className="container">
        <div className="to-do-app">
            <h1 className='text-2xl font-bold'>List Your Plans &amp; Goals&nbsp;&nbsp;<i className="fa-solid fa-note-sticky" id="change-color"></i></h1>
            <div className="row">
                <input 
                value={isInputValues}
                onChange={(element) => {
                  // setErrorText("")
                  setIsInputValues(element.target.value)
                }}
                 type="text" id="input-box" placeholder="Add your tasks here" 
                //  ref={inputRef}
                
                 />
                <button onClick={() => {
                  addFunction()
                }} className="cta-button">Add</button>
            </div>
            {/* <p className={` text-sm text-red-500 text-center ${errorText.title ? 'visible' : 'hidden'}`}>{errorText.title}&nbsp;<i className="fa-solid fa-circle-exclamation"></i></p> */}
            <DndContext collisionDetection = {closestCorners} onDragEnd={handleDragEnd} >
              <SortableContext items={todos} strategy={verticalListSortingStrategy} sensors={sensors}>

            <ul className="list-container">
                <ListTab todos={todos} setTodos={setTodos} setIsEditingRowId={setIsEditingRowId} setIsInputValues={setIsInputValues}/>
            </ul>
              </SortableContext>
            </DndContext>
        </div>

        {/* <div>
          <h3 style={{color: "white"}}>{numberArray.join(", ")}</h3>
          <button onClick={() => {
            increaseNumber()
          }}>Add</button>

        </div> */}
    </div>
    </div>
  )
}
