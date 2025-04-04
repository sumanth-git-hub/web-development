console.log('all about arrow function')

// function declaration

console.log(functionDec(4,4))
function functionDec(a,b) {
    return a + b
}



// function expression

const functionExp = function(a,b) {
    return a - b
}
console.log(functionExp(8,4))
// console.dir(functionExp)


// Arrow function expression

const arrowFun = (num) => {  // explicit return with this way of write a arrow function 
    return num * num
}
console.log(arrowFun(8))

const arrowFun1 = (num) => num * num   //implicit return with this way of write a arrow function 
console.log(arrowFun1(4))

const add = (s,p) => s + p
console.log(add(2,2))


setTimeout(() => {  // the value will be available on console after 2 seconds
    console.log('Hello World!')
}, 2000)

const randomNum = () => Math.random()
console.log(randomNum()) // always shows the random number

const randomNumber = () => (
    Math.floor(Math.random() * 10) + 1
)
console.log(randomNumber())  // always displays the results within 1 to 10