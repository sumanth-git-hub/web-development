// debugger

const userName = 'Sumanth'
let userAge = 25

console.log(userName,'&', userAge)

sayHello()

// function sayHello(a,b) {
function sayHello() {
    const a = 3
    const b = 3
    add2(4,4)
    return a + b
}
// sayHello(3,3)

function add2(x,y){
    add3(2,2)
    return x + y
}

function add3(s,p){
    return s + p
}
console.log('Program Ended')