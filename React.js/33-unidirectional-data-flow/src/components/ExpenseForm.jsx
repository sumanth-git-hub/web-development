import React, { useState } from "react";

export default function ExpenseForm({ pullExpense }) {
  // setting the values of the input fields in one place

  const [fieldValues, setInputFieldValues] = useState({
    title: "",
    category: "",
    amount: "",
  });
/*
// set the values of the input by using state separately

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const newObject = { title, category, amount };

  const setObjectValue = { ...newObject, id: crypto.randomUUID() };
  const handleSubmit = (e) => {
    e.preventDefault();
    pullExpense((prevState) => [...prevState, setObjectValue]);

    //by using the empty string inside the set items we can reset the values of the inputs here
    setTitle("");
    setCategory("");
    setAmount("");
  };
*/
const handleSubmit = (e) => {
  e.preventDefault()

  const setId = {...fieldValues, id: crypto.randomUUID()}
  pullExpense((prevState) => [...prevState, setId])

  //by making the setInputFieldValues empty inside the click function can help to reset the input fields
  
  setInputFieldValues ({
    title: "",
    category: "",
    amount: "",
  })
}

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          // value={title}
          value={fieldValues.title}
          // onChange={(e) => {
          //   setTitle(e.target.value);
          // }}
          onChange={(e) => {
            setInputFieldValues((prevState) => ({...prevState, title: e.target.value}))
          }}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        {/* <input id="category" /> */}
        <select
          id="category"
          name="category"
          // value={category}
          value={fieldValues.category}
          // onChange={(e) => {
          //   setCategory(e.target.value);
          // }}
          onChange={(e) => {
            setInputFieldValues((prevState) => ({...prevState, category: e.target.value}))
          }}
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
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          // value={amount}
          value={fieldValues.amount}
          // onChange={(e) => {
          //   setAmount(e.target.value);
          // }}
          onChange={(e) => {
            setInputFieldValues((prevState) => ({...prevState, amount: e.target.value}))
          }}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
