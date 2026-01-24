import React, { useReducer } from 'react'

export const Counter = () => {

    const initialState = 0
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment': 
                return state + 1
            case 'decrement': 
                return state - 1
            default:
                return state;
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h1>Understand the useReducer() hook in react</h1>
        <p className="found-value">{count}</p>
        <div className='button-section'>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        </div>
    </div>
  )
}
