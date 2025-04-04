console.log('Practice of how stack works')
debugger
const userName = 'Sumanth S S'

function stackOverflow(){
    console.log('Hello Wolrd!!')
    // stackOverflow()  // Recursion is a process in which a function calls itself until a terminating condition is found
    add1(2,2)
    return userName
}
stackOverflow()

function add1(a,b){
    subtract(14,2)
    return a + b
}
function subtract(c,d){
    multiplication(4,4)
    return c - d
}
function multiplication(e,f){
    division(64,8)
    return e * f
}
function division(g,h){
    return g / h
}