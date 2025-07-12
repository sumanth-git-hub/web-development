import React, { useEffect, useRef, useState } from 'react'
import Input from './Input'
import Select from './Select'

export default function ExpenseForm({ prepareExpenses }) {
  const [inputValue, setInputValue] = useState({
    title: '',
    category: '',
    amount: '',
    email: '',
  })

  const submitButton = useRef(null)


  useEffect(() => {
submitButton.current.style.backgroundColor = "#ffbb00"
submitButton.current.classList.add("submitButton")
  }, [])

  const [errors, setErrors] = useState({})

  const validationConfig = {
    title: [
      { required: true, message: 'Please enter title' },
      { minLength: 5, message: 'Title should be at least 5 characters long' },
    ],
    category: [{ required: true, message: 'Please select a category' }],
    amount: [{ required: true, message: 'Please enter an amount' }, {type : Number, message: "Please enter the amount in numbers"}],
    email: [
      { required: true, message: 'Please enter an email' },
      {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: 'Please enter a valid email',
      },
    ],
  }

  const validate = (formData) => {
    const errorsData = {}

    Object.entries(formData).forEach(([key, value]) => {
    validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message
          return true
        }

        if (rule.minLength && value.length < 5) {
          errorsData[key] = rule.message
          return true
        }

        if(rule.type === Number && !/^\d+$/.test(value)){
          errorsData[key] = rule.message
          return true
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message
          return true
        }
      })
    })

    setErrors(errorsData)
    return errorsData
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validateResult = validate(inputValue)

    if (Object.keys(validateResult).length) return

    prepareExpenses((prevState) => [
      ...prevState,
      { ...inputValue, id: crypto.randomUUID() },
    ])
    setInputValue({
      title: '',
      category: '',
      amount: '',
      email: ''
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    setErrors({})
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={inputValue.title}
        onChange={handleChange}
        error={errors.title}
      />
      <Select
        label="Category"
        id="category"
        name="category"
        value={inputValue.category}
        onChange={handleChange}
        options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']}
        defaultOption="Select Category"
        error={errors.category}
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={inputValue.amount}
        onChange={handleChange}
        error={errors.amount}
      />
      <Input
        label="Email"
        id="email"
        name="email"
        value={inputValue.email}
        onChange={handleChange}
        error={errors.email}
      />
      <button className="add-btn" ref={submitButton}>Add</button>
    </form>
  )
}