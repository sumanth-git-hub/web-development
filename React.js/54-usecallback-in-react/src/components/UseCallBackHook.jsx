import React, { useCallback, useState } from "react";
import ChildCom from "./ChildCom";

export const UseCallBackHook = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0)

  const elementText = document.querySelector(".text-element");

    const addFunction = useCallback(() => {
      if (elementText) {
       return elementText.textContent = `Your child component is rendered ${count} ${count > 1 ? 'times': 'time'}`;
      } else {
        console.log(elementText);
        // elementText.textContent = `Your child component is not rendered`;
      }
    }, [count]);

// when i created the function here and passed as a prop to the child component it rerenders the child component on every rendering, to avoid this i use the useCallback() hook check above
//   const addFunction = () => {
//     if (elementText) {
//       elementText.textContent = add;
//     } else {
//       console.log(elementText);
//     }
//   };

  return (
    <div>
      <h3>Simple Example to Understand how useCallback() hook works</h3>
      <ChildCom addFunction={addFunction} />
      <p>
        <button
          onClick={() => {
            setAdd((prev) => prev + 1);
          }}
        >
          Add
        </button>
        
        &nbsp;<span>{add}</span>
      </p>
      <p>Click on the setCount button to render the child page with useCallback hook</p>
      <button onClick={() => {
        setCount((prev) => prev + 1)
      }}>SetCount</button>&nbsp;<span>{count}</span>
    </div>
  );
};
