import { useEffect, useRef, useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import { ExpenseData } from '../expenseData'
import React from 'react'
import { useLocalStorage } from './components/hooks/useLocalStorage'


function App() {
  // after setting the custom hook of the local storage we can go with useLocalStorage hook
  // const [expenses, setExpenses] = useState(ExpenseData)
    const [expenses, setExpenses] = useLocalStorage('expenses', ExpenseData)


  // after setting the custom hook of the local storage we can go with useLocalStorage hook
  // const [inputValue, setInputValue] = useState({
  //   title: '',
  //   category: '',
  //   amount: '',
  //   // email: '',
  // })
    const [inputValue, setInputValue] = useLocalStorage("inputs",{
    title: '',
    category: '',
    amount: '',
    // email: '',
  })

  // the edited value should be save in the same row instead of storing them in a new row, for that we need a state below 

  // const  [editingRowId, setEditingRowId] = useState("")
    const  [editingRowId, setEditingRowId] = useLocalStorage('edits',"")



  // to understand how local storage works i used the below code 
  // const [localStorageData, setLocalStorageData] = useLocalStorage('key', [1, 2, 3])
  // console.log(localStorageData)

  return (
    <main>
      <h1>Track Your Expense 📊 </h1>
      {/* <button onClick={(e) => {
        setLocalStorageData((prevState) => [...prevState, 4, 5, 6])
      }}>Click Storage</button>
      <h2>{localStorageData.join(", ")}</h2> */}
      <div className="expense-tracker">
        <ExpenseForm prepareExpenses={setExpenses} inputValue ={inputValue} setInputValue = {setInputValue} editingRowId={editingRowId} setEditingRowId={setEditingRowId}/>
        <ExpenseTable getExpenses={expenses} prepareExpenses={setExpenses} setInputValue={setInputValue} setEditingRowId={setEditingRowId}/>
      </div>
    </main>
  )
}

export default App