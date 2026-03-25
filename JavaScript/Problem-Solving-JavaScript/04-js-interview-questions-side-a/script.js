// "use strict";

const setOfQuestions = [
  {
    questionId: 1,
    question: "What is javascript and where it is used?",
    answer: `JavaScript is a scripting language used to make the webpages interactive, and it is used to build the web applications, mobile apps and also used in frontend and backend (node.js)`,
  },
  {
    questionId: 2,
    question: "What is scripting language?",
    answer: `Scripting language is a type of programming language, that runs inside the another program like web browser`,
  },
  {
    questionId: 3,
    question: "What is the difference between Var, Let and Const?",
    answer: `These are the keywords used to declare the variables in javascript, var is function scoped and can be re declared and re assigned. let and const are block scoped, let can be reassigned but not redeclared, while const cannot be reassigned. In modern javascript we mostly use const by default, if the value need to change, we use let. var is avoided because of the scope issues.`,
  },
  {
    questionId: 4,
    question: "What is hoisting in javascript and give and example?",
    answer: `Hoisting is a javascript behavior where variable and function declarations moved to the top of their scope before execution, only declarations are hoisted not the assignments. var is hoisted and initialized as undefined, whereas let and const are hoisted but remain in the Temporal Dead Zone until declared.`,
  },
  {
    questionId: 5,
    question: "What is scope?",
    answer: `Scope determines where a variable can be accessed in the program, in javascript we have global scope, function scope, and block scope, var is functioned scope, let and const are in the block scope.`,
  },
  {
    questionId: 6,
    question: "What is block scope?",
    answer: `Variable is only accessible inside the block {} where it is declared`,
  },
  {
    questionId: 7,
    question: "What are template literals in javascript?",
    answer: `Template literal is a way to work with strings in javascript using backticks instead of a single or double quotes, it allow us to embed the variable inside strings, write multi line string easily, and embed the expression inside the strings`,
  },
  {
    questionId: 8,
    question: "What is temporal dead zone (tdz) in javascript?",
    answer: `Temporal dead zone is the time between when the variable is hoisted and when it is initialized, during this time accessing the variable results in a reference error, tdz applies only on const and let not on var. this behavior was introduced in ECMAScript 6`,
  },
  {
    questionId: 9,
    question: "What is type coercion?",
    answer: `Coercion is the process where JavaScript automatically or implicitly converts a value from one data type to another during operations or comparisons. It commonly happens with == and arithmetic operators.`,
  },
  {
    question: 10,
    question: "Difference between == and ===?",
    answer: `== compares value after the type coercion but === compares both value and type without type coercion, it is recommended to use === to avoid unexpected results.`,
  },
  {
    questionId: 11,
    question: "What are truthy and falsy values?",
    answer: `Truthy values that evaluates true in the boolean context where falsy values evaluates false, false, 0, -0, 0n, "", null, undefined and NaN is falsy values rest everything is truthy values.`,
  },
  {
    questionId: 12,
    question: "What are the data types in javascript?",
    answer: `Javascript has 2 data types which are primitive and non-primitive, primitive data type is immutable that includes, number, null, string, symbol, boolean, bigInt and undefined. while non primitive data type is mutable which includes object (array, function & date are belongs to non-primitive data type).
        primitive data type store a single value and non-primitive data type store the set of values.
        `,
  },
  {
    questionId: 13,
    question: "What is mutable and immutable in javascript?",
    answer: `Mutable data can be changed after creation, whereas immutable data cannot be modified and instead creates a new value.`,
  },
  {
    questionId: 14,
    question: "What is the purpose of isNaN() function in JavaScript?",
    answer: `isNaN() is the function which is used to check wether the value is "not a number" or cannot be converted into a valid number. isNaN() performs type coercion but using the Number.isNaN() does not perform coercion and checks only invalid number `,
  },
  {
    questionId: 15,
    question: "What is the difference between null and undefined?",
    answer: `A variable is undefined when it is declared but not assigned a value, but null is a intentional assignment which represents no value.`,
  },
  {
    questionId: 16,
    question: "What is the use of typeof operator?",
    answer: `The typeof operator is used to find the data type of the variable or value in javascript.`,
  },
  {
    questionId: 17,
    question: "Difference between typeof and instanceof?",
    answer: `Both are used to find the data type, but work differently. typeof used to check the primitive data types and returns the string, instance of used to check the type whether an object is instance of a particular constructor or class and it return the boolean.`,
  },
  {
    questionId: 18,
    question: "What is a function?",
    answer: `Function is a reusable block of code designed to perform the particular task, it executes when it is called or invoked.`,
  },
  {
    questionId: 19,
    question:
      "What is the difference between a function declaration, function expression and an arrow function?",
    answer: `Function declaration is a named function, defined using the function keyword, it is fully hoisted and allowing to call before declaration, it has it's own "this".
        Function expression is a function assigned to a variable, it has it's own this, not fully hoisted, which executes only after the variable is initialized.
        Arrow function is a shorter syntax for writing a function expression and it doesn't have it's own "this", inherits from the parent scope.
        `,
  },
  {
    questionId: 20,
    question: "What is a Callback Function?",
    answer: `A callback function is a function that is passed as an argument to another function and is executed later.`,
  },
  {
    questionId: 21,
    question: "What is a closures?",
    answer:
      "A closure is a function that remembers and can access variables from its outer scope even after the outer function has finished execution.",
  },
  {
    questionId: 22,
    question: "Why are closures useful?",
    answer: `Closures helps to preserve the state between the function execution,
    Data privacy: helps to hide the variable from outside access.
    Callbacks and async operations: keep access to the variable even after the execution delay.
    Function Factories: closures allow creating customized functions.
    Module Pattern: closures were used to create private modules.
    `,
  },
  {
    questionId: 23,
    question: "What is lexical scope?",
    answer: `Lexical scope determines a function can access the variable from where it is defined not where it is called.`,
  },
  {
    questionId: 24,
    question: "What is a higher-order function?",
    answer: `A higher-order function is a function that accepts another function as an argument or returns a function.`,
  },
  {
    questionId: 25,
    question: "What is an IIFE?",
    answer: `IIFE(Immediately invoked function expression) is a function that runs immediately after defined, without being called separately.`,
  },
  {
    questionId: 26,
    question: "What is an Array in JavaScript and how to access its elements?",
    answer: `An array is a special object in javaScript used to store multiple values in a single variable. it stores the values in a ordered list. we can access the elements of an array using it's index number`,
  },
  {
    questionId: 27,
    question: "What are common array methods in JavaScript?",
    answer: `Array methods are in-built functions to manipulate or work with array.
    it has different types of methods which is push, pop, unshift, shift, forEach, map, filter, reduce, includes, findIndex, some and every.
    `,
  },
  {
    questionId: 28,
    question: "Difference between map() and forEach()?",
    answer: `The map and forEach both are an array methods which iterates through an each elements of an array and both won't automatically modify the original array. the key difference between them is map returns a new array based on the callback function while forEach does not return anything, simply execute a function for each elements.`,
  },
  {
    questionId: 29,
    question: "What is filter()?",
    answer: `filter(): is an array method used to create a new array containing only the elements that satisfy a given condition. It removes unwanted elements, returns a new array & does not modify original array.`,
  },
  {
    question: 30,
    question: "What is reduce() in javaScript?",
    answer: `reduce() is an array method used to reduce all the elements of an array into a single value.`,
  },
  {
    question: 31,
    question: "How do you remove duplicates from an array?",
    answer: `A Set is a built-in object that stores unique values only. It automatically removes duplicates. by uisng the set we can remove the duplicates from an array. Set uses SameValueZero for comparison. 
We can also use the filter method to remove duplicates.`,
  },
  {
    questionId: 32,
    question: "How do you flatten an array?",
    answer: `flat() is used to flatten (remove nesting from) an array. It returns a new array. it does NOT modify the original array. And also we can flatten the array with the help of reduce.`,
  },
  {
    questionId: 33,
    question: "What is find() vs filter()?",
    answer: `find() is used when we need to get the first element in an array that satisfies a condition, and it returns that single element. If no element is found, find() returns undefined.
    filter() is used when we need to get all elements in an array that satisfy a condition, and it returns a new array containing those elements.`,
  },
  {
    questionId: 34,
    question: "How to sort an array of numbers?",
    answer: `To sort the numbers in order we use array.sort((a, b) => a- b);`,
  },
  {
    questionId: 35,
    question: "What is an object?",
    answer: `An object is a collection of key-value pairs used to store structured data.`,
  },
  {
    questionId: 36,
    question: "Difference between Object.keys() and Object.values()?",
    answer: `Both are used to extract data from objects as arrays. the key difference between them is object.keys returns an array of keys(property names), while object values returns an array of values (property values).`,
  },
  {
    questionId: 37,
    question: "What is destructuring?",
    answer: `Destructuring is a way to extract values from arrays or objects and assign them to variables easily.`,
  },
  {
    questionId: 38,
    question: "What is the spread operator?",
    answer: `The spread operator (...) is used to expand elements of arrays or objects.`,
  },
  {
    questionId: 39,
    question: "What is optional chaining?",
    answer: `Optional chaining (?.) allows you to safely access nested object properties without causing an error if a value is null or undefined.`,
  },
  {
    questionId: 40,
    question: "What is synchronous vs asynchronous?",
    answer: `Synchronous code executes line by line, waiting for each operation to finish before moving to the next.
    Asynchronous code allows certain tasks to run in the background without blocking the execution of other code.`,
  },
  {
    questionId: 41,
    question: "What is setTimeout()?",
    answer: `setTimeout() is a Web API function that executes a callback after a specified delay.`,
  },
  {
    question: 42,
    question: "What is Callback Hell?",
    answer: `Callback hell occurs when multiple asynchronous operations are nested inside callbacks, making the code hard to read and maintain. and promises and async/await solve this problem.`,
  },
  {
    questionId: 43,
    question: "What is a Promise?",
    answer: `A Promise is an object that represents the eventual completion or failure of an asynchronous operation.`,
  },
  {
    question: 44,
    question: "What are Promise States?",
    answer: `promise has 3 states which are
            Pending: Initial State
            Fulfilled: operation completed successfully
            Rejected: operation failed`,
  },
  {
    questionId: 45,
    question: "What is async / await?",
    answer: `async/await is a syntax that makes working with promises easier by allowing asynchronous code to look like synchronous code.`,
  },
  {
    questionId: 46,
    question: "What is the event loop?",
    answer: `The Event Loop is a mechanism that allows JavaScript to handle asynchronous operations by managing the Call Stack and Callback Queue.`,
  },
  {
    questionId: 47,
    question: "What is Fetch API?",
    answer: `The Fetch API is a modern JavaScript API used to make HTTP requests to servers.`,
  },
  {
    questionId: 48,
    question: "What is Execution Context?",
    answer: `Execution context is the environment where JavaScript code is evaluated and executed. it has 2 types 
Global Execution Context 
Function Execution Context`,
  },
  {
    questionId: 49,
    question: "JavaScript is single-threaded — what does it mean?",
    answer: `JavaScript is single-threaded, meaning it can execute only one task at a time using a single call stack.`,
  },
  {
    questionId: 50,
    question: "What is Call Stack?",
    answer: `The Call Stack is a data structure that keeps track of function execution in JavaScript. It works using a Last In, First Out (LIFO) approach.`,
  },
  {
    questionId: 51,
    question: "How do you handle errors in async code?",
    answer: `Errors in asynchronous JavaScript can be handled using .catch() with Promises or try...catch blocks when using async/await.`,
  },
  {
    questionId: 52,
    question: "What is DOM?",
    answer: `The DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the webpage as a tree structure where each element is a node, allowing JavaScript to access and manipulate the content, structure, and styles of the page.`,
  },
  {
    questionId: 53,
    question: "Difference Between getElementById and querySelector",
    answer: `getElementById() selects an element using its ID and returns a single element, while querySelector() uses CSS selectors and returns the first matching element.`,
  },
  {
    questionId: 54,
    question: "What is Event Bubbling?",
    answer: `Event bubbling is a mechanism where an event starts from the target element and propagates upward to its parent elements in the DOM tree.`,
  },
  {
    questionId: 55,
    question: "What is event bubbling?",
    answer: `Event bubbling is a mechanism where an event starts from the target element and propagates upward to its parent elements in the DOM tree.
by using the targetElement.stopImmediatePropagation() we can stop the event bubbling upward to its parent
`,
  },
  {
    questionId: 56,
    question: "What is Event Delegation?",
    answer: `Event delegation is a technique where a parent element handles events for its child elements using event bubbling`,
  },
  {
    questionId: 57,
    question: "What is Debouncing?",
    answer: `Debouncing is a technique used to limit how often a function executes. The function runs only after a specified delay since the last event occurred.`,
  },
  {
    questionId: 58,
    question: "What is Throttling?",
    answer: `Throttling means limiting how often a function can run within a time interval.`,
  },
  {
    questionId: 59,
    question: "What is this keyword in JavaScript?",
    answer: `this keyword refers to the object that is currently executing the function`,
  },
  {
    questionId: 60,
    question: "How does arrow function handle this?",
    answer: `Arrow functions do NOT have their own 'this' they take this from the parent (lexical scope)`,
  },
  {
    questionId: 61,
    question: "What is prototype?",
    answer: `Every JavaScript object has a hidden property called prototype, which allows inheritance.`,
  },
  {
    questionId: 62,
    question: "What is Memoization?",
    answer: `Memoization is an optimization technique where you store previous results to avoid recalculating.`,
  },
  {
    questionId: 63,
    question: "What is Currying in JavaScript?",
    answer: `Currying in JavaScript is a technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking one argument at a time.`,
  },
  {
    questionId: 64,
    question: "What is Recursion in JavaScript?",
    answer: `when a function calls itself from inside its own body, it is called recursion in JavaScript.`,
  },
  {
    questionId: 65,
    question: 'What is JavaScript Strict Mode?',
    answer: `Strict Mode in JavaScript is a feature that enforces stricter parsing and error handling, helping developers avoid common mistakes, and it is enabled by adding 'use strict' at the top of a file or function.`
  }
];

