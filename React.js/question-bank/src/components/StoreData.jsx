import React from "react";

export const StoreData = [
  {
    id: 1,
    question: "What is React?",
    answer: `React is a JavaScript library used to build user interfaces, especially single-page applications (SPAs). It allows developers to create reusable components and efficiently update the UI using a Virtual DOM.`,
    category: "Basics",
  },
  {
    id: 2,
    question: "What are the features of React?",
    answer: `Declarative Programming, Component-based architecture, Single-page application`,
    category: "Basics",
  },
  {
    id: 3,
    question: "What is React Element?",
    answer: `A React element is a plain JavaScript object that describes what you want to appear in the UI. It is the smallest unit in React, created using JSX or React.createElement(), and is used by React to render the actual DOM.`,
    category: "Basics",
  },
  {
    id: 4,
    question: "What is a component in React?",
    answer: `A React component is a reusable piece of UI written in JavaScript (or TypeScript) that returns HTML using JSX. 
It can be either a function or a class, and it helps build complex interfaces by breaking them into smaller, manageable parts.`,
    category: "Basics",
  },
  {
    id: 5,
    question: "What is the difference between functional and class components?",
    answer: `Functional Component: A functional component is a JavaScript function that returns JSX and is used to build UI.
Class Component: A class component is a JavaScript class that extends React.Component and uses a render() method to return JSX.
`,
    category: "Basics",
  },
  {
    id: 6,
    question: "What is JSX?",
    answer: `JSX (JavaScript XML) is a syntax extension for JavaScript used in React that allows you to write HTML-like code inside JavaScript. 
JSX is compiled into regular JavaScript by tools like Babel before being rendered by the browser.
`,
    category: "Basics",
  },
  {
    id: 7,
    question: "Why do we use JSX?",
    answer: `JSX makes the UI structure more readable and declarative.`,
    category: "Basics",
  },
  {
    id: 8,
    question: "What is the Virtual DOM?",
    answer: `Virtual DOM is a lightweight copy of the real DOM. React updates the Virtual DOM first, compares it with the previous version (diffing), and then updates only the changed parts in the real DOM.
Faster performance and less DOM manipulation`,
    category: "Basics",
  },
  {
    id: 9,
    question: "How does React differ from regular DOM?",
    answer: `React differs from the regular DOM by using a Virtual DOM, which is a lightweight copy of the real DOM.
Instead of updating the entire DOM directly, React first updates the Virtual DOM, compares it with the previous version using a process called diffing, and then updates only the changed elements in the real DOM.
This makes React much faster and more efficient compared to directly manipulating the regular DOM, which can be slow because it updates the entire structure even for small changes.`,
    category: "Basics",
  },
  {
    id: 10,
    question: "What is an SPA?",
    answer: `SPA (Single Page Application) is a web application that loads a single HTML page and dynamically updates content without refreshing the page.`,
    category: "Basics",
  },
  {
    id: 11,
    question:
      "What is the difference between stateless and stateful components?",
    answer: `Stateless components only display data using props, while stateful components manage and update data using state, making the UI dynamic.`,
    category: "Basics",
  },
  {
    id: 12,
    question: "What is a React fragment?",
    answer: `A React Fragment is used to group multiple elements without adding an extra node to the DOM. It helps avoid unnecessary div elements.`,
    category: "Basics",
  },
  {
    id: 13,
    question: "What are props in React?",
    answer: `Props (short for properties) are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component.`,
    category: "Props & State",
  },
  {
    id: 14,
    question: "Are props mutable or immutable?",
    answer: `Props are immutable (read-only)`,
    category: "Props & State",
  },
  {
    id: 15,
    question: "What is the state in React?",
    answer: `State is a built-in object in React used to store data that can change over time. When state changes, the component re-renders. State is mutable`,
    category: "Props & State",
  },
  {
    id: 16,
    question: "Difference between props and state?",
    answer: `Props are used to pass data from parent to child and are read-only, whereas state is used to manage data within a component and can be updated. Props are immutable, but state is mutable.`,
    category: "Props & State",
  },
  {
    id: 17,
    question: "How do you pass data from child to parent?",
    answer: `Data is passed from child to parent by passing a callback function from the parent to the child.`,
    category: "Props & State",
  },
  {
    id: 18,
    question: "What is prop drilling?",
    answer: `Prop drilling is a concept in React where data (props) is passed from a parent component down to deeply nested child components through multiple intermediate components—even if those intermediate components don’t actually need the data. We can avoid prop drilling by using the context API and also by using the state management libraries like Redux`,
    category: "Props & State",
  },
  {
    id: 19,
    question: "What is a Hook in React?",
    answer: `In React, Hooks are functions that let us use state and lifecycle features inside functional components instead of class components.`,
    category: "Hooks"
  },
  {
    id: 20,
    question: 'What is useState?',
    answer: `useState is used to manage state in functional components. It returns a state variable and a function to update it`,
    category: 'Hooks'
  },
  {
    id: 21,
    question: 'What is useEffect?',
    answer: `useEffect is used to handle side effects like API calls, subscriptions, or DOM updates.`,
    category: 'Hooks'
  },
  {
    id: 22,
    question: 'What are dependency arrays in useEffect?',
    answer: `The dependency array controls when the effect runs. It runs when the values inside it change.`,
    category: "Hooks"
  },
  {
    id: 23,
    question: 'What happens if dependency array is empty?',
    answer: `If the dependency array is empty, the effect runs only once after the initial render.`,
    category: "Hooks"
  },
  {
    id: 24,
    question: 'What happens if the dependency array is not provided?',
    answer: `If no dependency array is provided, the effect runs after every render.`,
    category: "Hooks"
  },
  {
    id: 25,
    question: 'What is the cleanup function in useEffect?',
    answer: `A cleanup function is used to remove side effects like timers or event listeners before the component unmounts.`,
    category: "Hooks"
  },
  {
    id: 26,
    question: 'What is useRef?',
    answer: `useRef is used to store mutable values or access DOM elements without causing re-renders.`,
    category: "Hooks"
  },
  {
    id: 27,
    question: 'Difference between useRef and useState?',
    answer: `useState triggers re-render when updated, but useRef does not. useState is for UI updates, while useRef is for storing values.`,
    category: "Hooks"
  },
  {
    id: 28,
    question: 'What is useMemo?',
    answer: `useMemo is used to memoize a computed value and avoid unnecessary recalculations.`,
    category: "Hooks"
  },
  {
    id: 29,
    question: 'What is useCallback?',
    answer: `useCallback is used to memoize a function so it doesn’t get recreated on every render.`,
    category: "Hooks"
  },
  {
    id: 30,
    question: 'Difference between useMemo and useCallback?',
    answer: `useMemo memoizes a value, while useCallback memoizes a function.`,
    category: "Hooks"
  },
  {
    id: 31,
    question: 'What is useReducer?',
    answer: `useReducer is a React Hook used for state management when state logic becomes complex or involves multiple related values. It’s an alternative to useState, inspired by Redux.`,
    category: 'Hooks'
  },
  {
    id: 32,
    question: 'What is a Custom Hook in React?',
    answer: `In React, a custom hook is a reusable function that starts with ‘use’ and allows us to extract and reuse logic across multiple components.`,
    category: "Hooks"
  },
  {
    id: 33,
    question: 'What are lifecycle methods in class components?',
    answer: `In class components, lifecycle methods are special methods that run at different phases of a component.

componentDidMount(): Runs after the component is added to the DOM. It is best used for API calls and DOM updates. It is similar to useEffect with an empty dependency array.

componentDidUpdate(prevProps, prevState): Runs after the component updates. It is useful for responding to changes in props or state. It is similar to useEffect with dependencies.

componentWillUnmount(): Runs before the component is removed from the DOM. It is used for cleanup like removing event listeners or canceling API calls. It is similar to the cleanup function inside useEffect.`,
    category: "Lifecycle & Rendering"
  },
  {
    id: 34,
    question: 'How lifecycle works in functional components?',
    answer: `In functional components, lifecycle behavior is handled using Hooks like useEffect.

[] → Runs only once (Mounting phase)
[state] → Runs when the state changes (Updating phase)
return() inside useEffect → Cleanup function (Unmounting phase)`,
    category: "Lifecycle & Rendering"
  },
  {
    id: 35,
    question: 'What causes re-render in React?',
    answer: `A component re-renders when its state or props change. It can also re-render when its parent component re-renders, causing all its child components to render again.`,
    category: "Lifecycle & Rendering"
  },
  {
    id: 36,
    question: 'How to prevent unnecessary re-renders?',
    answer: `To prevent unnecessary re-renders, we can use optimization techniques like React.memo to memoize components, useMemo to memoize computed values, and useCallback to memoize functions. These help avoid re-rendering when the data has not changed.`,
    category: "Lifecycle & Rendering"
  },
  {
    id: 37,
    question: 'How does event handling work in React?',
    answer: `In React, event handling is similar to HTML but uses camelCase syntax and JavaScript functions instead of strings.

Events are written like: onClick, onChange, onSubmit.
A function reference is passed as the event handler to handle user interactions.`,
    category: "Events & Forms"
  },
  {
    id: 38,
    question: 'What is a Synthetic Event?',
    answer: `A Synthetic Event is a wrapper around the browser’s native event in React.

React uses a single event listener at the root level and handles events efficiently using event delegation for better performance.`,
    category: "Events & Forms"
  },
  {
    id: 39,
    question: 'Controlled vs Uncontrolled Components?',
    answer: `Controlled Components:
Form data is controlled by React state using useState.

Uncontrolled Components:
Form data is managed by the DOM itself using useRef.`,
    category: "Events & Forms"
  },
  {
    id: 40,
    question: 'How do you handle forms in React?',
    answer: `Forms in React are typically handled using controlled components along with state management, where form inputs are linked to state and updated using event handlers.`,
    category: "Events & Forms"
  },
  {
    id: 41,
    question: 'Difference between an event listener and an event handler?',
    answer: `An event listener listens for an event on an element, while an event handler is the function that executes when that event occurs.

Example:
onClick → acts as the event listener
handleClick → is the event handler function`,
    category: "Events & Forms"
  },
  {
    id: 42,
    question: 'Why do we use keys in React lists?',
    answer: `Keys are used in React to uniquely identify each element in a list.

They help React:
- Track which items are added, removed, or updated
- Optimize rendering using the Virtual DOM

Keys must be unique among siblings and are mainly used when rendering lists using .map().

We can also use crypto.randomUUID() to generate unique IDs.`,
    category: "Lists & Keys"
  },
  {
    id: 43,
    question: 'What happens if keys are not used properly?',
    answer: `If keys are not used properly, React cannot correctly identify elements in a list.

This can lead to incorrect UI updates, unexpected state behavior, and performance issues.`,
    category: "Lists & Keys"
  },
  {
    id: 44,
    question: 'What is lifting state up?',
    answer: `Lifting state up means moving state from a child component to a common parent component so it can be shared between multiple child components.`,
    category: "Advanced"
  },
  {
    id: 45,
    question: 'What is conditional rendering?',
    answer: `Conditional rendering allows components to display different UI based on conditions, using techniques like if statements, ternary operators, or logical &&.`,
    category: "Advanced"
  },
  {
    id: 46,
    question: 'What is Context API?',
    answer: `Context API is a way to share data globally across components without prop drilling, allowing direct access to data at any level of the component tree.`,
    category: "Advanced"
  },
  {
    id: 47,
    question: 'What is React Router?',
    answer: `React Router is a library used to enable navigation between components in a Single Page Application without a full page reload.

Features:
- Create multiple pages without reloading
- Supports dynamic routing`,
    category: "Advanced"
  },
  {
    id: 48,
    question: 'What is lazy loading in React?',
    answer: `Lazy loading is a technique where components are loaded on demand instead of loading everything at once, improving performance and reducing initial load time.`,
    category: "Advanced"
  },
  {
    id: 49,
    question: 'What is code splitting?',
    answer: `Code splitting is the process of breaking an application into smaller bundles to improve loading performance.

It is commonly implemented using:
- React.lazy()
- Suspense`,
    category: "Advanced"
  },
  {
    id: 50,
    question: 'What is the relation between code splitting and lazy loading?',
    answer: `Code Splitting breaks the application into smaller chunks, while Lazy Loading ensures those chunks are loaded only when needed.`,
    category: "Advanced"
  },
  {
    id: 51,
    question: 'What are Higher Order Components (HOCs)?',
    answer: `A Higher Order Component (HOC) is a function that takes a component as input and returns a new enhanced component with additional functionality.`,
    category: "Advanced"
  },
  {
    id: 52,
    question: 'What is Reconciliation in React?',
    answer: `Reconciliation is the process React uses to compare the previous Virtual DOM with the updated Virtual DOM and efficiently update only the changed parts in the real DOM.`,
    category: "Advanced"
  },
  {
    id: 53,
    question: 'What is React Portal?',
    answer: `A React Portal allows rendering a child component outside the DOM hierarchy of its parent component, typically into a different DOM node.`,
    category: "Advanced"
  },
  {
    id: 54,
    question: 'What is an Error Boundary?',
    answer: `An Error Boundary is a component that catches runtime errors in its child components and displays a fallback UI instead of crashing the entire application. It works only in class components.`,
    category: "Advanced"
  },
  {
    id: 55,
    question: 'What is Strict Mode in React?',
    answer: `Strict Mode is a development tool in React that helps identify potential problems, unsafe lifecycles, and improves overall code quality.`,
    category: "Advanced"
  }
];
