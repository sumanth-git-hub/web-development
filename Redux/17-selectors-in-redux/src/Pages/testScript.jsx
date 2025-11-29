import React from "react";

// here i wrote how to convert the if else condition into switch statement and convert the switch statement into object format

const testScript = () => {
  return <div>testScript</div>;
};

export default testScript;

// currying in javascript

export const curryingFunction = (a) => (b) => (c) =>  a * b * c
// console.log(curryingFunction(2)(4)(6)) // 48

//currying reuseable function
function multiply(a) {
  return function (b) {
    return a * b
  }
}

const multiplyByFour = multiply(4)
// console.log("Multiple by Four: ",multiplyByFour(5))

// infinite curried function

function infiniteMultiply(a) {
  return function (b) {
    if(b){
      return infiniteMultiply(a * b) // recursion function
    }
    return a
  }
}

// console.log("Infinite function: ", infiniteMultiply(4)(2)(2)())