//example of hoisting

//function declaration
hoistFun(2, 2);

function hoistFun(a, b) {
  // declaration
  //   console.log(a + b);
}

// variable declaration
// console.log(a) //undefined printed because It is initialized with undefined
var a = 234;

//const or let declaration
// console.log(b) // let and const are also hoisted but remain in the Temporal Dead Zone until declared, so accessing them before declaration throws a ReferenceError."
let b = 1;

//example of scope

//global scope
let assumeValue = 10;
const findLet = () => {
  // console.log(assumeValue, "Global Scope")
};
findLet();

// function scope

function funScope() {
  let scopeInFun = 10;
  // console.log(scopeInFun)
}
funScope();

//block scope

if (true) {
  let blockScopeValue = 1999;
  // console.log(blockScopeValue)
}

//example of string

let aValue = 2;
let bValue = 2;

const additionValue = `Total is ${aValue + bValue}`; // embed the expression inside the strings
console.log(additionValue);

// console.log([] === [])    // false, objects are compared by reference, not by value. Each [] creates a new array in memory.
console.log(NaN === NaN); // false because NaN is defined as not equal to any value, including itself.
console.log(typeof NaN); // number, NaN represents an invalid numeric result but still belongs to the Number type.
console.log(typeof null); // object, It is a historical bug in JavaScript.

