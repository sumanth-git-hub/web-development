import React, { useEffect, useRef, useState } from "react";

export default function ExpenseForm({ pullData }) {
  const buttonRef = useRef(null);
  const formRef = useRef(null);

  const [inputValue, setInputValue] = useState({
    title: "",
    category: "",
    amount: "",
  });

  useEffect(() => {
    buttonRef.current.style.backgroundColor = "#fa0";
  });


  const [errors, setErrors] = useState({})

  const validateFun = (formData) => {
    console.log(formData)

    const errorData = {}

    if(!formData.title){
        errorData.title = "Please Enter the Title"
    }
    if(!formData.category){
        errorData.category= "Please Choose the Category"
    }
    if(!formData.amount){
        errorData.amount = "Please Add the Amount"
    }

    setErrors(errorData)
    return errorData
  }



  const submitEvent = (e) => {
    e.preventDefault();

    const validateResults =  validateFun(inputValue)
    console.log(Object.keys(validateResults).length)
    if(Object.keys(validateResults).length) return

    // console.log(errors)

    // console.log(inputValue.title === "")
    // if(!inputValue.title)return

    console.log(inputValue);

    const setId = { ...inputValue, id: crypto.randomUUID() };

    pullData((prevState) => [...prevState, setId]);

    formRef.current.reset();
    setInputValue({
      name: "",
    });
  };

  const customFunction = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setInputValue((prevState) => ({ ...prevState, [name]: value }));

    setErrors({})
  };

  return (
    <form className="expense-form" onSubmit={submitEvent} ref={formRef}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          // value={inputValue.title}
          onChange={customFunction}
        />
        <p className="error-element">{errors.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        {/* <input id="category" /> */}
        <select
          id="category"
          name="category"
          // value={inputValue.category}
          onChange={customFunction}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
        <p className="error-element">{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          // value={inputValue.amount}
          onChange={customFunction}
        />
        <p className="error-element">{errors.amount}</p>
      </div>
      <button className="add-btn" ref={buttonRef}>
        Add
      </button>
    </form>
  );
}
