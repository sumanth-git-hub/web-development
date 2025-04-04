console.log('Set timeout and setInterval practice file')

setTimeout(`console.log('Hello World! in the top');
 console.log('Welcome to JavaScript in second line')`, 500)

//  clearTimeout
//  setTimeout(`console.log('Hello-4')`,4000)
//  setTimeout(`console.log('Hello-6')`,6000)  

// the above commented line should directly add in console to see the use of clearTimeout method we used to get return value over there 

// store the above written function with variable to see the use of clearTimeout by writing in code only

const setTimeoutvar1 = setTimeout(`console.log('Hello-1')`,1000)
const setTimeoutvar2 = setTimeout(`console.log('Hello-2')`,2000)
const setTimeoutvar3 = setTimeout(`console.log('Hello-3')`,3000)
setTimeout(function(){
    console.log('Hello-4')
},4000)

// clearTimeout(setTimeoutvar2) // it won't allow you to print the value of 'setTimeoutvar2'

// const setTimeoutCallBackFun = setTimeout(setTimeoutFun, 3000, 'Hello world!', 1999, 'Thirthahalli', {username: 'Sumanth S S', userAge: 25},['Toyota','VolksWagen']);
const setTimeoutCallBackFun = setTimeout(setTimeoutFun, 5000,);

function setTimeoutFun(){
    // console.log(arguments[2]) // this is the deprecated thing in javaScript so no need to use 
    console.log('Hello World!! Higher order function with setTimeOut')
}


// the below code is for setTimeInterval 

const setIntervalCallBackFun = setInterval(setInterval1,6000)

function setInterval1() {
    console.log('Hello World!! written the function with the help of setInterval')
}

clearInterval(setIntervalCallBackFun) // this is the method used to stop the setInterval function

console.log('This line will be in the top because it is synchronous code and the function written with the help of setTimeout and setInterval are asynchronous code')