//mutable data
let theyCallHim = "Sumanth";
// theyCallHim[0] = "C";
console.log(theyCallHim); //data cannot be modified after creation

//immutable data
const userDetails = {
  hisName: "Sumanth",
};
userDetails.hisName = "Sharath S S";

console.log(userDetails); //the data is modified after creation

//isNaN() function
isNaN("123"); // false, because first it performs the type coercion => now the ("123") string become number => 123 is actually a valid number so the return is => false

// Number.isNaN()
Number.isNaN("123"); //false, the result is same as above but it doesn't perform the coercion directly checked the value is NaN

//is null and undefined both are same?
null == undefined; // true, why because both null and undefined represent absence of value.
null === undefined; // false, why because strict equality checks both value and type.

//typeof data types
typeof 10; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof {}; // "object"
typeof []; // "object"
typeof function () {}; // "function" (Special type of object)
typeof null; // "object" (Historical JavaScript bug.)

//Fun in javascript

const addValue = "5" + 3; //returns 53

const subtractValue = "5" - 3; //returns 2

//+ can concatenate strings, but other arithmetic operators -, *, / force number conversion.

// The same may happen with women's logic too, but we still love women the way we love JavaScript.

// Happy Women's Day!

//+ can concatenate strings, but other arithmetic operators -, *, / force number conversion.

