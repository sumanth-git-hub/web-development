import React, { useState } from "./react";
import { render } from "./react-dom";

import "./App.css";

export default function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(10)

  return (
    <>
    <div>
      <h1
        className="main-heading"
        style={{ textAlign: "center", color: "orange", userSelect : "none" }}
      >
        Recreating useState Hook
      </h1>
      <button onclick={() => {
        setCount(count + 1)
      }}
        style={{
          padding: "10px",
          cursor: "pointer",
          backgroundColor: "orange",
          border: "none",
          borderRadius: "10px",
          userSelect : "none"
        }
      }
      >
        {count}
      </button>
    </div>
          <button onclick={() => {
        setCount2(count2 + 1)
      }}
        style={{
          marginTop: "20px",
          padding: "10px",
          cursor: "pointer",
          backgroundColor: "orange",
          border: "none",
          borderRadius: "10px",
          userSelect : "none"
        }
      }
      >
        {count}
      </button>
    </>
  );
}


render(<App />, document.getElementById("root"))
