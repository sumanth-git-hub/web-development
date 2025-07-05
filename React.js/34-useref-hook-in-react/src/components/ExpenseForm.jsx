import React, { useEffect, useReducer, useRef, useState } from "react";

export default function ExpenseForm({ pullData }) {


  const titleRef = useRef(null)
  const categoryRef = useRef(null)
  const amountRef = useRef(null)
  const formRef = useRef(null)

  //useEffect which lets you run your code after the rendering activity (DOM manipulation)
// useEffect(() => {
//   checkUseRef.current.addEventListener("click", (e) => {
//     document.querySelector("body").style.backgroundColor = "black"
//   })
// })
useEffect(() => {
  console.log(formRef.current)
})

  // const [fieldValue, setFieldValue] = useState({
  //   title: "",
  //   category: "",
  //   amount: "",
  // });

  const SubmitEvent = (e) => {
    e.preventDefault();
      let useRefObject = {
        title: titleRef.current.value,
      category: categoryRef.current.value,
      amount: amountRef.current.value
      }
    console.log(useRefObject)
    const setId = {...useRefObject, id: crypto.randomUUID()}

    pullData((prevState) => ([...prevState, setId]))

    //below line of code used to reset the values of the form
    formRef.current.reset()

//below line of code used to reset the values of the individual elements of the form
      // titleRef.current.value = ""
      // categoryRef.current.value = ""
      // amountRef.current.value = ""

    // const setId = { ...fieldValue, id: crypto.randomUUID() };
    // pullData((prevState) => [...prevState, setId]);

    // setFieldValue({
    //   title: "",
    //   category: "",
    //   amount: "",
    // });
  };

  return (
   <>
   {/* understood how ref={} works */}
   {/* <button onClick={(e) => {
   }}
   ref={checkUseRef}
   >Click</button> */}
    <form ref={formRef} className="expense-form" onSubmit={SubmitEvent}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
        ref={titleRef}
          id="title"
          name="title"
          // value={fieldValue.title}
          // onChange={(e) => {
          //   setFieldValue((prevState) => ({
          //     ...prevState,
          //     title: e.target.value,
          //   }));
          // }}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        {/* <input id="category" /> */}
        <select
        ref={categoryRef}
          id="category"
          name="category"
          // value={fieldValue.category}
          // onChange={(e) => {
          //   setFieldValue((prevState) => ({
          //     ...prevState,
          //     category: e.target.value,
          //   }));
          // }}
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
        ref={amountRef}
          id="amount"
          name="amount"
          // value={fieldValue.amount}
          // onChange={(e) => {
          //   setFieldValue((prevState) => ({
          //     ...prevState,
          //     amount: e.target.value,
          //   }));
          // }}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
   </>
  );
}