//functions

//function declaration
greet(); // can be called before declaration, fully hoisted
function greet() {
  console.log("Hello Good Morning!");
}

//function expression
const expGreet = function () {
  console.log("Function Expression!");
};
expGreet(); //allowed to call only after the initialization

//arrow function
const arrowFunction = () => {
  console.log("Arrow Function!!");
};
arrowFunction();

//callback function
function normaFunction(userName, callBackFun) {
  console.log(`${userName} is ${callBackFun(1999)} years old`);
}

function newCallBackFunction(year) {
  return new Date().getFullYear() - year;
}
normaFunction("Sumanth", newCallBackFunction); //passed as an argument to another function.

// Closures in JavaScript

function outerFunction() {
  let addValues = 0;

  function innerFunction() {
    addValues++;
    console.log(addValues);
  }
  return innerFunction;
}

const checkClosure = outerFunction();
console.log(checkClosure()); //1
console.log(checkClosure()); //2
console.log(checkClosure()); //3

//Lexical Scope in JavaScript

let lexicalVr = 10;

function outer() {
  let lexicalVr = 20;

  return function () {
    console.log(lexicalVr);
  };
}

const structureOuter = outer();
lexicalVr = 30;

structureOuter(); // the printed value is 20 because it is inside the outer scope

//Higher-order function

//higher order function which accept function as an argument

function greetUser(getWishes) {
  let userName = "Sumanth";
  return `${getWishes} ${userName}`;
}

function additionalGreetings(otherWish) {
  //higher order function
  if (new Date().getHours() <= 12) {
    return otherWish("Good morning!");
  } else {
    return otherWish("Good Evening!");
  }
}
console.log(additionalGreetings(greetUser)); //greetUser function is passed as an argument;
//output is all about wishes + username

//higher order function which returns another function

function parentFunction(userName) {
  return function childFunction(wishes) {
    console.log(`${wishes} ${userName} `);
    return `${wishes} ${userName} `;
  };
}

const retuningInnerFunction = parentFunction("Sharath");
retuningInnerFunction("Good Morning!");

//IIFE
const IIFEFunction = (function () {
  console.log("Hello i am executed immediately");
})();

//tips in array
const arr = ["Virtus", "Slavia", "City", "Ciaz"];
arr.at(-1); // by using arrayElement.at(-1) we can also find the last element as per the Modern ES2022 feature

//array methods

const carsArray = ["Virtus", "Slavia", "City", "Ciaz"];
console.log(carsArray, "Main cars array");

//push
carsArray.push("Verna");
console.log(carsArray, "After push");

//pop
carsArray.pop("Verna");
console.log(carsArray, "After pop");

//unshift
carsArray.unshift("Verna");
console.log(carsArray, "After unshift");

//shift
carsArray.shift("Verna");
console.log(carsArray, "After shift");

//includes
carsArray.includes("Verna");
console.log(carsArray.includes("Verna"), "Includes Status");

//indexOf
carsArray.indexOf(2);
console.log(carsArray.indexOf("City"), "Checking indexOf");

//forEach
carsArray.forEach((findCar, index) => {
  console.log(index, findCar);
});

//map

const mapUsers = [
  { name: "Alice", score: 45 },
  { name: "Bob", score: 60 },
  { name: "Charlie", score: 30 },
];

const updateScore = mapUsers.map((getScore) => {
  if (getScore.score < 50) {
    return { ...getScore, score: getScore.score + 10 };
  } else {
    return { ...getScore };
  }
});
console.log(updateScore);

//filter

const naturalNumberArray = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];

const getEvenNumbers = naturalNumberArray.filter((evenNumber) => {
  return evenNumber % 2 === 0;
});
console.log(getEvenNumbers);

//reduce

const onlyEvenNumbers = [2, 4, 6, 8, 10];

const reducedNumber = onlyEvenNumbers.reduce(
  (accumulatorValue, currentValue) => {
    console.log(
      `${accumulatorValue} + ${currentValue} = ${accumulatorValue + currentValue}`,
    );
    return accumulatorValue + currentValue;
  },
  0,
);

console.log(reducedNumber);

//using reduce to find the final value

const transactionsArray = [
  { amount: 100, currency: "INR" },
  { amount: 50, currency: "USD" },
  { amount: 200, currency: "INR" },
  { amount: 70, currency: "EUR" },
  { amount: 30, currency: "USD" },
];

const transactionDetails = transactionsArray.reduce(
  (accumulator, currentTransaction) => {
    const { amount, currency } = currentTransaction;
    accumulator[currency] = (accumulator[currency] || 0) + amount;
    return accumulator;
  },
  {},
);

console.log(transactionDetails);

//one more example to find quantity using reduce
const fruitsStore = ["apple", "banana", "apple", "orange", "apple"];

const findQuantity = fruitsStore.reduce((accumulator, currentFruit) => {
  //  accumulator[currentFruit] = (accumulator[currentFruit] || 0) + 1
  //  return accumulator

  if (accumulator[currentFruit]) {
    //if key exists → increment
    accumulator[currentFruit] = accumulator[currentFruit] + 1;
  } else {
    //else → initialize
    accumulator[currentFruit] = 1;
  }
  return accumulator;
}, {});
console.log(findQuantity);

//group the currencies with reduce and count later

const groupCurrencies = transactionsArray.reduce(
  (accumulator, transactions) => {
    const { amount, currency } = transactions;
    if (!accumulator[currency]) {
      accumulator[currency] = [];
    }
    accumulator[currency].push(transactions);

    return accumulator;
  },
  {},
);
console.log(groupCurrencies); // grouped the currencies

