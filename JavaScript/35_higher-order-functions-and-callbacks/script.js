console.log('Higher Order Functions and Callbacks in JavaScript')

// higher order function
function a(b) {
    // console.log(typeof b)
    // console.log(b)
    console.dir(b)
    b() // b is not a function error we use to get in normal method when we call but when we write higher order function then we can able to see the value of b
}

// a('Hello') // ho we can pass string as a parameter
// a({userName: 'Sumanth', userAge: 25})  // how we can pass object as a parameter
// a([1999,2004]) // how we can pass array as a parameter

// console.log(a) // it shows the function as same as written to avoid this thing we should use dir

// console.dir(a)

// a.userAge = 27
// a.userName = 'Sharath' // we can insert the key value pair to (a) and able to see


// function sayHi() {
//     console.dir('Hello World! in second function')
// }

// a(sayHi)

// sayHi.username = 'Sumanth'
// sayHi.userAge = 25

// we can also write the argument function in named function style like below


//call back function
a(function sayHi() {
   console.dir('Hello World! in second function')
   sayHi.username = 'Sumanth'
   sayHi.userAge = 25
})

// writing as anonymous function  
// a(function() {
//     console.dir('Hello World! in second function')
//  })
