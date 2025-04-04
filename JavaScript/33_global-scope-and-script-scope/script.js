// debugger

const userName = 'Sumanth'
let userAge = 25
var a = 44

function add() {
   const userName = 'Sharath'
   const x = 2
   const y = 4
    console.log(x + y)
    console.log(userName)
}
add()

function addYes() {
   const userName = 'Babu'
   const s = 12
   const p = 14
    console.log(s + p)
    console.log(userName)  //we can only access the value inside of the function 
}
// console.log(s + p)  // we can't access the value outside of the block like this, in function
addYes()

console.log(userName)
console.log('Program ended')