const currencyCount = Object.keys(groupCurrencies).reduce((acc, currency) => {
  acc[currency] = groupCurrencies[currency].length;
  return acc;
}, {});
console.log(currencyCount); // count of currencies using groupCurrencies object

//find method in javascript

const findArray = [
  { username: "Sumanth", featured: false },
  { username: "Sharath", featured: true },
  { username: "Sachin", featured: true },
  { username: "Aksah", featured: false },
];

const findElement = findArray.find((findItem) => {
  return findItem.featured;
});
console.log(findElement);

//some method

const someMatches = findArray.some((findMatch) => findMatch.featured);
console.log(someMatches);

// every method

const everyMatches = findArray.every((findMatch) => findMatch.featured);
console.log(everyMatches);

//slice

const sliceMethod = findArray.slice(1, 3);
console.log(sliceMethod);

//splice
const spliceMethod = [1, 4, 5, 6];
const removedReturn = spliceMethod.splice(1, 0, 2, 3);
console.log(removedReturn);
console.log(spliceMethod);

//sort
const sortArray = [
  { userName: "Sumanth", userAge: 27 },
  { userName: "Sharath", userAge: 22 },
  { userName: "Sachin", userAge: 29 },
  { userName: "Akshay", userAge: 20 },
];

const sortAge = sortArray.sort((a, b) => a.userAge - b.userAge);
console.log(sortArray);

//reverse

const numbersArray = [1, 2, 3, 4, 5];

const reverseMethod = numbersArray.reverse(); // this modifies the original array
console.log(reverseMethod);

//by using the spread operator we can avoid modify the original array

const mainNumberArray = [1, 2, 3, 4, 5];

const reversNoModification = [...mainNumberArray].reverse();
console.log(reversNoModification);
console.log(mainNumberArray); //it remains unchanged

//concat
const connectingArray1 = [1, 2, 3, 4, 5];
const connectingArray2 = [6, 7, 8, 9, 10];

const concatArrays = connectingArray1.concat(connectingArray2, 11, 12); //it also accept the values directly
const concatWithSpread = [...connectingArray1, ...connectingArray2, 11, 12]; // this also severs the same
console.log(concatArrays);

//join
const joinValues = ["apple", "banana", "cherry"];

const joinElements = joinValues.join(" - ");

console.log(joinElements);

//flat

const flatStoreArray = [
  ["HTML", "CSS", "Tailwind"],
  ["JavaScript"],
  ["Git", "GitHub"],
  ["React", "Redux"],
];
const flatArray = flatStoreArray.flat();
console.log(flatArray); // removed the nesting from

//set

const messedArray = [1, 1, 2, 3, 4, 5, 6, 6, 6, 7, 8];

const removedDuplicates = [...new Set(messedArray)];
console.log(removedDuplicates); //unique values are returned with new array

// removing the duplicate elements from the array with the help of Set or filter
const removeDuplicates = [1, 2, 2, 3, 4, 4, 5];

const removedCheck = [...new Set(removeDuplicates)];
console.log(removedCheck);

const getRemovedNumbers = removeDuplicates.filter((remove, index) => {
  console.log(remove, "Removing Value", index, "Index Value");
  return removeDuplicates.indexOf(remove) === index;
});
console.log(getRemovedNumbers);

//group the object properties

const objectUsers = [
  { name: "Sumanth", role: "admin" },
  { name: "Rahul", role: "user" },
  { name: "Amit", role: "admin" },
  { name: "Neha", role: "user" },
];

const groupUsers = objectUsers.reduce((accumulator, currentElement) => {
  const { name, role } = currentElement;
  if (!accumulator[role]) {
    accumulator[role] = [];
  }
  accumulator[role].push(currentElement);

  return accumulator;
}, {});

console.log(groupUsers);

//count the elements

const countFruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCounter = countFruits.reduce((accumulator, currentFruit) => {
  accumulator[currentFruit] = (accumulator[currentFruit] || 0) + 1;
  return accumulator;
}, {});

console.log(fruitCounter);

//Remove duplicate objects from an array.

const usersData = [
  { id: 1, name: "Sumanth" },
  { id: 2, name: "Rahul" },
  { id: 1, name: "Sumanth" },
  { id: 3, name: "Amit" },
];

const findUnique = usersData.filter((user, index, originalData) => {
  return (
    originalData.findIndex((uniqueUser) => uniqueUser.id === user.id) === index
  );
});
console.log(findUnique);

//Flatten an Array

const mainArray = [1, 2, [3, 4], [5, 6]];

//by using the flat

const flattenArray = mainArray.flat(Infinity);
console.log(flattenArray);

//by using the reduce and concat we flatten an array

const flatReduce = mainArray.reduce((accumulator, currentElement) => {
  if (Array.isArray(currentElement)) {
    return accumulator.concat(currentElement);
  }
  return accumulator.concat(currentElement);
}, []);

console.log(flatReduce);

//Find the Second Largest Number

const numbersArrayLargeElement = [10, 5, 8, 20, 15, 20];

//by using the sort (descending) method
const secondLargestNumber = [...new Set(numbersArrayLargeElement)].sort(
  (a, b) => b - a,
);
console.log(secondLargestNumber[1]);

//by using Math.max with find also we can return the same
const findSecondLarge = Math.max(...numbersArrayLargeElement);
const findSecond = secondLargestNumber.find(
  (values) => values < findSecondLarge,
);

console.log(findSecond);

//grouping odds and evens in the array using the reduce method
const numbersMessed = [1, 2, 3, 4, 5, 6];

const groupingArray = numbersMessed.reduce(
  (accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      accumulator.even.push(currentValue);
    } else {
      accumulator.odd.push(currentValue);
    }
    return accumulator;
  },
  { even: [], odd: [] },
);

