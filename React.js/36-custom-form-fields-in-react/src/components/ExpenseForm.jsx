import React, { useEffect, useRef, useState } from "react";
import InputElement from "./InputElement";
import SelectMenu from "./SelectMenu";

export default function ExpenseForm({ pullData }) {
  const buttonRef = useRef(null);
  const formRef = useRef(null);

  const [inputValue, setInputValue] = useState({
    title: "",
    category: "",
    amount: "",
    email: ""
  });

  useEffect(() => {
    buttonRef.current.style.backgroundColor = "#fa0";
  });

  const [error, setError] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "Please enter title" },
      { minLength: 3, message: "Title should be at lease 3 characters long" },
    ],
    category: [{required: true, message: "Please select a category"}],
    amount: [{required: true, message: "Please add an amount"}],
    email: [{required: true, message: "Please enter an email address"},{pattern: /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Please enter a valid email address" }],
  };

  const validateFun = (formData) => {
    const errorData = {};

    Object.entries(formData).forEach(([key, value]) => {
      // console.log(key, value)
      // console.log(validationConfig[key])
    validationConfig[key].some((rule) => {
        console.log(rule)
        if(rule.required && !value){
          errorData[key] = rule.message
          return true
        }
        if(rule.minLength && value.length < 3){
          errorData[key] = rule.message
                    return true
        }
        if(rule.pattern && !rule.pattern.test(value)){
          errorData[key] = rule.message
                    return true
        }
      })
    })


    // previous method of validation on errorData
    
    /*
    if (!formData.title) {
      errorData.title = "Please enter the title";
    }
    if (!formData.category) {
      errorData.category = "Please choose the category";
    }
    if (!formData.amount) {
      errorData.amount = "Please add the amount";
    }
    */

    setError(errorData);
    return errorData;
  };

  const submitEvent = (e) => {
    e.preventDefault();
    const validResults = validateFun(inputValue);
    // console.log(validResults);

    if (Object.keys(validResults).length) return;

    const setId = { ...inputValue, id: crypto.randomUUID() };

    pullData((prevState) => [...prevState, setId]);

    formRef.current.reset();
    setInputValue({
      title: '',
      category: '',
      amount: '',
      email: ''
    });
  };

  const customFunction = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
    setError({});
  };

  return (
    <form className="expense-form" onSubmit={submitEvent} ref={formRef}>
      <InputElement
        id={"title"}
        name={"title"}
        label={"Title"}
        onChange={customFunction}
        value={inputValue.value}
        error={error.title}
        place={"Calculator"}
      />
      <SelectMenu
        CompId={"category"}
        name={"category"}
        label={"Category"}
        onChange={customFunction}
        value={inputValue.value}
        error={error.category}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        defaultOption={"Choose Category"}
      />
      <InputElement
        id={"amount"}
        name={"amount"}
        label={"Amount"}
        onChange={customFunction}
        value={inputValue.value}
        error={error.amount}
        place={100}
      />
      <InputElement
        id={"email"}
        name={"email"}
        label={"Email"}
        onChange={customFunction}
        value={inputValue.value}
        error={error.email}
        place={"suresh@gmai.com"}
      />
      <button className="add-btn" ref={buttonRef}>
        Add
      </button>
    </form>
  );
}
