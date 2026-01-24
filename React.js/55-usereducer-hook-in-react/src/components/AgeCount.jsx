import React, { useReducer } from "react";

const AgeCount = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increaseAge":
        return { age: state.age + 1 };
      case "decreaseAge":
        return { age: state.age - 1 };
      default:
        return state;
    }
  };

  const [userAge, dispatch] = useReducer(reducer, { age: 26 });

  return (
    <div>
      <h2>Increase and Decrease your age while learning useReducer hook</h2>
      <p>You're<span className="found-value">{userAge.age}</span>Years Old</p>
      <div className="button-section">
        <button onClick={() => dispatch({type: 'increaseAge'})}>Increase Age</button>
        <button onClick={() => dispatch({type: 'decreaseAge'})}>Decrease Age</button>
      </div>
    </div>
  );
};

export default AgeCount;