console.log(groupingArray);

//group them based on the age

const usersArray = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mike", age: 25 },
];

const groupBasedOnAge = usersArray.reduce((accumulator, currentValue) => {
  accumulator[currentValue.age] = accumulator[currentValue.age] || [];
  accumulator[currentValue.age].push(currentValue.name);
  return accumulator;
}, {});

console.log(groupBasedOnAge);

//Use reduce() to find the largest number.

const numbersReduce = [5, 12, 8, 20, 3, 4];

const findNowLarge = numbersReduce.reduce((accumulator, currentValue) => {
  return accumulator > currentValue ? accumulator : currentValue;
});

console.log(findNowLarge);

//convert the array into a object

const userArray = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Mike" },
];

const covertToObject = userArray.reduce((accumulator, currentElement) => {
  accumulator[currentElement.id] = currentElement;
  return accumulator;
}, {});
console.log(covertToObject);

//Group users by age using reduce

const userDetailsArray = [
  { name: "John", age: 20 },
  { name: "Jane", age: 20 },
  { name: "Mike", age: 25 },
  { name: "Sara", age: 25 },
  { name: "Tom", age: 30 },
];

const groupByAge = userDetailsArray.reduce((acc, cur) => {
  if (!acc[cur.age]) {
    acc[cur.age] = acc[cur.age] || [];
  }
  acc[cur.age].push(cur.name);

  return acc;
}, {});

console.log(groupByAge);

//Challenge 2 — Extract Names into an Array, Convert this array of objects into an array of names.

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mike", age: 28 },
];

const covertToArray = users.reduce((acc, cur) => {
  return acc.concat(cur.name);
}, []);
console.log(covertToArray);

//Challenge 3 — Count Even and Odd Numbers

const numbersStore = [1, 2, 3, 4, 5, 6, 7, 8];

const countOddAndEven = numbersStore.reduce(
  (acc, cur) => {
    if (cur % 2 === 0) {
      acc.even++;
    } else {
      acc.odd++;
    }

    return acc;
  },
  { even: 0, odd: 0 },
);
console.log(countOddAndEven);

//Use reduce() to calculate the total price for each category.

const products = [
  { name: "Laptop", price: 50000, category: "electronics" },
  { name: "Phone", price: 30000, category: "electronics" },
  { name: "Shirt", price: 2000, category: "clothing" },
  { name: "Jeans", price: 3000, category: "clothing" },
  { name: "Rice", price: 1000, category: "grocery" },
];

const groupByPrice = products.reduce((accumulator, currentValue) => {
  const { name, price, category } = currentValue;
  accumulator[category] = (accumulator[category] || 0) + price;
  return accumulator;
}, {});

console.log(groupByPrice);

//Objects

const getCarDetails = {
  ["ownerName"]: "Sumanth", // we can also define the keys like this
  registerNo: "KA14SS1999", //common way to define the keys
  carModel: "Volkswagen Virtus GTI",
  pinCode: 577220,
  carDetails: {
    carBrand: "Volkswagen",
    model: "Virtus GTI",
    fuelType: "Petrol",
    color: "Pearl white",
  },
};

console.log(getCarDetails["carModel"]); //this way also we can access the object data
console.log(getCarDetails.carModel); //common way to access the object data

//object.keys

const keysArray = Object.keys(getCarDetails);
console.log("Array of keys: ", keysArray);

//object.values

const valuesArray = Object.values(getCarDetails);
console.log("Array of values: ", valuesArray);

//destructuring the object

const { ownerName, registerNo, carModel, carDetails } = getCarDetails;
console.log(carDetails); //carDetails object prints

//destructuring the array

const sedansArray = ["Virtus", "Slavia", "City", "Ciaz", "Verna"];

const [S, T, U, V, W] = sedansArray;
console.log(T); //Slavia

//spreading and expanding an array using spread operator

const moreSedans = [...sedansArray, "Superb", "Octiva", "Camry"];
console.log(moreSedans); // expanded the sedansArray

//spreading and expanding the object using spread operator

const moreDetailsOfCar = { ...getCarDetails, registeredCity: "Shivamogga" };
console.log(moreDetailsOfCar); //expanded the getCarDetails object

//optional chaining

console.log(moreDetailsOfCar?.bodyType); //undefined, used ?. to find the bodyType property but that property is not defined inside the object and still instead of throwing an error it returns undefined

//clone an object using spread Operator

const cloneUsingSpread = { ...moreDetailsOfCar };
// console.log(cloneUsingSpread)

//clone an object using Object.assign

const cloneUsingObjectAssign = Object.assign(moreDetailsOfCar);
// console.log(cloneUsingObjectAssign)

//rest operator

function additionalFunction(...restParameter) {
  console.log(restParameter); //multiple elements are passed as a argument by using the rest parameter converted into a single variable
  return restParameter.reduce((acc, cur) => acc + cur);
}
console.log(additionalFunction(2, 4, 6, 8, 10));

//shallow copy vs deep copy

//shallow copy

const firstOwnerDetails = {
  ownerName: "Sharath",
  ownerAge: 22,
  ownerAddress: {
    city: "Bangalore",
    pinCode: 560036,
  },
};

const secondOwnerDetails = {
  ...firstOwnerDetails,
  ownerName: "Sumanth",
  ownerAge: 27,
};
secondOwnerDetails.ownerAddress.city = "Thirthahalli";
secondOwnerDetails.ownerAddress.pinCode = 577220;
console.log(secondOwnerDetails, "Second Owner Details");
console.log(firstOwnerDetails, "First Owner Details");

//deep copy

