
// function declaration
function add() {
    let sum = 10
for(let i = 0; i < arguments.length; ++i){
    // console.log(i +1,arguments[i])
    sum += arguments[i]
}
    return sum
}
console.log(add(2,4,6,4,8,10))


let number = 10
number += 2
// console.log(number)
number += 4
// console.log(number)
number += 6
// console.log(number)
number += 4
// console.log(number)
number += 8
// console.log(number)
number += 10
console.log(number)


// function expression

const add1 = function() {
    let sum = 50
for(let i = 0; i < arguments.length; ++i){
    sum += arguments[i]
}
    return sum
}
console.log(add1(2,4,6,4,8,10))



// arrow function expression

const add0 = (...num) => {  // if we use arrow function expression we get the 'arguments is not defined' error so we use 'rest parameter' method
    let sum = 10
for(let i = 0; i < num.length; ++i){
    // console.log(i +1,arguments[i])
    sum += num[i]
}
    return sum
}
console.log(add0(2,4,6,4,8,10))
