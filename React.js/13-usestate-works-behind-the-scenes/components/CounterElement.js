import React, { useState } from "react";

export default function CounterElement({ abbreviate }) {
  const [count, setCount] = useState(0);
  console.log("Rendering");
  return (
    <div className="component-style">
      <h1>{count}</h1>
      <button
        title={abbreviate}
        onClick={(e) => {
        //when the current value is depends on the previous value
          setCount((previousState) => previousState + 2)
          setCount((previousState) => previousState + 4)
          setCount((previousState) => previousState + 6)
        }}
      >
        Render the Element
      </button>
    </div>
  );
}
