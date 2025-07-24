import { useEffect, useRef, useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import { ExpenseData } from '../expenseData'
import React from 'react'


function App() {
  const [expenses, setExpenses] = useState(ExpenseData)

  const [inputValue, setInputValue] = useState({
    title: '',
    category: '',
    amount: '',
    // email: '',
  })

  // the edited value should be save in the same row instead of storing them in a new row, for that we need a state below 

  const  [editingRowId, setEditingRowId] = useState("")

  return (
    <main>
      <h1>Track Your Expense 📊 </h1>
      <div className="expense-tracker">
        <ExpenseForm prepareExpenses={setExpenses} inputValue ={inputValue} setInputValue = {setInputValue} editingRowId={editingRowId} setEditingRowId={setEditingRowId}/>
        <ExpenseTable getExpenses={expenses} prepareExpenses={setExpenses} setInputValue={setInputValue} setEditingRowId={setEditingRowId}/>
      </div>
    </main>
  )
}

export default App