const bikeOwnerDetails = {
  ownerName: "Sachin",
  ownerAge: 28,
  ownerAddress: {
    city: "Shivamogga",
    pinCode: 577330,
  },
};

// const secondBikeOwnerDetails = JSON.parse(JSON.stringify(bikeOwnerDetails))  // using json.parse(json.stringify()) deep copied
const secondBikeOwnerDetails = structuredClone(bikeOwnerDetails); //using structuredClone deep copied
secondBikeOwnerDetails.ownerName = "Sumanth";
secondBikeOwnerDetails.ownerAge = 27;
secondBikeOwnerDetails.ownerAddress.city = "Thirthahalli";
secondBikeOwnerDetails.ownerAddress.pinCode = 577220;
console.log("First Owner", bikeOwnerDetails);
console.log("Second Owner", secondBikeOwnerDetails);

//Object.entries() converts the object into an array along with that used forEach to run the loop

const getUserDetails = {
  userName: "Sumanth",
  userAge: 27,
  city: "Thirtahhalli",
};

const enterUserDetails = Object.entries(getUserDetails).forEach(
  ([key, value]) => {
    console.log(key, value);
  },
);

//hasOwnProperty()

console.log(getUserDetails.hasOwnProperty("userName"));

//Convert Object to Array

const fetchUserDetails = {
  name: "Sumanth",
  age: 25,
  city: "Bangalore",
};

const fetchUserEntries = Object.entries(fetchUserDetails);
console.log(fetchUserEntries);

//Convert Object Keys into Array
const fetchKeysArray = Object.keys(fetchUserDetails);
console.log(fetchKeysArray);

//Convert Object Values into Array
const fetchValues = Object.values(fetchUserDetails);
console.log(fetchValues);

//Count Properties in an Object
const fetchPropertiesCount = Object.keys(fetchUserDetails).length;
console.log(fetchPropertiesCount);

//Check if Property Exists
const fetchExist = fetchUserDetails.hasOwnProperty("age");
console.log(fetchExist);

//Loop Through an Object

for (let key in fetchUserDetails) {
  console.log(key, fetchUserDetails[key]);
}

Object.entries(fetchUserDetails).forEach(([key, value]) => {
  console.log(key, ":", value);
});

//Merge Two Objects

const firstObject = { a: 1 };
const secondObject = { b: 2 };

const mergeObjects = { ...firstObject, ...secondObject }; //spread Operator
console.log(mergeObjects);
const anotherMergeObject = Object.assign(firstObject, secondObject); //Object.assign
console.log(anotherMergeObject);

//Destructuring with Default Values
const defaultUser = {
  name: "Sumanth",
};

// console.log(({ name, age = 25 } = defaultUser));

//Removing Property with delete

const actualUser = {
  name: "Sumanth",
  age: 25,
  city: "Bangalore",
};

delete actualUser.age; //by using the delete keyword before the object name we can delete the property and modify the original object
console.log(actualUser);

//removing the property with destructuring

const actualUserRem = {
  name: "Sumanth",
  age: 25,
  city: "Bangalore",
};

const { city, ...restProperties } = actualUserRem;

console.log(restProperties);

//Object.freeze() used to lock the object

const lockeUserDetails = {
  userName: "Sumanth",
  userAge: 27,
  userCity: "Bangalore",
};
Object.freeze(lockeUserDetails);
// lockeUserDetails.userName = "Sharath"; //ignored because of the freeze

console.log(lockeUserDetails);

//Object.seal() partially lock the object not fully

const partiallyLockedUser = {
  userName: "Sharath",
  userAge: 21,
  userCity: "Bangalore",
};
Object.seal(partiallyLockedUser);
partiallyLockedUser.userName = "Sumanth";
// delete partiallyLockedUser.userAge; //ignored because of the seal
// partiallyLockedUser.pinCode = 577220; //ignored because of the seal

console.log(partiallyLockedUser);

//setTimeOut()

const setCallExecute = setTimeout(() => {
  console.log("Executed callback from setTimeOut");
}, 2000);

//promise

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data Received");
  } else {
    reject("Not Received");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//async/await

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 2000);
  });
}
console.log(getData());

async function fetchData() {
  const result = await getData();
  console.log(result);
}
fetchData();

//using async/await to call api

const apiUrl = `https://dummyjson.com/posts`;

async function fetchDataFromApi() {
  const getData = await fetch(apiUrl);
  const serveData = await getData.json();
  console.log(serveData);
}
fetchDataFromApi();

//without using the async/await calling the api

function fetchApiData() {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
fetchApiData();

//event loop
console.log("Start");

setTimeout(() => {
  console.log("Timer"); //it will be printed at the last, Even though delay is 0, it still waits for the call stack to be empty.
}, 0);

console.log("End");

//handle the error when fetch() only rejects on network errors, not HTTP errors like 404 or 500.

async function getPostsDetails() {
  try {
    const getPosts = await fetch(`https://dummyjson.com/posts/search?q=love`);

    if (!getPosts.ok) {
      throw new Error("Request Failed");
    }

    const responsePosts = await getPosts.json();
    console.log(responsePosts);
  } catch (error) {
    console.log(error);
  }
}

getPostsDetails();

//event bubbling

document.querySelector(".main-section").addEventListener("click", (e) => {
  console.log("main-section Clicked", "Event Bubbling");
});
document.querySelector(".section-parent").addEventListener("click", (e) => {
  console.log("section-parent Clicked", "Event Bubbling");
});
document.querySelector(".first-parent").addEventListener("click", (e) => {
  console.log("first-parent Clicked", "Event Bubbling");
});
document.querySelector("#button-element").addEventListener("click", (e) => {
  console.log("button-element Clicked", "Event Bubbling");
});

//event capturing
document.querySelector(".main-section").addEventListener(
  "click",
  () => {
    console.log("main-section", "Event Capturing");
  },
  true,
);
document.querySelector(".section-parent").addEventListener(
  "click",
  () => {
    console.log("section-parent", "Event Capturing");
  },
  true,
);
document.querySelector(".first-parent").addEventListener(
  "click",
  () => {
    console.log("first-parent", "Event Capturing");
  },
  true,
);
document.querySelector("#button-element").addEventListener(
  "click",
  () => {
    console.log("button-element", "Event Capturing");
  },
  true,
);

//event delegation

document
  .getElementById("listElementsParent")
  .addEventListener("click", (event) => {
    console.log(event.target.textContent); //pick the exact child element on every click
    event.stopImmediatePropagation();
  });

//debouncing

function debounceFunction(innerFunction, delay) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      innerFunction();
    }, delay);
  };
}

