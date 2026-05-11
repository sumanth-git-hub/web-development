import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export const LoginForm = () => {

    const [inputName, setInputName] = useState("");

    const {inputUserName, loginFunction} = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!inputName.trim()) return
        alert("Login")
        loginFunction(inputName)
    }

  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <label htmlFor="login">
            Enter Name: 
          <input
          onChange={(e) => {
            setInputName(e.target.value)
          }}
           type="text" id="login" value={inputName}  />
        </label>
        <input type="submit" value={"Login"}/>
      </form>
      {
        inputUserName.isAuth && <p>Logged in as a {inputUserName.name}</p>
      }
    </div>
  );
};
