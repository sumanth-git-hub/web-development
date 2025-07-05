import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import expenseData from '../expenseData'

function App() {
  const [expense, setExpense] = useState(expenseData)

  return (
    <main>
      <h1>Track Your Expense 📊</h1>
      <div className="expense-tracker">
      <ExpenseForm pullData={setExpense} />
      <ExpenseTable pushData={expense} />
      </div>
    </main>
  )
}

export default App