//event to triggers the screen size changes with debouncing
window.addEventListener(
  "resize",
  debounceFunction(() => {
    console.log(`${window.innerWidth} X ${window.innerHeight}`);
  }, 500),
);

//event to trigger the key press down with debouncing
const inputElementContent = document.getElementById("type-input");

inputElementContent.addEventListener(
  "keydown",
  debounceFunction(() => {
    console.log(inputElementContent.value);
  }, 500),
);

//counter function

let counterInitialValue = 0;

document.querySelector(".text-content-counter").innerText = counterInitialValue;

document.querySelector(".increase-counter").addEventListener("click", (e) => {
  document.querySelector(".text-content-counter").innerText =
    ++counterInitialValue;
});
document.querySelector(".decrease-counter").addEventListener("click", (e) => {
  document.querySelector(".text-content-counter").innerText =
    --counterInitialValue;
});

//toggle to turn dark mode

document.querySelector(".fa-moon").addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-moon")) {
    e.target.classList.add("fa-sun");
    e.target.classList.remove("fa-moon");
    document.querySelector("body").classList.add("dark-mode");
    document.querySelector("body").classList.remove("light-mode");
    localStorage.setItem("webTheme", "dark-mode");
  } else {
    e.target.classList.add("fa-moon");
    e.target.classList.remove("fa-sun");
    document.querySelector("body").classList.add("light-mode");
    document.querySelector("body").classList.remove("dark-mode");
    localStorage.setItem("webTheme", "light-mode");
  }
});

document.querySelector("body").classList.add(localStorage.getItem("webTheme"));

//this keyword used in object

const mainUserObject = {
  userName: "Sumanth",
  userAge: 27,
  greetingsShare(wishes) {
    console.log(`${wishes} ${this.userName}`);
    return this; //returns an object which is currently executing the function
  },
};

mainUserObject.greetingsShare("Hello Good Morning");

//this keyword directly inside the function
function normalFunction() {
  console.log(this); //this refers to the window here
}
normalFunction();

//arrow function with this keyword

const arrowNestedObject = {
  carBrand: "Volkswagen",
  carModel: "Virtus GTI",
  carDetails() {
    const innerArrowFunction = () => {
      console.log(this); //takes 'this' from the parent
    };
    innerArrowFunction();
  },

  /*
  carDetails: () => {
    console.log(this) //here it stared pointing 'this' as a window
  }
    */
};
arrowNestedObject.carDetails();

//memoization

function memoizedFunction() {
  let storedValue = {};

  return function (num) {
    if (storedValue[num]) {
      console.log("Cached value");
      return storedValue[num];
    } else {
      console.log("Calculating...");
      storedValue[num] = num;
      return storedValue[num];
    }
  };
}

const callBackMemory = memoizedFunction();
callBackMemory(2); //unique value
callBackMemory(4);
callBackMemory(2); //repeated so it's a cached value
callBackMemory(3);

//Currying example with named function

function firstFunction(a) {
  return function secondFunction(b) {
    return function thirdFunction(c) {
      console.log(a + b + c);
      a + b + c;
    };
  };
}
firstFunction(2)(4)(6);

//Currying example with arrow function

const curryingArrow = (a) => (b) => (c) => a + b + c;
curryingArrow(2)(4)(6);

//recursion

function giveGreetings() {
  console.log("Hello World!!");

  giveGreetings();
}

//bind

function greetingsBind(wishes) {
  console.log(`Hello ${this.userName} ${wishes}`);
  return `Hello ${this.userName} ${wishes}`;
}
const thisObject = { userName: "Sumanth", userAge: 27 };

const sendWishes = greetingsBind.bind(thisObject, "Good Morning!");
sendWishes(); //now the bind runs

//generator function

function* idGenerator() {
  let idNumber = 1;
  while (true) {
    yield idNumber++;
  }
}
const generateId = idGenerator();
// console.log(generateId.next().value) //1
// console.log(generateId.next().value) //2
// console.log(generateId.next().value) //3
// console.log(generateId.next().value) //4

for (let i = 1; i <= 4; i++) {
  //executes the call for 4 times
  console.log(generateId.next().value);
}

//execution

setOfQuestions.map((value, index) => {
  const faqSection = document.querySelector(".q-and-a");
  const snippetContainer = document.createElement("div");
  snippetContainer.classList.add("snippet")
  const questionElement = document.createElement("h3");
  const answerElement = document.createElement("p");
  faqSection.append(snippetContainer);
  snippetContainer.append(questionElement);
  snippetContainer.append(answerElement);
  snippetContainer.addEventListener("click", (e) => {
    answerElement.classList.toggle("show-answer")
  })
  return (
    (questionElement.innerText = `${value.questionId}. ${value.question}`),
    (answerElement.innerText = value.answer)
  );
});
