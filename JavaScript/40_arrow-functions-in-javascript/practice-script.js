console.log('All about practicing arrow function and others')


// function declaration

console.log(newFunction(4,4))  // power of hoisting the callback can be placed above the function
function newFunction(a,b){
    return a + b
}

// function expression

const functionExp = function expressionFun(c,d){
    return c-d
}
console.log(functionExp(8,4))

console.dir(functionExp) // just to display it is not a anonymous function


// arrow function expression

const arrowFunction = (e,f) =>{
    return e * f // explicit return way
}
console.log(arrowFunction(2,2))


const implicitArrowFun = (g,h) => g/h  // implicit return way (whe we have only one value to return)
console.log(implicitArrowFun(16,4))  

// practice on session 
const addFunction = (i,j) => i + j
console.log(addFunction(2,2))


const setTime = setTimeout(() => {
    console.log(12 + 12,'Value is coming from settimeout')
}, 1000);

// clearTimeout(setTime)


const setInt = setInterval(() => {
    console.log(12 + 12, 'Value is coming from setinterval')
}, 1000);

clearTimeout(setInt)

// other practice sessions

const randomNum = () => Math.random()
console.log(randomNum ())


const randomWithFloor = () => Math.random() * 10  // by writing like this the value won't go beyond 10 
console.log(randomWithFloor())

//tested with set interval to see the values
const randomWithFloor2 = setInterval(() => console.log( Math.random() * 10),1000)  // by writing like this the value won't go beyond 10 
clearInterval(randomWithFloor2)

 // by writing like this the value won't go beyond 10 (round figure value we will get)
const mathFloorWithRandom = () => (
    Math.floor(Math.random() * 10)
)
console.log(mathFloorWithRandom())