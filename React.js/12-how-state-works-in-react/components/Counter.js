import { useState } from "react";

export default function Counter({ abbreviation }) {
  // const myStateArray = useState(0)
  // const count  = myStateArray[0]
  // const setCount = myStateArray[1]
  // the above mentioned variables are working fine but we wrote the variables with the help of destructuring below

  const [count, setCount] = useState(0);
  console.log(count);
  console.log("Rendering")
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1 title={abbreviation}>How to Re-render in React</h1>
      <button
        className="buttons-element"
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        Increase Counts
      </button>
      &nbsp;&nbsp;&nbsp;<span>{count}</span>
    </div>
  );
}
